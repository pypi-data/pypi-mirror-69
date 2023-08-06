"""
Element types pyansys can parse:

LINK1
SOLID5
PLANE42
BEAM44
SOLID45
PLANE82
SOLID92
SOLID95
SURF154
LINK180
SHELL181
PLANE182
PLANE183
SOLID185
SOLID186
SOLID187
BEAM188
MESH200
- KEYOPT 8 and above
PLANE223
SOLID226

To suggest an additional element type, open an issue at
https://github.com/akaszynski/pyansys/issues

"""
valid_types = ['1',   # LINK1
               '5',   # SOLID5
               # '41',  # SHELL41 (legacy of SHELL181)
               '42',  # PLANE42 (legacy of PLANE182)
               '44',  # SOLID44
               '45',  # SOLID45
               '55',  # PLANE55
               '70',  # SOLID70
               '82',  # PLANE82 (legacy of PLANE183)
               '92',  # SOLID92
               '95',  # SOLID95
               '152',  # SURF152
               '154',  # SURF154
               '180',  # LINK180
               '181',  # SHELL181
               '182',  # PLANE182
               '183',  # PLANE183
               '185',  # SOLID185
               '186',  # SOLID186
               '187',  # SOLID187
               '188',  # BEAM188
               '200',  # MESH200
               '223',  # PLANE223
               '226',  # SOLID226
               '281']  # SHELL281
