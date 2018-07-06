(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Nastavení regionu",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Vyberte oblast z rolovací nabídky. Pokud zde není uvedena Vaše země či oblast, můžete být ve Vaší lokalitě při použití bezdrátového rozhlasu omezen."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Stav",
               CONTENT: [{
                           type: "paragraph",
                           content: "Základní stránka pro Stav zobrazuje informace o aktuálním stavu s mapou sítě. Pro získání podrobných informací klikněte na jednotlivé ikonky."
                       } ,{                      
                           type: "title",
                            title: "Opakovač signálu"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje rozšířené informace o 2,4GH<span class=\"hidden_5g\">/5GHz</span> síti."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Rozšířený název sítě (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Aktuálně využitý kanál bezdrátové sítě."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa opakovače signálu."
                       } ,{                      
                           type: "name",
                           title: "DHCP Server",
                           content: "Zobrazuje stav serveru DHCP."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "IP adresa, která je přidělena klientovi serveru DHCP."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Typ IP adresy přidělené DHCP serverem."
                       } ,{                      
                           type: "title",
                            title: "2,4GHz<span class=\"hidden_5g\">/5GHz</span> Hostitelská síť"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje následující informace o 2,4GHz<span class=\"hidden_5g\">/5GHz</span> hostitelské síti."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "SSID hostitelské sítě."
                       } ,{                      
                           type: "name",
                           title: "Signál",
                           content: "Síla signálu hostitelské sítě."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa hostitelské sítě."
                       } ,{                      
                           type: "title",
                            title: "Klienti"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje aktuální zařízení klienta připojeného/ných k opakovači 2,4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Rozšíření 2,4GHz<span class=\"hidden_5g\">/5GHz</span> sítě připojeného zařízení klienta."
                       } ,{                      
                           type: "name",
                           title: "Název zařízení",
                           content: "Jméno připojeného zařízení klienta."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa připojeného zařízení klienta."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Stav",
               CONTENT: [{
                           type: "paragraph",
                           content: "Stavová stránka zobrazuje aktuálním informacemi o stavu sítě. Více podrobností získáte kliknutím na každou ikonu."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Stav internetu",
                           content: "Zobrazuje aktuální stav připojení k internetu."
                       } ,{                      
                           type: "title",
                            title: "Přístupový bod"
                       } ,{                      
                           type: "name",
                           title: "DHCP Server",
                           content: "Zobrazuje stav serveru DHCP."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu, která je přidělena přístupovému bodu DHCP serverem."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Zobrazuje způsob získání IP adresy."
                       } ,{                      
                           type: "title",
                            title: "Klient bezdrátové sítě"
                       } ,{                      
                           type: "name",
                           title: "Jméno",
                           content: "Zobrazuje název klientských zařízení."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu, která je přidělena klientským zařízením."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje fyzickou MAC adresu zařízení klienta."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Nastavení  ",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Vyberte oblast z rolovací nabídky. Pokud zde není uvedena Vaše země či oblast, může být ve Vaší lokalitě použití bezdrátového vysílání omezeno."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Bezdrátová síť 2,4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Povolit bezdrátovou síť",
                           content: "Zaškrtnutím tohoto políčka povolíte vysílání bezdrátové sítě na frekvenci 2,4 GHz"
                       } ,{                      
                           type: "name",
                           title: "Jméno sítě (SSID)",
                           content: "Můžete ponechat výchozí název sítě (SSID) nebo zadejte nový název (až 32 znaků). Tento údaj rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zaškrtněte toto políčko, pokud chcete skrýt název 2,4GHz sítě (SSID) v seznamu bezdrátových sítí."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Vyberte jednu z následujících možností zabezpečení:",
       children: [{                      
                           type: "name",
                           title: "Nezabezpečené",
                           content: "Vyberte tuto možnost, pokud chcete vypnout zabezpečení bezdrátové sítě. Velmi doporučujeme aktivovat zabezpečení bezdrátové sítě pro ochranu bezdrátové sítě před neoprávněným přístupem."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Osobní",
                           content: "Vyberte tuto možnost a aktivujte metodu standardního ověřování na základě Pre-Shared Key (Předsdílené tajemství) (PSK), rovněž nazývané heslová fráze. Tato možnost je doporučená. Pokud je vybrána, nakonfigurujte následující.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access - chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
                       }]
} ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Vyberte typ šifrování zabezpečení: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro šifrování TKIP i AES). Nedoporučuje se používat šifrování TKIP, pokud opakovač signálu pracuje v režimu 802.11n, protože TKIP nepodporuje specifikace 802.11n. Pokud je vybrána TKIP, bude funkce WPS zakázána."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Vyberte tuto možnost aktivace základní metody ověřování, pokud se některé z vašich klientských zařízení může připojit do bezdrátové sítě pouze přes WEP (Wired Equivalent Privacy - soukromí ekvivalentní drátovým sítím).",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ ověřování pro vaši bezdrátovou síť. Výchozí nastavení je Auto, které automaticky volí mezi možností Otevřený systém nebo Sdílený klíč na základě schopnosti a žádosti o přístup bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "Formát klíče WEP",
                           content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klíče",
                           content: "Vyberte délku klíče WEP.",
       children: [{                      
                           type: "name",
                           title: "64bitový",
                           content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
                       } ,{                      
                           type: "name",
                           title: "128bitový",
                           content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota klíče",
                           content: "Zadejte WEP klíč do příslušného pole."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Režim",
                           content: "Vyberte režim smíšeného přenosu."
                       } ,{                      
                           type: "name",
                           title: "Šířka kanálu",
                           content: "Vyberte šířku kanálu (pásma) pro 2,4GHz bezdrátovou síť."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte provozní kanál pro 2,4GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
                       } /*,{                      
                           type: "name",
                           title: "Přenosový výkon",
                           content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknutím na Uložit uložíte veškerá nastavení."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Bezdrátová síť 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Povolit bezdrátovou síť",
                           content: "Zaškrtnutím tohoto políčka povolíte vysílání bezdrátové sítě na frekvenci 5 GHz"
                       } ,{                      
                           type: "name",
                           title: "Jméno sítě (SSID)",
                           content: "Můžete ponechat výchozí název sítě (SSID) nebo zadejte nový název (až 32 znaků). Tento údaj rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zaškrtněte toto políčko, pokud chcete skrýt název 5GHz sítě (SSID) v seznamu bezdrátových sítí."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Vyberte jednu z následujících možností zabezpečení:",
       children: [{                      
                           type: "name",
                           title: "Žádné zabezpečení",
                           content: "Vyberte tuto možnost, pokud chcete vypnout zabezpečení bezdrátové sítě. Velmi doporučujeme aktivovat zabezpečení bezdrátové sítě pro ochranu bezdrátové sítě před neoprávněným přístupem."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Osobní",
                           content: "Vyberte tuto možnost a aktivujte metodu standardního ověřování na základě Pre-Shared Key (Předsdílené tajemství) (PSK), rovněž nazývané heslová fráze. Tato možnost je doporučená. Pokud je vybrána, nakonfigurujte následující.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Vyberte verzi zabezpečení pro vaši bezdrátovou síť.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Tato možnost podporuje vícenásobné implementaci standardu WPA (Wi-Fi Protected Access-chráněný přístup k Wi-Fi), jako je například WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Tato možnost podporuje pouze šifrování TKIP, jež poskytuje dobrou úroveň zabezpečení."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Tato možnost podporuje šifrování AES, jež poskytuje lepší úroveň zabezpečení než WPA-PSK a je doporučeno."
                       }]
} ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Vyberte typ šifrování zabezpečení: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), nebo Auto (pro šifrování TKIP i AES). Nedoporučuje se používat šifrování TKIP, pokud opakovač signálu pracuje v režimu 802.11n, protože TKIP nepodporuje specifikace 802.11n. Pokud je vybrána TKIP, bude funkce WPS zakázána."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Vyberte tuto možnost aktivace základní metody ověřování, pokud se některé z vašich klientských zařízení může připojit do bezdrátové sítě pouze přes WEP (Wired Equivalent Privacy - soukromí ekvivalentní drátovým sítím).",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ ověřování pro vaši bezdrátovou síť. Výchozí nastavení je Auto, které automaticky volí mezi možností Otevřený systém nebo Sdílený klíč na základě schopnosti a žádosti o přístup bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "Formát klíče WEP",
                           content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klíče",
                           content: "Vyberte délku klíče WEP.",
       children: [{                      
                           type: "name",
                           title: "64bitový",
                           content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
                       } ,{                      
                           type: "name",
                           title: "128bitový",
                           content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota klíče",
                           content: "Zadejte WEP klíč do příslušného pole."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Režim",
                           content: "Vyberte režim smíšeného přenosu."
                       } ,{                      
                           type: "name",
                           title: "Šířka kanálu",
                           content: "Vyberte šířku kanálu (pásma) pro 5GHz bezdrátovou síť."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte provozní kanál pro 5GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
                       } /*,{                      
                           type: "name",
                           title: "Přenosový výkon",
                           content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknutím na Uložit uložíte veškerá nastavení."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Povolit WPS",
                           content: "Další zařízení lze připojit k tomuto přístupovému bodu (AP) pomocí WPS s PINem AP."
                       }]
},
       WPS :{ 
               TITLE:"PIN kód",
               CONTENT: [{
                           type: "name",
                           title: "Spustit PIN",
                           content: "Pokud chcete bezdrátová zařízení připojovat pomocí PIN (Personal Identification Number) přepněte na Zapnuto."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Zobrazuje PIN přístupového bodu. Výchozí PIN lze nalézt na štítku AP. Klepnutím na tlačítko \"Vytvořit\" vytvoříte nový náhodný kód PIN nebo klepněte na tlačítko \"Výchozí\" pro obnovení aktuálního PINu na tovární PIN."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Průvodce WPS",
               CONTENT: [{
                           type: "name",
                           title: "Stisknout tlačítko WPS (doporučeno)",
                           content: "Vyberte tento způsob připojení pomocí WPS tlačítka pro snadné připojení libovolného WPS zařízení k Vaší bezdrátové síti pomocí tlačítka WPS nebo virtuálně pomocí tlačítka \"Připojit\"."
                       } ,{                      
                           type: "name",
                           title: "PIN kód",
                           content: "Vyberte tento způsob připojení pomocí ručně zadáného WPS PINu bezdrátového zařízení do patřičného pole a klepnutí na tlačítko \"Připojit\"."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Připojit k hostitelské síti",
               CONTENT: [{
                           type: "name",
                           title: "Připojit k síti 2,4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Povolit nebo zakázat připojení opakovače signálu ke stávající 2,4GHz<span class=\"hidden_5g\">/5GHz</span> síti."
                       } ,{                      
                           type: "name",
                           title: "Skenování bezdrátových sítí",
                           content: "Klikněte na toto tlačítko k vyhledání a zobrazení všech dostupných sítí Wi-Fi, které jsou pro připojení Vašeho opakovače signálu v dosahu. Jakmile je síť zvolená, SSID a zabezpečení této sítě se automaticky doplní."
                       } ,{                      
                           type: "name",
                           title: "Hostitelské 2,4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "Zadejte název (SSID) hostitelské sítě (rozlišuje velká a malá písmena), ke které bude opakovač signálu připojen nebo klikněte na <strong> Skenování bezdrátových sítí </strong> a vyberte síť Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení 2,4GHz<span class=\"hidden_5g\">/5GHz</span> hostitele",
                           content: "Vyberte jednu z široké škály možností pro zabezpečení Vaši hostitelské sítě."
                       } ,{                      
                           type: "name",
                           title: "Nezabezpečené",
                           content: "Tato možnost zakáže zabezpečení bezdrátové sítě."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Tato možnost podporuje pouze TKIP (Temporal Key Integrity Protocol), který zajišťuje dobrou úroveň bezpečnosti."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Tato možnost podporuje AES (Advanced Encryption) šifrování, které poskytuje vyšší úroveň zabezpečení než WPA-PSK. Doporučuje se."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Tato možnost podporuje mnohonásobnou realizaci WPA (Wi-Fi Protected Access) úrovně jako je WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Tato možnost je nejzákladnější forma zabezpečení bezdrátové sítě, která může být použita v případě přistupování k Vašemu klientskému zařízení pouze pomocí WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Nastavení rozšířené sítě",
               CONTENT: [{
                           type: "name",
                           title: "Rozšířená síť 2,4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Povolit nebo zakázat 2,4GHz<span class=\"hidden_5g\">/5GHz</span> bezdrátovou funkci směrovače signálu."
                       } ,{                      
                           type: "name",
                           title: "Rozšířená síť 2,4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "Buď použijte tlačítko <strong>Zkopírovat hostitelské SSID</strong> k automatickému kopírování / AP SSID hlavního směrovače, nebo zadejte nový název (až 32 znaků). Toto pole rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Kopírovat hostitelské SSID",
                           content: "Klikněte na toto tlačítko pro zkopírování a automatické naplnění SSID a bezpečnostního nastavení hostitelské sítě do příslušných políček."
                       } ,{                      
                           type: "name",
                           title: "Skrýt SSID",
                           content: "Zaškrtněte toto políčko, chcete-li skrýt rozšířené 2,4GHz<span class=\"hidden_5g\">/5GHz</span> SSID ze seznamu Wi-Fi sítí."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Řízení přístupu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Řízení přístupu se používá pro povolení nebo blokování konkrétních počítačů a dalších zařízení v přístupu k rozšířené síti. Když je zařízení blokováno, pak není schopno se připojit k rozšířené síti."
                       } ,{                      
                           type: "paragraph",
                           content: "Chcete-li použít funkci Řízení přístupu, povolte tuto funkci a určete seznam blokovaných/povolených zařízení. Pokud je funkce Řízení přístupu deaktivována (vypnuta), všechna zařízení, včetně zařízení na blokované listině, mají povoleno se připojit."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Režim přístupu",
               CONTENT: [{
                           type: "name",
                           title: "Seznam blokovaných adres",
                           content: "Přístup do vaší sítě bude odepřen pouze zařízením na seznamu blokovaných zařízení."
                       } ,{                      
                           type: "name",
                           title: "Seznam povolených adres",
                           content: "Přístup do vaší sítě bude povolen pouze zařízením na seznamu povolených zařízení."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Online zařízení",
               CONTENT: [{
                           type: "name",
                           title: "Název zařízení",
                           content: "Zobrazuje název připojeného zařízení."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu připojeného zařízení."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu připojeného zařízení."
                       } ,{                      
                           type: "name",
                           title: "Typ připojení",
                           content: "Zobrazuje typ připojení připojeného zařízení."
                       } ,{                      
                           type: "step",
                           title: "Blokování zařízení",
                           content: "V tabulce \"Online zařízení\" ve sloupci Upravit klikněte na ikonu Blokovat u zařízení, které chcete blokovat."
                       } ,{                      
                           type: "step",
                           title: "Blokování více zařízení",
                           content: "V tabulce \"Online zařízení\" vyberte všechna zařízení, která chcete blokovat a nad tabulkou klikněte na Blokovat. Zařízení bude automaticky přidáno na seznam blokovaných zařízení."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Zařízení v seznamu povolených/zakázaných",
               CONTENT: [{
                           type: "step",
                           title: "Přidání zařízení na seznam povolených nebo zakázaných zařízení",
       content: [ 
                "1. Klikněte na ikonu Přidat.",
                "2. Zadejte  Název zařízení.",
                "3. Zadejte MAC adresu zařízení.",
                "4. Vyberte typ Efektivního času. Zvolíte-li hodnotu <b>Nelze přistupovat v závislosti na časovém harmonogramu/Přístup založený na časovém harmonogramu</b>, nastavte čas a dny.",
                "5. Klikněte na OK."]
} ,{                      
                           type: "step",
                           title: "Úprava nebo odstranění zařízení v seznamu blokovaných/povolených zařízení",
                           content: "V tabulce blokovaných/povolených zařízení klikněte na ikonu Upravit nebo na ikonu Koše u zařízení, které chcete upravit nebo odstranit."
                       } ,{                      
                           type: "step",
                           title: "Odstranění více zařízení ze seznamu blokovaných/povolených zařízení",
                           content: "V tabulce se seznamem blokovaných/povolených zařízení vyberte všechna zařízení, která chcete odstranit a nad seznamem klikněte na Odstranit."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Eternetový port",
               CONTENT: [{
                           type: "name",
                           title: "Hostitelská síť pro Ethernetový port",
                           content: "Vyberte bezdrátové pásmo (2,4GHz nebo 5GHz) hostitelské sítě, která se používá pro odesílání provozu z drátových klientů na bezdrátové klienty. <br/> Tato možnost je k dispozici pouze tehdy, když jsou zapnuty obě 2,4GHz a 5GHz sítě hostitele."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"IP adresa opakovače",
               CONTENT: [{
                           type: "name",
                           title: "Získat IP adresu automaticky",
                           content: "Vyberte tuto možnost (doporučeno), pokud chcete, aby Váš opakovač získal dynamicky IP adresu a bránu z hostitelské sítě."
                       } ,{                      
                           type: "name",
                           title: "Použití následující IP adresu",
                           content: "Vyberte tuto možnost, pokud chcete, ručne nastavit adresu IP adresu a bránu pro váš opakovač."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zadejte IP adresu v desítkovém formátu odděleném tečkami (192.168.0.254 ve výchozím nastavení)."
                       } ,{                      
                           type: "name",
                           title: "Maska podsítě",
                           content: "Zadejte masku podsítě v desítkovém formátu odděleném tečkami. Formát určuje velikost sítě (255.255.255.0 ve výchozím nastavení)."
                       } ,{                      
                           type: "name",
                           title: "Výchozí brána",
                           content: "Zadejte bránu, která je ve stejné podsíti jako IP adresa v desítkovém formátu odděleném tečkami. To je obvykle LAN IP adresa vašeho směrovače."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Nastavení DHCP serveru",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ve výchozím nastavení je opakovač signálu nastaven jako DHCP (Dynamic Host Configuration Protocol) server, aby konfiguroval TCP / IP pro všechny klienty, kteří jsou připojení k opakovači v LAN síti z rozsahu IP adres."
                       } ,{                      
                           type: "name",
                           title: "DHCP Server",
                           content: "Ve výchozím nastavení je vybrána možnost Auto;DHCP server automaticky přiřadí platnou IP adresu klientovi. Můžete DHCP server přepínat On (zapnout) nebo Off (vypnout). Pokud je vybrána možnost Vypnuto, musíte mít jiný server DHCP v síti LAN, jinak budete muset nastavit IP adresu pro každého klienta ručně."
                       } ,{                      
                           type: "name",
                           title: "Rozsah IP adres",
                           content: "Zadejte rozsah IP adres, které mohou být pronajaty klientům. Ve výchozím nastavení má počáteční IP adresa hodnutu 192.168.0.100 a koncová IP adresa pak hodnotu 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Čas zapůjčení adresy",
                           content: "Zadejte dobu trvání pronájmu IP adresy klientovi. Zvolte dobu mezi 1 a 2880 minutami. Výchozí hodnota je 1 minuta."
                       } ,{                      
                           type: "name",
                           title: "Přednastavená brána",
                           content: "<br/> Zadejte LAN IP adresu opakovače signálu. Výchozí nastavení je 192.168.0.254. (Volitelné)"
                       } ,{                      
                           type: "name",
                           title: "Upřednostňovaný DNS",
                           content: "Zadejte IP adresy DNS serverů od Vašeho ISP. (Volitelné)"
                       } ,{                      
                           type: "name",
                           title: "Náhrádní DNS",
                           content: "Zadejte tyto parametry dle údajů od Vašeho ISP. (Volitelné)"
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Chcete-li použít DHCP server opakovače signálu, pak je nutné, pro automatické získání IP adresy, nakonfigurovat všechny klienty ve vaší síti LAN."
                       } ,{                      
                           type: "paragraph",
                           content: "Pro uložení konfigurace klikněte na tlačítko <strong>Uložit</strong>."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Rezervace adresy",
               CONTENT: [{
                           type: "paragraph",
                           content: "Můžete ručně rezervovat IP adresu klienta, který je připojen k opakovači signálu. Klientovi bude přidělována stále stejná IP adresa."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu klienta DHCP serveru s rezervovanou IP adresou."
                       } ,{                      
                           type: "name",
                           title: "Zarezervovaná IP Adresa",
                           content: "Zobrazuje rezervovanou IP adresu klienta."
                       } ,{                      
                           type: "name",
                           title: "Popis",
                           content: "Zobrazuje popis klientského zařízení."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje aktuální stav (povoleno nebo zakázáno) klientského zařízení."
                       } ,{                      
                           type: "name",
                           title: "Upravit",
                           content: "Zobrazí se možnosti Upravit nebo Odstranit odpovídajícího klienta."
                       } ,{                      
                           type: "step",
                           title: "Chcete-li rezervovat IP adresu",
       content: [ 
                "1. Klikněte na tlačítko Přidat.",
                "2. Zadejte MAC adresu požadovaného klienta.",
                "3. Zadejte adresu IP, kterou chcete vyhradit pro klienta.",
                "4. Zadejte popis pro klienta.",
                "5. Vyberte možnost Povolit tuto položku.",
                "6. Klepněte na tlačítko OK."]
} ,{                      
                           type: "step",
                           title: "Chcete-li upravit nebo odstranit existujícího klienta",
                           content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše, který odpovídá klientovi, kterého chcete upravit nebo odstranit."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP seznam klienta",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje následující informace každého klienta DHCP, který je připojen k opakovači signálu."
                       } ,{                      
                           type: "name",
                           title: "Číslo klienta",
                           content: "Zobrazuje počet připojených klientů DHCP serveru."
                       } ,{                      
                           type: "name",
                           title: "Klientské jméno",
                           content: "Zobrazuje jméno přiřazeného klienta DHCP."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu."
                       } ,{                      
                           type: "name",
                           title: "Přiřazená IP adresa",
                           content: "Zobrazuje přidělenou IP adresu klienta DHCP serverem."
                       } ,{                      
                           type: "name",
                           title: "Doba zapůjčení",
                           content: "Zobrazuje zbývající čas zapůjčení IP adresy klientovi."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong> Obnovit </strong> - Kliknutím na toto tlačítko aktualizujete seznam klientů DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Pokrytí Wi-Fi",
               CONTENT: [{
						   type: "paragraph",
                           content: "Vyberte úroveň pokrytí pro víš opakovač."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Nastavení času",
               CONTENT: [{
                           type: "name",
                           title: "Aktuální čas",
                           content: "Zobrazit aktuální časové pásmo."
                       },{
                           type: "name",
                           title: "Časová zóna",
                           content: "Vyberte vaše časové pásmo."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Letní čas",
               CONTENT: [{
							type: "step",
                            title: "Jak nastavi letní čas:",
							content:[
                "1. Vyberte letní čas",
                "2. Vyberte správné datum <b>Začátku</b> a čas, kdy letní čas začíná ve vašem místním časovém pásmu.",
                "3. Vyberte správné datum <b>Konce</b> a čas, kdy letní čas končí ve vašem místním časovém pásmu.",
                "4. Klikněte na tlačítko Uložit."]},
				{
					type:"name",
					title:"Aktuální stav",
					content:"Označuje, zda aktuální čas je součástí letního času nebo ne."
				}]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Nastavení LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nastavení LED Vám umožňuje zapnout nebo vypnout LED Vašeho opakovače signálu podle konkrétního časového harmonogramu."
                       } ,{                      
                           type: "name",
                           title: "Noční režim",
                           content: "Označuje, zda-li je noční režim On (zapnut) nebo Off (vypnut)."
                       } ,{                      
                           type: "name",
                           title: "Doba vypnutí LED",
                           content: "Zvolte časový harmonogram pro vypnutí LED."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"Harmonogram napájení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Povolením této funkce vypnete opakovač dle časového harmonogramu pro účely úspory energie."
                       } ,{                      
                           type: "name",
                           title: "Povolit harmonogram napájení",
                           content: "Výběrem této volby povoláte Harmonogram napájení."
                       } ,{                      
                           type: "name",
                           title: "Čas vypnutí",
                           content: "Vyberte časové období, kdy se má opakovač automaticky vypnout."
                       } ,{                      
                           type: "name",
                           title: "Den/Dny",
                           content: "Vyberte den/dny, kdy vypnout opakovač."
                       }]               
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Aktualizace firmwaru",
               CONTENT: [{
                           type: "name",
                           title: "Verze firmwaru",
                           content: "Zobrazuje aktuální verzi firmwaru."
                       } ,{                      
                           type: "name",
                           title: "Verze hardwaru",
                           content: "Zobrazuje aktuální verzi hardwaru."
                       } ,{                      
                           type: "step",
                           title: "Důležité: Chcete-li zabránit selhání upgradu, berte prosím na vědomí následující:",
       content: [ 
                "1. Soubor s firmwarem musí odpovídat hardwarové verzi opakovače signálu. ",
                "2. Výpadek napájení během procesu upgradu firmwaru může poškodit opakovač signálu. "]
} ,{                      
                           type: "step",
                           title: "Postup aktualizace firmwaru:",
       content: [ 
                "1. Stáhněte si do počítače nejnovější verzi firmwaru z <a class=\"link\" href=\"http://cz.tp-link.com/Support/\" target=\"_blank\"> Podpory TP -LINK </a>.",
                "2. Klepněte na tlačítko <strong> Procházet </strong>  a vyberte stažený soubor.",
                "3. Klepněte na tlačítko <strong> Aktualizovat </strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Aktualizace trvá několik minut. Po dokončení aktualizace se opakovač signálu sám automaticky restartuje."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Záloha",
               CONTENT: [{
                           type: "paragraph",
                           content: "Důrazně se doporučuje zálohovat aktuální konfiguraci, pro případ, že by byla nutná k obnovení systému do předchozího stavu nebo z továrního nastavení."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknutím na tlačítko Zálohovat uložte aktuální konfiguraci jako config.bin soubor v počítači. Ujistěte se, že jste jej uložil na bezpečném místě, ze kterého může být obnoven v případě potřeby."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Obnova",
               CONTENT: [{
                           type: "step",
                           title: "Chcete-li obnovit své uložené nastavení ze záložního souboru:",
       content: [ 
                "1. Pro vyhledání záložního souboru klikněte na tlačítko Procházet.",
                "2. Vyberte záložní soubor.",
                "3. Klikněte na tlačítko Obnovit.",
                "4. Pro obnovu systému klikněte na tlačítko <strong> Ano </strong>.",
                "Proces obnovení může trvat několik minut. Po dokončení se opakovač signálu sám automaticky restartuje."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Výchozí tovární nastavení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kliknutím na tlačítko Tovární obnova resetujete Váš opakovač signálu do továrního nastavení."
                       } ,{                      
                           type: "note",
                            title: "Poznámka",
                            content: [
                              "1. Obnovením do továrního nastavení bude vymazána veškerá konfigurace opakovače signálu. Pro přihlášení na stránky správy opakovače signálu použijte výchozí jméno a heslo: admin",
                              "1. Obnova do továrního nastavení vymaže všechny předchozí nastavení extenderu. Prosím vytvořte si heslo pro budoucí příhlášení.",
                              "2. Prosím NEVYPÍNEJTE opakovač signálu během procesu zálohování nebo obnovení."
                            ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Účet administrátora",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato stránka Vám umožňuje změnit výchozí přihlašovací jméno a/nebo heslo."
                       } ,{                      
                           type: "paragraph",
                           content: "Na této stránce můžete změnit své přihlašovací heslo."
                       } ,{                      
                           type: "name",
                           title: "Staré uživatelské jméno",
                           content: "Zadejte aktuální uživatelské jméno."
                       } ,{                      
                           type: "name",
                           title: "Staré heslo ",
                           content: "Zadejte své aktuální heslo."
                       } ,{                      
                           type: "name",
                           title: "Nové uživatelské jméno",
                           content: "Zadejte nové uživatelské jméno."
                       } ,{                      
                           type: "name",
                           title: "Nové heslo ",
                           content: "Zadejte nové heslo."
                       } ,{                      
                           type: "name",
                           title: "Potvrďte heslo",
                           content: "Znovu zadejte vaše nové heslo."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Systémový protokol",
               CONTENT: [{
                           type: "paragraph",
                           content: "Stránka Systémový protokol zobrazuje seznam nejnovějších aktivit (akcí) opakovače signálu. Můžete definovat jaké typy logů a/nebo jakou úroveň logů chcete zobrazit."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ protokolu, který chcete zobrazit."
                       } ,{                      
                           type: "name",
                           title: "Úroveň",
                           content: "Vyberte úroveň záznamu, který chcete zobrazit."
                       } ,{                      
                           type: "name",
                           title: "Obnovit",
                           content: "Klikněte na toto tlačítko pro aktualizaci systémového protokolu."
                       } ,{                      
                           type: "name",
                           title: "Smazat vše",
                           content: "Klikněte na toto tlačítko pro trvale odstranění všech záznamů."
                       },{                      
                           type: "name",
                           title: "Uložit záznam",
                           content: "Pro uložení systémového záznamu jako souboru TXT klikněte na toto tlačítko."
                       }]
},
     
    });
})(jQuery);
