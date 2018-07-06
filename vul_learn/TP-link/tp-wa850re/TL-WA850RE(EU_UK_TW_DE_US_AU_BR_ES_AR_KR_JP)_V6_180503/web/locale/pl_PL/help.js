(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP =$.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Ustawienia regionu",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Wybierz z menu kraj, w którym przebywasz. Jeżeli nie ma go na liście, może to oznaczać, że korzystanie z urządzenia bezprzewodowego w twojej lokalizacji podlega obostrzeniom."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Stan",
               CONTENT: [{
                           type: "paragraph",
                           content: "Strona Stan wyświetla panel z informacją o stanie obecnie włączonej sieci. Klikaj poszczególne ikony w celu uzyskania bardziej szczegółowych informacji."
                       } ,{                      
                           type: "title",
                            title: "Wzmacniacz sygnału"
                       } ,{                      
                           type: "paragraph",
                           content: "Wyświetla informacje o rozszerzonej sieci 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Nazwa rozszerzonej sieci (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Kanał",
                           content: "Aktualnie używany kanał sieci bezprzewodowej."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Adres fizyczny MAC wzmacniacza sygnału."
                       } ,{                      
                           type: "name",
                           title: "Serwer DHCP",
                           content: "Wyświetla stan serwera DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adres IP",
                           content: "Adres IP przydzielony klientowi DHCP. "
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Typ adresu IP przydzielonego klientowi DHCP."
                       } ,{                      
                           type: "title",
                            title: "Sieć główna 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Wyświetla informacje o sieci głównej 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Nazwa sieci głównej."
                       } ,{                      
                           type: "name",
                           title: "Sygnał",
                           content: "Siła sygnału sieci głównej."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Adres fizyczny MAC sieci głównej."
                       } ,{                      
                           type: "title",
                            title: "Klienci"
                       } ,{                      
                           type: "paragraph",
                           content: "Wyświetla urządzenie(a) klienckie obecnie połączone z rozszerzoną siecią 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> "
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Rozszerzona sieć 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>, z którą połączone jest urządzenie klienckie. "
                       } ,{                      
                           type: "name",
                           title: "Nazwa urządzenia",
                           content: "Nazwa połączonego urządzenia klienckiego."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Adres fizyczny MAC połączonego urządzenia klienckiego."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Stan",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ta strona wyświetla panel z informacjami o aktualnym stanie sieci. Możesz kliknąć na poszczególne ikony aby uzyskać więcej szczegółów. "
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Stan połączenia z Internetem",
                           content: "Wyświetla stan połączenia z Internetem."
                       } ,{                      
                           type: "title",
                            title: "Punkt dostępowy"
                       } ,{                      
                           type: "name",
                           title: "Serwer DHCP",
                           content: "Wyświetla stan serwera DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adres IP",
                           content: "Wyświetla adres IP przydzielony urządzeniu przez serwer DHCP."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Wyświetla sposób w jaki urządzenie uzyskuje adres IP."
                       } ,{                      
                           type: "title",
                            title: "Klienci bezprzewodowi"
                       } ,{                      
                           type: "name",
                           title: "Nazwa",
                           content: "Wyświetla nazwę urządzenia klienckiego."
                       } ,{                      
                           type: "name",
                           title: "Adres IP",
                           content: "Wyświetla adres IP przydzielony urządzeniu klienckiemu."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Wyświetla adres MAC urządzenia klienckiego."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Ustawienia",
               CONTENT: [{
                           type: "name",
                           title: "Region",
                           content: "Wybierz z menu kraj, w którym przebywasz. Jeżeli nie ma go na liście, może to oznaczać, że korzystanie z urządzenia bezprzewodowego w twojej lokalizacji podlega obostrzeniom."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Sieć bezprzewodowa 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Włącz",
                           content: "Zaznacz tę opcję, aby urządzenie bezprzewodowe pracowało w paśmie 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nazwa sieci bezprzewodowej (SSID)",
                           content: "Zostaw nazwę domyślną lub podaj nazwę o długości do 32 znaków. Wielkość liter ma znaczenie."
                       } ,{                      
                           type: "name",
                           title: "Ukryj nazwę sieci",
                           content: "Zaznacz tę opcję jeśli nie chcesz, aby nazwa sieci 2,4 GHz była wyświetlana na liście dostępnych sieci bezprzewodowych."
                       } ,{                      
                           type: "name",
                           title: "Zabezpieczenia",
                           content: "Wybierz jeden z poniższych typów zabezpieczeń:",
       children: [{                      
                           type: "name",
                           title: "Brak zabezpieczeń",
                           content: "Wybierz tę opcję, aby wyłączyć zabezpieczenia sieci bezprzewodowej. Zalecane jest jednak wybranie jednego z typów zabezpieczeń, aby chronić sieć przed nieautoryzowanym dostępem."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Wybierz tę opcję, aby włączyć standardową metodę uwierzytelniania opartą na kluczu WPA. Jest to opcja zalecana, po jej wyborze skonfiguruj poniższe opcje. ",
       children: [{                      
                           type: "name",
                           title: "Wersja",
                           content: "Wybierz wersję zabezpieczeń swojej sieci bezprzewodowej.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Obsługuje różne implementacje WPA (Wi-Fi Protected Access), w tym WPA i WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Obsługuje tylko szyfrowanie TKIP, zapewniając wysoki poziom bezpieczeństwa."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Obsługuje szyfrowanie AES, zapewniając wyższy poziom bezpieczeństwa niż WPA-PSK. Jest to opcja zalecana."
                       }]
} ,{                      
                           type: "name",
                           title: "Szyfrowanie",
                           content: "Wybierz typ szyfrowania: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) lub Auto (zarówno TKIP, jak i AES). NIE zaleca się korzystania z szyfrowania TKIP, jeśli router pracuje w standardzie 802.11n, ponieważ TKIP nie jest obsługiwane w tym standardzie. Po wybraniu TKIP, funkcja WPS zostanie wyłączona."
                       } ,{                      
                           type: "name",
                           title: "Hasło",
                           content: "Wpisz hasło połączenia bezprzewodowego, używając od 8 do 63 znaków ASCII lub od 8 do 64 znaków szesnastkowych."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Wybierz tę opcję, jeżeli jakiekolwiek z twoich urządzeń bezprzewodowych nie obsługuje opcji WPA. ",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wybierz typ uwierzytelniania dla swojej sieci bezprzewodowej. Domyślnie ustawiona jest funkcja Auto, która umożliwia automatyczny wybór Systemu otwartego oraz Klucza wspólnego, w zależności od wymagań łączącego się urządzenia."
                       } ,{                      
                           type: "name",
                           title: "Format klucza WEP",
                           content: "Możesz wybrać format ASCII lub szesnastkowy. Format ASCII oznacza kombinację dowolnych znaków alfanumerycznych. Szesnastkowy oznacza kombinację określonych znaków alfanumerycznych (0-9, A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klucza",
                           content: "Wybierz długość klucza WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bitowy",
                           content: "Możesz wpisać 10 znaków szesnastkowych (0-9, a-f, A-F) lub 5 znaków ASCII."
                       } ,{                      
                           type: "name",
                           title: "128-bitowy",
                           content: "Możesz wpisać 26 znaków szesnastkowych (0-9, a-f, A-F) lub 13 znaków ASCII."
                       }]
} ,{                      
                           type: "name",
                           title: "Wartość klucza",
                           content: "Wpisz klucz WEP w odpowiedznim polu."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Tryb",
                           content: "Wybierz mieszany tryb transmisji."
                       } ,{                      
                           type: "name",
                           title: "Szerokość kanału",
                           content: "Wybierz szerokość kanału (szerokość pasma) dla sieci bezprzewodowej 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Kanał",
                           content: "Wybierz kanał dla sieci bezprzewodowej 2,4 GHz. Jeżeli problemy z działaniem sieci bezprzewodowej nie występują, zalecane jest pozostawienie tej opcji na ustawieniu Auto."
                       }/* ,{                      
                           type: "name",
                           title: "Moc transmisji",
                           content: "Aby określić moc transmisji danych, wybierz spośród opcji Wysoka, Średnia lub Niska. Domyślnie ustawiona jest Wysoka (zalecane)."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknij Zapisz, aby zapisać ustawienia."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Sieć bezprzewodowa 5 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Włącz",
                           content: "Zaznacz tę opcję, aby urządzenie bezprzewodowe pracowało w paśmie 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nazwa sieci bezprzewodowej (SSID)",
                           content: "Zostaw nazwę domyślną lub wpisz nazwę o długości do 32 znaków. Wielkość liter ma znaczenie."
                       } ,{                      
                           type: "name",
                           title: "Ukryj nazwę sieci",
                           content: "Zaznacz tę opcję jeśli nie chcesz, aby nazwa sieci 5 GHz była wyświetlana na liście dostępnych sieci bezprzewodowych."
                       } ,{                      
                           type: "name",
                           title: "Zabezpieczenia",
                           content: "Wybierz jeden z poniższych typów zabezpieczeń:",
       children: [{                      
                           type: "name",
                           title: "Brak zabezpieczeń",
                           content: "Wybierz tę opcję, aby wyłączyć zabezpieczenia sieci bezprzewodowej. Zalecane jest jednak wybranie jednego z typów zabezpieczeń, aby chronić sieć przed nieautoryzowanym dostępem."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Wybierz tę opcję, aby włączyć standardową metodę uwierzytelniania opartą na kluczu WPA. Jest to opcja zalecana, po jej wyborze skonfiguruj poniższe opcje. ",
       children: [{                      
                           type: "name",
                           title: "Wersja",
                           content: "Wybierz wersję zabezpieczeń swojej sieci bezprzewodowej.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Obsługuje takie standardy WPA (Wi-Fi Protected Access), jak WPA i WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Obsługuje tylko szyfrowanie TKIP, zapewniając wysoki poziom bezpieczeństwa."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Obsługuje szyfrowanie AES, zapewniając wyższy poziom bezpieczeństwa niż WPA-PSK, zaleca się ją włączyć."
                       }]
} ,{                      
                           type: "name",
                           title: "Szyfrowanie",
                           content: "Wybierz typ szyfrowania: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) lub Auto (zarówno TKIP, jak i AES). NIE zaleca się korzystania z szyfrowania TKIP jeśli router pracuje w standardzie 802.11n, ponieważ TKIP nie jest obsługiwane w tym standardzie. Po wybraniu TKIP, funkcja WPS zostanie wyłączona."
                       } ,{                      
                           type: "name",
                           title: "Hasło",
                           content: "Wpisz hasło połączenia bezprzewodowego, używając od 8 do 63 znaków ASCII lub od 8 do 64 znaków szesnastkowych."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Wybierz tę opcję, jeżeli jakiekolwiek z twoich urządzeń bezprzewodowych nie obsługuje opcji WPA. ",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wybierz typ uwierzytelniania dla swojej sieci bezprzewodowej. Domyślnie ustawiona jest funkcja Auto, która umożliwia automatyczny wybór Systemu otwartego oraz Klucza wspólnego, w zależności od wymagań łączącego się urządzenia."
                       } ,{                      
                           type: "name",
                           title: "Format klucza WEP",
                           content: "Możesz wybrać format ASCII lub szesnastkowy. Format ASCII oznacza kombinację dowolnych znaków alfanumerycznych. Szesnastkowy oznacza kombinację określonych znaków alfanumerycznych (0-9, A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klucza",
                           content: "Wybierz długość klucza WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bitowy",
                           content: "Możesz wprowadzić 10 znaków szesnastkowych (0-9, a-f, A-F) lub 5 znaków ASCII."
                       } ,{                      
                           type: "name",
                           title: "128-bitowy",
                           content: "Możesz wprowadzić 26 znaków szesnastkowych (0-9, a-f, A-F) lub 13 znaków ASCII."
                       }]
} ,{                      
                           type: "name",
                           title: "Wartość klucza",
                           content: "Wpisz klucz WEP w odpowiednie pole."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Tryb",
                           content: "Wybierz mieszany tryb transmisji."
                       } ,{                      
                           type: "name",
                           title: "Szerokość kanału",
                           content: "Wybierz szerokość kanału (szerokość pasma) dla sieci bezprzewodowej 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Kanał",
                           content: "Wybierz kanał dla sieci bezprzewodowej 5 GHz. Jeżeli problemy z działaniem sieci bezprzewodowej nie występują, zalecane jest pozostawienie tej opcji na ustawieniu Auto."
                       }/* ,{                      
                           type: "name",
                           title: "Moc transmisji",
                           content: "Aby określić moc transmisji danych, wybierz spośród opcji Wysoka, Średnia lub Niska. Domyślnie ustawiona jest Wysoka (zalecane)."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Kliknij Zapisz, aby zapisać ustawienia."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Włącz WPS",
                           content: "Inne urządzenia mogą połączyć się z punktem dostępowym za pomocą kodu PIN."
                       }]
},
       WPS :{ 
               TITLE:"PIN routera",
               CONTENT: [{
                           type: "name",
                           title: "Włącz PIN",
                           content: "Aktywuj tę funkcję, aby urządzenia łączyły się z punktem dostępowym przy użyciu kodu PIN."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Wyświetla kod PIN wzmacniacza. Domyślny kod PIN znajduje się na naklejce u spodu urządzenia. Kliknij przycisk Generuj, aby wylosować nowy kod PIN lub przycisk Domyślny, aby przywrócić domyślny kod PIN."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Kreator konfiguracji WPS",
               CONTENT: [{
                           type: "name",
                           title: "Za pomocą przycisku (zalecane)",
                           content: "Wybierz tę metodę konfiguracji, aby za pomocą funkcji WPS umożliwić urządzeniom obsługującym tę funkcję łatwe nawiązywanie połączeń z siecią bezprzewodową, jedynie poprzez naciśnięcie przycisku WPS lub kliknięcie przycisku Połącz."
                       } ,{                      
                           type: "name",
                           title: "Kod PIN",
                           content: "Wybierz tę metodę konfiguracji, aby dodać urządzenie ręcznie, wpisując numer PIN WPS urządzenia bezprzewodowego, a następnie klikając przycisk Połącz."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Połącz z siecią główną",
               CONTENT: [{
                           type: "name",
                           title: "Połącz z siecią 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Włącz lub wyłącz, aby nawiązać połączenie pomiędzy wzmacniaczem a obecnie włączoną siecią 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Wyszukaj sieć bezprzewodową",
                           content: "Kliknij ten przycisk, aby wyszukać i wyświetlić wszystkie dostępne sieci bezprzewodowe, znajdujące się w zasięgu wzmacniacza. Po wybraniu sieci, jej nazwa oraz ustawienia zabezpieczeń uzupełnią się automatycznie."
                       } ,{                      
                           type: "name",
                           title: "Nazwa sieci głównej 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Wpisz nazwę sieci głównej, z którą połączy się wzmacniacz, z uwzględnieniem wielkości liter lub kliknij <strong>Wyszukaj sieć bezprzewodową</strong> i wybierz jedną z listy."
                       } ,{                      
                           type: "name",
                           title: "Zabezpieczenia sieci głównej 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Wybierz jeden z rodzajów zabezpieczeń sieci głównej."
                       } ,{                      
                           type: "name",
                           title: "Brak zabezpieczeń",
                           content: "Opcja ta wyłącza zabezpieczenia sieci bezprzewodowej. Wszyscy klienci bezprzewodowi będą mogi połączyć się z siecią bez konieczności podawania hasła."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Obsługuje tylko szyfrowanie TKIP, zapewniając wysoki poziom bezpieczeństwa."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Obsługuje szyfrowanie AES, zapewniając wyższy poziom bezpieczeństwa niż WPA-PSK, zaleca się ją włączyć."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Obsługuje takie standardy WPA (Wi-Fi Protected Access), jak WPA i WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Opcja ta zapewnia jedynie podstawowy rodzaj zabezpieczeń. Ma ona zastosowanie jeśli urządzenia klienckie mają możliwość uzyskania dostępu do sieci bezprzewodowej tylko za pomocą WEP."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Ustawienia sieci rozszerzonej",
               CONTENT: [{
                           type: "name",
                           title: "Rozszerzona sieć 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Włącz lub wyłącz funkcję połączenia bezprzewodowego 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> dla wzmacniacza sygnału."
                       } ,{                      
                           type: "name",
                           title: "Nazwa rozszerzonej sieci 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Kliknij przycisk <strong>Kopiuj nazwę urządzenia głównego</strong>, aby automatycznie skopiować nazwę głównego routera/punktu dostępowego lub wpisz nową nazwę (do 32 znaków). Wielkość liter ma znaczenie."
                       } ,{                      
                           type: "name",
                           title: "Kopiuj nazwę sieci głównej",
                           content: "Kliknij ten przycisk, aby skopiować nazwę sieci głównej i ustawienia jej zabezpieczeń oraz automatycznie uzupełnić niezbędne dane."
                       } ,{                      
                           type: "name",
                           title: "Ukryj nazwę sieci",
                           content: "Zaznacz tę opcję, jeśli nie chcesz, aby nazwa rozszerzonej sieci 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> wyświetlała się na liście dostępnych sieci bezprzewodowych."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Kontrola dostępu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkcja kontroli dostępu służy udzielaniu lub blokowaniu dostępu do sieci komputerom i innym urządzeniom. Zablokowane urządzenie nie będzie mogło połączyć się z rozszerzoną siecią."
                       } ,{                      
                           type: "paragraph",
                           content: "Aby korzystać z funkcji kontroli dostępu, włącz ją, a następnie ustal czarną i białą listę. Jeśli funkcja ta jest wyłączona, wszystkie urządzenia, łącznie z wyszczególnionymi na czarnej liście, mogą nawiązać połączenie."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Tryb dostępu",
               CONTENT: [{
                           type: "name",
                           title: "Czarna lista",
                           content: "Dostępu do sieci NIE mają jedynie urządzenia znajdujące się na czarnej liście."
                       } ,{                      
                           type: "name",
                           title: "Biała lista",
                           content: "Dostęp do sieci mają tylko urządzenia znajdujące się na białej liście."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Aktywne urządzenia",
               CONTENT: [{
                           type: "name",
                           title: "Nazwa urządzenia",
                           content: "Wyświetla nazwę połączonego urządzenia."
                       } ,{                      
                           type: "name",
                           title: "Adres IP",
                           content: "Wyświetla adres IP połączonego urządzenia."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Wyświetla adres MAC połączonego urządzenia."
                       } ,{                      
                           type: "name",
                           title: "Typ połączenia",
                           content: "Wyświetla typ połączenia, stosowany przez urządzenie."
                       } ,{                      
                           type: "step",
                           title: "Aby zablokować urządzenie",
                           content: "W tabeli Aktywne urządzenia w kolumnie Edytuj kliknij ikonę Blokuj, znajdującą się przy urządzeniu, które chcesz zablokować."
                       } ,{                      
                           type: "step",
                           title: "Aby zablokować jednocześnie kilka urządzeń",
                           content: "W tabeli Aktywne urządzenia zaznacz wszystkie urządzenia, które chcesz zablokować i kliknij przycisk Blokuj, znajdujący się nad tabelą. Urządzenie zostanie automatycznie dodane do czarnej lub białej listy."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Urządzenia na czarnej/białej liście",
               CONTENT: [{
                           type: "step",
                           title: "Aby dodać urządzenie do czarnej lub białej listy",
       content: [ 
                "1. Kliknij ikonę Dodaj.",
                "2. Wpisz nazwę urządzenia.",
                "3. Wpisz adres MAC urządzenia.",
                "4. Wybierz rodzaj czasu obowiązywania. Jeśli wybierzesz <b>Nie może się łączyć zgodnie z harmonogramem lub Może się łączyć zgodnie z harmonogramem</b>, ustaw godziny i dni.",
                "5. Kliknij OK."]
} ,{                      
                           type: "step",
                           title: "Aby zmienić lub usunąć urządzenie",
                           content: "Kliknij ikonę Edytuj lub Usuń w tabeli Czarna/Biała lista, aby zmienić lub skasować odpowiedni wpis. "
                       } ,{                      
                           type: "step",
                           title: "Aby zmienić lub usunąć wiele urządzeń",
                           content: "W tabeli Czarna/Biała lista zaznacz wszystkie urządzenia, które chcesz usunąć, a następnie kliknij przycisk Usuń, znajdujący się nad listą."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Port Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Sieć główna dla portu Ethernet",
                           content: "Wybierz pasmo (2,4 GHz lub 5 GHz) głównej sieci bezprzewodowej, w którym przesyłane są dane pomiędzy klientem przewodowym a klientami bezprzewodowymi.<br/> Korzystanie z tej opcji jest możliwe jedynie, gdy oba pasma (2,4 GHz i 5 GHz) są włączone."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Ustawienia sieci",
               CONTENT: [{
                           type: "name",
                           title: "Pobierz adres IP automatycznie",
                           content: "Wybierz tę opcję, jeśli chcesz, aby klienci bezprzewodowi pobierali dane dotyczące adresu IP i bramy domyślnej automatycznie z routera głównego/punktu dostępowego lub ze wzmacniacza sygnału (zalecane)."
                       } ,{                      
                           type: "name",
                           title: "Użyj poniższego adresu IP",
                           content: "Wybierz tę opcję, jeśli chcesz, aby wzmacniacz sygnału korzystał z wybranych przez ciebie adresów IP oraz bramy domyślnej."
                       } ,{                      
                           type: "name",
                           title: "Adres IP",
                           content: "Wpisz adres IP w formacie dziesiętnym (domyślnie 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Maska podsieci",
                           content: "Wpisz maskę podsieci w formacie dziesiętnym, określając tym samym wielkość sieci (domyślnie 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Brama domyślna",
                           content: "Wpisz adres bramy domyślnej w formacie dziesiętnym, znajdujący się w tej samej podsieci co adres IP. Zwykle jest on taki sam jak adres IP LAN routera."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Ustawienia serwera DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Domyślnie wzmacniacz sygnału ma włączoną funkcję serwera DHCP, aby mieć możliwość przydzielenia parametrów TCP/IP z puli adresów IP wszystkim klientom połączonym ze wzmacniaczem w sieci LAN."
                       } ,{                      
                           type: "name",
                           title: "Serwer DHCP",
                           content: "Domyślnie ustawiona jest funkcja Auto; serwer DHCP automatycznie przypisuje klientowi adres IP. Funkcja serwera DHCP może być włączona lub wyłączona. Zanim wyłączysz tę funkcję, upewnij się, że inny serwer DHCP jest uruchomiony w twojej sieci LAN; w innym przypadku wiąże się to z koniecznością ręcznego przydzielania adresu IP każdemu klientowi."
                       } ,{                      
                           type: "name",
                           title: "Pula adresów IP",
                           content: "Wpisz zakres adresów IP, w ramach którego będą one przydzielane klientom. Domyślnie początkowym adresem IP jest 192.168.0.100, a końcowym 192.168.0.199. "
                       } ,{                      
                           type: "name",
                           title: "Czas przydzielenia adresu",
                           content: "Wpisz okres (od 1 do 2880 minut), na jaki przydzielany będzie adres IP. Domyślna wartość to 1 minuta."
                       } ,{                      
                           type: "name",
                           title: "Brama domyślna",
                           content: "<br/>Wpisz adres IP LAN wzmacniacza. Domyślna wartość to 192.168.0.254. (Opcjonalnie)"
                       } ,{                      
                           type: "name",
                           title: "Preferowany DNS",
                           content: "Wpisz adres IP serwera DNS otrzymany od dostawcy. (Opcjonalnie)"
                       } ,{                      
                           type: "name",
                           title: "Alternatywny DNS",
                           content: "Wpisz poniższe parametry otrzymane od dostawcy. (Opcjonalnie)"
                       } ,{                      
                           type: "note",
                           title: "Uwaga",
                           content: "Aby korzystać z funkcji serwera DHCP wzmacniacza sygnału, wszyscy klienci w sieci LAN muszą mieć ustawione automatyczne przydzielanie adresu IP."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknij <strong>Zapisz</strong>, aby zapisać zmianę ustawień."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Rezerwacja adresów",
               CONTENT: [{
                           type: "paragraph",
                           content: "Adres IP dla klienta połączonego ze wzmacniaczem możesz zarezerwować ręcznie. Od tej pory adres ten przydzielany będzie tylko danemu klientowi."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Wyświetla adres MAC klienta."
                       } ,{                      
                           type: "name",
                           title: "Zarezerwowany adres IP",
                           content: "Wyświetla adres IP zarezerwowany dla klienta."
                       } ,{                      
                           type: "name",
                           title: "Opis",
                           content: "Wyświetla opis klienta."
                       } ,{                      
                           type: "name",
                           title: "Stan",
                           content: "Wyświetla aktualny stan klienta (włączony lub wyłączony)."
                       } ,{                      
                           type: "name",
                           title: "Zmień",
                           content: "Wyświetla opcje edycji lub usunięcia odpowiedniego klienta."
                       } ,{                      
                           type: "step",
                           title: "Aby zarezerwować adres IP",
       content: [ 
                "1. Kliknij przycisk Dodaj.",
                "2. Wpisz adres MAC klienta.",
                "3. Wpisz adres IP, który chcesz zarezerwować dla klienta.",
                "4. Wpisz opis dla klienta.",
                "5. Zaznacz opcję Włącz.",
                "6. Kliknij przycisk OK."]
} ,{                      
                           type: "step",
                           title: "Aby edytować lub usunąć istniejącego klienta",
                           content: "Kliknij ikonę Edycji lub Kosza przy wpisie w tabeli, który chcesz edytować lub usunąć."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Lista klientów DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wyświetla informacje na temat każdego klienta DHCP połączonego ze wzmacniaczem sygnału."
                       } ,{                      
                           type: "name",
                           title: "Numer klienta",
                           content: "Wyświetla liczbę klientów serwera DHCP."
                       } ,{                      
                           type: "name",
                           title: "Nazwa klienta",
                           content: "Nazwa klienta DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adres MAC",
                           content: "Adres MAC klienta DHCP."
                       } ,{                      
                           type: "name",
                           title: "Przydzielone IP",
                           content: "Adres IP przydzielony klientowi DHCP."
                       } ,{                      
                           type: "name",
                           title: "Czas przydzielenia",
                           content: "Wyświetla czas, na jaki adres IP przydzielany jest klientowi DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Odśwież</strong> - Kliknij ten przycisk, aby zaktualizować listę klientów DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Zasięg Wi-Fi",
               CONTENT: [{
							type:"paragraph",
                           content: "Wybierz poziom zasięgu Wi-Fi wzmacniacza sygnału."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Ustawienia czasu",
               CONTENT: [{
                           type: "name",
                           title: "Bieżący czas",
                           content: "Wyświetl bieżący czas systemowy."
                       },{
                           type: "name",
                           title: "Strefa czasowa",
                           content: "Wybierz swoją strefę czasową."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Czas letni",
               CONTENT: [{
							type:"step",
                            title: "Aby ustawić czas letni:",
							content:[
                "1. Wybierz Czas letni.",
                "2. Wybierz właściwą datę i godzinę rozpoczęcia obowiązywania czasu letniego w Twojej strefie czasowej (<b>Początek</b>).",
                "3. Wybierz właściwą datę i godzinę zakończenia obowiązywania czasu letniego w Twojej strefie czasowej (<b>Koniec</b>).",
                "4. Kliknij Zapisz."]
                       },{
							type:"name",
							title:"Bieżący stan",
							content:"Wskazuje, czy obecny czas jest podawany zgodnie z czasem letnim."
					   }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Sterowanie diodami",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkcja sterowania diodami umożliwia włączanie i wyłączanie diod wzmacniacza sygnału zgodnie z ustalonym harmonogramem. "
                       } ,{                      
                           type: "name",
                           title: "Tryb nocny",
                           content: "Informuje czy tryb nocny jest włączony, czy też wyłączony."
                       } ,{                      
                           type: "name",
                           title: "Wyłączanie diod",
                           content: "Ustal harmonogram wyłączania diod."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"Harmonogram zasilania",
               CONTENT: [{
                           type: "paragraph",
                           content: "Włącz tę funkcję, by wyłączać wzmacniacz zgodnie z harmonogramem. Pozwala to oszczędzić energię."
                       } ,{                      
                           type: "name",
                           title: "Włącz harmonogram zasilania",
                           content: "Wybierz tę opcję, by włączyć Harmonogram zasilania."
                       } ,{                      
                           type: "name",
                           title: "Czas wyłączenia",
                           content: "Wybierz okres, w którym wzmacniacz będzie automatycznie wyłączany."
                       } ,{                      
                           type: "name",
                           title: "Dni",
                           content: "Wybierz dni, w które wzmacniacz będzie wyłączany."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Aktualizacja firmware",
               CONTENT: [{
                           type: "name",
                           title: "Wersja firmware",
                           content: "Wyświetla informacje na temat zainstalowanej wersji firmware."
                       } ,{                      
                           type: "name",
                           title: "Wersja sprzętowa",
                           content: "Wyświetla aktualną wersję sprzętową."
                       } ,{                      
                           type: "step",
                           title: "UWAGA: Aby zapobiec problemom podczas aktualizacji, pamiętaj o tych kwestiach:",
       content: [ 
                "1. Plik z aktualizacją firmware musi być zgodny z wersją sprzętową wzmacniacza.",
                "2. Upewnij się, że wzmacniacz sygnału podłączony jest do zasilania podczas procesu aktualizacji, gdyż wszelkie zaniki zasilania mogą uszkodzić urządzenie. "]
} ,{                      
                           type: "step",
                           title: "Aby zaktualizować oprogramowanie wzmacniacza:",
       content: [ 
                "1. Pobierz najnowszą wersję oprogramowania ze strony <a class=\"link\" href=\"http://www.tp-link.com.pl/Support/\" target=\"_blank\">Wsparcia TP-Link</a>.",
                "2. Kliknij <strong>Przeglądaj</strong>, aby znaleźć i wybrać pobrany plik.",
                "3. Kliknij <strong>Aktualizuj</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Po trwającym kilka minut procesie aktualizacji, wzmacniacz sygnału automatycznie uruchomi się ponownie."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Zapisz ustawienia",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zaleca się zapisać swoje aktualne ustawienia na wypadek ich utraty lub konieczności przywrócenia ustawień fabrycznych."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknij Zapisz, aby zapisać aktualne ustawienia na komputerze w formie pliku config.bin. Pamiętaj, aby zapisać plik w miejscu, z którego można go później pobrać i przywrócić ustawienia routera."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Przywróć ustawienia",
               CONTENT: [{
                           type: "step",
                           title: "Aby przywrócić zapisane ustawienia:",
       content: [ 
                "1. Kliknij Przeglądaj, aby zlokalizować plik z zapisanymi ustawieniami.",
                "2. Wybierz odpowiedni plik z listy.",
                "3. Kliknij Przywróć.",
                "4. Kliknij <strong>Tak</strong>, aby potwierdzić przywrócenie ustawień systemu.",
                "Przywracanie ustawień może potrwać kilka minut. Po ukończeniu procesu wzmacniacz automatycznie uruchomi się ponownie."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Przywróć ustawienia fabryczne",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kliknij Ustawienia fabryczne, aby przywrócić ustawienia fabryczne wzmacniacza sygnału."
                       } ,{                      
                           type: "note",
                            title: "Uwaga",
              							content: [
              								"1. Przywrócenie ustawień fabrycznych spowoduje utratę wszystkich wprowadzonych ustawień. Aby zalogować się na stronę konfiguracyjną wzmacniacza, użyj domyślnych danych logowania (admin).",
              								"1. Przywrócenie ustawień fabrycznych spowoduje usunięcie wszystkich ustawień wzmacniacza. Utwórz hasło, potrzebne przy kolejnych próbach logowania. ",
              								"2. NIE wyłączaj wzmacniacza podczas procesu przywracania ustawień."
              							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Konto administratora",
               CONTENT: [{
                           type: "paragraph",
                           content: "Na tej stronie możesz zmienić nazwę użytkownika i/lub hasło logowania."
                       } ,{                      
                           type: "paragraph",
                           content: "Na tej stronie możesz zmienić swoje hasło logowania."
                       } ,{                      
                           type: "name",
                           title: "Aktualna nazwa użytkownika",
                           content: "Wpisz aktualną nazwę użytkownika."
                       } ,{                      
                           type: "name",
                           title: "Aktualne hasło",
                           content: "Wpisz aktualne hasło."
                       } ,{                      
                           type: "name",
                           title: "Nowa nazwa użytkownika",
                           content: "Wpisz nową nazwę użytkownika."
                       } ,{                      
                           type: "name",
                           title: "Nowe hasło",
                           content: "Wpisz nowe hasło."
                       } ,{                      
                           type: "name",
                           title: "Potwierdź nowe hasło",
                           content: "Ponownie wpisz nowe hasło."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Dziennik systemowy",
               CONTENT: [{
                           type: "paragraph",
                           content: "Strona Dziennik systemowy zawiera listę ostatnio wykonywanych operacji na wzmacniaczu. Możesz określić wyświetlany typ dzienników i/lub ich poziom."
                       } ,{                      
                           type: "name",
                           title: "Typ",
                           content: "Wybierz wyświetlany typ dziennika systemowego."
                       } ,{                      
                           type: "name",
                           title: "Poziom",
                           content: "Wybierz wyświetlany poziom dziennika systemowego."
                       } ,{                      
                           type: "name",
                           title: "Odśwież",
                           content: "Kliknij ten przycisk, aby zaktualizować dziennik systemowy."
                       } ,{                      
                           type: "name",
                           title: "Usuń",
                           content: "Kliknij ten przycisk, aby trwale usunąć wszystkie dzienniki systemowe."
                       } ,{                      
                           type: "name",
                           title: "Zapisz dziennik",
                           content: "Kliknij ten przycisk, aby dziennik systemowy zapisać do pliku w formacie .txt."
                       }]
}
    });
})(jQuery);
