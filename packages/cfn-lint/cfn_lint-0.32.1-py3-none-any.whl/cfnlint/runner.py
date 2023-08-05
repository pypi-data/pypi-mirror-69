"""
Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
"""
import logging
from cfnlint.template import Template
from cfnlint.transform import Transform

LOGGER = logging.getLogger(__name__)


class Runner(object):
    """Run all the rules"""

    def __init__(
            self, rules, filename, template, regions, verbosity=0, mandatory_rules=None):

        self.rules = rules
        self.filename = filename
        self.verbosity = verbosity
        self.mandatory_rules = mandatory_rules or []
        self.cfn = Template(filename, template, regions)

    def transform(self):
        """Transform logic"""
        LOGGER.debug('Transform templates if needed')
        sam_transform = 'AWS::Serverless-2016-10-31'
        matches = []
        transform_declaration = self.cfn.template.get('Transform', [])
        transform_type = transform_declaration if isinstance(
            transform_declaration, list) else [transform_declaration]
        # Don't call transformation if Transform is not specified to prevent
        # useless execution of the transformation.
        # Currently locked in to SAM specific
        if sam_transform not in transform_type:
            return matches
        # Save the Globals section so its available for rule processing
        self.cfn.transform_pre['Globals'] = self.cfn.template.get('Globals', {})
        transform = Transform(self.filename, self.cfn.template, self.cfn.regions[0])
        matches = transform.transform_template()
        self.cfn.template = transform.template()
        return matches

    def run(self):
        """Run rules"""
        LOGGER.info('Run scan of template %s', self.filename)
        matches = []
        if self.cfn.template is not None:
            matches.extend(
                self.rules.run(
                    self.filename, self.cfn))

        # uniq the list of incidents and filter out exceptions from the template
        directives = self.cfn.get_directives()
        return_matches = []
        for match in matches:
            if not any(match == u for u in return_matches):
                if match.rule.id not in directives:
                    return_matches.append(match)
                else:
                    for mandatory_rule in self.mandatory_rules:
                        if match.rule.id.startswith(mandatory_rule):
                            return_matches.append(match)
                            break
                    else:
                        for directive in directives.get(match.rule.id):
                            if directive.get('start') <= match.linenumber <= directive.get('end'):
                                break
                        else:
                            return_matches.append(match)
        return return_matches
