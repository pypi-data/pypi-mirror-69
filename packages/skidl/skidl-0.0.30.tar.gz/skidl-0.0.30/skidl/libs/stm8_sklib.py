from skidl import SKIDL, TEMPLATE, Part, Pin, SchLib

SKIDL_lib_version = '0.0.1'

stm8 = SchLib(tool=SKIDL).add_parts(*[
        Part(name='STM8L051F3P',dest=TEMPLATE,tool=SKIDL,keywords='STM8L Microcontroller Value Line Low Power',description='16MHz, 8K Flash, 1k RAM, 256 EEPROM, RTC, USART, I2C, SPI, ADC, TSSOP20',ref_prefix='U',num_units=1,fplist=['TSSOP*'],do_erc=True,pins=[
            Pin(num='1',name='PC5/OSC32_IN/TIM2_CH1',func=Pin.BIDIR,do_erc=True),
            Pin(num='2',name='PC6/OSC32_OUT/TIM2_CH2',func=Pin.BIDIR,do_erc=True),
            Pin(num='3',name='SWIM/BEEP/IR_TIM/PA0',func=Pin.PWRIN,do_erc=True),
            Pin(num='4',name='NRST/PA1',func=Pin.BIDIR,do_erc=True),
            Pin(num='5',name='OSC_IN/PA2',func=Pin.BIDIR,do_erc=True),
            Pin(num='6',name='OSC_OUT/PA3',func=Pin.BIDIR,do_erc=True),
            Pin(num='7',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='8',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='9',name='PD0/TIM3_CH2/ADC1_IN22',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='ADC1_IN18/TIM2_CH1/PB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='20',name='PC4/I2C_SMB/CCO/ADC1_IN4',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='ADC1_IN17/TIM3_CH1/PB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='ADC1_IN16/TIM2_CH2/PB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='RTC_ALARM/ADC1_IN15/TIM2_ETR/PB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='ADC1_IN14/SPI1_NSS/PB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='ADC1_IN13/SPI_SCK/PB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='16',name='ADC1_IN12/SPI1_MOSI/PB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='17',name='ADC1_IN11/SPI1_MISO/PB7',func=Pin.BIDIR,do_erc=True),
            Pin(num='18',name='PC0/I2C_SDA',func=Pin.BIDIR,do_erc=True),
            Pin(num='19',name='PC1/I2C_SCL',func=Pin.BIDIR,do_erc=True)]),
        Part(name='STM8L101F2P',dest=TEMPLATE,tool=SKIDL,keywords='STM8L Microcontroller Value Line Low Power',description='16MHz, 8K Flash, 1.5k RAM, 2k EEPROM, USART, I2C, SPI, AC, TSSOP20',ref_prefix='U',num_units=1,fplist=['TSSOP*'],do_erc=True,aliases=['STM8L101F3P'],pins=[
            Pin(num='1',name='PC3/USART_TX',func=Pin.BIDIR,do_erc=True),
            Pin(num='2',name='PC4/USART_CK/CCO',func=Pin.BIDIR,do_erc=True),
            Pin(num='3',name='SWIM/BEEP/IR_TIM/PA0',func=Pin.PWRIN,do_erc=True),
            Pin(num='4',name='NRST/PA1',func=Pin.BIDIR,do_erc=True),
            Pin(num='5',name='PA2',func=Pin.BIDIR,do_erc=True),
            Pin(num='6',name='PA3',func=Pin.BIDIR,do_erc=True),
            Pin(num='7',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='8',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='9',name='PD0/TIM3_CH2/COMP1_CH3',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='COMP1_CH1/TIM2_CH1/PB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='20',name='PC2/USART_RX',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='COMP1_CH2/TIM3_CH1/PB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='COMP2_CH1/TIM2_CH2/PB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='COMP2_CH2/TIM2_TRIG/PB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='SPI1_NSS/PB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='SPI_SCK/PB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='16',name='SPI1_MOSI/PB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='17',name='SPI1_MISO/PB7',func=Pin.BIDIR,do_erc=True),
            Pin(num='18',name='PC0/I2C_SDA',func=Pin.BIDIR,do_erc=True),
            Pin(num='19',name='PC1/I2C_SCL',func=Pin.BIDIR,do_erc=True)]),
        Part(name='STM8S003F3P',dest=TEMPLATE,tool=SKIDL,keywords='STM8S Mainstream Value line 8-bit, 16MHz, 1k RAM, 128 EEPROM',description='16MHz, 8K Flash, 1k RAM, 128 EEPROM, USART, I2C, SPI, TSSOP20',ref_prefix='U',num_units=1,fplist=['TSSOP*'],do_erc=True,pins=[
            Pin(num='1',name='PD4/TIM2_CH1/BEEP/UART1_CK',func=Pin.BIDIR,do_erc=True),
            Pin(num='2',name='PD5/AIN5/UART1_TX',func=Pin.BIDIR,do_erc=True),
            Pin(num='3',name='PD6/AIN6/UART1_RX',func=Pin.BIDIR,do_erc=True),
            Pin(num='4',name='NRST',do_erc=True),
            Pin(num='5',name='OSCIN/PA1',func=Pin.BIDIR,do_erc=True),
            Pin(num='6',name='OSCOUT/PA2',func=Pin.BIDIR,do_erc=True),
            Pin(num='7',name='VSS',func=Pin.PWROUT,do_erc=True),
            Pin(num='8',name='Vcap',func=Pin.PASSIVE,do_erc=True),
            Pin(num='9',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='10',name='[SPI_NSS]TIM2_CH3/PA3',func=Pin.BIDIR,do_erc=True),
            Pin(num='20',name='PD3/AIN4/TIM2_CH2',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='[TIM1_BKIN]I2C_SDA/PB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='[ADC_ETR]I2C_SCL/PB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='[TIM1_CH1N]TIM1_CH3/PC3',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='[TIM1_CH2N]AIN2/TIM1_CH4/PC4',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='[TIM2_CH1]SPI_SCK/PC5',func=Pin.BIDIR,do_erc=True),
            Pin(num='16',name='[TIM1_CH1]SPI_MOSI/PC6',func=Pin.BIDIR,do_erc=True),
            Pin(num='17',name='[TIM1_CH2]SPI_MISO/PC7',func=Pin.BIDIR,do_erc=True),
            Pin(num='18',name='PD1/SWIM',func=Pin.BIDIR,do_erc=True),
            Pin(num='19',name='PD2/AIN3[TIM2_CH3]',func=Pin.BIDIR,do_erc=True)]),
        Part(name='STM8S003K3T',dest=TEMPLATE,tool=SKIDL,keywords='STM8 Microcontroller Value Line',description='16MHz, 8K Flash, 1K RAM, 128 EEPROM, LQFP32 (7x7mm, 0.8mm pitch)',ref_prefix='U',num_units=1,fplist=['LQFP32*'],do_erc=True,pins=[
            Pin(num='1',name='NRST',do_erc=True),
            Pin(num='2',name='OSCI/PA1',func=Pin.BIDIR,do_erc=True),
            Pin(num='3',name='OSCOUT/PA2',func=Pin.BIDIR,do_erc=True),
            Pin(num='4',name='VSS',func=Pin.PWRIN,do_erc=True),
            Pin(num='5',name='Vcap',do_erc=True),
            Pin(num='6',name='VDD',func=Pin.PWRIN,do_erc=True),
            Pin(num='7',name='[SPI_NSS]TIM2_CH3/PA3',func=Pin.BIDIR,do_erc=True),
            Pin(num='8',name='PF4',func=Pin.BIDIR,do_erc=True),
            Pin(num='9',name='PB7',func=Pin.BIDIR,do_erc=True),
            Pin(num='10',name='PB6',func=Pin.BIDIR,do_erc=True),
            Pin(num='20',name='TIM1_CH3/PC3',func=Pin.BIDIR,do_erc=True),
            Pin(num='30',name='PD5/UART1_TX',func=Pin.BIDIR,do_erc=True),
            Pin(num='11',name='I2C_SDA/PB5',func=Pin.BIDIR,do_erc=True),
            Pin(num='21',name='CLK_CCO/TIM1_CH4/PC4',func=Pin.BIDIR,do_erc=True),
            Pin(num='31',name='PD6/UART1_RX',func=Pin.BIDIR,do_erc=True),
            Pin(num='12',name='I2C_SCL/PB4',func=Pin.BIDIR,do_erc=True),
            Pin(num='22',name='SPI_SCK/PC5',func=Pin.BIDIR,do_erc=True),
            Pin(num='32',name='PD7/TLI[TIM1_CH4]',func=Pin.BIDIR,do_erc=True),
            Pin(num='13',name='TIM1_ETR/AIN3/PB3',func=Pin.BIDIR,do_erc=True),
            Pin(num='23',name='PI_MOSI/PC6',func=Pin.BIDIR,do_erc=True),
            Pin(num='14',name='TIM1_CH3N/AIN2/PB2',func=Pin.BIDIR,do_erc=True),
            Pin(num='24',name='PI_MISO/PC7',func=Pin.BIDIR,do_erc=True),
            Pin(num='15',name='TIM1_CH2N/AIN1/PB1',func=Pin.BIDIR,do_erc=True),
            Pin(num='25',name='PD0/TIM1_BKIN[CLK_CCO]',func=Pin.BIDIR,do_erc=True),
            Pin(num='16',name='TIM1_CH1N/AIN0/PB0',func=Pin.BIDIR,do_erc=True),
            Pin(num='26',name='PD1/SWIM',func=Pin.BIDIR,do_erc=True),
            Pin(num='17',name='PE5/SPI_NSS',func=Pin.BIDIR,do_erc=True),
            Pin(num='27',name='PD2[TIM2_CH3]',func=Pin.BIDIR,do_erc=True),
            Pin(num='18',name='UART1_CK/TIM1_CH1/PC1',func=Pin.BIDIR,do_erc=True),
            Pin(num='28',name='PD3/ADC_ETR/TIM2_CH2',func=Pin.BIDIR,do_erc=True),
            Pin(num='19',name='TIM1_CH2/PC2',func=Pin.BIDIR,do_erc=True),
            Pin(num='29',name='PD4/BEEP/TIM2_CH1',func=Pin.BIDIR,do_erc=True)])])
