(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Nastavenie regiónu",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Vyberte oblasť z rozbaľovacej ponuky. Ak ponuka neobsahuje vašu krajinu či oblasť, používanie bezdrôtových sietí môže vo vašej lokalite podliehať obmedzeniam."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Stav",
               CONTENT: [{
                           type: "paragraph",
                           content: "Základná stavová stránka zobrazuje panel s aktuálnym stavom a informáciami o sieti. Ďalšie informácie získate kliknutím na jednotlivé ikony."
                       } ,{                      
                           type: "title",
                            title: "Opakovač signálu"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje rozšírené informácie o 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> sieti."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Názov rozšírenej siete (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Aktuálne používaný kanál bezdrôtovej siete."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa opakovača signálu."
                       } ,{                      
                           type: "name",
                           title: "DHCP Server",
                           content: "Zobrazuje stav DHCP servera."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "IP adresa pridelená klientovi DHCP serverom."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Typ IP adresy pridelenej DHCP serverom."
                       } ,{                      
                           type: "title",
                            title: "2,4 GHz<span class=\"hidden_5g\">/ 5 GHz</span> hostiteľská sieť"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje nasledujúce informácie o 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> hostiteľskej sieti."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "SSID hostiteľskej siete."
                       } ,{                      
                           type: "name",
                           title: "Signál",
                           content: "Sila signálu hostiteľskej siete."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa hostiteľskej siete."
                       } ,{                      
                           type: "title",
                            title: "Klienti"
                       } ,{                      
                           type: "paragraph",
                           content: "Zobrazuje aktuálne klientske zariadenia pripojené k opakovaču 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span>  signálu."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Rozšírená 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> sieť, ku ktorej je pripojené zariadenie klienta."
                       } ,{                      
                           type: "name",
                           title: "Názov zariadenia",
                           content: "Názov pripojeného zariadenia klienta."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Fyzická MAC adresa pripojeného zariadenia klienta."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Stav",
               CONTENT: [{
                           type: "paragraph",
                           content: "Stavová stránka zobrazuje panel s aktuálnym stavom a informáciami o sieti. Ďalšie podrobnosti získate kliknutím na každú ikonu."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Stav internetu",
                           content: "Zobrazuje aktuálny stav internetového pripojenia zariadenia."
                       } ,{                      
                           type: "title",
                            title: "Prístupový bod"
                       } ,{                      
                           type: "name",
                           title: "DHCP server",
                           content: "Zobrazuje stav DHCP servera."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu pridelenú prístupovému bodu DHCP serverom."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Zobrazuje spôsob, akým prístupový bod získa IP adresu."
                       } ,{                      
                           type: "title",
                            title: "Bezdrôtoví klienti"
                       } ,{                      
                           type: "name",
                           title: "Názov",
                           content: "Zobrazuje názov klientskych zariadení."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu pridelenú klientskym zariadeniam."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje fyzickú MAC adresu klientskych zariadení."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Nastavenie",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Vyberte oblasť z rozbaľovacej ponuky. Ak ponuka neobsahuje vašu krajinu či oblasť, používanie bezdrôtových sietí môže vo vašej lokalite podliehať obmedzeniam."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Bezdrôtová sieť 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Povoliť bezdrôtovú sieť",
                           content: "Zaškrtnutím tohto políčka povolíte vysielanie bezdrôtovej siete na frekvencii 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Názov bezdrôtovej siete (SSID)",
                           content: "Môžete ponechať predvolený názov siete (SSID) alebo zadajte nový názov (až 32 znakov). Rozlišujú sa veľké a malé písmená."
                       } ,{                      
                           type: "name",
                           title: "Skryť SSID",
                           content: "Zaškrtnite toto políčko, ak chcete skryť názov (SSID) 2,4 GHz siete v zozname bezdrôtových sietí."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečenie",
                           content: "Vyberte jednu z nasledujúcich možností zabezpečenia:",
       children: [{                      
                           type: "name",
                           title: "Nezabezpečené",
                           content: "Vyberte túto možnosť, ak chcete vypnúť zabezpečenie bezdrôtovej siete. Dôrazne odporúčame aktivovať zabezpečenie bezdrôtovej siete na ochranu bezdrôtovej siete pred neoprávneným prístupom."
                       } ,{                      
                           type: "name",
                           title: "WPA / WPA2-Osobné",
                           content: "Vyberte a aktivujte metódu štandardného overenia na základe kľúča Pre-Shared Key (PSK), nazývaného aj heslová fráza. Táto možnosť je odporúčaná. Ak je vybraná, nakonfigurujte nasledujúce nastavenia.",
       children: [{                      
                           type: "name",
                           title: "Verzia",
                           content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Táto možnosť podporuje viacnásobnú implementáciu štandardu WPA (Wi-Fi Protected Access), ako je napríklad WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Táto možnosť podporuje len šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Táto možnosť podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia ako WPA-PSK, a je odporúčané."
                       }]
} ,{                      
                           type: "name",
                           title: "Šifrovanie",
                           content: "Vyberte typ zabezpečenia šifrovaním: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), alebo Auto (pre šifrovanie TKIP a AES). Neodporúča sa používať šifrovanie TKIP, ak opakovač signálu pracuje v režime 802.11n, pretože TKIP nepodporuje špecifikáciu 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS sa deaktivuje."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohto poľa zadajte heslo bezdrôtovej siete v rozsahu 8 až 63 znakov ASCII alebo 8 až 64 hexadecimálnych znakov."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Výberom tejto možnosti aktivujte základnú metódu overenia, ak sa niektoré z vašich klientskych zariadení môže pripojiť do bezdrôtovej siete len cez WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ overenia pre vašu bezdrôtovú sieť. Predvolené nastavenie je Auto, ktoré automaticky vyberie možnosť Otvorený systém alebo Zdieľaný kľúč na základe možností a žiadosti o prístup bezdrôtového klienta."
                       } ,{                      
                           type: "name",
                           title: "Formát kľúča WEP",
                           content: "Použite ASCII alebo hexadecimálny formát. Formát ASCII je kombináciou písmen a číslic. Hexadecimálny formát je kombinácia číslice (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ kľúča",
                           content: "Vyberte dĺžku kľúča WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bitový",
                           content: "Umožňuje zadať 10 hexadecimálnych znakov (0-9, A-F, a-f) alebo 5 znakov ASCII do poľa s hodnotou kľúča WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bitový",
                           content: "Umožňuje zadať 26 hexadecimálnych znakov (0-9, A-F, a-f) alebo 13 znakov ASCII do poľa s hodnotou kľúča WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota kľúča",
                           content: "Zadajte WEP kľúč do príslušného poľa."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Režim",
                           content: "Vyberte režim zmiešaného prenosu."
                       } ,{                      
                           type: "name",
                           title: "Šírka kanála",
                           content: "Vyberte šírku kanálu (pásmo) pre 2,4 GHz bezdrôtovú sieť."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte prevádzkový kanál pre 2,4 GHz bezdrôtovú sieť. Odporúča sa ponechať hodnotu kanála Automaticky, ak nedochádza k prerušovanému bezdrôtovému spojeniu."
                       } /*,{                      
                           type: "name",
                           title: "Prenosový výkon",
                           content: "Vyberte hodnotu výkonu prenosu dát \"Vysoký, Stredný alebo Nízky\". Predvolená a odporúčaná hodnota výkonu je Vysoký."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknutím na Uložiť uložíte všetky nastavenia."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Bezdrôtová sieť 5 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Povoliť bezdrôtovú sieť",
                           content: "Zaškrtnutím tohto políčka povolíte vysielanie bezdrôtovej siete na frekvencii 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Názov bezdrôtovej siete (SSID)",
                           content: "Môžete ponechať predvolený názov siete (SSID) alebo zadajte nový názov (až 32 znakov). Rozlišujú sa veľké a malé písmená."
                       } ,{                      
                           type: "name",
                           title: "Skryť SSID",
                           content: "Zaškrtnite toto políčko, ak chcete skryť názov (SSID) 5 GHz siete v zozname bezdrôtových sietí."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečenie",
                           content: "Vyberte jednu z nasledujúcich možností zabezpečenia:",
       children: [{                      
                           type: "name",
                           title: "Nezabezpečené",
                           content: "Vyberte túto možnosť, ak chcete vypnúť zabezpečenie bezdrôtovej siete. Dôrazne odporúčame aktivovať zabezpečenie bezdrôtovej siete na ochranu bezdrôtovej siete pred neoprávneným prístupom."
                       } ,{                      
                           type: "name",
                           title: "WPA / WPA2-Osobné",
                           content: "Vyberte a aktivujte metódu štandardného overenia na základe kľúča Pre-Shared Key (PSK), nazývaného aj heslová fráza. Táto možnosť je odporúčaná. Ak je vybraná, nakonfigurujte nasledujúce nastavenia.",
       children: [{                      
                           type: "name",
                           title: "Verzia",
                           content: "Vyberte verziu zabezpečenia pre vašu bezdrôtovú sieť.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Táto možnosť podporuje viacnásobnú implementáciu štandardu WPA (Wi-Fi Protected Access), ako je napríklad WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Táto možnosť podporuje len šifrovanie TKIP, ktoré poskytuje dobrú úroveň zabezpečenia."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Táto možnosť podporuje šifrovanie AES, ktoré poskytuje lepšiu úroveň zabezpečenia ako WPA-PSK, a je odporúčané."
                       }]
} ,{                      
                           type: "name",
                           title: "Šifrovanie",
                           content: "Vyberte typ šifrovacieho zabezpečenia: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), alebo Auto (pre šifrovanie TKIP a AES). Neodporúča sa používať šifrovanie TKIP, ak opakovač signálu pracuje v režime 802.11n, pretože TKIP nepodporuje špecifikáciu 802.11n. Ak je vybrané šifrovanie TKIP, funkcia WPS sa deaktivuje."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohto poľa zadajte heslo bezdrôtovej siete v rozsahu 8 až 63 znakov ASCII alebo 8 až 64 hexadecimálnych znakov."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Výberom tejto možnosti aktivujte základnú metódu overenia, ak sa niektoré z vašich klientskych zariadení môže pripojiť do bezdrôtovej siete len cez WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ overenia pre vašu bezdrôtovú sieť. Predvolené nastavenie je Automaticky, ktoré automaticky vyberie možnosť Otvorený systém alebo Zdieľaný kľúč na základe možností a žiadosti o prístup bezdrôtového klienta."
                       } ,{                      
                           type: "name",
                           title: "Formát kľúča WEP",
                           content: "Použite ASCII alebo hexadecimálny formát. Formát ASCII je kombináciou písmen a číslic. Hexadecimálny formát je kombinácia číslice (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ kľúča",
                           content: "Vyberte dĺžku kľúča WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bitový",
                           content: "Umožňuje zadať 10 hexadecimálnych znakov (0-9, A-F, a-f) alebo 5 znakov ASCII do poľa s hodnotou kľúča WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bitový",
                           content: "Umožňuje zadať 26 hexadecimálnych znakov (0-9, A-F, a-f) alebo 13 znakov ASCII do poľa s hodnotou kľúča WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota kľúča",
                           content: "Zadajte WEP kľúč do príslušného poľa."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Režim",
                           content: "Vyberte režim zmiešaného prenosu."
                       } ,{                      
                           type: "name",
                           title: "Šírka kanála",
                           content: "Vyberte šírku kanálu (pásmo) pre 5 GHz bezdrôtovú sieť."
                       } ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte prevádzkový kanál pre 5 GHz bezdrôtovú sieť. Odporúča sa ponechať hodnotu kanála Auto, ak nedochádza k prerušovanému bezdrôtovému spojeniu."
                       } /*,{                      
                           type: "name",
                           title: "Prenosový výkon",
                           content: "Vyberte hodnotu výkonu prenosu dát \"Vysoký, Stredný alebo Nízky\". Predvolená a odporúčaná hodnota výkonu je Vysoký."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknutím na Uložiť uložíte všetky nastavenia."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Povoliť WPS",
                           content: "Ďalšie zariadenia je možné pripojiť k tomuto prístupovému bodu (AP) pomocou WPS s PIN kódom AP."
                       }]
},
       WPS :{ 
               TITLE:"PIN prístupového bodu",
               CONTENT: [{
                           type: "name",
                           title: "PIN prístupového bodu",
                           content: "Pre pripojenie bezdrôtových zariadení k prístupovému bodu pomocou PIN kódu (osobné identifikačné číslo) AP prepnite prepínač do zapnutej polohy."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Zobrazuje PIN kód prístupového bodu. Predvolený PIN kód možno nájsť na štítku AP. Kliknutím na tlačidlo Generovať sa vytvorí nový náhodný PIN kód alebo kliknutím na tlačidlo Predvolené obnovíte aktuálny PIN kód na predvolený PIN kód z výroby."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Sprievodca WPS",
               CONTENT: [{
                           type: "name",
                           title: "Tlačidlo (odporúča sa)",
                           content: "Vyberte tento spôsob pripojenia pre jednoduché pripojenie ľubovoľného WPS zariadenia k vašej bezdrôtovej sieti pomocou tlačidla WPS alebo virtuálne pomocou tlačidla Pripojiť."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Vyberte tento spôsob pripojenia na ručné pridanie zariadenia zadaním WPS PIN kódu bezdrôtového zariadenia do príslušného poľa a kliknite na tlačidlo Pripojiť."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Pripojenie k hostiteľskej sieti",
               CONTENT: [{
                           type: "name",
                           title: "Pripojiť k sieti 2,4GHz <span class=\"hidden_5g\">/ 5 GHz</span>",
                           content: "Povoľte alebo zakážte pripojenie opakovača signálu k existujúcej 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> sieti."
                       } ,{                      
                           type: "name",
                           title: "Skenovanie bezdrôtových sietí",
                           content: "Kliknite na toto tlačidlo na vyhľadanie a zobrazenie všetkých dostupných sietí Wi-Fi, ktoré sú pre pripojenie vášho opakovača signálu v dosahu. Akonáhle je sieť zvolená, nastavenia SSID a zabezpečenia tejto siete sa automaticky doplnia."
                       } ,{                      
                           type: "name",
                           title: "SSID hostiteľskej 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span>",
                           content: "Zadajte názov (SSID) hostiteľskej siete (rozlišujú sa veľké a malé písmená), ku ktorej sa opakovač signálu bude pripájať alebo kliknite na <strong> Skener bezdrôtových sietí </strong> a vyberte sieť Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečenie 2,4GHz <span class=\"hidden_5g\">/ 5 GHz</span> hostiteľa",
                           content: "Vyberte niektorú z možností zabezpečenia vašej hostiteľskej siete."
                       } ,{                      
                           type: "name",
                           title: "Nezabezpečené",
                           content: "Táto možnosť vypne zabezpečenie bezdrôtovej siete."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Táto možnosť podporuje iba TKIP (Temporal Key Integrity Protocol), ktorý zabezpečuje dobrú úroveň bezpečnosti."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Táto možnosť podporuje AES (Advanced Encryption) šifrovanie, ktoré poskytuje vyššiu úroveň zabezpečenia než WPA-PSK. Odporúča sa."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Táto možnosť podporuje viacnásobnú implementáciu štandardu WPA (Wi-Fi Protected Access), ako je WPA a WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Táto možnosť je najzákladnejšia forma zabezpečenia bezdrôtovej siete, ktorá môže byť použitá v prípade, že klientske zariadenia sa môžu bezdrôtovo pripájať iba pomocou WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Rozšírené nastavenia siete",
               CONTENT: [{
                           type: "name",
                           title: "Rozšírená sieť 2,4GHz <span class=\"hidden_5g\">/ 5 GHz</span>",
                           content: "Povoľte alebo zakážte 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> bezdrôtovú funkciu opakovača signálu."
                       } ,{                      
                           type: "name",
                           title: "SSID rozšírenej siete 2,4GHz <span class=\"hidden_5g\">/ 5 GHz</span>",
                           content: "Buď použite tlačidlo <strong> Skopírovať SSID hostiteľskej siete</strong> na automatické kopírovanie SSID hlavného smerovača/AP, alebo zadajte nový názov (do 32 znakov). Pre toto pole sa rozlišujú veľké a malé písmená."
                       } ,{                      
                           type: "name",
                           title: "Kopírovať SSID hostiteľskej siete",
                           content: "Kliknite na toto tlačidlo pre skopírovanie a automatické vyplnenie SSID a nastavení zabezpečenia hostiteľskej siete do príslušných políčok."
                       } ,{                      
                           type: "name",
                           title: "Nevysielať SSID",
                           content: "Zaškrtnite toto políčko, ak chcete skryť SSID rozšírenej siete 2,4 GHz <span class=\"hidden_5g\">/ 5 GHz</span> zo zoznamu Wi-Fi sietí."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Riadenie prístupu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Riadenie prístupu slúži na povolenie alebo blokovanie prístupu konkrétnych počítačov a ďalších zariadení k rozšírenej sieti. Keď je zariadenie blokované, potom nie je schopné sa pripojiť k rozšírenej sieti."
                       } ,{                      
                           type: "paragraph",
                           content: "Ak chcete použiť funkciu riadenia prístupu, zapnite túto funkciu a nastavte zoznam blokovaných alebo povolených zariadení. Ak je funkcia riadenia prístupu vypnutá, všetky zariadenia vrátane nepovolených zariadení sa môžu pripojiť."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Režim prístupu",
               CONTENT: [{
                           type: "name",
                           title: "Blokované zariadenia",
                           content: "Iba zariadenia uvedené na zozname blokovaných zariadení NEMAJÚ povolený prístup do siete."
                       } ,{                      
                           type: "name",
                           title: "Povolené zariadenia",
                           content: "Iba zariadenia uvedené na zozname povolených zariadení majú povolený prístup do siete."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Online zariadenie",
               CONTENT: [{
                           type: "name",
                           title: "Názov zariadenia",
                           content: "Zobrazuje názov pripojeného zariadenia."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje IP adresu pripojeného zariadenia."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu pripojeného zariadenia."
                       } ,{                      
                           type: "name",
                           title: "Typ pripojenia",
                           content: "Zobrazuje typ pripojenia pripojeného zariadenia."
                       } ,{                      
                           type: "step",
                           title: "Blokovanie zariadenia",
                           content: "V tabuľke Online zariadenia v stĺpci Upraviť kliknite na ikonu Blokovať pri zariadení, ktoré chcete blokovať."
                       } ,{                      
                           type: "step",
                           title: "Blokovanie viacerých zariadení",
                           content: "V tabuľke Online zariadenia vyberte všetky zariadenia, ktoré chcete blokovať, a nad tabuľkou kliknite na tlačidlo Blokovať. Zariadenie bude automaticky pridané na zoznam blokovaných alebo povolených zariadení."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Blokované / povolené zariadenia",
               CONTENT: [{
                           type: "step",
                           title: "Pridanie zariadenia do zoznamu blokovaných / povolených zariadení",
       content: [ 
                "1. Kliknite na ikonu Pridať.",
                "2. Zadajte názov zariadenia.",
                "3. Zadajte MAC adresu zariadenia.",
                "4. Vyberte typ efektívneho času. Ak vyberiete možnosť <b>Nemožno pristupovať podľa časového plánu/Prístup podľa časového plánu</b>, nastavte čas a dni.",
                "5. Kliknite na tlačidlo OK."]
} ,{                      
                           type: "step",
                           title: "Úprava alebo odstránenie zariadenia v zozname blokovaných / povolených zariadení",
                           content: "V tabuľke blokovaných / povolených zariadení kliknite na ikonu Upraviť alebo na ikonu koša pri zariadeniach, ktoré chcete upraviť alebo odstrániť."
                       } ,{                      
                           type: "step",
                           title: "Odstránenie viacerých zariadení zo zoznamu blokovaných / povolených zariadení",
                           content: "V tabuľke so zoznamom blokovaných / povolených zariadení vyberte všetky zariadenia, ktoré chcete odstrániť, a nad zoznamom kliknite na tlačidlo Odstrániť."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Hostiteľská sieť pre port Ethernet",
                           content: "Vyberte bezdrôtové pásmo (2,4 GHz alebo 5 GHz) hostiteľskej siete, ktoré sa používa na odosielanie prenášaných údajov z káblových klientov do bezdrôtových klientov. <br/> Táto možnosť je k dispozícii iba vtedy, keď je zapnutá 2,4 GHz aj 5 GHz hostiteľská sieť."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Nastavenia siete",
               CONTENT: [{
                           type: "name",
                           title: "Získať IP adresu automaticky",
                           content: "Vyberte túto možnosť (odporúča sa), ak chcete, aby opakovač dynamicky získal IP adresu a bránu z hostiteľskej siete."
                       } ,{                      
                           type: "name",
                           title: "Použiť nasledujúcu IP adresu",
                           content: "Vyberte túto možnosť, ak chcete manuálne nastaviť IP adresu a bránu opakovača."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zadajte IP adresu v desiatkovom formáte oddelenom bodkami (192.168.0.254 v predvolenom nastavení)."
                       } ,{                      
                           type: "name",
                           title: "Maska podsiete",
                           content: "Zadajte masku podsiete v desiatkovom formáte oddelenom bodkami. Formát určuje veľkosť siete (255.255.255.0 v predvolenom nastavení)."
                       } ,{                      
                           type: "name",
                           title: "Predvolená brána",
                           content: "Zadajte bránu, ktorá je v rovnakej podsieti ako IP adresa v desiatkovom formáte oddelenom bodkami. To je zvyčajne LAN IP adresa vášho smerovača."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Nastavenia DHCP servera",
               CONTENT: [{
                           type: "paragraph",
                           content: "V predvolenom nastavení je opakovač signálu nastavený ako DHCP (Dynamic Host Configuration Protocol) server, aby poskytoval konfiguráciu TCP/IP všetkým klientom, ktorí sú pripojení k opakovaču v LAN sieti z rozsahu IP adries."
                       } ,{                      
                           type: "name",
                           title: "DHCP server",
                           content: "V predvolenom nastavení je vybratá možnosť Automaticky. DHCP server automaticky priradí platnú IP adresu klientovi. DHCP server môžete zapnúť alebo vypnúť. Ak je vybratá možnosť Vypnuté, musíte mať iný DHCP server v sieti LAN, inak budete musieť nastaviť IP adresu pre každého klienta ručne."
                       } ,{                      
                           type: "name",
                           title: "Rozsah IP adries",
                           content: "Zadajte rozsah IP adries, ktoré môžu byť pridelené klientom. V predvolenom nastavení je počiatočná IP adresa 192.168.0.100 a koncová IP adresa 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Čas zapožičania adresy",
                           content: "Zadajte dobu trvania prenájmu IP adresy klientovi. Zvoľte dobu medzi 1 a 2 880 minútami. Predvolená hodnota je 1 minúta."
                       } ,{                      
                           type: "name",
                           title: "Predvolená brána",
                           content: "<br/> Zadajte LAN IP adresu opakovača signálu. Predvolené nastavenie je 192.168.0.254. (Voliteľné)"
                       } ,{                      
                           type: "name",
                           title: "Primárny DNS server",
                           content: "Zadajte IP adresu DNS servera, ktorú získate u svojho ISP. (Voliteľné)"
                       } ,{                      
                           type: "name",
                           title: "Sekundárny DNS server",
                           content: "Zadajte tieto parametre podľa údajov vášho ISP. (Voliteľné)"
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Ak chcete použiť DHCP server opakovača signálu, všetkých klientov v sieti LAN treba nakonfigurovať tak, aby získali IP adresu automaticky."
                       } ,{                      
                           type: "paragraph",
                           content: "Pre uloženie konfigurácie kliknite na tlačidlo <strong> Uložiť </strong>."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Rezervácia adries",
               CONTENT: [{
                           type: "paragraph",
                           content: "Môžete ručne rezervovať IP adresu pre klienta, ktorý je pripojený k opakovaču. Po rezervácii adresy bude DHCP server prideľovať klientovi stále tu istú IP adresu."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu klienta s IP adresou rezervovanou DHCP serverom."
                       } ,{                      
                           type: "name",
                           title: "Rezervovaná IP adresa",
                           content: "Zobrazuje rezervovanú IP adresu klienta."
                       } ,{                      
                           type: "name",
                           title: "Popis",
                           content: "Zobrazuje popis klientskeho zariadenia."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje aktuálny stav (povolené alebo zakázané) klientskeho zariadenia."
                       } ,{                      
                           type: "name",
                           title: "Upraviť",
                           content: "Zobrazia sa možnosti úpravy alebo odstránenia daného klienta."
                       } ,{                      
                           type: "step",
                           title: "Rezervácia IP adresy",
       content: [ 
                "1. Kliknite na tlačidlo Pridať.",
                "2. Zadajte MAC adresu požadovaného klienta.",
                "3. Zadajte IP adresu, ktorú chcete vyhradiť pre klienta.",
                "4. Zadajte popis klienta.",
                "5. Vyberte možnosť Povoliť túto položku.",
                "6. Kliknite na tlačidlo OK."]
} ,{                      
                           type: "step",
                           title: "Úprava alebo odstránenie existujúceho klienta",
                           content: "V tabuľke kliknite na ikonu Upraviť alebo na ikonu koša pri klientovi, ktorého chcete upraviť alebo odstrániť."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Zoznam klientov DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje nasledujúce informácie každého klienta DHCP, ktorý je pripojený k opakovaču signálu."
                       } ,{                      
                           type: "name",
                           title: "Celkový počet klientov",
                           content: "Zobrazuje počet pripojených klientov DHCP servera."
                       } ,{                      
                           type: "name",
                           title: "Názov klienta",
                           content: "Názov priradeného klienta DHCP."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "MAC adresa klienta DHCP."
                       } ,{                      
                           type: "name",
                           title: "Priradená IP adresa",
                           content: "IP adresa klienta pridelená DHCP serverom."
                       } ,{                      
                           type: "name",
                           title: "Čas zapožičania",
                           content: "Čas od zapožičania IP adresy klientovi DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong> Obnoviť</strong> – kliknutím na toto tlačidlo aktualizujete zoznam klientov DHCP."
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Pokrytie Wi-Fi",
               CONTENT: [{
							type:"paragraph",
                           content: "Vyberte stupeň pokrytia signálom Wi-Fi pre opakovač signálu."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Nastavenie času",
               CONTENT: [{
                           type: "name",
                           title: "Aktuálny čas",
                           content: "Zobrazuje aktuálny čas systému."
                       } ,{
                           type: "name",
                           title: "Časová zóna",
                           content: "Vyberte časové pásmo."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Letný čas",
               CONTENT: [{
              type: "step",
                            title: "Nastavenie denného času:",
              content:[
                "1. Vyberte letný čas.",
                "2. Vyberte správny dátum a čas <b>začiatku</b> letného času vo vašom miestnom časovom pásme.",
                "3. Vyberte správny dátum a čas <b>skončenia</b> letného času vo vašom miestnom časovom pásme.",
                "4. Kliknite na tlačidlo Uložiť."]},
        {
          type:"name",
          title:"Aktuálny stav",
          content:"Znázorňuje, či je aktuálny čas uvedený ako letný čas."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Ovládanie LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nastavenie LED umožňuje zapínať alebo vypínať indikátory LED opakovača signálu podľa konkrétneho časového harmonogramu."
                       } ,{                      
                           type: "name",
                           title: "Nočný režim",
                           content: "Označuje, či je nočný režim zapnutý alebo vypnutý."
                       } ,{                      
                           type: "name",
                           title: "Doba vypnutia LED",
                           content: "Vyberte časový harmonogram vypínania indikátorov LED."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Plán napájania",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zapnite túto funkciu, ak chcete z úsporných dôvodov vypínať opakovač podľa časového plánu."
                       } ,{                      
                           type: "name",
                           title: "Zapnúť plán napájania",
                           content: "Výberom tejto možnosti zapnite plán napájania."
                       } ,{                      
                           type: "name",
                           title: "Čas vypnutia",
                           content: "Vyberte časový interval automatického vypínania opakovača."
                       } ,{                      
                           type: "name",
                           title: "Dni",
                           content: "Vyberte dni, kedy chcete vypínať opakovač."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Inovácia firmvéru",
               CONTENT: [{
                           type: "name",
                           title: "Verzia firmvéru",
                           content: "Zobrazuje aktuálnu verziu firmvéru."
                       } ,{                      
                           type: "name",
                           title: "Verzia hardvéru",
                           content: "Zobrazuje aktuálnu verziu hardvéru."
                       } ,{                      
                           type: "step",
                           title: "Dôležité: S cieľom zabrániť zlyhaniu inovácie zohľadnite tieto upozornenia:",
       content: [ 
                "1. Súbor s firmvérom musí zodpovedať hardvérovej verzii opakovača signálu.",
                "2. Výpadok napájania počas procesu inovácie môže poškodiť opakovač signálu."]
} ,{                      
                           type: "step",
                           title: "Postup inovácie firmvéru:",
       content: [ 
                "1. Stiahnite si do počítača najnovšiu verziu firmvéru zo <a class=\"link\" href=\"http://cz.tp-link.com/support.html\" target=\"_blank\"> stránok podpory TP-Link</a>.",
                "2. Kliknite na tlačidlo <strong> Prehľadávať </strong>, vyhľadajte stiahnutý súbor a vyberte ho.",
                "3. Kliknite na tlačidlo <strong> Inovovať</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Inovácia trvá niekoľko minút. Po dokončení inovácie sa opakovač signálu sám automaticky reštartuje."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Zálohovanie",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dôrazne odporúčame zálohovať aktuálnu konfiguráciu pre prípad, že by bolo potrebné obnovenie systému do predchádzajúceho stavu alebo obnovenie predvolených nastavení z výroby."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknutím na tlačidlo Zálohovať uložte aktuálnu konfiguráciu ako súbor config.bin v počítači. Uložte ho na bezpečnom mieste, odkiaľ ho môžete v prípade potreby získať."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Obnovenie",
               CONTENT: [{
                           type: "step",
                           title: "Ak chcete obnoviť uložené nastavenia zo záložného súboru:",
       content: [ 
                "1. Pre vyhľadanie záložného súboru kliknite na tlačidlo Prehľadávať.",
                "2. Vyberte záložný súbor.",
                "3. Kliknite na tlačidlo Obnoviť.",
                "4. Kliknutím na tlačidlo <strong>Áno</strong> potvrďte obnovenie systému.",
                "Proces obnovenia môže trvať niekoľko minút. Po dokončení sa opakovač signálu sám automaticky reštartuje."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Obnovenie výrobných nastavení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kliknutím na tlačidlo Obnoviť z výroby resetujete opakovač signálu na predvolené nastavenia z výroby."
                       } ,{                      
                           type: "note",
                            title: "Poznámka",
                            content: [
                              "1. Obnovením do továrenského nastavenia bude vymazaná všetka konfigurácia opakovače signálu. Pre prihlásenie na stránky správy opakovače signálu použite východiskové meno a heslo: admin.",
                              "1. Obnova do továrenského nastavenia vymaže všetky predchádzajúce nastavenia extenderu. Prosím vytvorte si heslo pre budúce prihlásení.",
                              "2. Prosím NEVYPÍNAJTE opakovač signálu počas procesu zálohovania alebo obnovenia."
                            ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Účet administrátora",
               CONTENT: [{
                           type: "paragraph",
                           content: "Táto stránka umožňuje zmeniť predvolené prihlasovacie meno a/alebo heslo."
                       } ,{                      
                           type: "paragraph",
                           content: "Na tejto stránke môžete zmeniť svoje prihlasovacie heslo."
                       } ,{                      
                           type: "name",
                           title: "Staré používateľské meno",
                           content: "Zadajte aktuálne meno používateľa."
                       } ,{                      
                           type: "name",
                           title: "Staré heslo",
                           content: "Zadajte aktuálne heslo."
                       } ,{                      
                           type: "name",
                           title: "Nové používateľské meno",
                           content: "Zadajte nové meno používateľa."
                       } ,{                      
                           type: "name",
                           title: "Nové heslo",
                           content: "Zadajte nové heslo."
                       } ,{                      
                           type: "name",
                           title: "Potvrdenie hesla",
                           content: "Znova zadajte nové heslo."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Systémový protokol",
               CONTENT: [{
                           type: "paragraph",
                           content: "Stránka Systémový protokol zobrazuje zoznam najnovších aktivít (udalostí) opakovača signálu. Môžete definovať, aké typy záznamov a/alebo akú úroveň záznamov chcete zobraziť."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Vyberte typ záznamu, ktorý chcete zobraziť."
                       } ,{                      
                           type: "name",
                           title: "Úroveň",
                           content: "Vyberte úroveň záznamu, ktorý chcete zobraziť."
                       } ,{                      
                           type: "name",
                           title: "Obnoviť",
                           content: "Kliknite na toto tlačidlo pre aktualizáciu systémového protokolu."
                       } ,{                      
                           type: "name",
                           title: "Zmazať všetko",
                           content: "Kliknite na toto tlačidlo pre trvalé odstránenie všetkých záznamov."
                       } ,{                      
                           type: "name",
                           title: "Uložiť záznam",
                           content: "Pre uloženie systémového protokolu ako súbor .txt kliknite na toto tlačidlo."
                       }]
},
    });
})(jQuery);
