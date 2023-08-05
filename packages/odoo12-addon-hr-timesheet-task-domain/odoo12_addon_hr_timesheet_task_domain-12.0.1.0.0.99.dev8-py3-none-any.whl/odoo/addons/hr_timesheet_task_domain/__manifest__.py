# Copyright 2016 Tecnativa - Antonio Espinosa
# Copyright 2016 Tecnativa - Sergio Teruel
# Copyright 2016-2018 Tecnativa - Pedro M. Baeza
# Copyright 2018 Tecnativa - Ernesto Tejeda
# Copyright 2019 Brainbean Apps (https://brainbeanapps.com)
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl.html).

{
    'name': 'Task Log: limit Task by Project',
    'version': '12.0.1.0.0',
    'category': 'Human Resources',
    'website': 'https://github.com/OCA/hr-timesheet',
    'author':
        'Tecnativa, '
        'Brainbean Apps, '
        'Odoo Community Association (OCA)',
    'license': 'AGPL-3',
    'installable': True,
    'application': False,
    'summary': (
        'Limit task selection to tasks on currently-selected project'
    ),
    'depends': [
        'hr_timesheet',
    ],
}
