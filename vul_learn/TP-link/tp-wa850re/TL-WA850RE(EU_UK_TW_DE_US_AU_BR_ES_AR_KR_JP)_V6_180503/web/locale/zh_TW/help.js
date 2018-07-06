(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
	$.su.CHAR.HELP={
       BASIC_REGION :{ 
               TITLE:"地區設定",
               CONTENT: [{
                           type: "name",
                           title: "地區",
                           content: "從下拉式功能表選取您的地區。如果您的國家或地區未列出，可能是您所在的位置限制使用無線通訊。"
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"狀態",
               CONTENT: [{
                           type: "paragraph",
                           content: "「基本狀態」頁面會顯示一個含有目前網路狀態和資訊的儀表板。您可以按一下各個圖示，取得更多詳細資料。 "
                       } ,{                      
                           type: "title",
                            title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> 主網路"
                       } ,{                      
                           type: "paragraph",
                           content: "顯示 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 主網路的以下資訊。"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "主網路 SSID。"
                       } ,{                      
                           type: "name",
                           title: "訊號",
                           content: "主網路的訊號強度。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "主網路的實體 MAC 位址。"
                       } ,{                      
                           type: "title",
                            title: "範圍擴展器"
                       } ,{                      
                           type: "paragraph",
                           content: "顯示 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 擴展網路資訊。"
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "擴展網路名稱 (SSID)。"
                       } ,{                      
                           type: "name",
                           title: "頻道",
                           content: "目前使用中的無線網路頻道。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "範圍擴展器的實體位址。"
                       } ,{                      
                           type: "name",
                           title: "DHCP 伺服器",
                           content: "顯示 DHCP 伺服器的狀態。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址",
                           content: "顯示範圍擴展器自行設定或由DHCP伺服器取得的IP位址。"
                       } ,{                      
                           type: "name",
                           title: "類型",
                           content: "顯示範圍擴展器由何種方式獲得區域網路IP位址。"
                       } ,{                      
                           type: "title",
                            title: "用戶端"
                       } ,{                      
                           type: "paragraph",
                           content: "顯示用戶端裝置透過何種方式連接到擴展器。"
                       } ,{                      
                           type: "name",
                           title: "類型",
                           content: "用戶端裝置已連線的 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 擴展網路。"
                       } ,{                      
                           type: "name",
                           title: "裝置名稱",
                           content: "已連線用戶端裝置的名稱。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "已連線用戶端裝置的實體 MAC 位址。"
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"狀態",
               CONTENT: [{
                           type: "paragraph",
                           content: "「狀態」頁面會顯示一個含有目前網路狀態和資訊的儀表板。您可以按一下各個圖示，取得更多詳細資料。"
                       } ,{                      
                           type: "title",
                            title: "網際網路"
                       } ,{                      
                           type: "name",
                           title: "網際網路狀態",
                           content: "顯示裝置的網際網路連線狀態。"
                       } ,{                      
                           type: "title",
                            title: "存取點"
                       } ,{                      
                           type: "name",
                           title: "DHCP 伺服器",
                           content: "顯示 DHCP 伺服器的狀態。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址",
                           content: "顯示由 DHCP 伺服器配置給存取點的 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "類型",
                           content: "顯示存取點取得的 IP 位址類型。"
                       } ,{                      
                           type: "title",
                            title: "無線用戶端"
                       } ,{                      
                           type: "name",
                           title: "名稱",
                           content: "顯示用戶端裝置的名稱。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址",
                           content: "顯示配置給用戶端裝置的 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "顯示用戶端裝置的實體 MAC 位址。"
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"設定",
               CONTENT: [{
                           type: "name",
                           title: "地區",
                           content: "從下拉式功能表選取您的地區。如果您的國家或地區未列出，可能是您所在的位置限制使用無線通訊。"
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"2.4GHz 無線",
               CONTENT: [{
                           type: "name",
                           title: "啟用無線通訊",
                           content: "選取這個核取方塊可啟用 2.4GHz 無線射頻傳輸功能。"
                       } ,{                      
                           type: "name",
                           title: "無線網路名稱 (SSID)",
                           content: "您可以保留預設網路名稱 (SSID) 不變，也可以輸入新名稱 (最多 32 個字元)。這個欄位區分大小寫。"
                       } ,{                      
                           type: "name",
                           title: "隱藏 SSID",
                           content: "如果您要隱藏 2.4GHz 網路名稱 (SSID)，使其不顯示在 Wi-Fi 網路清單中，請選取這個核取方塊。"
                       } ,{                      
                           type: "name",
                           title: "安全性",
                           content: "選取以下其中一個安全性選項：",
       children: [{                      
                           type: "name",
                           title: "不啟用安全性",
                           content: "選取這個選項可停用無線安全性。高度建議您啟用無線安全性來保護您的無線網路，以防止他人未經授權擅自存取。"
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2 - 個人",
                           content: "選取這個選項可啟用以預先共用金鑰 (PSK) 為基礎的標準驗證方法。建議使用這個選項。如果選取，請設定以下項目。",
       children: [{                      
                           type: "name",
                           title: "版本",
                           content: "為您的無線網路選取安全性版本。",
       children: [{                      
                           type: "name",
                           title: "自動",
                           content: "這個選項支援 WPA (Wi-Fi 保護存取) 標準的多重版本，如 WPA 和 WPA2。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "這個選項僅支援 TKIP 加密，可提供良好安全性等級。"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "這個選項支援 AES 加密，可提供比 WPA-PSK 更好的安全性等級，建議您使用。"
                       }]
} ,{                      
                           type: "name",
                           title: "加密",
                           content: "選取安全性加密類型:TKIP (暫時密鑰完整性協定)、AES (進階加密標準) 或自動 (適用於 TKIP 和 AES 兩者)。如果訊號擴展器在 802.11n 模式下操作，則不建議您使用 TKIP 加密，因為 802.11n 規格不支援 TKIP。如果選取 TKIP，將停用 WPS 功能。"
                       } ,{                      
                           type: "name",
                           title: "密碼",
                           content: "在這個欄位中，輸入無線網路密碼，長度為 8 到 63 個 ASCII 字元或 8 到 64 個十六進位字元。"
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "如果有任何一個用戶端裝置只能使用 WEP (有線等效加密) 存取無線網路，請選取這個選項來啟用基本驗證方法。",
       children: [{                      
                           type: "name",
                           title: "類型",
                           content: "選取用於無線網路的驗證類型。預設為「自動」，將根據無線用戶端功能和存取要求，自動選擇「開放系統」或「共用金鑰」。"
                       } ,{                      
                           type: "name",
                           title: "WEP 金鑰格式",
                           content: "使用 ASCII 格式或選取「十六進位」。ASCII 格式是字母和數字字元的組合。十六進位格式是數字 (0-9) 和字母 (A-F、a-f) 的組合。"
                       } ,{                      
                           type: "name",
                           title: "金鑰類型",
                           content: "選取 WEP 金鑰長度。",
       children: [{                      
                           type: "name",
                           title: "64 位元",
                           content: "可讓您在「WEP 值」欄位中，輸入 10 個十六進位數字 (0-9、A-F、a-f) 或 5 個 ASCII 字元。"
                       } ,{                      
                           type: "name",
                           title: "128 位元",
                           content: "可讓您在「WEP 值」欄位中，輸入 26 個十六進位數字 (0-9、A-F、a-f) 或 13 個 ASCII 字元。"
                       }]
} ,{                      
                           type: "name",
                           title: "金鑰值",
                           content: "在相關欄位中輸入 WEP 金鑰。"
                       }]
}]
} ,{                      
                           type: "name",
                           title: "模式",
                           content: "請選擇傳輸模式。"
                       } ,{                      
                           type: "name",
                           title: "頻道寬度",
                           content: "選取 2.4GHz 無線網路的頻道寬度 (頻寬)。"
                       } ,{                      
                           type: "name",
                           title: "頻道",
                           content: "選取 2.4GHz 無線網路的運作頻道。如果沒有遭遇無線連線不穩定的問題，建議您將頻道保留設定為「自動」。 "
                       } /*,{                      
                           type: "name",
                           title: "傳輸功率",
                           content: "選取「高」、「中」或「低」，來指定資料傳輸功率。預設及建議使用的設定值為「高」。"
                       }*/ ,{                      
                           type: "paragraph",
                           content: "按一下「儲存」來儲存所有設定。"
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"5GHz 無線",
               CONTENT: [{
                           type: "name",
                           title: "啟用無線通訊",
                           content: "選取這個核取方塊可啟用 5GHz 無線射頻傳輸功能。"
                       } ,{                      
                           type: "name",
                           title: "無線網路名稱 (SSID)",
                           content: "您可以保留預設網路名稱 (SSID) 不變，也可以輸入新名稱 (最多 32 個字元)。這個欄位區分大小寫。"
                       } ,{                      
                           type: "name",
                           title: "隱藏 SSID",
                           content: "如果您要隱藏 5GHz 網路名稱 (SSID)，使其不顯示在 Wi-Fi 網路清單中，請選取這個核取方塊。"
                       } ,{                      
                           type: "name",
                           title: "安全性",
                           content: "選取以下其中一個安全性選項：",
       children: [{                      
                           type: "name",
                           title: "不啟用安全性",
                           content: "選取這個選項可停用無線安全性。高度建議您啟用無線安全性來保護您的無線網路，以防止他人未經授權擅自存取。"
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2 - 個人",
                           content: "選取這個選項可啟用以預先共用金鑰 (PSK) 為基礎的標準驗證方法。建議使用這個選項。如果選取，請設定以下項目。",
       children: [{                      
                           type: "name",
                           title: "版本",
                           content: "為您的無線網路選取安全性版本。",
       children: [{                      
                           type: "name",
                           title: "自動",
                           content: "這個選項支援 WPA (Wi-Fi 保護存取) 標準的多重版本，如 WPA 和 WPA2。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "這個選項僅支援 TKIP 加密，可提供良好安全性等級。"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "這個選項支援 AES 加密，可提供比 WPA-PSK 更好的安全性等級，建議您使用。"
                       }]
} ,{                      
                           type: "name",
                           title: "加密",
                           content: "選取安全性加密類型:TKIP (暫時密鑰完整性協定)、AES (進階加密標準) 或自動 (適用於 TKIP 和 AES 兩者)。如果訊號擴展器在 802.11n 模式下操作，則不建議您使用 TKIP 加密，因為 802.11n 規格不支援 TKIP。如果選取 TKIP，將停用 WPS 功能。"
                       } ,{                      
                           type: "name",
                           title: "密碼",
                           content: "在這個欄位中，輸入無線網路密碼，長度為 8 到 63 個 ASCII 字元或 8 到 64 個十六進位字元。"
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "如果有任何一個用戶端裝置只能使用 WEP (有線等效加密) 存取無線網路，請選取這個選項來啟用基本驗證方法。",
       children: [{                      
                           type: "name",
                           title: "類型",
                           content: "選取用於無線網路的驗證類型。預設為「自動」，將根據無線用戶端功能和存取要求，自動選擇「開放系統」或「共用金鑰」。"
                       } ,{                      
                           type: "name",
                           title: "WEP 金鑰格式",
                           content: "使用 ASCII 格式或選取「十六進位」。ASCII 格式是字母和數字字元的組合。十六進位格式是數字 (0-9) 和字母 (A-F、a-f) 的組合。"
                       } ,{                      
                           type: "name",
                           title: "金鑰類型",
                           content: "選取 WEP 金鑰長度。",
       children: [{                      
                           type: "name",
                           title: "64 位元",
                           content: "可讓您在「WEP 值」欄位中，輸入 10 個十六進位數字 (0-9、A-F、a-f) 或 5 個 ASCII 字元。"
                       } ,{                      
                           type: "name",
                           title: "128 位元",
                           content: "可讓您在「WEP 值」欄位中，輸入 26 個十六進位數字 (0-9、A-F、a-f) 或 13 個 ASCII 字元。"
                       }]
} ,{                      
                           type: "name",
                           title: "金鑰值",
                           content: "在相關欄位中輸入 WEP 金鑰。"
                       }]
}]
} ,{                      
                           type: "name",
                           title: "模式",
                           content: "請選擇傳輸模式。"
                       } ,{                      
                           type: "name",
                           title: "頻道寬度",
                           content: "選取 5GHz 無線網路的頻道寬度 (頻寬)。"
                       } ,{                      
                           type: "name",
                           title: "頻道",
                           content: "選取 5GHz 無線網路的運作頻道。如果沒有遭遇無線連線不穩定的問題，建議您將頻道保留設定為「自動」。 "
                       } /*,{                      
                           type: "name",
                           title: "傳輸功率",
                           content: "選取「高」、「中」或「低」，來指定資料傳輸功率。預設及建議使用的設定值為「高」。"
                       }*/ ,{                      
                           type: "paragraph",
                           content: "按一下「儲存」來儲存所有設定。"
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "啟用 WPS",
                           content: "其他裝置可以使用 AP 的 PIN 透過 WPS 連線至這個存取點 (AP)。"
                       }]
},
       WPS :{ 
               TITLE:"AP 的 PIN",
               CONTENT: [{
                           type: "name",
                           title: "AP 的 PIN",
                           content: "切至「開啟」可以讓無線裝置使用 AP 的 PIN (個人識別號碼) 連線至 AP。"
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "顯示 AP 的 PIN。預設 PIN 位於 AP 的標籤上。按一下「產生」可隨機產生新 PIN，按一下「預設」可將目前的 PIN 還原為出廠預設的 PIN。"
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS 精靈",
               CONTENT: [{
                           type: "name",
                           title: "按鈕 (建議)",
                           content: "選取這個連線方法可啟用 WPS 功能，以便使用 WPS 按鈕或使用「連線」按鈕，讓任何已啟用 WPS 的裝置輕易地連線至您的無線網路。"
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "選取這個連線方法，即可在欄位中輸入無線裝置的 WPS PIN，藉此手動新增裝置，然後再按一下「連線」。"
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"連線至主網路",
               CONTENT: [{
                           type: "name",
                           title: "連線至 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 網路。",
                           content: "啟用或停用連接擴展器到現有的 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 網路。"
                       } ,{                      
                           type: "name",
                           title: "無線掃描器",
                           content: "按一下這個按鈕，可在您要訊號擴展器進行連線的範圍內，掃描並顯示所有可用的 Wi-Fi 網路。選取一個網路後，將會自動填入該網路的 SSID 和安全性設定。"
                       } ,{                      
                           type: "name",
                           title: "主網路 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "輸入擴展器將連線的主網路 SSID (有區分大小寫)，或是按一下<strong>無線掃描器</strong>並選取一個 Wi-Fi 網路。"
                       } ,{                      
                           type: "name",
                           title: "主網路 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 安全性",
                           content: "選取與主網路相符的安全性選項。"
                       } ,{                      
                           type: "name",
                           title: "不啟用安全性",
                           content: "這個選項會停用無線安全性。 "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "這個選項僅支援 TKIP (暫時密鑰完整性協定)，可提供良好安全性等級。 "
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "這個選項支援 AES (進階加密標準) 加密，可提供比 WPA-PSK 更好的安全性等級。建議使用這個選項。"
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "這個選項支援 WPA (Wi-Fi 保護存取) 標準的多重版本，如 WPA 和 WPA2。"
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "這個選項是最基本的無線安全性模式，如果您的用戶端裝置只能使用 WEP (有線等效加密) 存取無線網路，則可使用這個選項。"
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"擴展網路設定",
               CONTENT: [{
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz 擴展網路</span>",
                           content: "啟用或停用範圍擴展器的 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 無線功能。"
                       } ,{                      
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> 擴展網路 SSID",
                           content: "使用<strong>複製主網路 SSID</strong> 按鈕自動複製主要路由器/AP 的 SSID，或是輸入新名稱 (長度最多為 32 個字元)。這個欄位區分大小寫。"
                       } ,{                      
                           type: "name",
                           title: "複製主網路 SSID",
                           content: "按一下這個按鈕可複製主網路的 SSID 和安全性設定，並自動填入相關欄位。"
                       } ,{                      
                           type: "name",
                           title: "隱藏 SSID 廣播",
                           content: "如果您要隱藏 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 擴展網路 SSID，使不顯示在 Wi-Fi 網路清單中，可選取這個核取方塊。"
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"存取控制",
               CONTENT: [{
                           type: "paragraph",
                           content: "「存取控制」可用於允許或封鎖特定電腦及其他裝置存取您的擴展網路。遭到封鎖的裝置將無法連線至擴展網路。"
                       } ,{                      
                           type: "paragraph",
                           content: "若要使用存取控制，請啟用這個功能並指定黑名單或白名單。如果停用 (關閉) 存取控制，將允許所有裝置 (包括黑名單中的裝置) 進行連線。"
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"存取模式",
               CONTENT: [{
                           type: "name",
                           title: "黑名單",
                           content: "僅禁止黑名單中的裝置存取您的網路。"
                       } ,{                      
                           type: "name",
                           title: "白名單",
                           content: "僅允許白名單中的裝置存取您的網路。"
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"上線裝置",
               CONTENT: [{
                           type: "name",
                           title: "裝置名稱",
                           content: "顯示已連線裝置的名稱。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址",
                           content: "顯示已連線裝置的 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "顯示已連線裝置的 MAC 位址。"
                       } ,{                      
                           type: "name",
                           title: "連線類型",
                           content: "顯示已連線裝置的連線類型。"
                       } ,{                      
                           type: "step",
                           title: "封鎖一個裝置",
                           content: "在「上線裝置」表格中，根據您要封鎖的裝置，按一下其對應的「修改」欄中的「封鎖」圖示。"
                       } ,{                      
                           type: "step",
                           title: "封鎖多個裝置",
                           content: "在「上線裝置」表格中，選取您要封鎖的所有裝置，然後按一下表格上方的「封鎖」。裝置將自動新增至「黑名單」或「白名單」中的「裝置」。"
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"黑名單/白名單中的裝置",
               CONTENT: [{
                           type: "step",
                           title: "將裝置列入黑名單或白名單",
       content: [ 
                "1. 按一下「新增」圖示。",
                "2. 輸入裝置名稱。",
                "3. 輸入裝置的 MAC 位址。",
                "4. 選取有效時間的類型。如果您選取<b>無法根據時間排程存取/根據時間排程存取</b>，請定時間和星期幾。",
                "5. 按一下「確定」。"]
} ,{                      
                           type: "step",
                           title: "修改或刪除黑名單/白名單中的一個裝置",
                           content: "在「黑名單/白名單」表格中，根據您要修改或刪除的裝置，按一下對應的「編輯」圖示或「垃圾桶」圖示。"
                       } ,{                      
                           type: "step",
                           title: "刪除黑名單/白名單中的多個裝置",
                           content: "在「黑名單/白名單」表格中，選取您要刪除的所有裝置，然後按一下表格上方的「刪除」。"
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"乙太網路埠",
               CONTENT: [{
                           type: "name",
                           title: "用於乙太網路埠的主網路",
                           content: "請選擇用於乙太網路埠的無線頻段（2.4GHz或5GHz），則該無線頻段將會被設定為，從有線設備傳輸資料到無線設備的主要傳輸用無線網路。"
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"網路設定",
               CONTENT: [{
                           type: "name",
                           title: "自動取得 IP 位址",
                           content: "如果您要訊號擴展器從您的主網路動態取得 IP 位址和閘道，可選取這個選項 (建議)。"
                       } ,{                      
                           type: "name",
                           title: "使用以下 IP 位址",
                           content: "如果您要手動設定訊號擴展器的 IP 位址和閘道，可選取這個選項。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址",
                           content: "以小數點十進位表示法，輸入 IP 位址 (預設值為 192.168.0.254)。"
                       } ,{                      
                           type: "name",
                           title: "子網路遮罩",
                           content: "以小數點十進位表示法，輸入子網路遮罩以決定網路大小 (預設值為 255.255.255.0)。"
                       } ,{                      
                           type: "name",
                           title: "預設閘道",
                           content: "以小數點十進位表示法，輸入位於與 IP 位址相同之子網路的閘道。這通常是您的路由器的 LAN IP 位址。"
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP 伺服器設定",
               CONTENT: [{
                           type: "paragraph",
                           content: "根據預設，範圍擴展器會設定為 DHCP (動態主網路設定協定) 伺服器，以便將 TCP/IP 設定提供給 LAN 中從 IP 位址集區連線至訊號擴展器的所有用戶端。"
                       } ,{                      
                           type: "name",
                           title: "DHCP 伺服器",
                           content: "預設為選取「自動」；DHCP伺服器將會自動將有效的IP位址指派給用戶端。您可以開啟 (啟用) 或關閉 (停用) DHCP 伺服器。如果選取「關閉」，您的 LAN 中必須有另一部 DHCP 伺服器；否則，您將必須手動為每一個用戶端設定 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "IP 位址集區",
                           content: "輸入可租用給用戶端的 IP 位址範圍。起始 IP 位址預設為 192.168.0.100，結束 IP 位址為 192.168.0.199。 "
                       } ,{                      
                           type: "name",
                           title: "位址租用時間",
                           content: "輸入 IP 位址租用給用戶端的時間長度 (1 到 2880 分鐘之間)。預設為 1 分鐘。"
                       } ,{                      
                           type: "name",
                           title: "預設閘道",
                           content: "<br/>輸入範圍擴展器的 LAN IP 位址。預設為 192.168.0.254。(選填)"
                       } ,{                      
                           type: "name",
                           title: "主要 DNS",
                           content: "輸入由 ISP 提供的 DNS IP 位址。(選填)"
                       } ,{                      
                           type: "name",
                           title: "次要 DNS",
                           content: "輸入這些由 ISP 提供的參數。(選填)"
                       } ,{                      
                           type: "note",
                           title: "備註",
                           content: "為了能使用範圍擴展器的 DHCP 伺服器，在 LAN 中的所有用戶端都必須設定為自動取得 IP 位址。"
                       } ,{                      
                           type: "paragraph",
                           content: "按一下<strong>儲存</strong>來儲存您的設定。"
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"位址保留區",
               CONTENT: [{
                           type: "paragraph",
                           content: "您可以手動將某個 IP 位址保留給連線至訊號擴展器的用戶端使用。被保留的 IP 位址，只能由 DHCP 伺服器指派給同一個用戶端。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "顯示具有 DHCP 保留 IP 位址的用戶端的 MAC 位址。"
                       } ,{                      
                           type: "name",
                           title: "保留的 IP 位址",
                           content: "顯示用戶端保留的 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "描述",
                           content: "顯示用戶端裝置的描述。"
                       } ,{                      
                           type: "name",
                           title: "狀態",
                           content: "顯示該條位址保留規則目前的狀態（停用或啟用）。"
                       } ,{                      
                           type: "name",
                           title: "修改",
                           content: "顯示用於修改或刪除該條位址保留規則的對應選項。"
                       } ,{                      
                           type: "step",
                           title: "保留 IP 位址",
       content: [ 
                "1. 按一下「新增」。",
                "2. 輸入所需用戶端的 MAC 位址。",
                "3. 輸入要保留給用戶端使用的 IP 位址。",
                "4. 輸入用戶端的描述。",
                "5. 選取「啟用這個項目」。",
                "6. 按一下「確定」。"]
} ,{                      
                           type: "step",
                           title: "修改或刪除已存在的位址保留規則",
                           content: "在表格中，根據您要修改或刪除的用戶端，按一下對應的「編輯」圖示或「垃圾桶」圖示。』→『在表格中，根據您要修改或刪除的位址保留規則，點選對應的「編輯」圖示或「垃圾桶」圖示。"
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP 用戶端清單",
               CONTENT: [{
                           type: "paragraph",
                           content: "顯示每個連線至範圍擴展器的 DHCP 用戶端的以下資訊。"
                       } ,{                      
                           type: "name",
                           title: "用戶端總數",
                           content: "使用擴展器DHCP服務的用戶端數量。"
                       } ,{                      
                           type: "name",
                           title: "用戶端名稱",
                           content: "DHCP 用戶端的名稱。"
                       } ,{                      
                           type: "name",
                           title: "MAC 位址",
                           content: "DHCP 用戶端的 MAC 位址。"
                       } ,{                      
                           type: "name",
                           title: "指派的 IP 位址",
                           content: "由 DHCP 伺服器配置給用戶端的 IP 位址。"
                       } ,{                      
                           type: "name",
                           title: "租用時間",
                           content: "IP 位址租用給 DHCP 用戶端的時間長度。"
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>重新整理</strong> - 按一下這個按鈕可更新 DHCP 用戶端清單。"
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Wifi 覆蓋範圍",
               CONTENT: [{
						   type:"paragraph",
                           content: "選取無線訊號延伸器的 Wi-Fi 覆蓋範圍等級。"
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"時間設定",
               CONTENT: [{
                           type: "name",
                           title: "目前時間",
                           content: "顯示目前的系統時間。"
                       } ,{
                           type: "name",
                           title: "時區",
                           content: "選取您所在的時區。"
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"日光節約時間",
               CONTENT: [{
              type: "step",
                            title: "設定日光節約時間：",
              content:[
                "1. 選取「日光節約時間」。",
                "2. 選取當地時區日光節約時間開始的正確<b>開始</b>日期和時間。",
                "3. 選取當地時區日光節約時間結束的正確<b>結束</b>日期和時間。",
                "4. 按一下「儲存」。"]},
        {
          type:"name",
          title:"目前狀態",
          content:"指示目前時間是否正處於日光節約時間。"
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED 控制",
               CONTENT: [{
                           type: "paragraph",
                           content: "「LED 控制」可讓您根據指定的時間排程，開啟或關閉範圍擴展器的 LED。"
                       } ,{                      
                           type: "name",
                           title: "夜間模式",
                           content: "您可以勾選（啟用）或取消勾選（停用），以決定您是否要啟用LED控制功能。"
                       } ,{                      
                           type: "name",
                           title: "LED 關閉時間",
                           content: "選取要關閉 LED 的時間排程。"
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"電源排程",
               CONTENT: [{
                           type: "paragraph",
                           content: "啟用這個功能可根據時間排程，關閉訊號延伸器的電源，以達省電目的。"
                       } ,{                      
                           type: "name",
                           title: "啟用電源排程",
                           content: "選取這個選項可啟用電源排程。"
                       } ,{                      
                           type: "name",
                           title: "關機時間",
                           content: "選取訊號延伸器自動關機的時間。"
                       } ,{                      
                           type: "name",
                           title: "星期幾",
                           content: "選取要在星期幾執行訊號延伸器關機。"
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"韌體升級",
               CONTENT: [{
                           type: "name",
                           title: "韌體版本",
                           content: "顯示目前的韌體版本。"
                       } ,{                      
                           type: "name",
                           title: "硬體版本",
                           content: "顯示目前的硬體版本。"
                       } ,{                      
                           type: "step",
                           title: "重要：為防止發生升級失敗，請注意以下各點：",
       content: [ 
                "1. 升級韌體檔案必須與訊號擴展器的目前硬體版本一致。",
                "2. 在升級的過程中，務必使訊號擴展器保持連接電源的狀態，如果電源中斷，將可能損壞訊號擴展器。"]
} ,{                      
                           type: "step",
                           title: "升級訊號擴展器的韌體：",
       content: [ 
                "1. 從 <a class=\"link\" href=\"http://www.tp-link.tw/Support/\" target=\"_blank\">TP-Link 支援網站</a> 下載最新的韌體升級檔案到您的電腦。",
                "2. 按一下<strong>瀏覽</strong>來尋找所下載的檔案並加以選取。",
                "3. 按一下<strong>升級</strong>。"]
} ,{                      
                           type: "paragraph",
                           content: "升級程序需要幾分鐘的時間來完成，範圍擴展器會在完成程序時自動重新開機。"
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"備份",
               CONTENT: [{
                           type: "paragraph",
                           content: "高度建議您備份目前的設定，以便在需要執行復原作業時，用於將系統還原至備份時的狀態；或者當您將擴展器還原至出廠預設值後，目前所有設定都會被清除，也可以此方式將系統還原至備份時的狀態。"
                       } ,{                      
                           type: "paragraph",
                           content: "按一下「備份」，可將目前的設定儲存成 config.bin 檔案並存在您的電腦上。請確定將檔案儲存在安全位置，以便在需要時可以擷取。 "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"還原",
               CONTENT: [{
                           type: "step",
                           title: "從備份檔案還原所儲存的設定：",
       content: [ 
                "1. 按一下「瀏覽」來尋找您的備份檔案。",
                "2. 選取您的備份檔案。",
                "3. 按一下「還原」。",
                "4. 按一下<strong>「是」</strong>確認執行系統還原。",
                "還原程序需要幾分鐘的時間來完成，範圍擴展器會在完成程序時自動重新開機。"]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"還原出廠預設值",
               CONTENT: [{
                           type: "paragraph",
                           content: "按一下「還原出廠預設值」可將範圍擴展器重設為出廠預設設定。"
                       } ,{                      
                           type: "note",
                            title: "備註",
						   content: [ 
									"1. 還原出廠預設值會刪除您的擴展器原先設定。若要重新登入擴展器的管理頁面，請使用預設的使用者名稱與密碼（皆為「admin」）。",
									"1. 原廠還原將會清除擴展器之前所有的設定。請為往後的登入流程創建密碼。",
									"2. 擴展器備份或還原過程時請勿中斷電源。"]
					}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"管理員帳戶",
               CONTENT: [{
                           type: "paragraph",
                           content: "這個頁面可用於變更您的預設登入使用者名稱、密碼。"
                       } ,{                      
                           type: "paragraph",
                           content: "在此頁面，您可以變更您的登入密碼。"
                       } ,{                      
                           type: "name",
                           title: "舊使用者名稱",
                           content: "輸入目前的使用者名稱。"
                       } ,{                      
                           type: "name",
                           title: "舊密碼",
                           content: "輸入目前的密碼。"
                       } ,{                      
                           type: "name",
                           title: "新使用者名稱 ",
                           content: "輸入新的使用者名稱。"
                       } ,{                      
                           type: "name",
                           title: "新密碼",
                           content: "輸入新密碼。"
                       } ,{                      
                           type: "name",
                           title: "確認密碼",
                           content: "再次輸入新密碼。"
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"系統日誌",
               CONTENT: [{
                           type: "paragraph",
                           content: "「系統日誌」頁面會顯示訊號擴展器的最近活動 (事件) 清單。您可以定義所要檢視的日誌類型、日誌層級。"
                       } ,{                      
                           type: "name",
                           title: "類型",
                           content: "選取您要檢視的日誌類型。"
                       } ,{                      
                           type: "name",
                           title: "層級",
                           content: "選取您要檢視的日誌層級。"
                       } ,{                      
                           type: "name",
                           title: "重新整理",
                           content: "按一下這個按鈕可更新系統日誌。"
                       } ,{                      
                           type: "name",
                           title: "全部刪除",
                           content: "按一下這個按鈕可永久移除所有日誌。"
                       } ,{                      
                           type: "name",
                           title: "儲存日誌",
                           content: "按一下這個按鈕可將系統日誌存成 .txt 檔案。"
                       }]
}
    };
})(jQuery);
