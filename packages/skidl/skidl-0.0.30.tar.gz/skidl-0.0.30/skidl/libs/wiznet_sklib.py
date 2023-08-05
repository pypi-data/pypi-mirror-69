from skidl import SKIDL, TEMPLATE, Part, Pin, SchLib

SKIDL_lib_version = '0.0.1'

wiznet = SchLib(tool=SKIDL).add_parts(*[
        Part(name='W5100',dest=TEMPLATE,tool=SKIDL,keywords='Wiznet Ethernet controller',description='WizNet W5100 10/100Mb Ethernet controller with TCP/IP stack',ref_prefix='U',num_units=1,fplist=['LQFP*10x10mm*Pitch0.4mm*'],do_erc=True,pins=[
            Pin(num='1',name='RSET_BG',func=Pin.OUTPUT,do_erc=True),
            Pin(num='2',name='VCC3V3A',func=Pin.PWRIN,do_erc=True),
            Pin(num='3',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='4',name='GNDA',func=Pin.PWRIN,do_erc=True),
            Pin(num='5',name='RXIP',do_erc=True),
            Pin(num='6',name='RXIN',do_erc=True),
            Pin(num='7',name='VCC1V8A',func=Pin.PWRIN,do_erc=True),
            Pin(num='8',name='TXOP',func=Pin.OUTPUT,do_erc=True),
            Pin(num='9',name='TXON',func=Pin.OUTPUT,do_erc=True),
            Pin(num='10',name='GNDA',func=Pin.PWRIN,do_erc=True),
            Pin(num='20',name='DATA6',func=Pin.BIDIR,do_erc=True),
            Pin(num='30',name='SCLK',do_erc=True),
            Pin(num='40',name='ADDR12',do_erc=True),
            Pin(num='50',name='ADDR4',do_erc=True),
            Pin(num='60',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='70',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='11',name='V18',func=Pin.PWROUT,do_erc=True),
            Pin(num='21',name='DATA5',func=Pin.BIDIR,do_erc=True),
            Pin(num='31',name='SEN',do_erc=True),
            Pin(num='41',name='ADDR11',do_erc=True),
            Pin(num='51',name='ADDR3',do_erc=True),
            Pin(num='61',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='71',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='12',name='VCC3V3D',func=Pin.PWRIN,do_erc=True),
            Pin(num='22',name='DATA4',func=Pin.BIDIR,do_erc=True),
            Pin(num='32',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='42',name='ADDR10',do_erc=True),
            Pin(num='52',name='ADDR2',do_erc=True),
            Pin(num='62',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='72',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='13',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='23',name='DATA3',func=Pin.BIDIR,do_erc=True),
            Pin(num='33',name='VCC1V8D',func=Pin.PWRIN,do_erc=True),
            Pin(num='43',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='53',name='ADDR1',do_erc=True),
            Pin(num='63',name='OPMODE0',do_erc=True),
            Pin(num='73',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='14',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='24',name='DATA2',func=Pin.BIDIR,do_erc=True),
            Pin(num='34',name='TEST_MODE3',do_erc=True),
            Pin(num='44',name='VCC3V3D',func=Pin.PWRIN,do_erc=True),
            Pin(num='54',name='ADDR0',do_erc=True),
            Pin(num='64',name='OPMODE1',do_erc=True),
            Pin(num='74',name='VCC1V8A',func=Pin.PWRIN,do_erc=True),
            Pin(num='15',name='VCC1V8D',func=Pin.PWRIN,do_erc=True),
            Pin(num='25',name='DATA1',func=Pin.BIDIR,do_erc=True),
            Pin(num='35',name='TEST_MODE2',do_erc=True),
            Pin(num='45',name='ADDR9',do_erc=True),
            Pin(num='55',name='CS',do_erc=True),
            Pin(num='65',name='OPMODE2',func=Pin.OUTPUT,do_erc=True),
            Pin(num='75',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='16',name='VCC1V8D',func=Pin.PWRIN,do_erc=True),
            Pin(num='26',name='DATA0',func=Pin.BIDIR,do_erc=True),
            Pin(num='36',name='TEST_MODE1',do_erc=True),
            Pin(num='46',name='ADDR8',do_erc=True),
            Pin(num='56',name='INT',func=Pin.OUTPUT,do_erc=True),
            Pin(num='66',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='76',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='17',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='27',name='MISO',do_erc=True),
            Pin(num='37',name='TEST_MODE0',do_erc=True),
            Pin(num='47',name='ADDR7',do_erc=True),
            Pin(num='57',name='WR',do_erc=True),
            Pin(num='67',name='NC',func=Pin.NOCONNECT,do_erc=True),
            Pin(num='77',name='GNDA',func=Pin.PWRIN,do_erc=True),
            Pin(num='18',name='VCC3V3D',func=Pin.PWRIN,do_erc=True),
            Pin(num='28',name='MOSI',do_erc=True),
            Pin(num='38',name='ADDR14',do_erc=True),
            Pin(num='48',name='ADDR6',do_erc=True),
            Pin(num='58',name='RD',do_erc=True),
            Pin(num='68',name='GNDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='19',name='DATA7',func=Pin.BIDIR,do_erc=True),
            Pin(num='29',name='SCS',do_erc=True),
            Pin(num='39',name='ADDR13',do_erc=True),
            Pin(num='49',name='ADDR5',do_erc=True),
            Pin(num='59',name='RESET',do_erc=True),
            Pin(num='69',name='VCC1V8D',func=Pin.PWRIN,do_erc=True)])])
