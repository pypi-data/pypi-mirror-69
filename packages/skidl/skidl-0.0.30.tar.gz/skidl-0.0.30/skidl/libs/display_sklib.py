from skidl import SKIDL, TEMPLATE, Part, Pin, SchLib

SKIDL_lib_version = '0.0.1'

display = SchLib(tool=SKIDL).add_parts(*[
        Part(name='7SEGM',dest=TEMPLATE,tool=SKIDL,keywords='DEV',description='Afficheur Leds 7 segments',ref_prefix='S',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='Segm_E',func=Pin.PASSIVE,do_erc=True),
            Pin(num='2',name='Segm_D',func=Pin.PASSIVE,do_erc=True),
            Pin(num='3',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='4',name='Segm_C',func=Pin.PASSIVE,do_erc=True),
            Pin(num='5',name='SegmDP',func=Pin.PASSIVE,do_erc=True),
            Pin(num='6',name='Segm_B',func=Pin.PASSIVE,do_erc=True),
            Pin(num='7',name='Segm_A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='8',name='K',do_erc=True),
            Pin(num='9',name='Segm_F',func=Pin.PASSIVE,do_erc=True),
            Pin(num='10',name='Segm_G',func=Pin.PASSIVE,do_erc=True)]),
        Part(name='7SEGMENTS',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='AG12864E',dest=TEMPLATE,tool=SKIDL,keywords='LCD Graphics 128x64 KS108 Ampire',description='Graphics Display 128x64px, 1/64 Duty, KS108B Controller, AMPIRE',ref_prefix='DS',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='VCC',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='GND',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='VO',func=Pin.PASSIVE,do_erc=True),
            Pin(num='4',name='DB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='5',name='DB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='6',name='DB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='7',name='DB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='8',name='DB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='9',name='DB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='DB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='20',name='LEDK',func=Pin.PASSIVE,do_erc=True),
            Pin(num='11',name='DB7',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='~CS1~',do_erc=True),
            Pin(num='13',name='~CS2~',do_erc=True),
            Pin(num='14',name='~RST~',do_erc=True),
            Pin(num='15',name='R/~W~',do_erc=True),
            Pin(num='16',name='~C~/D',do_erc=True),
            Pin(num='17',name='EN',do_erc=True),
            Pin(num='18',name='VEE',func=Pin.PASSIVE,do_erc=True),
            Pin(num='19',name='LEDA',func=Pin.PASSIVE,do_erc=True)]),
        Part(name='CA56-12',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS 4 display',description='Kingbright 4 x 7-segment common anode display',ref_prefix='AFF',num_units=1,fplist=['Cx56-12'],do_erc=True,pins=[
            Pin(num='1',name='e',do_erc=True),
            Pin(num='2',name='d',do_erc=True),
            Pin(num='3',name='DP',do_erc=True),
            Pin(num='4',name='c',do_erc=True),
            Pin(num='5',name='g',do_erc=True),
            Pin(num='6',name='CA4',do_erc=True),
            Pin(num='7',name='b',do_erc=True),
            Pin(num='8',name='CA3',do_erc=True),
            Pin(num='9',name='CA2',do_erc=True),
            Pin(num='10',name='f',do_erc=True),
            Pin(num='11',name='a',do_erc=True),
            Pin(num='12',name='CA1',do_erc=True)]),
        Part(name='CC56-12',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS 4 display',description='Kingbright 4 x 7-segment common cathode display',ref_prefix='AFF',num_units=1,fplist=['Cx56-12'],do_erc=True,pins=[
            Pin(num='1',name='e',do_erc=True),
            Pin(num='2',name='d',do_erc=True),
            Pin(num='3',name='DP',do_erc=True),
            Pin(num='4',name='c',do_erc=True),
            Pin(num='5',name='g',do_erc=True),
            Pin(num='6',name='CC4',do_erc=True),
            Pin(num='7',name='b',do_erc=True),
            Pin(num='8',name='CC3',do_erc=True),
            Pin(num='9',name='CC2',do_erc=True),
            Pin(num='10',name='f',do_erc=True),
            Pin(num='11',name='a',do_erc=True),
            Pin(num='12',name='CC1',do_erc=True)]),
        Part(name='DA04-11',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS',description='2 x 7 Segments common A.',ref_prefix='AFF',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='c',do_erc=True),
            Pin(num='2',name='e',do_erc=True),
            Pin(num='3',name='d',do_erc=True),
            Pin(num='4',name='Anod1',do_erc=True),
            Pin(num='5',name='Anod2',do_erc=True),
            Pin(num='6',name='d',do_erc=True),
            Pin(num='7',name='e',do_erc=True),
            Pin(num='8',name='c',do_erc=True),
            Pin(num='9',name='g',do_erc=True),
            Pin(num='10',name='a',do_erc=True),
            Pin(num='11',name='f',do_erc=True),
            Pin(num='12',name='b',do_erc=True),
            Pin(num='13',name='b',do_erc=True),
            Pin(num='14',name='f',do_erc=True),
            Pin(num='15',name='a',do_erc=True),
            Pin(num='16',name='g',do_erc=True)]),
        Part(name='DC04-11',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS',description='2 x 7 Segments common K.',ref_prefix='AFF',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='c',do_erc=True),
            Pin(num='2',name='e',do_erc=True),
            Pin(num='3',name='d',do_erc=True),
            Pin(num='4',name='D1',do_erc=True),
            Pin(num='5',name='D2',do_erc=True),
            Pin(num='6',name='d',do_erc=True),
            Pin(num='7',name='e',do_erc=True),
            Pin(num='8',name='c',do_erc=True),
            Pin(num='9',name='g',do_erc=True),
            Pin(num='10',name='a',do_erc=True),
            Pin(num='11',name='f',do_erc=True),
            Pin(num='12',name='b',do_erc=True),
            Pin(num='13',name='b',do_erc=True),
            Pin(num='14',name='f',do_erc=True),
            Pin(num='15',name='a',do_erc=True),
            Pin(num='16',name='g',do_erc=True)]),
        Part(name='DISPLAY',dest=TEMPLATE,tool=SKIDL,keywords='DEV',description='Afficheur LCD nLignes',ref_prefix='S',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='GND',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='VCC',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='VLCD',do_erc=True),
            Pin(num='4',name='RS',do_erc=True),
            Pin(num='5',name='R/W',do_erc=True),
            Pin(num='6',name='CS',do_erc=True),
            Pin(num='7',name='D0',func=Pin.TRISTATE,do_erc=True),
            Pin(num='8',name='D1',func=Pin.TRISTATE,do_erc=True),
            Pin(num='9',name='D2',func=Pin.TRISTATE,do_erc=True),
            Pin(num='10',name='D3',func=Pin.TRISTATE,do_erc=True),
            Pin(num='11',name='D4',func=Pin.TRISTATE,do_erc=True),
            Pin(num='12',name='D5',func=Pin.TRISTATE,do_erc=True),
            Pin(num='13',name='D6',func=Pin.TRISTATE,do_erc=True),
            Pin(num='14',name='D7',func=Pin.TRISTATE,do_erc=True)]),
        Part(name='DISPLAY_3_LIGNE',dest=TEMPLATE,tool=SKIDL,description='DISPLAY EA7123-12C',ref_prefix='S',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='GND',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='VCC',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='VLCD',do_erc=True),
            Pin(num='4',name='VO',do_erc=True),
            Pin(num='5',name='SDA',do_erc=True),
            Pin(num='6',name='SCL',do_erc=True)]),
        Part(name='DOT-BAR',dest=TEMPLATE,tool=SKIDL,keywords='BAR DOT',description='GRAPH unit',ref_prefix='BAR',num_units=10,do_erc=True,pins=[
            Pin(num='1',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='20',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='2',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='19',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='3',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='18',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='4',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='17',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='5',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='16',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='6',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='15',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='7',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='14',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='8',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='13',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='9',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='12',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='10',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='11',name='K',func=Pin.PASSIVE,do_erc=True)]),
        Part(name='DOT-BAR2',dest=TEMPLATE,tool=SKIDL,keywords='BAR DOT',description='BAR GRAPH Block',ref_prefix='BAR',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='2',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='3',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='4',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='5',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='6',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='7',name='A',do_erc=True),
            Pin(num='8',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='9',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='10',name='A',func=Pin.PASSIVE,do_erc=True),
            Pin(num='20',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='11',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='12',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='13',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='14',name='K',do_erc=True),
            Pin(num='15',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='16',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='17',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='18',name='K',func=Pin.PASSIVE,do_erc=True),
            Pin(num='19',name='K',func=Pin.PASSIVE,do_erc=True)]),
        Part(name='ELD-426x',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HCLD0438',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HDSP-7xxx-A',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HDSP-7xxx-B',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HDSP-7xxx-C',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HDSP-7xxx-D',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='HY1602E',dest=TEMPLATE,tool=SKIDL,keywords='LCD 16x2 Alphanumeric 16pin Blue/Yellow/Green Backlight',description='HY1602E',ref_prefix='DS',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='LEDK',func=Pin.PASSIVE,do_erc=True),
            Pin(num='2',name='LEDA',func=Pin.PASSIVE,do_erc=True),
            Pin(num='3',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='4',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='5',name='Vo',do_erc=True),
            Pin(num='6',name='RS',do_erc=True),
            Pin(num='7',name='R/~W',do_erc=True),
            Pin(num='8',name='E',do_erc=True),
            Pin(num='9',name='DB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='DB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='DB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='DB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='DB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='DB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='DB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='16',name='DB7',func=Pin.BIDIR,do_erc=True)]),
        Part(name='ILI9341_LCD_Breakout',dest=TEMPLATE,tool=SKIDL,keywords='GLCD TFT ILI9341 320x240',description='ILI9341 controller, SPI TFT LCD Display, 9-pin breakout PCB, 4-pin SD card interface, 5V/3.3V',ref_prefix='U',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='Vcc',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='GND',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='~CS',do_erc=True),
            Pin(num='4',name='Reset',do_erc=True),
            Pin(num='5',name='D/~C',do_erc=True),
            Pin(num='6',name='MOSI',do_erc=True),
            Pin(num='7',name='SCK',do_erc=True),
            Pin(num='8',name='LED',do_erc=True),
            Pin(num='9',name='MISO',func=Pin.OUTPUT,do_erc=True),
            Pin(num='10',name='SD_CS',do_erc=True),
            Pin(num='11',name='SD_MOSI',do_erc=True),
            Pin(num='12',name='SD_MISO',func=Pin.OUTPUT,do_erc=True),
            Pin(num='13',name='SD_SCK',do_erc=True)]),
        Part(name='LCD16X2',dest=TEMPLATE,tool=SKIDL,keywords='Generic LCD 16x2 Alphanumeric 16pin Green Backlight',description='WC1602A0-SFYLYNC06',ref_prefix='DS',num_units=1,do_erc=True,aliases=['LCD-016N002L'],pins=[
            Pin(num='1',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='VO',do_erc=True),
            Pin(num='4',name='RS',do_erc=True),
            Pin(num='5',name='R/W',do_erc=True),
            Pin(num='6',name='E',do_erc=True),
            Pin(num='7',name='D0',do_erc=True),
            Pin(num='8',name='D1',do_erc=True),
            Pin(num='9',name='D2',do_erc=True),
            Pin(num='10',name='D3',do_erc=True),
            Pin(num='11',name='D4',do_erc=True),
            Pin(num='12',name='D5',do_erc=True),
            Pin(num='13',name='D6',do_erc=True),
            Pin(num='14',name='D7',do_erc=True),
            Pin(num='15',name='LED+',func=Pin.PASSIVE,do_erc=True),
            Pin(num='16',name='LED-',func=Pin.PASSIVE,do_erc=True)]),
        Part(name='LCD4',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='LM16255K',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='LTS-6960HR',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS',description='DISPLAY 7 SEGMENTS common A.',ref_prefix='AFF',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='e',do_erc=True),
            Pin(num='2',name='d',do_erc=True),
            Pin(num='3',name='C.A.',do_erc=True),
            Pin(num='4',name='c',do_erc=True),
            Pin(num='5',name='DP',do_erc=True),
            Pin(num='6',name='b',do_erc=True),
            Pin(num='7',name='a',do_erc=True),
            Pin(num='8',name='C.A.',do_erc=True),
            Pin(num='9',name='f',do_erc=True),
            Pin(num='10',name='g',do_erc=True)]),
        Part(name='LTS-6980HR',dest=TEMPLATE,tool=SKIDL,keywords='7 SEGMENTS',description='DISPLAY 7 SEGMENTS common K',ref_prefix='AFF',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='e',do_erc=True),
            Pin(num='2',name='d',do_erc=True),
            Pin(num='3',name='C.K.',do_erc=True),
            Pin(num='4',name='c',do_erc=True),
            Pin(num='5',name='DP',do_erc=True),
            Pin(num='6',name='b',do_erc=True),
            Pin(num='7',name='a',do_erc=True),
            Pin(num='8',name='C.K.',do_erc=True),
            Pin(num='9',name='f',do_erc=True),
            Pin(num='10',name='g',do_erc=True)]),
        Part(name='MAN3640A',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='MAN71A',dest=TEMPLATE,tool=SKIDL,keywords='DISPLAY LED',description='7 segments display - Common anods',ref_prefix='AFF',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='a',do_erc=True),
            Pin(num='2',name='f',do_erc=True),
            Pin(num='3',name='C.A.',do_erc=True),
            Pin(num='7',name='e',do_erc=True),
            Pin(num='8',name='d',do_erc=True),
            Pin(num='9',name='DP',do_erc=True),
            Pin(num='10',name='c',do_erc=True),
            Pin(num='11',name='g',do_erc=True),
            Pin(num='13',name='b',do_erc=True),
            Pin(num='14',name='C.A.',do_erc=True)]),
        Part(name='RC1602A-GHW-ESX',dest=TEMPLATE,tool=SKIDL,keywords='LCD 16x2 Alphanumeric 16pin Gray Backlight',description='RC1602A-GHW-ESX',ref_prefix='DS',num_units=1,do_erc=True,pins=[
            Pin(num='1',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='2',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='Vo',do_erc=True),
            Pin(num='4',name='RS',do_erc=True),
            Pin(num='5',name='R/~W',do_erc=True),
            Pin(num='6',name='E',do_erc=True),
            Pin(num='7',name='DB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='8',name='DB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='9',name='DB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='DB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='DB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='DB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='DB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='DB7',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='LED+',func=Pin.PASSIVE,do_erc=True),
            Pin(num='16',name='LED-',func=Pin.PASSIVE,do_erc=True)])])
