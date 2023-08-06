import re

class mitre_rules():
    def __init__(self):
        self.oid = []
        self.tactic = 'Defensive Evasion'
        self.tid = 'T1191'
        self.name = 'CMSTP'
        self.description = '''Uses cmstp.exe to execute malicious script to evade detection'''

    def run_rules(self, bundles):
        cnt = 0
        for entry in bundles['objects']:
            if entry['type'] == 'indicator':
                if re.search('(process:command_line\s.*cmstp(\.exe)?\s.+|process:name\s.+\'cmstp\.exe\')', entry['pattern'], re.IGNORECASE):
                    if re.search('process:command_line\s.+cmstp(\.exe)?\s\/s', entry['pattern'], re.IGNORECASE):
                        self.oid.append(entry['id'])
                        cnt += 1
                        break
        if cnt != 0:
            return self
        else:
            return False