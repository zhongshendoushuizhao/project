(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Regio-instellingen",
               CONTENT: [{
                           type: "name",
                           title: "Regio",
                           content: "Selecteer uw land of regio in de keuzelijst. Als uw land of regio niet wordt vermeld, is het gebruik van draadloze radio op uw locatie mogelijk niet toegestaan."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Status",
               CONTENT: [{
                           type: "paragraph",
                           content: "De pagina Basisstatus toont een dashboard met de status van uw huidige netwerk en informatie daarover. U kunt op de pictogrammen klikken voor meer informatie. "
                       } ,{                      
                           type: "title",
                            title: "Range extender"
                       } ,{                      
                           type: "paragraph",
                           content: "Toont informatie over het uitgebreide 2,4 GHz <span class=\"hidden_5g\">/ 5GHz</span> netwerk."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "De naam (SSID) van het uitgebreide netwerk."
                       } ,{                      
                           type: "name",
                           title: "Kanaal",
                           content: "Het gebruikte draadloze kanaal."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Het fysieke MAC-adres van de range extender."
                       } ,{                      
                           type: "name",
                           title: "DHCP-server",
                           content: "Toont de status van de DHCP-server."
                       } ,{                      
                           type: "name",
                           title: "IP-adres",
                           content: "Het IP-adres dat aan de client is toegewezen door de DHCP-server."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Het type van het door de DHCP-server toegewezen IP-adres."
                       } ,{                      
                           type: "title",
                            title: "2,4 GHz<span class=\"hidden_5g\">/5GHz</span>  hostnetwerk"
                       } ,{                      
                           type: "paragraph",
                           content: "Toont de volgende informatie over het 2,4 GHz <span class=\"hidden_5g\">/ 5GHz</span> hostnetwerk."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Het SSID van het hostnetwerk."
                       } ,{                      
                           type: "name",
                           title: "Signaal",
                           content: "De signaalsterkte van het hostnetwerk."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Het fysieke MAC-adres van het hostnetwerk."
                       } ,{                      
                           type: "title",
                            title: "Clients"
                       } ,{                      
                           type: "paragraph",
                           content: "Toont de clientapparaten die momenteel met de extender verbonden zijn op 2,4 GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Het uitgebreide 2,4 GHz<span class=\"hidden_5g\">/5GHz</span> netwerk waarmee het client apparaat is verbonden."
                       } ,{                      
                           type: "name",
                           title: "Apparaatnaam",
                           content: "De naam van het verbonden clientapparaat."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Het fysieke MAC-adres van het verbonden clientapparaat."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Status",
               CONTENT: [{
                           type: "paragraph",
                           content: "De statuspagina toont een dashboard met uw huidige netwerkstatus en informatie. Klik op de pictogrammen voor meer informatie."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Internetstatus",
                           content: "Geeft de huidige status van de internetverbinding van het apparaat weer."
                       } ,{                      
                           type: "title",
                            title: "Access point"
                       } ,{                      
                           type: "name",
                           title: "DHCP-server",
                           content: "Geeft de status van de DHCP-server weer."
                       } ,{                      
                           type: "name",
                           title: "IP-adres",
                           content: "Geeft het IP-adres weer dat door de DHCP-server aan het access point is toegewezen."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Geeft de wijze aan waarop het access point zijn IP-adres verkrijgt."
                       } ,{                      
                           type: "title",
                            title: "Draadloze clients"
                       } ,{                      
                           type: "name",
                           title: "Naam",
                           content: "Geeft de naam van de clientapparaten weer."
                       } ,{                      
                           type: "name",
                           title: "IP-adres",
                           content: "Geeft het IP-adres weer dat is toegewezen aan de clientapparaten."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Geeft het fysieke MAC-adres van de clientapparaten weer."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Instellingen",
               CONTENT: [{
                           type: "name",
                           title: "Regio",
                           content: "Selecteer uw land of regio in de keuzelijst. Als uw land of regio niet wordt vermeld, is het gebruik van draadloze radio op uw locatie mogelijk niet toegestaan."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Draadloos 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Draadloze radio inschakelen",
                           content: "Selecteer dit keuzevakje om de 2,4 GHz frequentie voor draadloze radio in te schakelen."
                       } ,{                      
                           type: "name",
                           title: "Naam draadloos netwerk (SSID)",
                           content: "U kunt de standaard netwerknaam (SSID) laten zoals die is, of een nieuwe naam invoeren (tot 32 tekens). Dit veld is hoofdlettergevoelig."
                       } ,{                      
                           type: "name",
                           title: "SSID verbergen",
                           content: "Selecteer dit keuzevakje als u de naam (SSID) van het 2,4 GHz netwerk niet in de wifi-netwerklijst wilt weergeven."
                       } ,{                      
                           type: "name",
                           title: "Beveiliging",
                           content: "Selecteer een van de volgende beveiligingsopties:",
       children: [{                      
                           type: "name",
                           title: "Geen beveiliging",
                           content: "Selecteer deze optie om de beveiliging van het draadloze netwerk uit te schakelen. Het wordt sterk aanbevolen de beveiliging in te schakelen, om uw draadloze netwerk te beschermen tegen ongeoorloofde toegang."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Privé",
                           content: "Selecteer deze optie om de standaard authenticatiemethode op basis van een vooraf gedeelde sleutel (PSK) of wachtwoord in te schakelen. Deze optie wordt aanbevolen. Indien geselecteerd, configureer dan het volgende.",
       children: [{                      
                           type: "name",
                           title: "Versie",
                           content: "Selecteer een beveiligingstype voor uw draadloze netwerk.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Deze optie ondersteunt meerdere implementaties van de WPA-standaard (Wi-Fi Protected Access), zoals WPA en WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Deze optie ondersteunt alleen TKIP-versleuteling, wat een goed beveiligingsniveau biedt."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Deze optie ondersteunt AES-versleuteling, wat een hoger beveiligingsniveau biedt dan WPA-PSK, waardoor het wordt aanbevolen."
                       }]
} ,{                      
                           type: "name",
                           title: "Versleuteling",
                           content: "Selecteer een beveiligings type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt niet aangeraden om gebruik te maken van TKIP-versleuteling als de extender is ingesteld in de modus 802.11n, omdat TKIP niet wordt ondersteund door 802.11n specificaties. Als TKIP is geselecteerd, wordt de WPS-functie uitgeschakeld."
                       } ,{                      
                           type: "name",
                           title: "Wachtwoord",
                           content: "Voer in dit veld een wachtwoord in voor het draadloze netwerk van 8-63 ASCII-tekens of 8-64 hexadecimale tekens."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecteer deze optie om een eenvoudige verificatiemethode in te schakelen als een van uw clientapparaten alleen draadloze netwerken kan gebruiken door middel van WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Selecteer een authenticatietype voor uw draadloze netwerk. De standaard instelling is Auto, waarbij automatisch Open systeem of Gedeelde sleutel wordt gekozen op basis van de mogelijkheden en het toegangsverzoek van de draadloze client."
                       } ,{                      
                           type: "name",
                           title: "WEP-sleutelnotatie",
                           content: "Gebruik ASCII-notatie of selecteer Hexadecimaal. ASCII-notatie is een combinatie van alle letters en cijfers. Hexadecimale notatie is een combinatie van de cijfers (0-9) en letters (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Sleuteltype",
                           content: "Selecteer een lengte voor de WEP-sleutel.",
       children: [{                      
                           type: "name",
                           title: "64-bits",
                           content: "Biedt de mogelijkheid om 10 hexadecimale tekens (0-9, A-F, a-f) of 5 ASCII-tekens in te voeren in het veld WEP-waarde."
                       } ,{                      
                           type: "name",
                           title: "128-bits",
                           content: "Biedt de mogelijkheid om 26 hexadecimale tekens (0-9, A-F, a-f) of 13 ASCII-tekens in te voeren in het veld WEP-waarde."
                       }]
} ,{                      
                           type: "name",
                           title: "Sleutelwaarde",
                           content: "Voer de WEP-sleutel in in het desbetreffende veld."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modus",
                           content: "Selecteer een gemengde transmissiemodus."
                       } ,{                      
                           type: "name",
                           title: "Kanaalbreedte",
                           content: "Selecteer een kanaalbreedte (bandbreedte) voor het 2,4 GHz draadloze netwerk."
                       } ,{                      
                           type: "name",
                           title: "Kanaal",
                           content: "Selecteer een gebruikskanaal voor het 2,4 GHz draadloze netwerk. Aanbevolen wordt het kanaal op Auto te laten staan als u geen problemen heeft met onregelmatige draadloze verbindingen."
                       } /*,{                      
                           type: "name",
                           title: "Zendvermogen",
                           content: "Selecteer Hoog, Middel of Laag voor het zendvermogen. De standaard en aanbevolen instelling is Hoog."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Klik op Opslaan om alle instellingen op te slaan."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Draadloos 5 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Draadloze radio inschakelen",
                           content: "Selecteer dit keuzevakje om de 5 GHz frequentie voor draadloze radio in te schakelen."
                       } ,{                      
                           type: "name",
                           title: "Naam draadloos netwerk (SSID)",
                           content: "U kunt de standaard netwerknaam (SSID) laten zoals die is, of een nieuwe naam invoeren (tot 32 tekens). Dit veld is hoofdlettergevoelig."
                       } ,{                      
                           type: "name",
                           title: "SSID verbergen",
                           content: "Selecteer dit keuzevakje als u de naam (SSID) van het 5 GHz netwerk niet in de wifi-netwerklijst wilt weergeven."
                       } ,{                      
                           type: "name",
                           title: "Beveiliging",
                           content: "Selecteer een van de volgende beveiligingsopties:",
       children: [{                      
                           type: "name",
                           title: "Geen beveiliging",
                           content: "Selecteer deze optie om de beveiliging van het draadloze netwerk uit te schakelen. Het wordt sterk aanbevolen de beveiliging in te schakelen, om uw draadloze netwerk te beschermen tegen ongeoorloofde toegang."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Privé",
                           content: "Selecteer deze optie om de standaard authenticatiemethode op basis van een vooraf gedeelde sleutel (PSK) of wachtwoord in te schakelen. Deze optie wordt aanbevolen. Indien geselecteerd, configureer dan het volgende.",
       children: [{                      
                           type: "name",
                           title: "Versie",
                           content: "Selecteer een beveiligingstype voor uw draadloze netwerk.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Deze optie ondersteunt meerdere implementaties van de WPA-standaard (Wi-Fi Protected Access), zoals WPA en WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Deze optie ondersteunt alleen TKIP-versleuteling, wat een goed beveiligingsniveau biedt."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Deze optie ondersteunt AES-versleuteling, wat een hoger beveiligingsniveau biedt dan WPA-PSK, waardoor het wordt aanbevolen."
                       }]
} ,{                      
                           type: "name",
                           title: "Versleuteling",
                           content: "Selecteer een beveiligings type: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), of Auto (voor zowel TKIP als AES). Het wordt niet aangeraden om gebruik te maken van TKIP-versleuteling als de extender is ingesteld in de modus 802.11n, omdat TKIP niet wordt ondersteund door 802.11n specificaties. Als TKIP is geselecteerd, wordt de WPS-functie uitgeschakeld."
                       } ,{                      
                           type: "name",
                           title: "Wachtwoord",
                           content: "Voer in dit veld een wachtwoord in voor het draadloze netwerk van 8-63 ASCII-tekens of 8-64 hexadecimale tekens."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecteer deze optie om een eenvoudige verificatiemethode in te schakelen als een van uw clientapparaten alleen draadloze netwerken kan gebruiken door middel van WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Selecteer een authenticatietype voor uw draadloze netwerk. De standaard instelling is Auto, waarbij automatisch Open systeem of Gedeelde sleutel wordt gekozen op basis van de mogelijkheden en het toegangsverzoek van de draadloze client."
                       } ,{                      
                           type: "name",
                           title: "WEP-sleutelnotatie",
                           content: "Gebruik ASCII-notatie of selecteer Hexadecimaal. ASCII-notatie is een combinatie van alle letters en cijfers. Hexadecimale notatie is een combinatie van de cijfers (0-9) en letters (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Sleuteltype",
                           content: "Selecteer een lengte voor de WEP-sleutel.",
       children: [{                      
                           type: "name",
                           title: "64-bits",
                           content: "Biedt de mogelijkheid om 10 hexadecimale tekens (0-9, A-F, a-f) of 5 ASCII-tekens in te voeren in het veld WEP-waarde."
                       } ,{                      
                           type: "name",
                           title: "128-bits",
                           content: "Biedt de mogelijkheid om 26 hexadecimale tekens (0-9, A-F, a-f) of 13 ASCII-tekens in te voeren in het veld WEP-waarde."
                       }]
} ,{                      
                           type: "name",
                           title: "Sleutelwaarde",
                           content: "Voer de WEP-sleutel in in het desbetreffende veld."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modus",
                           content: "Selecteer een gemengde transmissiemodus."
                       } ,{                      
                           type: "name",
                           title: "Kanaalbreedte",
                           content: "Selecteer een kanaalbreedte (bandbreedte) voor het 5 GHz draadloze netwerk."
                       } ,{                      
                           type: "name",
                           title: "Kanaal",
                           content: "Selecteer een gebruikskanaal voor het 5 GHz draadloze netwerk. Aanbevolen wordt het kanaal op Auto te laten staan als u geen problemen heeft met onregelmatige draadloze verbindingen."
                       } /*,{                      
                           type: "name",
                           title: "Zendvermogen",
                           content: "Selecteer Hoog, Middel of Laag voor het zendvermogen. De standaard en aanbevolen instelling is Hoog."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Klik op Opslaan om alle instellingen op te slaan."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "WPS inschakelen",
                           content: "Andere apparaten kunnen verbinding maken met de access point (AP) via WPS met de AP-pincode."
                       }]
},
       WPS :{ 
               TITLE:"AP-pincode",
               CONTENT: [{
                           type: "name",
                           title: "AP-pincode",
                           content: "Zet dit Aan om draadloze apparaten verbinding te latenmaken met de AP via de AP-pincode."
                       } ,{                      
                           type: "name",
                           title: "Pincode",
                           content: "Geeft de AP-pincode weer. De standaard pincode kunt u vinden op de productsticker van het AP. Klik op \"Genereren\" om een nieuwe pincode te genereren of klik op \"Standaard\"  om de huidige pincode te wissen en de standaard pincode te herstellen."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS-wizard",
               CONTENT: [{
                           type: "name",
                           title: "Drukknop (aanbevolen)",
                           content: "Selecteer deze verbindingsoptie om WPS in te schakelen om zo eenvoudig alle apparaten met WPS-ondersteuning toe te voegen aan uw netwerk via een WPS-knop of virtueel met behulp van de knop Verbinden."
                       } ,{                      
                           type: "name",
                           title: "Pincode",
                           content: "Kies deze verbindingsmethode om een apparaat handmatig toe te voegen door middel van het invullen van de WPS-pincode van het draadloze apparaat en druk op \"Verbinden\"."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Verbinden met hostnetwerk",
               CONTENT: [{
                           type: "name",
                           title: "Verbinden met 2,4 GHz<span class=\"hidden_5g\">/5GHz</span> netwerk ",
                           content: "In- of uitschakelen om de extender met een bestaand 2,4 GHz <span class=\"hidden_5g\">/ 5GHz</span> netwerk te verbinden."
                       } ,{                      
                           type: "name",
                           title: "Netwerkscanner",
                           content: "Klik op deze knop om naar alle beschikbare wifi-netwerken binnen bereik te laten scannen waarmee u de extender verbinding wilt laten maken. Nadat een netwerk is geselecteerd, worden de SSID en de beveiligingsinstellingen van dat netwerk automatisch ingevuld."
                       } ,{                      
                           type: "name",
                           title: "SSID 2,4 GHz<span class=\"hidden_5g\">/5GHz</span> host",
                           content: "Voer de SSID (hoofdlettergevoelig) in van het hostnetwerk waarmee de extender verbinden moet maken, of klik op <strong>Netwerkscanner</strong> en selecteer een wifi-netwerk."
                       } ,{                      
                           type: "name",
                           title: "Beveiliging 2,4 GHz<span class=\"hidden_5g\">/5GHz</span> host",
                           content: "Selecteer een van de beveiligingsopties die overeenkomt met die van het hostnetwerk."
                       } ,{                      
                           type: "name",
                           title: "Geen beveiliging",
                           content: "Met deze optie wordt de draadloze beveiliging uitgeschakeld."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Deze optie ondersteunt alleen TKIP (Temporal Key Integrity Protocol), wat een goed beveiligingsniveau biedt."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Deze optie ondersteunt AES-versleuteling, wat een hoger beveiligingsniveau biedt dan WPA-PSK, waardoor het wordt aanbevolen."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Deze optie ondersteunt meerdere implementaties van de WPA-standaard (Wi-Fi Protected Access), zoals WPA en WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Deze optie is de meest eenvoudige vorm van draadloze beveiliging die kan worden gebruikt als een clientapparaat alleen draadloos verbinding kan maken via WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Instellingen uitgebreid netwerk",
               CONTENT: [{
                           type: "name",
                           title: "2,4 GHz<span class=\"hidden_5g\">/5GHz</span> uitbreiding",
                           content: "De 2,4 GHz <span class=\"hidden_5g\">/ 5GHz</span> draadloze functie van de range extender in- of uitschakelen."
                       } ,{                      
                           type: "name",
                           title: "SSID 2,4 GHz<span class=\"hidden_5g\">/5GHz</span> uitbreiding",
                           content: "Gebruik de knop <strong>Host-SSID overnemen</strong> om automatisch de SSID van de hoofdrouter/AP over te nemen, of voer een nieuwe naam in (max. 32 tekens). Dit veld is hoofdlettergevoelig."
                       } ,{                      
                           type: "name",
                           title: "Host-SSID overnemen",
                           content: "Klik op deze knop om automatisch de SSID en de beveiligingsinstellingen van het hostnetwerk over te nemen en in de desbetreffende velden in te vullen."
                       } ,{                      
                           type: "name",
                           title: "SSID-broadcast verbergen",
                           content: "Selecteer dit keuzevakje als u de SSID van het uitgebreide 2,4 GHz<span class=\"hidden_5g\"> / 5GHz</span> netwerk niet in de wifi-netwerklijst wilt weergeven."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Toegangsbeheer",
               CONTENT: [{
                           type: "paragraph",
                           content: "Toegangsbeheer wordt gebruikt voor het toestaan of blokkeren van specifieke computers en andere apparaten om toegang krijgen tot uw uitgebreide netwerk. Wanneer een apparaat is geblokkeerd, kan deze geen verbinding maken met het uitgebreide netwerk."
                       } ,{                      
                           type: "paragraph",
                           content: "Om Toegangsbeheer te gebruiken, schakelt u deze functie in en geeft u een zwarte of witte lijst op. Als Toegangsbeheer is uitgeschakeld (Uit), kunnen alle apparaten inclusief die op de zwarte lijst verbinding maken."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Toegangsmodus",
               CONTENT: [{
                           type: "name",
                           title: "Zwarte lijst",
                           content: "Alleen de apparaten op de zwarte lijst hebben GEEN toegang tot uw netwerk."
                       } ,{                      
                           type: "name",
                           title: "Witte lijst",
                           content: "Alleen de apparaten op de witte lijst hebben toegang tot uw netwerk."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Online apparaten",
               CONTENT: [{
                           type: "name",
                           title: "Apparaatnaam",
                           content: "Geeft de naam van het verbonden apparaat weer."
                       } ,{                      
                           type: "name",
                           title: "IP-adres",
                           content: "Geeft het IP-adres van het verbonden apparaat weer."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Geeft het MAC-adres van het verbonden apparaat weer."
                       } ,{                      
                           type: "name",
                           title: "Verbindingstype",
                           content: "Toont het verbindingstype van het verbonden apparaat."
                       } ,{                      
                           type: "step",
                           title: "Een apparaat blokkeren",
                           content: "Klik in de tabel Online apparaten op het symbool Blokkeren in de kolom Bewerken bij het apparaat dat u wilt blokkeren."
                       } ,{                      
                           type: "step",
                           title: "Meerdere apparaten blokkeren",
                           content: "Selecteer in de tabel Online apparaten alle apparaten die u wilt blokkeren en klik vervolgens op Blokkeren boven de tabel. Het apparaat wordt automatisch toegevoegd aan de zwarte of witte lijst."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Apparaten op zwarte/witte lijst",
               CONTENT: [{
                           type: "step",
                           title: "Een apparaat toevoegen aan de zwarte of witte lijst",
       content: [ 
                "1. Klik op het pictogram Toevoegen.",
                "2. Voer de apparaatnaam in.",
                "3. Voer het MAC-adres van het apparaat in.",
                "4. Selecteer het type ingangstijd. Als u <b>Geen toegang op basis van tijdschema/Toegang op basis van tijdschema</b> selecteert, stel dan de tijd en dagen in.",
                "5. Klik op OK."]
} ,{                      
                           type: "step",
                           title: "Een apparaat op de zwarte/witte lijst wijzigen of ervan verwijderen",
                           content: "Klik in de tabel Zwarte lijst/Witte lijst op het pictogram Bewerken of Verwijderen achter het apparaat dat u wilt bewerken of verwijderen."
                       } ,{                      
                           type: "step",
                           title: "Meerdere apparaten verwijderen van de zwarte/witte lijst",
                           content: "Selecteer in de tabel Zwarte lijst/Witte lijst alle apparaten die u wilt verwijderen en klik vervolgens op Verwijderen boven de tabel."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernetaansluiting",
               CONTENT: [{
                           type: "name",
                           title: "Hostnetwerk voor de ethernetaansluiting",
                           content: "Selecteer de frequentie (2,4 GHz of 5 GHz) van het hostnetwerk die wordt gebruikt om verkeer van de bekabelde clients naar de draadloze clients te verzenden.<br/>Deze optie is alleen beschikbaar wanneer zowel het 2,4 GHz als het 5 GHz hostnetwerk ingeschakeld zijn."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Netwerkinstellingen",
               CONTENT: [{
                           type: "name",
                           title: "Automatisch een IP-adres laten toewijzen",
                           content: "Selecteer deze optie (aanbevolen) als u wilt dat uw draadloze clients dynamisch een IP-adres en gateway van de hoofdrouter/AP of van de range extender verkrijgen."
                       } ,{                      
                           type: "name",
                           title: "Gebruik het volgende IP-adres",
                           content: "Selecteer deze optie (aanbevolen) als u wilt dat uw range extender dynamisch een IP-adres en gateway van de hoofdrouter/AP verkrijgt. "
                       } ,{                      
                           type: "name",
                           title: "IP-adres",
                           content: "Voer het IP-adres in door punten gescheiden decimale notatie in (standaard 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Subnetmasker",
                           content: "Voer het subnetmasker dat de grootte van het netwerk bepaalt in door punten gescheiden decimale notatie in (standaard 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Standaard gateway",
                           content: "Voer gateway in, die in hetzelfde subnet als het IP-adres is, in door punten gescheiden decimale notatie. Dit is meestal het LAN-IP-adres van uw router."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Instellingen DHCP-server",
               CONTENT: [{
                           type: "paragraph",
                           content: "Standaard is de range extender ingesteld als DHCP-server (Dynamic Host Configuration Protocol) om een TCP/IP-configuratie uit de IP-adrespool te leveren voor alle clients die in het LAN verbonden zijn met de extender."
                       } ,{                      
                           type: "name",
                           title: "DHCP-server",
                           content: "Standaard is Auto geselecteerd; de DHCP-server wijst automatisch geldige IP-adressen toe aan clients. U kunt de DHCP-server Aan (ingeschakeld) of Uit (uitgeschakeld) zetten. Als Uit is geselecteerd, moet u een andere DHCP-server in uw LAN hebben; anders moet u het IP-adres voor elke client handmatig configureren."
                       } ,{                      
                           type: "name",
                           title: "IP-adrespool",
                           content: "Voer een reeks IP-adressen in die aan de clients kunnen worden geleased. Standaard is het begin IP-adres 192.168.0.100 en het eind IP-adres 192.168.0.199. "
                       } ,{                      
                           type: "name",
                           title: "Adreslease-tijd",
                           content: "Voer de tijdsduur in waarvoor een IP-adres aan de client wordt geleased tussen 1 en 2880 minuten. De standaardwaarde is 1 minuut."
                       } ,{                      
                           type: "name",
                           title: "Standaard gateway",
                           content: "<br/>Vul het LAN-IP-adres van de range extender in. Standaard is deze 192.168.0.254. (Optioneel)"
                       } ,{                      
                           type: "name",
                           title: "Primaire DNS",
                           content: "Voer het DNS-IP-adres in dat u van uw internetprovider heeft ontvangen. (Optioneel)"
                       } ,{                      
                           type: "name",
                           title: "Secundaire DNS",
                           content: "Voer deze parameters in zoals u deze heeft ontvangen van uw internetprovider. (Optioneel)"
                       } ,{                      
                           type: "note",
                           title: "Opmerking",
                           content: "Om de DHCP-server van de range extender te gebruiken, moeten alle clients in uw LAN zijn geconfigureerd om automatisch een IP-adres te verkrijgen."
                       } ,{                      
                           type: "paragraph",
                           content: "Klik op <strong>Opslaan</strong> om uw configuratie op te slaan."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Adresreservering",
               CONTENT: [{
                           type: "paragraph",
                           content: "U kunt handmatig een IP-adres reserveren voor een apparaat die verbonden is met de extender. Eenmaal gereserveerd, wordt het IP-adres alleen aan hetzelfde apparaat toegewezen door de DHCP-server."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Geeft het MAC-adres weer van het apparaaat met door de DHCP-server gereserveerd IP-adres."
                       } ,{                      
                           type: "name",
                           title: "Gereserveerd IP-adres",
                           content: "Geeft het gereserveerde IP-adres van de client weer."
                       } ,{                      
                           type: "name",
                           title: "Beschrijving",
                           content: "Geeft een beschrijving van het clientapparaat weer."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Geeft de huidige status (in- of uitgeschakeld) van het clientapparaat weer."
                       } ,{                      
                           type: "name",
                           title: "Wijzigen",
                           content: "Geeft opties weer om de overeenkomstige client aan te passen of te verwijderen. "
                       } ,{                      
                           type: "step",
                           title: "Een IP-adres reserveren",
       content: [ 
                "1. Klik op Toevoegen.",
                "2. Voer het MAC-adres in van uw gewenste client.",
                "3. Voer het IP-adres in dat u wilt reserveren voor de client.",
                "4. Voer een beschrijving van de client in.",
                "5. Selecteer Dit item inschakelen.",
                "6. Klik op OK."]
} ,{                      
                           type: "step",
                           title: "Een bestaande client wijzigen of verwijderen",
                           content: "Klik in de tabel klik op het pictogram Bewerken het prullenbakpictogram dat overeenkomt met het apparaat dat u wilt wijzigen of verwijderen."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP-clientlijst",
               CONTENT: [{
                           type: "paragraph",
                           content: "Geeft de volgende informatie weer van elke DHCP-client die met de range extender is verbonden."
                       } ,{                      
                           type: "name",
                           title: "Clientnummer",
                           content: "Geeft het aantal DHCP-clients weer."
                       } ,{                      
                           type: "name",
                           title: "Clientnaam",
                           content: "De naam van de DHCP-client."
                       } ,{                      
                           type: "name",
                           title: "MAC-adres",
                           content: "Het MAC-adres van de DHCP-client."
                       } ,{                      
                           type: "name",
                           title: "Toegewezen IP-adres",
                           content: "Het IP-adres dat aan de client is toegewezen door de DHCP-server."
                       } ,{                      
                           type: "name",
                           title: "Leasetijd",
                           content: "De tijdsduur waarvoor het IP-adres aan de DHCP-client is geleased."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Vernieuwen</strong> - Klik op deze knop om de lijst met DHCP-clients te vernieuwen."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Wifi-dekking",
               CONTENT: [{
						   type: "paragraph",
                           content: "Selecteer de wifi-dekkingsgraadvoor uw range extender."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Tijdinstellingen",
               CONTENT: [{
                           type: "name",
                           title: "Huidige tijd",
                           content: "Geeft de huidige systeemtijd weer."
                       },{
                           type: "name",
                           title: "Tijdzone",
                           content: "Selecteer uw tijdzone."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Zomertijd",
               CONTENT: [{
							type:"step",
                            title: "Zomertijd instellen:",
							content:[
                "1. Selecteer Zomertijd.",
                "2. Selecteer de juiste <b>begin</b> datum en -tijd van de zomertijd in uw tijdzone.",
                "2. Selecteer de juiste <b>eind</b> datum en -tijd van de zomertijd in uw tijdzone.",
                "4. Klik op Opslaan."]
                       },{
						type:"name",
						title:"Huidige status",
						content:"Geeft aan of de huidige tijd zomertijd is of niet."
					   }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED-instellingen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Met de LED-regeling kunt u de LED-lampjes op de range extender Aan of Uit te zetten volgens een bepaald tijdschema."
                       } ,{                      
                           type: "name",
                           title: "Nachtmodus",
                           content: "Geeft aan of de Nachtmodus Aan (ingeschakeld) of Uit (uitgeschakeld) is."
                       } ,{                      
                           type: "name",
                           title: "LED uit-tijd",
                           content: "Selecteer het tijdschema voor het uitschakelen van de LEDs."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"Uitschakelschema",
               CONTENT: [{
                           type: "paragraph",
                           content: "Schakel deze functie in om de extender uit te schakelen volgens het tijdschema om energie te sparen."
                       } ,{                      
                           type: "name",
                           title: "Uitschakelschema inschakelen",
                           content: "Selecteer deze optie om het uitschakelschema in te schakelen."
                       } ,{                      
                           type: "name",
                           title: "Uitschakeltijd",
                           content: "Selecteer de tijdsperiode waarin de extender automatisch moet worden uitgeschakeld."
                       } ,{                      
                           type: "name",
                           title: "Dag(en)",
                           content: "Selecteer de dag(en) waarop de extender moet worden uitgeschakeld."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Firmware-upgrade",
               CONTENT: [{
                           type: "name",
                           title: "Firmwareversie",
                           content: "Geeft de huidige firmwareversie weer."
                       } ,{                      
                           type: "name",
                           title: "Hardwareversie",
                           content: "Geeft de huidige hardwareversie weer."
                       } ,{                      
                           type: "step",
                           title: "BELANGRIJK: Houd rekening met het volgende om upgradefouten te voorkomen:",
       content: [ 
                "1. Het firmware-upgradebestand moet overeenstemmen met de hardwareversie van uw extender.",
                "2. Het is belangrijk om de extender ingeschakeld te houden gedurende het gehele upgradeproces. Bij onderbreking kan er schade aan uw extender ontstaan."]
} ,{                      
                           type: "step",
                           title: "Upgraden van de firmware van de extender:",
       content: [ 
                "1. Download het nieuwste firmware-upgradebestand van <a class=\"link\" href=\"http://nl.tp-link.com/Support/\" target=\"_blank\">TP-Link Ondersteuning</a> naar uw computer.",
                "2. Klik op <strong>Bladeren</strong> om het bestand te selecteren en te downloaden.",
                "3. Klik op <strong>Bijwerken</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Het bijwerken duurt enkele minuten, waarna de range extender automatisch opnieuw wordt gestart."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Backup",
               CONTENT: [{
                           type: "paragraph",
                           content: "Het wordt ten zeerste aanbevolen een backup te maken van uw huidige configuratie, voor het geval het systeem naar een vorige toestand moet worden teruggebracht of de fabrieksinstellingen moeten worden hersteld."
                       } ,{                      
                           type: "paragraph",
                           content: "Klik op Backup om uw huidige configuraties op te slaan op uw computer als config.bin bestand. Bewaar dit bestand op een veilige plaats, zodat u het indien nodig kunt gebruiken. "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Herstellen",
               CONTENT: [{
                           type: "step",
                           title: "Uw opgeslagen instellingen herstellen via een backupbestand:",
       content: [ 
                "1. Klik op Bladeren om naar het backupbestand te gaan.",
                "2. Selecteer het backupbestand.",
                "3. Klik op Herstellen.",
                "4. Klik op <strong>Ja</strong> om het herstellen te bevestigen.",
                "Het herstellen kan enkele minuten duren, waarna de range extender automatisch opnieuw wordt gestart."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Fabrieksinstellingen herstellen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Klik op Fabrieksinstellingen herstellen om de fabrieksinstellingen van de range extender te herstellen."
                       } ,{                      
                           type: "note",
                            title: "Opmerking",
                            content: [
                              "1. Fabrieksreset zal alle instellingen wissen die u heeft toegepast. Om opnieuw in te loggen in de webconfigutatie gebruik \"admin\"  voor zowel uw gebruikersnaam als wachtwoord.",
                              "1. Fabrieksinstellingen zal alle vorige instellingen van de extender wissen. Gelieve een wachtwoord creëeren voor toekomstige login pogingen.",
                              "2. Gelieve  de range extender niet uitschakelen  tijdens het back-up- of herstelproces."
                            ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Beheerdersaccount",
               CONTENT: [{
                           type: "paragraph",
                           content: "Op deze pagina kunt u uw standaard gebruikersnaam en/of wachtwoord wijzigen."
                       } ,{                      
                           type: "paragraph",
                           content: "Op deze pagina kunt u uw login wachtwoord wijzigen."
                       } ,{                      
                           type: "name",
                           title: "Oude gebruikersnaam",
                           content: "Voer uw huidige gebruikersnaam in."
                       } ,{                      
                           type: "name",
                           title: "Oud wachtwoord",
                           content: "Voer uw huidige wachtwoord in."
                       } ,{                      
                           type: "name",
                           title: "Nieuwe gebruikersnaam ",
                           content: "Voer een nieuwe gebruikersnaam in."
                       } ,{                      
                           type: "name",
                           title: "Nieuw wachtwoord",
                           content: "Voer een nieuw wachtwoord in."
                       } ,{                      
                           type: "name",
                           title: "Wachtwoord bevestigen",
                           content: "Voer het nieuwe wachtwoord nogmaals in."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Systeemlog",
               CONTENT: [{
                           type: "paragraph",
                           content: "De pagina Systeemlog toont een lijst van recente activiteiten (gebeurtenissen) van de extender. U kunt aangeven welk type logs en/of logniveaus u wilt weergeven."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Selecteer het logtype dat u wilt bekijken."
                       } ,{                      
                           type: "name",
                           title: "Niveau",
                           content: "Selecteer het logniveau dat u wilt bekijken."
                       } ,{                      
                           type: "name",
                           title: "Vernieuwen",
                           content: "Klik op deze knop om het systeemlog te vernieuwen."
                       } ,{                      
                           type: "name",
                           title: "Alles verwijderen",
                           content: "Klik op deze knop om alle logbestanden permanent te verwijderen."
                       },{                      
                           type: "name",
                           title: "Log opslaan",
                           content: "Klik op deze knop om het systeemlog als .txt bestand op te slaan."
                       }]
},
    });
})(jQuery);
