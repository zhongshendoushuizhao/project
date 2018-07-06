(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Impostazioni area geografica",
               CONTENT: [{
                           type: "name",
                           title: "Area geografica",
                           content: "Selezionare l'Area geografica dal menu a discesa. Se il paese o l'area geografica non appaiono nell'elenco, è possibile che in quella località il wireless non sia utilizzabile."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Stato",
               CONTENT: [{
                           type: "paragraph",
                           content: "La pagina di Stato Base visualizza una dashboard con le informazioni e lo stato corrente della rete. Fare clic su ogni icona per visualizzare informazioni più dettagliate. "
                       } ,{                      
                           type: "title",
                            title: "Range Extender"
                       } ,{                      
                           type: "paragraph",
                           content: "Visualizza le informazioni sulla rete estesa 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Il nome di rete estesa (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canale",
                           content: "Il canale wireless usato attualmente."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "L'indirizzo MAC fisico del range extender."
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Visualizza lo stato del server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP",
                           content: "L'indirizzo IP assegnato al client dal server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Il tipo di indirizzo IP assegnato dal server DHCP."
                       } ,{                      
                           type: "title",
                            title: "Rete host 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Visualizza le seguenti informazioni della rete host 2,4<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "L'SSID della rete host."
                       } ,{                      
                           type: "name",
                           title: "Segnale",
                           content: "La potenza del segnale della rete host."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "L'indirizzo MAC fisico della rete host."
                       } ,{                      
                           type: "title",
                            title: "Client"
                       } ,{                      
                           type: "paragraph",
                           content: "Visualizza i dispositivi client attualmente connessi all'extender 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>. "
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "La rete estesa 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> del dispositivo client connesso."
                       } ,{                      
                           type: "name",
                           title: "Nome dispositivo",
                           content: "Il nome del dispositivo client connesso."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "L'indirizzo MAC fisico del dispositivo client connesso."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Stato",
               CONTENT: [{
                           type: "paragraph",
                           content: "La pagina Stato mostra lo stato e le informazioni correnti della rete. Fare clic su ogni icona per ottenere maggiori dettagli."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Stato Internet",
                           content: "Visualizza lo stato corrente della connessione Internet del dispositivo."
                       } ,{                      
                           type: "title",
                            title: "Punto di accesso"
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Visualizza lo stato del server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP ",
                           content: "Visualizza l'indirizzo IP assegnato dal server DHCP al punto di accesso."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Visualizza il metodo usato dal punto di accesso per ottenere l'indirizzo IP."
                       } ,{                      
                           type: "title",
                            title: "Client wireless"
                       } ,{                      
                           type: "name",
                           title: "Nome",
                           content: "Visualizza il nome dei dispositivi client."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP ",
                           content: "Visualizza l'indirizzo IP assegnato ai dispositivi client."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "Visualizza  l'indirizzo MAC fisico dei dispositivi client."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Impostazioni",
               CONTENT: [{
                           type: "name",
                           title: "Area geografica",
                           content: "Selezionare l'Area geografica dal menu a discesa. Se il paese o l'area geografica non appaiono nell'elenco, è possibile che in quella località il wireless non sia utilizzabile."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wireless 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Abilita radio wireless",
                           content: "Selezionare questa casella di controllo per abilitare la frequenza radio wireless 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "È possibile lasciare il nome predefinito della rete (SSID) o inserire un nuovo nome (fino a 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionare questa casella di controllo se si desidera nascondere il nome della rete 2,4 GHz (SSID) dall'elenco delle reti Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Selezionare una delle seguenti opzioni di sicurezza:",
       children: [{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "Selezionare questa opzione per disabilitare la sicurezza wireless. Si consiglia vivamente di abilitare la sicurezza wireless per proteggere la rete wireless da accessi non autorizzati."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selezionare questa opzione per abilitare il metodo di autenticazione standard basato sull'utilizzo di una chiave precondivisa (PSK), detta anche passphrase. Opzione consigliata. Se viene selezionata, configurare quanto segue.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionare una versione di sicurezza per la rete wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Questa opzione supporta implementazioni multiple dello standard WPA (Wi-Fi Protected Access), come WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Questa opzione supporta solo la crittografia TKIP, che offre un buon livello di sicurezza."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Questa opzione (consigliata) supporta la crittografia AES, che offre un miglior livello di sicurezza rispetto a WPA-PSK."
                       }]
} ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionare un tipo di crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Auto (sia TKIP che AES). Si consiglia di NON usare la crittografia TKIP se l'extender opera in modalità 802.11n, perchè TKIP non è supportato dalle specifiche 802.11n. Se si seleziona TKIP, la funzione WPS verrà disabilitata."
                       } ,{                      
                           type: "name",
                           title: "Password",
                           content: "Inserire in questo campo una password wireless composta di 8-63 caratteri ASCII o 8-64 caratteri esadecimali."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selezionare questa opzione per abilitare il metodo di autenticazione di base se uno dei dispositivi client può accedere alla rete wireless solo utilizzando il protocollo WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selezionare un tipo di autenticazione per la rete wireless.  L'impostazione predefinita è Auto e sceglie automaticamente tra Sistema aperto o chiave condivisa, in base alla capacità e alla richiesta di accesso del client wireless."
                       } ,{                      
                           type: "name",
                           title: "Formato chiave WEP",
                           content: "Utilizzare il formato ASCII o selezionare Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo di chiave",
                           content: "Selezionare la lunghezza della chiave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bit",
                           content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bit",
                           content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valore chiave",
                           content: "Inserire la chiave WEP nel rispettivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modalità",
                           content: "Selezionare una modalità di trasmissione mista."
                       } ,{                      
                           type: "name",
                           title: "Larghezza canale",
                           content: "Selezionare una larghezza canale (bandwidth) per la rete wireless 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Canale",
                           content: "Selezionare un canale operativo per la rete wireless 2,4 GHz.  Se non si verificano problemi di stabilità wireless, si consiglia di lasciare l'impostazione Auto."
                       } /*,{                      
                           type: "name",
                           title: "Potenza di trasmissione",
                           content: "Selezionare Alta, Media o Bassa per specificare la potenza di trasmissione.  L'impostazione predefinita è Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare tutte le impostazioni."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wireless 5 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Abilita radio wireless",
                           content: "Selezionare questa casella di controllo per abilitare la frequenza radio wireless 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "È possibile lasciare il nome predefinito della rete (SSID) o inserire un nuovo nome (fino a 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionare questa casella di controllo se si desidera nascondere il nome della rete 5GHz (SSID) nell'elenco delle reti Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Selezionare una delle seguenti opzioni di sicurezza:",
       children: [{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "Selezionare questa opzione per disabilitare la sicurezza wireless. Si consiglia vivamente di attivare la sicurezza wireless per proteggere la rete wireless da accessi non autorizzati."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selezionare questa opzione per abilitare il metodo di autenticazione standard basato sull'utilizzo di una chiave precondivisa (PSK), detta anche passphrase. Opzione consigliata. Se viene selezionata, configurare quanto segue.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionare una versione di sicurezza per la rete wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Questa opzione supporta implementazioni multiple dello standard WPA (Wi-Fi Protected Access), come WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Questa opzione supporta solo la crittografia TKIP, che offre un buon livello di sicurezza."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Questa opzione (consigliata) supporta la crittografia AES che garantisce un miglior livello di sicurezza rispetto a WPA-PSK."
                       }]
} ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionare una crittografia di sicurezza: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard) o Auto (sia TKIP che AES). Si consiglia di NON usare la crittografia TKIP se l'extender opera in modalità 802.11n, perchè TKIP non è supportato dalle specifiche 802.11n. Se si seleziona TKIP, la funzione WPS verrà disabilitata."
                       } ,{                      
                           type: "name",
                           title: "Password",
                           content: "Inserire in questo campo una password wireless composta di 8-63 caratteri ASCII o 8-64 caratteri esadecimali."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selezionare questa opzione per abilitare il metodo di autenticazione di base se uno dei dispositivi client può accedere alla rete wireless solo utilizzando il protocollo WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selezionare un tipo di autenticazione per la rete wireless.  Il valore predefinito è Auto e sceglie automaticamente tra Sistema aperto o Chiave condivisa in base alla capacità e alla richiesta di accesso del client wireless."
                       } ,{                      
                           type: "name",
                           title: "Formato chiave WEP",
                           content: "Utilizzare il formato ASCII o selezionare Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo di chiave",
                           content: "Selezionare la lunghezza della chiave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bit",
                           content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bit",
                           content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valore chiave",
                           content: "Inserire la chiave WEP nel rispettivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modalità",
                           content: "Selezionare una modalità di trasmissione mista."
                       } ,{                      
                           type: "name",
                           title: "Larghezza canale",
                           content: "Selezionare una larghezza canale (bandwidth) per la rete wireless 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Canale",
                           content: "Selezionare un canale operativo per la rete wireless 5GHz.  Se non si verificano problemi di stabilità wireless, si consiglia di lasciare l'impostazione Auto."
                       } /*,{                      
                           type: "name",
                           title: "Potenza di trasmissione",
                           content: "Selezionare Alta, Media o Bassa per specificare la potenza di trasmissione.  L'impostazione predefinita è Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare tutte le impostazioni."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Abilita WPS",
                           content: "Altri dispositivi possono connettersi a questo punto di accesso (AP) tramite WPS con il PIN dell'AP."
                       }]
},
       WPS :{ 
               TITLE:"Codice PIN",
               CONTENT: [{
                           type: "name",
                           title: "PIN AP",
                           content: "Spostate su On per permettere ai dispositivi wireless di connettersi all'AP usando il PIN (Personal Identification Number) dell'AP."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Visualizza il PIN dell'AP. Il PIN predefinito è indicato sull'etichetta dell'AP. Fare clic su Genera per generare un nuovo PIN casuale o su Predefinito per ripristinare il PIN predefinito di fabbrica."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Procedura guidata WPS",
               CONTENT: [{
                           type: "name",
                           title: "Pulsante WPS (consigliata)",
                           content: "Selezionare questo metodo di connessione per abilitare il WPS e connettere facilmente alla rete wireless qualsiasi dispositivo con WPS abilitato, usando il tasto WPS o, virtualmente,  con il pulsante Connetti."
                       } ,{                      
                           type: "name",
                           title: "Codice PIN",
                           content: "Selezionare questo metodo di connessione per aggiungere manualmente un dispositivo inserendo nel campo il PIN WPS del dispositivo wireless e facendo clic su Connetti."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Connessione alla rete host",
               CONTENT: [{
                           type: "name",
                           title: "Eseguire la connessione alla rete 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> ",
                           content: "Abilitare o disabilitare la connessione dell'extender a una rete 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> esistente."
                       } ,{                      
                           type: "name",
                           title: "Scanner wireless",
                           content: "Fare clic sul pulsante per eseguire l'analisi e visualizzare tutte le reti Wi-Fi disponibili nel raggio di copertura dell'extender. Una volta selezionata una rete, le impostazioni SSID e sicurezza della rete saranno popolate automaticamente."
                       } ,{                      
                           type: "name",
                           title: "SSID host 2,4GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Inserire l'SSID della rete host a cui sarà connesso l'extender rispettando la distinzione tra maiuscole e minuscole, o fare clic su <strong>Scanner wireless</strong> e selezionare una rete Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza host 2,4GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Selezionare una delle opzioni di sicurezza per la rete host."
                       } ,{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "L'opzione disabilita la sicurezza wireless."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Questa opzione supporta solo la crittografia TKIP (Temporal Key Integrity Protocol), che offre un buon livello di sicurezza. "
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Questa opzione (consigliata) supporta la crittografia AES (Advanced encryption), che garantisce un miglior livello di sicurezza rispetto a WPA-PSK."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Questa opzione supporta implementazioni multiple dello standard WPA (Wi-Fi Protected Access), come WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Questa opzione è la forma più elementare di sicurezza wireless, utilizzabile dai dispositivi client che possono accedere al wireless solo utilizzando il protocollo WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Impostazioni di rete estesa",
               CONTENT: [{
                           type: "name",
                           title: "Estesa 2,4GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Abilitare o disabilitare la funzione wireless 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> del range extender."
                       } ,{                      
                           type: "name",
                           title: "SSID esteso 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Utilizzare il pulsante <strong>Copia SSID host</strong> per copiare automaticamente l'SSID del router principale/AP o inserire un nuovo nome (massimo 32 caratteri). Il campo fa distinzione tra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Copia SSID host",
                           content: "Fare clic sul pulsante per copiare e popolare automaticamente i campi delle impostazioni SSID e di sicurezza della rete host."
                       } ,{                      
                           type: "name",
                           title: "Nascondi broadcast SSID",
                           content: "Selezionare la casella se si desidera nascondere SSID 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> nell'elenco delle reti Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Controllo accesso",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il Controllo accesso viene usato per autorizzare o bloccare l'accesso alla rete estesa da parte di computer specifici e altri dispositivi. Un dispositivo bloccato non può connettersi alla rete estesa."
                       } ,{                      
                           type: "paragraph",
                           content: "Per utilizzare Controllo accesso, abilitare la funzione e specificare un elenco elementi consentiti o un elenco elementi bloccati. Se il Controllo accesso è disabilitato (Off), possono connettersi tutti i dispositivi, anche quelli presenti nell'elenco elementi bloccati."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Modalità accesso",
               CONTENT: [{
                           type: "name",
                           title: "Elenco elementi bloccati",
                           content: "Solo i dispositivi presenti nell'Elenco elementi bloccati NON possono accedere alla rete."
                       } ,{                      
                           type: "name",
                           title: "Elenco elementi consentiti",
                           content: "I dispositivi presenti nell'Elenco elementi consentiti sono gli unici autorizzati ad accedere alla rete. "
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivi online",
               CONTENT: [{
                           type: "name",
                           title: "Nome dispositivo",
                           content: "Visualizza il nome del dispositivo connesso."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP",
                           content: "Visualizza l'indirizzo IP del dispositivo connesso."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "Visualizza l'indirizzo MAC del dispositivo connesso."
                       } ,{                      
                           type: "name",
                           title: "Tipo di connessione",
                           content: "Visualizza il tipo di connessione del dispositivo connesso."
                       } ,{                      
                           type: "step",
                           title: "Per bloccare un dispositivo",
                           content: "Nella tabella Dispositivi online, nella colonna Modifica, fare clic sull'icona Blocca relativa al dispositivo che si desidera bloccare."
                       } ,{                      
                           type: "step",
                           title: "Per bloccare più dispositivi",
                           content: "Nella tabella Dispositivi online, selezionare tutti i dispositivi che si desidera bloccare, quindi fare clic su Blocca, sopra la tabella. Il dispositivo verrà aggiunto automaticamente all'elenco elementi bloccati o consentiti."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispositivi in elenco elementi bloccati/consentiti",
               CONTENT: [{
                           type: "step",
                           title: "Per inserire un dispositivo nell'elenco elementi consentiti/bloccati",
       content: [ 
                "1. Fare clic sull'icona Aggiungi.",
                "2. Inserire il Nome dispositivo.",
                "3. Inserire l'indirizzo MAC del dispositivo.",
                "4. Selezionare il tipo di Tempo effettivo. Se si seleziona <b>Accesso non consentito in base a pianificazione oraria/Accesso consentito in base a pianificazione oraria</b>, impostare orario e giorni.",
                "5. Fare clic su OK."]
} ,{                      
                           type: "step",
                           title: "Per modificare o eliminare un dispositivo nell'elenco elementi consentiti/bloccati",
                           content: "Nella tabella Elenco elementi bloccati/Elenco elementi consentiti, fare clic sull'icona Modifica o Cestino relativa al dispositivo che si desidera modificare o eliminare."
                       } ,{                      
                           type: "step",
                           title: "Per eliminare più dispositivi nell'elenco elementi consentiti/bloccati",
                           content: "Nella tabella Elenco elementi bloccati/Elenco elementi consentiti, selezionare tutti i dispositivi che si desidera eliminare, quindi fare clic su Elimina, sopra l'elenco."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Rete host per porta Ethernet",
                           content: "Selezionare la banda wireless (2,4 GHz o 5 GHz) della rete host utilizzata per l'invio di traffico dai client cablati ai client wireless.<br/>L'opzione è disponibile solo quando sono abilitate entrambe le reti host 2,4 GHz e 5 GHz."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Impostazioni di rete",
               CONTENT: [{
                           type: "name",
                           title: "Ottieni automaticamente un indirizzo IP",
                           content: "Selezionare questa opzione (consigliata) se si desidera che i client wireless ottengano dinamicamente indirizzo IP e gateway dalla rete host."
                       } ,{                      
                           type: "name",
                           title: "Utilizzare il seguente indirizzo IP",
                           content: "Selezionare l'opzione (consigliata), se si desidera che il range extender ottenga dinamicamente indirizzo IP e gateway per l'extender."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP",
                           content: "Inserire l'indirizzo IP in formato decimale separato da punti (di default 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Subnet Mask",
                           content: "Inserire la subnet mask in formato decimale separato da punti che determina la dimensione della rete (di default 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Gateway predefinito",
                           content: "Inserire il gateway che si trova nella stessa subnet dell'indirizzo IP in formato decimale separato da punti. Di solito è l'indirizzo IP LAN del router."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Impostazioni server DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Di default il range extender è configurato come server DHCP (Dynamic Host Configuration Protocol) per fornire la configurazione TCP/IP a tutti i client che sono connessi all'extender nella LAN dal pool di indirizzi IP."
                       } ,{                      
                           type: "name",
                           title: "Server DHCP",
                           content: "Di default è selezionata l'opzione Auto; il server DHCP assegna automaticamente un indirizzo IP al client. Il server DHCP può essere abilitato (acceso) o disabilitato (spento). Se è spento è necessario disporre di un altro server DHCP all'interno della LAN; in caso contrario, è necessario configurare manualmente l'indirizzo IP di ogni client."
                       } ,{                      
                           type: "name",
                           title: "Pool di indirizzi IP",
                           content: "Inserire l'intervallo di indirizzi IP che possono essere assegnati in lease ai client. Di default l'indirizzo IP iniziale è 192.168.0.100 e l'indirizzo IP finale è 192.168.0.199. "
                       } ,{                      
                           type: "name",
                           title: "Durata lease indirizzo",
                           content: "Inserire la durata del lease dell'indirizzo IP al client, compresa tra 1 e 2.880 minuti. Il valore predefinito è 1 minuto."
                       } ,{                      
                           type: "name",
                           title: "Gateway predefinito",
                           content: "<br/>Inserire l'indirizzo IP LAN del range extender. Di default è 192.168.0.254 (opzionale)."
                       } ,{                      
                           type: "name",
                           title: "DNS primario",
                           content: "Inserire l'indirizzo IP DNS (opzionale) fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "DNS secondario",
                           content: "Inserire questi parametri (opzionale) forniti dall'ISP."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Per poter utilizzare il server DHCP del range extender, tutti i client della LAN devono essere configurati per ottenere automaticamente l'indirizzo IP."
                       } ,{                      
                           type: "paragraph",
                           content: "Fare clic su <strong>Salva</strong> per salvare la configurazione."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Prenotazione indirizzi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Un indirizzo IP può essere riservato manualmente a un client che si connette all'extender. Una volta riservato, l'indirizzo IP verrà assegnato dal server DHCP solo a quel client."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "Visualizza l'indirizzo MAC del client con indirizzo IP riservato dal server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP riservato",
                           content: "Visualizza l'indirizzo IP riservato del client."
                       } ,{                      
                           type: "name",
                           title: "Descrizione",
                           content: "Visualizza una descrizione del dispositivo client."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Visualizza lo stato corrente (abilitato o disabilitato) del dispositivo client."
                       } ,{                      
                           type: "name",
                           title: "Modifica",
                           content: "Visualizza le opzioni Modifica o Elimina del client corrispondente."
                       } ,{                      
                           type: "step",
                           title: "Per riservare un indirizzo IP",
       content: [ 
                "1. Fare clic su Aggiungi.",
                "2. Inserire l'indirizzo MAC del client desiderato.",
                "3. Inserire l'indirizzo IP che si desidera riservare per il client.",
                "4. Inserire una descrizione del client.",
                "5. Selezionare Abilita questo elemento.",
                "6. Fare clic su OK."]
} ,{                      
                           type: "step",
                           title: "Per modificare o eliminare un client esistente",
                           content: "Nella tabella, fare clic su Modifica o su Elimina se si desidera modificare o eliminare il client corrispondente."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Elenco client DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Visualizza le seguenti informazioni di ogni client DHCP connesso al range extender."
                       } ,{                      
                           type: "name",
                           title: "Numero client",
                           content: "Visualizza il numero di client DHCP associati."
                       } ,{                      
                           type: "name",
                           title: "Nome client",
                           content: "Il nome del client DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "L'indirizzo MAC del client DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP assegnato",
                           content: "L'indirizzo IP assegnato al client dal server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Durata lease",
                           content: "La durata del lease dell'indirizzo IP al client DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Aggiorna</strong> – Fare clic su questo pulsante per aggiornare l'elenco dei client DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Copertura WiFi",
               CONTENT: [{
						   type: "paragraph",
                           content: "Selezionare il livello di copertura Wi-Fi per il range extender in uso."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Impostazioni data/ora",
               CONTENT: [{
                           type: "name",
                           title: "Ora corrente",
                           content: "Visualizza l'orario corrente del sistema."
                       },{
                           type: "name",
                           title: "Fuso orario",
                           content: "Selezionare il proprio fuso orario."
                       }]
},
		TIME_SETTING_DAYLIGHT:{
				TITLE:"Ora legale",
				CONTENT:[{
					type: "step",
					title: "Per impostare l'ora legale:",
					content: [
						"1. Selezionare l'ora legale.",
                "2. Selezionare la data e l'ora di <b>Inizio</b> dell'ora legale nel fuso orario locale.",
                "3. Selezionare la data e ora di <b>Fine</b> dell'ora legale nel fuso orario locale.",
                "4. Fare clic su Salva."]
				},{
					type: "name",
					title: "Stato corrente",
					content: "Indica se per l'orario corrente è in vigore o meno l'ora legale."
				}]
		},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Controllo LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il Controllo LED consente di attivare o disattivare i LED sul range extender secondo una specifica pianificazione oraria."
                       } ,{                      
                           type: "name",
                           title: "Modalità notturna",
                           content: "Indica se la Modalità notturna è abilitata (On) o disabilitata (Off)."
                       } ,{                      
                           type: "name",
                           title: "Tempo di disattivazione LED",
                           content: "Selezionare la pianificazione oraria per disattivare i LED."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"Pianificazione accensione",
               CONTENT: [{
                           type: "paragraph",
                           content: "Abilitare questa funzione per spegnere l'extender in base alla pianificazione oraria, per ridurre i consumi di energia."
                       } ,{                      
                           type: "name",
                           title: "Abilita pianificazione accensione",
                           content: "Selezionare questa opzione per abilitare la Pianificazione accensione."
                       } ,{                      
                           type: "name",
                           title: "Orario spegnimento",
                           content: "Selezionare il periodo di tempo per lo spegnimento automatico dell'extender."
                       } ,{                      
                           type: "name",
                           title: "Giorno(i)",
                           content: "Selezionare il giorno/i giorni in cui spegnere l'extender."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Aggiornamento firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versione firmware",
                           content: "Visualizza la versione corrente del firmware."
                       } ,{                      
                           type: "name",
                           title: "Versione hardware",
                           content: "Visualizza la versione corrente dell'hardware."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANTE: per evitare problemi durante l'aggiornamento, attenersi ai seguenti consigli:",
       content: [ 
                "1. Il file del firmware per l'aggiornamento dell'extender deve essere compatibile con la versione hardware corrente dell'extender.",
                "2. Per evitare di danneggiare l'extender, è importante lasciarlo acceso durante tutto il processo di aggiornamento."]
} ,{                      
                           type: "step",
                           title: "Per aggiornare il firmware dell'Extender:",
       content: [ 
                "1. Scaricare sul computer il file del firmware più aggiornato da <a class=\"link\" href=\"http://www.tp-link.it/Support/\" target=\"_blank\">Supporto TP-Link</a>.",
                "2. Fare clic su <strong>Cerca</strong> e selezionare il file scaricato.",
                "3. Fare clic su <strong>Aggiorna</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Il completamento dell'aggiornamento richiede qualche minuto; quindi il range extender si riavvierà automaticamente."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Backup",
               CONTENT: [{
                           type: "paragraph",
                           content: "Si consiglia di eseguire il backup delle configurazioni correnti, nel caso in cui fosse necessario ripristinare il sistema a uno stato precedente o alle impostazioni di fabbrica."
                       } ,{                      
                           type: "paragraph",
                           content: "Fare clic su Backup per salvare sul computer  le configurazioni correnti, sotto forma di file config.bin. Archiviare il file in un luogo sicuro, in modo da poterlo recuperare facilmente in caso di necessità. "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Ripristino",
               CONTENT: [{
                           type: "step",
                           title: "Per ripristinare le impostazioni salvate da un file di backup:",
       content: [ 
                "1. Fare clic su Sfoglia per individuare il file di backup.",
                "2. Selezionare il file di backup.",
                "3. Fare clic su Ripristino.",
                "4. Fare clic su <strong>Sì</strong> per confermare il ripristino del sistema.",
                "Il processo di ripristino può richiedere alcuni minuti; al termine, il range extender si riavvierà automaticamente. "]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Ripristino impostazioni di fabbrica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Fare clic su Ripristino impostazioni di fabbrica per ripristinare le impostazioni predefinite del range extender."
                       } ,{                      
                           type: "note",
                            title: "Nota",
							content: [
								"1. Il Ripristino delle Condizioni di Default elimina tutte le impostazioni che avete configurato nell'extender. Per rieffettuare login alla pagina di gestione dell'extender usate admin come username e password.",
								"1. Riporta a Impostazioni di Fabbrica cancellerà la configurazione dell'extender. Create una password per i login successivi.",
								"2. NON spegnete il range extender durante il processo di backup o ripristino."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Account amministratore",
               CONTENT: [{
                           type: "paragraph",
                           content: "La pagina consente di modificare nome utente e/o la password predefiniti."
                       } ,{                      
                           type: "paragraph",
                           content: "In questa pagina potete cambiare la vostra password di login."
                       } ,{                      
                           type: "name",
                           title: "Vecchio nome utente",
                           content: "Inserire il nome utente corrente."
                       } ,{                      
                           type: "name",
                           title: "Vecchia password",
                           content: "Inserire la password corrente."
                       } ,{                      
                           type: "name",
                           title: "Nuovo nome utente",
                           content: "Inserire un nuovo nome utente."
                       } ,{                      
                           type: "name",
                           title: "Nuova password",
                           content: "Inserire una nuova password."
                       } ,{                      
                           type: "name",
                           title: "Conferma password",
                           content: "Reinserire la nuova password."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Log di sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "La pagina Log di sistema visualizza un elenco delle attività (eventi) più recenti dell'extender. È possibile definire quali tipologie e/o livelli di log si desidera visualizzare."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selezionare il Tipo di log che si desidera visualizzare."
                       } ,{                      
                           type: "name",
                           title: "Livello",
                           content: "Selezionare il Livello di log che si desidera visualizzare."
                       } ,{                      
                           type: "name",
                           title: "Aggiorna",
                           content: "Fare clic sul pulsante per aggiornare il log di sistema."
                       } ,{                      
                           type: "name",
                           title: "Elimina tutto",
                           content: "Fare clic sul pulsante per rimuovere in modo permanente tutti i log."
                       } ,{                      
                           type: "name",
                           title: "Salva log",
                           content: "Fare clic su questo pulsante per salvare il log di sistema in formato di file .txt."
                       }]
},
    });
})(jQuery);
