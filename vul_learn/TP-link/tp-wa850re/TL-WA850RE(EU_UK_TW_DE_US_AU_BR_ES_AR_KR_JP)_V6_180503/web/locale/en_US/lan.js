// JavaScript Documen
(function($){

	$.su = $.su || {};
	$.su.CHAR = {
		/*****登录页面 的相关内容*****/
		LOGIN: {
			USERNAME: 					"Username",
			PASSWORD: 					"Password",
			FORGET_PASSWORD: 			"Forgot password?",
			LOGIN: 						"Login",

			FORGET_PASSWORD_INFO_0: 	"Note: You can also reset the login password to the default password (admin) by resetting the range extender to its factory defaults.",
			FORGET_PASSWORD_INFO_1: 	"Ensure to enable the password recovery function. The system will send a verficiation code to your alternate email address to reset the default username and password.",
			FORGET_PASSWORD_SEND_FAILED:"Failed to send the verfication code. Please check your Internet connection.",

			VERIFICATION_CODE: 			"Verification code",

			RECEIVE_CODE: 				"Receive code",

			CONFIRM: 					"Confirm",

			SEC: 						"s",

			USER_CONFLICT: 				"User login conflict.",
			
			USER_CONFLICT_INFO: 		"User %USER% with host %HOST% (%IP%/%MAC%) is currently logged into the extender. You cannot login at the same time. Please try again later.",

			LOGIN_FAILED: 				"Login Failed",
			LOGIN_FAILED_COUNT: 		"Login failed for %num1 times and you still have %num2 attempts left.",
			NO_COOKIE: 					"Cookies must be enabled to login. Please enable Cookies or turn off Private/Incognito browsing mode.", 

			FORGET_PASSWORD_NOTE: 		"Note: You can also reset the login password to the default password (admin) by resetting the range extender to its factory defaults.",
			
			WELCOME:					"Welcome to use TP-Link's Range Extender",
			WELCOME_TIPS:				"For security, please create a login password for your device.",
			NEW_PASSWORD: 				"Create Password",
			CONFIRM_PASSWORD: 			"Confirm Password",
			START:						"Start"
		},

		/****主页面 上的相关内容****/
		INDEX:
		{
			FIRMWARE_VERSION: 				"Firmware Version:",
			HARDWARE_VERSION: 				"Hardware Version:",
			HELP_SUPPORT: 					"Support",
			FAQ: 							"FAQ",
			CONFIRM_REBOOT: 				"Are you sure you want to reboot the range extender?",
			CONFIRM_LOGOUT: 				"Are you sure you want to log out?",
			REBOOTING: 						"Rebooting...",

			MODE_SWITCH: 					"Switch Mode",
			ACCESS_POINT: 					"Access Point",
			ACCESS_POINT_TIPS: 				"Transforms your existing wired network to a wireless network.",
			ROUTER: 						"Router",
			ROUTER_TIPS: 					"Works as a wireless adapter to connect your wired device (e.g Xbox or PS3) to a wireless network.",
			REPEATER: 						"Range Extender",
			REPEATER_TIPS: 					"Extends your exisiting wireless coverage by repeating the wireless signal.",
			MODE_REBOOT_TIP: 				"Changing the operating mode will reboot the device, do you want to continue?",
			MODE_FAIL_TIP: 					"Mode switching failed. Please try again or reboot your router.",
			HELP_APP: "App",
			CHARACTERS_ILLUSTRETE_TITLE: "Scan the QR code to download TP-Link Tether app",
			CHARACTERS_ILLUSTRETE_NOTE0: "Conveniently manage your network from any mobile device.",
			CHARACTERS_ILLUSTRETE_NOTE1: "Complete control from the palm of your hand."
		},

		NAV: {
			QUICK_SETUP: 				"Quick Setup",
			SETTING: 					"Settings"
		},

		CONTROL: {
			MODE: 						"Mode",
			LOGIN: 						"Login",
			LOGOUT: 					"Logout",
			REBOOT: 					"Reboot"
		},


		/***公共部分的代码***/

		LANGUAGE: {
			EN_US: 						"English",
			ZH_CN: 						"简体中文"
		},

		REGION: {
			ALBANIA: 					"Albania",
			ALGERIA: 					"Algeria",
			AMERICAN_SAMOA: 			"American Samoa",
			ARGENTINA: 					"Argentina",
			ARMENIA: 					"Armenia",
			ARUBA: 						"Aruba",
			AUSTRALIA: 					"Australia",
			AUSTRIA: 					"Austria",
			AZERBAIJAN: 				"Azerbaijan",
			BAHAMAS: 					"Bahamas",
			BAHRAIN: 					"Bahrain",
			BANGLADESH: 				"Bangladesh",
			BARBADOS: 					"Barbados",
			BELARUS: 					"Belarus",
			BELGIUM: 					"Belgium",
			BELIZE: 					"Belize",
			BERUMUDA: 					"Bermuda",
			BOLIVIA: 					"Bolivia",
			BOSNIA_HERZEGOWINA: 		"Bosnia and Herzegovina",
			BRAZIL: 					"Brazil",
			BRUNEI_DARUSSALAM: 			"Brunei Darussalam",
			BULGARIA: 					"Bulgaria",
			CAMBODIA: 					"Cambodia",
			CANADA: 					"Canada",
			CAYMAN_ISLANDS: 			"Cayman Islands",
			CHILE: 						"Chile",
			CHINA: 						"China",
			COLOMBIA: 					"Colombia",
			COSTA_RICA: 				"Costa Rica",
			CROATIA: 					"Croatia",
			CYPRUS: 					"Cyprus",
			CZECH_REPUBLIC: 			"Czech Republic",
			DENMARK: 					"Denmark",
			DOMINICAN_REPUBLIC: 		"Dominican Republic",
			ECUADOR: 					"Ecuador",
			EGYPT: 						"Egypt",
			EL_SALVADOR: 				"El Salvador",
			ESTONIA: 					"Estonia",
			ETHIOPIA: 					"Ethiopia",
			FAEROE_ISLANDS: 			"Faroe Islands",
			FINLAND: 					"Finland",
			FRANCE: 					"France",
			FRENCH_GUIANA: 				"French Guiana",
			FRENCH_POLYNESIA: 			"French Polynesia",
			GEORGIA: 					"Georgia",
			GERMANY: 					"Germany",
			GREECE: 					"Greece",
			GREENLAND: 					"Greenland",
			GRENADA: 					"Grenada",
			GUADELOUPE: 				"Guadeloupe",
			GUAM: 						"Guam",
			GUATEMALA: 					"Guatemala",
			HAITI: 						"Haiti",
			HONDURAS: 					"Honduras",
			HONG_KONG: 					"Hong Kong",
			HUNGARY: 					"Hungary",
			ICELAND: 					"Iceland",
			INDIA: 						"India",
			INDONESIA: 					"Indonesia",
			IRAN: 						"Iran",
			IRAQ: 						"Iraq",
			IRELAND: 					"Ireland",
			ISRAEL: 					"Israel",
			ITALY: 						"Italy",
			JAMAICA: 					"Jamaica",

			JAPAN: 						"Japan",
			JAPAN_1: 					"Japan 1",
			JAPAN_2: 					"Japan 2",
			JAPAN_3: 					"Japan 3",
			JAPAN_4: 					"Japan 4",
			JAPAN_5: 					"Japan 5",
			JAPAN_6: 					"Japan 6",

			JORDAN: 					"Jordan",
			KAZAKHSTAN: 				"Kazakhstan",
			KENYA: 						"Kenya",

			NORTH_KOREA: 				"North Korea",
			KOREA_REPUBLIC: 			"Korea Republic",
			KOREA_REPUBLIC_3: 			"Korea Republic 3",

			KUWAIT: 					"Kuwait",
			LATVIA: 					"Latvia",
			LEBANON: 					"Lebanon",
			LIBYA: 						"Libya",
			LIECHTENSTEIN: 				"Liechtenstein",
			LITHUANIA: 					"Lithuania",
			LUXEMBOURG: 				"Luxembourg",
			MACAU: 						"Macau",
			MACEDONIA: 					"Macedonia",
			MALAWI: 					"Malawi",
			MALAYSIA: 					"Malaysia",
			MALDIVES: 					"Maldives",
			MALTA: 						"Malta",
			MARTHINIQUE: 				"Martinique",
			MAURITIUS: 					"Mauritius",
			MAYOTTE: 					"Mayotte",
			MEXICO: 					"Mexico",
			MONACO: 					"Monaco",
			MONGOLIA: 					"Mongolia",
			MOROCCO: 					"Morocco",
			NEPAL: 						"Nepal",
			NETHERLANDS: 				"Netherlands",
			NETHERLANDS_ANTILLES: 		"Netherlands Antilles",
			
			NEW_ZEALAND: 				"New Zealand",
			NICARAGUA: 					"Nicaragua",
			NIGERIA: 					"Nigeria",
			NORWAY: 					"Norway",
			NORTHERN_MARIANA_ISLANDS: 	"Northern Mariana Islands",
			OMAN: 						"Oman",
			PAKISTAN: 					"Pakistan",
			PANAMA: 					"Panama",
			PAPUA_NEW_GUINEA: 			"Papua New Guinea",
			PARAGUAY: 					"Paraguay",
			PERU: 						"Peru",
			PHILIPPINES: 				"Philippines",
			POLAND: 					"Poland",
			PORTUGAL: 					"Portugal",
			PUERTO_RICO: 				"Puerto Rico",
			QATAR: 						"Qatar",
			REUNION: 					"Reunion",
			ROMANIA: 					"Romania",
			RUSSIA: 					"Russia",
			RWANDA: 					"Rwanda",
			SAMOA: 						"Samoa",
			SAUDI_ARABIA: 				"Saudi Arabia",
			SINGAPORE: 					"Singapore",
			SLOVAK_REPUBLIC: 			"Slovak Republic",
			SLOVENIA: 					"Slovenia",
			SOUTH_AFRICA: 				"South Africa",
			SPAIN: 						"Spain",
			SRI_LANKA: 					"Sri Lanka",
			SURINAME: 					"Suriname",
			SWEDEN: 					"Sweden",
			SWITZERLAND: 				"Switzerland",
			SYRIA: 						"Syria",
			TAIWAN: 					"Taiwan",
			TANZANIA: 					"Tanzania",
			THAILAND: 					"Thailand",
			TRINIDAD_TOBAGO: 			"Trinidad & Tobago",
			TUNISIA: 					"Tunisia",
			TURKEY: 					"Turkey",
			UGANDA: 					"Uganda",
			UKRAINE: 					"Ukraine",
			UNITED_ARAB_EMIRATES: 		"United Arab Emirates",
			UNITED_KINGDOM: 			"United Kingdom",
			UNITED_STATES: 				"United States",
			URUGUAY: 					"Uruguay",
			UZBEKISTAN: 				"Uzbekistan",
			VENEZUELA: 					"Venezuela",
			VIETNAM: 					"Viet Nam",
			VIRGIN_ISLANDS: 			"Virgin Islands (U.S.)",
			YEMEN: 						"Yemen",
			ZIMBABWE: 					"Zimbabwe",
			UNIVERSAL:					"Universal"
		},
		
		TIME_ZONE: {
			ENIWETOK: 					"(GMT-12:00) Eniwetok, Kwajalein", 
			MIDWAY_ISLAND_SAMOA: 		"(GMT-11:00) Midway Island,Samoa",
			HAWAII: 					"(GMT-10:00) Hawaii",
			ALASKA: 					"(GMT-09:00) Alaska",
			PACIFIC_TIME: 				"(GMT-08:00) Pacific Time",
			MOUNTAIN_TIME: 				"(GMT-07:00) Mountain Time (US Canada)",
			CENTRAL_TIME: 				"(GMT-06:00) Central Time (US Canada)",
			EASTERN_TIME: 				"(GMT-05:00) Eastern Time (US Canada)",
			CARACAS:					"(GMT-04:30) Caracas",
			ATLANTIC_TIME: 				"(GMT-04:00) Atlantic Time (Canada)",
			NEWFOUNDLAND: 				"(GMT-03:30) Newfoundland",

			BRASILIA_BUENOS_AIRES: 		"(GMT-03:00) Brasilia, Buenos Aires",
			MID_ATLANTIC: 				"(GMT-02:00) Mid-Atlantic",
			AZORES_CAPE_VERDE_IS: 		"(GMT-01:00) Azores, Cape Verde Is",
			GREENWICH_MEAN_TIME: 		"(GMT) Greenwich Mean Time, Dublin, London",
			BERLIN_STOCKHOLM: 			"(GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels",
			ATHENS_HELSINKI: 			"(GMT+02:00) Athens, Helsinki, Eastern Europe, Israel",
			BAGHDAD_KUWAIT: 			"(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh, Moscow",

			TEHERAN: 					"(GMT+03:30) Teheran",

			ABU_DHABI: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			KABUL: 						"(GMT+04:30) Kabul",

			ISLAMABAD_KARACHI: 			"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			MADRAS_CALCUTTA: 			"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			KATMANDU: 					"(GMT+05:45) Katmandu",

			ALMA_ATA_DHAKA: 			"(GMT+06:00) Alma-Ata, Dhaka",
			RANGOON: 					"(GMT+06:30) Rangoon",

			BANGKOK_JAKARTA_HANOI: 		"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			BEIJING_HONGKONG: 			"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			TOKYO_OSAKA_SAPPORO: 		"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			ADELAIDE: 					"(GMT+09:30) Adelaide",

			BRISBANE_CANBERRA: 			"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			MAGADAN_SOLOMAN_IS: 		"(GMT+11:00) Magadan, Solomon Is., New Caledonia",
			FIJI_KAMCHATKA: 			"(GMT+12:00) Fiji, Kamchatka, Auckland",
			NUKU: 						"(GMT+13:00) Nuku'alofa"
		},

		APPLIST:{
			APP:						"Application",
			GAME:						"Game",
			QQ:							"QQ",
			MSN:						"MSN",
			LINE:						"LINE",
			Skype:                      "Skype",
			PPStream: 					"PPStream",
			SIP:  						"SIP",
			PPTC: 						"PPTC", 
			H323: 						"H323",
			HTTPFD: 					"HTTPFD",
			PPTP: 						"PPTP",
			L2TP:  						"L2TP",
			IPSec:                      "IPSec",
			IMAP: 						"IMAP",
			xl_others:  				"xl_others",
			Vonage:  					"Vonage",
			netTalk:  					"netTalk",
			iTalkBB: 					"iTalkBB",
			HTTP: 						"HTTP",
			MMS:  						"MMS",
			RTSP:                       "RTSP",
			WOW:						"wow",
			LOL:						"lol",
			SSH:						"SSH",
			TELNET:						"Telnet",
			VPN:						"VPN",
			FTP:						"FTP",
			WWW:						"WWW",
			DNS:						"DNS",
			ICMP:						"ICMP",
			SMTP:						"SMTP",
			NNTP:						"NNTP",
			POP3:						"POP3",
			HTTPS:  					"HTTPS",


			END:						""
		},

		DATE: {
			DAY: 						"Day",

			MONDAY: 					"Monday",
			TUESDAY: 					"Tuesday",
			WEDNESDAY: 					"Wednesday",
			THURSDAY: 					"Thursday",
			FRIDAY: 					"Friday",
			SATURDAY: 					"Saturday",
			SUNDAY: 					"Sunday",
			
			MON: 						"Mon",
			TUES: 						"Tue",
			WED: 						"Wed",
			THUR: 						"Thu",
			FRI: 						"Fri",
			SAT: 						"Sat",
			SUN: 						"Sun",

			JAN: 						"Jan",
			FEB: 						"Feb",
			MAR: 						"Mar",
			APR: 						"Apr",
			MAY: 						"May",
			JUN: 						"Jun",
			JUL: 						"Jul",
			AUG: 						"Aug",
			SEP: 						"Sep",
			OCT: 						"Oct",
			NOV: 						"Nov",
			DEC: 						"Dec"

		},

		HOUR: {
			AM_1: 						"1 AM",
			AM_2: 						"2 AM",
			AM_3: 						"3 AM",
			AM_4: 						"4 AM",
			AM_5: 						"5 AM",
			AM_6: 						"6 AM",
			AM_7: 						"7 AM",
			AM_8: 						"8 AM",
			AM_9: 						"9 AM",
			AM_10: 						"10 AM",
			AM_11: 						"11 AM",
			AM_12: 						"12 AM",
			PM_1: 						"1 PM",
			PM_2: 						"2 PM",
			PM_3: 						"3 PM",
			PM_4: 						"4 PM",
			PM_5: 						"5 PM",
			PM_6: 						"6 PM",
			PM_7: 						"7 PM",
			PM_8: 						"8 PM",
			PM_9: 						"9 PM",
			PM_10: 						"10 PM",
			PM_11: 						"11 PM",
			PM_12: 						"12 PM"
		},

		ORDER: {
			"1ST": 						"First",
			"2ND": 						"2nd",
			"3RD": 						"3rd",
			"4TH": 						"4th",
			"5TH": 						"Last"
		},

		//这部分是表格中常用的部分
		GRID: {
			CLIENT_NUMBER: 				"Total clients",

			ID: 						"ID",
			MODIFY: 					"Modify",
			STATUS: 					"Status",
			ENABLE: 					"Enable",

			OPERATION: 					"Operation",
			CHOOSE: 					"Choose",
			DESCRIPTION: 				"Description",
			

			AUTO_REFRESH: 				"Auto Refresh",
			REFRESH: 					"Refresh",
			NUMBER: 					"Number",
			ENABLED: 					"Enabled",
			DISABLED: 					"Disabled",
			ACTIVE: 					"Active",
			SELECTED: 					""
		},

		//常用的操作
		OPERATION: {
			ADD: 						"Add",
			CHOOSE: 					"Choose",
			EDIT: 						"Edit",
			DELETE: 					"Delete",
			DELETE_ALL: 				"Delete All",
			REMOVE: 					"Remove",
			RESET: 						"Reset",
			DETECT: 					"Detect",
			ENABLE: 					"Enable",
			DISABLE: 					"Disable",

			REFRESH: 					"Refresh",
			RESCAN: 					"Rescan",
			SEARCH: 					"Search...",
			BROWSE: 					"Browse",

			SAVE: 						"Save",
			BACK: 						"Back",

			PREV: 						"Prev",
			NEXT: 						"Next",
			FINISH: 					"Finish",
			
			ON: 						"On",
			OFF: 						"Off",
			LOW: 						"Low",
			MIDDLE: 					"Middle",
			HIGH: 						"High",
			
			OK: 						"OK",
			CANCEL: 					"Cancel",

			YES: 						"Yes",
			NO: 						"No",
			
			CONNECTED: 					"Connected",
			CONNECTING: 				"Connecting",
			DISCONNECTING: 				"Disconnecting",
			DISCONNECTED: 				"Not Connected",

			PASSWORD_HINT: 				"Password",
			FILEBUTTONTEXT: 			"Browse",
			FILEBLANKTEXT: 				"Please select a file.",
			NOSELECTEDTEXT: 			"Select",

			ADD_A_NEW_KEYWORD: 			"Add a New Keyword",

			SUCCESSED: 					"Success!",
			FORM_SAVED: 				"Saved",
			FORM_FAILED: 				"Failed",
			GRID_ID_COLUMN: 			"ID",
			GRID_SAVED: 				"Saved",
			GRID_FAILED: 				"Failed",
			GRID_NONE_SELECT: 			"Please select at least one entry.",
			GRID_DELETE_COMFIRM: 		"Are you sure you want to delete the selected entries?",
			GRID_DELETE_ALL_COMFIRM: 	"Are you sure you want to delete all the entries?",
			GRID_MAX_RULES: 			"Maximum entries exceeded.",
			KEYWORD_MAX_OVERFLOW: 		"Maximum number of keywords exceeded.",

			NOTE: 						"Note:",
			NOTICE: 					"Notice:"
		},
		
		VTYPETEXT: {
			INVALIDTEXT: 				"Invalid value.",
			BLANKTEXT: 					"This field is required.",

			EMAIL: 						"This field should be an e-mail address in the format \"user@example.com\".",
			NUMBER: 					"Please enter a valid number.",
			NUMBER_MIN: 				"This number should be greater than %.",
			NUMBER_MAX: 				"This number should be less than %.",
			NUMBER_MIN_MAX: 			"This number should be between %min and %max.",
			HEX: 						"This field should be a hexadecimal number.",
			IP: 						"This field should be an IP address in the format.",
			IP_NO_ALL_ZERO:				"IP address cannot be 0.0.0.0.",
			IP_NO_LOOP:					"This IP address cannot be the loopback IP.",
			IP_NO_D_TYPE:				"IP address cannot be a Class D address.",
			IP_NO_E_TYPE:				"IP address cannot be a Class E address.",
			IP_NO_ALL_ONE:				"IP address cannot be 255.255.255.255.",
			IP_NO_FIRST_ALL_ONE:		"IP address cannot start with 255.",
			IP_NO_FIRST_ZERO:			"IP address cannot start with 0.",
			MASK_NO_ALL_ONE:			"Subnet Mask cannot be 255.255.255.255.",
			IPV6: 						"This field should be a valid IPv6 address in the format.",
			IPV6_NOT_GLOBAL:			"This field requires a non-global-unicast address. Please try again.",
			IPV6_NOT_PREFIX:			"This field should be a valid IPv6 prefix/address. Please try again.",
			IP_DOMAIN: 					"This field should be a valid IP address or a domain in the format.",
			MAC: 						"Invalid MAC address.",
			MULTI_MAC:					"Invalid MAC address.",
			DATE: 						"The date should be in a valid format.",
			DATE_INVALID: 				"Please enter a valid date between 01/01/1970 and 12/31/2030.",
			MASK: 						"This field should be a valid netmask address.",
			DOMAIN: 					"This field should be a valid domain name.",
			STRING_DOMAIN:              "The domain name should be in a vaild format.",
			USER: 						"The username should be in a valid format.",
			NOTE: 						"This field should be a note in the format.",
			PWD: 						"The password should be a valid format.",
			SSID: 						"The SSID should be in a valid format.",
			NAME:						"Please enter a valid name.",
			ASCII_VISIBLE:				"The string should be in ASCII format.",
			STRING_VISIBLE:				"The string should be in a valid format.",
			STRING_VISIBLE_NO_COMMA:    "The string should be in a valid format without comma or Comma is not allowed.",
			STRING_VISIBLE_ALLOW_BLANK: "This field should be a visible string or space in the format.",
			INVALID_LENGTH: 			"Invalid length.",

			ACCOUNT:					"Please enter a valid username.",
			PASSWORD:					"Please enter a valid password."

			
		},
		//差错提示语句
		ERROR: {			
			"00000001":					"Error Type",
			"00000002":					"Checksum Error",
			"00000003":					"Size too large",
			"00000004":					"Update Error",
			"00000005":					"Failed to reboot.",
			"00000006":					"Unknown Error.",
			"00000007":					"The item already exists. Please enter another one.",
			"00000008":					"Timed out.",
			"00000009":					"Invalid port.",
			"00000010":					"Not a number",
			"00000011":					"Username should be the same as the From field value. ",
			"00000012": 				"Invalid Group Key Update Period. Please enter another one.",
			"00000013": 				"Invalid number range. Please enter another one.",
			"00000014": 				"Invalid password. Please try again.",

			"00000015": 				"Invalid password. Please try again.",
			"00000016": 				"Invalid value. Please enter a number between 576 to 1500",
			"00000017": 				"Invalid value. Please enter a number between 576 to 1492",
			"00000018": 				"Invalid value. Please enter a number between 576 to 1460",
			"00000019": 				"Invalid value. Please enter a number between 576 to 1420",
			"00000020": 				"Invalid value. Please enter a number between 0 to 120",
			"00000021":					"Invalid password. Please try again.",
			
			"00000022":					"Invalid WPS PIN. Please enter again.",
			"00000023":					"Error.",
			"00000024":					"Connection Failed.",
			"00000025":					"Connecting…",
			"00000026":					"Connection cancelled.",
			
			"00000027":					"Connection Failed.",
			"00000028":					"Connection Failed./Timed out.",
			"00000029":					"Connection Idle.",
			"00000030":					"Incorrect username or password.",
			"00000031":					"Incorrect domain name.",

			"00000032": 				"The middle value should be less than the low value. ",
			"00000033": 				"The high value should be less than the middle value. ",
			"00000034": 				"Invalid value. Please enter a number between 5 to 7200",
			"00000035": 				"Invalid value. Please enter a number between 40 to 1000",
			"00000036": 				"Invalid value. Please enter a number between 1 to 2346",
			"00000037": 				"Invalid value. Please enter a number between 256 to 2346",
			"00000038": 				"Invalid value. Please enter a number between 1 to 15",
			"00000039": 				"Invalid value.<br/> Please enter 0 or a value between 30 to 86400.",
			"00000040": 				"Both SSID and MAC address fields cannot be blank.",
			"00000041": 				"Invalid value. Please enter a number between 1 to 24",
			"00000042": 				"Invalid value.<br/> Please enter 80 or a value between 1024 to 65535.",
			"00000043": 				"Invalid value. Please enter a number between 1 to 50",
			"00000044": 				"Invalid value. Please enter a number between 4 to 1472",
			"00000045": 				"Invalid value. Please enter a number between 100 to 2000",
			"00000046": 				"Invalid value. Please enter a number between 1 to 30",
			"00000047": 				"Invalid value. Please enter a number between 1 to 65535",

			
			"00000049":					"Invalid destination network.",
			"00000050": 				"Invalid DNS Server IP address. Please enter again.",
			"00000051": 				"This MAC address already exists. Please enter another one.",
			"00000052": 				"This IP address already exists. Please enter another one.",
			"00000053": 				"The starting address should NOT be greater than the ending address. Please try again.",
			"00000054": 				"The IP address pool and LAN IP address should be in the same subnet. Please enter another one.",
			"00000055": 				"Invalid IP address pool. Please enter again.",
			"00000056": 				"The IP address and LAN IP address should not be in the same subnet. Please enter another one.",
			"00000057": 				"Invalid PSK password. Please enter again.",
			"00000058": 				"Invalid WEP password. Please enter again.",
			"00000059": 				"Invalid Subnet Mask or LAN IP address. Please enter a valid one.",

			"00000060": 				"The WAN IP address and LAN IP address should not be in the same subnet. Please enter another one.",
			"00000061": 				"The starting time should be earlier than the ending time.",
			"00000062": 				"Should give a gateway for can not route to VPN Server without gateway",
			"00000063": 				"Should give a gateway for can not resolve VPN Server by DNS query",
			"00000064": 				"Unable to block host MAC address.",
			"00000065": 				"This item already exits. Please enter another one.",
										 
			"00000066": 				"The password should be at least 8 to 63 ASCII characters or 64 hexadecimal digits.",
			"00000067": 				"The password should be 10 hexadecimal digits.",
			"00000068": 				"The password should be 5 ASCII characters.",
			"00000069": 				"The password should be 26 hexadecimal digits.",
			"00000070": 				"The password should be 13 ASCII characters.",
			"00000071": 				"The password should be 32 hexadecimal digits.",
			"00000072": 				"The password should be 16 ASCII characters.",
			"00000073": 				"The password should be less than 64 characters",

			"00000074": 				"Invalid file type.",
			"00000075": 				"The number must be at least 8 digits.",
			"00000076": 				"This entry conflicts with the existing entries. Please check the trigger port and trigger protocol.",
			"00000077": 				"The IP address should not be the same with LAN address. Please enter again.",
			"00000078": 				"Please select a type.",
			"00000079": 				"Please select at least one item.",

			"00000080": 				"Passwords mismatch. Please try again.",

			"00000081": 				"Please select a predefined application or enter the application-specific ports and protocol. ",
			"00000082": 				"The ending IP address should be greater than the starting IP address.",
			"00000083": 				"The Gateway should not be the same as IP address. Please try again.",
			"00000084": 				"The Primary DNS should not be the same as IP address. Please try again.",
			"00000085": 				"The Secondary DNS should not be the same as the IP address. Please try again.",
			"00000086": 				"The Primary DNS should not be the same as Secondary DNS. Please try again.",
			"00000087": 				"This field should be a valid IP address or a string of characters.",
			
			"00000089": 				"You have exceeded %num attempts. Please try again after two hours.",

			"00000090": 				"The password should be 5/13 ASCII characters or 10/26 hexadecimal digits.",
			"00000091": 				"The password should be 8 to 63 ASCII characters or 64 hexadecimal digits.",
			"00000092": 				"The password should be %num ASCII characters.",
			"00000093": 				"The password should be %num hexadecimal digits.",


			"00000100": 				"Incorrect username. Please try again.",
			"00000101": 				"Incorrect password. Please enter again.",

			"00000102": 				"The Gateway and the LAN IP address should be in the same subnet.",

			"00000103": 				"The Gateway should not be a broadcast IP address.",
			"00000104": 				"The DNS should not be a broadcast IP address.",
			"00000105": 				"The Gateway should not be the host IP address.",
			"00000106": 				"This field should not be a netmask IP address.",
			"00000107": 				"This field should not be a broadcast IP address.",
			"00000108": 				"Invalid length.",
			"00000109": 				"Invalid format.",
			"00000110": 				"Failed,no access schedule!",
			"00000111": 				"MAC existed",
			"00000112": 				"The starting time should be earlier than the ending time.",
			"00000113": 				"Failed!invalid date!",
			"00000114":				"The starting time should not be the same as  the ending time."


		},


		/***菜单部分***/
		MENU: {
			STATUS: "Status",
			BASIC: "Basic",
			REGION: "Region",
			WIRELESS: "Wireless",
			WIRELESS_SETTINGS: "Wireless Settings",
			CONNECT: "Connect to Network",
			MAC_FILTERING: "MAC Filtering",
			WPS: "WPS",
			EXTEND_SETTINGS: "Extended Network",
			LAN: "LAN",
			DHCP: "DHCP Server",
			SYSTEM_TOOLS: "System Tools",
			IPV6: "IPv6",
			TIME_SETTINGS: "Time Settings",
			LED_CONTROL: "LED Control",
			FIRMWARE_UPGRADE: "Firmware Upgrade",
			RESTORE_BACKUP: "Backup & Restore",
			ACCOUNT: "Admin Account",
			ADVANCED_SETTINGS: "Advanced Settings",
			POWER_SCHEDULE: "Power Schedule",
			WIFI_COVERAGE: "Wi-Fi Coverage",
			SYSTEM_LOG: "System Log",
			ACCESS_CTR: "Access Control",
			ACCESS_CTR_ADV: "Access Control",
			HIGH_SPEED:"High Speed",
			NETWORK: "Network",
			PARENT_CONTROL: "Access Control",
			OPERATION_MODE: "Operation Mode"
		},

		/****功能页面的相关字符串部分****/
		QUICK_SETUP: {
			WIRELESS_SETTINGS: 			"Wireless Settings",
			SUMMARY: 					"Summary",

			EXIT: 						"Exit",
			NEXT: 						"Next",
			NONE: 						"None",

			REGION: 					"Region",
			TIME_ZONE: 					"Time Zone",
			PASSWORD: 					"Password",

			//wireless settings
			ON: 						"On",
			OFF: 						"Off",
			WIRELESS_24GHZ: 			"2.4GHz Wireless",
			WIRELESS_5GHZ: 				"5GHz Wireless",

			CONNECT_2G: "2.4GHz Host Network",
			CONNECT_5G: "5GHz Host Network",
			WIRELESS_SETTINGS: "Wireless Settings",
			SUMMARY: "Summary",
			SAVE: "Save",
			
			SSID: "SSID",
			SIGNAL: "Signal",
			MAC: "MAC Address",
			SECURITY: "Security",			
			
			BACK: "Back",
			MANUAL: "Other...",
			RESCAN: "Rescan",
			SKIP: "Skip",
			NEXT: "Next",
			SAVE_EXIT: "Finish",
			
			ROUTER_AP_2G_SSID: "Host 2.4GHz SSID",
			ROUTER_AP_5G_SSID: "Host 5GHz SSID",
			ROUTER_AP_SECURITY_24G: "Host 2.4GHz Security",
			ROUTER_AP_SECURITY_5G: "Host 5GHz Security",
			ROUTER_AP_PASSWORD_24G: "Host 2.4GHz Password",
			ROUTER_AP_PASSWORD_5G: "Host 5GHz Password",
			
			KEEP_SAME: "Copy Host SSID",

			HIDE_SSID_BROADCAST: "Hide SSID broadcast",
			HIDE_SSID: 		"Hide SSID",
			
			RADIO_2G: 		"Extend network on 2.4GHz",
			SSID_2G: 		"Extended 2.4GHz SSID",
			SECURITY_2G: 	"Extended 2.4GHz Security",
			PASSWORD_2G: 	"Extended 2.4GHz Password",
			PASSWORD_2G_TIP: 	"The extended 2.4GHz password is the same as your Host password.",

			AP_WIRELESS_24G: 	"Wireless 2.4GHz",
			AP_WIRELESS_5G: 	"Wireless 5GHz",
			
			RADIO_5G: "Extend network on 5GHz",
			SSID_5G: "Extended 5GHz SSID",
			SECURITY_5G: "Extended 5GHz Security",
			PASSWORD_5G: "Extended 5GHz Password",
			PASSWORD_5G_TIP: 	"The extended 5GHz password is the same as your Host password.",
			
			NO_SECURITY: "No Security",
            WPA_WPA2_PERSONAL: "WPA/WPA2 - Personal",
			WPA_WPA2_ENTERPRISE: "WPA/WPA2 - Enterprise",
			WEP: "WEP",
			WPA: "WPA-PSK",
			WPA2: "WPA2-PSK",
			WPA_WPA2: "WPA-PSK/WPA2-PSK",
			INDEX: "Index",

			//wep HINT
			ENCRPT_2G_NOTICE:           "The Host 2.4GHz encryption is <b>%s</b>.",
			ENCRPT_5G_NOTICE:           "The Host 5GHz encryption is <b>%s</b>.",
			ENCRPT_CHANGE_NOTICE:       "If you want to change to <b>%s</b>,please go to <b>Settings->Wireless</b>.",            

			CONNECT_ERROR: "No connection. Please check your router.",

			PASSWORD_ERROR: "Connection Failed. Please check the Host SSID or password, and connect again.",

			SUBMIT_WAIT_TIP: "Saving your settings.",
			SUBMIT_WAIT_TIME: "Please wait…",

			WIRELESS_TITLE_SUMMARY_2G: "2.4GHz Extended Network",
			WIRELESS_TITLE_SUMMARY_5G: "5GHz Extended Network",

			SCANNING: "Scanning...",

			RESET_USER_TITLE: 			"Create a new username and password.",
			NEW_USERNAME: 				"New Username",
			NEW_PASSWORD: 				"New Password",
			CONFIRM_PASSWORD: 			"Confirm Password",
			CONFIRM: 					"Confirm",

			CHOOSE_2G_NETWORK_ONLY: 	"Please select 2.4GHz host network.",

			CHOOSE_2G_NETWORK: 	"Please select 2.4GHz host network or skip this network.",
			CHOOSE_5G_NETWORK: 	"Please select 5GHz host network or skip this network.",
			CHOOSE_5G_WITHOUT_2G: 	"Please select 5GHz Host network or click Back to return to the previous step.",

			ROUTER: "Router",
			REPEATER: "Range Extender",

			GHZ24: 		"2.4GHz",
			GHZ5: 		"5GHz",

			FINISH_REBOOT_P: 		"The extender is rebooting to apply the settings.",
			FINISH_RESTARTING_P: 	"Please wait...",
			FINISH_SETPS: 			"Note:",
			FINISH_STEP_1: 			"After the process bar is finished, the configuration is successful.If you want to manage the extender, please make sure your device is connected to the extender and  <a class=\"link text\" href=\"javascript:void(0);\" id=\"summary_refresh\">refresh</a> the management page.",
			CONGRATULATION:			"Congratulations!",
			SURF:					"Now, connect to your new extended network and enjoy the Internet.",
			CONNECT:				" I am connected to the extended network."
		},
		
		BASIC: {
			REGION_SETTING: "Region Settings",
			REGION: "Region",
			GHZ24: "2.4GHz",
			GHZ5: "5GHz",
			REPEATER: "Range Extender",
			HOST_NETWORK: "Host Network",
			// ROUTER_AP_24G: "2.4GHz Host Network",
			// ROUTER_AP_5G: "5GHz Host Network",
			NOTE: "Please check the connection between the router and the extender.",
			CONFIRM_TIP: "Upon changing the settings, your wireless connection will be temporarily disconnected from the Internet. Do you want to continue?",

			NONE_REGION_TIP: "Please select your country/region.",
			NONE_TIMEZONE_TIP: "Please select your time zone.",

			SSID: "SSID",
			SIGNAL: "Signal",
			MAC: "MAC Address",
			CHANNEL: "Channel",
			// SECURITY: "Security",
			// LED_TITLE: "LED Settings",
			// LED: "LED",
			TYPE: "Type",

			DEVICE_NAME: "Device Name",
			IP_ADDRESS: "IP Address",
			MAC_ADDRESS: "MAC Address",

			EXTEND_24GHZ: "Extended 2.4GHz",
			EXTEND_5GHZ: "Extended 5GHz",
			EXTEND_24GHZ_OFF: "Extended 2.4GHz (Off)",
			EXTEND_5GHZ_OFF: "Extended 5GHz (Off)",

			WIRELESS_24GHZ: "2.4GHz Wireless",
			WIRELESS_5GHZ: "5GHz Wireless",
			WIRELESS_24GHZ_OFF: "2.4GHz Wireless (Off)",
			WIRELESS_5GHZ_OFF: "5GHz Wireless (Off)",
			STATUS: "Status",

			SAVE: "Save",

			WIRED: 			"Wired",
			DHCP_SERVER: 	"DHCP Server",
			// IP_ADDRESS: 	"IP Address",
			// TYPE: 			"Type",

			WIRED: 			"Wired",

			OFF: 			"Off",
			ON: 			"On",
			AUTO_ON: 		"Auto (On)",
			AUTO_OFF: 		"Auto (Off)",

			STATIC_IP: 		"Static IP",
			DYNAMIC_IP: 	"Dynamic IP",
			DYNAMIC_FAILED: "Dynamic IP (Failed)",

			NO_SIGNAL: 		"No Signal",
			LOW: 			"Weak",
			MEDIAN: 		"Good",
			HIGH: 			"Strong",

			NO_SECURITY: 	"No Security",
			WPA_PSK: 		"WPA-PSK",
			WPA2_PSK: 		"WPA2-PSK",
			WPA_WPA2_PSK: 	"WPA-PSK/WPA2-PSK",
			WEP: 			"WEP",
			ROUTER: 		"Router",
			REPEATER: 		"Range Extender",

			INTERNET: 		"Internet",
			CLIENTS: 		"Clients",
			AUTO: 			"Auto"
		},

		WIRELESS: {

			GLOBAL_SETTINGS: 			"Settings",
			NOT_SUPPORT_5G: 			"The selected country/region only supports 2G. Please make sure that you select a correct country.",
			
			REGION: 					"Region",
			NOTICE:  					"To enable the wireless function, please make sure that you switch the wireless hardware button to On.",
			
			MODE_2G:					"2.4GHz",
			MODE_5G:					"5GHz",

			WIRELESS_SETTINGS: 			"Wireless",
			ENABLE_WIRELESS: 			"Enable Wireless Radio",

			WIRELESS_NETWORK_NAME: 		"Network Name (SSID)",
			WIRELESS_PASSWORD: 			"Password",
			HIDE_SSID: 					"Hide SSID",

			SECURITY: 					"Security",
			NO_SECURITY: 				"No Security",
			WPA_WPA2_PERSONAL: 			"WPA/WPA2 - Personal (Recommended)",
			WPA_WPA2_ENTERPRISE: 		"WPA/WPA2 - Enterprise",
			WEP: 						"WEP",

			VERSION: 					"Version",

			AUTO: 						"Auto",
			WPA_PSK: 					"WPA-PSK",
			WPA2_PSK: 					"WPA2-PSK",
			WPA: 						"WPA",
			WPA2: 						"WPA2",

			ENCRYPTION: 				"Encryption",
			TKIP: 						"TKIP",
			AES: 						"AES",

			MODE: 						"Mode",
			MODE_B: 					"802.11b only",
			MODE_G: 					"802.11g only",
			MODE_N: 					"802.11n only",
			MODE_BG: 					"802.11b/g mixed",
			MODE_BGN: 					"802.11b/g/n mixed",

			MODE_A_5: 					"802.11a only",
			MODE_AN_5: 					"802.11a/n mixed",
			MODE_N_5: 					"802.11n only",
			MODE_AC_5:					"802.11ac only",
			MODE_ANAC_5:				"802.11a/n/ac mixed",

			MODE_AC: 					"802.11ac only",
			MODE_NAC: 					"802.11n/ac mixed",
			MODE_NAAC: 					"802.11a/n/ac mixed",
			MODE_A: 					"802.11a only",
			MODE_NA: 					"802.11n/a mixed",
			MODE_AAC: 					"802.11a/ac mixed",
			MODE_ANAC: 					"802.11a/n/ac mixed",
			MODE_GN: 					"802.11g/n mixed",

			CHANNEL_WIDTH: 				"Channel Width",
			CHANNEL: 					"Channel",

			TRANSMIT_POWER: 			"Transmit Power",

			RADIUS_SERVER_IP: 			"RADIUS Server IP",
			RADIUS_PORT: 				"RADIUS Port",
			RADIUS_PASSWORD: 			"RADIUS Password",

			TYPE: 						"Type",
			OPEN_SYSTEM: 				"Open System",
			SHARED_KEY: 				"Shared Key",

			KEY_SELECTED: 				"Key Selected",
			KEY1: 						"Key1",
			KEY2: 						"Key2",
			KEY3: 						"Key3",
			KEY4: 						"Key4",

			WEP_KEY_FORMAT: 			"WEP Key Format",
			ASCII: 						"ASCII",
			HEXADECIMAL: 				"Hexadecimal",

			KEY_TYPE: 					"Key Type",
			BIT64: 						"64-bit",
			BIT128: 					"128-bit",
			BIT152: 					"152-bit",

			KEY_VALUE: 					"Key Value",
			
			MHZ: 						"MHz",
			MHZ20: 						"20 MHz",
			MHZ40: 						"40 MHz",
			MHZ80: 						"80 MHz",
			
			LOW: 						"Low",
			MIDDLE: 					"Middle",
			HIGH: 						"High",

			SWITCH_NOTICE:  			"Your wireless function is Off. Please switch On the wireless hardware button.",
			REGION_TIPS: 				"Please select your country or region first.",
			GO_REGION: 					"Set Region"
		},


		BASIC_NETWORK:{
			INTERNET: 					"Internet",
			INTERNET_STATUS:			"Internet Status",
			ACCESSPOINT:				"Access Point",
			GHZ24: 						"2.4GHz",
			GHZ5: 						"5GHz",

			CONNECTED: 					"Connected",
			DISCONNECTED: 				"Disconnected",
			UNKNOWN: 					"Unknown",

			DISCONNECTED: 				"Disconnected",
			
			IP_ADDR: 					"IP Address",
			MAC_ADDR: 					"MAC Address",
			
			ROUTER: 					"Router",
			WIRELESS_CLIENTS: 			"Wireless Clients",
			WIRELESS: 					"Wireless",
			NAME: 						"Name",

			SSID: 						"SSID",
			CHANNEL: 					"Channel",
			MODE:                       "Mode",
			CH_WIDTH:                   "Channel Width",
			MAC: 						"MAC Address",
			
			STATUS: 					"Status",

			OFF: 						"Off",
			ON: 						"On",
			AUTO_ON: 					"Auto (On)",
			AUTO_OFF: 					"Auto (Off)",

			DHCP_SERVER: 				"DHCP Server",
			TYPE: 						"Type",

			STATIC_IP: 					"Static IP",
			DYNAMIC_IP: 				"Dynamic IP",
			DYNAMIC_FAILED: 			"Dynamic IP (Failed)"
		},
		OPERATION_MODE:{
			TITLE:						"Range Extender Mode",
			UNIVERSAL:					"Universal Mode",
			UNIVERSAL_NOTE:				"The range extender is compatible with most routers and access points in this mode.",
			PROXY:						"Proxy Mode",
			PROXY_MODE:					"This mode has the best compatibility with routers and access points of all brands. If your range extender has problem working in Universal Mode, please choose Proxy Mode. However, it may decrease the overall performance.",
			CHANGE:						"Changing the range extender mode will result in rebooting. Do you want to continue?",
			NOTE1:						"The extender is rebooting to apply the settings.",
			NOTE2:						"Please wait..."
		},
		CONNECT: {
			REGION_TIPS: 		"Please select your country or region first.",
			CONNECT_ERROR: 		"No connection. Please check your router.",

			GO_REGION: 			"Set Region",

			TITLE_CONNECT: 		"Connect to Host Network",

			ENABLE_2G_ROUTER_AP: "Connect to 2.4GHz Network",
			ENABLE_5G_ROUTER_AP: "Connect to 5GHz Network",

			SCAN_CHOOSE: 		"Wireless Scanner",

			ROUTER_AP_24G: 		"Select a 2.4GHz Host Network",
			ROUTER_AP_5G: 		"Select a 5GHz Host Network",

			NETWORK_24G: 		"2.4GHz Network",
			NETWORK_5G: 		"5GHz Network",

			SSID: 				"SSID",
			SIGNAL: 			"Signal",
			MAC: 				"MAC Address",
			SECURITY: 			"Security",


			NO_SECURITY: 		"No Security",
			WEP: 				"WEP",
			WPA: 				"WPA-PSK",
			WPA2: 				"WPA2-PSK",
			WPA_WPA2: 			"WPA-PSK/WPA2-PSK",
			INDEX: 				"Index",
			CHOOSE: 			"Choose",

			HOST_AP_24G: 		"Host 2.4GHz SSID",
			HOST_AP_5G: 		"Host 5GHz SSID",
			ROUTER_AP_SECURITY_24G: 	"Host 2.4GHz Security",
			ROUTER_AP_SECURITY_5G: 		"Host 5GHz Security",
			ROUTER_AP_PASSWORD_24G: 	"Host 2.4GHz Password",
			ROUTER_AP_PASSWORD_5G: 		"Host 5GHz Password",

			SCANNING: 			"Scanning"
		},
		
		EXTEND_SETTINGS:{
			TITLE: 				"Extended Network Settings",
			REGION_TIPS: 		"Please select your country or region first.",
			GO_REGION: 			"Set Region",

			RADIO_2G: 			"Enable",
			SSID_2G: 			"Extended 2.4GHz SSID",
			PASSWORD_2G: 		"Extended 2.4GHz password",
			PASSWORD_2G_TIP: 	"The extended 2.4GHz password is the same as your Host password.",
			
			RADIO_5G: 			"Enable",
			SSID_5G: 			"Extended 5GHz SSID",
			PASSWORD_5G: 		"Extended 5GHz password",
			PASSWORD_5G_TIP: 	"The extended 5GHz password is the same as your Host password.",

			WIRELESS_24G: 		"Extended 2.4GHz",
			WIRELESS_5G: 		"Extended 5GHz",
			
			HIDE_SSID: 			"Hide SSID broadcast",
			KEEP_SAME: 			"Copy Host SSID"
		},

		ACCESS_CTR:{
			ACCESSCTR: 					"Access Control",
			ENABLE_ACCESS: 				"Access Control",

			ACCESS_MODE: 				"Access Mode",
			DEFAULT_ACCESS_MODE: 		"Default Access Mode",
			BLACK_LIST: 				"Blacklist",
			WHITE_LIST: 				"Whitelist",
			
			WIRED:						"Wired",
			WIRELESS:					"Wireless",

			DEVICE_ONLINE: 				"Online Devices",
			NAME: 						"Device Name",
			IP_ADDRESS: 				"IP Address",
			MAC_ADDRESS: 				"MAC Address",
			CONN_TYPE: 					"Connection Type",

			BLOCK: 						"Block",

			DEVICE_IN_WHITE: 			"Devices in Whitelist",
			DEVICE_IN_BLACK: 			"Devices in Blacklist",

			ACCESS_SCHEDULE: 			"Effective Time",
			DENY_ANY_TIME: 				"Cannot access at any time",
			DENY_SOME_TIME: 			"Cannot access based on the time schedule",
			ACCESS_ANY_TIME: 			"Access at any time",
			ACCESS_SOME_TIME: 			"Access based on the time schedule",


			HH_MM: 						"(HH:MM)",

			HOUR0: 						"00",
			HOUR1: 						"01",
			HOUR2: 						"02",
			HOUR3: 						"03",
			HOUR4: 						"04",
			HOUR5: 						"05",
			HOUR6: 						"06",
			HOUR7: 						"07",
			HOUR8: 						"08",
			HOUR9: 						"09",
			HOUR10: 					"10",
			HOUR11: 					"11",
			HOUR12: 					"12",
			HOUR13: 					"13",
			HOUR14: 					"14",
			HOUR15: 					"15",
			HOUR16: 					"16",
			HOUR17: 					"17",
			HOUR18: 					"18",
			HOUR19: 					"19",
			HOUR20: 					"20",
			HOUR21: 					"21",
			HOUR22: 					"22",
			HOUR23: 					"23",

			MIN0: 						"00",
			MIN1: 						"01",
			MIN2: 						"02",
			MIN3: 						"03",
			MIN4: 						"04",
			MIN5: 						"05",
			MIN6: 						"06",
			MIN7: 						"07",
			MIN8: 						"08",
			MIN9: 						"09",
			MIN10: 						"10",
			MIN11: 						"11",
			MIN12: 						"12",
			MIN13: 						"13",
			MIN14: 						"14",
			MIN15: 						"15",
			MIN16: 						"16",
			MIN17: 						"17",
			MIN18: 						"18",
			MIN19: 						"19",	
			MIN20: 						"20",
			MIN21: 						"21",
			MIN22: 						"22",
			MIN23: 						"23",
			MIN24: 						"24",
			MIN25: 						"25",
			MIN26: 						"26",
			MIN27: 						"27",
			MIN28: 						"28",
			MIN29: 						"29",		
			MIN30: 						"30",
			MIN31: 						"31",
			MIN32: 						"32",
			MIN33: 						"33",
			MIN34: 						"34",
			MIN35: 						"35",
			MIN36: 						"36",
			MIN37: 						"37",
			MIN38: 						"38",
			MIN39: 						"39",		
			MIN40: 						"40",
			MIN41: 						"41",
			MIN42: 						"42",
			MIN43: 						"43",
			MIN44: 						"44",
			MIN45: 						"45",
			MIN46: 						"46",
			MIN47: 						"47",
			MIN48: 						"48",
			MIN49: 						"49",		
			MIN50: 						"50",
			MIN51: 						"51",
			MIN52: 						"52",
			MIN53: 						"53",
			MIN54: 						"54",
			MIN55: 						"55",
			MIN56: 						"56",
			MIN57: 						"57",
			MIN58: 						"58",
			MIN59: 						"59",

			MONDAY: 					"Monday",
			TUESDAY: 					"Tuesday",
			WEDNESDAY: 					"Wednesday",
			THURSDAY: 					"Thursday",
			FRIDAY: 					"Friday",
			SATURDAY: 					"Saturday",
			SUNDAY: 					"Sunday",

			DAY_LBL: 					"Day(s)",
			TIME_LBL:  					"Time",

			EVERYDAY:  					"Every Day", 
			WEEKDAY:  					"Weekday",
			WEEKEND:  					"Weekend",
			CUSTOM:  					"Custom",

			NONE_CHOOSE_TEXT: 			"Please select at least one entry",
			// ERROR_REPEAT_TEXT: 			"Repeat error",
			// ERROR_OVERFLOW_TEXT: 		"Maximum overflow",
			ERROR_BEEN_BLOCK:			"The device has been in the blacklist.",
			BLACKFULL:					"The blacklist is full.",
			WHITEFULL:					"The whitelist is full."
			
		},
		WIFI_COVERAGE:{
			GLOBAL_TITLE:               "Wi-Fi Coverage",
			NOTE: 						"Adjust the output power and range of your Extended Wireless Network.For a smaller coverage area,choose a lower output power percentage.For a larger coverage area,select a higher output power percentage.  ",
			MAX:  						"Max",
			MIDDLE: 					"Mid",
			SUBMIT: 					"Save",
			MIN: 						"Min"
		},
		HIGH_SPEED:{
			ROUTER:						"Router",
			ROUTER_TIPS:				"(must support <span>5GHz</span> band)",
			REPEATER:					"Repeater",
			DEVICE:						"Devices",
			G2:							"2.4G",
			G5:							"5G",
			G2HZ:						"2.4GHz",
			G5HZ:						"5GHz",
			BASIC_MODE:					"Basic Mode",
			BASIC_MODE_INTRO:			"Devices could receive 2.4 & 5GHz",
			HIGH_MODE:					"High Speed Mode",
			HIGH_MODE_TIPS:				"Better performance! Higher speed!",
			HIGH_MODE_2INTRO:			"Devices could receive 2.4GHz only",
			HIGH_MODE_5INTRO:			"Devices could receive 5GHz only",
			MSG_COMFIRM:				"XXXXXXXXXXXXXXXX%numGHz xxxxxx<br />XXXXXXXXXXXX%numGHzXXXXXXXXXXXXXXXXXXXXXXX<br />Setup now?"
		},
		WPS: {
            GLOBAL_TITLE:               "WPS",
			LABEL_TITLE: 				"AP's PIN",
			SETUP_TITLE: 				"WPS Wizard",

            ENABLE_WPS:                 "Enable WPS",

			DEVICE_PIN_INFO: 			"Wireless clients can connect to the range extender using WPS PIN code method.",
			ENABLE_DEVICE_PIN: 			"AP's PIN",
			DEVICE_PIN: 				"PIN",
			GENERATE: 					"Generate",
			DFT: 						"Default",

			SELECT_SETUP: 				"Select a WPS connection method",
			PUSH_BTN: 					"Push Button (Recommended)",
            PIN_BTN: 					"PIN code",
			PUSH_DES: 					"Press the physical WPS button on the range extender or the <strong>Connect</strong> button below.",
			CONNECT: 					"Connect",
			CANCEL: 					"Cancel",
			ENTER_CLIENT_PIN: 			"Client's WPS PIN code",

			RESULT_HEAD: 				"The wireless client",
			RESULT_END: 				"has been added to the network successfully. Click the button to try a new one.",
				
			NOT_FOUND_WL0: 				"Not Found",
			STATUS_ERROR_WL0: 			"Error.",
			STATUS_PIN_ERROR_WL0: 		"Invalid WPS PIN. Please check the PIN code.",
			STATUS_CONN_ERROR_WL0: 		"Connection failed.",
			STATUS_CONN_CANCEL_WL0: 	"Connection cancelled.",
			STATUS_CONN_OVERLAP_WL0: 	"Connection failed (Overlapped).",
			STATUS_CONN_TIMEOUT_WL0: 	"Connection failed (Timed out).",
			// STATUS_CONN_INACT_WL0: 		"Connection inactive.",
			STATUS_CONN_SILENT_WL0: 	"Connection not open.",

			NOT_FOUND_WL1: 				"Not found.",
			STATUS_ERROR_WL1: 			"Error.",
			STATUS_PIN_ERROR_WL1: 		"Invalid WPS PIN. Please check the PIN code.",
			STATUS_CONN_ERROR_WL1: 		"Connection failed.",
			STATUS_CONN_CANCEL_WL1: 	"Connection cancelled.",
			STATUS_CONN_OVERLAP_WL1: 	"Connection failed (Overlapped).",
			STATUS_CONN_TIMEOUT_WL1: 	"Connection failed (Timed out).",
			// STATUS_CONN_INACT_WL1: 		"Connection inactive.",
			STATUS_CONN_SILENT_WL1: 	"Connection not open.",

            UNAVAILABLE_NOTE:			"<p class=\"note\">To use the WPS feature, please go to <a class=\"link\" href=\"javascript:void(0);\"  onclick=\"$.su.menu.basic.goTo('wireless-setting','wirelessSettings.html', true);\">Wireless -> Wireless Settings</a> to make sure the wireless function is enabled</p><p class=\"note\">and Hide SSID is unchecked, and then configure the wireless security as shown below:</p><p class=\"note\" style=\"text-indent:2em;\">- Select <b>No Security</b>.</p><p class=\"note\">or</p><p class=\"note\" style=\"text-indent:2em;\">- Select <b>WPA/WPA2-Personal</b>, and set <b>Auto</b> or <b>WPA2-PSK</b> for <b>Version</b> and <b>Auto</b> or <b>AES</b> for <b>Encryption</b>.</p>",
			PIN_EXPIRED:				"The PIN number has expired.<br / >Please generate a new one."
        },

		LAN: {
			LAN_SETTING: 	"Network Settings",
			ETHERNET: 		"Ethernet Port",
			LAN: 			"LAN",
			LAN_DYNAMIC_IP: "Obtain an IP address automatically",
			LAN_STATIC_IP: 	"Use the following IP address",
			
			IP_ADDRESS: 			"IP Address",
			SUBNET_MASK: 			"Subnet Mask",
			DEFAULT_GATEWAY: 		"Default Gateway",
			
			ETHERNET_BAND: 				"Host Network for the Ethernet port",

			GHZ_24: 	"2.4GHz",
			GHZ_5: 		"5GHz",
			REBOOT_TIP: "The router is directing to the new login page. <br/>Please wait..."
		},

		//dhcp server
		DHCP_SERVER: {
			TITLE: 						"DHCP Server",
			
			SETTINGS: 					"DHCP Server Settings",

			DHCP_SERVER: 				"DHCP Server",

			IP_ADDR_POOL: 				"IP Address Pool",
			LEASETIME: 					"Address Lease Time",
			LEASENOTE: 					"minutes (1 default, 2880 maximum)",
			
			GATEWAY: 					"Default Gateway",
			DOMAIN: 					"Default Domain",
			PRIMARYDNS: 				"Primary DNS",
			SECONDARYDNS: 				"Secondary DNS",

			OPTIONAL: 					"(Optional)",

			CLIENTSLIST: 				"DHCP Client List",
			CLIENT_NUMBER: 				"Client Number",
			CLIENT_NAME: 				"Client Name",
			MAC_ADDR: 					"MAC Address",
			IP_ADDRESS: 				"IP Address",
			ASSIGNED_IP: 				"Assigned IP Address",
			LEASE_TIME: 				"Lease Time",

			RESERVATION: 				"Address Reservation",
			RESERVED_IP: 				"Reserved IP Address",
			DESCRIPTION: 				"Description",

			CLIENTSLIST: 				"DHCP Client List",
			ENABLE: 					"Enable",
			ON: 						"On",
			OFF: 						"Off",
			AUTO: 						"Auto"
			
		},

		//firmware upgrade
		FIMWARE:{
			TITLE: 						"Firmware Upgrade",

			NEWFILE: 					"New Firmware File",
			FIMWAREVERSION: 			"Firmware Version",
			HARDWAREVERSION: 			"Hardware Version",
			CONFIRM_CONTENT:			"Are you sure you want to upgrade the firmware?",
			WARNING:					"Firmware Upgrading... <br/>Please DO NOT operate during the process.",
			
			UPGRADE: 					"Upgrade"
		},

		BACKUP:{
			BACKUP: 					"Backup",
			BACKUPTIP: 					"Save a copy of your current settings.",

			RESTORE: 					"Restore",
			RESTORETIP: 				"Restore saved settings from a file.",
			
			RESTORE_WARN:				"Please DO NOT operate or disconnect the range extender during restoring.",
			RESTORE_CONFIRM_CONTENT: 	"Are you sure you want to restore the range extender?",
			
			FILE: 						"File",

			FACTORY: 					"Factory Default Restore",
			FACTORYTIP: 				"Revert all settings to factory defaults.",
			FACTORY_CONFIRM_CONTENT:	"Are you sure you want to restore to factory default settings?",
			FACTORY_WARN:				"Please DO NOT power off the range extender during the factory restore.",
			
			BACKUPBTN: 					"Backup",
			RESTOREBTN: 				"Restore",
			FACTORYBTN: 				"Factory Restore",
			FILE_ERROR: 				"File Error.",
			CONNECTION_ERROR: 			"Connection Error."
		},

		ACCOUNT:{
			ACCOUNT_TITLE: 				"Admin Account",
			
			OLDUSER: 					"Old Username",
			OLDPWD: 					"Old Password",

			NEWUSER: 					"New Username",
			NEWPWD: 					"New Password",
			CONFIRM: 					"Confirm Password"
		},

		SYSLOG:{
			TITLE: 						"System Log",
			LOG_FILTER: 				"Log Filter:",
			
			TYPE_EQ: 					"Type =",
			
			ALL: 						"ALL",
			ID: 						"ID",

			LEVEL: 						"Level =",
			ERROR: 						"ERROR",
			INFO: 						"INFO",
			TYPE: 						"Type",
			TIME: 						"Time",
			LEVEL_COL:					"Level",

			CONTENT: 					"Content",
			
			SAVE_LOG: 					"Save Log"
		},
		
		//time setting
		TIMESET: {
			TITLE: 						"Time Settings",
			ZONE: 						"Time Zone",
			DATE: 						"Date",
			DATEFORMAT: 				"MM/DD/YY",
			TIME: 						"Time",
			TIMEFORMAT: 				"(HH/MM/SS)",
			NTP1: 						"NTP Server I",
			NTP2: 						"NTP Server II",
			OPTIONAL: 					"(Optional)",

			CURRENT_TIME:  				"Current Time",
			SET_TIME: 					"Set The Time",
			AUTOMATIC: 					"Get automatically from the Internet",
			MANUAL: 					"Manually",
			AUTOMATIC_BTN: 				"Obtain",


			GETGMT: 					"Get GMT",

			//NOTE: 						"Click Get GMT to update the time from the Internet with the predefined servers or enter the customized servers (IP Address or Domain Name) in the above frames.",
			
			GETGMT_SUCCESS: 			"Get Time From NTP Server Success",
			GETGMT_TIMEOUT: 			"Get Time From NTP Server Time Out",
			GETGMT_WAIT: 				"Waiting",
			
			M: 							"M",
			W: 							"W",
			D: 							"D",
			H: 							"H",
			
			DAYLIGHT_SAVING: 			"Daylight Saving Time",
			ENABLE_DAYLIGHT: 			"Enable Daylight Saving Time",
			START: 						"Start",
			END: 						"End",

			RUNNING_STATUS: 			"Current Status",
			DOWN: 						"Daylight Saving Time is not active.",
			UP: 						"Daylight Saving Time is active."
		},

		TIME_SETTINGS:{
			TITLE: 						"Time Settings",
			TIME_ZONE: 					"Time Zone",
			SELECT: 			 		"Please select",
			GMT0000: 					"(GMT-12:00) Eniwetok,Kwajalein",
			GMT0060: 					"(GMT-11:00) Midway Island,Samoa",
			GMT0120: 					"(GMT-10:00) Hawaii",
			GMT0180: 					"(GMT-09:00) Alaska",
			GMT0240: 					"(GMT-08:00) Pacific Time",
			GMT0300: 					"(GMT-07:00) Mountain Time (US Canada)",
			GMT0360: 					"(GMT-06:00) Central Time (US Canada)",
			GMT0420: 					"(GMT-05:00) Eastern Time (US Canada)",
			GMT0450: 					"(GMT-04:30) Caracas",
			GMT0480: 					"(GMT-04:00) Atlantic Time (Canada)",
			GMT0510: 					"(GMT-03:30) Newfoundland",

			GMT0540: 					"(GMT-03:00) Brasilia, Buenos Aires",
			GMT0600: 					"(GMT-02:00) Mid-Atlantic",
			GMT0660: 					"(GMT-01:00) Azores, Cape Verde Is",
			GMT0720: 					"(GMT) Greenwich Mean Time, Dublin, London",
			GMT0780: 					"(GMT+01:00) Berlin, Stockholm, Rome, Bern, Brussels",
			GMT0840: 					"(GMT+02:00) Athens, Helsinki, Eastern Europe, Israel",
			GMT0900: 					"(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh, Moscow",

			GMT0930: 					"(GMT+03:30) Teheran",

			GMT0960: 					"(GMT+04:00) Abu Dhabi, Muscat, Kazan, Volgograd",

			GMT0990: 					"(GMT+04:30) Kabul",

			GMT1020: 					"(GMT+05:00) Islamabad, Karachi, Ekaterinburg",

			GMT1050: 					"(GMT+05:30) Madras, Calcutta, Bombay, New Delhi",
			GMT1065: 					"(GMT+05:45) Katmandu",

			GMT1080: 					"(GMT+06:00) Alma-Ata, Dhaka",
			GMT1110: 					"(GMT+06:30) Rangoon",

			GMT1140: 					"(GMT+07:00) Bangkok, Jakarta, Hanoi",
			GMT1200: 					"(GMT+08:00) Beijing, Hong Kong, Perth, Singapore",
			GMT1260: 					"(GMT+09:00) Tokyo, Osaka, Sapporo, Seoul, Yakutsk",

			GMT1290: 					"(GMT+09:30) Adelaide",

			GMT1320: 					"(GMT+10:00) Brisbane, Canberra, Melbourne, Sydney",
			GMT1380: 					"(GMT+11:00) Magadan, Solomon Is., New Caledonia",
			GMT1440: 					"(GMT+12:00) Fiji, Kamchatka, Auckland",
			GMT1500: 					"(GMT+13:00) Nuku\'alofa"
		},

		POWER_SCHEDULE:{
			TITLE: 						"Power Schedule",
			POWER_SCHEDULE_ENABLE: 		"Enable Power Schedule",
			POWER_OFF: 					"Power-Off Time",

			HH_MM: 						"(HH:MM)",

			HOUR0: 						"00",
			HOUR1: 						"01",
			HOUR2: 						"02",
			HOUR3: 						"03",
			HOUR4: 						"04",
			HOUR5: 						"05",
			HOUR6: 						"06",
			HOUR7: 						"07",
			HOUR8: 						"08",
			HOUR9: 						"09",
			HOUR10: 					"10",
			HOUR11: 					"11",
			HOUR12: 					"12",
			HOUR13: 					"13",
			HOUR14: 					"14",
			HOUR15: 					"15",
			HOUR16: 					"16",
			HOUR17: 					"17",
			HOUR18: 					"18",
			HOUR19: 					"19",
			HOUR20: 					"20",
			HOUR21: 					"21",
			HOUR22: 					"22",
			HOUR23: 					"23",

			MIN0: 						"00",
			MIN1: 						"01",
			MIN2: 						"02",
			MIN3: 						"03",
			MIN4: 						"04",
			MIN5: 						"05",
			MIN6: 						"06",
			MIN7: 						"07",
			MIN8: 						"08",
			MIN9: 						"09",
			MIN10: 						"10",
			MIN11: 						"11",
			MIN12: 						"12",
			MIN13: 						"13",
			MIN14: 						"14",
			MIN15: 						"15",
			MIN16: 						"16",
			MIN17: 						"17",
			MIN18: 						"18",
			MIN19: 						"19",	
			MIN20: 						"20",
			MIN21: 						"21",
			MIN22: 						"22",
			MIN23: 						"23",
			MIN24: 						"24",
			MIN25: 						"25",
			MIN26: 						"26",
			MIN27: 						"27",
			MIN28: 						"28",
			MIN29: 						"29",		
			MIN30: 						"30",
			MIN31: 						"31",
			MIN32: 						"32",
			MIN33: 						"33",
			MIN34: 						"34",
			MIN35: 						"35",
			MIN36: 						"36",
			MIN37: 						"37",
			MIN38: 						"38",
			MIN39: 						"39",		
			MIN40: 						"40",
			MIN41: 						"41",
			MIN42: 						"42",
			MIN43: 						"43",
			MIN44: 						"44",
			MIN45: 						"45",
			MIN46: 						"46",
			MIN47: 						"47",
			MIN48: 						"48",
			MIN49: 						"49",		
			MIN50: 						"50",
			MIN51: 						"51",
			MIN52: 						"52",
			MIN53: 						"53",
			MIN54: 						"54",
			MIN55: 						"55",
			MIN56: 						"56",
			MIN57: 						"57",
			MIN58: 						"58",
			MIN59: 						"59",

			DAY_LBL: 					"Day(s)",

			EVERYDAY:  					"Every Day", 
			WEEKDAY:  					"Weekday",
			WEEKEND:  					"Weekend",
			CUSTOM:  					"Custom",


			SUBMIT_NOTE: 				"Do you want to make it effect to turn off the extender immediately?", 
			NEXT:  						"Next time",
			RIGHT: 						"Right now",

			TITLE_NOTE:  				"The extender will automatically turn off according to the time schedule. Please make sure the system  <a class=\"link\" onclick=\"$.su.menu.basic.goTo('time-settings_dst','timeSettings_dst.html', true);\" src=\"void(0)\">Time Settings</a> are correct.",
			NOTE:    					"Note", 
			NOTE1:    					"Note1", 
			NOTE2:    					"Note2", 

			SAVE: 						"Save", 

			MONDAY: 					"Monday",
			TUESDAY: 					"Tuesday",
			WEDNESDAY: 					"Wednesday",
			THURSDAY: 					"Thursday",
			FRIDAY: 					"Friday",
			SATURDAY: 					"Saturday",
			SUNDAY: 					"Sunday"
		},
		LED_CONTROL: {
			TITLE: 						"LED Control",
			NIGHT_MODE: 				"Night Mode",
			LED_OFF_TIME: 				"LED Off Time",
			LED_TIME_SETTINGS:			"Before enabling the LED Control, make sure <a class=\"link\" href=\"javascript:void(0);\" id=\"go-to-time\" onclick=\"$.su.menu.basic.goTo('time-settings_dst','timeSettings_dst.html', true);\">Time Settings</a> is correct.",
			HH_MM: 						"(HH:MM)",

			HOUR0: 						"00",
			HOUR1: 						"01",
			HOUR2: 						"02",
			HOUR3: 						"03",
			HOUR4: 						"04",
			HOUR5: 						"05",
			HOUR6: 						"06",
			HOUR7: 						"07",
			HOUR8: 						"08",
			HOUR9: 						"09",
			HOUR10: 					"10",
			HOUR11: 					"11",
			HOUR12: 					"12",
			HOUR13: 					"13",
			HOUR14: 					"14",
			HOUR15: 					"15",
			HOUR16: 					"16",
			HOUR17: 					"17",
			HOUR18: 					"18",
			HOUR19: 					"19",
			HOUR20: 					"20",
			HOUR21: 					"21",
			HOUR22: 					"22",
			HOUR23: 					"23",

			MIN0: 						"00",
			MIN1: 						"01",
			MIN2: 						"02",
			MIN3: 						"03",
			MIN4: 						"04",
			MIN5: 						"05",
			MIN6: 						"06",
			MIN7: 						"07",
			MIN8: 						"08",
			MIN9: 						"09",
			MIN10: 						"10",
			MIN11: 						"11",
			MIN12: 						"12",
			MIN13: 						"13",
			MIN14: 						"14",
			MIN15: 						"15",
			MIN16: 						"16",
			MIN17: 						"17",
			MIN18: 						"18",
			MIN19: 						"19",	
			MIN20: 						"20",
			MIN21: 						"21",
			MIN22: 						"22",
			MIN23: 						"23",
			MIN24: 						"24",
			MIN25: 						"25",
			MIN26: 						"26",
			MIN27: 						"27",
			MIN28: 						"28",
			MIN29: 						"29",		
			MIN30: 						"30",
			MIN31: 						"31",
			MIN32: 						"32",
			MIN33: 						"33",
			MIN34: 						"34",
			MIN35: 						"35",
			MIN36: 						"36",
			MIN37: 						"37",
			MIN38: 						"38",
			MIN39: 						"39",		
			MIN40: 						"40",
			MIN41: 						"41",
			MIN42: 						"42",
			MIN43: 						"43",
			MIN44: 						"44",
			MIN45: 						"45",
			MIN46: 						"46",
			MIN47: 						"47",
			MIN48: 						"48",
			MIN49: 						"49",		
			MIN50: 						"50",
			MIN51: 						"51",
			MIN52: 						"52",
			MIN53: 						"53",
			MIN54: 						"54",
			MIN55: 						"55",
			MIN56: 						"56",
			MIN57: 						"57",
			MIN58: 						"58",
			MIN59: 						"59"			

		}


		
	};
})(jQuery);
