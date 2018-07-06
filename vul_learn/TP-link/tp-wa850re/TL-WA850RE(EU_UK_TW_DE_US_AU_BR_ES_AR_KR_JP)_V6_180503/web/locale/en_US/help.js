// JavaScript Document
(function($){
	$.su = $.su || {};
	$.su.CHAR = $.su.CHAR || {};
	$.su.CHAR.HELP = {

		BASIC_REGION: {
			TITLE: "Region Settings",
			CONTENT: [
				{
					type: "name",
					title: "Region",
					content: "Select your region from the drop-down menu. If your country or region is not listed, it may be restricted to use the wireless radio in your location."
				}
			]
		},

		BASIC_STATUS: {
			TITLE: "Status",
			CONTENT: [
				{
					type: "paragraph",
					content: "The Basic Status page displays a dashboard with your current network status and information. You can click on each icon to get more details. "
				},
				{
					type: "title",
					title: "Range Extender"
				},
				{
					type: "paragraph",
					content: "Displays the extended 2.4GHz<span class=\"hidden_5g\">/5GHz</span> network information."
				},
				{
					type: "name",
					title: "SSID",
					content: "The extended network name (SSID)."
				},
				{
					type: "name",
					title: "Channel",
					content: "The wireless channel currently in use."
				},
				{
					type: "name",
					title: "MAC Address",
					content: "The physical address of the range extender."
				},
				{
					type: "name",
					title: "DHCP Server",
					content: "Displays the status of the DHCP server."
				},
				{
					type: "name",
					title: "IP Address",
					content: "The IP address that is allocated to the client by the DHCP server."
				},
				{
					type: "name",
					title: "Type",
					content: "The type of the IP address allocated by the DHCP server."
				},
				{
					type: "title",
					title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> Host Network"
				},
				{
					type: "paragraph",
					content: "Displays the following information of the 2.4GHz<span class=\"hidden_5g\">/5GHz</span> host network."
				},
				{
					type: "name",
					title: "SSID",
					content: "The host network SSID."
				},
				{
					type: "name",
					title: "Signal",
					content: "The signal strength of the host network."
				},
				{
					type: "name",
					title: "MAC Address",
					content: "The physical MAC address of the host network."
				},
				{
					type: "title",
					title: "Clients"
				},
				{
					type: "paragraph",
					content: "Displays the current client device(s) connected to the extender 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
				},
				{
					type: "name",
					title: "Type",
					content: "The extended 2.4GHz<span class=\"hidden_5g\">/5GHz</span> network the client device connected to."
				},
				{
					type: "name",
					title: "Device Name",
					content: "The name of the connected client device."
				},
				{
					type: "name",
					title: "MAC Address",
					content: "The physical MAC address of the connected client device."
				}
			]
		},
		AP_BASIC_STATUS:{
			TITLE: "Status",
			CONTENT: [
				{
					type: "paragraph",
					content: "The Status page displays a dashboard with your current network status and information. You can click on each icon to get more details."
				},
				{
					type: "title",
					title: "Internet"
				},
				{
					type: "name",
					title: "Internet Status",
					content: "Displays the current status of the Internet connection of the device."
				},
				{
					type: "title",
					title: "Access Point"
				},
				{
					type: "name",
					title: "DHCP Server",
					content: "Displays the status of the the DHCP server."
				},
				{
					type: "name",
					title: "IP Address",	
					content: "Displays the IP address that is allocated to the access point by the DHCP server."
				
				},
				{
					type: "name",
					title: "Type",	
					content: "Displays the type the access point obtain its IP address."
				
				},
				{
					type: "title",
					title: "Wireless Clients"
				},
				{
					type: "name",
					title: "Name",	
					content: "Displays the name of the client devices."
				
				},
				{
					type: "name",
					title: "IP Address",	
					content: "Displays the IP address that is allocated to the client devices."
				
				},
				{
					type: "name",
					title: "MAC Address",	
					content: "Displays the physical MAC address of the client devices."
				}
			]
		},

		WIRELESS_REGION: {
			TITLE: "Settings",
			CONTENT: [{
				type: "name",
				title: "Region",
				content: "Select your region from the drop-down menu. If your country or region is not listed, it may be restricted to use the wireless radio in your location."
			},{
				type: "paragraph",
				content: ""
			}]
		},
	
		WIRELESS_24G: {	
			TITLE: "Wireless 2.4GHz",
			CONTENT: [{
				type: "name",
				title: "Enable Wireless Radio",
				content: "Select this checkbox to enable the 2.4GHz wireless radio frequency."
			},{
				type: "name",
				title: "Wireless Network Name (SSID)",
				content: "You can leave the default Network Name (SSID) as it is, or enter a new name (up to 32 characters). This field is case-sensitive."
			},{
				type: "name",
				title: "Hide SSID",
				content: "Select this checkbox if you want to hide the 2.4GHz network name (SSID) from the Wi-Fi network list."
			},{
				type: "name",
				title: "Security",
				content: "Select one of the following security options:",
				children: [{
					type: "name",
					title: "No Security",
					content: "Select this option to disable the wireless security. It is highly recommended that you enable the wireless security to protect your wireless network from unauthorized access."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Select this option to enable the standard authentication method based on a Pre-shared Key (PSK), also called passphrase. This option is recommended. If selected, configure the following.",
					children: [{
						type: "name",
						title: "Version",
						content: "Select a security version for your wireless network.",
						children: [{
							type: "name",
							title: "Auto",
							content: "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "This option supports only TKIP encryption that provides a good level of security."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
						}]
					},{
						type: "name",
						title: "Encryption",
						content: "Select a security encryption type: TKIP(Temporal Key Integrity Protocol), AES(Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the extender operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
					},{
						type: "name",
						title: "Password",
						content: "Enter a wireless password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters into this field."
					}]
				},{
				type: "name",
				title: "WEP",
				content: "Select this option to enable basic authentication method if any of your client devices can only access the wireless using WEP (Wired Equivalent Privacy).",
				children: [{
					type: "name",
					title: "Type",
					content: "Select an authentication type for your wireless network. The default is Auto, which automatically chooses Open System or Shared Key based on the capability and access request of the wireless client."
				},{
					type: "name",
					title: "WEP Key Format",
					content: "Either use ASCII format or select Hexadecimal. ASCII format is a combination of alphabetic and numeric characters. Hexadecimal format is a combination of the number (0-9) and letters (A-F, a-f)."
				},{
					type: "name",
					title: "Key Type",
					content: "Select a WEP key length.",
					children: [{
						type: "name",
						title: "64-bit",
						content: "Allows you to enter 10 hexadecimal digits (0-9, A-F, a-f) or 5 ASCII characters into the WEP Value field."
					},{
						type: "name",
						title: "128-bit",
						content: "Allows you to enter 26 hexadecimal digits (0-9, A-F, a-f) or 13 ASCII characters into the WEP Value field."
					}]
				},{
					type: "name",
					title: "Key Value",
					content: "Enter the WEP key into the respective field."
				}]
			}]
			},{
				type: "name",
				title: "Mode",
				content: "Select a transmission mixed mode."
			},{
				type: "name",
				title: "Channel Width",
				content: "Select a channel width (bandwidth) for the 2.4GHz wireless network."
			},{
				type: "name",
				title: "Channel",
				content: "Select an operating channel for the 2.4GHz wireless network. It is recommended to leave the channel to Auto, if you are not experiencing the intermittent wireless connection issue."
			}/*,{
				type: "name",
				title: "Transmit Power",
				content: "Select either High, Middle, or Low to specify the data transmit power. The default and recommended setting is High."
			}*/,{
				type: "paragraph",
				content: "Click Save to save all your settings."
			}]
		},
		
		WIRELESS_5G: {	
			TITLE: "Wireless 5GHz",
			CONTENT: [{
				type: "name",
				title: "Enable Wireless Radio",
				content: "Select this checkbox to enable the 5GHz wireless radio frequency."
			},{
				type: "name",
				title: "Wireless Network Name (SSID)",
				content: "You can leave the default Network Name (SSID) as it is or enter a new name (up to 32 characters). This field is case-sensitive."
			},{
				type: "name",
				title: "Hide SSID",
				content: "Select this checkbox if you want to hide the 5GHz network name (SSID) from the Wi-Fi network list."
			},{
				type: "name",
				title: "Security",
				content: "Select one of the following security options:",
				children: [{
					type: "name",
					title: "No Security",
					content: "Select this option to disable the wireless security. It is highly recommended that you enable the wireless security to protect your wireless network from unauthorized access."
				},{
					type: "name",
					title: "WPA/WPA2-Personal",
					content: "Select this option to enable the standard authentication method based on a Pre-shared Key (PSK), also called passphrase. This option is recommended. If selected, configure the following.",
					children: [{
						type: "name",
						title: "Version",
						content: "Select a security version for your wireless network.",
						children: [{
							type: "name",
							title: "Auto",
							content: "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
						},{
							type: "name",
							title: "WPA-PSK",
							content: "This option supports only TKIP encryption that provides a good level of security."
						},{
							type: "name",
							title: "WPA2-PSK",
							content: "This option support AES encryption that provides a better level of security than WPA-PSK and is recommended."
						}]
					},{
						type: "name",
						title: "Encryption",
						content: "Select a security encryption type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), or Auto (for both TKIP and AES). It is NOT recommended to use the TKIP encryption if the extender operates in 802.11n mode, because TKIP is not supported by 802.11n specification. If TKIP is selected, WPS function will be disabled."
					},{
						type: "name",
						title: "Password",
						content: "Enter a wireless password between 8 and 63 ASCII characters, or between 8 and 64 hexadecimal characters into this field."
					}]
				},{
					type: "name",
					title: "WEP",
					content: "Select this option to enable basic authentication method if any of your client devices can only access the wireless using WEP (Wired Equivalent Privacy).",
					children: [{
						type: "name",
						title: "Type",
						content: "Select an authentication type for your wireless network. The default is Auto, which automatically chooses Open System or Shared Key based on the capability and access request of the wireless client."
					},{
						type: "name",
						title: "WEP Key Format",
						content: "Either use ASCII format or select Hexadecimal. ASCII format is a combination of alphabetic and numeric characters. Hexadecimal format is a combination of the number (0-9) and letters (A-F, a-f)."
					},{
						type: "name",
						title: "Key Type",
						content: "Select a WEP key length.",
						children:[{
							type: "name",
							title: "64-bit",
							content: "Allows you to enter 10 hexadecimal digits (0-9, A-F, a-f) or 5 ASCII characters into the WEP Value field."
						},{
							type: "name",
							title: "128-bit",
							content: "Allows you to enter 26 hexadecimal digits (0-9, A-F, a-f) or 13 ASCII characters into the WEP Value field."
						}]
					},{
						type: "name",
						title: "Key Value",
						content: "Enter the WEP key into the respective field."
					}]
				}]
			},{
				type: "name",
				title: "Mode",
				content: "Select a transmission mixed mode."
			},{
				type: "name",
				title: "Channel Width",
				content: "Select a channel width (bandwidth) for the 5GHz wireless network."
			},{
				type: "name",
				title: "Channel",
				content: "Select an operating channel for the 5GHz wireless network. It is recommended to leave the channel to Auto, if you are not experiencing the intermittent wireless connection issue."
			}/*,{
				type: "name",
				title: "Transmit Power",
				content: "Select either High, Middle, or Low to specify the data transmit power. The default and recommended setting is High."
			}*/,{
				type: "paragraph",
				content: "Click Save to save all your settings."
			}]
		},
		
		ENABLE_WPS:{
			TITLE: "WPS",
			CONTENT:[{
				type: "name",
				title: "Enable WPS",
				content: "Other devices can connect to this access point(AP) by WPS with AP's PIN."
			}]
		},
		
		WPS: {	
			TITLE: "AP's PIN",
			CONTENT: [
			{
				type: "name",
				title: "AP's PIN",
				content: "Toggle On to allow wireless devices to connect to the AP using the AP's PIN (Personal Identification Number)."
			},{
				type: "name",
				title: "PIN",
				content: "Displays the AP's PIN. The default PIN can be found on the label of the AP. Click Generate to generate a new PIN randomly or click Default to restore the current PIN to the factory default PIN."
			}]
		},

		WPS_WIZARD: {
			TITLE: "WPS Wizard",
			CONTENT:[{
				type: "name",
				title: "Push Button (Recommended)",
				content: "Select this connection method to enable the WPS feature to easily connect any WPS-enabled device to your wireless network using the WPS button or virtually using the Connect button."
			},{
				type: "name",
				title: "PIN",
				content: "Select this connection method to add a device manually by entering the wireless device's WPS PIN into the field and click Connect."
			}]
		},


		WIRELESS_CONNECT: {
			TITLE: "Connect to Host Network",
			CONTENT: [
				{
					type: "name",
					title: "Connect to 2.4GHz<span class=\"hidden_5g\">/5GHz</span> Network ",
					content: "Enable or disable to connect the extender to an existing 2.4GHz<span class=\"hidden_5g\">/5GHz</span> network."
				},
				{
					type: "name",
					title: "Wireless Scanner",
					content: "Click this button to scan and display all available Wi-Fi networks within range that you want the extender to connect to. Once a network is selected, the SSID and security settings of that network will automatically populate."
				},				
				{
					type: "name",
					title: "Host 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
					content: "Enter the case-sensitive SSID of the host network which the extender will be connecting to, or click <b>Wireless Scanner</b> and select a Wi-Fi network."
				},
				{
					type: "name",
					title: "Host 2.4GHz<span class=\"hidden_5g\">/5GHz</span> Security",
					content: "Select one of the security options to match with the host network."
				},
				{
					type: "name",
					title: "No Security",
					content: "This option disables the wireless security. "
				},
				{
					type: "name",
					title: "WPA-PSK",
					content: "This option supports only TKIP (Temporal Key Integrity Protocol) which provides a good level of security. "
				},
				{
					type: "name",
					title: "WPA2-PSK",
					content: "This option supports AES (Advanced  encryption ) encryption that provides a better level of security than WPA-PSK. It is recommended."
				},
				{
					type: "name",
					title: "WPA-PSK/WPA2-PSK",
					content: "This option supports multiple implementation of the WPA (Wi-Fi Protected Access) standard, such as WPA and WPA2."
				},
				{
					type: "name",
					title: "WEP",
					content: "This option is the most basic form of wireless security that can be used if your client devices can only access wireless using WEP (Wired Equivalent Privacy)."
				}
			]
		},


		WIRELESS_EXTEND: {
			TITLE: "Extended Network Settings",
			CONTENT: [
				{
					type: "name",
					title: "Extended 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
					content: "Enable or disable the 2.4GHz<span class=\"hidden_5g\">/5GHz</span> wireless function of the range extender."
				},
				{
					type: "name",
					title: "Extended 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
					content: "Either use the <b>Copy Host SSID</b> button to automatically copy the main router/AP's SSID or enter a new name (up to 32 characters long). This field is case-sensitive."
				},
				{
					type: "name",
					title: "Copy Host SSID",
					content: "Click to copy the Host SSID. When selected, the extended network will share the SSID of your host network."
				},				
				{
					type: "name",
					title: "Hide SSID broadcast",
					content: "Select this checkbox if you want to hide the the extended 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID from the Wi-Fi network list."
				}
			]
		},

		
		
		ACCESS_CONTROL: {	
			TITLE: "Access Control",
			CONTENT: [{
				type: "paragraph",
				content: "Access Control is used to allow or block specific computers and other devices from accessing your extended network. When a device is blocked, it is unable to connect to the extended network."
			},{
				type: "paragraph",
				content: "To use the Access Control, enable this feature and specify a blacklist or whitelist. If the Access Control is disabled (Off), all devices, including the blacklisted ones, are allowed to connect."
			}]
		},
		
		ACCESS_MODE: {
			TITLE: "Access Mode",
			CONTENT: [{
				type: "name",
				title: "Blacklist",
				content: "Only the devices in the Blacklist are NOT allowed to access your network."
			},{
				type: "name",
				title: "Whitelist",
				content: "Only the devices on the Whitelist are allowed to access your network."
			}]
		},
		
		ACCESS_DEVICE: {
			TITLE: "Online Devices",
			CONTENT: [{
				type: "name",
				title: "Device Name",
				content: "Displays the name of the connected device."
			},{
				type: "name",
				title: "IP Address",
				content: "Displays the IP address of the connected device."
			},{
				type: "name",
				title: "MAC Address",
				content: "Displays the MAC address of the connected device."
			},{
				type: "name",
				title: "Connection Type",
				content: "Displays the connection type of the connected device."
			},{
				type: "step",
				title: "To block a device",
				content: "In the Online Devices table, click the Block icon in the Modify column that corresponds to the device that you wish to block."
			},{
				type: "step",
				title: "To block multiple devices",
				content: "In the Online Devices table, select all devices that you wish to block, click Block above the table. The device will be automatically added to the Devices in Blacklist or Whitelist."
			}],
		},
		
		ACCESS_LIST: {
			TITLE: "Devices in Blacklist/ Whitelist",
			CONTENT: [{
				type: "step",
				title: "To blacklist or whitelist a device",
				content: [
					"1. Click the Add icon.",
					"2. Enter the Device Name.",
					"3. Enter the MAC address of the device.",
					"4. Select the type of Effective Time. If you select <b>Cannot access based on the time schedule/Access based on the time schedule</b>, set the time and days.",
					"5. Click OK."
				]
			},{
				type: "step",
				title: "To modify or delete a device in the Blacklist/Whitelist",
				content: "In the Blacklist/Whitelist table, click the Edit icon or the Trash icon that corresponds to the device that you wish to modify or delete."
			},{
				type: "step",
				title: "To delete multiple devices in the Blacklist/Whitelist",
				content: "In the Blacklist/Whitelist table, select all devices that you wish to delete, click Delete above the table."
			}]
		},

		LAN_ETHERNERT: {
			TITLE: "Ethernet",
			CONTENT: [
				{
					type: "name",
					title: "Host Network for Ethernet port",
					content: "Select the wireless band(2.4GHz or 5GHz) of the host network that is used for sending traffic from the wired clients to the wireless clients.<br/>This option is only available when both 2.4GHz and 5GHz host network are enabled."
				}
			]
		},

		LAN_SETTINGS: {
			TITLE: "Network Settings",
			CONTENT: [
				{
					type: "name",
					title: "Obtain an IP address automatically",
					content: "Select this option (recommended) if you want your extender to dynamically obtain an IP address and gateway from your host network."
				},
				{
					type: "name",
					title: "Use the following IP address",
					content: "Select this option if you manually configure an IP address and gateway for your extender."
				},
				{
					type: "name",
					title: "IP Address",
					content: "Enter the IP address in dotted-decimal notation (192.168.0.254 by default)."
				},
				{
					type: "name",
					title: "Subnet Mask",
					content: "Enter the subnet mask in dotted-decimal notation that determines the size of the network (255.255.255.0 by default)."
				},
				{
					type: "name",
					title: "Default Gateway",
					content: "Enter the gateway that is in the same subnet as the IP address in dotted-decimal notation. It is usually the LAN IP address of your router."
				}
			]
		},


		DHCP_SERVER_SETTINGS: {
			TITLE: "DHCP Server Settings",
			CONTENT: [
				{
					type: "paragraph",
					content: "By default, the range extender is set up as a DHCP (Dynamic Host Configuration Protocol) server to provide TCP/IP configuration for all clients that are connected to the extender in the LAN from the IP Address Pool."
				},
				{
					type: "name",
					title: "DHCP Server",
					content: "By default, Auto is selected; the DHCP server automatically assigns valid IP address to client. You can switch On (enable) or Off (disable) the DHCP server. If Off is selected, you must have another DHCP server within your LAN; otherwise, you have to configure the IP address for each client manually."
				},
				{
					type: "name",
					title: "IP Address Pool",
					content: "Enter a range of IP address that can be leased to the clients. By default, the starting IP address is 192.168.0.100 and the ending IP address is 192.168.0.199. "
				},
				{
					type: "name",
					title: "Address Lease Time",
					content: "Enter the time duration that an IP address is leased to the client between 1 and 2880 minutes. The default is 1 minute."
				},
				{
					type: "name",
					title: "Default Gateway",
					content: "<br/>Enter the LAN IP address of the range extender. The default is 192.168.0.254. (Optional)"
				},
				/*{
					type: "name",
					title: "Default Domain",
					content: "(Optional)<br/>Enter the domain name of the network."
				},*/
				{
					type: "name",
					title: "Primary DNS",
					content: "Enter the DNS IP address provided by your ISP. (Optional)"
				},
				{
					type: "name",
					title: "Secondary DNS",
					content: "Enter the parameters as provided by your ISP. (Optional) "
				},
				{
					type: "note",
					title: "Note",
					content: "In order to use the range extender's DHCP server, all clients in your LAN must configure to obtain IP address automatically."
				},
				{
					type: "paragraph",
					content: "Click <b>Save</b> to save your configuration."
				}
			]
		},
		RESERVED_IP_ADDRESS: {
			TITLE: "Address Reservation",
			CONTENT: [{
				type: "paragraph",
				content: "You can manually reserve an IP address for a client that is connected to the extender. Once reserved, the IP address will only be assigned to the same client by the DHCP server."
			},{
				type: "name",
				title: "MAC Address",
				content: "Displays the MAC address of the client with DHCP reserved IP address."
			},{
				type: "name",
				title: "Reserved IP Address",
				content: "Displays the reserved IP address of the client."
			},{
				type: "name",
				title: "Description",
				content: "Displays a description of the client device."
			},{
				type: "name",
				title: "Status",
				content: "Displays the current status (enabled or disabled) of the client device."
			},{
				type: "name",
				title: "Modify",
				content: "Displays options to Modify or Delete the corresponding client."
			},{
				type: "step",
				title: "To reserve an IP address",
				content:[
					"1. Click Add.",
					"2. Enter the MAC address of your desired client.",
					"3. Enter the IP address that you want to reserve for the client.",
					"4. Enter a description for the client.",
					"5. Select Enable This Entry.",
					"6. Click OK."
				]
			},{
				type: "step",
				title: "To modify or delete an existing client",
				content: "In the table, click the Edit icon or the Trash icon that corresponds to the client that you wish to modify or delete."
			}]
		},
		DHCP_SERVER_CLIENT: {
			TITLE: "DHCP Client List",
			CONTENT: [
				{
					type: "paragraph",
					content: "Displays the following information of each DHCP client that is connected to the range extender."
				},
				{
					type: "name",
					title: "Total Clients",
					content: "Displays the number of the associated DHCP client."
				},
				{
					type: "name",
					title: "Client Name",
					content: "The name of the DHCP client."
				},
				{
					type: "name",
					title: "MAC Address",
					content: "The MAC address of the DHCP client."
				},
				{
					type: "name",
					title: "Assigned IP Address",
					content: "The IP address that is allocated to the client by the DHCP server."
				},
				{
					type: "name",
					title: "Lease Time",
					content: "The time duration that the IP address is leased to the DHCP client."
				},
				{
					type: "paragraph",
					content: "<b>Refresh</b> - Click this button to update the DHCP Client List."
				}
			]
		},
		WIFI_COVERAGE_SETTINGS: {
			TITLE: "Wifi Coverage",
			CONTENT: [
				{
					type: "paragraph",
					content: "Select the Wi-Fi coverage level for your range extender."
				}
			]
		},
		TIME_SETTINGS: {
			TITLE: "Time Settings",
			CONTENT: [
				{
					type: "name",
					title: "Current Time",
					content: "Display the current system time."
				},
				{
					type: "name",
					title: "Time Zone",
					content: "Select your time zone."
				}
			]
		},
		TIME_SETTING_DAYLIGHT:{
				TITLE:"Daylight Saving Time",
				CONTENT:[{
					type: "step",
					title: "To set Daylight Saving Time:",
					content: [
						"1. Select Daylight Saving Time.",
						"2. Select the correct <b>Start</b> date and time when daylight saving time starts at your local time zone.",
						"3. Select the correct <b>End</b> date and time when daylight saving time ends at your local time zone.",
						"4. Click Save."
					]
				},{
					type: "name",
					title: "Current Status",
					content: "Indicates whether the current time is in the daylight saving time or not."
				}]
		},
		LED_CONTROL_SETTINGS: {
			TITLE: "LED Control",
			CONTENT: [
				{
					type: "paragraph",
					content: "The LED Control allows you to turn On or Off the LEDs on your range extender according to a specific time schedule."
				},
				{
					type: "name",
					title: "Night Mode",
					content: "Indicates whether the Night Mode is On (enabled) or Off (disabled)."
				},
				/*{
					type: "name",
					title: "Time Zone",
					content: "Select the Time Zone of your location."
				},*/
				{
					type: "name",
					title: "LED Off Time",
					content: "Select the time schedule to turn off LEDs."
				}
			]
		},
		POWER_SCHEDULE:{
			TITLE: "Power Schedule",
			CONTENT: [
				{
					type: "paragraph",
					content: "Enable this function to power off the extender according to the time schedule for power-saving purposes."
				},
				{
					type: "name",
					title: "Enable Power Schedule",
					content: "Select this option to enable Power Schedule."
				},
				{
					type: "name",
					title: "Power-Off Time",
					content: "Select the time period to power off the extender automatically."
				},
				{
					type: "name",
					title: "Day(s)",
					content: "Select the day(s) on which to power off the extender."
				}
			]
		},
		FIRMWARE_UPGRADE: {
			TITLE: "Firmware Upgrade",
			CONTENT: [
				{
					type: "name",
					title: "Firmware Version",
					content: 
						"Displays the current firmware version."
				},
				{
					type: "name",
					title: "Hardware Version",
					content: "Displays the current hardware version."
				},				
				{
					type: "step",
					title: "IMPORTANT: To prevent upgrade failure, please note the following:",
					content: [
						"1. The upgrading firmware file must accord with the current hardware version of your extender.",
						"2. It is important to keep the extender powered on during the entire upgrade process, as any loss of power may damage your extender."
					]
				},				
				{
					type: "step",
					title: "To upgrade the extender's firmware:",
					content: [
						"1. Download the latest firmware upgrade file from the <a class=\"link\" href=\"http://www.tp-link.com/en/Support/\" target=\"_blank\">TP-Link Support</a> to your computer.",
						"2. Click <b>Browse</b> to locate and select the downloaded file.",
						"3. Click <b>Upgrade</b>."
					]
				},
				{
					type: "paragraph",
					content: "The upgrade takes a few minutes to complete and the range extender will automatically reboot itself when finished."
				}
			]
		},


		BACKUP_RESTORE_BACKUP: {
			TITLE: "Backup",
			CONTENT: [
				{
					type: "paragraph",
					content: "It is highly recommended to backup your current configurations, in case a recovery is needed to restore the system to a previous state or from the factory defaults."
				},
				{
					type: "paragraph",
					content: "Click Backup to save your current configurations as a config.bin file on your computer. Make sure to save it in a safe location where you can retrieve it when needed. "
				}
			]
		},


		BACKUP_RESTORE_RESTORE: {
			TITLE: "Restore",
			CONTENT: [
				{
					type: "step",
					title: "To restore your saved settings from a backup file:",
					content: [
						"1. Click Browse to locate your backup file.",
						"2. Select your backup file.",
						"3. Click Restore.",
						"4. Click <b>Yes</b> to confirm the system restore.",
						"The restore process may take a few minutes to complete and the extender will automatically reboot itself when finished."
					]
				}
			]
		},

		BACKUP_RESTORE_FACTORY: {
			TITLE: "Factory Default Restore",
			CONTENT: [
				{
					type: "paragraph",
					content: "Click Factory Restore to reset your range extender to its factory default settings."
				},
				{
					type: "note",
					title: "Note",
					content: [
						"1. Factory Restore will erase all settings that you have configured for the extender. To re-login to the extender's management page, use the default admin for both username and password.",
						"1. Factory Restore will erase all the previous settings of the extender. Please create a password for future login attempts.",
						"2. Please DO NOT power off the range extender during the backup or restore process."
					]
				}
			]
		},


		ADMIN_ACCOUNT: {
			TITLE: "Admin Account",
			CONTENT: [
				{
					type: "paragraph",
					content: "This page allows you to change your default login username and/or password."
				},
				{
					type: "paragraph",
					content: "On this page, you can change your login password."
				},
				{
					type: "name",
					title: "Old Username",
					content: "Enter your current username."
				},
				{
					type: "name",
					title: "Old Password",
					content: "Enter your current password."
				},
				{
					type: "name",
					title: "New Username ",
					content: "Enter a new username."
				},
				{
					type: "name",
					title: "New Password",
					content: "Enter a new password."
				},
				{
					type: "name",
					title: "Confirm Password",
					content: "Re-enter your new password."
				}
			]
		},



		SYSTEM_LOG: {
			TITLE: "System Log",
			CONTENT: [
				{
					type: "paragraph",
					content: "The System Log page displays a list of the most recent activities (events) of the extender. You can define what types of logs and/or the level of logs you want to view."
				},
				{
					type: "name",
					title: "Type",
					content: "Select the Log Type you want to view."
				},
				{
					type: "name",
					title: "Level",
					content: "Select the Log Level you want to view."
				},
				{
					type: "name",
					title: "Refresh",
					content: "Click this button to update the system log."
				},
				{
					type: "name",
					title: "Delete All",
					content: "Click this button to permanently remove all logs."
				},
				{
					type: "name",
					title: "Save log",
					content: "Click this button to save the system log as a .txt file."
				}
			]
		}

	};
})(jQuery);
