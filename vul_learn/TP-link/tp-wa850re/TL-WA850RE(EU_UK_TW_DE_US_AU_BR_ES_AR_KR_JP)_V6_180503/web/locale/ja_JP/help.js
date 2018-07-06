(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"地域設定",
               CONTENT: [{
                           type: "name",
                           title: "地域",
                           content: "ドロップダウン メニューから地域を選択します。居住国または地域がリストされていない場合、お使いの場所ではワイヤレス ラジオの使用が制限されている可能性があります。"
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"ステータス",
               CONTENT: [{
                           type: "paragraph",
                           content: "[基本ステータス] ページには、現在のネットワークのステータスと情報を示すダッシュボードが表示されます。各アイコンをクリックすると、詳細を表示できます。 "
                       } ,{                      
                           type: "title",
                            title: "レンジ エクステンダ―"
                       } ,{                      
                           type: "paragraph",
                           content: "拡張された 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ネットワークの情報を表示します。"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "拡張ネットワーク名 (SSID)。"
                       } ,{                      
                           type: "name",
                           title: "チャンネル",
                           content: "現在使用中のワイヤレス チャンネル。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "レンジ エクステンダ―の物理アドレス"
                       } ,{                      
                           type: "name",
                           title: "DHCP サーバー",
                           content: "DHCP サーバーのステータスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス",
                           content: "DHCP サーバーによってクライアントに割り当てられる IP アドレス。"
                       } ,{                      
                           type: "name",
                           title: "タイプ",
                           content: "DHCP サーバーによって割り当てられた IP アドレスのタイプ。"
                       } ,{                      
                           type: "title",
                            title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> ホスト ネットワーク"
                       } ,{                      
                           type: "paragraph",
                           content: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> ホスト ネットワークの以下の情報を表示します。"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "ホスト ネットワーク SSID。"
                       } ,{                      
                           type: "name",
                           title: "信号",
                           content: "ホスト ネットワークの信号強度。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "ホスト ネットワークの物理 MAC アドレス。"
                       } ,{                      
                           type: "title",
                            title: "クライアント"
                       } ,{                      
                           type: "paragraph",
                           content: "エクステンダ― 2.4GHz<span class=\"hidden_5g\">/5GHz</span> に現在接続されているクライアント デバイスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "タイプ",
                           content: "クライアント デバイスが接続している拡張 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ネットワーク。"
                       } ,{                      
                           type: "name",
                           title: "デバイス名",
                           content: "接続されているクライアント デバイスの名前。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "接続されているクライアント デバイスの物理 MAC アドレス。"
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"ステータス",
               CONTENT: [{
                           type: "paragraph",
                           content: "[ステータス] ページには、現在のネットワークのステータスと情報を示すダッシュボードが表示されます。各アイコンをクリックすると、詳細を表示できます。"
                       } ,{                      
                           type: "title",
                            title: "インターネット"
                       } ,{                      
                           type: "name",
                           title: "インターネット ステータス",
                           content: "デバイスのインターネット接続の現在のステータスを表示します。"
                       } ,{                      
                           type: "title",
                            title: "アクセス ポイント"
                       } ,{                      
                           type: "name",
                           title: "DHCP サーバー",
                           content: "DHCP サーバーのステータスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス",
                           content: "DHCP サーバーによってアクセス ポイントに割り当てられる IP アドレス。"
                       } ,{                      
                           type: "name",
                           title: "タイプ",
                           content: "アクセス ポイントが IP アドレスを取得するタイプを表示します。"
                       } ,{                      
                           type: "title",
                            title: "ワイヤレス クライアント"
                       } ,{                      
                           type: "name",
                           title: "名前",
                           content: "クライアント デバイスの名前を表示します。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス",
                           content: "クライアント　デバイスに割り当てられる IP アドレスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "クライアント デバイスの物理 MAC アドレスを表示します。"
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"設定",
               CONTENT: [{
                           type: "name",
                           title: "地域",
                           content: "ドロップダウン メニューから地域を選択します。居住国または地域がリストされていない場合、お使いの場所ではワイヤレス ラジオの使用が制限されている可能性があります。"
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"ワイヤレス 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "ワイヤレス ラジオを有効にする",
                           content: "2.4GHz ワイヤレス ラジオの周波数を有効にするには、このチェックボックスをオンにします。"
                       } ,{                      
                           type: "name",
                           title: "ワイヤレス ネットワーク名 (SSID)",
                           content: "既定のネットワーク名 (SSID) をそのままにしておくか、新しい名前 (32 文字まで) を入力できます。このフィールドは大文字小文字が区別されます。"
                       } ,{                      
                           type: "name",
                           title: "SSID を非表示にする",
                           content: "Wi-Fi ネットワーク リストで 2.4GHz ネットワーク名 (SSID) を非表示にする場合は、このチェックボックスをオンにします。"
                       } ,{                      
                           type: "name",
                           title: "セキュリティ",
                           content: "以下のいずれかのセキュリティ オプションを選択してください。",
       children: [{                      
                           type: "name",
                           title: "セキュリティなし",
                           content: "ワイヤレス セキュリティを無効にするには、このオプションを選択します。ワイヤレス ネットワークを未承認アクセスから保護するために、ワイヤレス セキュリティを有効にすることを強く推奨します。"
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-パーソナル",
                           content: "パスワードフレーズとも呼ばれる事前共有キー (PSK) をベースとする標準認証方式を有効にするには、このオプションを選択します。このオプションが推奨されます。選択する場合は、以下を設定してください。",
       children: [{                      
                           type: "name",
                           title: "バージョン",
                           content: "ワイヤレス ネットワークのセキュリティ バージョンを選択します。",
       children: [{                      
                           type: "name",
                           title: "自動",
                           content: "このオプションは、WPA および WPA2 などの WPA (Wi-Fi 保護アクセス) 標準の複数実装をサポートします。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "このオプションは、適切なレベルのセキュリティを提供する TKIP 暗号化のみをサポートします。"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "このオプションは、WPA-PSK よりも良いレベルのセキュリティを提供する AES 暗号化をサポートしており、推奨されています。"
                       }]
} ,{                      
                           type: "name",
                           title: "暗号化",
                           content: "次のセキュリティ暗号化タイプを選択してください:TKIP (Temporal Key Integrity Protocol)、AES (Advanced Encryption Standard)、または自動 (TKIP と AES の両方)。TKIP は 802.11n 仕様ではサポートされていないため、エクステンダ―が 802.11n モードで動作している場合、TKIP 暗号化の使用は推奨されません。TKIP を選択すると、WPS 機能が無効になります。"
                       } ,{                      
                           type: "name",
                           title: "パスワード",
                           content: "このフィールドにワイヤレス パスワードを 8 ～ 63 文字の ASCII 文字、あるいは 8 ～ 64 文字の 16 進文字で入力します。"
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "いずれかのクライアント デバイスが WEP (Wired Equivalent Privacy) でしかワイヤレスにアクセスできない場合に基本認証方式を有効にするには、このオプションを選択します。",
       children: [{                      
                           type: "name",
                           title: "タイプ",
                           content: "ワイヤレス ネットワークの認証タイプを選択します。既定は [自動] で、ワイヤレス クライアントの機能とアクセス要求に基づいて自動的にオープン システムまたは共有キーを選択します。"
                       } ,{                      
                           type: "name",
                           title: "WEP キー形式:",
                           content: "ASCII 形式を使用するか、16 進を選択します。ASCII 形式は、英数字の組み合わせです。16 進形式は、数字 (0-9) と文字 (A-F、a-f) の組み合わせです。"
                       } ,{                      
                           type: "name",
                           title: "キー タイプ",
                           content: "WEP キーの長さを選択します。",
       children: [{                      
                           type: "name",
                           title: "64 ビット",
                           content: "10 桁の 16 進数 (0-9、A-F、a-f) または 5 桁の ASCII 文字を [WEP 値] フィールドに入力できます。"
                       } ,{                      
                           type: "name",
                           title: "128 ビット",
                           content: "26 桁の 16 進数 (0-9、A-F、a-f) または 13 桁の ASCII 文字を [WEP 値] フィールドに入力できます。"
                       }]
} ,{                      
                           type: "name",
                           title: "キーの値",
                           content: "それぞれのフィールドに WEP キーを入力します。"
                       }]
}]
} ,{                      
                           type: "name",
                           title: "モード",
                           content: "転送混合モードを選択します。"
                       } ,{                      
                           type: "name",
                           title: "チャンネル幅",
                           content: "2.4GHz ワイヤレス ネットワークのチャンネル幅 (帯域幅) を選択します。"
                       } ,{                      
                           type: "name",
                           title: "チャンネル",
                           content: "2.4GHz ワイヤレス ネットワークの動作チャンネルを選択します。中間ワイヤレス接続問題が発生していない場合は、チャンネルを [自動] のままにしておくことを推奨します。"
                       } ,{                      
                           type: "paragraph",
                           content: "[保存] をクリックして、すべての設定を保存してください。"
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"ワイヤレス 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "ワイヤレス ラジオを有効にする",
                           content: "5GHz ワイヤレス ラジオの周波数を有効にするには、このチェックボックスをオンにします。"
                       } ,{                      
                           type: "name",
                           title: "ワイヤレス ネットワーク名 (SSID)",
                           content: "既定のネットワーク名 (SSID) をそのままにしておくか、新しい名前 (32 文字まで) を入力できます。このフィールドは大文字小文字が区別されます。"
                       } ,{                      
                           type: "name",
                           title: "SSID を非表示にする",
                           content: "Wi-Fi ネットワーク リストで 5GHz ネットワーク名 (SSID) を非表示にする場合は、このチェックボックスをオンにします。"
                       } ,{                      
                           type: "name",
                           title: "セキュリティ",
                           content: "以下のいずれかのセキュリティ オプションを選択してください。",
       children: [{                      
                           type: "name",
                           title: "セキュリティなし",
                           content: "ワイヤレス セキュリティを無効にするには、このオプションを選択します。ワイヤレス ネットワークを未承認アクセスから保護するために、ワイヤレス セキュリティを有効にすることを強く推奨します。"
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-パーソナル",
                           content: "パスフレーズとも呼ばれる事前共有キー (PSK) をベースとする標準認証方式を有効にするには、このオプションを選択します。このオプションが推奨されます。選択する場合は、以下を設定してください。",
       children: [{                      
                           type: "name",
                           title: "バージョン",
                           content: "ワイヤレス ネットワークのセキュリティ バージョンを選択します。",
       children: [{                      
                           type: "name",
                           title: "自動",
                           content: "このオプションは、WPA および WPA2 などの WPA (Wi-Fi 保護アクセス) 標準の複数実装をサポートします。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "このオプションは、適切なレベルのセキュリティを提供する TKIP 暗号化のみをサポートします。"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "このオプションは、WPA-PSK よりも良いレベルのセキュリティを提供する AES 暗号化をサポートしており、推奨されています。"
                       }]
} ,{                      
                           type: "name",
                           title: "暗号化",
                           content: "次のセキュリティ暗号化タイプを選択してください:TKIP (Temporal Key Integrity Protocol)、AES (Advanced Encryption Standard)、または自動 (TKIP と AES の両方)。TKIP は 802.11n 仕様ではサポートされていないため、エクステンダ―が 802.11n モードで動作している場合、TKIP 暗号化の使用は推奨されません。TKIP を選択すると、WPS 機能が無効になります。"
                       } ,{                      
                           type: "name",
                           title: "パスワード",
                           content: "このフィールドにワイヤレス パスワードを 8 ～ 63 文字の ASCII 文字、あるいは 8 ～ 64 文字の 16 進文字で入力します。"
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "いずれかのクライアント デバイスが WEP (Wired Equivalent Privacy) でしかワイヤレスにアクセスできない場合に基本認証方式を有効にするには、このオプションを選択します。",
       children: [{                      
                           type: "name",
                           title: "タイプ",
                           content: "ワイヤレス ネットワークの認証タイプを選択します。既定は [自動] で、ワイヤレス クライアントの機能とアクセス要求に基づいて自動的にオープン システムまたは共有鍵を選択します。"
                       } ,{                      
                           type: "name",
                           title: "WEP キー形式:",
                           content: "ASCII 形式を使用するか、16 進を選択します。ASCII 形式は、英数字の組み合わせです。16 進形式は、数字 (0-9) と文字 (A-F、a-f) の組み合わせです。"
                       } ,{                      
                           type: "name",
                           title: "キー タイプ",
                           content: "WEP キーの長さを選択します。",
       children: [{                      
                           type: "name",
                           title: "64 ビット",
                           content: "10 桁の 16 進数 (0-9、A-F、a-f) または 5 桁の ASCII 文字を [WEP 値] フィールドに入力できます。"
                       } ,{                      
                           type: "name",
                           title: "128 ビット",
                           content: "26 桁の 16 進数 (0-9、A-F、a-f) または 13 桁の ASCII 文字を [WEP 値] フィールドに入力できます。"
                       }]
} ,{                      
                           type: "name",
                           title: "キーの値",
                           content: "それぞれのフィールドに WEP キーを入力します。"
                       }]
}]
} ,{                      
                           type: "name",
                           title: "モード",
                           content: "転送混合モードを選択します。"
                       } ,{                      
                           type: "name",
                           title: "チャンネル幅",
                           content: "5GHz ワイヤレス ネットワークのチャンネル幅 (帯域幅) を選択します。"
                       } ,{                      
                           type: "name",
                           title: "チャンネル",
                           content: "5GHz ワイヤレス ネットワークの動作チャンネルを選択します。中間ワイヤレス接続問題が発生していない場合は、チャンネルを [自動] のままにしておくことを推奨します。"
                       } ,{                      
                           type: "paragraph",
                           content: "[保存] をクリックして、すべての設定を保存してください。"
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "WPS　を有効にする",
                           content: "その他のデバイスがアクセスポイント (AP) の PIN を使って WPS によりこの AP にアクセスできます。"
                       }]
},
       WPS :{ 
               TITLE:"AP の PIN",
               CONTENT: [{
                           type: "name",
                           title: "AP の PIN",
                           content: "ワイヤレス デバイスが AP の PIN (個人識別番号) を使用して AP にアクセスできるようにするにはオンにします。"
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "AP の PIN を表示します。既定の PIN は AP のラベルで確認できます。[生成] をクリックして新しい PIN をランダムに生成するか、[既定] をクリックして現在の PIN を工場出荷時の既定 PIN に復元します。"
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS ウィザード",
               CONTENT: [{
                           type: "name",
                           title: "プッシュ ボタン (推奨)",
                           content: "WPS ボタンを使用して、または [接続] ボタンを使用して仮想的に WPS 対応デバイスをワイヤレス ネットワークに簡単に接続できるように　WPS 機能を有効にするには、この接続方式を選択します。"
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "フィールドにワイヤレス デバイスの WPS PIN を入力してデバイスを手動で追加するには、この接続方式を選択し、[接続] をクリックします。"
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"ホスト ネットワークに接続",
               CONTENT: [{
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> ネットワークに接続",
                           content: "エクステンダ―による既存の 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ネットワークへの接続を有効または無効にします。"
                       } ,{                      
                           type: "name",
                           title: "ワイヤレス スキャナー",
                           content: "エクステンダ―の接続先の範囲内で利用可能なすべての Wi-Fi ネットワークをスキャンして表示するには、このボタンをクリックします。ネットワークが選択されると、そのネットワークの SSID とセキュリティ設定が自動的に入力されます。"
                       } ,{                      
                           type: "name",
                           title: "ホストの 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "エクステンダ―の接続先のホスト ネットワークの SSID を大文字小文字を区別して入力するか、[<strong>ワイヤレス スキャナー</strong>] をクリックして Wi-Fi ネットワークを選択します。"
                       } ,{                      
                           type: "name",
                           title: "ホストの 2.4GHz<span class=\"hidden_5g\">/5GHz</span> セキュリティ",
                           content: "ホスト ネットワークと一致するいずれかのセキュリティ オプションを選択します。"
                       } ,{                      
                           type: "name",
                           title: "セキュリティなし",
                           content: "このオプションはワイヤレス セキュリティを無効にします。 "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "このオプションは、適切なレベルのセキュリティを提供する TKIP (Temporal Key Integrity Protocol) のみをサポートします。 "
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "このオプションは、WPA-PSK よりも良いレベルのセキュリティを提供する AES (Advanced encryption) 暗号化をサポートします。これが推奨されます。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "このオプションは、WPA および WPA2 などの WPA (Wi-Fi 保護アクセス) 標準の複数実装をサポートします。"
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "このオプションは、クライアント デバイスが WEP (Wired Equivalent Privacy) でしかワイヤレスにアクセスできない場合に使用できるワイヤレス セキュリティの最も基本的な形式です。"
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"拡張ネットワーク設定",
               CONTENT: [{
                           type: "name",
                           title: "拡張 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "レンジ エクステンダ―の 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ワイヤレス機能を有効または無効にします。"
                       } ,{                      
                           type: "name",
                           title: "拡張 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "[<strong>ホスト SSID のコピー</strong>] ボタンを使用してメイン ルーター/AP の SSID を自動的にコピーするか、新しい名前 (32 文字まで) を入力します。このフィールドは大文字小文字が区別されます。"
                       } ,{                      
                           type: "name",
                           title: "ホスト SSID のコピー",
                           content: "ホスト ネットワークの SSID とセキュリティ設定をコピーしてそれぞれのフィールドに自動的に入力するには、このボタンをクリックします。"
                       } ,{                      
                           type: "name",
                           title: "SSID ブロードキャストを非表示にする",
                           content: "Wi-Fi ネットワーク リストで拡張 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID を非表示にする場合は、このチェックボックスをオンにします。"
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"アクセス コントロール",
               CONTENT: [{
                           type: "paragraph",
                           content: "アクセス コントロールは、特定のコンピューターやその他のデバイスによる拡張ネットワークへのアクセスを許可またはブロックするために使用されます。ブロックされたデバイスは拡張ネットワークに接続できません。"
                       } ,{                      
                           type: "paragraph",
                           content: "アクセス コントロールを使用するには、この機能を有効にしてブラックリストまたはホワイトリストを指定します。アクセス コントロールが無効 (オフ) になっている場合、ブラックリストに入っているデバイスを含むすべてのデバイスが接続を許可されます。"
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"アクセス モード",
               CONTENT: [{
                           type: "name",
                           title: "ブラックリスト",
                           content: "ブラックリスト内のデバイスのみが、ネットワークへのアクセスを許可されません。"
                       } ,{                      
                           type: "name",
                           title: "ホワイトリスト",
                           content: "ホワイトリスト内のデバイスのみが、ネットワークへのアクセスを許可されます。"
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"オンライン デバイス",
               CONTENT: [{
                           type: "name",
                           title: "デバイス名",
                           content: "接続されているデバイスの名前を表示します。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス",
                           content: "接続されているデバイスの IP アドレスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "接続されているデバイスの MAC アドレスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "接続タイプ",
                           content: "接続されているデバイスの接続タイプを表示します。"
                       } ,{                      
                           type: "step",
                           title: "デバイスをブロックするには",
                           content: "[オンライン デバイス] の表で、ブロック対象のデバイスに対応する [変更] 列のブロック アイコンをクリックします。"
                       } ,{                      
                           type: "step",
                           title: "複数のデバイスをブロックするには",
                           content: "[オンライン デバイス] の表で、ブロック対象のすべてのデバイスを選択して、表の上にある [ブロック] をクリックします。デバイスは、ブラックリストまたはホワイトリストのデバイスに自動で追加されます。"
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"ブラックリスト/ホワイトリストのデバイス",
               CONTENT: [{
                           type: "step",
                           title: "デバイスをブラックリスト/ホワイトリストに入れるには",
       content: [ 
                "1. 追加アイコンをクリックします。",
                "2. [デバイス名] を入力します。",
                "3. デバイスの MAC アドレスを入力します。",
                "4. 有効時刻のタイプを選択してください。[<b>時間スケジュールに基づいてアクセスできない/時間スケジュールに基づいてアクセス</b>] を選択した場合は、時刻と曜日を設定してください。",
                "5. [OK] をクリックします。"]
} ,{                      
                           type: "step",
                           title: "ブラックリスト/ホワイトリストのデバイスを変更または削除するには",
                           content: "ブラックリスト/ホワイトリストの表で、変更または削除するデバイスに対応する編集アイコンまたはゴミ箱アイコンをクリックします。"
                       } ,{                      
                           type: "step",
                           title: "ブラックリスト/ホワイトリストの複数のデバイスを削除するには",
                           content: "ブラックリスト/ホワイトリスト表で、削除対象のすべてのデバイスを選択して、表の上にある [削除] をクリックします。"
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"イーサネット",
               CONTENT: [{
                           type: "name",
                           title: "イーサネット ポートのホスト ネットワーク",
                           content: "有線のクライアントからワイヤレスのクライアントにトラフィックを送信するために使用されるホスト ネットワークのワイヤレス帯域 (2.4GHz または 5GHz) を選択します。<br/>このオプションは、2.4GHz および 5GHz の両方のホスト ネットワークが有効になっているときのみ使用できます。"
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"ネットワーク設定",
               CONTENT: [{
                           type: "name",
                           title: "IP アドレスを自動で取得",
                           content: "エクステンダ―がホスト ネットワークから IP アドレスとゲートウェイを動的に取得するようにする場合は、このオプションを選択します（推奨）。"
                       } ,{                      
                           type: "name",
                           title: "次の IP アドレスを使用",
                           content: "エクステンダ―の IP アドレスとゲートウェイを手動で設定する場合は、このオプションを選択します。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス",
                           content: "IP アドレスをドット 10 進表記で入力します (既定では 192.168.0.254)。"
                       } ,{                      
                           type: "name",
                           title: "サブネット　マスク",
                           content: "ネットワークのサイズを判別するサブネット マスクをドット 10 進表記で入力します (既定では 255.255.255.0)。"
                       } ,{                      
                           type: "name",
                           title: "デフォルト ゲートウェイ",
                           content: "IP アドレスと同じサブネットにあるゲートウェイをドット 10 進表記で入力します。通常は、ルーターの LAN IP アドレスです。"
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP サーバー設定",
               CONTENT: [{
                           type: "paragraph",
                           content: "既定では、レンジ エクステンダ―は、IP アドレス プールから LAN 内のエクステンダ―に接続されているすべてのクライアントに対して TCP/IP 設定を提供するために DHCP (動的ホスト構成プロトコル) サーバーとしてセットアップされています。"
                       } ,{                      
                           type: "name",
                           title: "DHCP サーバー",
                           content: "既定では、[自動] が選択されており、DHCP サーバーは有効な IP アドレスを自動でクライアントに割り当てます。DHCP サーバーはオン (有効) またはオフ (無効) にできます。[オフ] が選択されている場合、LAN 内に他の DHCP サーバーがなければなりません。そうでない場合、各クライアントの IP アドレスを手動で設定する必要があります。"
                       } ,{                      
                           type: "name",
                           title: "IP アドレス プール",
                           content: "クライアントにリースできる IP アドレスの範囲を入力します。既定では、開始 IP アドレスは 192.168.0.100 で、終了 IP アドレスは 192.168.0.199 です。 "
                       } ,{                      
                           type: "name",
                           title: "アドレス リース時間",
                           content: "IP アドレスをクライアントにリースする時間を 1 ～ 2880 分で入力します。既定値は 1 分です。"
                       } ,{                      
                           type: "name",
                           title: "デフォルト ゲートウェイ",
                           content: "<br/>レンジ エクステンダ―の LAN IP アドレスを入力します。既定値は 192.168.0.254 です。(オプション)"
                       } ,{                      
                           type: "name",
                           title: "プライマリ DNS",
                           content: "ISP によって提供された DNS IP アドレスを入力します。(オプション)"
                       } ,{                      
                           type: "name",
                           title: "セカンダリ DNS",
                           content: "ISP によって提供されたとおりにパラメーターを入力します。(オプション) "
                       } ,{                      
                           type: "note",
                           title: "注",
                           content: "レンジ エクステンダ―の DHCP サーバーを使用するには、LAN 内のすべてのクライアントが IP アドレスを自動で取得するように設定する必要があります。"
                       } ,{                      
                           type: "paragraph",
                           content: "設定を保存するには [<strong>保存</strong>] をクリックします。"
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"アドレス予約",
               CONTENT: [{
                           type: "paragraph",
                           content: "エクステンダ―に接続されているクライアントの IP アドレスを手動で予約できます。予約すると、IP アドレスは DHCP サーバーによって同じクライアントにのみ割り当てられます。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "DHCP によって予約された IP アドレスをもつクライアントの MAC アドレスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "予約済み IP アドレス",
                           content: "クライアントの予約済み IP アドレスを表示します。"
                       } ,{                      
                           type: "name",
                           title: "説明",
                           content: "クライアント デバイスの説明を表示します。"
                       } ,{                      
                           type: "name",
                           title: "ステータス",
                           content: "クライアント デバイスの現在のステータス (有効または無効) を表示します。"
                       } ,{                      
                           type: "name",
                           title: "変更",
                           content: "対応するクライアントを修正または削除するオプションを表示します。"
                       } ,{                      
                           type: "step",
                           title: "IP アドレスを予約するには",
       content: [ 
                "1.[追加] をクリックします。",
                "2.目的のクライアントの MAC アドレスを入力します。",
                "3.クライアントについて予約する IP アドレスを入力します。",
                "4.クライアントの説明を入力します。",
                "5.[有効] を選択します。",
                "6.[OK] をクリックします。"]
} ,{                      
                           type: "step",
                           title: "既存のクライアントを修正または削除するには",
                           content: "表で、修正または削除するクライアントに対応する編集アイコンまたはゴミ箱アイコンをクリックします。"
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP クライアント リスト",
               CONTENT: [{
                           type: "paragraph",
                           content: "レンジ エクステンダ―に接続されている各 DHCP クライアントの以下の情報を表示します。"
                       } ,{                      
                           type: "name",
                           title: "クライアント総数",
                           content: "関連つけられている DHCP クライアントの数を表示します。"
                       } ,{                      
                           type: "name",
                           title: "クライアント名",
                           content: "DHCP クライアントの名前。"
                       } ,{                      
                           type: "name",
                           title: "MAC アドレス",
                           content: "DHCP クライアントの MAC アドレス。"
                       } ,{                      
                           type: "name",
                           title: "割り当て済み IP アドレス",
                           content: "DHCP サーバーによってクライアントに割り当てられる IP アドレス。"
                       } ,{                      
                           type: "name",
                           title: "リース時間",
                           content: "IP アドレスが DHCP クライアントにリースされる時間。"
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>更新</strong> - DHCP クライアント リストを更新するには、このボタンをクリックします。"
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Wi-Fi 範囲",
               CONTENT: [{
                           type:"paragraph",
                           content: "レンジ エクステンダーの Wi-Fi 範囲レベルを選択してください。"
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"時刻設定",
               CONTENT: [{
                           type: "name",
                           title: "現在の時間",
                           content: "現在のシステム時間を表示します。"
                       } ,{
                           type: "name",
                           title: "タイム ゾーン",
                           content: "タイム ゾーンを選択します。"
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"夏時間",
               CONTENT: [{
              type: "step",
                            title: "夏時間を設定するには:",
              content:[
                "1. [夏時間] を選択します。",
                "2.地域のタイム ゾーンで夏時間が開始する正しい<b>開始</b>日時を選択します。",
                "3.地域のタイム ゾーンで夏時間が終了する正しい<b>終了</b>日時を選択します。",
                "4.[保存] をクリックします。"]},
        {
          type:"name",
          title:"現在のステータス",
          content:"現在の時刻が夏時間かどうかを示します。"
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED コントロール",
               CONTENT: [{
                           type: "paragraph",
                           content: "LED コントロールを使用すると、特定のスケジュールに従って、レンジ エクステンダ―の LED をオンまたはオフにできます。"
                       } ,{                      
                           type: "name",
                           title: "夜モード",
                           content: "夜モードのオン (有効) またはオフ (無効) を示します。"
                       } ,{                      
                           type: "name",
                           title: "LED オフ時間",
                           content: "LED をオフにする時間を選択します。"
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"電源スケジュール",
               CONTENT: [{
                           type: "paragraph",
                           content: "節電の目的で時間スケジュールに従ってエクステンダーの電源をオフにするには、この機能を有効にします。"
                       } ,{                      
                           type: "name",
                           title: "電源スケジュールを有効にする",
                           content: "電源スケジュールを有効にするには、このオプションを選択します。"
                       } ,{                      
                           type: "name",
                           title: "電源オフ時間",
                           content: "エクステンダーの電源を自動的にオフにする期間を選択します。"
                       } ,{                      
                           type: "name",
                           title: "曜日",
                           content: "エクステンダーの電源をオフにする曜日を選択します。"
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"ファームウェア アップグレード",
               CONTENT: [{
                           type: "name",
                           title: "ファームウェア バージョン",
                           content: "現在のファームウェア バージョンを表示します。"
                       } ,{                      
                           type: "name",
                           title: "ハードウェア バージョン",
                           content: "現在のハードウェア バージョンを表示します。"
                       } ,{                      
                           type: "step",
                           title: "重要:アップグレードの失敗を避けるために、以下に注意してください。",
       content: [ 
                "1.アップグレードするファームウェア ファイルは、エクステンダ―の現在のハードウェア バージョンと一致していなければなりません。",
                "2.アップグレード プロセス中はエクステンダ―の電源をオンにしておくことが重要です。電力が切断されると、エクステンダ―が壊れる可能性があります。"]
} ,{                      
                           type: "step",
                           title: "エクステンダ―のファームウェアをアップグレードするには:",
       content: [ 
                "1.<a class=\"link\" href=\"http://www.tp-link.jp/support.html\" target=\"_blank\">TP-Link サポート</a>から最新のアップグレード ファイルをコンピューターにダウンロードします。",
                "2.[<strong>参照</strong>] をクリックして、ダウンロードされたファイルを見つけて選択します。",
                "3.[<strong>アップグレード</strong>] をクリックします。"]
} ,{                      
                           type: "paragraph",
                           content: "アップグレードは数分で完了します。完了すると、レンジ エクステンダ―は自動的に再起動します。"
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"バックアップ",
               CONTENT: [{
                           type: "paragraph",
                           content: "システムを以前の状態に、または工場出荷時の状態から復元するためにリカバリが必要になる場合に備えて、現在の設定をバックアップしておくことを強く推奨します。"
                       } ,{                      
                           type: "paragraph",
                           content: "[バックアップ] をクリックして、現在の設定を config.bin ファイルとしてコンピューターに保存します。必要なときに取り出せる安全な場所に保存してください。 "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"復元",
               CONTENT: [{
                           type: "step",
                           title: "保存されている設定をバックアップ ファイルから復元するには:",
       content: [ 
                "1.[参照] をクリックして、バックアップ ファイルを見つけます。",
                "2.バックアップ ファイルを選択します。",
                "3.[復元]　をクリックします。",
                "4.[<strong>はい</strong>] をクリックして、システムの復元を確定します。",
                "復元プロセスは数分で完了します。完了すると、レンジ エクステンダ―は自動的に再起動します。"]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"既定の復元",
               CONTENT: [{
                           type: "paragraph",
                           content: "レンジ エクステンダ―を工場出荷時の設定にリセットするには、[既定の復元] をクリックします。"
                       } ,{                      
                           type: "note",
                            title: "注",
							content: [
								"1、既定の復元は設定されたエクステンダーの設定をすべて削除します。エクステンダーの管理ページに再ログインするには、既定のユーザー名とパスワードを使用してください。",
								"1、復元を行うと中継器の行った設定がすべて消去されます。次回のログインのためにパスワードを作成してください。",
								"2. 復元中はレンジ エクステンダ―の電源を切らないでください。"
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"管理者アカウント",
               CONTENT: [{
                           type: "paragraph",
                           content: "このページでは、既定のログイン ユーザー名とパスワードを変更できます。"
                       } ,{                      
                           type: "paragraph",
                           content: "このページではログインパスワードの変更が可能です。"
                       } ,{                      
                           type: "name",
                           title: "古いユーザー名",
                           content: "現在のユーザー名を入力します。"
                       } ,{                      
                           type: "name",
                           title: "古いパスワード",
                           content: "現在のパスワードを入力します。"
                       } ,{                      
                           type: "name",
                           title: "新しいユーザー名 ",
                           content: "新しいユーザー名を入力します。"
                       } ,{                      
                           type: "name",
                           title: "新しいパスワード",
                           content: "新しいパスワードを入力します。"
                       } ,{                      
                           type: "name",
                           title: "パスワードの確認",
                           content: "新しいパスワードを再入力します。"
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"システム ログ",
               CONTENT: [{
                           type: "paragraph",
                           content: "[システム ログ] ページは、エクステンダ―の最新のアクティビティ (イベント) のリストを表示します。表示するログの種類とレベルを定義できます。"
                       } ,{                      
                           type: "name",
                           title: "タイプ",
                           content: "表示するログ タイプを選択します。"
                       } ,{                      
                           type: "name",
                           title: "レベル",
                           content: "表示するログ レベルを選択します。"
                       } ,{                      
                           type: "name",
                           title: "更新",
                           content: "システム ログを更新するには、このボタンをクリックします。"
                       } ,{                      
                           type: "name",
                           title: "すべて削除",
                           content: "すべてのログを永久に削除するには、このボタンをクリックします。"
                       } ,{                      
                           type: "name",
                           title: "ログを保存",
                           content: "システム ログを .txt ファイルとして保存するには、このボタンをクリックします。"
                       }]
}
    });
})(jQuery);
