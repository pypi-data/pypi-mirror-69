import re

class mitre_rules():
    def __init__(self):
        self.oid = []
        self.tactic = 'Execution'
        self.tid = 'T1220'
        self.name = 'XSL Script Processing'
        self.description = '''Uses XSL Script files to bypass
                             application whitelisting defenses'''

    def run_rules(self, bundles):
        cnt = 0
        for entry in bundles['objects']:
            if entry['type'] == 'indicator':
                if re.search('process:command_line (.*msxsl(\.exe)?.+(\.xsl)|.*wmic.+(\.xsl))', entry['pattern'], re.IGNORECASE):
                    self.oid.append(entry['id'])
                    cnt += 1
                    break
        if cnt != 0:
            return self
        else:
            return False