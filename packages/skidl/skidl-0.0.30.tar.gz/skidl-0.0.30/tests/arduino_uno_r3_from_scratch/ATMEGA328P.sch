EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:Arduino_Uno_R3_From_Scratch
LIBS:MFN_Atmel
LIBS:MFN_STMicro
LIBS:Arduino_Uno_R3_From_Scratch-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 8 8
Title "Arduino UNO R3 Clone"
Date "8 oct 2015"
Rev "0"
Comp "Rheingold Heavy"
Comment1 "Based on the Arduino UNO R3 From arduino.cc"
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L ATMEGA328P-PU U5
U 1 1 55E8A80E
P 7050 3750
F 0 "U5" H 6075 1350 60  0000 C CNN
F 1 "ATMEGA328P" H 7050 6300 60  0000 C CNN
F 2 "~" H 6950 5250 60  0000 C CNN
F 3 "http://www.atmel.com/images/Atmel-8271-8-bit-AVR-Microcontroller-ATmega48A-48PA-88A-88PA-168A-168PA-328-328P_datasheet_Complete.pdf" H 6950 5250 60  0001 C CNN
F 4 "IC MCU 8BIT 32KB FLASH 28DIP" H 7050 3750 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P" H 7050 3750 60  0001 C CNN "Description"
F 6 "Atmel" H 7050 3750 60  0001 C CNN "MFN"
F 7 "ATMEGA328P-PU" H 7050 3750 60  0001 C CNN "MFP"
F 8 "PTH" H 7050 3750 60  0001 C CNN "Package ID"
F 9 "ANY" H 7050 3750 60  0001 C CNN "Source"
F 10 "Y" H 7050 3750 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 7050 3750 60  0001 C CNN "Subsystem"
F 12 "~" H 7050 3750 60  0001 C CNN "Notes"
	1    7050 3750
	1    0    0    -1  
$EndComp
Wire Wire Line
	5650 2050 5650 2400
Connection ~ 5650 2050
Wire Wire Line
	5650 2700 5650 3050
Connection ~ 5650 3050
Text HLabel 4800 3750 0    40   Input ~ 0
AREF
Wire Wire Line
	4800 3750 5850 3750
$Comp
L GND #PWR040
U 1 1 55E8AA8C
P 5600 6050
F 0 "#PWR040" H 5600 6050 30  0001 C CNN
F 1 "GND" H 5600 5980 30  0001 C CNN
F 2 "~" H 5600 6050 60  0000 C CNN
F 3 "~" H 5600 6050 60  0000 C CNN
F 4 "ANY" H 5600 6050 60  0001 C CNN "Source"
F 5 "N" H 5600 6050 60  0001 C CNN "Critical"
F 6 "~" H 5600 6050 60  0001 C CNN "Notes"
	1    5600 6050
	1    0    0    -1  
$EndComp
Wire Wire Line
	5600 4300 5600 4950
Wire Wire Line
	5600 4500 5850 4500
Wire Wire Line
	5600 4700 5850 4700
Connection ~ 5600 4500
Connection ~ 5600 4700
Wire Wire Line
	5850 5500 5600 5500
Wire Wire Line
	5600 5250 5600 6050
Wire Wire Line
	5850 5700 5600 5700
Connection ~ 5600 5700
Connection ~ 5600 5500
Wire Wire Line
	5100 3750 5100 4000
Connection ~ 5100 3750
Wire Wire Line
	5100 4300 5100 4550
Text HLabel 1250 5650 0    40   Input ~ 0
SERIAL_Rx
Text HLabel 1250 5900 0    40   Input ~ 0
SERIAL_Tx
Wire Wire Line
	8250 6100 9350 6100
Wire Wire Line
	8400 6100 8400 6275
Wire Wire Line
	8400 6275 4600 6275
Wire Wire Line
	4600 6275 4600 5650
Wire Wire Line
	4600 5650 2850 5650
Wire Wire Line
	8250 5900 9350 5900
Wire Wire Line
	8550 5900 8550 6425
Wire Wire Line
	8550 6425 4450 6425
Wire Wire Line
	2850 5900 4450 5900
Wire Wire Line
	1250 5900 2550 5900
Wire Wire Line
	1250 5650 2550 5650
Text HLabel 9350 3250 2    40   Input ~ 0
ARD_AN5/SCL
Text HLabel 9350 3450 2    40   Input ~ 0
ARD_AN4/SDA
Text HLabel 9350 3650 2    40   Input ~ 0
ARD_AN3
Text HLabel 9350 3850 2    40   Input ~ 0
ARD_AN2
Text HLabel 9350 4050 2    40   Input ~ 0
ARD_AN1
Text HLabel 9350 4250 2    40   Input ~ 0
ARD_AN0
Wire Wire Line
	9350 3250 8250 3250
Wire Wire Line
	8250 3450 9350 3450
Wire Wire Line
	9350 3650 8250 3650
Wire Wire Line
	8250 3850 9350 3850
Wire Wire Line
	9350 4050 8250 4050
Wire Wire Line
	8250 4250 9350 4250
Text HLabel 9350 4700 2    40   Input ~ 0
ARD_DIG7
Text HLabel 9350 4900 2    40   Input ~ 0
ARD_DIG6
Text HLabel 9350 5100 2    40   Input ~ 0
ARD_DIG5
Text HLabel 9350 5300 2    40   Input ~ 0
ARD_DIG4
Text HLabel 9350 5500 2    40   Input ~ 0
ARD_DIG3
Text HLabel 9350 5700 2    40   Input ~ 0
ARD_DIG2
Text HLabel 9350 5900 2    40   Input ~ 0
ARD_DIG1
Text HLabel 9350 6100 2    40   Input ~ 0
ARD_DIG0
Connection ~ 8400 6100
Connection ~ 8550 5900
Wire Wire Line
	8250 5700 9350 5700
Wire Wire Line
	9350 5500 8250 5500
Wire Wire Line
	8250 5300 9350 5300
Wire Wire Line
	9350 5100 8250 5100
Wire Wire Line
	8250 4900 9350 4900
Wire Wire Line
	9350 4700 8250 4700
Text HLabel 9350 2500 2    40   Input ~ 0
ARD_DIG8
Text HLabel 9350 2300 2    40   Input ~ 0
ARD_DIG9
Text HLabel 9350 2100 2    40   Input ~ 0
ARD_DIG10/SPI_SS
Text HLabel 9350 1900 2    40   Input ~ 0
ARD_DIG11/SPI_MOSI
Text HLabel 9350 1700 2    40   Input ~ 0
ARD_DIG12/SPI_MISO
Text HLabel 9350 1500 2    40   Input ~ 0
ARD_DIG13/SPI_SCK
Wire Wire Line
	9350 2500 8250 2500
Wire Wire Line
	8250 2300 9350 2300
Wire Wire Line
	9350 2100 8250 2100
Wire Wire Line
	8250 1900 9350 1900
Wire Wire Line
	8250 1700 9350 1700
Wire Wire Line
	8250 1500 9350 1500
Text HLabel 1250 1500 0    40   Input ~ 0
DTR
$Comp
L R R12
U 1 1 55E8B3B8
P 1550 1950
F 0 "R12" V 1630 1950 40  0000 C CNN
F 1 "1K" V 1557 1951 40  0000 C CNN
F 2 "~" V 1480 1950 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/VISH/VISHS75859/VISHS75859-1.pdf" H 1550 1950 30  0001 C CNN
F 4 "METAL GLAZE/THICK FILM, 0.125W, 5%, 200ppm, 1000ohm, SURFACE MOUNT, 0805," H 1550 1950 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P DTR Pull Down Resistor" H 1550 1950 60  0001 C CNN "Description"
F 6 "Vishay" H 1550 1950 60  0001 C CNN "MFN"
F 7 "CRCW08051K00JNEA" H 1550 1950 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 1550 1950 60  0001 C CNN "Package ID"
F 9 "ANY" H 1550 1950 60  0001 C CNN "Source"
F 10 "N" H 1550 1950 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 1550 1950 60  0001 C CNN "Subsystem"
F 12 "~" H 1550 1950 60  0001 C CNN "Notes"
	1    1550 1950
	1    0    0    -1  
$EndComp
Wire Wire Line
	1250 1500 1900 1500
Wire Wire Line
	1550 1500 1550 1800
Connection ~ 1550 1500
Text HLabel 9350 750  2    40   Input ~ 0
328P_RESET
Wire Wire Line
	2850 1500 5850 1500
Wire Wire Line
	4450 5900 4450 6425
$Comp
L CONN_02X03 ICSP2
U 1 1 55E8CAAE
P 3800 850
F 0 "ICSP2" H 3800 1100 50  0000 C CNN
F 1 "M20-9980346" H 3800 650 40  0000 C CNN
F 2 "~" H 3800 850 60  0000 C CNN
F 3 "http://cdn.harwin.com/pdfs/M20-998.pdf" H 3800 850 60  0001 C CNN
F 4 "6 CONTACT(S), MALE, STRAIGHT TWO PART BOARD CONNECTOR" H 3800 850 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P ICSP Header" H 3800 850 60  0001 C CNN "Description"
F 6 "Harwin" H 3800 850 60  0001 C CNN "MFN"
F 7 "M20-9980346" H 3800 850 60  0001 C CNN "MFP"
F 8 "PTH" H 3800 850 60  0001 C CNN "Package ID"
F 9 "ANY" H 3800 850 60  0001 C CNN "Source"
F 10 "N" H 3800 850 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 3800 850 60  0001 C CNN "Subsystem"
F 12 "~" H 3800 850 60  0001 C CNN "Notes"
	1    3800 850 
	1    0    0    -1  
$EndComp
$Comp
L D D7
U 1 1 55E8CABC
P 5300 1200
F 0 "D7" H 5300 1300 40  0000 C CNN
F 1 "1N4148W-7-F" H 5300 1100 40  0000 C CNN
F 2 "~" H 5300 1200 60  0000 C CNN
F 3 "http://www.diodes.com/_files/datasheets/ds30086.pdf" H 5300 1200 60  0001 C CNN
F 4 "DIODE GEN PURP 100V 300MA SOD123" H 5300 1200 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P ICSP Reset Voltage Spike Protection" H 5300 1200 60  0001 C CNN "Description"
F 6 "Diodes Inc" H 5300 1200 60  0001 C CNN "MFN"
F 7 "1N4148W-7-F" H 5300 1200 60  0001 C CNN "MFP"
F 8 "SOD123" H 5300 1200 60  0001 C CNN "Package ID"
F 9 "ANY" H 5300 1200 60  0001 C CNN "Source"
F 10 "N" H 5300 1200 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 5300 1200 60  0001 C CNN "Subsystem"
F 12 "~" H 5300 1200 60  0001 C CNN "Notes"
	1    5300 1200
	0    -1   -1   0   
$EndComp
Wire Wire Line
	4900 650  4900 1050
Wire Wire Line
	5300 1350 5300 1500
Wire Wire Line
	4900 1350 4900 1500
Connection ~ 5300 1500
Connection ~ 4900 750 
Wire Wire Line
	4050 750  5300 750 
Wire Wire Line
	4350 950  4350 1100
Wire Wire Line
	4050 950  4350 950 
Wire Wire Line
	3200 950  3550 950 
Connection ~ 4900 1500
Wire Wire Line
	3200 850  3550 850 
Wire Wire Line
	3200 750  3550 750 
Wire Wire Line
	5300 750  5300 1050
Text GLabel 8500 1400 2    40   Input ~ 0
328P_ICSP_SCK
Text GLabel 8500 1600 2    40   Input ~ 0
328P_ICSP_MISO
Text GLabel 8500 1800 2    40   Input ~ 0
328P_ICSP_MOSI
Wire Wire Line
	8500 1400 8400 1400
Wire Wire Line
	8400 1400 8400 1500
Connection ~ 8400 1500
Wire Wire Line
	8500 1600 8400 1600
Wire Wire Line
	8400 1600 8400 1700
Connection ~ 8400 1700
Wire Wire Line
	8500 1800 8400 1800
Wire Wire Line
	8400 1800 8400 1900
Connection ~ 8400 1900
Text GLabel 3200 850  0    40   Input ~ 0
328P_ICSP_SCK
Text GLabel 3200 750  0    40   Input ~ 0
328P_ICSP_MISO
Text GLabel 4300 850  2    40   Input ~ 0
328P_ICSP_MOSI
Wire Wire Line
	4050 850  4300 850 
Connection ~ 3200 1500
Wire Wire Line
	2200 1500 2550 1500
$Comp
L RESET_SWITCH SW1
U 1 1 55E8D514
P 3400 1975
F 0 "SW1" V 3250 2275 60  0000 C CNN
F 1 "RESET_SWITCH" V 3550 2525 60  0000 C CNN
F 2 "" H 3400 1975 60  0000 C CNN
F 3 "http://industrial.panasonic.com/www-data/pdf/ATK0000/ATK0000CE28.pdf" H 3400 1975 60  0001 C CNN
F 4 "SWITCH TACTILE SPST-NO 0.02A 15V" H 3400 1975 60  0001 C CNN "Characteristics"
F 5 "Reset Pushbutton" H 3400 1975 60  0001 C CNN "Description"
F 6 "Panasonic" H 3400 1975 60  0001 C CNN "MFN"
F 7 "EVQ-Q2U02W" H 3400 1975 60  0001 C CNN "MFP"
F 8 "SMD" H 3400 1975 60  0001 C CNN "Package ID"
F 9 "ANY" H 3400 1975 60  0001 C CNN "Source"
F 10 "N" H 3400 1975 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 3400 1975 60  0001 C CNN "Subsystem"
F 12 "Prefer below 3mm in accuator height off PCB" H 3400 1975 60  0001 C CNN "Notes"
	1    3400 1975
	0    -1   -1   0   
$EndComp
Wire Wire Line
	3400 1500 3400 1650
Connection ~ 3400 1500
Wire Wire Line
	3400 2275 3400 2425
Connection ~ 3400 1650
Connection ~ 3400 2275
Wire Wire Line
	5650 1500 5650 750 
Wire Wire Line
	5650 750  9350 750 
Connection ~ 5650 1500
Wire Wire Line
	1550 2100 1550 2425
Wire Wire Line
	3200 950  3200 1500
$Comp
L 5V_LDO #PWR041
U 1 1 55E95BB4
P 4900 650
F 0 "#PWR041" H 4900 740 20  0001 C CNN
F 1 "5V_LDO" H 4900 770 30  0000 C CNN
F 2 "~" H 4900 650 60  0000 C CNN
F 3 "~" H 4900 650 60  0000 C CNN
	1    4900 650 
	1    0    0    -1  
$EndComp
$Comp
L 5V_LDO #PWR042
U 1 1 55E95BC3
P 5600 4300
F 0 "#PWR042" H 5600 4390 20  0001 C CNN
F 1 "5V_LDO" H 5600 4420 30  0000 C CNN
F 2 "~" H 5600 4300 60  0000 C CNN
F 3 "~" H 5600 4300 60  0000 C CNN
	1    5600 4300
	1    0    0    -1  
$EndComp
$Comp
L R R13
U 1 1 55EAC911
P 2700 1500
F 0 "R13" V 2780 1500 40  0000 C CNN
F 1 "0" V 2707 1501 40  0000 C CNN
F 2 "~" V 2630 1500 30  0000 C CNN
F 3 "http://industrial.panasonic.com/www-cgi/jvcr13pz.cgi?E+PZ+3+AOA0001+ERJ6GEY0R00V+7+WW" H 2700 1500 30  0001 C CNN
F 4 "RES SMD 0.0 OHM JUMPER 1/8W 0805" H 2700 1500 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P DTR 0R Link" H 2700 1500 60  0001 C CNN "Description"
F 6 "Panasonic" H 2700 1500 60  0001 C CNN "MFN"
F 7 "ERJ-6GEY0R00V" H 2700 1500 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 2700 1500 60  0001 C CNN "Package ID"
F 9 "ANY" H 2700 1500 60  0001 C CNN "Source"
F 10 "N" H 2700 1500 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 2700 1500 60  0001 C CNN "Subsystem"
F 12 "~" H 2700 1500 60  0001 C CNN "Notes"
	1    2700 1500
	0    -1   -1   0   
$EndComp
$Comp
L CERAMIC_RESONATOR X2
U 1 1 5614A1DB
P 5250 2550
F 0 "X2" V 5325 2450 50  0000 R CNN
F 1 "CSTCE16MOV53-R0" V 5175 2450 40  0000 R CNN
F 2 "~" H 5250 2550 60  0000 C CNN
F 3 "http://www.murata.com/~/media/webrenewal/support/library/catalog/products/timingdevice/ceralock/p16e.ashx" H 5250 2550 60  0001 C CNN
F 4 "CER RESONATOR 16.0MHZ SMD" H 5250 2550 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P Oscillator" H 5250 2550 60  0001 C CNN "Description"
F 6 "Murata" H 5250 2550 60  0001 C CNN "MFN"
F 7 "CSTCE16M0V53-R0" H 5250 2550 60  0001 C CNN "MFP"
F 8 "SMD" H 5250 2550 60  0001 C CNN "Package ID"
F 9 "ANY" H 5250 2550 60  0001 C CNN "Source"
F 10 "Y" H 5250 2550 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 5250 2550 60  0001 C CNN "Subsystem"
F 12 "~" H 5250 2550 60  0001 C CNN "Notes"
	1    5250 2550
	0    1    1    0   
$EndComp
Wire Wire Line
	5300 2050 5850 2050
Wire Wire Line
	5300 2050 5300 2150
Wire Wire Line
	5300 2950 5300 3050
Wire Wire Line
	5300 3050 5850 3050
Wire Wire Line
	5050 2550 4750 2550
Wire Wire Line
	4750 2550 4750 2900
Text Notes 6150 1050 0    40   ~ 0
Atmel Appnote: AVR042 - AVR Hardware Design Considerations\nhttp://www.atmel.com/Images/Atmel-2521-AVR-Hardware-Design-Considerations_ApplicationNote_AVR042.pdf\n\nRefer to this for PCB layout information
$Comp
L C C14
U 1 1 56159BB8
P 5100 4150
F 0 "C14" H 5150 4250 40  0000 L CNN
F 1 "0.1 uF" H 5150 4050 40  0000 L CNN
F 2 "~" H 5138 4000 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/KEME/KEMES10043/KEMES10043-1.pdf" H 5100 4150 60  0001 C CNN
F 4 "CAPACITOR, CERAMIC, MULTILAYER, 100 V, X7R, 0.1 uF, SURFACE MOUNT, 0805, CHIP, ROHS COMPLIANT" H 5100 4150 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P AREF Bypass Cap" H 5100 4150 60  0001 C CNN "Description"
F 6 "Kemet" H 5100 4150 60  0001 C CNN "MFN"
F 7 "C0805C104K1RACAUTO" H 5100 4150 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 5100 4150 60  0001 C CNN "Package ID"
F 9 "ANY" H 5100 4150 60  0001 C CNN "Source"
F 10 "N" H 5100 4150 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 5100 4150 60  0001 C CNN "Subsystem"
F 12 "~" H 5100 4150 60  0001 C CNN "Notes"
	1    5100 4150
	1    0    0    -1  
$EndComp
$Comp
L C C15
U 1 1 56159BD3
P 5600 5100
F 0 "C15" H 5650 5200 40  0000 L CNN
F 1 "0.1 uF" H 5650 5000 40  0000 L CNN
F 2 "~" H 5638 4950 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/KEME/KEMES10043/KEMES10043-1.pdf" H 5600 5100 60  0001 C CNN
F 4 "CAPACITOR, CERAMIC, MULTILAYER, 100 V, X7R, 0.1 uF, SURFACE MOUNT, 0805, CHIP, ROHS COMPLIANT" H 5600 5100 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P VCC and AVCC Bypass Cap" H 5600 5100 60  0001 C CNN "Description"
F 6 "Kemet" H 5600 5100 60  0001 C CNN "MFN"
F 7 "C0805C104K1RACAUTO" H 5600 5100 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 5600 5100 60  0001 C CNN "Package ID"
F 9 "ANY" H 5600 5100 60  0001 C CNN "Source"
F 10 "N" H 5600 5100 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 5600 5100 60  0001 C CNN "Subsystem"
F 12 "~" H 5600 5100 60  0001 C CNN "Notes"
	1    5600 5100
	1    0    0    -1  
$EndComp
$Comp
L R R16
U 1 1 56159EEE
P 4900 1200
F 0 "R16" V 4980 1200 40  0000 C CNN
F 1 "10K" V 4907 1201 40  0000 C CNN
F 2 "~" V 4830 1200 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/VISH/VISHS75859/VISHS75859-1.pdf" H 4900 1200 30  0001 C CNN
F 4 "RESISTOR, METAL GLAZE/THICK FILM, 0.125W, 5%, 200ppm, 10000ohm, SURFACE MOUNT, 0805" H 4900 1200 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P 10K ICSP Pull Up" H 4900 1200 60  0001 C CNN "Description"
F 6 "Vishay" H 4900 1200 60  0001 C CNN "MFN"
F 7 "CRCW080510K0JNEA" H 4900 1200 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 4900 1200 60  0001 C CNN "Package ID"
F 9 "ANY" H 4900 1200 60  0001 C CNN "Source"
F 10 "N" H 4900 1200 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 4900 1200 60  0001 C CNN "Subsystem"
F 12 "~" H 4900 1200 60  0001 C CNN "Notes"
	1    4900 1200
	-1   0    0    1   
$EndComp
$Comp
L R R14
U 1 1 5615AAC4
P 2700 5650
F 0 "R14" V 2780 5650 40  0000 C CNN
F 1 "1K" V 2707 5651 40  0000 C CNN
F 2 "~" V 2630 5650 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/VISH/VISHS75859/VISHS75859-1.pdf" H 2700 5650 30  0001 C CNN
F 4 "METAL GLAZE/THICK FILM, 0.125W, 5%, 200ppm, 1000ohm, SURFACE MOUNT, 0805," H 2700 5650 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P Serial Tx Terminator" H 2700 5650 60  0001 C CNN "Description"
F 6 "Vishay" H 2700 5650 60  0001 C CNN "MFN"
F 7 "CRCW08051K00JNEA" H 2700 5650 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 2700 5650 60  0001 C CNN "Package ID"
F 9 "ANY" H 2700 5650 60  0001 C CNN "Source"
F 10 "N" H 2700 5650 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 2700 5650 60  0001 C CNN "Subsystem"
F 12 "~" H 2700 5650 60  0001 C CNN "Notes"
	1    2700 5650
	0    -1   -1   0   
$EndComp
$Comp
L R R15
U 1 1 5615AB21
P 2700 5900
F 0 "R15" V 2780 5900 40  0000 C CNN
F 1 "1K" V 2707 5901 40  0000 C CNN
F 2 "~" V 2630 5900 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/VISH/VISHS75859/VISHS75859-1.pdf" H 2700 5900 30  0001 C CNN
F 4 "METAL GLAZE/THICK FILM, 0.125W, 5%, 200ppm, 1000ohm, SURFACE MOUNT, 0805," H 2700 5900 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P Serial Rx Terminator" H 2700 5900 60  0001 C CNN "Description"
F 6 "Vishay" H 2700 5900 60  0001 C CNN "MFN"
F 7 "CRCW08051K00JNEA" H 2700 5900 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 2700 5900 60  0001 C CNN "Package ID"
F 9 "ANY" H 2700 5900 60  0001 C CNN "Source"
F 10 "N" H 2700 5900 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 2700 5900 60  0001 C CNN "Subsystem"
F 12 "~" H 2700 5900 60  0001 C CNN "Notes"
	1    2700 5900
	0    -1   -1   0   
$EndComp
$Comp
L C C11
U 1 1 5615AE65
P 2050 1500
F 0 "C11" H 2100 1600 40  0000 L CNN
F 1 "0.1 uF" H 2100 1400 40  0000 L CNN
F 2 "~" H 2088 1350 30  0000 C CNN
F 3 "http://images.ihscontent.net/vipimages/VipMasterIC/IC/KEME/KEMES10043/KEMES10043-1.pdf" H 2050 1500 60  0001 C CNN
F 4 "CAPACITOR, CERAMIC, MULTILAYER, 100 V, X7R, 0.1 uF, SURFACE MOUNT, 0805, CHIP, ROHS COMPLIANT" H 2050 1500 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P Reset Cap" H 2050 1500 60  0001 C CNN "Description"
F 6 "Kemet" H 2050 1500 60  0001 C CNN "MFN"
F 7 "C0805C104K1RACAUTO" H 2050 1500 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 2050 1500 60  0001 C CNN "Package ID"
F 9 "ANY" H 2050 1500 60  0001 C CNN "Source"
F 10 "N" H 2050 1500 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 2050 1500 60  0001 C CNN "Subsystem"
F 12 "~" H 2050 1500 60  0001 C CNN "Notes"
	1    2050 1500
	0    -1   -1   0   
$EndComp
$Comp
L R R17
U 1 1 5615BCD3
P 5650 2550
F 0 "R17" H 5725 2500 40  0000 L CNN
F 1 "1M" V 5650 2550 40  0000 C CNN
F 2 "~" V 5580 2550 30  0000 C CNN
F 3 "http://www.vishay.com/docs/20035/dcrcwe3.pdf" H 5650 2550 30  0001 C CNN
F 4 "RES SMD 1M OHM 1% 1/8W 0805" H 5650 2550 60  0001 C CNN "Characteristics"
F 5 "ATMEGA328P Xtal 1M Feedback Resistor" H 5650 2550 60  0001 C CNN "Description"
F 6 "Vishay" H 5650 2550 60  0001 C CNN "MFN"
F 7 "CRCW08051M00FKEA" H 5650 2550 60  0001 C CNN "MFP"
F 8 "SMD_0805" H 5650 2550 60  0001 C CNN "Package ID"
F 9 "ANY" H 5650 2550 60  0001 C CNN "Source"
F 10 "N" H 5650 2550 60  0001 C CNN "Critical"
F 11 "328P_Sub" H 5650 2550 60  0001 C CNN "Subsystem"
F 12 "~" H 5650 2550 60  0001 C CNN "Notes"
	1    5650 2550
	1    0    0    -1  
$EndComp
Wire Wire Line
	3500 1650 3500 1775
Wire Wire Line
	3300 1650 3500 1650
Wire Wire Line
	3300 1775 3300 1650
Wire Wire Line
	3500 2275 3500 2175
Wire Wire Line
	3300 2275 3500 2275
Wire Wire Line
	3300 2275 3300 2175
$Comp
L GND #PWR043
U 1 1 562077A6
P 5100 4550
F 0 "#PWR043" H 5100 4550 30  0001 C CNN
F 1 "GND" H 5100 4480 30  0001 C CNN
F 2 "~" H 5100 4550 60  0000 C CNN
F 3 "~" H 5100 4550 60  0000 C CNN
F 4 "ANY" H 5100 4550 60  0001 C CNN "Source"
F 5 "N" H 5100 4550 60  0001 C CNN "Critical"
F 6 "~" H 5100 4550 60  0001 C CNN "Notes"
	1    5100 4550
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR044
U 1 1 56207870
P 4750 2900
F 0 "#PWR044" H 4750 2900 30  0001 C CNN
F 1 "GND" H 4750 2830 30  0001 C CNN
F 2 "~" H 4750 2900 60  0000 C CNN
F 3 "~" H 4750 2900 60  0000 C CNN
F 4 "ANY" H 4750 2900 60  0001 C CNN "Source"
F 5 "N" H 4750 2900 60  0001 C CNN "Critical"
F 6 "~" H 4750 2900 60  0001 C CNN "Notes"
	1    4750 2900
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR045
U 1 1 562079B8
P 3400 2425
F 0 "#PWR045" H 3400 2425 30  0001 C CNN
F 1 "GND" H 3400 2355 30  0001 C CNN
F 2 "~" H 3400 2425 60  0000 C CNN
F 3 "~" H 3400 2425 60  0000 C CNN
F 4 "ANY" H 3400 2425 60  0001 C CNN "Source"
F 5 "N" H 3400 2425 60  0001 C CNN "Critical"
F 6 "~" H 3400 2425 60  0001 C CNN "Notes"
	1    3400 2425
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR046
U 1 1 56207AE4
P 1550 2425
F 0 "#PWR046" H 1550 2425 30  0001 C CNN
F 1 "GND" H 1550 2355 30  0001 C CNN
F 2 "~" H 1550 2425 60  0000 C CNN
F 3 "~" H 1550 2425 60  0000 C CNN
F 4 "ANY" H 1550 2425 60  0001 C CNN "Source"
F 5 "N" H 1550 2425 60  0001 C CNN "Critical"
F 6 "~" H 1550 2425 60  0001 C CNN "Notes"
	1    1550 2425
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR047
U 1 1 56208C49
P 4350 1100
F 0 "#PWR047" H 4350 1100 30  0001 C CNN
F 1 "GND" H 4350 1030 30  0001 C CNN
F 2 "~" H 4350 1100 60  0000 C CNN
F 3 "~" H 4350 1100 60  0000 C CNN
F 4 "ANY" H 4350 1100 60  0001 C CNN "Source"
F 5 "N" H 4350 1100 60  0001 C CNN "Critical"
F 6 "~" H 4350 1100 60  0001 C CNN "Notes"
	1    4350 1100
	1    0    0    -1  
$EndComp
$EndSCHEMATC
