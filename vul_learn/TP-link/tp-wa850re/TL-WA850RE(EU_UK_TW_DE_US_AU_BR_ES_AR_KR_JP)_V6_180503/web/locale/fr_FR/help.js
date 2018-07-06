(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Paramètre Pays",
               CONTENT: [{
                           type: "name",
                           title: "Pays",
                           content: "Choisir le Pays d'utilisation du routeur dans la liste déroulante. Si votre Pays n'est pas listé, l'usage du Wi-Fi est peut-être restreint."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"État",
               CONTENT: [{
                           type: "paragraph",
                           content: "La page d'état affiche les paramètres actuels du système. Vous pouvez cliquer sur les icônes pour obtenir des détails."
                       } ,{                      
                           type: "title",
                            title: "Répéteur"
                       } ,{                      
                           type: "paragraph",
                           content: "Affiche les informations du réseau Wi-Fi étendu de 2,4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Le nom du réseau Wi-Fi étendu (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Le canal Wi-Fi actuellement utilisé."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Adresse MAC du répéteur."
                       } ,{                      
                           type: "name",
                           title: "Serveur DHCP",
                           content: "Indique l'état du serveur DHCP intégré au répéteur."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Adresse IP attribuée par le serveur DHCP au client Connecté en Ethernet au répéteur."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Indique le type d'adresse IP allouée par le serveur DHCP."
                       } ,{                      
                           type: "title",
                            title: "Réseau Wi-Fi source 2,4GHz<span class=\"hidden_5g\">/5GHz</span> "
                       } ,{                      
                           type: "paragraph",
                           content: "Affiche les informations du réseau source Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Le nom du réseau Wi-Fi source (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Signal",
                           content: "Force du signal Wi-Fi reçu par le répéteur et émis par la source."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "L'adresse MAC physique de la source Wi-Fi."
                       } ,{                      
                           type: "title",
                            title: "Clients"
                       } ,{                      
                           type: "paragraph",
                           content: "Affiche les appareils clients connectés au répéteur 2,4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Le type de réseau Wi-Fi étendu de 2,4GHz<span class=\"hidden_5g\">/5GHz</span>auquel est connecté le client."
                       } ,{                      
                           type: "name",
                           title: "Nom de l'appareil",
                           content: "Le nom des appareils clients Wi-Fi connectés."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "L'adresse MAC de l'adaptateur Wi-Fi du client connecté au répéteur."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"État",
               CONTENT: [{
                           type: "paragraph",
                           content: "La page d'état affiche un tableau de bord reprenant les informations relative à l'état de votre connexion réseau. Vous pouvez cliquer sur un icône pour obtenir plus d'informations."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "État de la connexion internet",
                           content: "Affiche l'état de la connexion à internet des appareils."
                       } ,{                      
                           type: "title",
                            title: "Point d'accès"
                       } ,{                      
                           type: "name",
                           title: "Serveur DHCP",
                           content: "Affiche l'état du serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Affiche l'adresse IP attribuée au point d'accès par le serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Affiche le type d'adresse IP obtenue par le point d'accès."
                       } ,{                      
                           type: "title",
                            title: "Clients Wi-Fi"
                       } ,{                      
                           type: "name",
                           title: "Nom",
                           content: "Affiche le nom des clients connectés."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Affiche l'adresse IP des clients connectés."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Affiche l'adresse MAC des clients connectés."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Paramètres",
               CONTENT: [{
                           type: "name",
                           title: "Pays",
                           content: "Choisir le Pays d'utilisation du répéteur dans la liste déroulante. Si votre Pays n'est pas listé, l'usage du Wi-Fi est peut-être restreint."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wi-Fi 2,4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Activer l'émetteur Wi-Fi",
                           content: "Cocher cette case pour activer l'émission du signal Wi-Fi 2,4GHz."
                       } ,{                      
                           type: "name",
                           title: "Nom du réseau Wi-Fi (SSID)",
                           content: "Vous pouvez laisser le nom de réseau (SSID) par défaut ou en saisir un autre (32 caractères maximum comportant minuscules et majuscules)."
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Cocher cette case si vous décidez que le nom du réseau Wi-Fi 2,4GHz ne doit pas apparaître dans la liste des réseaux disponibles."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Choisir l'une des options de sécurité suivantes :",
       children: [{                      
                           type: "name",
                           title: "Pas de sécurité",
                           content: "Choisir cette option pour désactiver la sécurité du Wi-Fi. Il est fortement recommandé d'activer la sécurité du Wi-Fi pour protéger votre réseau Wi-Fi de tout accès non autorisé."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personnel",
                           content: "Choisir cette option pour activer la méthode standard d'authentification basée sur une clé pré-partagée (PSK) aussi appelée Mot de passe. Cette option est recommandée. Si vous la sélectionnez, configurez ce qui suit.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de sécurité pour votre réseau Wi-Fi.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Cette option implémente les deux versions du standard WPA (Wi-Fi Protected Access) : WPA et WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Cette option ne supporte que le chiffrement TKIP offrant un bon niveau de sécurité."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Cette option supporte le chiffrement AES qui offre une meilleure protection que WPA-PSK et c'est donc le choix à privilégier."
                       }]
} ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Choisir un type de chiffrement de sécurité : Auto (TKIP & AES), TKIP (Temporal Key Integrity Protocol), ou AES (Advanced encryption security Standard). il n'est PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode 802.11n, en effet TKIP n'est pas supporté par les spécifications 802.11n. Si TKIP est choisi, la fonction WPS est automatiquement désactivée."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe",
                           content: "Saisir un mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux (0-9, A-F, a-f) dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Choisir cette option pour activer une méthode basique d'authentification si l'un de vos clients ne peut utiliser que le chiffrement WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Choisir un type d'authentification type pour votre réseau Wi-Fi. Par défaut réglé sur Auto, qui choisi automatiquement entre Système ouvert et Clé partagée en fonction des capacités et des requêtes des clients Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Format de clé WEP",
                           content: "Utilisez le format ASCII ou l'hexadécimal. Le format ASCII correspond à une combinaison alphanumérique. Le format hexadécimal est une combinaison de chiffres (0-9) et de certaines lettres (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Type de clé",
                           content: "Choisir une taille de clé WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permet la saisie de 10 caractères hexadécimaux (0-9, A-F, a-f) ou 5 caractères ASCII pour la clé WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permet la saisie de 26 caractères hexadécimaux (0-9, A-F, a-f) ou 13 caractères ASCII pour la clé WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valeur de la clé",
                           content: "Saisir la clé WEP dans le champ dédié."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mode",
                           content: "Choisir le mode d'émission parmi les différentes possibilités."
                       } ,{                      
                           type: "name",
                           title: "Largeur de canal",
                           content: "choisir une largeur de canal (bande passante) pour le réseau Wi-Fi 2,4GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Choisir un canal pour le réseau Wi-Fi 2,4GHz. Il est recommandé de laisser le réglage Auto, si vous ne rencontrez pas des problèmes de déconnexions intermittentes."
                       } /*,{                      
                           type: "name",
                           title: "Puissance de transmission",
                           content: "Choisir parmi Haute, Moyenne et Basse pour contrôler la puissance d'émission. La valeur recommandée et paramétrée par défaut est Haute."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour enregistrer tous vos paramètres."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wi-Fi 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Activer l'émetteur Wi-Fi",
                           content: "Cocher cette case pour activer l'émission du signal Wi-Fi 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Nom du réseau Wi-Fi (SSID)",
                           content: "Vous pouvez laisser le nom de réseau (SSID) par défaut ou en saisir un autre (32 caractères maximum comportant minuscules et majuscules)."
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Cocher cette case si vous décidez que le nom du réseau Wi-Fi ne doit pas apparaître dans la liste des réseaux disponibles."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Choisir l'une des options de sécurité suivantes :",
       children: [{                      
                           type: "name",
                           title: "Pas de sécurité",
                           content: "Choisir cette option pour désactiver la sécurité du Wi-Fi. Il est fortement recommandé d'activer la sécurité du Wi-Fi pour protéger votre réseau Wi-Fi de tout accès non autorisé."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personnel",
                           content: "Choisir cette option pour activer la méthode standard d'authentification basée sur une clé pré-partagée (PSK) aussi appelée mot de passe. Cette option est recommandée. Si vous la sélectionnez, configurez ce qui suit.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de sécurité pour votre réseau Wi-Fi.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Cette option implémente les deux versions du standard WPA (Wi-Fi Protected Access) : WPA et WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Cette option ne supporte que le chiffrement TKIP offrant un bon niveau de sécurité."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Cette option supporte le chiffrement AES qui offre une meilleure protection que WPA-PSK et c'est donc le choix à privilégier."
                       }]
} ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Choisir un type de chiffrement de sécurité : Auto (TKIP & AES), TKIP (Temporal Key Integrity Protocol), ou AES (Advanced encryption security Standard). il n'est PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode 802.11n, en effet TKIP n'est pas supporté par les spécifications 802.11n. Si TKIP est choisi, la fonction WPS est automatiquement désactivée."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe",
                           content: "Saisir un mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux (0-9, A-F, a-f) dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Choisir cette option pour activer une méthode basique d'authentification si l'un de vos clients ne peut utiliser que le chiffrement WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Choisir un type d'authentification type pour votre réseau Wi-Fi. Par défaut réglé sur Auto, qui choisi automatiquement entre Système ouvert et Clé partagée en fonction des capacités et des requêtes des clients Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Format de clé WEP",
                           content: "Utilisez soit le format ASCII ou Hexadécimal. Le format ASCII correspond à une combinaison alphanumérique. Le format Hexadécimal est une combinaison ne comprend que des chiffres (0-9) et certaines lettres (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Type de clé",
                           content: "Choisir une taille de clé WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permet la saisie de 10 caractères hexadécimaux (0-9, A-F, a-f) ou 5 caractères ASCII pour la clé WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permet la saisie de 26 caractères hexadécimaux (0-9, A-F, a-f) ou 13 caractères ASCII pour la clé WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valeur de la clé",
                           content: "Saisir la clé WEP dans le champ dédié."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mode",
                           content: "Choisir le mode d'émission parmi les différentes possibilités."
                       } ,{                      
                           type: "name",
                           title: "Largeur de canal",
                           content: "choisir une largeur de canal (bande passante) pour le réseau Wi-Fi 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Choisir un canal pour le réseau Wi-Fi 5GHz. Il est recommandé de laisser le réglage Auto, si vous ne rencontrez pas des problèmes de déconnexions intermittentes."
                       }/* ,{                      
                           type: "name",
                           title: "Puissance de transmission",
                           content: "Choisir parmi Haute, Moyenne et Basse pour contrôler la puissance d'émission. La valeur recommandée et paramétrée par défaut est Haute."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour enregistrer tous vos paramètres."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Activer le WPS",
                           content: "Les clients peuvent se connecter à ce point d'accès (PA) via WPA en utilisant le code PIN du PA."
                       }]
},
       WPS :{ 
               TITLE:"Code PIN PA",
               CONTENT: [{
                           type: "name",
                           title: "Code PIN PA",
                           content: "Basculer sur On pour permettre aux clients Wi-Fi de se connecter à l'AP en utilisant le code PIN (8 chiffres) du PA."
                       } ,{                      
                           type: "name",
                           title: "Code PIN",
                           content: "Affiche le code PIN du PA. Le code PIN par défaut est inscrit sur l'étiquette située sous le produit. Cliquer sur générer pour remplacer le code actuel par un autre aléatoire ou cliquer sur Défaut pour restaurer le code PIN par défaut du PA."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Assistant WPS",
               CONTENT: [{
                           type: "name",
                           title: "Appui du bouton (Recommandé)",
                           content: "Choisir cette méthode de connexion pour activer la fonction WPS et connecter aisément un appareil compatible WPS à votre réseau Wi-Fi en utilisant le bouton WPS du produit ou le bouton virtuel de l'interface WEB."
                       } ,{                      
                           type: "name",
                           title: "Code PIN",
                           content: "Choisir cette méthode de connexion pour ajouter manuellement un appareil en saisissant le code PIN WPS de l'appareil dans le champ dédié et en cliquant sur Se connecter."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Connexion à un réseau Wi-Fi source",
               CONTENT: [{
                           type: "name",
                           title: "Connexion à un réseau Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Activer/désactiver la connexion du répéteur à une source Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span> existante."
                       } ,{                      
                           type: "name",
                           title: "Détection Wi-Fi",
                           content: "Cliquer sur le bouton de détection pour établir la liste des réseaux Wi-Fi détectés par le répéteur. Sélectionner le réseau source Wi-Fi (box, routeur, PA) que vous voulez étendre, le SSID et les paramètres de sécurité Wi-Fi sont automatiquement renseignés dans les champs adaptés."
                       } ,{                      
                           type: "name",
                           title: "SSID Wi-Fi source 2,4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Entrer le SSID de la source Wi-Fi à laquelle le répéteur va se connecter pour en étendre la portée. Vous pouvez aussi utiliser le bouton <strong> Détecter </strong> pour sélectionner le réseau Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Sécurité Wi-Fi source 2,4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Sélectionner impérativement le type de sécurité Wi-Fi utilisé par votre réseau source."
                       } ,{                      
                           type: "name",
                           title: "Pas de sécurité",
                           content: "Cette option désactive la sécurité du réseau Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Cette option ne supporte que le chiffrement TKIP offrant un bon niveau de sécurité mais limitant le débit à 54MBps en IEEE802.11n."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Cette option supporte le chiffrement AES (Advanced  encryption ) qui offre une meilleure protection que WPA-PSK et c'est donc le choix à privilégier."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Cette option supporte plusieurs implémentations de la norme WPA (Wi-Fi Protected Access) comme WPA and WPA2. "
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Cette option est la méthode d'authentification la plus basique disponible pour les clients qui ne peuvent utiliser que le chiffrement WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Paramètres du réseau Wi-Fi étendu",
               CONTENT: [{
                           type: "name",
                           title: "Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span> étendu",
                           content: "Activer/désactiver la fonction Wi-Fi  du répéteur dans la gamme 2,4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span> étendu",
                           content: "Vous pouvez cliquer sur le bouton  <strong>Copier le SSID du réseau source </strong> pour copier automatiquement le SSID du réseau source Wi-Fi ou saisir un SSID différent (jusqu'à 32 caractères) dans le champ spécifique. Ce champ est sensible à la casse."
                       } ,{                      
                           type: "name",
                           title: "Copier le SSID du réseau source",
                           content: "Cliquer sur ce bouton pour recopier automatiquement les SSID du réseau source dans le champ associé."
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Cocher cette case si vous décidez que le nom du réseau Wi-Fi 2,4GHz<span class=\"hidden_5g\">/5GHz</span> ne doit pas apparaître dans la liste des réseaux disponibles."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Contrôle d'accès",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le contrôle d'accès est utilisé pour permettre ou bloquer l'accès au réseau étendu à des clients spécifiques. Quand un appareil est bloqué, il est dans l'impossibilité de se connecter au réseau étendu."
                       } ,{                      
                           type: "paragraph",
                           content: "Pour utiliser le contrôle d'accès, activer cette fonction et spécifier une liste noire ou blanche. Si le contrôle d'accès est inactif, tout appareil même s'il est présent dans la liste noire accède au réseau et à internet."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Mode d'accès",
               CONTENT: [{
                           type: "name",
                           title: "Liste noire",
                           content: "Seuls les appareil présents dans la liste voient leur accès au réseau REFUSÉ."
                       } ,{                      
                           type: "name",
                           title: "Liste blanche",
                           content: "Seuls les appareils présents dans la liste ont accès au réseau."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Appareils connectés",
               CONTENT: [{
                           type: "name",
                           title: "Nom d'appareil",
                           content: "Noms des appareils connectés."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Affiche les adresses IP des appareils connectés."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Adresses MAC des appareils connectés."
                       } ,{                      
                           type: "name",
                           title: "Type de connexion",
                           content: "Affiche le type de connexion de l'appareil."
                       } ,{                      
                           type: "step",
                           title: "Pour bloquer un appareil",
                           content: "Dans la table des appareils connectés, cliquez sur l'icône Bloquer dans la colonne Modifier qui correspond à l'appareil que vous souhaitez bloquer."
                       } ,{                      
                           type: "step",
                           title: "Pour bloquer plusieurs appareils",
                           content: "Dans la table des appareils connectés, sélectionner tous les appareils que vous souhaitez bloquer, cliquez sur l'icône Bloquer au dessus de la table. Les appareils seront automatiquement ajoutés à la liste noire ou blanche."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Appareils en liste noire/blanche",
               CONTENT: [{
                           type: "step",
                           title: "Pour placer un appareil en liste noire/blanche",
       content: [ 
                "1. Cliquer sur l'icône ajouter.",
                "2. Saisir le nom de l'appareil.",
                "3. Saisir l'adresse MAC de l'appareil.",
                "4. Choisir le type d'accès. Si vous sélectionnez <b>Ne peut accéder en fonction de la planification horaire/Ne peut accéder quelle que soit la planification horaire</b>, définissez jours et heures.",
                "5. Cliquez sur OK."]
} ,{                      
                           type: "step",
                           title: "Pour modifier ou supprimer un appareil de la liste noire/blanche",
                           content: "Dans la liste noire/blanche, cliquez sur l'icône Éditer ou l'icône Poubelle qui correspond à l'appareil que vous souhaitez modifier ou supprimer."
                       } ,{                      
                           type: "step",
                           title: "Pour supprimer plusieurs appareils dans la liste noire/blanche",
                           content: "Dans la liste noire/blanche, sélectionner tous les appareils à supprimer, cliquer sur Supprimer au dessus de la liste."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Port Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Réseau source Wi-Fi par Ethernet",
                           content: "Sélectionnez le réseau Wi-Fi (2,4GHz ou 5GHz) de la source Wi-Fi pour utiliser son trafic sortant sur le port Ethernet de votre équipement filaire.<br/> Cette option est activée si les 2 réseaux Wi-Fi 2,4GHz et 5GHz sont activés."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Adresse IP du répéteur",
               CONTENT: [{
                           type: "name",
                           title: "Obtenir une adresse IP automatiquement",
                           content: "Sélectionnez cette option (recommandé) si vous voulez que le répéteur obtienne une adresse IP dynamique fournie par votre routeur/box."
                       } ,{                      
                           type: "name",
                           title: "Utiliser l'adresse IP suivante",
                           content: "Sélectionnez cette option si vous voulez configurer une adresse IP fixe et une passerelle pour votre répéteur."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Saisir l'adresse IP du répéteur en notation décimale pointée (adresse par défaut - 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Masque de sous-réseau",
                           content: "Saisissez le masque de sous-réseau qui détermine la taille du réseau (255.255.255.0 est utilisé par défaut) en notation décimale pointée."
                       } ,{                      
                           type: "name",
                           title: "Passerelle par défaut",
                           content: "Saisissez la passerelle qui se trouve dans le même sous-réseau que l'adresse IP en notation décimale pointée. Il s'agit en général de  l'adresse IP réseau de votre routeur."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Paramétres du Serveur DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Par défaut le serveur DHCP (Dynamic Host Configuration Protocol) est actif ; il assigne dynamiquement des paramètres TCP/IP aux appareils clients parmi ceux définis dans la plage d'adresses IP. NE PAS désactiver le serveur DHCP sans qu'un autre serveur soit actif ou que vous ayez attribué manuellement des paramètres TCP/IP à chaque appareil client de votre réseau."
                       } ,{                      
                           type: "name",
                           title: "Serveur DHCP",
                           content: "Par défaut le serveur DHCP (Dynamic Host Configuration Protocol) est en mode auto ; il assigne dynamiquement des adresses IP valides aux appareils clients. Vous pouvez activer ou désactiver le serveur DHCP. Si vous désactivez le DHCP, vous devez en contrepartie avoir un DHCP actif sur le réseau; à défaut il vous faudra attribuer manuellement une adresse IP à chaque client."
                       } ,{                      
                           type: "name",
                           title: "Plage adresses IP",
                           content: "Saisir l'étendue des adresses IP qui seront attribuées aux clients. L''adresse IP de début par défaut est 192.168.0.100 et l'adresse IP de fin 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Durée du bail",
                           content: "Saisir la durée du bail attribuée au client (1 à 2880 minutes) la valeur par défaut étant 1 minutes."
                       } ,{                      
                           type: "name",
                           title: "Passerelle par défaut",
                           content: "<br/>Saisir l'adresse IP LAN du répéteur ou l'adresse IP de la passerelle de votre réseau. L'adresse par défaut est 192.168.0.254. (Optionnel)."
                       } ,{                      
                           type: "name",
                           title: "DNS Primaire",
                           content: "Saisir l'adresse IP du serveur DNS de votre FAI. (optionnel)."
                       } ,{                      
                           type: "name",
                           title: "DNS Secondaire",
                           content: "Saisir les paramètres fournis par votre FAI. (optionnel)."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Pour pouvoir utiliser le serveur DHCP du répéteur, tous les clients réseau doivent être configurés pour obtenir automatiquement une adresse IP."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur <strong>Sauvegarder</strong> pour enregistrer tous vos paramètres."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Réservation d'adresse",
               CONTENT: [{
                           type: "paragraph",
                           content: "Vous pouvez réserver manuellement une adresse IP pour un client qui est connecté au répéteur. Une fois réservée, l'adresse IP ne sera affectée qu'à ce client par le serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Affiche l'adresse MAC du client dont l'adresse IP à été réservée."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP réservée",
                           content: "Affiche l'adresse IP réservée du client."
                       } ,{                      
                           type: "name",
                           title: "Description",
                           content: "Affiche une description de l'appareil client."
                       } ,{                      
                           type: "name",
                           title: "État",
                           content: "Affiche l'état actuel (activé ou désactivé) de l'appareil client."
                       } ,{                      
                           type: "name",
                           title: "Modifier",
                           content: "Affiche les options pour Modifier ou Supprimer le client correspondant."
                       } ,{                      
                           type: "step",
                           title: "Pour réserver une adresse IP",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Saisir l'adresse MAC du client désiré.",
                "3. Saisir l'adresse IP que vous souhaitez réserver au client.",
                "4. Saisir une description du client.",
                "5. Choisir Activer cet élément.",
                "6. Cliquer sur OK."]
} ,{                      
                           type: "step",
                           title: "Pour modifier ou supprimer un client existant",
                           content: "Dans le tableau, cliquer sur l'icône Éditer ou l'icône Poubelle correspondant au client que vous souhaitez modifier ou supprimer."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Liste de clients DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette page affiche les informations de chaque client DHCP connecté au répéteur Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Numéro du client",
                           content: "Affiche le numéro du client DHCP associé."
                       } ,{                      
                           type: "name",
                           title: "Nom du client",
                           content: "Affiche le nom du client DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Adresse MAC du client connecté."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP assignée",
                           content: "Adresse IP attribuée par le serveur DHCP au client concerné."
                       } ,{                      
                           type: "name",
                           title: "Durée du bail",
                           content: "Affiche la durée restante avant la fin du bail pendant lequel l'adresse IP est réservée au client."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Actualiser</strong> - Cliquer pour actualiser la liste des clients DHCP."
                       }]
},       
		WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Couverture Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Choisir le niveau de couverture Wi-Fi de votre répéteur."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Paramètres horaires",
               CONTENT: [{
                           type: "name",
                           title: "Heure actuelle",
                           content: "Affiche l'heure actuelle du système."
                       } ,{                      
                           type: "name",
                           title: "Fuseau horaire",
                           content: "Choisissez votre fuseau horairedans la liste déroulante.."
                       }]
},       
		TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Heure d'été",
               CONTENT: [{
                           type: "step",
                           title: "Pour paramétrer l'heure d'été :",
       content: [ 
                "1. Cocher la case ''Activer la gestion de l'heure d'été\".",
                "2. Sélectionner la date et l'heure de <b>Début</b> de l'heure d'été dans votre fuseau horaire.",
                "3. Sélectionner la date et l'heure de <b>Fin</b> de l'heure d'été dans votre fuseau horaire.",
                "4. Cliquer sur Sauvegarder"]
} ,{                      
                           type: "name",
                           title: "Etat actuel",
                           content: "Indique si la fonction de gestion de l'heure d'été est active ou non."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Gestion des DELs",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le contrôle des témoins lumineux DEL vous permet de programmer l'extinction des DELs pendant une programmation horaire sans que cela n'affecte les performances du routeur."
                       } ,{                      
                           type: "name",
                           title: "Activer l'extinction des Dels",
                           content: "Cocher la case pour planifier l'extinction des DELs durant une période continue sur 24H"
                       } ,{                      
                           type: "name",
                           title: "Période d'extinction",
                           content: "Sélectionner les horaires de début et de fin de la période pendant laquelle les DELs seront éteintes."
                       }]
}, 
		POWER_SCHEDULE :{ 
               TITLE:"Planification de l'alimentation",
               CONTENT: [{
                           type: "paragraph",
                           content: "Activer cette fonction pour éteindre le répéteur en fonction d'une planification horaire (économies d'énergie, exposition moins longue aux ondes)."
                       } ,{                      
                           type: "name",
                           title: "Activer la planification de l'alimentation",
                           content: "Choisir cette option pour activer la planification horaire d'alimentation"
                       } ,{                      
                           type: "name",
                           title: "Période d'extinction",
                           content: "Définir la période horaire pendant laquelle le répéteur est éteint."
                       },{                      
                           type: "name",
                           title: "Jour(s)",
                           content: "Définir les jours pour lesquels l'étendue s'applique."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Mise à jour logicielle",
               CONTENT: [{
                           type: "name",
                           title: "Version logicielle",
                           content: "Affiche la version logicielle installée."
                       } ,{                      
                           type: "name",
                           title: "Version matérielle",
                           content: "Affiche la version du matériel."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANT : pour éviter les problèmes de mise à jour, merci de noter ce qui suit :",
       content: [ 
                "1. Le fichier logiciel de mise à jour doit correspondre à la version matérielle de votre répéteur. ",
                "2. Il est important de maintenir le répéteur sous tension durant toute l'opération de mise à jour logicielle, toute rupture d'alimentation pourrait endommager votre répéteur."]
} ,{                      
                           type: "step",
                           title: "Pour mettre à jour le logiciel du répéteur :",
       content: [ 
                "1. Télécharger sur votre ordinateur, le fichier de mise à jour (firmware) le plus récent depuis le site:  <a class=\"link\" href=\"http://www.tp-link.com/fr/Support/\" target=\"_blank\">TP-Link Support</a>. Extraire le fichier firmware de l'archive téléchargée avant de poursuivre.",
                "2. Cliquer sur <strong>Naviguer</strong> pour sélectionner le fichier à utiliser.",
                "3.Cliquer sur <strong>Mettre à jour</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "La mise à jour prend quelques minutes après quoi le répéteur redémarre de façon automatique pour achever la procédure."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Sauvegarde",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il est fortement recommandé de sauvegarder la configuration de votre répéteur afin de la restaurer rapidement en cas d'effacement accidentel ou de mise à jour du logiciel du répéteur."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour enregistrer la configuration active sur votre ordinateur. Assurez vous de mettre le fichier de configuration à l'abri afin de le retrouver quand cela sera nécessaire."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Restaurer",
               CONTENT: [{
                           type: "step",
                           title: "Pour restaurer une configuration sauvegardée:",
       content: [ 
                "1. Cliquer sur Naviguer.",
                "2. Naviguer jusqu'à l'emplacement de la sauvegarde et la sélectionner.",
                "3. Cliquer sur Restaurer.",
                "4. Cliquer sur <strong>OK</strong> pour confirmer la restauration.",
                "La restauration prend quelques minutes pour s'effectuer. Merci de NE PAS éteindre le répéteur durant cette phase. Cet appareil redémarrera automatiquement une fois la restauration effectuée."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Paramètres par défaut",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cliquer sur Réinitialiser pour que le répéteur soit restauré à ses paramètres par défaut."
                       } ,{                      
                           type: "note",
                            title: "Remarque",
                          content: [
                            "1. La réinitialisation aux paramètres par défaut va effacer tous les réglages préalablement configurés. Pour se reconnecter  à l'interface d'administration utiliser admin pour le nom d'utilisateur et le mot de passe.",
                            "1. La réinitialisation aux paramètres d'usine va supprimer tous les paramétrages faits sur le répéteur. Merci de créer un nouveau mot de passe qui sera utilisé pour les authentifications futures.",
                            "2. Ne pas ETEINDRE le répéteur durant la  procédure de sauvegarde ou de restauration."
                          ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Compte Administrateur",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette page vous permet de changer le nom d'utilisateur et/ou le mot de passe permettant l'accès à l'interface."
                       } ,{                      
                           type: "paragraph",
                           content: "Depuis cette page vous pouvez modifier votre mot de passe d'accès d'authentification."
                       } ,{                      
                           type: "name",
                           title: "Ancien nom d'utilisateur",
                           content: "Saisir le nom d'utilisateur actuel."
                       } ,{                      
                           type: "name",
                           title: "Ancien mot de passe",
                           content: "Saisir le mot de passe actuel."
                       } ,{                      
                           type: "name",
                           title: "Nouveau nom d'utilisateur",
                           content: "Saisir le nom d'utilisateur souhaité."
                       } ,{                      
                           type: "name",
                           title: "Nouveau mot de passe",
                           content: "Saisir le mot de passe souhaité."
                       } ,{                      
                           type: "name",
                           title: "Confirmer le nouveau mot de passe",
                           content: "Saisir à nouveau le mot de passe souhaité."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Messages système",
               CONTENT: [{
                           type: "paragraph",
                           content: "La page des messages système affiche une liste des événements les plus récents relatifs au fonctionnement du répéteur. Vous pouvez définir quel type ou niveau de messages vous souhaitez voir s'afficher."
                       } ,{                      
                           type: "name",
                           title: "Type",
                           content: "Choisir le type de messages à afficher."
                       } ,{                      
                           type: "name",
                           title: "Niveau",
                           content: "Choisir le niveau de messages à afficher."
                       } ,{                      
                           type: "name",
                           title: "Actualiser",
                           content: "Cliquer sur cette icône pour mettre à jour l'affichage."
                       } ,{                      
                           type: "name",
                           title: "Tout supprimer",
                           content: "Cliquer sur cette icône pour effacer tous les messages."
                       } ,{                      
                           type: "name",
                           title: "Sauvegarder les messages",
                           content: "Cliquer sur ce bouton pour enregistrer le journal du système comme fichier .txt."
                       } ]
},
    });
})(jQuery);
