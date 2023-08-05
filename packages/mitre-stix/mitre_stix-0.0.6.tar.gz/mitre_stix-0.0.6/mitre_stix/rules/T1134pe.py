import re

class mitre_rules():
    def __init__(self):
        self.oid = []
        self.tactic = 'Privilege Escalation'
        self.tid = 'T1134'
        self.name = 'Access Token Manipulation'
        self.description = '''Manipulate access tokens to make a running process appear as though it belongs to someone other than the user that started the process'''
        
    def run_rules(self, bundles):
        cnt = 0
        for entry in bundles['objects']:
            if entry['type'] == 'indicator':
                if re.search('process:command_line .*runas \/user\:', entry['pattern']):
                    self.oid.append(entry['id'])
                    cnt += 1
                    break
        if cnt != 0:
            return self
        else:
            return False