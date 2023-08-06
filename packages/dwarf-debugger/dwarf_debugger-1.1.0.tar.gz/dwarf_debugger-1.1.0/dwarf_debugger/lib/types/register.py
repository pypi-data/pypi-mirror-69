"""
    Dwarf - Copyright (C) 2018-2020 Giovanni Rocca (iGio90)

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>
"""


class Register(object):
    def __init__(self, register_name, register_data):
        self.name = register_name
        self.value = int(register_data['value'], 16)
        self.is_pointer = register_data['isValidPointer']

        self.telescope_type = -1
        self.telescope_value = None

        self.symbol_name = None
        self.symbol_module_name = None

        self.instruction_size = 0
        self.instruction_groups = []
        self.thumb = False

        if self.is_pointer:
            self.telescope_type = register_data['telescope'][0]
            self.telescope_value = register_data['telescope'][1]
            if self.telescope_type > 0:
                self.telescope_value = int(self.telescope_value, 16)

        if 'symbol' in register_data:
            self.symbol_name = register_data['symbol']['name']
            self.symbol_module_name = register_data['symbol']['moduleName']

        if 'instruction' in register_data:
            self.instruction_size = register_data['instruction']['size']
            self.instruction_groups = register_data['instruction']['groups']
            self.thumb = register_data['instruction']['thumb']
