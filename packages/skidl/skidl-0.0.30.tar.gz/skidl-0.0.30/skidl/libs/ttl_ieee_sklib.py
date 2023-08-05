from skidl import SKIDL, TEMPLATE, Part, Pin, SchLib

SKIDL_lib_version = '0.0.1'

ttl_ieee = SchLib(tool=SKIDL).add_parts(*[
        Part(name='7400',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7401',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['7439', '7403']),
        Part(name='7402',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7404',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7405',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7406',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['7416']),
        Part(name='7407',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['7417']),
        Part(name='7408',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7409',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7410',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7411',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7412',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74126',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74426']),
        Part(name='74128',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7413',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS18']),
        Part(name='74132',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS24']),
        Part(name='74136',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7414',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS19']),
        Part(name='74141',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74147',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74148',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74151',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74153',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74154',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74155',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74156',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74157',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74158',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74159',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74164',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74165',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74166',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74173',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74176',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74196']),
        Part(name='7420',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7421',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7422',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7425',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74251',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74253',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7426',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['7438']),
        Part(name='7427',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74278',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7428',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74293',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7430',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7432',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7433',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7437',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7440',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7442',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74425',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74125']),
        Part(name='7443',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7444',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7445',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74145']),
        Part(name='7446',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS347', '7447', '74246', '74247', '74LS447']),
        Part(name='7448',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74248', '74249']),
        Part(name='7451',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7454',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7483',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7485',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7486',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7490',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7491',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7492',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7493',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7495',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='7496',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC237',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC238',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC36',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC804',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC805',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC808',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74HC832',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS133',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS137',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS138',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS139',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS15',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS152',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS161',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS160', '74LS162', '74LS163']),
        Part(name='74LS168',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS169', '74LS668', '74LS669']),
        Part(name='74LS170',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS177',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS197']),
        Part(name='74LS190',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS191']),
        Part(name='74LS192',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS193']),
        Part(name='74LS194',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS195',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS239',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS240',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS241',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS244']),
        Part(name='74LS242',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS243',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS245',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS257',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS258',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS266',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS280',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS283',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS290',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS295',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS298',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS299',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS323']),
        Part(name='74LS348',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS352',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS353',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS365',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS366',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS367',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS368',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS386',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS390',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS395',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS396',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS398',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS399',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS445',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS465',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS466',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS467',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS468',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS49',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS540',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS541',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS55',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS56',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS57']),
        Part(name='74LS590',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS591',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS594',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS595',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS596',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS597',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS599',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS620',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS640']),
        Part(name='74LS621',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS641']),
        Part(name='74LS622',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS642']),
        Part(name='74LS623',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS645']),
        Part(name='74LS638',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS639']),
        Part(name='74LS670',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS682',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS684']),
        Part(name='74LS683',dest=TEMPLATE,tool=SKIDL,do_erc=True,aliases=['74LS685']),
        Part(name='74LS686',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS687',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS688',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74LS689',dest=TEMPLATE,tool=SKIDL,do_erc=True),
        Part(name='74S140',dest=TEMPLATE,tool=SKIDL,do_erc=True)])
