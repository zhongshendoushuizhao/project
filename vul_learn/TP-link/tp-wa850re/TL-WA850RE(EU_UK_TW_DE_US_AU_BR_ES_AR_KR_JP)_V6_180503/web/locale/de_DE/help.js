(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       BASIC_REGION :{ 
               TITLE:"Regionaleinstellungen",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Wählen Sie aus der Drop-Down-Liste den Standort des Routers aus. Ist Ihr Standort nicht aufgeführt, wenden Sie sich an die zuständigen Behörden, um zu klären, ob der WLAN-Betrieb erlaubt ist."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Status",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Statusseite zeigt eine Übersicht über den Betriebsstatus Ihres Repeaters. Klicken Sie auf die Symbole, um weitere Informationen zu erhalten."
                       } ,{                      
                           type: "title",
                            title: "Repeater"
                       } ,{                      
                           type: "paragraph",
                           content: "Zeigt erweiterte Informationen zu Ihrem 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>WLAN."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Name des Repeater-WLANs."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Der aktuell verwendete WLAN-Kanal."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die Hardwareadresse des Repeaters."
                       } ,{                      
                           type: "name",
                           title: "DHCP-Server",
                           content: "Status des DHCP-Servers."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Die IP-Adresse, die der DHCP-Server dem Client zugewiesen hat."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Der IP-Adresstyp, den der DHCP-Server reserviert hat."
                       } ,{                      
                           type: "title",
                            title: "2,4GHz<span class=\"hidden_5g\">/5GHz-</span>Hostnetz"
                       } ,{                      
                           type: "paragraph",
                           content: "Zeigt folgende Informationen zu Ihrem 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>WLAN an."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Name des Haupt-WLANs."
                       } ,{                      
                           type: "name",
                           title: "Signalstärke",
                           content: "Signalstärke des Haupt-WLANs."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die Hardwareadresse Ihres Haupt-WLANs."
                       } ,{                      
                           type: "title",
                            title: "Clients"
                       } ,{                      
                           type: "paragraph",
                           content: "Informationen zu den mit dem Repeater verbundenen 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>Geräten."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Typ des WLANs, mit dem der Client verbunden ist."
                       } ,{                      
                           type: "name",
                           title: "Gerätename",
                           content: "Name des verbundenen Gerätes."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Hardwareadresse des verbundenen Gerätes."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Grundstatus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Auf der Grundstatusseite sehen Sie eine Übersicht über Ihren aktuellen Netzstatus. Weitere Details erhalten Sie, wenn Sie auf die Symbole klicken."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Internetstatus",
                           content: "Der aktuelle Internetverbindungsstatus des Gerätes."
                       } ,{                      
                           type: "title",
                            title: "Accesspoint"
                       } ,{                      
                           type: "name",
                           title: "DHCP-Server",
                           content: "Status des DHCP-Servers."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Die vom DHCP-Server an den Accesspoint zugewiesene IP-Adresse."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Der Weg, auf dem der Accesspoint seine IP-Adresse erhalten hat."
                       } ,{                      
                           type: "title",
                            title: "WLAN-Clients"
                       } ,{                      
                           type: "name",
                           title: "Name",
                           content: "Name des Clientgerätes."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Dem Clientgerät zugewiesene IP-Adresse."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die MAC-Adresse des Clientgerätes."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Einstellungen",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Wählen Sie aus der Drop-Down-Liste den Standort des Routers aus. Ist Ihr Standort nicht aufgeführt, wenden Sie sich an die zuständigen Behörden, um zu klären, ob der WLAN-Betrieb erlaubt ist."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"2,4GHz-WLAN",
               CONTENT: [{
                           type: "name",
                           title: "WLAN aktivieren",
                           content: "2,4GHz-WLAN aktivieren."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Sie können die Standard-SSID belassen oder einen eigenen Namen vergeben (max. 32 Zeichen lang). Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "SSID verbergen",
                           content: "Wählen Sie diese Option, um Ihr 2,4GHz-WLAN zu verstecken."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Wählen Sie hier eine der folgenden Optionen:",
       children: [{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Hiermit deaktivieren Sie Ihre WLAN-Verschlüsselung. Es wird wärmstens empfohlen, Ihr WLAN nur verschlüsselt zu betreiben."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2 – Personal",
                           content: "Authentifizierung basierend auf einer so genannten Passphrase, einem dem Benutzer vorher mündlich oder schriftlich mitgeteilten Passwort (Pre-Shared Key, PSK). Bitte beachten Sie die weiteren auszufüllenden Felder für diese empfohlene Option.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Sicherheitsversion Ihres WLANs.",
       children: [{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "WPA-PSK, recht sicher."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
                       }]
} ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) oder Automatisch (für TKIP und AES). Die Verwendung von TKIP wird nicht empfohlen, wenn der Repeater im 802.11n-Modus arbeiten soll, da TKIP von diesem Standard nicht vorgesehen ist. Ist TKIP ausgewählt, wird WPS deaktiviert."
                       } ,{                      
                           type: "name",
                           title: "Passwort",
                           content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "(nicht empfohlen) Wählen Sie diese veraltete Authentifizierungsmethode nur dann aus, wenn Ihre WLAN-Geräte kein WPA(2) unterstützen.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wählen Sie einen Authentifizierungstyp für Ihr WLAN. Standardwert ist Automatisch, wodurch automatisch zwischen Offen und Shared-Key gewählt wird."
                       } ,{                      
                           type: "name",
                           title: "WEP-Schlüsselformat",
                           content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
                       } ,{                      
                           type: "name",
                           title: "Schlüsseltyp",
                           content: "Die Länge des WEP-Schlüssels.",
       children: [{                      
                           type: "name",
                           title: "64 Bit",
                           content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
                       } ,{                      
                           type: "name",
                           title: "128 Bit",
                           content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
                       }]
} ,{                      
                           type: "name",
                           title: "Schlüssel",
                           content: "Geben Sie hier den WEP-Schlüssel ein."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modus",
                           content: "Wählen Sie einen Übertragungsmodus aus."
                       } ,{                      
                           type: "name",
                           title: "Kanalbreite",
                           content: "Die von Ihrem 2,4GHz-WLAN verwendete Bandbreite pro Kanal."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Wählen Sie den zu verwendenden 2,4GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Automatisch) beizubehalten, sofern keine anderen Gründe dagegen sprechen."
                       } /*,{                      
                           type: "name",
                           title: "Sendeleistung",
                           content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Klicken Sie auf Speichern, um Ihre Einstellungen zu übernehmen."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"5GHz-WLAN",
               CONTENT: [{
                           type: "name",
                           title: "WLAN aktivieren",
                           content: "5GHz-WLAN aktivieren."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Sie können die Standard-SSID belassen oder einen eigenen Namen vergeben (max. 32 Zeichen lang). Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "SSID verbergen",
                           content: "Wählen Sie diese Option, um Ihr 5GHz-WLAN zu verstecken."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Wählen Sie hier eine der folgenden Optionen:",
       children: [{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Hiermit deaktivieren Sie Ihre WLAN-Verschlüsselung. Es wird wärmstens empfohlen, Ihr WLAN nur verschlüsselt zu betreiben."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2 – Personal",
                           content: "(empfohlen) Authentifizierung basierend auf einem Passwort (PSK). Bitte beachten Sie die weiteren auszufüllenden Felder für diese Option.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Sicherheitsversion Ihres WLANs.",
       children: [{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Wählt automatisch zwischen WPA und WPA2, je nach Fähigkeiten des Clientgerätes."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "WPA-PSK, recht sicher."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "WPA2-PSK, besser als WPA-PSK (empfohlen)."
                       }]
} ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) oder Automatisch (für TKIP und AES). Die Verwendung von TKIP wird nicht empfohlen, wenn der Repeater im 802.11n-Modus arbeiten soll, da TKIP von diesem Standard nicht vorgesehen ist. Ist TKIP ausgewählt, wird WPS deaktiviert."
                       } ,{                      
                           type: "name",
                           title: "Passwort",
                           content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "(nicht empfohlen) Wählen Sie diese veraltete Authentifizierungsmethode nur dann aus, wenn Ihre WLAN-Geräte kein WPA(2) unterstützen.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wählen Sie einen Authentifizierungstyp für Ihr WLAN. Standardwert ist Automatisch, wodurch automatisch zwischen Offen und Shared-Key gewählt wird."
                       } ,{                      
                           type: "name",
                           title: "WEP-Schlüsselformat",
                           content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
                       } ,{                      
                           type: "name",
                           title: "Schlüsseltyp",
                           content: "Die Länge des WEP-Schlüssels.",
       children: [{                      
                           type: "name",
                           title: "64 Bit",
                           content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
                       } ,{                      
                           type: "name",
                           title: "128 Bit",
                           content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
                       }]
} ,{                      
                           type: "name",
                           title: "Schlüssel",
                           content: "Geben Sie hier den WEP-Schlüssel ein."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modus",
                           content: "Wählen Sie einen Übertragungsmodus aus."
                       } ,{                      
                           type: "name",
                           title: "Kanalbreite",
                           content: "Die von Ihrem 5GHz-WLAN verwendete Bandbreite pro Kanal."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Wählen Sie den zu verwendenden 5GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Auto) beizubehalten, sofern keine anderen Gründe dagegensprechen."
                       } /*,{                      
                           type: "name",
                           title: "Sendeleistung",
                           content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Klicken Sie auf Speichern, um Ihre Einstellungen zu übernehmen."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "WPS aktivieren",
                           content: "Andere Geräte können sich mit diesem Accesspoint unter Verwendung von dessen WPS-PIN verbinden."
                       }]
},
       WPS :{ 
               TITLE:"PIN des APs",
               CONTENT: [{
                           type: "name",
                           title: "PIN des APs",
                           content: "Aktivieren Sie dies, um anderen Geräten die Verbindung mit diesem WLAN unter Verwendung der PIN (Persönliche Identifikationsnummer) dieses Accesspoints zu erlauben."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Die PIN des APs. Die Standard-PIN ist auf dem Etikett am Gehäuse zu finden. Klicken Sie auf Erzeugen, um eine neue, zufällige PIN zu erstellen. Klicken Sie auf Standard, um die Original-PIN wiederherzustellen."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS-Assistent",
               CONTENT: [{
                           type: "name",
                           title: "Push-Button-Methode",
                           content: "Wählen Sie diese Verbindungsmethode, um WPS zu aktivieren, damit WPS-fähige Geräte sich einfach mit Ihrem WLAN verbinden können."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Wählen Sie diese Verbindungsmethode, um ein Gerät durch Eingabe von dessen PIN in den Repeater mit dem WLAN zu verbinden."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Mit Haupt-WLAN verbinden",
               CONTENT: [{
                           type: "name",
                           title: "Mit 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>Netz verbinden",
                           content: "Verbindet den Repeater mit einem bestehenden 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>WLAN."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Scanner",
                           content: "Klicken Sie hier, um nach verfügbaren WLANs zu suchen. Wählen Sie ein gefundenes WLAN aus, werden dessen Sicherheitseinstellungen automatisch eingetragen."
                       } ,{                      
                           type: "name",
                           title: "SSID des 2,4GHz<span class=\"hidden_5g\">/5GHz-</span>Hosts",
                           content: "Geben Sie den Namen (SSID) des WLANs ein, mit dem der Repeater sich verbinden soll oder klicken Sie auf <strong>WLAN-Scanner</strong> und wählen Sie ein WLAN aus."
                       } ,{                      
                           type: "name",
                           title: "Sicherheitstyp des 2,4GHz<span class=\"hidden_5g\">/5GHz-</span>Hosts",
                           content: "Wählen Sie hier den Sicherheitstyp Ihres WLANs aus."
                       } ,{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Keine Sicherheit (nicht empfohlen)."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Nur TKIP (Temporal Key Integrity Protocol) zulassen."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Verwendung von AES (Advanced Encryption Standard), besser als WPA-PSK und empfohlen."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Automatische Wahl zwischen WPA (Wi-Fi Protected Access) und WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Grundverschlüsselung, gilt nicht mehr als sicher. Diese Option sollten Sie nur dann verwenden, wenn Ihre WLAN-Geräte lediglich WEP (Wired Equivalent Privacy) unterstützen."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Einstellungen des Repeater-Netzes",
               CONTENT: [{
                           type: "name",
                           title: "2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>Repeater-WLAN",
                           content: "Aktivieren oder Deaktivieren des Repeatings auf dem 2,4GHz-<span class=\"hidden_5g\">/5GHz</span>-WLAN."
                       } ,{                      
                           type: "name",
                           title: "SSID des 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>Repeater-Netzes",
                           content: "Sie können entweder die <strong>SSID des Haupt-WLANs übernehmen</strong> oder einen neuen Namen aus bis zu 32 Zeichen eingeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "SSID des Haupt-WLANs übernehmen",
                           content: "SSID und Sicherheitseinstellungen des Haupt-WLANs für den Repeater übernehmen."
                       } ,{                      
                           type: "name",
                           title: "SSID-Aussendung unterdrücken",
                           content: "Vergrößertes 2,4GHz-<span class=\"hidden_5g\">/5GHz-</span>WLAN verbergen."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Zugriffssteuerung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Zugriffssteuerung steuert den Zugriff bestimmter Geräte in Ihrem Netz. Ein blockiertes Gerät kann nicht auf das erweiterte WLAN zugreifen."
                       } ,{                      
                           type: "paragraph",
                           content: "Um die Zugriffssteuerung zu benutzen, aktivieren Sie diese und geben Sie an, ob Sie mittels Blacklist oder Whitelist filtern möchten. Ist die Zugriffssteuerung deaktiviert, können alle gelisteten Geräte, egal ob Blacklist oder Whitelist, das Netz benutzen."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Zugriffsmodus",
               CONTENT: [{
                           type: "name",
                           title: "Blacklist",
                           content: "In der Blacklist aufgeführte Geräte haben keinen Zugriff, alle anderen schon."
                       } ,{                      
                           type: "name",
                           title: "Whitelist",
                           content: "Nur die Geräte, die sich in der Whitelist befinden, können das Netz benutzen."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Geräte online",
               CONTENT: [{
                           type: "name",
                           title: "Gerätename",
                           content: "Name des verbundenen Gerätes."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "IP-Adresse des verbundenen Gerätes."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "MAC-Adresse des verbundenen Gerätes."
                       } ,{                      
                           type: "name",
                           title: "Verbindungstyp",
                           content: "Verbindungstyp des verbundenen Gerätes."
                       } ,{                      
                           type: "step",
                           title: "So blockieren Sie ein Gerät",
                           content: "Klicken Sie über der Tabelle Geräte online auf Blockieren, um den Internetzugang dieses Gerätes zu sperren."
                       } ,{                      
                           type: "step",
                           title: "So blockieren Sie mehrere Geräte",
                           content: "Wählen Sie in der Tabelle Geräte online alle zu blockierenden Geräte aus und klicken Sie über der Tabelle auf Blockieren. Die Geräte werden dann zur Black-/Whitelist hinzugefügt."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Geräte in Blacklist/Whitelist",
               CONTENT: [{
                           type: "step",
                           title: "So fügen Sie ein Gerät der Black-/Whitelist hinzu",
       content: [ 
                "1. Klicken Sie auf Hinzufügen.",
                "2. Geben Sie den Gerätenamen ein.",
                "3. Geben Sie die MAC-Adresse des Gerätes ein.",
                "4. Wählen Sie aus, wie der Geltungszeitraum festgelegt wird. Wenn Sie eine der Optionen <b>Zugriff zeitplangesteuert blockiert/Zugriff zeitplangesteuert erlaubt</b> auswählen, geben Sie die Uhrzeit und die Wochentage an.",
                "5. Klicken Sie auf OK."]
} ,{                      
                           type: "step",
                           title: "So bearbeiten oder löschen Sie ein Gerät in der Black-/Whitelist",
                           content: "Klicken Sie in der Tabelle Blacklist bzw. Whitelist für das entsprechende Gerät auf Bearbeiten oder Löschen."
                       } ,{                      
                           type: "step",
                           title: "So bearbeiten oder löschen Sie mehrere Geräte in der Black-/Whitelist",
                           content: "Wählen Sie in der Tabelle Blacklist/Whitelist alle zu löschenden Geräte aus und klicken Sie über der Tabelle auf Löschen."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Hostnetz am Ethernetport",
                           content: "Wählen Sie das Band (2,4GHz oder 5GHz) Ihres Haupt-WLANs aus, das verwendet werden soll.<br/>Diese Option ist nur verfügbar, wenn auf Ihrem Haupt-WLAN 2,4 und 5GHz aktiviert sind."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Netzwerkeinstellungen",
               CONTENT: [{
                           type: "name",
                           title: "IP-Adresse automatisch beziehen",
                           content: "Wählen Sie diese Option aus, wenn Ihre WLAN-Clients ihre IP-Konfiguration automatisch beziehen sollen. Dies ist die empfohlene Option."
                       } ,{                      
                           type: "name",
                           title: "Folgende IP-Adresse verwenden",
                           content: "Wählen Sie diese Option aus, wenn Sie die IP-Adresse, die Subnetzmaske und das Gateway für den Repeater manuell festlegen möchten."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Geben Sie hier die IP-Adresse ein (Standard: 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Subnetzmaske",
                           content: "Geben Sie hier die Subnetzmaske ein (Standard: 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Standardgateway",
                           content: "Geben Sie hier die Gatewayadresse ein. Diese muss sich im selben Subnetz wie der Repeater befinden. Normalerweise handelt es sich hierbei um die lokale IP-Adresse Ihres Routers."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP-Server-Einstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Standardmäßig läuft auf dem Repeater ein DHCP-Server (Dynamic Host Configuration Protocol), um TCP/IP-Konfigurationen zu verteilen."
                       } ,{                      
                           type: "name",
                           title: "DHCP-Server",
                           content: "Standardmäßig ist Automatisch gewählt, so dass der DHCP-Server automatisch gültige IP-Konfigurationen verteilt. Sie können den DHCP-Server aktivieren und deaktivieren. Ist er deaktiviert, brauchen Sie in Ihrem Netz einen anderen DHCP-Server oder Sie müssen jedes Gerät von Hand konfigurieren."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresspool",
                           content: "Geben Sie einen IP-Adressbereich, aus dem IP-Adressen vergeben werden können, an. Standardmäßig ist die erste IP-Adresse aus diesem Bereich 192.168.0.100, die letzte 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Adresshaltezeit",
                           content: "Geben Sie hier die Zeitdauer, über die ein Client eine IP-Adresse behalten kann, an (1 bis 2880 Minuten, Standardwert: 1 Minute)."
                       } ,{                      
                           type: "name",
                           title: "Standardgateway",
                           content: "<br/>Geben Sie die LAN-IP-Adresse des Repeaters ein. Standardwert: 192.168.0.254 (optional)."
                       } ,{                      
                           type: "name",
                           title: "Haupt-DNS-Server",
                           content: "Geben Sie hier eine DNS-Serveradresse Ihres Internetdienstanbieters ein (optional)."
                       } ,{                      
                           type: "name",
                           title: "Backup-DNS-Server",
                           content: "Hier können Sie DNS-Serveradressen eingeben.(optional)"
                       } ,{                      
                           type: "note",
                           title: "Hinweis",
                           content: "Um den DHCP-Server Ihres Repeaters zu verwenden, müssen alle Clients in Ihrem Netz ihre IP-Konfiguration automatisch beziehen."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie auf <strong>Speichern</strong>, um Ihre Konfiguration zu speichern."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Adressreservierung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sie können IP-Adressen von mit dem Repeater verbundenen Geräten reservieren. Eine reservierte IP-Adresse wird nur dem Gerät zugewiesen, dem sie zugeordnet ist."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "MAC-Adresse des Gerätes, für das eine IP-Adresse reserviert ist."
                       } ,{                      
                           type: "name",
                           title: "Reservierte IP-Adresse",
                           content: "Die IP-Adresse, die für dieses Gerät reserviert ist."
                       } ,{                      
                           type: "name",
                           title: "Beschreibung",
                           content: "Eine frei wählbare Beschreibung für das Gerät (z.B. Blu-ray-Player)."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Aktueller Status des Gerätes (aktiviert oder deaktiviert)."
                       } ,{                      
                           type: "name",
                           title: "Bearbeiten",
                           content: "Optionen zum Löschen oder Bearbeiten eines Eintrags."
                       } ,{                      
                           type: "step",
                           title: "So reservieren Sie eine IP-Adresse",
       content: [ 
                "1. Klicken Sie auf Hinzufügen.",
                "2. Geben Sie die MAC-Adresse des betreffenden Gerätes ein.",
                "3. Geben Sie die zu reservierende IP-Adresse ein.",
                "4. Vergeben Sie eine kurze Beschreibung, damit Sie den Eintrag wiedererkennen können.",
                "5. Wählen Sie Diesen Eintrag Aktivieren.",
                "6. Klicken Sie auf OK."]
} ,{                      
                           type: "step",
                           title: "So bearbeiten oder löschen Sie einen Client",
                           content: "Klicken Sie in der Zeile des Gerätes auf Bearbeiten oder Löschen."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP-Clientliste",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt zu jedem verbundenen DHCP-Client folgende Informationen an."
                       } ,{                      
                           type: "name",
                           title: "Clientnummer",
                           content: "Laufende Nummer des DHCP-Clients."
                       } ,{                      
                           type: "name",
                           title: "Clientname",
                           content: "Name des DHCP-Clients."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "MAC-Adresse des DHCP-Clients."
                       } ,{                      
                           type: "name",
                           title: "Zugewiesene IP-Adresse",
                           content: "Vom DHCP-Server zugewiesene IP-Adresse."
                       } ,{                      
                           type: "name",
                           title: "Adresshaltezeit",
                           content: "Zeitdauer, die der Client seine IP-Adresse noch behalten kann."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Neu laden</strong> – Ansicht der DHCP-Clientliste aktualisieren."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Funkabdeckung",
               CONTENT: [{
						   type: "paragraph",
                           content: "Wählen Sie den Funkpegel aus, um die Reichweite des Repeaters festzulegen."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Uhrzeiteinstellungen",
               CONTENT: [{
                           type: "name",
                           title: "Aktuelle Uhrzeit",
                           content: "Zeigt die aktuelle Systemzeit an."
                       },{
                           type: "name",
                           title: "Zeitzone",
                           content: "Bitte wählen Sie Ihre Zeitzone aus."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Sommer-/Winterzeit",
               CONTENT: [{
							type:"step",
                            title: "So legen Sie die Sommer-/Winterzeit fest",
							content:[
                "1. Aktivieren Sie die Option Sommer-/Winterzeit.",
                "2. Wählen Sie die  richtige Uhrzeit und das Datum für den <b>Start</b> der Sommerzeit entsprechend Ihrer Zeitzone aus.",
                "3. Wählen Sie die  richtige Uhrzeit und das Datum für das <b>Ende</b> der Sommerzeit entsprechend Ihrer Zeitzone aus.",
                "4. Klicken Sie auf Speichern."]
                       },{
						type:"name",
						title:"Aktueller Status",
						content:"Gibt an, ob die angegebene Uhrzeit Sommerzeit ist."
					   }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LEDs",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sie haben hier die Möglichkeit, die LEDs Ihres Repeaters uhrzeitbasierend ein- und auszuschalten."
                       } ,{                      
                           type: "name",
                           title: "Nachtmodus",
                           content: "Zeigt an, ob der Nachtmodus aktiv ist oder nicht."
                       } ,{                      
                           type: "name",
                           title: "LEDs ausschalten:",
                           content: "Zeitfenster zur Abschaltung der LEDs auswählen."
                       }]
},       POWER_SCHEDULE :{ 
               TITLE:"Betriebszeitplan",
               CONTENT: [{
                           type: "paragraph",
                           content: "Aktivieren Sie diese Funktion, um den Repeater zeitplangesteuert abzuschalten, um Energie zu sparen."
                       } ,{                      
                           type: "name",
                           title: "Betriebszeitplan aktivieren",
                           content: "Wählen Sie diese Option, um den Betriebszeitplan zu aktivieren."
                       } ,{                      
                           type: "name",
                           title: "Zeitfenster für Abschaltung",
                           content: "Wählen Sie das Zeitfenster aus, für das der Repeater automatisch abgeschaltet wird."
                       } ,{                      
                           type: "name",
                           title: "Tag(e)",
                           content: "Wählen Sie die Tage aus, an denen der Repeater automatisch abgeschaltet wird."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Firmware-Upgrade",
               CONTENT: [{
                           type: "name",
                           title: "Firmwareversion",
                           content: "Aktuell installierte Firmwareversion."
                       } ,{                      
                           type: "name",
                           title: "Hardwareversion",
                           content: "Hardwareversion Ihres Gerätes."
                       } ,{                      
                           type: "step",
                           title: "WICHTIG! Um Schäden beim Upgrade zu vermeiden, beachten Sie:",
       content: [ 
                "1. Stellen Sie sicher, dass diese Firmware für die Hardwareversion Ihres Repeaters geeignet ist.",
                "2. Der Repeater darf während dieses Vorgangs keinesfalls abgeschaltet werden, da er ansonsten Schaden nehmen kann."]
} ,{                      
                           type: "step",
                           title: "So aktualisieren Sie die Firmware des Repeaters",
       content: [ 
                "1. Laden Sie sich die neueste Firmware von der<a class=\"link\" href=\"http://www.tp-link.de/Support\" target=\"_blank\">TP-Link-Supportseite</a> auf Ihren Computer.",
                "2. Klicken Sie auf <strong>Durchsuchen</strong> und wählen Sie die Firmwaredatei aus.",
                "3. Klicken Sie auf <strong>Aktualisieren</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Warten Sie nun ein paar Minuten, bis der Repeater neugestartet wurde."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Sichern",
               CONTENT: [{
                           type: "paragraph",
                           content: "Es wird empfohlen, Ihre fertige Konfiguration zu speichern, damit Sie Ihren Repeater schnell wieder einsatzbereit haben, sollte dieser einmal zurückgesetzt oder ausgetauscht werden."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie auf Sichern, um Ihre aktuelle Konfiguration in einer Datei auf Ihrem Computer zu speichern. Bewahren Sie diese Datei an einer sicheren Stelle auf."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Wiederherstellen",
               CONTENT: [{
                           type: "step",
                           title: "So stellen Sie Ihre gespeicherten Einstellungen wieder her",
       content: [ 
                "1. Klicken Sie auf Durchsuchen und begeben Sie sich zu dem Ordner, in dem Sie Ihre Konfigurationsdatei abgelegt haben.",
                "2. Wählen Sie die Konfigurationsdatei aus.",
                "3. Klicken Sie auf Wiederherstellen.",
                "4. Klicken Sie auf <strong>Ja</strong>, um Ihr Vorhaben zu bestätigen.",
                "Die Wiederherstellung Ihrer Konfiguration dauert ein paar Minuten. Danach startet der Repeater automatisch neu."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Zurücksetzen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Klicken Sie auf Zurücksetzen, um Ihren Repeater auf Standardeinstellungen zurückzusetzen."
                       } ,{                      
                           type: "note",
                            title: "Hinweis",
                            content: [
                            "1. Bei diesem Vorgang gehen prinzipbedingt alle Repeatereinstellungen verloren. Um sich erneut einzuloggen, verwenden Sie die Standard-Zugangsdaten: admin als Benutzername und Passwort.",
                            "1. Ein Wiederherstellen der Werkseinstellungen löscht alle Einstellungen Ihres Repeaters. Bitte vergeben Sie ein Passwort für zukünftige Logins.",
                            "2. Schalten Sie Ihren Repeater während des Backups oder Wiederherstellens NICHT ab."
                          ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Administratorkonto",
               CONTENT: [{
                           type: "paragraph",
                           content: "Auf dieser Seite können Sie Ihren Benutzernamen und Ihr Passwort ändern."
                       } ,{                      
                           type: "paragraph",
                           content: "Auf dieser Seite können Sie Ihr Login-Passwort ändern."
                       } ,{                      
                           type: "name",
                           title: "Alter Benutzername",
                           content: "Geben Sie hier Ihren aktuellen Benutzernamen ein."
                       } ,{                      
                           type: "name",
                           title: "Altes Passwort",
                           content: "Geben Sie hier Ihr aktuelles Passwort ein."
                       } ,{                      
                           type: "name",
                           title: "Neuer Benutzername",
                           content: "Geben Sie hier den gewünschten Benutzernamen ein."
                       } ,{                      
                           type: "name",
                           title: "Neues Passwort",
                           content: "Geben Sie hier das gewünschte Passwort ein."
                       } ,{                      
                           type: "name",
                           title: "Passwort bestätigen",
                           content: "Geben Sie hier erneut das gewünschte Passwort ein."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Systemprotokoll",
               CONTENT: [{
                           type: "paragraph",
                           content: "Das Systemprotokoll zeigt eine Auflistung der letzten Systemaktivitäten. Sie können definieren, welche Einträge angezeigt werden sollen."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Wählen Sie hier den gewünschten Protokolltyp aus."
                       } ,{                      
                           type: "name",
                           title: "Stufe",
                           content: "Wählen Sie hier die gewünschte Protokollierungsstufe aus."
                       } ,{                      
                           type: "name",
                           title: "Neu laden",
                           content: "Klicken Sie hier, um die Ansicht zu aktualisieren."
                       } ,{                      
                           type: "name",
                           title: "Protokoll löschen",
                           content: "Klicken Sie hier, um das Protokoll zu löschen."
                       } ,{                      
                           type: "name",
                           title: "Protokoll speichern",
                           content: "Klicken Sie hier, um das Protokoll in einer Textdatei auf Ihrem Computer zu speichern."
                       }]
}
    };
})(jQuery);
