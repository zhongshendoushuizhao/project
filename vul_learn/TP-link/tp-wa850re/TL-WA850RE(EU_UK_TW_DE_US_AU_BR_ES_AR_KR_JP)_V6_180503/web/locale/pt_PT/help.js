(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Definições da região",
               CONTENT: [{
                           type: "name",
                           title: "Região",
                           content: "Selecione a sua região a partir do menu. Se o seu país ou região não estiver na lista, a utilização deste rádio Wi-Fi pode estar restringida na sua localização."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Estado",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de estado básico mostra um painel com o estado atual e informações sobre a rede atual. Pode clicar em cada ícone para obter mais detalhes."
                       } ,{                      
                           type: "title",
                            title: "Extensor de cobertura"
                       } ,{                      
                           type: "paragraph",
                           content: "Apresenta a informação sobre a rede expandida 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "O nome da rede expandida (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "O canal Wi-Fi atualmente em utilização."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "O endereço físico do extensor de cobertura."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Apresenta o estado do servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "O endereço IP que está atribuído ao cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "O tipo de endereço IP atribuído pelo servidor DHCP."
                       } ,{                      
                           type: "title",
                            title: "Rede Anfitriã 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Apresenta a seguinte informação sobre a rede anfitriã 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "O SSID da rede anfitriã."
                       } ,{                      
                           type: "name",
                           title: "Sinal",
                           content: "A força de sinal da rede anftriã."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "O endereço MAC físico da rede anfitriã."
                       } ,{                      
                           type: "title",
                            title: "Clientes"
                       } ,{                      
                           type: "paragraph",
                           content: "Apresenta o(s) dispositivo(s) cliente atualmente ligados ao Extensor de cobertura 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "A rede do Extensor de cobertura 2.4GHz<span class=\"hidden_5g\">/5GHz</span> na qual o cliente está ligado."
                       } ,{                      
                           type: "name",
                           title: "Nome de Dispositivo",
                           content: "O nome do dispositivo cliente ligado."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "O endereço MAC físico do dispositivo cliente ligado."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Estado",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de Estado exibe um painel com o estado atual da rede e outras informações. Pode clicar nos ícones para obter mais detalhes."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Estado da Internet",
                           content: "Exibe o estado atual da ligação à Internet do dispositivo."
                       } ,{                      
                           type: "title",
                            title: "Ponto de Acesso"
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Exibe o estado do servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP atribuído pelo servidor DHCP ao ponto de acesso."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Exibe o tipo como o  ponto de acesso adquire o endereço IP."
                       } ,{                      
                           type: "title",
                            title: "Clientes Wi-Fi"
                       } ,{                      
                           type: "name",
                           title: "Nome",
                           content: "Exibe o nome dos dispositivos cliente."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP atribuído aos dispositivos cliente."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC físico dos dispositivos cliente."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Definições",
               CONTENT: [{
                           type: "name",
                           title: "Região",
                           content: "Selecione a sua região a partir do menu susoenso. Se o seu país ou região não estiver na lista, a utilização deste rádio Wi-Fi pode estar restringida na sua localização."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wi-Fi 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Ativar Rádio Wi-Fi",
                           content: "Selecione esta opção para ativar o rádio Wi-Fi na frequência 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome de Rede Wi-Fi (SSID)",
                           content: "Pode deixar o Nome de Rede (SSID) predefinido ou introduzir um novo nome (até 32 caracteres). Este campo é sensível a caracteres em maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta opção para ocultar o nome da rede 2.4GHz (SSID) da lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das seguintes opções de segurança:",
       children: [{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Selecione esta opção para desativar a segurança da rede Wi-Fi. É altamente recomendado que ative a segurança Wi-Fi para proteger a sua rede Wi-Fi de acessos não autorizados."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Pessoal",
                           content: "Selecione esta opção para ativar o método de autenticação padrão, com base numa chave pré-partilhada (PSK), também chamada frase-passe. Esta é a opção recomendada. Se selecionada, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede Wi-Fi.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opção oferece suporte a múltiplas implementações do WPA (Wi-Fi Protected Access) padrão , como o WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opção só suporta encriptação TKIP, que oferece um bom nível de segurança."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção suporta encriptação AES, que proporciona um melhor nível de segurança que o WPA-PSK e é a recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptação",
                           content: "Selecione um tipo de encriptação de segurança: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (tanto para TKIP como para AES). Não é recomendado usar a encriptação TKIP se o Extensor de Cobertura operar em modo 802.11n, porque o TKIP não é suportado pela norma 802.11n. Se o TKIP for selecionado, a função WPS será desativada."
                       } ,{                      
                           type: "name",
                           title: "Palavra-passe",
                           content: "Digite neste campo uma palavra-passe Wi-Fi entre 8 a 63 caracteres ASCII ou 8 a 64 caracteres hexadecimais."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecione esta opção para ativar o método básico de autenticação se alguns dos seus dispositivos cliente puderem apenas aceder à rede Wi-Fi utilizando WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a sua rede Wi-Fi. A predefinição é Auto, que escolhe automaticamente Sistema Aberto ou Chave Partilhada com base na capacidade e pedido de acesso do cliente Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Formato de Chave WEP",
                           content: "Utilize o formato ASCII ou Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Chave",
                           content: "Selecione a extensão da chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permite inserir 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo Valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permite inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCII no campo Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor Chave",
                           content: "Insira a chave WEP no respetivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Selecione um modo de transmissão misto."
                       } ,{                      
                           type: "name",
                           title: "Largura de Canal",
                           content: "Selecione a largura de canal (largura de banda) para a rede Wi-Fi 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal de funcionamento para a rede Wi-Fi 2,4 GH. É recomendado deixar o canal em Auto se não tiver problemas intermitentes de ligação Wi-Fi."
                       } /*,{                      
                           type: "name",
                           title: "Potência de Transmissão",
                           content: "Selecione Alta, Média ou Baixa para especificar a potência de transmissão de dados. A configuração predefinida e recomendada é Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Clique em Guardar para guardar todas as definições."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wi-Fi 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Ativar Rádio Wi-Fi",
                           content: "Selecione esta opção para ativar o rádio Wi-Fi com a frequência 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome de Rede Wi-Fi (SSID)",
                           content: "Pode deixar o Nome da Rede (SSID) predefinido ou introduzir um novo nome (até 32 caracteres). Este campo é sensível a caracteres em maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta opção para ocultar o nome da rede 5GHz (SSID) da lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das seguintes opções de segurança:",
       children: [{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Selecione esta opção para desativar a segurança da rede Wi-Fi. É altamente recomendado que ative a segurança Wi-Fi para proteger a sua rede Wi-Fi de acessos não autorizados."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Pessoal",
                           content: "Selecione esta opção para ativar o método de autenticação padrão, com base numa chave pré-partilhada (PSK), também chamada frase-passe. Esta é a opção recomendada. Se selecionada, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede Wi-Fi.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opção oferece suporte a múltiplas implementações do WPA (Wi-Fi Protected Access) padrão , como o WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opção só suporta encriptação TKIP, que oferece um bom nível de segurança."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção suporta encriptação AES, que proporciona um melhor nível de segurança que o WPA-PSK e é a recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Encriptação",
                           content: "Selecione um tipo de encriptação de segurança: TKIP (Temporal Key Integrity Protocol), AES (Advanced Encryption Standard), ou Auto (tanto para TKIP ou AES). Não é recomendado usar a encriptação TKIP se o Extensor de Cobertura operar em modo 802.11n, porque o TKIP não é suportado pela norma 802.11n. Se o TKIP for selecionado, a função WPS será desativada."
                       } ,{                      
                           type: "name",
                           title: "Palavra-passe",
                           content: "Digite neste campo a palavra-passe da rede Wi-Fi. Pode inserir 8 a 63 caracteres ASCII ou 8 a 64 caracteres hexadecimais."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecione esta opção para ativar método básico de autenticação se existirem dispositivos na sua  rede que só possam aceder à sua rede Wi-Fi utilizando WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a sua rede Wi-Fi. A predefinição é Auto, que escolhe automaticamente Sistema Aberto ou Chave Partilhada com base na capacidade e pedido de acesso do cliente Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Formato de Chave WEP",
                           content: "Selecione formato ASCII ou Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Chave",
                           content: "Selecione a extensão da chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permite inserir 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo Valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permite inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCII no campo Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor Chave",
                           content: "Insira a chave WEP no respetivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Selecione um modo de transmissão misto."
                       } ,{                      
                           type: "name",
                           title: "Largura de Canal",
                           content: "Selecione a largura de canal (largura de banda) para a rede Wi-Fi 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal de funcionamento para a rede Wi-Fi 5GHz. É recomendado deixar o canal em Auto se não tiver problemas intermitentes de ligação Wi-Fi."
                       } /*,{                      
                           type: "name",
                           title: "Potência de Transmissão",
                           content: "Selecione Alta, Média ou Baixa para especificar a potência de transmissão de dados. A configuração predefinida e recomendada é Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Clique em Guardar para guardar todas as suas configurações."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Ativar WPS",
                           content: "Outros dispositivos podem-se ligar a este ponto de acesso (AP) por WPS com o PIN do AP."
                       }]
},
       WPS :{ 
               TITLE:"PIN do AP",
               CONTENT: [{
                           type: "name",
                           title: "PIN do AP",
                           content: "Ative esta funcionalidade para permitir que dispositivos Wi-Fi se liguem ao AP usando o PIN (Personal Identification Number) do AP."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Exibe o PIN do AP. O PIN predefinido pode ser encontrado na etiqueta do AP. Clique Gerar para gerar um novo PIN aleatoriamente ou clique Predefinir para repor o PIN para o valor de fábrica."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Assistente WPS",
               CONTENT: [{
                           type: "name",
                           title: "Botão (Recomendado)",
                           content: "Selecione este método de configuração para ativar a função WPS, que permite que qualquer dispositivo com WPS se possa conectar facilmente à sua rede Wi-Fi usando o botão WPS ou virtualmente usando o botão Ligar."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Selecione este método para adicionar um dispositivo manualmente através da introdução do PIN WPS do dispositivo Wi-Fi no campo respetivo e clique em Ligar."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Ligar Rede Anfitriã",
               CONTENT: [{
                           type: "name",
                           title: "Ligar a uma rede 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Ativar ou desativar para ligar o Extensor de Cobertura a um rede 2.4GHz<span class=\"hidden_5g\">/5GHz</span> existente."
                       } ,{                      
                           type: "name",
                           title: "Analisador de redes Wi-Fi",
                           content: "Clique neste botão para pesquisar e exibir todas as redes Wi-Fi disponíveis dentro do alcance que pretende configurar com o seu Extensor de cobertura. Assim que selecionar uma rede, o SSID e as definições de segurança serão automaticamente preenchidas."
                       } ,{                      
                           type: "name",
                           title: "SSID do dispositivo 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Introduza o SSID (campo sensível a caracteres em maiúsculas e minúsculas) da rede anfitriã à qual o Extensor de cobertura se irá ligar, ou clique <strong>Analisador de Redes Wi-Fi</strong> para pesquisar as redes Wi-Fi disponíveis."
                       } ,{                      
                           type: "name",
                           title: "Segurança do dispositivo 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Selecione uma das opções de segurança que coincida com a rede anfitriã."
                       } ,{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Esta opção desativa a segurança Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opção suporta apenas encriptação TKIP (Temporal Key Integrity Protocol) que oferece um bom nível de segurança."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção suporta encriptação AES (Advanced  Encryption Standard) que oferece um melhor nível de segurança do que WPA-PSK. Esta opção é recomendada."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Esta opção oferece suporte a múltiplas implementações do WPA (Wi-Fi Protected Access) padrão , como o WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Esta opção é o método mais básico de segurança Wi-Fi que pode ser usado caso os seus dispositivos só possam aceder à sua rede Wi-Fi utilizando WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Definições da Rede Expandida",
               CONTENT: [{
                           type: "name",
                           title: "Rede Expandida 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Ativa ou desativa a função Wi-Fi 2.4GHz<span class=\"hidden_5g\">/5GHz</span> do Extensor de Cobertura."
                       } ,{                      
                           type: "name",
                           title: "SSID Rede Expandida 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Pode usar o botão <strong>Copiar SSID Anfitrião</strong> para automaticamente copiar o SSID principal do router / AP ou introduzir um novo nome (até 32 caracteres). Este campo é sensível a maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Copiar SSID Anfitrião",
                           content: "Clique neste botão para copiar e automaticamente introduzir o SSID e definições de segurança da rede anfitriã nos campos respetivos."
                       } ,{                      
                           type: "name",
                           title: "Ocultar transmissão SSID",
                           content: "Selecione esta opção se pretende ocultar o SSID da rede ampliada 2.4GHz<span class=\"hidden_5g\">/5GHz</span> da lista de redes Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Controlo de acesso",
               CONTENT: [{
                           type: "paragraph",
                           content: "O Controlo de Acesso é usado para permitir ou bloquear determinados computadores e outros dispositivos de acederem à sua rede. Os dispositivos bloqueados não serão capazes de aceder à sua rede."
                       } ,{                      
                           type: "paragraph",
                           content: "Para usar o controlo de acesso, ative este função e configure uma Lista Branca ou Negra. Se o controlo de acesso for desativado (Desligado), todos os dispositivos, incluindo os da lista negra, passarão a poder ligar-se."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Modo de acesso",
               CONTENT: [{
                           type: "name",
                           title: "Lista Negra",
                           content: "Apenas os dispositivos na Lista Negra NÃO estão autorizados a aceder à rede."
                       } ,{                      
                           type: "name",
                           title: "Lista Branca",
                           content: "Apenas os dispositivos na Lista Branca são autorizados a aceder à rede."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivos Online",
               CONTENT: [{
                           type: "name",
                           title: "Nome de Dispositivo",
                           content: "Exibe o nome do dispositivo ligado."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP do dispositivo ligado."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do dispositivo ligado."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Ligação",
                           content: "Exibe o tipo de ligação do dispositivo ligado."
                       } ,{                      
                           type: "step",
                           title: "Bloquear um dispositivo",
                           content: "Na tabela de Dispositivos Online, clique no ícone Bloquear na coluna Modificar que corresponde ao dispositivo que deseja bloquear."
                       } ,{                      
                           type: "step",
                           title: "Bloquear múltiplos dispositivos",
                           content: "Na tabela de Dispositivos Online, selecione todos os dispositivos que deseja bloquear e clique em Bloquear acima da tabela. O dispositivo será adicionado automaticamente aos dispositivos da Lista Negra ou Branca."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispositivos na Lista Preta/Branca",
               CONTENT: [{
                           type: "step",
                           title: "Adicionar dispositivo à Lista Negra ou Branca",
       content: [ 
                "1. Clique no ícone Adicionar.",
                "2. Insira o Nome do Dispositivo.",
                "3. Insira o Endereço MAC do dispositivo.",
                "4. Selecione o tipo de Hora Efetiva- Se selecionar <b>Não pode aceder baseado neste horário/Acesso baseado no horário</b>, defina a hora e os dias.",
                "5. Clique em OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar ou eliminar um dispositivo na lista Negra/Branca",
                           content: "Na lista Negra/Branca, clique no ícone Editar ou Apagar que corresponde ao dispositivo que pretende modificar ou eliminar."
                       } ,{                      
                           type: "step",
                           title: "Para eliminar múltiplos dispositivos na Lista Negra/Branca",
                           content: "Na tabela da lista Negra/Branca, selecione todos os dispositivos que deseja eliminar, clique no botão Eliminar no topo da lista."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Rede do dispositivo para a porta Ethernet",
                           content: "Selecione a banda Wi-Fi (2.4GHz<span class=\"hidden_5g\">/5GHz</span>) da rede anfitriã que será usada para enviar tráfego dos clientes por cabo para os clientes Wi-Fi. <br/> Esta opção só está disponível se ambos os rádios da rede anfitriã estiverem ativos. "
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Definições da Rede",
               CONTENT: [{
                           type: "name",
                           title: "Obter endereço IP automaticamente",
                           content: "Selecione esta opção (recomendado) se pretende que os clientes Wi-Fi obtenham dinamicamente um endereço IP e Gateway a partir do Router / AP ou do Extensor de Cobertura."
                       } ,{                      
                           type: "name",
                           title: "Usar o seguinte Endereço IP",
                           content: "Selecione esta opção (recomendado) se pretende que os clientes Wi-Fi obtenham dinamicamente um endereço IP e Gateway a partir do Router / AP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Introduza o endereço IP em notação decimal separada por pontos (por defeito 192.168.0.254)"
                       } ,{                      
                           type: "name",
                           title: "Máscara de Rede",
                           content: "Introduza a máscara de sub-rede em notação decimal separada por pontos que determina o tamanho da sub-rede (por defeito 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Gateway Predefinido",
                           content: "Introduza o Gateway em notação decimal separado por pontos que deverá estar na mesma sub-rede do endereço IP. Habitualmente é o endereço IP do Router."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Definições do servidor DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Por defeito, o extensor de cobertura está configurado como servidor DHCP (Dynamic Host Configuration Protocol) por forma a atribuir configurações TCP/IP da lista de endereços IP a todos os clientes ligados na LAN a partir do extensor de cobertura."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Por defeito o modo Auto está ativo; O servidor DHCP automaticamente atribui endereços IP válidos a clientes. Poderá Ligar (Ligado) ou Desligar (desligado) o servidor DHCP. Se selecionar Desligado, deverá certificar-se de que existe outro servidor DHCP na mesma rede LAN; Caso contrário, terá de configurar manualmente endereços IP em cada cliente."
                       } ,{                      
                           type: "name",
                           title: "Lista de Endereços IP",
                           content: "Introduza o intervalo de endereços IP que podem ser atribuídos a clientes. Por defeito, o endereço IP inicial é 192.168.0.100 e o endereço final 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Tempo de Atribuição de Endereço",
                           content: "Introduza a duração da atribuição de um endereço IP a um cliente, entre 1 e 2880 minutos. Por defeito é 1 minuto."
                       } ,{                      
                           type: "name",
                           title: "Gateway Predefinido",
                           content: "<br/>Introduza o endereço IP LAN do Extensor de Cobertura. Por defeito o endereço IP é 192.168.0.254. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS Primário",
                           content: "Introduza o endereço IP DNS atribuído pelo seu ISP. (Opcional)"
                       } ,{                      
                           type: "name",
                           title: "DSN Secundário",
                           content: "Introduza os parâmetros como fornecidos pelo seu ISP. (Opcional)"
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Por forma a utilizar o servidor DHCP do extensor de cobertura, todos os clientes na LAN deverão estar configurados para obter endereço IP automaticamente."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique <strong>Guardar</strong> para guardar as configurações."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Reserva de Endereço",
               CONTENT: [{
                           type: "paragraph",
                           content: "Poderá reservar manualmente um endereço IP para um cliente ligado ao Extensor de Cobertura. Uma vez reservado, o endereço IP será atribuído ao mesmo cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do cliente com endereço IP reservado no servidor DHCP ."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP Reservado",
                           content: "Exibe o endereço IP reservado do cliente."
                       } ,{                      
                           type: "name",
                           title: "DESCRIÇÃO",
                           content: "Exibe uma descrição do dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "ESTADO",
                           content: "Exibe o estado atual (ativado ou desativado) do dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Modifcar",
                           content: "Exibe opções para Modificar ou Eliminar o cliente correspondente."
                       } ,{                      
                           type: "step",
                           title: "Para reservar um endereço IP",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Digite o endereço MAC do seu cliente desejado.",
                "3. Insira o endereço IP que deseja reservar para o cliente.",
                "4. Digite uma descrição para o cliente.",
                "5. Selecione Ativar esta entrada.",
                "6. Clique em OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar ou eliminar um cliente existente",
                           content: "Na tabela, clique no ícone Editar ou no ícone Apagar que corresponde ao cliente que deseja modificar ou eliminar."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Lista de Clientes DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe a informação de cada cliente DHCP que está ligado ao Extensor de Cobertura."
                       } ,{                      
                           type: "name",
                           title: "Total de Clientes",
                           content: "Exibe o número de clientes DHCP associados."
                       } ,{                      
                           type: "name",
                           title: "Nome de Cliente",
                           content: "Mostra o nome do cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Mostra o endereço MAC do cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP Atribuído",
                           content: "O endereço IP que é atribuído ao cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tempo de Atribuição",
                           content: "A duração de tempo que o endereço IP é atribuído ao cliente DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Atualizar</strong> - Clique neste botão para atualizar a lista de clientes DHCP."
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Cobertura Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione o nível de cobertura Wi-Fi para o seu Extensor de Cobertura."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Definições da Hora",
               CONTENT: [{
                           type: "name",
                           title: "Hora atual",
                           content: "Exibe a hora do sistema atual."
                       } ,{
                           type: "name",
                           title: "Fuso Horário",
                           content: "Selecione o seu fuso horário."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Horário de Verão",
               CONTENT: [{
              type: "step",
                            title: "Para definir o Horário de Verão:",
              content:[
                "1. Selecione o Horário de Verão.",
                "2. Selecione a data e a hora de <b>Início</b> corretas quando se iniciar o horário de verão no seu fuso horário local.",
                "3. Selecione a data e a hora de <b>Fim</b> corretas quando terminar o horário de verão no seu fuso horário local.",
                "4. Clique em Guardar."]},
        {
          type:"name",
          title:"Estado atual",
          content:"Indica se a hora atual está ou não no horário de verão."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Controlo do LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "O Controlo do LEDs permite-lhe ligar ou desligar os LEDs do Extensor de Cobertura de acordo com um horário especifico."
                       } ,{                      
                           type: "name",
                           title: "Modo Noturno",
                           content: "Indica se o Modo Noturno está Ligado (Ativo) ou Desligado (Desativo)."
                       } ,{                      
                           type: "name",
                           title: "Programação horária do LED",
                           content: "Seleciona o horário para desligar os LEDs."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Programação da energia",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ative esta função para desligar o Extensor de Cobertura de acordo com o horário para fins de poupança de energia."
                       } ,{                      
                           type: "name",
                           title: "Ativar a Programação de energia",
                           content: "Selecione esta opção para ativar a Programação de energia."
                       } ,{                      
                           type: "name",
                           title: "Hora de desligar",
                           content: "Selecione o período de tempo para desligar automaticamente o Extensor de Cobertura."
                       } ,{                      
                           type: "name",
                           title: "Dia(s)",
                           content: "Selecione o(s) dia(s) no(s) qual(ais) desligar o Extensor de Cobertura."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Atualização de Firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versão de Firmware",
                           content: "Exibe a versão atual de Firmware."
                       } ,{                      
                           type: "name",
                           title: "Versão de Hardware",
                           content: "Exibe a versão atual de Hardware."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANTE: Para evitar falhas durante a atualização, certifique-se do seguinte:",
       content: [ 
                "1. O ficheiro de firmware de atualização deverá corresponder à versão de hardware atual do seu Extensor de Cobertura.",
                "2. Certifique-se que mantem ligado à energia o Extensor de Cobertura durante todo o processo de atualização. Interrupções de energia podem danificar o seu extensor."]
} ,{                      
                           type: "step",
                           title: "Para atualizar o firmware do Extensor de Cobertura:",
       content: [ 
                "1. Transfira a ultima versão de firmware a partir de <a class=\"link\" href=\"http://www.tp-link.pt/Support/\" target=\"_blank\">TP-Link Suporte</a> para o seu computador.",
                "2. Clique <strong>Procurar</strong> para localizar e selecionar o ficheiro transferido.",
                "3. Clique <strong>Atualizar</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "O processo de atualização pode demorar alguns minutos. Após o processo estar concluído, o Extensor de Cobertura irá reiniciar."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Cópia de Segurança",
               CONTENT: [{
                           type: "paragraph",
                           content: "É altamente recomendável fazer cópia de segurança das suas configurações atuais. Será muito útil caso seja necessária uma recuperação para restaurar o sistema para um estado anterior ou a partir da configuração de fábrica."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique em Cópia de Segurança para guardar as configurações atuais como um ficheiro config.bin para o seu computador. Certifique-se de que guarda o ficheiro de cópia de segurança para um local seguro, de onde o possa recuperar se necessário."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Reposição",
               CONTENT: [{
                           type: "step",
                           title: "Repor as configurações guardadas a partir de uma cópia de segurança:",
       content: [ 
                "1. Clique em Procurar para localizar o ficheiro da cópia de segurança.",
                "2. Selecione o ficheiro da cópia de segurança.",
                "3. Clique em Repor.",
                "4. Clique <strong>Sim</strong> para confirmar a reposição dos valores do sistema.",
                "O processo de restauração pode demorar alguns minutos para ser concluído e o extensor de cobertura irá reiniciar-se automaticamente quando terminar."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Reposição da configuração de fábrica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Clique em Restaurar para os valores de fábrica para repor as configurações de fábrica do Extensor de Cobertura."
                       } ,{                      
                           type: "note",
                            title: "Nota",
							content: [
								"1. A reposição dos valores de fábrica irá apagar todas as configurações realizadas no Extensor de Cobertura. Para aceder novamente à interface de gestão do Extensor de Cobertura, introduza no campo Nome de Utilizador e Senha a o valor por defeito \"admin\".",
								"1. A reposição dos valores de fábrica irá apagar todas as configurações do extensor. Por favor, crie uma nova senha para utilizar nos próximos logins.",
								"2. Por favor NÃO desligue o Extensor de Cobertura durante o processo de reposição dos valores de fábrica ou durante o processo de cópia de segurança das definições."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Conta de Admin",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta página permite-lhe alterar o seu nome de utilizador e/ou palavra-passe predefinidos."
                       } ,{                      
                           type: "paragraph",
                           content: "Nesta página, poderá alterar a sua senha de inicio de sessão."
                       } ,{                      
                           type: "name",
                           title: "Utilizador antigo",
                           content: "Introduza o seu nome de utilizador atual."
                       } ,{                      
                           type: "name",
                           title: "Palavra-passe antiga",
                           content: "Introduza a sua palavra-passe atual."
                       } ,{                      
                           type: "name",
                           title: "Novo utilizador",
                           content: "Introduza um novo nome de utilizador."
                       } ,{                      
                           type: "name",
                           title: "Nova Palavra-passe",
                           content: "Introduza uma nova palavra-passe."
                       } ,{                      
                           type: "name",
                           title: "Confirmar Palavra-passe",
                           content: "Introduza novamente a sua palavra-passe."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Registo de Sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de Registo de Sistema exibe uma lista das atividades (eventos) mais recentes do Extensor de Cobertura. Poderá definir quais os tipos e níveis de registo a apresentar."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione o Tipo de Registo que deseja visualizar."
                       } ,{                      
                           type: "name",
                           title: "Nível",
                           content: "Selecione o nível de registo de sistema que deseja visualizar."
                       } ,{                      
                           type: "name",
                           title: "Atualizar",
                           content: "Clique neste botão para atualizar o registo de sistema."
                       } ,{                      
                           type: "name",
                           title: "Eliminar Tudo",
                           content: "Clique neste botão para remover permanentemente todos os registos."
                       } ,{                      
                           type: "name",
                           title: "Guardar Registo",
                           content: "Clique neste botão para guardar o registo de sistema como ficheiro .txt."
                       }]
},
    });
})(jQuery);
