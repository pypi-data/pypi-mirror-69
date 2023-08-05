"""DMARC (Domain-based Message Authentication, Reporting & Conformance)
This module allows an application to parse and evaluate email authentication policy, 
to application supplied TXT RR, SPF and DKIM results.

Typical Usage:

    >>> import dmarc
    
    # represent verified SPF and DKIM status
    >>> aspf = dmarc.SPF(domain='news.example.com', result=dmarc.SPF_PASS)
    
    >>> adkim = dmarc.DKIM(domain='example.com', result=dmarc.DKIM_PASS)
    
    >>> d = dmarc.DMARC()
    
    # parse policy TXT RR
    >>> p = d.parse_record(record='v=DMARC1; p=reject;', domain='example.com')
    
    # evaluate policy
    >>> r = d.get_result(p, spf=aspf, dkim=adkim)
    
    # check result
    >>> r.result == dmarc.POLICY_PASS
    True
    
    # check disposition
    >>> r.disposition == dmarc.POLICY_DIS_NONE
    True
    
    >>> r.as_dict()
    {'record': {
    'identifiers': {'header_from': 'example.com'}, 
    'auth_results': {
    'dkim': {'domain': 'example.com', 'result': 'pass'}, 
    'spf': {'domain': 'news.example.com', 'result': 'pass'}}, 
    'row': {
    'count': 1, 
    'policy_evaluated': {'spf': 'pass', 'dkim': 'pass', 'disposition': 'none'}}}, 
    'policy_published': {'adkim': 'r', 'domain': 'example.com', 'aspf': 'r', 'pct': 100, 'p': 'reject'}}
"""

__version__ = '1.0.2'

import re

SPF_PASS = 0
SPF_NEUTRAL = 1
SPF_FAIL = 2
SPF_TEMPFAIL = 3
SPF_PERMFAIL = 4
SPF_SOFTFAIL = 5

DKIM_PASS = 0
DKIM_FAIL = 1
DKIM_TEMPFAIL = 2
DKIM_PERMFAIL = 3
DKIM_NEUTRAL = 4

POLICY_PASS = 0
POLICY_FAIL = 1
POLICY_DIS_NONE = 2
POLICY_DIS_REJECT = 3
POLICY_DIS_QUARANTINE = 4
POLICY_SPF_ALIGNMENT_PASS = 5
POLICY_SPF_ALIGNMENT_FAIL = 6
POLICY_DKIM_ALIGNMENT_PASS = 7
POLICY_DKIM_ALIGNMENT_FAIL = 8

RECORD_P_UNSPECIFIED = None
RECORD_P_NONE = 'n'
RECORD_P_REJECT = 'r'
RECORD_P_QUARANTINE = 'q'
RECORD_A_UNSPECIFIED = None
RECORD_A_RELAXED = 'r'
RECORD_A_STRICT = 's'
RECORD_RF_UNSPECIFIED = 0x0
RECORD_RF_AFRF = 0x1
RECORD_RF_IODEF = 0x2
RECORD_FO_UNSPECIFIED = 0x0
RECORD_FO_0 = 0x1
RECORD_FO_1 = 0x2
RECORD_FO_D = 0x4
RECORD_FO_S = 0x8

def reverse_domain(domain):
    return '.'.join(reversed(domain.split('.')))

class Error(Exception):
    pass

class RecordSyntaxError(Error):
    pass

class SPF(object):
    def __init__(self, domain, result):
        """Represent a single domain SPF verification status
        
        Args:
            domain: Domain part of RFC5321.MailFrom
            result: one of SPF_PASS, SPF_FAIL, SPF_SOFTFAIL, SPF_NEUTRAL, SPF_TEMPFAIL, SPF_PERMFAIL
        """
        self.domain = domain
        self.result = result

class DKIM(object):
    def __init__(self, domain, result, selector=None):
        """Represent a single domain DKIM verification status
        
        Args:
            domain: Domain value of the signature header d= tag
            result: one of DKIM_PASS, DKIM_FAIL, DKIM_NEUTRAL, DKIM_TEMPFAIL, DKIM_PERMFAIL
            selector: Selector value of the signature header s= tag
        """
        self.domain = domain
        self.result = result
        self.selector = selector

class Policy(object):
    """Policy object keeps relevant information about a single parsed 
    policy:
    
    v: Protocol version
    p: Policy for organizational domain
    sp: Policy for subdomains of the OD
    adkim: Alignment mode for DKIM
    aspf: Alignment mode for SPF
    pct: Percentage of messages subjected to filtering
    ri: Reporting interval
    rf: Reporting format
    rua: Reporting URI of aggregate reports
    ruf: Reporting URI for forensic reports
    fo: Error reporting policy
    domain: Domain part of RFC5322.From header
    org_domain: Organizational Domain of the sender domain
    ip_addr: Source IP address
    """
    def __init__(self, version, domain, org_domain=None, ip_addr=None):
        self.v = version
        self.p = RECORD_P_UNSPECIFIED
        self.sp = RECORD_P_UNSPECIFIED
        self.adkim = RECORD_A_UNSPECIFIED
        self.aspf = RECORD_A_UNSPECIFIED
        self.pct = -1
        self.ri = -1
        self.rf = RECORD_RF_UNSPECIFIED
        self.rua = []
        self.ruf = []
        self.fo = RECORD_FO_UNSPECIFIED
        self.domain = domain
        self.org_domain = org_domain
        self.ip_addr = ip_addr

class Result(object):
    """Result object keeps policy evaluated 
    results:
    
    dkim:         DKIM identifier alignment result,
                  one of POLICY_DKIM_ALIGNMENT_PASS, POLICY_DKIM_ALIGNMENT_FAIL
    
    spf:          SPF identifier alignment result,
                  one of POLICY_SPF_ALIGNMENT_PASS, POLICY_SPF_ALIGNMENT_FAIL
                  
    result:       Policy evaluated result,
                  one of POLICY_PASS, POLICY_FAIL
                  
    disposition:  Policy to enforce,
                  one of POLICY_DIS_NONE, POLICY_DIS_REJECT, POLICY_DIS_QUARANTINE
    
    policy:       Policy object
    
    aspf:         SPF object
    
    adkim:        DKIM object
    """
    def __init__(self, policy, aspf, adkim):
        self.dkim = None
        self.spf = None
        self.result = None
        self.disposition = None
        self.policy = policy
        self.aspf = aspf
        self.adkim = adkim
    
    def as_dict(self):
        policy_published = {}
        policy_evaluated = {}
        row = {}
        identifiers = {}
        auth_results = {}
        dkim = {}
        spf = {}
        
        policy_published['domain'] = self.policy.domain
        policy_published['adkim'] = self.policy.adkim
        policy_published['aspf'] = self.policy.aspf
        if self.policy.p == RECORD_P_NONE:
            policy_published['p'] = 'none'
        elif self.policy.p == RECORD_P_QUARANTINE:
            policy_published['p'] = 'quarantine'
        elif self.policy.p == RECORD_P_REJECT:
            policy_published['p'] = 'reject'
        
        if self.policy.sp == RECORD_P_NONE:
            policy_published['sp'] = 'none'
        elif self.policy.sp == RECORD_P_QUARANTINE:
            policy_published['sp'] = 'quarantine'
        elif self.policy.sp == RECORD_P_REJECT:
            policy_published['sp'] = 'reject'
        
        policy_published['pct'] = self.policy.pct
        
        if self.disposition == POLICY_DIS_NONE:
            policy_evaluated['disposition'] = 'none'
        elif self.disposition == POLICY_DIS_QUARANTINE:
            policy_evaluated['disposition'] = 'quarantine'
        elif self.disposition == POLICY_DIS_REJECT:
            policy_evaluated['disposition'] = 'reject'
        
        if self.dkim == POLICY_DKIM_ALIGNMENT_PASS:
            policy_evaluated['dkim'] = 'pass'
        elif self.dkim == POLICY_DKIM_ALIGNMENT_FAIL:
            policy_evaluated['dkim'] = 'fail'
        
        if self.spf == POLICY_SPF_ALIGNMENT_PASS:
            policy_evaluated['spf'] = 'pass'
        elif self.spf == POLICY_SPF_ALIGNMENT_FAIL:
            policy_evaluated['spf'] = 'fail'
        
        if self.policy.ip_addr:
            row['source_ip'] = self.policy.ip_addr
        
        row['count'] = 1
        row['policy_evaluated'] = policy_evaluated
        
        identifiers['header_from'] = self.policy.domain
        
        if self.adkim:
            dkim['domain'] = self.adkim.domain
            if self.adkim.result == DKIM_FAIL:
                dkim['result'] = 'fail'
            elif self.adkim.result == DKIM_NEUTRAL:
                dkim['result'] = 'neutral'
            elif self.adkim.result == DKIM_PASS:
                dkim['result'] = 'pass'
            elif self.adkim.result == DKIM_PERMFAIL:
                dkim['result'] = 'permerror'
            elif self.adkim.result == DKIM_TEMPFAIL:
                dkim['result'] = 'temperror'
            elif self.adkim.result is None:
                dkim['result'] = 'none'
            
            if self.adkim.selector:
                dkim['selector'] = self.adkim.selector
            
            auth_results['dkim'] = dkim
        
        if self.aspf:
            spf['domain'] = self.aspf.domain
            if self.aspf.result == SPF_FAIL:
                spf['result'] = 'fail'
            elif self.aspf.result == SPF_NEUTRAL:
                spf['result'] = 'neutral'
            elif self.aspf.result == SPF_PASS:
                spf['result'] = 'pass'
            elif self.aspf.result == SPF_PERMFAIL:
                spf['result'] = 'permerror'
            elif self.aspf.result == SPF_SOFTFAIL:
                spf['result'] = 'softfail'
            elif self.aspf.result == SPF_TEMPFAIL:
                spf['result'] = 'temperror'
            elif self.aspf.result is None:
                spf['result'] = 'none'
            
            auth_results['spf'] = spf
        
        return {
            'policy_published':policy_published,
            'record':{
                'row':row,
                'identifiers':identifiers,
                'auth_results':auth_results
            }
        }        

class DMARC(object):
    def __init__(self, publicsuffix=None):
        """The DMARC constructor accepts PublicSuffixList object,
        and (if given) will be used for determining Organizational Domain
        """
        self.publicsuffix = publicsuffix
    
    def get_result(self, policy, spf=None, dkim=None):
        """Policy evaluation
        
        Args:
            policy: Policy object
            spf: SPF object
            dkim: DKIM object
        
        Returns:
            Result object
        """
        ret = Result(policy, aspf=spf, adkim=dkim)
        ret.dkim = POLICY_DKIM_ALIGNMENT_FAIL
        ret.spf = POLICY_SPF_ALIGNMENT_FAIL
        ret.result = POLICY_FAIL
        
        if dkim and dkim.result == DKIM_PASS:
            if self.check_alignment(policy.domain, dkim.domain, policy.adkim, self.publicsuffix):
                ret.dkim = POLICY_DKIM_ALIGNMENT_PASS
        
        if spf and spf.result == SPF_PASS:
            if self.check_alignment(policy.domain, spf.domain, policy.aspf, self.publicsuffix):
                ret.spf = POLICY_SPF_ALIGNMENT_PASS
        
        if ret.spf == POLICY_SPF_ALIGNMENT_PASS or ret.dkim == POLICY_DKIM_ALIGNMENT_PASS:
            ret.result = POLICY_PASS
            ret.disposition = POLICY_DIS_NONE
            
            return ret
        
        if policy.org_domain and policy.sp != RECORD_P_UNSPECIFIED:
            if policy.sp == RECORD_P_REJECT:
                ret.disposition = POLICY_DIS_REJECT
            
            elif policy.sp == RECORD_P_QUARANTINE:
                ret.disposition = POLICY_DIS_QUARANTINE
            
            elif policy.sp == RECORD_P_NONE:
                ret.disposition = POLICY_DIS_NONE
            
            return ret
            
        if policy.p == RECORD_P_REJECT:
            ret.disposition = POLICY_DIS_REJECT
        
        elif policy.p == RECORD_P_QUARANTINE:
            ret.disposition = POLICY_DIS_QUARANTINE
        
        elif policy.p == RECORD_P_NONE:
            ret.disposition = POLICY_DIS_NONE
        
        return ret
    
    def check_alignment(self, fd, ad, mode, publicsuffix=None):
        if not all((fd, ad, mode)):
            raise ValueError
        
        rev_fd = reverse_domain(fd.lower()) + '.'
        rev_ad = reverse_domain(ad.lower()) + '.'
        
        if rev_ad == rev_fd:
            return True
        
        if rev_fd[:len(rev_ad)] == rev_ad and mode == RECORD_A_RELAXED:
            return True
        
        if rev_ad[:len(rev_fd)] == rev_fd and mode == RECORD_A_RELAXED:
            return True
        
        if publicsuffix:
            rev_ad = reverse_domain(publicsuffix.get_public_suffix(ad.lower())) + '.'
            
            if rev_ad == rev_fd:
                return True
            
            if rev_fd[:len(rev_ad)] == rev_ad and mode == RECORD_A_RELAXED:
                return True
            
            if rev_ad[:len(rev_fd)] == rev_fd and mode == RECORD_A_RELAXED:
                return True
        
        return False
    
    def parse_record(self, record, domain, org_domain=None, ip_addr=None):
        """Parse DMARC TXT RR
        
        Args:
            record: TXT RR value
            domain: Domain part of RFC5322.From header
            org_domain: Organizational Domain of the sender domain
            ip_addr: Source IP address
        
        Returns:
            Policy object
        """
        
        # The record must start with "v=DMARC1"
        # and the string "DMARC" is the only portion that is case-sensitive...
        pr = re.compile(r'^\s*([^=\s]+)\s*=(.*)$')
        parts = record.split(';')
        if len(parts) < 2:
            raise RecordSyntaxError
        
        part = parts[0].strip()
        if not part:
            raise RecordSyntaxError
        
        res = pr.match(part)
        try:
            tag = res.group(1).strip().lower()
            value = res.group(2).strip()
        except AttributeError:
            raise RecordSyntaxError
        
        if tag != 'v' or value != 'DMARC1':
            raise RecordSyntaxError
            
        policy = Policy('DMARC1', domain, org_domain, ip_addr)
        for part in parts:
            part = part.strip()
            if not part:
                continue
            
            res = pr.match(part)
            try:
                tag = res.group(1).strip().lower()
                value = res.group(2).strip().lower()
            except AttributeError:
                raise RecordSyntaxError
            
            if tag == 'p':
                if 'none'.startswith(value):
                    policy.p = RECORD_P_NONE
                    
                elif 'reject'.startswith(value):
                    policy.p = RECORD_P_REJECT
                    
                elif 'quarantine'.startswith(value):
                    policy.p = RECORD_P_QUARANTINE
                    
                else:
                    raise RecordSyntaxError
                
            elif tag == 'sp':
                if 'none'.startswith(value):
                    policy.sp = RECORD_P_NONE
                    
                elif 'reject'.startswith(value):
                    policy.sp = RECORD_P_REJECT
                    
                elif 'quarantine'.startswith(value):
                    policy.sp = RECORD_P_QUARANTINE
                    
                else:
                    raise RecordSyntaxError
            
            elif tag == 'adkim':
                if 'relaxed'.startswith(value):
                    policy.adkim = RECORD_A_RELAXED
                
                elif 'strict'.startswith(value):
                    policy.adkim = RECORD_A_STRICT
                
                else:
                    raise RecordSyntaxError
            
            elif tag == 'aspf':
                if 'relaxed'.startswith(value):
                    policy.aspf = RECORD_A_RELAXED
                
                elif 'strict'.startswith(value):
                    policy.aspf = RECORD_A_STRICT
                
                else:
                    raise RecordSyntaxError
            
            elif tag == 'pct':
                try:
                    policy.pct = int(value)
                except ValueError:
                    raise RecordSyntaxError
                
                if policy.pct < 0 or policy.pct > 100:
                    raise RecordSyntaxError
            
            elif tag == 'ri':
                try:
                    policy.ri = int(value)
                except ValueError:
                    raise RecordSyntaxError
            
            elif tag == 'rf':
                for x in value.split(','):
                    if 'afrf'.startswith(x):
                        policy.rf |= RECORD_RF_AFRF
                    
                    elif 'iodef'.startswith(x):
                        policy.rf |= RECORD_RF_IODEF
                    
                    else:
                        raise RecordSyntaxError
            
            elif tag == 'rua':
                policy.rua = value.split(',')
            
            elif tag == 'ruf':
                policy.ruf = value.split(',')
            
            elif tag == 'fo':
                for x in value.split(':'):
                    if x == '0':
                        policy.fo |= RECORD_FO_0
                    
                    elif x == '1':
                        policy.fo |= RECORD_FO_1
                    
                    elif x == 'd':
                        policy.fo |= RECORD_FO_D
                    
                    elif x == 's':
                        policy.fo |= RECORD_FO_S
                    
                    else:
                        raise RecordSyntaxError
        
        
        if policy.p == RECORD_P_UNSPECIFIED:
            raise RecordSyntaxError
        
        if policy.adkim == RECORD_A_UNSPECIFIED:
            policy.adkim = RECORD_A_RELAXED
        
        if policy.aspf == RECORD_A_UNSPECIFIED:
            policy.aspf = RECORD_A_RELAXED
        
        if policy.pct < 0:
            policy.pct = 100
        
        if policy.rf == RECORD_RF_UNSPECIFIED:
            policy.rf = RECORD_RF_AFRF
        
        if policy.ri < 0:
            policy.ri = 86400
        
        if policy.fo == RECORD_FO_UNSPECIFIED:
            policy.fo = RECORD_FO_0
        
        return policy
    