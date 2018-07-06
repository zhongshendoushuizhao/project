(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Configuración de la región",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Seleccione su región en el menú desplegable. Si su país o región no están en la lista, es posible que esté restringido el uso de la radio inalámbrica en su localización."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Estado",
               CONTENT: [{
                           type: "paragraph",
                           content: "La página de estado básico muestra un panel con información de la red y su estado actual. Puede hacer clic en cada icono para obtener más detalles."
                       } ,{                      
                           type: "title",
                            title: "Extensor de rango"
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra la información de la red extendida en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "El nombre de la red extendida (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "El canal inalámbrico actualmente en uso."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC física del extensor de rango."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Muestra el estado del servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "La dirección IP asignada al cliente por el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "El tipo de dirección IP asignada por el servidor DHCP."
                       } ,{                      
                           type: "title",
                            title: "Red del anfitrión en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra la siguiente información de la red del anfitrión de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "El SSID de la red del anfitrión."
                       } ,{                      
                           type: "name",
                           title: "Señal",
                           content: "La intensidad de la señal de la red del anfitrión."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC física de la red del anfitrión."
                       } ,{                      
                           type: "title",
                            title: "Clientes"
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra los dispositivos cliente conectados actualmente al extensor en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "El dispositivo cliente conectado a la red extendida en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Nombre del dispositivo",
                           content: "El nombre del dispositivo cliente conectado."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC física del dispositivo cliente conectado."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Estado",
               CONTENT: [{
                           type: "paragraph",
                           content: "La página Estado muestra un panel informativo con información de la red y su estado actual. Puede hacer clic en cada icono para obtener más detalles."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Estado de Internet",
                           content: "Muestra el estado actual de la conexión a Internet del dispositivo."
                       } ,{                      
                           type: "title",
                            title: "Punto de acceso"
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Muestra el estado del servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP asignada al punto de acceso por el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Muestra el tipo de obtención por el que el punto de acceso obtiene su dirección IP."
                       } ,{                      
                           type: "title",
                            title: "Clientes inalámbricos"
                       } ,{                      
                           type: "name",
                           title: "Nombre",
                           content: "Muestra el nombre de los dispositivos cliente."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP asignada a los dispositivos cliente por el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la dirección física MAC de los dispositivos cliente."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Ajustes",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Seleccione su región en el menú desplegable. Si su región no está en la lista, es posible que esté restringido el uso de la radio inalámbrica en su localización."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wi-Fi 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar la emisión inalámbrica",
                           content: "Seleccione esta casilla para habilitar la frecuencia de radio inalámbrica de 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Nombre de la red inalámbrica (SSID)",
                           content: "Puede dejar el nombre de la red (SSID) por defecto como está, o introducir un nuevo nombre (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Seleccione esta casilla si quiere ocultar el nombre de la red de 2.4GHz (SSID) de la lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Seguridad",
                           content: "Seleccione una de las siguientes opciones de seguridad:",
       children: [{                      
                           type: "name",
                           title: "Sin seguridad",
                           content: "Seleccione esta opción para deshabilitar la seguridad inalámbrica. Se recomienda que habilite la seguridad inalámbrica para proteger su red inalámbrica frente a accesos no autorizados."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Seleccione esta opción para habilitar el método estándar de autenticación basado en una clave compartida previamente (PSK), también llamada frase de contraseña. Se recomienda esta opción. Si se selecciona, configure lo siguiente.",
       children: [{                      
                           type: "name",
                           title: "Versión",
                           content: "Seleccione una versión de seguridad para su red inalámbrica.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opción admite la implementación múltiple del estándar WPA (Acceso Wi-Fi Protegido), como WPA y WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción solo admite la encriptación TKIP, que proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción admite la encriptación AES, que proporciona un mejor nivel de seguridad que WPA-PSK y está recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptación",
                           content: "Seleccione un tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Clave Temporal), AES (Estándar de Encriptación Avanzada) o Auto (Para TKIP y AES). NO se recomienda usar la encriptación TKIP si el extensor funciona en el modo 802.11n porque TKIP no es compatible con la especificación 802.11n. Si se selecciona TKIP, se desactivará la función WPS."
                       } ,{                      
                           type: "name",
                           title: "Contraseña",
                           content: "Introduzca en este campo una contraseña inalámbrica de entre 8 y 63 caracteres ASCII o de entre 8 y 64 caracteres hexadecimales."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Seleccione esta opción para habilitar el método de autenticación básico si alguno de los dispositivos cliente solo puede acceder a la Wi-Fi utilizando WEP (Privacidad Equivalente a Cableado).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccione un tipo de autenticación para su red inalámbrica. Por defecto está en Auto, que elige automáticamente un sistema abierto o una clave compartida en función de la capacidad y el acceso de la solicitud de un cliente inalámbrico."
                       } ,{                      
                           type: "name",
                           title: "Formato de clave WEP",
                           content: "Utilice el formato ASCII o Hexadecimal. El formato ASCII es una combinación de caracteres numéricos y alfanuméricos. El formato Hexadecimal es una combinación de números (0-9) y letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de clave",
                           content: "Seleccione la longitud de la clave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bits",
                           content: "Permite introducir 10 dígitos hexadecimales (0-9, A-F, a-f) o 5 caracteres ASCII en el campo del valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bits",
                           content: "Permite introducir 26 dígitos hexadecimales (0-9, A-F, a-f) o 13 caracteres ASCII en el campo del valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de la clave",
                           content: "Introduzca la clave WEP en el campo correspondiente."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Seleccione un modo de transmisión mixto."
                       } ,{                      
                           type: "name",
                           title: "Ancho de canal",
                           content: "Seleccione un ancho de canal (ancho de banda) para la red inalámbrica en 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Seleccione un canal operativo para la red inalámbrica en 2.4GHz. Se recomienda dejar el canal en Auto si no ha experimentado un problema de intermitencia en la conexión inalámbrica."
                       } /*,{                      
                           type: "name",
                           title: "Potencia de transmisión",
                           content: "Seleccione Alta, Media o Baja para especificar la potencia de transmisión de datos. La configuración recomendada y por defecto es Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Haga clic en Guardar para guardar todos los cambios."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wi-Fi 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar la emisión inalámbrica",
                           content: "Seleccione esta casilla para habilitar la frecuencia de radio inalámbrica de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Nombre de la red inalámbrica (SSID)",
                           content: "Puede dejar el nombre de la red (SSID) por defecto como está, o introducir un nuevo nombre (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Seleccione esta casilla si quiere ocultar el nombre de la red de 5GHz (SSID) de la lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Seguridad",
                           content: "Seleccione una de las siguientes opciones de seguridad:",
       children: [{                      
                           type: "name",
                           title: "Sin seguridad",
                           content: "Seleccione esta opción para deshabilitar la seguridad inalámbrica. Se recomienda que habilite la seguridad inalámbrica para proteger su red inalámbrica frente a accesos no autorizados."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Seleccione esta opción para habilitar el método estándar de autenticación basado en una clave compartida previamente (PSK), también llamada frase de contraseña. Se recomienda esta opción. Si se selecciona, configure lo siguiente.",
       children: [{                      
                           type: "name",
                           title: "Versión",
                           content: "Seleccione una versión de seguridad para su red inalámbrica.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opción admite la implementación múltiple del estándar WPA (Acceso Wi-Fi Protegido), como WPA y WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción solo admite la encriptación TKIP, que proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción admite la encriptación AES, que proporciona un mejor nivel de seguridad que WPA-PSK y está recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptación",
                           content: "Seleccione un tipo de encriptación de seguridad: TKIP (Protocolo de Integridad de Clave Temporal), AES (Estándar de Encriptación Avanzada) o Auto (Para TKIP y AES). NO se recomienda usar la encriptación TKIP si el extensor funciona en el modo 802.11n porque TKIP no es compatible con la especificación 802.11n. Si se selecciona TKIP, se desactivará la función WPS."
                       } ,{                      
                           type: "name",
                           title: "Contraseña",
                           content: "Introduzca en este campo una contraseña inalámbrica de entre 8 y 63 caracteres ASCII o de entre 8 y 64 caracteres hexadecimales."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Seleccione esta opción para habilitar el método de autenticación básico si alguno de los dispositivos cliente solo puede acceder a la Wi-Fi utilizando WEP (Privacidad Equivalente a Cableado).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccione un tipo de autenticación para su red inalámbrica. Por defecto está en Auto, que elige automáticamente un sistema abierto o una clave compartida en función de la capacidad y el acceso de la solicitud de un cliente inalámbrico"
                       } ,{                      
                           type: "name",
                           title: "Formato de clave WEP",
                           content: "Utilice el formato ASCII o Hexadecimal. El formato ASCII es una combinación de caracteres numéricos y alfanuméricos. El formato Hexadecimal es una combinación de números (0-9) y letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de clave",
                           content: "Seleccione la longitud de la clave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bits",
                           content: "Permite introducir 10 dígitos hexadecimales (0-9, A-F, a-f) o 5 caracteres ASCII en el campo del valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bits",
                           content: "Permite introducir 26 dígitos hexadecimales (0-9, A-F, a-f) o 13 caracteres ASCII en el campo del valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de la clave",
                           content: "Introduzca la clave WEP en el campo correspondiente."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Seleccione un modo de transmisión mixto."
                       } ,{                      
                           type: "name",
                           title: "Ancho de canal",
                           content: "Seleccione un ancho de canal (ancho de banda) para la red inalámbrica de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Seleccione un canal operativo para la red inalámbrica de 5GHz. Se recomienda dejar el canal en Auto si no ha experimentado un problema de intermitencia en la conexión inalámbrica."
                       } /*,{                      
                           type: "name",
                           title: "Potencia de transmisión",
                           content: "Seleccione Alta, Media o Baja para especificar la potencia de transmisión de datos. La configuración recomendada y por defecto es Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Haga clic en Guardar para guardar todos los cambios."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar WPS",
                           content: "Otros dispositivos pueden conectarse al punto de acceso (PA) por WPS con el PIN del PA."
                       }]
},
       WPS :{ 
               TITLE:"PIN de PA",
               CONTENT: [{
                           type: "name",
                           title: "PIN de PA",
                           content: "Encienda un dispositivo inalámbrico para conectarlo al PA utilizando el PIN (número de identificación personal) del PA."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Muestra el PIN del PA. El PIN por defecto se puede encontrar en la etiqueta del PA. Haga clic en Generar para generar un nuevo PIN aleatoriamente o haga clic en Predeterminado para restaurar el PIN predeterminado."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Asistente de WPS",
               CONTENT: [{
                           type: "name",
                           title: "Pulsar el botón (recomendado)",
                           content: "Seleccione este método de conexión para habilitar la función WPS y conectar fácilmente cualquier dispositivo con WPS habilitado en su red inalámbrica mediante el botón WPS o virtualmente mediante el botón Conectar."
                       } ,{                      
                           type: "name",
                           title: "Código PIN",
                           content: "Seleccione este método de conexión para añadir un dispositivo manualmente introduciendo el PIN de WPS del dispositivo inalámbrico en el campo y haga clic en Conectar."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Conectar a la red del anfitrión",
               CONTENT: [{
                           type: "name",
                           title: "Conectar a la red de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Habilite o deshabilite esta función para conectar el extensor a una red de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> existente."
                       } ,{                      
                           type: "name",
                           title: "Escáner inalámbrico",
                           content: "Haga clic en este botón para buscar y ver todas las redes Wi-Fi disponibles en el rango en el que desea conectar el extensor. Una vez se haya seleccionado una red, se rellenarán automáticamente el SSID y los ajustes de seguridad de la red."
                       } ,{                      
                           type: "name",
                           title: "SSID del anfitrión en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Introduzca el SSID (distingue entre mayúsculas y minúsculas) de la red del anfitrión a la que se conectará el extensor o haga clic en <strong>Escáner inalámbrico</strong> y seleccione una red Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Seguridad del anfitrión en 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Seleccione una de las opciones de seguridad para vincularse con la red del anfitrión."
                       } ,{                      
                           type: "name",
                           title: "Sin seguridad",
                           content: "Esta opción deshabilita la seguridad inalámbrica."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción solo admite la encriptación TKIP, que proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción admite la encriptación AES, que proporciona un mejor nivel de seguridad que WPA-PSK y está recomendada."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Esta opción admite la implementación múltiple del estándar WPA (Acceso Wi-Fi Protegido), como WPA y WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Esta opción es la forma más básica de seguridad inalámbrica que puede ser usada si sus dispositivos cliente solo pueden acceder inalámbricamente utilizando WEP (Privacidad Equivalente a Cableado). "
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Configuración de la red extendida",
               CONTENT: [{
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> extendida",
                           content: "Habilite o deshabilite la función inalámbrica de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> del extensor de rango."
                       } ,{                      
                           type: "name",
                           title: "SSID en 2.4GHz<span class=\"hidden_5g\">/5GHz</span> extendida",
                           content: "O bien utilice el botón <strong> Copiar SSID del anfitrión</strong> para copiar automáticamente el SSID del PA/router principal o introduzca un nuevo nombre (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Copiar SSID del anfitrión ",
                           content: "Haga clic en este botón para copiar y rellenar automáticamente el SSID y la configuración de seguridad de la red del anfitrión en los campos correspondientes."
                       } ,{                      
                           type: "name",
                           title: "Ocultar emisión del SSID",
                           content: "Seleccione esta casilla si quiere ocultar el SSID de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> extendido de la lista de redes Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Control de acceso",
               CONTENT: [{
                           type: "paragraph",
                           content: "La función Control de acceso se usa para permitir o bloquear el acceso de ordenadores específicos y otros dispositivos a su red extendida. Cuando un dispositivo está bloqueado, no puede conectarse a la red extendida."
                       } ,{                      
                           type: "paragraph",
                           content: "Para utilizarlo, active esta función y especifique una lista negra o blanca. Si el control de acceso está desactivado (Off), podrán conectarse todos los dispositivos, incluidos los de la lista negra."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Modo de acceso",
               CONTENT: [{
                           type: "name",
                           title: "Lista negra",
                           content: "Solo los dispositivos en la lista negra no tienen permitido el acceso a su red."
                       } ,{                      
                           type: "name",
                           title: "Lista blanca",
                           content: "Solo los dispositivos en la lista blanca tienen permitido el acceso a su red."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivos en línea",
               CONTENT: [{
                           type: "name",
                           title: "Nombre del dispositivo",
                           content: "Muestra el nombre del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la dirección MAC del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Tipo de conexión",
                           content: "Muestra el tipo de conexión del dispositivo conectado."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear un dispositivo",
                           content: "En la tabla Dispositivos conectados, haga clic en el icono Bloquear en la columna Modificar correspondiente al dispositivo que desee bloquear."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear varios dispositivos",
                           content: "En la tabla Dispositivos conectados, seleccione todos los dispositivos que desee bloquear y haga clic en Bloquear encima de la tabla. El dispositivo se añadirá automáticamente a la lista negra o blanca."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispositivos en la lista negra/blanca",
               CONTENT: [{
                           type: "step",
                           title: "Para añadir un dispositivo a lista negra o blanca",
       content: [ 
                "1. Haga clic en el icono Añadir.",
                "2. Introduzca el nombre del dispositivo.",
                "3. Introduzca la dirección MAC del dispositivo.",
                "4. Seleccione el tipo de Periodo efectivo. Si selecciona <b>No se puede acceder según horario/Acceso según horario</b>, establezca la hora y los días.",
                "5. Haga clic en OK."]
} ,{                      
                           type: "step",
                           title: "Modificar o borrar un dispositivo de la lista negra/blanca",
                           content: "En la lista negra/blanca, haga clic en el icono Modificar o en el icono Borrar correspondiente al dispositivo que desee modificar o borrar."
                       } ,{                      
                           type: "step",
                           title: "Borrar varios dispositivos de la lista negra/blanca",
                           content: "En la lista negra/blanca, seleccione todos los dispositivos que desee borrar y haga clic en Borrar encima de la lista."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Puerto Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Red del anfitrión para el puerto Ethernet",
                           content: "Seleccione la banda inalámbrica (2.4GHz o 5GHz) de la red anfitriona que se está usando para enviar tráfico de los clientes conectados por cable a los clientes inalámbricos. <br/> Esta opción solo está disponible cuando están habilitadas ambas redes anfitrionas en 2.4GHz y 5GHz. "
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Ajustes de la red",
               CONTENT: [{
                           type: "name",
                           title: "Obtener una dirección IP automáticamente",
                           content: "Seleccione esta opción (recomendado) si desea que su extensor obtenga dinámicamente una dirección IP y una puerta de enlace predeterminada de su red anfitriona."
                       } ,{                      
                           type: "name",
                           title: "Utilizar la siguiente dirección IP",
                           content: "Seleccione esta opción si desea configurar manualmente una dirección IP y una puerta de enlace para su extensor."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Introduzca la dirección IP en notación decimal con puntos (por defecto, 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Máscara de subred",
                           content: "Introduzca la máscara de subred en notación decimal con puntos para determinar el tamaño de la red (por defecto, 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Puerta de enlace predeterminada",
                           content: "Introduzca en notación decimal con puntos, la puerta de enlace predeterminada que esté en la misma subred que la dirección IP. Suele ser la dirección IP LAN de su router."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Ajustes del servidor DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Por defecto, el extensor de rango está configurado como un servidor DHCP (protocolo de configuración inalámbrica de host) para proporcionar la configuración TCP/IP a todos los clientes que están conectados al extensor en la LAN desde el grupo de direcciones IP."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Por defecto, está seleccionado Auto; el servidor DHCP asigna automáticamente una dirección IP válida al cliente. Puede activar (On) o desactivar (Off) el servidor DHCP. Si se desactiva, deberá tener otro servidor DHCP en la LAN; de lo contrario, tendrá que configurar la dirección IP de cada cliente de forma manual."
                       } ,{                      
                           type: "name",
                           title: "Grupo de direcciones IP",
                           content: "Introduzca un rango de direcciones IP que pueda concederse a los clientes. Por defecto, la dirección IP inicial es 192.168.0.100 y la dirección IP final es 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Tiempo de concesión de dirección",
                           content: "Introduzca durante cuánto tiempo se concederá una dirección IP al cliente (entre 1 y 2880 minutos). El valor por defecto es 1 minuto."
                       } ,{                      
                           type: "name",
                           title: "Puerta de enlace predeterminada",
                           content: "<br/>Introduzca la dirección IP LAN del extensor de rango. Por defecto es 192.168.0.254. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS primario",
                           content: "Introduzca la dirección IP DNS proporcionada por su ISP. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS secundario",
                           content: "Introduzca los parámetros proporcionados por su ISP. (Opcional) "
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Para utilizar el servidor DHCP del extensor de rango, todos los clientes de su LAN deberán estar configurados para obtener la dirección IP automáticamente."
                       } ,{                      
                           type: "paragraph",
                           content: "Haga clic en <strong> Guardar </strong> para guardar su configuración."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Reserva de dirección",
               CONTENT: [{
                           type: "paragraph",
                           content: "Puede reservar manualmente una dirección IP para un cliente que esté conectado al extensor. Una vez reservada, el servidor DHCP siempre asignará la dirección IP al mismo cliente."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la dirección MAC del cliente con la dirección IP reservada de DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP reservada",
                           content: "Muestra la dirección IP reservada del cliente."
                       } ,{                      
                           type: "name",
                           title: "Descripción",
                           content: "Muestra la descripción del dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Estado",
                           content: "Muestra el estado actual (habilitado o deshabilitado) del dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Muestra opciones para modificar o borrar el cliente correspondiente."
                       } ,{                      
                           type: "step",
                           title: "Para reservar una dirección IP",
       content: [ 
                "1. Haga clic en Añadir.",
                "2. Introduzca la dirección MAC del cliente deseado.",
                "3. Introduzca la dirección IP que desea reservar para el cliente.",
                "4. Introduzca la descripción del cliente.",
                "5. Seleccione Habilitar esta entrada.",
                "6. Haga clic en OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar o borrar un cliente existente",
                           content: "En la tabla, haga clic en el icono Editar o en el icono Papelera que corresponda al cliente que desea modificar o borrar."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Lista de clientes DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Muestra la siguiente información de cada cliente DHCP que está conectado al extensor de rango."
                       } ,{                      
                           type: "name",
                           title: "Número de cliente",
                           content: "Muestra el número de cliente DHCP asociado."
                       } ,{                      
                           type: "name",
                           title: "Nombre del cliente",
                           content: "El nombre del cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC del cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP asignada",
                           content: "La dirección IP asignada al cliente por el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tiempo de concesión",
                           content: "El tiempo que la dirección IP está concedida al cliente DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Actualizar</strong> - Haga clic en este botón para actualizar la lista de clientes DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Cobertura WiFi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Seleccione el nivel de cobertura Wi-Fi del extensor de rango."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Ajustes de hora",
               CONTENT: [{
                           type: "name",
                           title: "Hora actual",
                           content: "Muestra la hora actual del sistema."
                       },{
                           type: "name",
                           title: "Zona horaria",
                           content: "Seleccione su zona horaria."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Horario de verano",
               CONTENT: [{
              type: "step",
                            title: "Para establecer el horario de verano:",
              content:[
                "1. Seleccione Horario de verano.",
                "2. Seleccione la fecha y hora <b>Inicio</b> que marcan el comienzo del horario de verano en su zona horaria local.",
                "3. Seleccione la fecha y hora <b>Fin</b> que marcan el final del horario de verano en su zona horaria local.",
                "4. Haga clic en Guardar."]},
        {
          type:"name",
          title:"Estado actual",
          content:"Indica si la hora actual corresponde o no al horario de verano."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Control de LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "El LED de Control permite encender o apagar los LED de su extensor de rango conforme a un horario específico."
                       } ,{                      
                           type: "name",
                           title: "Modo nocturno",
                           content: "Indica si el Modo nocturno está activado (On) o desactivado (Off)."
                       } ,{                      
                           type: "name",
                           title: "Hora de apagado de LED",
                           content: "Seleccione el horario para apagar los LED."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Programación de apagado",
               CONTENT: [{
                           type: "paragraph",
                           content: "Habilite esta función para apagar el extensor conforme al horario, a efectos de ahorro de energía."
                       } ,{                      
                           type: "name",
                           title: "Habilitar programación de apagado",
                           content: "Seleccione esta opción para habilitar la programación de apagado."
                       } ,{                      
                           type: "name",
                           title: "Periodo de apagado",
                           content: "Seleccione el periodo de tiempo en el que el extensor se apagará automáticamente."
                       } ,{                      
                           type: "name",
                           title: "Día(s)",
                           content: "Seleccione los días en los que se apagará el extensor."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Actualización de firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versión de firmware",
                           content: "Muestra la versión de firmware actual."
                       } ,{                      
                           type: "name",
                           title: "Versión de hardware",
                           content: "Muestra la versión de hardware actual."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANTE: para evitar fallos en la actualización, tenga en cuenta lo siguiente:",
       content: [ 
                "1. El archivo de actualización de firmware debe corresponderse con la versión de hardware actual del extensor.",
                "2. Es importante mantener el extensor encendido durante el proceso de actualización, ya que cualquier pérdida de alimentación podría dañar su extensor."]
} ,{                      
                           type: "step",
                           title: "Para actualizar el firmware del extensor:",
       content: [ 
                "1. Descargue el último archivo de actualización de firmware de <a class=\"link\" href=\"http://www.tp-link.es/Support/\" target=\"_blank\"> Asistencia de TP-Link </a> en su ordenador.",
                "2. Haga clic en <strong>Examinar</strong> para localizar y seleccionar el archivo descargado.",
                "3. Haga clic en <strong>Actualizar</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "La actualización tardará unos minutos en completarse y el extensor de rango se reiniciará automáticamente cuando finalice."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Copia de seguridad",
               CONTENT: [{
                           type: "paragraph",
                           content: "Se recomienda encarecidamente hacer una copia de seguridad de su configuración actual, en caso de que se necesite restaurar el sistema a un estado previo o restaurar sus valores de fábrica."
                       } ,{                      
                           type: "paragraph",
                           content: "Haga clic en Realizar copia de seguridad para guardar su configuración actual en un archivo config.bin en su ordenador. Asegúrese de guardar el archivo en un lugar seguro donde pueda recuperarlo si es necesario."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Restaurar",
               CONTENT: [{
                           type: "step",
                           title: "Para restaurar la configuración guardada desde un archivo de copia de seguridad:",
       content: [ 
                "1. Haga clic en Examinar para localizar su archivo de copia de seguridad.",
                "2. Seleccione su archivo de copia de seguridad.",
                "3. Haga clic en Restaurar.",
                "4. Haga clic en <strong>Sí</strong> para confirmar la restauración del sistema.",
                "El proceso de restauración puede tardar unos minutos en completarse; el extensor se reiniciará automáticamente cuando finalice."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Restaurar a la configuración de fábrica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Haga clic en Restaurar a la configuración de fábrica para restablecer los valores predeterminados de fábrica de su extensor de rango."
                       } ,{                      
                           type: "note",
                            title: "Nota",
							content: [
								"1. Restaurar a Valores de Fábrica borrará todas las configuraciones que tenga configuradas en el extensor. Para volver a acceder a la página de gestión del extensor, utilice por defecto admin para nombre de usuario y contraseña.",
								"1. El Reset de Fábrica borrará toda la configuración previa del extensor. Por favor cree una contraseña para futuros accesos.",
								"2. Por favor NO desenchufe el extensor de rango durante la copia de seguridad o el proceso de restauración."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Cuenta de administrador",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta página permite cambiar el nombre de usuario y/o contraseña de acceso por defecto."
                       } ,{                      
                           type: "paragraph",
                           content: "En esta página, puedes cambiar tu contraseña de acceso."
                       } ,{                      
                           type: "name",
                           title: "Nombre de usuario antiguo",
                           content: "Introduzca su nombre de usuario actual."
                       } ,{                      
                           type: "name",
                           title: "Contraseña antigua",
                           content: "Introduzca su contraseña actual."
                       } ,{                      
                           type: "name",
                           title: "Nombre de usuario nuevo",
                           content: "Introduzca un nuevo nombre de usuario."
                       } ,{                      
                           type: "name",
                           title: "Contraseña nueva",
                           content: "Introduzca una nueva contraseña."
                       } ,{                      
                           type: "name",
                           title: "Confirmar contraseña",
                           content: "Vuelva a introducir su nueva contraseña."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Registro del sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "La página Registro del sistema muestra una lista de las actividades (eventos) más recientes del extensor. Puede definir el tipo de registro y/o el nivel de registro que desee ver."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccione el tipo de registro que desee ver."
                       } ,{                      
                           type: "name",
                           title: "Nivel",
                           content: "Seleccione el nivel de registro que desee ver."
                       } ,{                      
                           type: "name",
                           title: "Actualizar",
                           content: "Haga clic en este botón para actualizar el registro del sistema."
                       } ,{                      
                           type: "name",
                           title: "Borrar todo",
                           content: "Haga clic en este botón para eliminar permanentemente todos los registros."
                       } ,{                      
                           type: "name",
                           title: "Guardar registro",
                           content: "Haga clic en este botón para guardar el registro del sistema como un archivo .txt."
                       }]
},
    });
})(jQuery);
