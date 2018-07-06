(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Setări regiune",
               CONTENT: [{
                           type: "name",
                           title: "Regiune",
                           content: "Selectați regiunea dumneavoastră din meniul pe verticală. Dacă țara sau regiunea nu este listată, există posibilitatea să fie interzisă folosirea rețelei wireless în acea zonă."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Stare",
               CONTENT: [{
                           type: "paragraph",
                           content: "Pagina cu starea de bază afișează o listă care conține starea curentă a rețelei și informații despre aceasta. Puteți apăsa pe fiecare pictogramă pentru a obține mai multe detalii."
                       } ,{                      
                           type: "title",
                            title: "Range Extender"
                       } ,{                      
                           type: "paragraph",
                           content: "Afișează informațiile rețelei extinse în banda de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Numele rețelei extinse (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Canalul wireless curent."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Adresa MAC fizică a extensiei de acoperire."
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Afișează starea serverului DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP",
                           content: "Adresa IP care este alocată clientului, de serverul DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tip",
                           content: "Tipul adresei IP alocate de serverul DHCP."
                       } ,{                      
                           type: "title",
                            title: "Rețea gazdă de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Afișează următoarele informații despre rețeaua în banda de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "SSID-ul rețelei gazdă."
                       } ,{                      
                           type: "name",
                           title: "Semnal",
                           content: "Puterea semnalului rețelei gazdă."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Adresa MAC fizică a rețelei gazdă."
                       } ,{                      
                           type: "title",
                            title: "Clienți"
                       } ,{                      
                           type: "paragraph",
                           content: "Afișează dispozitivele client conectate în acest moment la extensie folosind rețeaua de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Tip",
                           content: "Rețeaua extinsă de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> la care este conectat dispozitivul client."
                       } ,{                      
                           type: "name",
                           title: "Nume dispozitiv",
                           content: "Numele dispozitivului conectat."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Adresa MAC fizică a dispozitivului conectat."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Stare",
               CONTENT: [{
                           type: "paragraph",
                           content: "Pagina Stare afișează informații despre starea curentă a rețelei. Puteți apăsa pe fiecare pictogramă pentru a afla mai multe detalii."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Access Point",
                           content: "Afișează starea curentă a conexiunii la Internet."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Afișează starea serverului DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP",
                           content: "Afișează adresa IP alocată punctului de acces, de serverul DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tip",
                           content: "Afișează modalitatea prin care punctul de acces obține adresa IP."
                       } ,{                      
                           type: "title",
                            title: "Clienți wireless"
                       } ,{                      
                           type: "name",
                           title: "Nume",
                           content: "Afișează numele echipamentelor conectate."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP",
                           content: "Afișează adresa IP alocată echipamentului conectat."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Afișează adresa MAC a echipamentului conectat."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Setări",
               CONTENT: [{
                           type: "name",
                           title: "Regiune",
                           content: "Selectați regiunea dumneavoastră din lista pe verticală. Dacă țara sau regiunea dumneavoastră nu este listată, este posibil ca folosirea rețelei wireless să fie restricționată în locația dumneavoastră."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wireless 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Activare emisie wireless",
                           content: "Selectați această casetă pentru a activa rețeaua wireless în banda de 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Nume rețea wireless (SSID)",
                           content: "Puteți păstra numele implicit al rețelei (SSID) sau puteți introduce un nume nou (maximum 32 de caractere.). Acest câmp este sensibil la litere mari și mici."
                       } ,{                      
                           type: "name",
                           title: "Ascunde SSID",
                           content: "Selectați această casetă dacă doriți să ascundeți numele rețelei (SSID) în banda de 2.4GHz din lista rețelelor Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Securitate",
                           content: "Selectați una din următoarele opțiuni de securitate:",
       children: [{                      
                           type: "name",
                           title: "Fără securitate",
                           content: "Selectați această opțiune pentru a dezactiva securitatea wireless. Este recomandat să activați securitatea wireless pentru a proteja rețeaua wireless de accesul neautorizat."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selectați această opțiune pentru a activa metoda de autentificare standard bazată pe metoda Pre-Shared Key (PSK), denumită și passphrase. Aceasta este opțiunea recomandată. Dacă este selectată, configurați următoarele.",
       children: [{                      
                           type: "name",
                           title: "Versiune",
                           content: "Selectați o versiune de securitate pentru rețeaua wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Această opțiune acceptă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Această opțiune acceptă doar criptare TKIP care oferă un nivel bun de securitate."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Această opțiune acceptă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
                       }]
} ,{                      
                           type: "name",
                           title: "Criptare",
                           content: "Alegeți un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) sau Auto. NU se recomandă utilizarea tipului de criptare TKIP dacă extensia funcționează în standardul 802.11n, deoarece criptarea TKIP nu este acceptată de acest standard. Dacă alegeți criptarea de tip TKIP, funcția WPS va fi dezactivată automat."
                       } ,{                      
                           type: "name",
                           title: "Parolă",
                           content: "Creați o parolă care să folosească între 8 și 63 caractere ASCII, sau între 8 și 64 caractere hexazecimale (0-9, af, AF)"
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selectați această opțiune pentru a activa metoda de autentificare de bază dacă unul dintre dintre dispozitivele client poate accesa rețeaua wireless numai prin metoda WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tip",
                           content: "Selectați un tip de autentificare pentru rețeaua wireless. Valoarea implicită este Automat. Această valoare alege automat metoda Sistem deschis sau Cheie partajată în funcție de capacitatea și cererea de acces a clientului wireless."
                       } ,{                      
                           type: "name",
                           title: "Format cheie WEP",
                           content: "Se utilizează în format ASCII sau hexazecimal. Formatul ASCII este o combinație de caractere alfanumerice. Formatul hexazecimal este o combinație de cifre (0-9) și litere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tip cheie",
                           content: "Selectați lungimea cheii WEP.",
       children: [{                      
                           type: "name",
                           title: "64 biți",
                           content: "Vă permite să introduceți 10 caractere hexazecimale (0-9, A-F, a-f) sau 5 caractere ASCII în câmpul Valoare cheie."
                       } ,{                      
                           type: "name",
                           title: "128 biți",
                           content: "Vă permite să introduceți 26 caractere hexazecimale (0-9, A-F, a-f) sau 13 caractere ASCII în câmpul Valoare cheie."
                       }]
} ,{                      
                           type: "name",
                           title: "Valoare cheie",
                           content: "Introduceți cheia WEP în câmpul corespunzător."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mod",
                           content: "Selectați un mod de transmisie mixt."
                       } ,{                      
                           type: "name",
                           title: "Lățime canal",
                           content: "Selectați lățimea canalului (lățime de bandă) pentru rețeaua wireless de 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selectați canalul de operare pentru rețeaua în banda de 2.4GHz. Este recomandat să mențineți valoarea canalului Auto dacă nu întâmpinați probleme intermitente ale conexiunii wireless."
                       } /*,{                      
                           type: "name",
                           title: "Putere transmisie",
                           content: "Selectați Ridicată, Medie sau Scăzută pentru a specifica puterea de emisie. Opțiunea recomandată și implicită este Ridicată."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Apăsați butonul Salvare pentru a salva toate setările."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wireless 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Activare emisie wireless",
                           content: "Selectați această casetă pentru a activa emisia în banda de frecvență de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Nume rețea wireless (SSID)",
                           content: "Puteți utiliza numele implicit al rețelei wireless, sau puteți crea un nume nou (maximum 32 de caractere). Acest câmp este sensibil la litere mari și mici."
                       } ,{                      
                           type: "name",
                           title: "Ascunde SSID",
                           content: "Selectați această casetă dacă doriți să ascundeți numele rețelei wireless (SSID) în lista rețelelor wireless detectabile."
                       } ,{                      
                           type: "name",
                           title: "Securitate",
                           content: "Selectați una dintre următoarele opțiuni de securitate:",
       children: [{                      
                           type: "name",
                           title: "Fără securitate",
                           content: "Selectați această opțiune pentru a dezactiva securitatea wireless. Este foarte recomandat să activați securitatea wireless pentru a proteja rețeaua dumneavoastră împotriva accesului neautorizat."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selectați această opțiune pentru a activa metoda standard de autentificare bazată pe metoda Pre-shared Key (PSK), cunoscută și sub denumirea de passphrase. Aceasta este opțiunea recomandată. Dacă este selectată, configurați următoarele.",
       children: [{                      
                           type: "name",
                           title: "Versiune",
                           content: "Selectați o versiune de securitate pentru rețeaua wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Această opțiune acceptă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Această opțiune acceptă doar criptare TKIP care oferă un nivel bun de securitate."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Această opțiune acceptă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
                       }]
} ,{                      
                           type: "name",
                           title: "Criptare",
                           content: "Alegeți un tip de criptare: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) sau Auto. NU se recomandă utilizarea tipului de criptare TKIP dacă extensia funcționează în standardul 802.11n deoarece criptarea TKIP nu este acceptată de acest standard. Dacă alegeți criptarea de tip TKIP, funcția WPS va fi dezactivată automat."
                       } ,{                      
                           type: "name",
                           title: "Parolă",
                           content: "Creați o parolă care să folosească între 8 și 63 caractere ASCII, sau între 8 și 64 caractere hexazecimale (0-9, af, AF)."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selectați această opțiune pentru a activa metoda de autentificare de bază dacă unul dintre dispozitivele client poate accesa rețeaua wireless numai prin metoda WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tip",
                           content: "Selectați un tip de autentificare pentru rețeaua wireless. Valoarea implicită este Automat. Această valoare alege automat metoda Open System sau Shared Key în funcție de capacitatea și cererea de acces a clientului wireless."
                       } ,{                      
                           type: "name",
                           title: "Format cheie WEP",
                           content: "Se utilizează în format ASCII sau hexazecimal. Formatul ASCII este o combinație de caractere alfanumerice. Formatul hexazecimal este o combinație de cifre (0-9) și litere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tip cheie",
                           content: "Selectați lungimea cheii WEP.",
       children: [{                      
                           type: "name",
                           title: "64 biți",
                           content: "Vă permite să introduceți 10 caractere hexazecimale (0-9, A-F, a-f) sau 5 caractere ASCII în câmpul Valoare cheie."
                       } ,{                      
                           type: "name",
                           title: "128 biți",
                           content: "Vă permite să introduceți 26 caractere hexazecimale (0-9, A-F, a-f) sau 13 caractere ASCII în câmpul Valoare cheie."
                       }]
} ,{                      
                           type: "name",
                           title: "Valoare cheie",
                           content: "Introduceți cheia WEP în câmpul corespunzător."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mod",
                           content: "Selectați un mod de transmisie mixt."
                       } ,{                      
                           type: "name",
                           title: "Lățime canal",
                           content: "Selectați lățimea canalului (lățime de bandă) pentru rețeaua wireless de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selectați canalul de operare pentru rețeaua în banda de 5GHz. Este recomandat să mențineți valoarea canalului Auto dacă nu întâmpinați probleme intermitente ale conexiunii wireless."
                       } /*,{                      
                           type: "name",
                           title: "Putere transmisie",
                           content: "Selectați Ridicată, Medie sau Scăzută pentru a specifica puterea de emisie. Opțiunea recomandată și implicită este Ridicată."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Apăsați butonul Salvare pentru a salva toate setările."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Activare WPS",
                           content: "Alte echipamente Wi-Fi se pot conecta la acest punct de acces (AP) prin funcția WPS, utilizând codul PIN al AP-ului."
                       }]
},
       WPS :{ 
               TITLE:"PIN AP",
               CONTENT: [{
                           type: "name",
                           title: "PIN AP",
                           content: "Comutați în poziția Pornit pentru a permite conectarea echipamentelor wireless cu ajutorul codului PIN (Număr de identificare personală) al AP-ului."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Afișează codul PIN al AP-ului. Codul PIN implicit poate fi găsit pe eticheta AP-ului. Apăsați butonul Generare pentru a genera un nou cod PIN aleator sau apăsați butonul Implicit pentru a restaura codul PIN configurat din fabrică."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Configurare WPS",
               CONTENT: [{
                           type: "name",
                           title: "Buton Push (recomandat)",
                           content: "Selectați această metodă de conectare pentru a activa funcția WPS prin care puteți conecta alte echipamente compatibile WPS la rețeaua dumneavoastră wireless folosind butonul WPS sau butonul virtual Conectare."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Selectați această metodă pentru a conecta manual alte echipamente wireless, completând codul PIN în câmpul corespunzător și apoi apăsând butonul pentru conectare."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Conectare la rețea gazdă",
               CONTENT: [{
                           type: "name",
                           title: "Conectare la rețeaua de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Activați sau dezactivați pentru a conecta extensia de acoperire la o rețea în banda de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Scanare wireless",
                           content: "Apăsați acest buton pentru a scana și afișa toate rețelele Wi-Fi disponibile în zonă la care extensia se poate conecta. Odată ce ați selectat o rețea, SSID-ul și setările de securitate ale acelei rețele se vor completa automat."
                       } ,{                      
                           type: "name",
                           title: "SSID gazdă 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Introduceți SSID-ul rețelei gazdă la care se va conecta extensia sau apăsați <strong>Scanare wireless</strong> și selectați o rețea Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Securitate gazdă 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Selectați una din metodele de securitate care se potrivesc cu rețeaua gazdă."
                       } ,{                      
                           type: "name",
                           title: "Fără securitate",
                           content: "Această opțiune dezactivează securitatea wireless."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Această opțiune acceptă doar criptare TKIP care oferă un nivel bun de securitate."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Această opțiune acceptă criptare AES, care oferă un nivel mai bun de securitate decât WPA-PSK și este recomandată."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Această opțiune acceptă implementări multiple ale standardului WPA (Wi-Fi Protected Access), cum ar fi WPA și WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Această opțiune oferă cea mai de bază formă de securitate wireless care poate fi folosită dacă dispozitivul client poate accesa rețeaua wireless folosind doar WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Setări rețea extinsă",
               CONTENT: [{
                           type: "name",
                           title: "Extindere 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Activați sau dezactivați funcția wireless a extensiei de acoperire în banda de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Extindere SSID 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Fie folosiți butonul <strong>Copiază SSID gazdă</strong>  pentru a copia SSID-ul routerului/AP-ului principal în mod automat sau introduceți un nume nou. (maximum 32 caractere). Acest câmp este sensibil la litere mari și mici."
                       } ,{                      
                           type: "name",
                           title: "Copiază SSID gazdă",
                           content: "Apăsați acest buton pentru a copia și completa în mod automat SSID-ul și setările de securitate a rețelei gazdă în câmpurile corespunzătoare."
                       } ,{                      
                           type: "name",
                           title: "Ascunde SSID",
                           content: "Selectați această casetă dacă doriți să ascundeți numele rețelei (SSID) în banda de 2.4GHz din lista rețelelor Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Control acces",
               CONTENT: [{
                           type: "paragraph",
                           content: "Controlul accesului este utilizat pentru a permite sau bloca anumite computere și alte dispozitive să acceseze rețeaua dumneavoastră. Când un dispozitiv este blocat, acesta este capabil să obțină o adresă IP de la router, dar nu este capabil să comunice cu alte dispozitive sau să se conecteze la Internet."
                       } ,{                      
                           type: "paragraph",
                           content: "Pentru a utiliza funcția Control acces, activați această caracteristică și specificați lista de interziceri sau lista de permisiuni. În cazul în care controlul accesului este dezactivat (Oprit), tuturor dispozitivelor, inclusiv celor de pe lista de interziceri, li se va permite conectarea."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Mod acces",
               CONTENT: [{
                           type: "name",
                           title: "Listă interziceri",
                           content: "Numai dispozitivelor din Lista de interziceri le va fi interzis accesul la rețea."
                       } ,{                      
                           type: "name",
                           title: "Listă permisiuni",
                           content: "Numai dispozitivelor din Lista de permisiuni le va fi permis accesul la rețea."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispozitive conectate",
               CONTENT: [{
                           type: "name",
                           title: "Nume dispozitiv",
                           content: "Arată numele dispozitivului conectat."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP",
                           content: "Arată adresa IP a dispozitivului conectat."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Arată adresa MAC a dispozitivului conectat."
                       } ,{                      
                           type: "name",
                           title: "Tip conexiune",
                           content: "Arată tipul de conexiune pentru dispozitivului conectat."
                       } ,{                      
                           type: "step",
                           title: "Pentru a bloca un dispozitiv",
                           content: "În tabelul Dispozitive conectate, apăsați pe pictograma Blocare din coloana Modificare care corespunde dispozitivului pe care doriți să-l blocați."
                       } ,{                      
                           type: "step",
                           title: "Pentru a bloca dispozitive multiple",
                           content: "În tabelul Dispozitive active, selectați toate dispozitivele pe care doriți să le blocați și apăsați pe Blocare. Dispozitivul va fi adăugat automat în Lista de interziceri sau în Lista de permisiuni."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispozitive în lista de interziceri/permisiuni",
               CONTENT: [{
                           type: "step",
                           title: "Pentru a adăuga un dispozitiv în lista de interziceri/permisiuni",
       content: [ 
                "1. Apăsați pe pictograma Adăugare.",
                "2. Introduceți Numele dispozitivului.",
                "3. Introduceți adresa MAC a dispozitivului.",
                "4. Selectați tipul de Timp efectiv. Dacă selectați <b>Nu se poate accesa în baza programului/Acces bazat pe program</b>, setați ora și zilele.",
                "5. Apăsați butonul OK."]
} ,{                      
                           type: "step",
                           title: "Pentru a șterge un dispozitiv din lista de interziceri/permisiuni",
                           content: "În tabelul de  Interziceri/Permisiuni, apăsați pictogramele Editare sau Ștergere corespunzătoare cu dispozitivul pe care doriți să îl modificați/ștergeți."
                       } ,{                      
                           type: "step",
                           title: "Pentru a șterge dispozitive multiple din lista de interziceri/permisiuni",
                           content: "Din Lista interziceri/permisiuni, selectați toate dispozitivele pe care doriți să le ștergeți și apăsați pe Ștergere."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Rețea gazdă disponibilă pe portul Ethernet",
                           content: "Selectați banda wireless (2.4GHz sau 5GHz) a rețelei gazdă care este folosită pentru a trimite traficul de la clienții prin cablu către clienții wireless.<br/>Această opțiune este disponibilă doar când ambele benzi, de 2.4GHz și de 5GHz, ale rețelei gazdă sunt activate."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Adresă IP rețea gazdă",
               CONTENT: [{
                           type: "name",
                           title: "Obține o adresă IP automat",
                           content: "Selectați această opțiune (recomandat) dacă doriți ca clienții wireless să obțină o adresă IP și un gateway în mod automat de la routerul/AP-ul principal sau de la extensia de acoperire."
                       } ,{                      
                           type: "name",
                           title: "Folosește următoarea adresă IP",
                           content: "Selectați această opțiune (recomandat) dacă doriți ca extensia de acoperire să obțină o adresă IP și un gateway în mod automat de la routerul/AP-ul principal. "
                       } ,{                      
                           type: "name",
                           title: "Adresă IP",
                           content: "Introduceți adresa IP în format zecimal separat de puncte (192.168.0.254 este cea implicită)"
                       } ,{                      
                           type: "name",
                           title: "Mască subrețea",
                           content: "Introduceți masca de subrețea în format zecimal separat de puncte pentru a determina dimensiunea rețelei (255.255.255.0 este cea implicită)"
                       } ,{                      
                           type: "name",
                           title: "Gateway implicit",
                           content: "Introduceți gateway-ul care este în aceeași subrețea cu adresa IP. In mod obișnuit este adresa LAN a routerului."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Setări server DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "În mod implicit, extensia de acoperire are serverul DHCP pornit pentru a furniza o configurare TCP/IP automată pentru toți clienții care sunt conectați la extensia de acoperire, folosind plaja de adrese IP disponibile pentru LAN."
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Valoarea implicită este Auto. Serverul DHCP atribuie în mod automat câte o adresă IP validă fiecărui client. Puteți comuta între opțiunile Pornit (activare) sau Oprit (dezactivare) ale serverului DHCP. Dacă selectați Oprit, trebuie să aveți un alt server DHCP în rețeaua LAN, altfel trebuie să configurați manual adresa IP pentru fiecare client."
                       } ,{                      
                           type: "name",
                           title: "Plaja de adrese IP (IP Address Pool)",
                           content: "Introduceți un interval de adrese IP care nu pot fi acordate clienților. În mod implicit, adresa IP de început este 192.168.0.100 și adresa IP de sfârșit este 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Durată atribuire adresă (Lease time)",
                           content: "Introduceți durata de timp pentru care o adresă IP este acordată clientului, cuprinsă între 1 și 2880 minute. Valoarea implicită este de 1 minut."
                       } ,{                      
                           type: "name",
                           title: "Gateway implicit",
                           content: "<br/> Introduceți adresa IP a extensiei de acoperire. Adresa IP implicită este 192.168.0.254. (Opțional)"
                       } ,{                      
                           type: "name",
                           title: "DNS primar",
                           content: "Introduceți adresa IP a serverului DNS specificat de furnizorul de Internet. (Opțional)"
                       } ,{                      
                           type: "name",
                           title: "DNS secundar",
                           content: "Introduceți parametrii specificați de furnizorul de Internet. (Opțional)"
                       } ,{                      
                           type: "note",
                           title: "Notă",
                           content: "Pentru a putea folosi serverul DHCP al extensiei de acoperire, toți clienții din rețeaua LAN trebuie să configureze setările TCP/IP „se obține automat adresa IP ”."
                       } ,{                      
                           type: "paragraph",
                           content: "Apăsați <strong>Salvare</strong> pentru a salva configurarea."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Rezervare adrese",
               CONTENT: [{
                           type: "paragraph",
                           content: "Puteți rezerva manual o adresă IP pentru un client conectat la extensie. Odată rezervată, adresa IP respectivă va fi alocată de serverul DHCP doar acelui client."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Afișează adresa MAC a clientului cu adresa IP rezervată."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP rezervată",
                           content: "Afișează adresa IP rezervată clientului."
                       } ,{                      
                           type: "name",
                           title: "Descriere",
                           content: "Afișează detalii despre client."
                       } ,{                      
                           type: "name",
                           title: "Stare",
                           content: "Afișează starea curentă a rezervării adresei IP pentru client (activă sau inactivă)."
                       } ,{                      
                           type: "name",
                           title: "Modifică",
                           content: "Afișează opțiunile de Modificare sau Ștergere pentru clientul aferent."
                       } ,{                      
                           type: "step",
                           title: "Pentru a rezerva o adresă IP",
       content: [ 
                "1. Apăsați butonul Adaugă.",
                "2. Introduceți adresa MAC a clientului dorit.",
                "3. Introduceți adresa IP pe care doriți să o rezervați pentru client.",
                "4. Introduceți o descriere pentru client.",
                "5. Selectați Activați această intrare.",
                "6. Apăsați OK."]
} ,{                      
                           type: "step",
                           title: "Pentru a modifica sau șterge un client existent",
                           content: "În tabel, apăsați pictograma Editare sau pictograma Ștergere corespondentă clientului pe care doriți să îl modificați sau ștergeți."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Listă clienți DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Afișează următoarele informații despre fiecare client DHCP care este conectat la extensia de acoperire."
                       } ,{                      
                           type: "name",
                           title: "Număr clienți",
                           content: "Afișează numărul de clienți asociați serverului DHCP."
                       } ,{                      
                           type: "name",
                           title: "Nume client",
                           content: "Numele clientului DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresă MAC",
                           content: "Adresa MAC a clientului DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresă IP atribuită",
                           content: "Adresa IP care este alocată clientului, de serverul DHCP."
                       } ,{                      
                           type: "name",
                           title: "Durată atribuire adresă (Lease time)",
                           content: "Durata de timp pentru care adresa IP este acordată clientului DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Actualizare</strong> - Apăsați acest buton pentru a actualiza lista de clienți DHCP."
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Acoperire Wi-Fi",
               CONTENT: [{
							type:"paragraph",
                           content: "Selectați nivelul de acoperire Wi-Fi pentru extensia de acoperire."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Setări timp",
               CONTENT: [{
                           type: "name",
                           title: "Oră curentă",
                           content: "Afișează ora curentă a sistemului."
                       } ,{
                           type: "name",
                           title: "Fus orar",
                           content: "Selectați fusul orar."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Ora de vară",
               CONTENT: [{
              type: "step",
                            title: "Pentru a seta ora de vară:",
              content:[
                "1. Selectați Ora de vară.",
                "2. Selectați data și ora de <b>început</b> corecte pentru momentul în care intră în vigoare ora de vară în fusul dumneavoastră orar.",
                "3. Selectați data și ora de <b>sfârșit</b> corecte pentru momentul în care se termină ora de vară în fusul dumneavoastră orar.",
                "4. Apăsați butonul Salvare."]},
        {
          type:"name",
          title:"Stare curentă",
          content:"Indică dacă ora curentă este în ora de vară sau nu."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Control LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Controlul LED-ului vă permite să porniți/opriți LED-urile extensiei de acoperire după un orar stabilit."
                       } ,{                      
                           type: "name",
                           title: "Mod noapte",
                           content: "Indică dacă modul de noapte este pornit sau oprit."
                       } ,{                      
                           type: "name",
                           title: "Oră oprire LED",
                           content: "Selectați orarul pentru a opri LED-urile extensiei de acoperire."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Program alimentare",
               CONTENT: [{
                           type: "paragraph",
                           content: "Activați această funcție pentru a opri extensia conform programului stabilit pentru economia de energie."
                       } ,{                      
                           type: "name",
                           title: "Activare program alimentare",
                           content: "Selectați această opțiune pentru a activa Programul de alimentare."
                       } ,{                      
                           type: "name",
                           title: "Oră oprire",
                           content: "Selectați perioada de timp pentru a opri extensia automat."
                       } ,{                      
                           type: "name",
                           title: "Zi(le)",
                           content: "Selectați ziua (zilele) în care extensia să fie oprită."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Upgrade firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versiune firmware",
                           content: "Afișează versiunea firmware curentă."
                       } ,{                      
                           type: "name",
                           title: "Versiune hardware",
                           content: "Afișează versiunea hardware curentă."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANT: Pentru a evita erori în procedura de upgrade, vă rugăm să respectați următoarele condiții:",
       content: [ 
                "1. Versiunea de firmware pentru actualizare trebuie să fie corespunzătoare versiunii hardware a extensiei dumneavoastră.",
                "2. Este foarte important să NU DECONECTAȚI extensia de acoperire de la rețeaua electrică pe toată perioada procedurii de actualizare deoarece orice deconectare de la rețeaua electrică poate duce la defectarea extensiei dumneavoastră."]
} ,{                      
                           type: "step",
                           title: "Pentru actualizarea versiunii firmware:",
       content: [ 
                "1. Descărcați ultima versiune de firmware de pe pagina <a class=\"link\" href=\"http://www.tp-link.ro/Support/\" target=\"_blank\"> Asistență TP-Link </a> în computerul dumneavoastră.",
                "2. Apăsați <strong>Caută</strong> pentru a localiza și selecta fișierul descărcat.",
                "3. Apăsați <strong>Actualizare</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Actualizarea durează câteva minute, iar extensia de acoperire va reporni automat când actualizarea se finalizează."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Salvare setări",
               CONTENT: [{
                           type: "paragraph",
                           content: "Este foarte recomandat să salvați setările curente, în cazul în care este necesar să restaurați setările extensiei de acoperire după o procedură de recuperare."
                       } ,{                      
                           type: "paragraph",
                           content: "Apăsați Salvare setări pentru a salva setările curente în computerul dumneavoastră sub forma unui fișier config.bin. Asigurați-vă că salvați fișierul într-o locație sigură de unde îl puteți recupera când veți avea nevoie de el."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Restaurare",
               CONTENT: [{
                           type: "step",
                           title: "Pentru restaurarea setărilor salvate într-un fișier.",
       content: [ 
                "1. Apăsați Caută pentru a localiza fișierul cu setări.",
                "2. Selectați fișierul cu setări.",
                "3. Apăsați Restaurare.",
                "4. Apăsați <strong>DA</strong> pentru a confirma restaurarea sistemului.",
                "Procesul de restaurare poate dura câteva minute, după care extensia va reporni."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Restaurare setări implicite din fabrică",
               CONTENT: [{
                           type: "paragraph",
                           content: "Apăsați Restaurare setări fabrică pentru a reseta extensia de acoperire la setările din fabrică."
                       } ,{                      
                           type: "note",
                            title: "Notă",
                            content: [
                              "1. Funcția Restaurare setări fabrică va șterge toate setările configurate pentru extender. Pentru a vă autentifica din nou în pagina de management, folosiți contul implicit (admin) pentru utilizator și parola. ",
                              "1. Resetarea la setările din fabrică va șterge toate setările făcute anterior pentru extender. Te rugăm să creezi o parolă pentru viitoarele autentificări.",
                              "2. Vă rugăm să NU opriți alimentarea cu electricitate a echipamentului Range extender în timpul procesului de Salvare sau Restaurare a setărilor."
                            ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Cont administrare",
               CONTENT: [{
                           type: "paragraph",
                           content: "Această pagină vă permite să schimbați Numele și/sau Parola de autentificare la Range Extender."
                       } ,{                      
                           type: "paragraph",
                           content: "În această pagină poți schimba parola de autentificare."
                       } ,{                      
                           type: "name",
                           title: "Nume vechi",
                           content: "Introduceți Numele curent."
                       } ,{                      
                           type: "name",
                           title: "Parolă veche",
                           content: "Introduceți Parola curentă."
                       } ,{                      
                           type: "name",
                           title: "Nume nou",
                           content: "Introduceți un Nume nou."
                       } ,{                      
                           type: "name",
                           title: "Parolă nouă",
                           content: "Introduceți o Parolă nouă."
                       } ,{                      
                           type: "name",
                           title: "Confirmare parolă",
                           content: "Reintroduceți Parola."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Jurnal sistem",
               CONTENT: [{
                           type: "paragraph",
                           content: "Jurnalul de sistem afișează o listă cu cele mai recente activități (evenimente) ale extensiei. Puteți alege tipul de jurnal și/sau nivelul de importanță care doriți să fie afișat."
                       } ,{                      
                           type: "name",
                           title: "Tip",
                           content: "Selectați Tipul jurnalului pe care doriți să îl vizualizați."
                       } ,{                      
                           type: "name",
                           title: "Nivel",
                           content: "Selectați Nivelul jurnalului pe care doriți să îl vizualizați."
                       } ,{                      
                           type: "name",
                           title: "Actualizare",
                           content: "Apăsați acest buton pentru a actualiza jurnalul de sistem."
                       } ,{                      
                           type: "name",
                           title: "Șterge tot",
                           content: "Apăsați acest buton pentru a șterge permanent tot jurnalul."
                       } ,{                      
                           type: "name",
                           title: "Salvare jurnal",
                           content: "Apăsați acest buton pentru a salva jurnalul de sistem sub forma unui fișier .txt."
                       }]
},
    });
})(jQuery);
