(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Configuraciones de la Región",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Seleccione su región del menú desplegable. Si su país o región no está en la lista, podría tener restringido el uso de la radio inalámbrica en su localidad."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Estado",
               CONTENT: [{
                           type: "paragraph",
                           content: "La página de Estado Básico muestra un panel de control con su estado de red e información actual. Puede hacer clic en cada ícono para obtener más detalles."
                       } ,{                      
                           type: "title",
                            title: "Extensor de Rango"
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra la información de la red extendida de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
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
                           content: "La dirección IP que se asigna al cliente mediante el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "El tipo de la dirección IP asignado por el servidor DHCP."
                       } ,{                      
                           type: "title",
                            title: "Red del Host de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> "
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra la siguiente información de la red del host de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "EL SSID de la red del host."
                       } ,{                      
                           type: "name",
                           title: "Señal",
                           content: "La potencia de la señal de la red del host."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC física de la red del host."
                       } ,{                      
                           type: "title",
                            title: "Clientes"
                       } ,{                      
                           type: "paragraph",
                           content: "Muestra los dispositivos clientes actuales conectados al extensor de 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "La red extendida de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> a la cual está conectado el dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Nombre del Dispositivo",
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
                           content: "La página de Estado Básico muestra un panel de control con su estado de red e información actual. Puede hacer clic en cada ícono para obtener más detalles. "
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Estado de Internet",
                           content: "Muestra el estado actual de la conexión de Internet del dispositivo."
                       } ,{                      
                           type: "title",
                            title: "Punto de Acceso"
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Muestra el estado del servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP que se asigna al punto de acceso mediante el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Muestra el tipo de punto de acceso para obtener su dirección IP."
                       } ,{                      
                           type: "title",
                            title: "Clientes Inalámbricos"
                       } ,{                      
                           type: "name",
                           title: "Nombre",
                           content: "Muestra el nombre de los dispositivos clientes."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP que se asignada a los dispositivos clientes."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la dirección MAC física de los dispositivos clientes."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Configuraciones",
               CONTENT: [{
                           type: "name",
                           title: "Región",
                           content: "Seleccione su región del menú desplegable. Si su país o región no está en la lista, podría tener restringido el uso de la radio inalámbrica en su localidad."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Inalámbrico de 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar la Radio Inalámbrica",
                           content: "Seleccionar esta casilla de verificación para habilitar la frecuencia de radio inalámbrica de 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Nombre de la Red Inalámbrica (SSID)",
                           content: "Puede dejar el Nombre de la Red predeterminado (SSID) como está, o ingresar un nombre nuevo (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas. "
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Seleccionar esta casilla de verificación si desea ocultar el nombre de la red de 2.4GHz (SSID) de la lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Seguridad",
                           content: "Seleccionar una de las siguientes opciones de seguridad:",
       children: [{                      
                           type: "name",
                           title: "Sin Seguridad",
                           content: "Seleccionar esta opción para deshabilitar la seguridad inalámbrica.  Se recomienda ampliamente que habilite la seguridad inalámbrica para proteger su red inalámbrica de acceso no autorizado.  "
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Seleccionar esta opción para habilitar el método de autenticación estándar basado en una PSK (Pre-shared Key - Clave pre-compartida), también llamada frase de contraseña. Se recomienda esta opción. Si se selecciona, configurar lo siguiente.  ",
       children: [{                      
                           type: "name",
                           title: "Versión",
                           content: "Seleccionar una versión de seguridad para su red inalámbrica. ",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "Esta opción soporta múltiple implementación del WPA (Wi-Fi Protected Access - Acceso Wi-Fi protegido) estándar, como WPA y WPA2. "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción soporta la encriptación de TKIP únicamente, la cual proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción soporta la encriptación de AES que proporciona un mejor nivel de seguridad que WPA-PSK y se recomienda."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptación",
                           content: "Seleccionar un tipo de encriptación de seguridad:  TKIP (Temporal Key Integrity Protocol - Protocolo de Integridad de Clave Temporal), AES (Advanced Encryption Standard - Estándar de Encriptación Avanzada), o Automático (tanto para TKIP como AES). No se recomienda usar la encriptación TKIP si el extensor funciona en el modo 802.11n, ya que TKIP no se soporta por la especificación 802.11n. Si se selecciona TKIP, se deshabilitará la función WPS."
                       } ,{                      
                           type: "name",
                           title: "Contraseña",
                           content: "Ingresar una contraseña inalámbrica entre 8 y 63 caracteres ASCII o entre 8 y 64 caracteres hexadecimales en este campo. "
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Seleccionar esta opción para habilitar el método de autenticación básico si alguna versión de sus dispositivos clientes sólo pueden acceder al inalámbrico mediante WEP (Wired Equivalent Privacy - Privacidad Equivalente al Cableado).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccionar un tipo de autenticación para su red inalámbrica. Automático es la opción predeterminada, la cual escoge el Sistema Abierto automáticamente o Clave Compartida basándose en la capacidad y solicitud de acceso del cliente inalámbrico. "
                       } ,{                      
                           type: "name",
                           title: "Formato Clave WEP",
                           content: "Usar el formato ASCII o seleccionar Hexadecimal. El formato ASCII es una combinación de caracteres alfabéticos y numéricos. El formato hexadecimal es una combinación de números (0-9) y letras (A-F, a-f). "
                       } ,{                      
                           type: "name",
                           title: "Tipo de Clave",
                           content: "Seleccionar una longitud de la clave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bits",
                           content: "Le permite ingresar 10 dígitos hexadecimales (0-9, A-F, a-f) o 5 caracteres ASCII en el campo de Valor de WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bits",
                           content: "Le permite ingresar 26 dígitos hexadecimales (0-9, A-F, a-f) o 13 caracteres ASCII en el campo de Valor de WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de la Clave",
                           content: "Ingresar una clave WEP en el campo respectivo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Seleccionar un modo mixto de transmisión."
                       } ,{                      
                           type: "name",
                           title: "Ancho del Canal",
                           content: "Seleccionar un ancho de canal (ancho de banda) para la red inalámbrica de 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Seleccionar un canal de operación para la red inalámbrica de 2.4GHz. Se recomienda dejar el canal en Automático, si no está experimentando problemas de conexión inalámbrica intermitente.  "
                       } /*,{                      
                           type: "name",
                           title: "Potencia de Transmisión",
                           content: "Seleccionar Alto, Medio, o Bajo para especificar la potencia de transmisión de datos. La configuración predeterminada y recomendada es Alto. "
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Hacer clic en Guardar para guardar todas sus configuraciones."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Inalámbrico de 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar la Radio Inalámbrica",
                           content: "Seleccionar esta casilla de verificación para habilitar la frecuencia de radio inalámbrica de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Nombre de la Red Inalámbrica (SSID)",
                           content: "Puede dejar el Nombre de la Red predeterminado (SSID) como está, o ingresar un nombre nuevo (hasta 32 caracteres). Este campo distingue entre mayúsculas y minúsculas. "
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Seleccionar esta casilla de verificación si desea ocultar el nombre de la red de 5GHz (SSID) de la lista de redes Wi-Fi.  "
                       } ,{                      
                           type: "name",
                           title: "Seguridad",
                           content: "Seleccionar una de las siguientes opciones de seguridad:",
       children: [{                      
                           type: "name",
                           title: "Sin Seguridad",
                           content: "Seleccionar esta opción para deshabilitar la seguridad inalámbrica.  Se recomienda ampliamente que habilite la seguridad inalámbrica para proteger su red inalámbrica de acceso no autorizado. "
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Seleccionar esta opción para habilitar el método de autenticación estándar basado en una PSK (Pre-shared Key - clave pre-compartida), también llamada frase de contraseña. Se recomienda esta opción. Si se selecciona, configurar lo siguiente.  ",
       children: [{                      
                           type: "name",
                           title: "Versión",
                           content: "Seleccionar una versión de seguridad para su red inalámbrica.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "Esta opción soporta múltiple implementación del WPA (Wi-Fi Protected Access - Acceso Wi-Fi protegido) estándar, como WPA y WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción soporta la encriptación de TKIP únicamente, la cual proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción soporta la encriptación de AES que proporciona un mejor nivel de seguridad que WPA-PSK y se recomienda."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptación",
                           content: "Seleccionar un tipo de encriptación de seguridad:  TKIP (Temporal Key Integrity Protocol - Protocolo de Integridad de Clave Temporal), AES (Advanced Encryption Standard - Estándar de Encriptación Avanzada), o Automático (tanto para TKIP como AES). No se recomienda usar la encriptación TKIP si el extensor funciona en el modo 802.11n, ya que TKIP no se soporta por la especificación 802.11n. Si se selecciona TKIP, se deshabilitará la función WPS."
                       } ,{                      
                           type: "name",
                           title: "Contraseña",
                           content: "Ingresar una contraseña inalámbrica entre 8 y 63 caracteres ASCII o entre 8 y 64 caracteres hexadecimales en este campo. "
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Seleccionar esta opción para habilitar el método de autenticación básico si alguna versión de sus dispositivos clientes sólo pueden acceder al inalámbrico mediante WEP (Wired Equivalent Privacy - Privacidad Equivalente al Cableado).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccionar un tipo de autenticación para su red inalámbrica. Automático es la opción predeterminada, la cual escoge el Sistema Abierto automáticamente o Clave Compartida basándose en la capacidad y solicitud de acceso del cliente inalámbrico. "
                       } ,{                      
                           type: "name",
                           title: "Formato Clave WEP",
                           content: "Usar el formato ASCII o seleccionar Hexadecimal. El formato ASCII es una combinación de caracteres alfabéticos y numéricos. El formato hexadecimal es una combinación de números (0-9) y letras (A-F, a-f). "
                       } ,{                      
                           type: "name",
                           title: "Tipo de Clave",
                           content: "Seleccionar una longitud de la clave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bits",
                           content: "Le permite ingresar 10 dígitos hexadecimales (0-9, A-F, a-f) o 5 caracteres ASCII en el campo de Valor de WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bits",
                           content: "Le permite ingresar 26 dígitos hexadecimales (0-9, A-F, a-f) o 13 caracteres ASCII en el campo de Valor de WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de la Clave",
                           content: "Ingresar una clave WEP en el campo respectivo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Seleccionar un modo mixto de transmisión."
                       } ,{                      
                           type: "name",
                           title: "Ancho del Canal",
                           content: "Seleccionar un ancho de canal (ancho de banda) para la red inalámbrica de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Seleccionar un canal de operación para la red inalámbrica de 5GHz. Se recomienda dejar el canal en Automático, si no está experimentando problemas de conexión inalámbrica intermitente.  "
                       } /*,{                      
                           type: "name",
                           title: "Potencia de Transmisión",
                           content: "Seleccionar Alto, Medio, o Bajo para especificar la potencia de transmisión de datos. La configuración predeterminada y recomendada es Alto. "
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Hacer clic en Guardar para guardar todas sus configuraciones."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar WPS",
                           content: "Otros dispositivos pueden conectarse a este punto de acceso (AP) por WPS con el PIN del AP."
                       }]
},
       WPS :{ 
               TITLE:"PIN de AP",
               CONTENT: [{
                           type: "name",
                           title: "PIN de AP",
                           content: "Activar para permitir que los dispositivos inalámbricos se conecten al AP mediante el PIN (Personal Identification Number - Número de Identificación Personal) del AP."
                       } ,{                      
                           type: "name",
                           title: "PIN  ",
                           content: "Muestra el PIN del AP. El PIN predeterminado se puede encontrar en la etiqueta del AP. Hacer clic en Generar para generar un nuevo PIN al azar o hacer clic en Predeterminado para restaurar el PIN actual al PIN predeterminado de fábrica. "
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Asistente de WSP",
               CONTENT: [{
                           type: "name",
                           title: "Presionar el Botón (Recomendado)",
                           content: "Seleccionar este método de conexión para habilitar la característica WPS para conectar fácilmente cualquier dispositivo que tenga habilitado WPS a su red inalámbrica mediante el botón WPS o virtualmente mediante el botón de Conectar."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Seleccionar este método de conexión para agregar un dispositivo manualmente ingresando el PIN WPS del dispositivo en el campo y hacer clic en Conectar."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Conectarse a la Red del Host",
               CONTENT: [{
                           type: "name",
                           title: "Conectarse a la Red de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ",
                           content: "Habilitar o deshabilitar para conectar el extensor a una red de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> existente."
                       } ,{                      
                           type: "name",
                           title: "Escáner Inalámbrico ",
                           content: "Hacer clic en este botón para escanear y mostrar todas las redes Wi-Fi disponibles dentro del rango a la que desea se conecte el extensor. Una vez que una red se selecciona, el SSID y los ajustes de seguridad de esa red se alimentarán automáticamente. "
                       } ,{                      
                           type: "name",
                           title: "SSID del Host de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ",
                           content: "Ingresar el SSID con distinción entre mayúsculas y minúsculas de la red del host a la cual el extensor se conectará, o hacer clic en <strong>Escáner Inalámbrico</strong> y seleccionar una red Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Seguridad del Host de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ",
                           content: "Seleccionar una de las opciones de seguridad para que coincida con la red del host. "
                       } ,{                      
                           type: "name",
                           title: "Sin Seguridad",
                           content: "Esta opción deshabilita la seguridad inalámbrica. "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opción soporta la encriptación de TKIP únicamente, la cual proporciona un buen nivel de seguridad."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opción soporta la encriptación de AES que proporciona un mejor nivel de seguridad que WPA-PSK y se recomienda."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Esta opción soporta múltiple implementación del WPA (Wi-Fi Protected Access - Acceso Wi-Fi protegido) estándar, como WPA y WPA2. "
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Esta opción es la forma más básica de la seguridad inalámbrica que puede usarse si sus dispositivos clientes sólo pueden acceder al inalámbrico mediante WEP (Wired Equivalent Privacy - Privacidad Equivalente al Cableado)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Configuraciones de la Red Extendida",
               CONTENT: [{
                           type: "name",
                           title: "Extendida a 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Habilitar o deshabilitar la función inalámbrica de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> del extensor de rango."
                       } ,{                      
                           type: "name",
                           title: "SSID Extendido a 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ",
                           content: "Usar el botón <strong>Copiar Host SSID</strong> para copiar automáticamente el router principal/SSID de AP o ingresar un nombre nuevo (hasta 32 caracteres de longitud). Este campo distingue entre mayúsculas y minúsculas. "
                       } ,{                      
                           type: "name",
                           title: "Copiar el SSID del Host",
                           content: "Hacer clic en este botón para copiar y alimentar automáticamente el SSID y las configuraciones de seguridad de la red del Host en los campos respectivos."
                       } ,{                      
                           type: "name",
                           title: "Esconder la difusión de SSID",
                           content: "Seleccionar esta casilla de verificación si desea ocultar el SSID de 2.4GHz<span class=\"hidden_5g\">/5GHz</span> extendido de la lista de redes Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Control de Acceso",
               CONTENT: [{
                           type: "paragraph",
                           content: "El Control de Acceso se usa para permitir o bloquear el acceso a su red extendida a computadoras y otros dispositivos específicos. Cuando un dispositivo se bloquea, no es capaz de conectarse a la red extendida. "
                       } ,{                      
                           type: "paragraph",
                           content: "Para usar el Control de Acceso, habilitar esta característica y especificar una lista negra o lista blanca. Si el Control de Acceso está deshabilitado (Apagado), todos los dispositivos, incluyendo los que se encuentran en la lista negra, tienen permitido conectarse. "
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Modo de Acceso",
               CONTENT: [{
                           type: "name",
                           title: "Lista Negra",
                           content: "Sólo los dispositivos en la Lista Negra NO tienen permitido acceder a su red. "
                       } ,{                      
                           type: "name",
                           title: "Lista Blanca",
                           content: "Sólo los dispositivos en la Lista Blanca tienen permitido acceder a su red. "
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivos en línea",
               CONTENT: [{
                           type: "name",
                           title: "Nombre del Dispositivo",
                           content: "Muestra el nombre del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Muestra la dirección IP del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la Dirección MAC del dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Conexión",
                           content: "Muestra el tipo de conexión del dispositivo conectado."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear un dispositivo",
                           content: "En la tabla de Dispositivos en línea, hacer clic en el ícono de la columna de Modificar que corresponda al dispositivo que desea bloquear."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear múltiples dispositivos",
                           content: "En la tabla de Dispositivos en línea, seleccionar todos los dispositivos que desea bloquear, hacer clic en Bloquear encima de la tabla. El dispositivo será agregado automáticamente a los Dispositivos en la Lista Negra o Lista Blanca. "
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispositivos en Lista Negra/Lista Blanca",
               CONTENT: [{
                           type: "step",
                           title: "Para incluir en lista negra  o lista blanca un dispositivo ",
       content: [ 
                "1. Hacer clic en el ícono de Agregar.",
                "2. Ingresar el Nombre del Dispositivo.",
                "3. Ingresar la dirección MAC del dispositivo.",
                "4. Seleccionar el tipo de Tiempo de Vigencia. Si selecciona <b>No se puede acceder en base al calendario/Acceso en base al calendario</b>, ajustar la hora y los días.",
                "5. Hacer clic en OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar o borrar un dispositivo en la Lista Negra/Lista Blanca",
                           content: "En la tabla de la Lista Negra/Lista Blanca, hacer clic en el icono de Editar o el icono de Papelera de Reciclaje que corresponda al dispositivo que desea modificar o borrar."
                       } ,{                      
                           type: "step",
                           title: "Para borrar múltiples dispositivos en la Lista Negra/Lista Blanca ",
                           content: "En la tabla de la Lista Negra/Lista Blanca, seleccionar todos los dispositivos que desea borrar, hacer clic en Borrar encima de la lista. "
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Red del Host para el puerto Ethernet",
                           content: "Seleccionar la banda inalámbrica (2.4GHz o 5GHz) de la red del host que se usó para enviar el tráfico de los clientes conectados por cable a los clientes inalámbricos.<br/>Esta opción sólo está disponible cuando están habilitadas las dos redes del host de 2.4GHz y 5GHz."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Configuraciones de la Red",
               CONTENT: [{
                           type: "name",
                           title: "Obtener un dirección IP automáticamente",
                           content: "Seleccionar esta opción (recomendada) si desea que su extensor obtenga dinámicamente una dirección IP y la puerta de enlace de su red del host."
                       } ,{                      
                           type: "name",
                           title: "Usar la siguiente dirección IP",
                           content: "Seleccionar esta opción si configura manualmente una dirección IP y la puerta de enlace para su extensor."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP",
                           content: "Ingresar la dirección IP en notación decimal con puntos (192.168.0.254 de manera predeterminada)."
                       } ,{                      
                           type: "name",
                           title: "Máscara de Subred ",
                           content: "Ingresar la máscara de subred en notación decimal con puntos que determine el tamaño de la red (255.255.255.0 de manera predeterminada) "
                       } ,{                      
                           type: "name",
                           title: "Puerta de Enlace Predeterminada ",
                           content: "Ingresar la puerta de enlace que está en la misma subred que la dirección IP en notación decimal con puntos. Generalmente es la dirección IP de la LAN de su router. "
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Configuraciones del Servidor DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "De manera predeterminada, el extensor de rango está establecido como un servidor DHCP (Dynamic Host Configuration Protocol - Protocolo de Configuración del Host Dinámico) para proporcionar la configuración de TCP/IP para todos los clientes que están conectados al extensor en la LAN del Conjunto de Direcciones IP."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "De manera predeterminada, se selecciona Automático; el servidor DHCP asigna automáticamente una dirección IP válida al cliente. Puede activar (habilitar) o desactivar (deshabilitar) el servidor DHCP. Si selecciona Desactivar, debe tener otro servidor DHCP dentro de su LAN; de lo contrario, tiene que configurar la dirección IP para cada cliente manualmente."
                       } ,{                      
                           type: "name",
                           title: "Conjunto de Direcciones IP",
                           content: "Ingresar un rango de direcciones IP que puede arrendarse a los clientes. De manera predeterminada, la dirección IP de inicio es 192.168.0.100 y la dirección IP final es 192.168.0.199. "
                       } ,{                      
                           type: "name",
                           title: "Tiempo de Arrendamiento de Direcciones",
                           content: "Ingresar la duración de tiempo que una dirección IP puede arrendarse al cliente entre 1 y 2880 minutos. El valor predeterminado es 1 minuto."
                       } ,{                      
                           type: "name",
                           title: "Puerta de Enlace Predeterminada",
                           content: "<br/>Ingresar la dirección IP de la LAN del extensor de rango. El valor predeterminado es 192.168.0.254. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS Primario",
                           content: "Ingresar la dirección IP del DNS proporcionada por su ISP. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS Secundario",
                           content: "Ingresar estos parámetros como se proporcionaron por su ISP. (Opcional) "
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Para usar el servidor DHCP del extensor de rango, todos los clientes en su LAN deben configurarse para obtener la dirección IP automáticamente. "
                       } ,{                      
                           type: "paragraph",
                           content: "Hacer clic en <strong>Guardar</strong> para guardar su configuración."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Reservación de Dirección",
               CONTENT: [{
                           type: "paragraph",
                           content: "Puede reservar manualmente una dirección IP para un cliente que está conectado al extensor. Una vez reservada, la dirección IP sólo se asignará al mismo cliente mediante el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "Muestra la dirección MAC del cliente con dirección IP reservada de DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP Reservada ",
                           content: "Muestra la dirección IP reservada del cliente."
                       } ,{                      
                           type: "name",
                           title: "Descripción",
                           content: "Muestra una descripción del dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Estado",
                           content: "Muestra el estado actual (habilitado o deshabilitado) del dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Muestra opciones para Modificar o Borrar el cliente correspondiente."
                       } ,{                      
                           type: "step",
                           title: "Para reservar una dirección IP",
       content: [ 
                "1. Hacer clic en Agregar. ",
                "2. Ingresar la dirección MAC de su cliente deseado.",
                "3. Ingresar la dirección IP que desea reservar para el cliente.",
                "4. Ingresar una descripción para el cliente.",
                "5. Seleccionar Habilitar Esta Entrada.",
                "6. Hacer clic en OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar o borrar un cliente existente ",
                           content: "En la tabla, hacer clic en el ícono de Editar o en el ícono de Papelera de Reciclaje que corresponda al cliente que desee modificar o borrar. "
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Lista de Clientes DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Muestra la siguiente información de cada cliente DHCP que está conectado al extensor de rango."
                       } ,{                      
                           type: "name",
                           title: "Clientes Totales",
                           content: "Muestra el número del cliente DHCP asociado."
                       } ,{                      
                           type: "name",
                           title: "Nombre del Cliente",
                           content: "El nombre del cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección MAC",
                           content: "La dirección MAC del cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dirección IP Asignada",
                           content: "La dirección IP que está asignada al cliente por el servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tiempo Arrendado",
                           content: "La duración de tiempo que la dirección IP se arrienda para el cliente DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Actualizar</strong> - Hacer clic en este botón para actualizar la Lista de Clientes DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Cobertura de Wi-fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Seleccionar nivel de cobertura de Wi-Fi para su extensor de rango."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Configuraciones de la Hora",
               CONTENT: [{
                           type: "name",
                           title: "Hora actual",
                           content: "Mostrar la hora actual del sistema."
                       },{
                           type: "name",
                           title: "Zona Horaria",
                           content: "Seleccionar su zona horaria."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Cambio de hora estacional",
               CONTENT: [{
              type: "step",
                            title: "Para ajustar el Cambio de hora estacional",
              content:[
                "1. Seleccionar Cambio de hora estacional.",
                "2. Seleccionar la fecha y la hora <b>Iniciales</b> correctas cuando el cambio de hora estacional inicie en su zona horaria local.",
                "3. Seleccionar la fecha y la hora <b>Finales</b> correctas cuando el cambio de hora estacional termine en su zona horaria local.",
                "4. Hacer clic en Guardar."]},
        {
          type:"name",
          title:"Estado actual",
          content:"Indica si la hora actual está en el cambio de hora estacional o no."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Control de LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "El Control de LED le permite encender o apagar los LED en su extensor de rango de acuerdo a un programa de tiempo específico."
                       } ,{                      
                           type: "name",
                           title: "Modo Nocturno",
                           content: "Indica si el Modo Nocturno está Activado (habilitado) o Apagado (deshabilitado)."
                       } ,{                      
                           type: "name",
                           title: "Tiempo de apagado del LED",
                           content: "Seleccionar el programa de tiempo para apagar los LEDs."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Horario de energía",
               CONTENT: [{
                           type: "paragraph",
                           content: "Activar esta función para desactivar el extensor de acuerdo al horario de energía para fines de ahorro de energía."
                       } ,{                      
                           type: "name",
                           title: "Activar Horario de energía",
                           content: "Seleccionar esta opción para activar el Horario de energía."
                       } ,{                      
                           type: "name",
                           title: "Desactivar hora",
                           content: "Seleccionar el período de tiempo para desactivar el extensor automáticamente."
                       } ,{                      
                           type: "name",
                           title: "Día(s)",
                           content: "Seleccionar el/los día(s) cuando se desactivará el extensor."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Actualización del Firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versión del Firmware",
                           content: "Muestra la versión actual del firmware."
                       } ,{                      
                           type: "name",
                           title: "Versión del Hardware",
                           content: "Muestra la versión actual del hardware."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANTE: Para prevenir fallas de actualización, por favor observe lo siguiente: ",
       content: [ 
                "1. El archivo de actualización del firmware debe concordar con la versión del hardware de su extensor.",
                "2. Es importante mantener el extensor encendido durante todo el proceso de actualización, ya que cualquier pérdida de energía podría dañar su extensor. "]
} ,{                      
                           type: "step",
                           title: "Para actualizar el firmware del extensor:",
       content: [ 
                "1. Descargar el archivo de actualización del firmware más reciente desde el <a class=\"link\" href=\"http://www.tp-link.com/ar/Support/\" target=\"_blank\">Soporte TP-Link</a> a su computadora.",
                "2. Hacer clic en <strong>Explorar</strong> para localizar y seleccionar el archivo del descargado.",
                "3. Hacer clic en <strong>Actualizar</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "La actualización toma algunos minutos en completarse y el extensor de rango reiniciará automáticamente por sí mismo cuando termine. "
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Copia de Seguridad",
               CONTENT: [{
                           type: "paragraph",
                           content: "Se recomienda ampliamente que realice una copia de seguridad de sus configuraciones actuales, en caso de que necesite una recuperación para restaurar el sistema a un estado anterior o a las configuraciones predeterminadas de fábrica."
                       } ,{                      
                           type: "paragraph",
                           content: "Hacer clic en Copia de Seguridad para guardar sus configuraciones actuales como un archivo config.bin en su computadora. Asegúrese de guardarlo en una ubicación segura donde pueda recuperarlo cuando sea necesario. "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Restaurar",
               CONTENT: [{
                           type: "step",
                           title: "Para restaurar sus configuraciones guardadas desde un archivo de copia de seguridad:",
       content: [ 
                "1. Hacer clic en Explorar para localizar su archivo de copia de seguridad.",
                "2. Seleccionar su archivo de copia de seguridad.",
                "3. Hacer clic en Restaurar.",
                "4. Hacer clic en <strong>Sí</strong> para confirmar la restauración del sistema.",
                "EL proceso de restauración puede tomar algunos minutos en completarse y el extensor reiniciará automáticamente por sí mismo cuando termine. "]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Restauración a los Ajustes Predeterminados de Fábrica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hacer clic en Restaurar para restablecer su extensor de rango a sus configuraciones predeterminadas de fábricas. "
                       } ,{                      
                           type: "note",
                            title: "Nota",
							content: [
								"1. La Restauración de fábrica borrará todos los valores que se han configurado para el extensor. Para volver a iniciar sesión en la página de administración del extensor, utilice el valor predeterminado “admin” para el nombre de usuario y la contraseña.",
								"1. La Restauración de Fábrica borrará todos los ajustes realizados anteriormente al extensor. Por favor, crea una contraseña para futuros intentos de conexión.",
								"2. NO apague el extensor de rangos durante el proceso de respaldo o restauración."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Cuenta de Administración",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta página le permite cambiar su nombre de usuario y/o contraseña de inicio de sesión predeterminado. "
                       } ,{                      
                           type: "paragraph",
                           content: "En esta página, puede cambiar su contraseña de acceso. "
                       } ,{                      
                           type: "name",
                           title: "Nombre de Usuario Anterior",
                           content: "Ingresar su nombre de usuario actual."
                       } ,{                      
                           type: "name",
                           title: "Contraseña Anterior",
                           content: "Ingresar su contraseña actual."
                       } ,{                      
                           type: "name",
                           title: "Nombre de Usuario Nuevo",
                           content: "Ingresar un nombre de usuario nuevo."
                       } ,{                      
                           type: "name",
                           title: "Contraseña Nueva",
                           content: "Ingresar una contraseña nueva."
                       } ,{                      
                           type: "name",
                           title: "Confirmar Contraseña",
                           content: "Volver a ingresar una contraseña nueva."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Registro del Sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "La página de Registro del Sistema muestra una lista de las actividades (eventos) más recientes del extensor. Puede definir qué tipos de registros y/o el nivel de registros que desea ver. "
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Seleccionar el Tipo de Registro que desea ver."
                       } ,{                      
                           type: "name",
                           title: "Nivel",
                           content: "Seleccionar el Nivel de Registro que desea ver."
                       } ,{                      
                           type: "name",
                           title: "Actualizar",
                           content: "Hacer clic en este botón para actualizar el registro del sistema."
                       } ,{                      
                           type: "name",
                           title: "Borrar Todo",
                           content: "Hacer clic en este botón para remover permanentemente todos los registros."
                       } ,{                      
                           type: "name",
                           title: "Guardar Registro",
                           content: "Hacer clic en este botón para guardar el registro del sistema como un archivo .txt."
                       }]
}
    });
})(jQuery);
