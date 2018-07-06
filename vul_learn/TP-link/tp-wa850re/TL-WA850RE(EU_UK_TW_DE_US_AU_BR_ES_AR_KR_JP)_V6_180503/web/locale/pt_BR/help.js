(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Configurações regionais",
               CONTENT: [{
                           type: "name",
                           title: "Região",
                           content: "Selecione sua região no menu suspenso. Se seu país ou sua região não estiverem na lista, o uso de rádio wireless pode ser restrito em sua localidade."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Status",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de status básico exibe um painel de controle com informações e o status atual de sua rede. Clique nos ícones para ver mais detalhes. "
                       } ,{                      
                           type: "title",
                            title: "Extensor de alcance"
                       } ,{                      
                           type: "paragraph",
                           content: "Exibe informações da rede de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> estendida."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Nome da rede estendida (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Canal wireless em uso no momento."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Endereço físico do extensor de alcance."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Exibe o status do servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Endereço IP atribuído ao cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Tipo de endereço IP atribuído ao servidor DHCP."
                       } ,{                      
                           type: "title",
                            title: "Rede host de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Exibe as seguintes informações da rede host de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "SSID da rede host."
                       } ,{                      
                           type: "name",
                           title: "Sinal",
                           content: "Força do sinal da rede host."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do cliente."
                       } ,{                      
                           type: "title",
                            title: "Clientes"
                       } ,{                      
                           type: "paragraph",
                           content: "Exibe os dispositivos clientes atualmente conectados ao extensor de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "A rede estendida de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> à qual o dispositivo cliente está conectado."
                       } ,{                      
                           type: "name",
                           title: "Nome do dispositivo",
                           content: "Nome do dispositivo cliente conectado."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Endereço físico MAC do dispositivo cliente conectado."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Status",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de status exibe um painel de controle com informações e status atuais da rede. Clique nos ícones para ver mais detalhes."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Status da Internet",
                           content: "Exibe o status atual da conexão de Internet do dispositivo."
                       } ,{                      
                           type: "title",
                            title: "Access Point"
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Exibe o status do servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP atribuído ao ponto de acesso pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Exibe o tipo de endereço IP obtido pelo ponto de acesso."
                       } ,{                      
                           type: "title",
                            title: "Clientes wireless"
                       } ,{                      
                           type: "name",
                           title: "Nome",
                           content: "Exibe o nome dos dispositivos clientes."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP atribuído aos dispositivos clientes."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço físico MAC dos dispositivos clientes."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Configurações",
               CONTENT: [{
                           type: "name",
                           title: "Região",
                           content: "Selecione sua região no menu suspenso. Se seu país ou sua região não estiverem na lista, o uso de rádio wireless pode ser restrito em sua localidade."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wireless 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar rádio wireless",
                           content: "Selecione esta caixa de seleção para ativar a frequência de rádio wireless de 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome da rede wireless (SSID)",
                           content: "Você pode deixar o nome da rede (SSID) padrão como está, ou inserir um novo nome (até 32 caracteres). Este campo diferencia maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta caixa de seleção se você deseja ocultar o SSID da lista de redes Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das seguintes opções de segurança:",
       children: [{                      
                           type: "name",
                           title: "Sem segurança",
                           content: "Selecione esta opção para desativar a segurança wireless. É altamente recomendável que você habilite a segurança wireless para proteger a sua rede wireless contra acesso não autorizado."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selecione esta opção para ativar o método de autenticação padrão com base em uma chave pré-compartilhada (PSK), também chamada de frase secreta. Essa opção é recomendada. Se for selecionada, configure o ",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opção é compatível com a implementação múltipla do padrão WPA (Wi-Fi Protected Access), como WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opção é compatível apenas com criptografia TKIP, que oferece nível de segurança adequado."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção é compatível com criptografia AES, que oferece um nível de segurança melhor que o padrão WPA-PSK e é a recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança: TKIP (Temporal Key Integrity Protocol), AES (Padrão de Criptografia Avançado) ou Auto (para TKIP e AES). NÃO é recomendado o uso da criptografia TKIP se o extensor operar em modo 802.11n, porque TKIP não é compatível com a especificação 802.11n. Se o TKIP for selecionado, a função WPS será desativada."
                       } ,{                      
                           type: "name",
                           title: "Senha",
                           content: "Insira uma senha wireless entre 8 e 63 caracteres ASCII ou entre 8 e 64 caracteres hexadecimais."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecione esta opção para ativar o método de autenticação básica, caso algum dispositivo cliente só puder acessar a opção wireless usando o WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a sua rede wireless. O padrão é Auto, que seleciona automaticamente o Sistema aberto ou Chave compartilhada com base na capacidade e solicitação de acesso do cliente wireless."
                       } ,{                      
                           type: "name",
                           title: "Formato da chave WEP",
                           content: "Use o formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de chave",
                           content: "Selecione um comprimento de chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bits",
                           content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bits",
                           content: "Permite que você insira 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCII no campo de Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de chave",
                           content: "Digite a chave WEP no campo específico."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Selecione um modo de transmissão combinado."
                       } ,{                      
                           type: "name",
                           title: "Largura do canal",
                           content: "Selecione uma largura de canal (largura de banda) para a rede wireless de 2,4 GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal operacional para a rede wireless de 2,4 GHz. Recomenda-se deixar o canal no modo Auto, se não houver problemas de conexão intermitente."
                       } /*,{                      
                           type: "name",
                           title: "Potência de transmissão",
                           content: "Selecione Alta, Média ou Baixa para especificar a potência de transmissão de dados. A configuração padrão e recomendada é Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Clique em Save (Salvar) para salvar todas as suas configurações."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wireless 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar rádio wireless",
                           content: "Selecione esta caixa de seleção para ativar a frequência de rádio wireless de 5 GHz."
                       } ,{                      
                           type: "name",
                           title: "Nome da rede wireless (SSID)",
                           content: "Você pode deixar o nome da rede (SSID) padrão como está, ou inserir um novo nome (até 32 caracteres). Este campo diferencia maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta caixa de seleção se você deseja ocultar o SSID da lista de redes Wi-Fi de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das seguintes opções de segurança:",
       children: [{                      
                           type: "name",
                           title: "Sem segurança",
                           content: "Selecione esta opção para desativar a segurança wireless. É altamente recomendável que você habilite a segurança wireless para proteger a sua rede wireless contra acesso não autorizado."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Selecione esta opção para ativar o método de autenticação padrão com base em uma chave pré-compartilhada (PSK), também chamada de senha. Essa opção é recomendada. Se selecionada, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede wireless.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Esta opção é compatível com a implementação múltipla do padrão WPA (Wi-Fi Protected Access), como WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Esta opção é compatível apenas com criptografia TKIP, que oferece nível de segurança adequado."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção é compatível com criptografia AES, que oferece um nível de segurança melhor que o padrão WPA-PSK e é a recomendada."
                       }]
} ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança: TKIP (Temporal Key Integrity Protocol), AES (Padrão de Criptografia Avançado) ou Auto (para TKIP e AES). NÃO é recomendado o uso da criptografia TKIP se o extensor operar em modo 802.11n, porque o TKIP não é compatível com a especificação 802.11n. Se o TKIP for selecionado, a função WPS será desativada."
                       } ,{                      
                           type: "name",
                           title: "Senha",
                           content: "Insira uma senha wireless entre 8 e 63 caracteres ASCII ou entre 8 e 64 caracteres hexadecimais."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Selecione esta opção para ativar o método de autenticação básica, caso algum dispositivo de cliente só puder acessar a opção wireless usando o WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a sua rede wireless. O padrão é Auto, que seleciona automaticamente o Sistema aberto ou Chave compartilhada com base na capacidade e solicitação de acesso do cliente wireless."
                       } ,{                      
                           type: "name",
                           title: "Formato da chave WEP",
                           content: "Use o formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de chave",
                           content: "Selecione um comprimento de chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bits",
                           content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bits",
                           content: "Permite que você insira 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCII no campo de Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de chave",
                           content: "Digite a chave WEP no campo específico."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Modo",
                           content: "Selecione um modo de transmissão combinado."
                       } ,{                      
                           type: "name",
                           title: "Largura do canal",
                           content: "Selecione uma largura de canal (largura de banda) para a rede wireless de 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal operacional para a rede wireless de 5 GHz. Recomenda-se deixar o canal no modo Auto, se não houver problemas de conexão intermitente."
                       } /*,{                      
                           type: "name",
                           title: "Potência de transmissão",
                           content: "Selecione Alta, Média ou Baixa para especificar a potência de transmissão de dados. A configuração padrão e recomendada é Alta."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Clique em Save (Salvar) para salvar todas as suas configurações."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar WPS",
                           content: "Outros dispositivos podem ser conectados a esse ponto de acesso (PA) por WPS, com o PIN do PA."
                       }]
},
       WPS :{ 
               TITLE:"PIN do PA",
               CONTENT: [{
                           type: "name",
                           title: "PIN do PA",
                           content: "Habilite para permitir que dispositivos wireless se conectem ao PA usando o PIN (Personal Identification Number) do PA."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Exibe o PIN do PA. O PIN padrão pode ser encontrado no rótulo do PA. Clique em Gerar para gerar um novo PIN aleatoriamente ou clique em Padrão para restaurar o PIN atual padrão de fábrica."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Assistente WPS",
               CONTENT: [{
                           type: "name",
                           title: "Botão de pressão (Recomendado)",
                           content: "Selecione este método de conexão para permitir que o recurso WPS conecte facilmente qualquer dispositivo habilitado para WPS à sua rede wireless usando o botão WPS ou virtualmente usando o botão Conectar."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Selecione este método de conexão para adicionar um dispositivo manualmente, digitando o PIN WPS do dispositivo wireless no campo, e clique em Connect (Conectar)."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Conecte-o à rede host",
               CONTENT: [{
                           type: "name",
                           title: "Conecte-o à rede de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> ",
                           content: "Habilite ou desabilite a conexão do extensor a uma rede de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> existente."
                       } ,{                      
                           type: "name",
                           title: "Scanner wireless",
                           content: "Clique nesse botão para fazer a varredura e exibir todas as redes Wi-Fi na faixa à qual você pretende conectar o extensor. Uma vez selecionada a rede, as configurações de SSID e segurança da rede em questão serão preenchidas automaticamente."
                       } ,{                      
                           type: "name",
                           title: "SSID do Host de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Digite o SSID, que diferencia maiúsculas e minúsculas, da rede host à qual o extensor será conectado ou clique em <strong>Scanner wireless> e selecione uma</strong> rede Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Segurança do Host de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Selecione uma das opções de segurança compatível com a rede host."
                       } ,{                      
                           type: "name",
                           title: "Sem segurança",
                           content: "Essa opção desabilita a segurança da rede wireless. "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Essa opção é compatível apenas com protocolo de integridade da chave temporal TKIP (Temporal Key Integrity Protocol), que oferece o nível de segurança adequado. "
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Esta opção suporta criptografia AES (Advanced encryption), que oferece um nível de segurança melhor que o padrão WPA-PSK e é recomendada."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Esta opção suporta implementação múltipla do padrão WPA (Wi-Fi Protected Access), como WPA e WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Essa opção é a forma mais básica de segurança de rede wireless que poderá ser utilizada se os dispositivos clientes somente puderem acessar usando WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Configurações de rede estendida",
               CONTENT: [{
                           type: "name",
                           title: "Rede estendida de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Habilitar ou desabilitar a função de rede wireless de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span> do extensor de alcance."
                       } ,{                      
                           type: "name",
                           title: "SSID de rede estendida de 2,4 GHz<span class=\"hidden_5g\">/5 GHz</span>",
                           content: "Use o botão <strong>Copiar SSID do Host</strong> para copiar automaticamente o SSID do roteador/PA principal ou digite um novo nome (Até 32 caracteres). Esse campo diferencia entre maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Copiar SSID do Host",
                           content: "Clique nesse botão para copiar e preencher automaticamente as configurações de SSID e segurança da rede host nos campos específicos."
                       } ,{                      
                           type: "name",
                           title: "Ocultar broadcast do SSID",
                           content: "Selecione esta caixa de seleção se você deseja ocultar o SSID<span class=\"hidden_5g\">/5GHz</span> de 2,4 GHz expandido da lista de redes Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Controle de acesso",
               CONTENT: [{
                           type: "paragraph",
                           content: "O Controle de acesso é utilizado para permitir ou bloquear computadores específicos e outros dispositivos quanto ao acesso à rede estendida. Quando um dispositivo é bloqueado, não é possível conectá-lo à rede estendida."
                       } ,{                      
                           type: "paragraph",
                           content: "Para utilizar o Controle de Acesso, habilite esse recurso e especifique uma lista negra ou uma lista autorizada. Se o Controle de Acesso for desativado (Desligado), todos os dispositivos, inclusive os da lista negra, terão permissão de acesso."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Modo de acesso",
               CONTENT: [{
                           type: "name",
                           title: "Blacklist",
                           content: "Somente os dispositivos na lista negra serão impedidos de acessar a rede."
                       } ,{                      
                           type: "name",
                           title: "Whitelist",
                           content: "Somente os dispositivos na lista autorizada terão permissão de acesso à rede."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivos on-line",
               CONTENT: [{
                           type: "name",
                           title: "Nome do dispositivo",
                           content: "Exibe o nome do dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP do dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do dispositivo conectado."
                       } ,{                      
                           type: "name",
                           title: "Tipo de conexão",
                           content: "Exibe o tipo de conexão do dispositivo conectado."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear um dispositivo",
                           content: "Na tabela de Dispositivos on-line, clique no ícone Bloquear na coluna Modificar correspondente ao dispositivo que quiser bloquear."
                       } ,{                      
                           type: "step",
                           title: "Para bloquear múltiplos dispositivos",
                           content: "Na tabela de Dispositivos on-line, selecione todos os dispositivos que deseja bloquear, clique em Bloquear no topo da tabela. O dispositivo será automaticamente acrescentado à lista negra ou à lista autorizada de dispositivos."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Dispositivos na Blacklist/ Whitelist",
               CONTENT: [{
                           type: "step",
                           title: "Para incluir um dispositivo na lista negra ou na lista autorizada",
       content: [ 
               "1. Clique no ícone Adicionar.",
                "2. Digite o nome do dispositivo.",
                "3. Digite o endereço MAC do dispositivo.",
                "4. Selecione o tipo de tempo efetivo. Se você selecionar <b>Não é possível acessar baseado na programação de temop/Acessar com base na programação de tempo</b>, defina o tempo em dias.",
                "5. Clique em OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar ou excluir um dispositivo da lista negra",
                           content: "Na tabela Black/Whitelist, clique no ícone de edição ou no ícone da Lixeira correspondente ao dispositivo que você quiser modificar ou excluir."
                       } ,{                      
                           type: "step",
                           title: "Para excluir múltiplos dispositivos da lista negra",
                           content: "Na tabela Black/Whitelist, selecione todos os dispositivos que você deseja excluir, clique em Delete (Excluir) acima da tabela."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Rede host para porta Ethernet",
                           content: "Selecione a banda de rede wireless (2,4 GHz ou 5 GHz) da rede host utilizada para enviar o tráfego dos clientes conectados por rede com fio para os clientes da rede wireless. <br/>Essa opção estará disponível somente quando ambas as redes (2,4 GHz e 5 GHz) estiverem habilitadas."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Configurações de rede",
               CONTENT: [{
                           type: "name",
                           title: "Obter um endereço IP automaticamente",
                           content: "Selecione essa opção (recomendado) se quiser que o extensor obtenha um endereço IP e um gateway dinamicamente da rede host."
                       } ,{                      
                           type: "name",
                           title: "Utilizar o seguinte endereço IP",
                           content: "Selecione essa opção se configurar manualmente um endereço IP e um gateway para o extensor."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Digite o endereço IP em notação decimal com pontos (192.168.0.254 por padrão)."
                       } ,{                      
                           type: "name",
                           title: "Máscara de Sub-rede",
                           content: "Digite a máscara de sub-rede em notação decimal com pontos, determinando a dimensão da rede (255.255.255.0 por padrão)."
                       } ,{                      
                           type: "name",
                           title: "Gateway padrão",
                           content: "Digite o gateway que se encontra na mesma sub-rede do endereço IP em notação decimal com pontos. Geralmente é o endereço IP da rede LAN do roteador."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Configurações de Servidores DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Por padrão, o extensor de alcance é instalado como servidor DHCP (protocolo de configuração dinâmica de host - Dynamic Host Configuration Protocol) para gerar a configuração TCP/IP de todos os clientes conectados ao extensor na rede LAN, a partir do pool de endereços IP."
                       } ,{                      
                           type: "name",
                           title: "Servidor DHCP",
                           content: "Por padrão, o modo Auto é selecionado; o servidor DHCP designa automaticamente um endereço IP válido para o cliente. O servidor DHCP pode ser ativado (Ligado) ou desativado (Desligado). Se a opção Desligado for selecionada, é preciso ter outro servidor DHCP na rede LAN; de outra forma, será preciso configurar o endereço IP de cada cliente manualmente."
                       } ,{                      
                           type: "name",
                           title: "Conjunto de endereços IP",
                           content: "Digite um intervalo de endereços IP que podem ser cedidos aos clientes. Por padrão, o endereço IP inicial seria 192.168.0.100 e o endereço final seria 192.168.0.199. "
                       } ,{                      
                           type: "name",
                           title: "Tempo de concessão de endereço",
                           content: "Insira o tempo o tempo pelo qual um endereço IP será concedido ao cliente, entre 1 e 2880 minutos. O padrão é 1 minuto."
                       } ,{                      
                           type: "name",
                           title: "Gateway padrão",
                           content: "<br/>Digite o endereço IP da rede LAN do extensor de alcance. O padrão é 192.168.0.254. (opcional)"
                       } ,{                      
                           type: "name",
                           title: "DNS primário",
                           content: "Insira o endereço IP do DNS fornecido pelo seu ISP (opcional)."
                       } ,{                      
                           type: "name",
                           title: "DNS secundário",
                           content: "Digite esses parâmetros conforme fornecidos pelo ISP (opcional). "
                       } ,{                      
                           type: "note",
                           title: "Observação",
                           content: "Para utilizar o servidor DHCP do extensor de alcance, todos os clientes da rede LAN devem configurar seus terminais para obter o endereço IP automaticamente."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique em <strong>Salvar</strong> para gravar as configurações."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Reserva de endereço",
               CONTENT: [{
                           type: "paragraph",
                           content: "Você pode reservar um endereço IP manualmente para um cliente que está conectado ao extensor. Uma vez reservado, o endereço IP só será atribuído ao mesmo cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do cliente com o endereço IP reservado do DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP reservado",
                           content: "Exibe o endereço IP reservado do cliente."
                       } ,{                      
                           type: "name",
                           title: "Descrição",
                           content: "Exibe uma descrição do dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Exibe o status atual (habilitado ou desabilitado) do dispositivo cliente."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Exibe opções para Modificar ou Excluir o cliente correspondente."
                       } ,{                      
                           type: "step",
                           title: "Para reservar um endereço IP",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Digite o endereço MAC do cliente desejado.",
                "3. Digite o endereço IP que deseja reservar para o cliente.",
                "4. Digite uma descrição para o cliente.",
                "5. Selecione habilitar este lançamento.",
                "6. Clique em OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar ou excluir um cliente existente",
                           content: "Na tabela, clique no ícone de edição ou no ícone da Lixeira correspondente ao cliente que você quiser modificar ou excluir."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Lista de clientes DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe as seguintes informações de cada cliente DHCP conectado ao extensor de alcance."
                       } ,{                      
                           type: "name",
                           title: "Total de clientes",
                           content: "Exibe o número total de clientes DHCP associados."
                       } ,{                      
                           type: "name",
                           title: "Nome do cliente",
                           content: "Nome do Cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "O endereço MAC do cliente DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP atribuído",
                           content: "Endereço IP atribuído ao cliente pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Tempo de aluguel",
                           content: "O tempo de duração da cessão do endereço IP ao cliente DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Atualizar</strong> - Clique esse botão para atualizar a lista de clientes DHCP."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Cobertura do Wifi",
               CONTENT: [{
							type:"paragraph",
                           content: "Selecione o nível de cobertura Wi-Fi para o extensor de alcance."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Ajustes de hora",
               CONTENT: [{
                           type: "name",
                           title: "Horário atual",
                           content: "Exibir o horário atual do sistema."
                       } ,{
                           type: "name",
                           title: "Fuso horário",
                           content: "Selecionar o fuso horário."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Horário de verão",
               CONTENT: [{
							type:"step",
                            title: "Para definir o fuso horário:",
							content:[
                "1. Selecione o horário de verão",
                "2. Selecione a data e a hora corretos do <b>Início</b> do horário de verão da sua localidade.",
                "2. Selecione a data e a hora corretos do <b>Fim</b> do horário de verão da sua localidade.",
                "4. Clique em Salvar."]},{
					type:"name",
					title:"Status atual",
					content:"Indica se o horário atual está ou não no horário de verão."
				}]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Controle de LEDs",
               CONTENT: [{
                           type: "paragraph",
                           content: "O controle de LEDs permite ligar ou desligar os LEDs do extensor de alcance, conforme uma programação temporal específica."
                       } ,{                      
                           type: "name",
                           title: "Modo noturno",
                           content: "Indica se o modo noturno está Ligado (Habilitado) ou Desligado (Desabilitado)."
                       } ,{                      
                           type: "name",
                           title: "Período de desligamento dos LEDs",
                           content: "Selecione a programação para desligar os LEDs."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"Programação de energia",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ativar esta função para desligar o extensor de acordo com a programação de tempo para economizar energia."
                       } ,{                      
                           type: "name",
                           title: "Ativar programação de energia",
                           content: "Selecione esta opção para ligar a Programação de energia."
                       } ,{                      
                           type: "name",
                           title: "Tempo para desligamento",
                           content: "Selecione o período de tempo para desligar o extensor automaticamente."
                       } ,{                      
                           type: "name",
                           title: "Dia(s)",
                           content: "Selecine o(s) dia(s) em que o extensor deverá ser desligado."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Upgrade de firmware",
               CONTENT: [{
                           type: "name",
                           title: "Versão de firmware",
                           content: "Exibe a versão atual do firmware."
                       } ,{                      
                           type: "name",
                           title: "Versão de Hardware",
                           content: "Exibe a versão atual do hardware."
                       } ,{                      
                           type: "step",
                           title: "IMPORTANTE: Para evitar a falha de atualização, observe o seguinte:",
       content: [ 
                "1. O arquivo de atualização do firmware deve estar de acordo com a versão atual do hardware do extensor.",
                "2. É importante manter o extensor ligado durante todo o processo de atualização, pois qualquer falha na alimentação pode causar danos ao aparelho."]
} ,{                      
                           type: "step",
                           title: "Para atualizar firmware do extensor:",
       content: [ 
                "1. Faça o download da última versão do firmware no <a class=\"link\" href=\"http://www.tp-link.com.br/Support/\" target=\"_blank\">TP-Link Support</a> em seu computador.",
                "2. Clique em <strong>Navegar</strong> para localizar e selecionar o arquivo baixado.",
                "3. Clique em <strong>Atualizar</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "A atualização demora alguns minutos e o extensor de alcance será reiniciado automaticamente quando for concluída."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Backup",
               CONTENT: [{
                           type: "paragraph",
                           content: "É altamente recomendável fazer o backup das suas configurações atuais, caso seja necessário restaurar o sistema com um status anterior ou com os valores padrão de fábrica."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique em Backup para Salvar suas configurações atuais no arquivo config.bin em seu computador. Verifique se o local de gravação é seguro e se permitirá sua recuperação se necessário. "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Recuperar",
               CONTENT: [{
                           type: "step",
                           title: "Para restaurar as configurações gravadas no arquivo de backup:",
       content: [ 
                "1. Clique em Procurar para localizar o arquivo de backup.",
                "2. Selecione o arquivo de backup.",
                "3. Clique em Restaurar.",
                "4. Clique em <strong>Sim</strong> para confirmar a restauração do sistema.",
                "O processo de restauração pode levar alguns minutos e o extensor será reiniciado automaticamente quando for concluído."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Reinicializar para os valores padrão de fábrica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Clique em Restauração de fábrica para para redefinir o seu extensor de alcance com as configurações padrão de fábrica."
                       } ,{                      
                           type: "note",
                            title: "Observação",
							content: [
								"1. A Restauração de Fábrica apagará todas as configurações que você tiver definido para o extensor. Para refazer o login na página de administração do extensor, use os dados padrão de nome de usuário e senha, ou seja, admin para ambos.",
								"1. A Restauração de Fábrica irá apagar todas as configurações anteriores do repetidor. Favor criar uma senha para tentativas de login futuras.",
								"2. NÃO desligue o extensor de alcance durante o processo de backup ou restauração."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Conta de Administrador",
               CONTENT: [{
                           type: "paragraph",
                           content: "Essa página permite alterar o nome de usuário e/ou a senha padrão utilizados para log-in."
                       } ,{                      
                           type: "paragraph",
                           content: "Nesta página,você pode alterar sua senha de login."
                       } ,{                      
                           type: "name",
                           title: "Nome de usuário anterior",
                           content: "Digite o nome de usuário atual."
                       } ,{                      
                           type: "name",
                           title: "Senha antiga",
                           content: "Digite sua senha atual."
                       } ,{                      
                           type: "name",
                           title: "Novo nome de usuário ",
                           content: "Digite o novo nome de usuário."
                       } ,{                      
                           type: "name",
                           title: "Nova senha",
                           content: "Digite uma nova senha."
                       } ,{                      
                           type: "name",
                           title: "Confirmar senha",
                           content: "Redigite a nova senha."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Registro do sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de registro do sistema exibe uma lista de atividades (eventos) recentes do extensor. Você pode definir os tipos de registro e o nível de registros que deseja visualizar."
                       } ,{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione o tipo de registro que deseja visualizar."
                       } ,{                      
                           type: "name",
                           title: "Nível",
                           content: "Selecione o nível de registros que deseja visualizar."
                       } ,{                      
                           type: "name",
                           title: "Atualizar",
                           content: "Clique neste botão para atualizar o registro do sistema."
                       } ,{                      
                           type: "name",
                           title: "Excluir tudo",
                           content: "Clique nesse botão para remover permanentemente todos os registros."
                       } ,{                      
                           type: "name",
                           title: "Salvar registro",
                           content: "Clique nesse botão para Salvar o registro do sistema em um arquivo txt."
                       }]
}
    });
})(jQuery);
