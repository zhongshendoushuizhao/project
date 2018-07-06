(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"지역 설정",
               CONTENT: [{
                           type: "name",
                           title: "지역",
                           content: "드롭다운 메뉴에서 지역을 선택하십시오. 국가 또는 지역이 목록에 없는 경우, 사용자의 위치에서 무선 라디오를 사용하는 것이 제한될 수 있습니다."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"상태",
               CONTENT: [{
                           type: "paragraph",
                           content: "기본 상태 페이지는 대시보드에 현재 네트워크 상태 및 정보를 표시합니다. 더 자세한 정보를 보려면 각 아이콘을 클릭합니다. "
                       } ,{                      
                           type: "title",
                            title: "익스텐더"
                       } ,{                      
                           type: "paragraph",
                           content: "확장된 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 네트워크 정보를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "확장된 네트워크 이름(SSID)입니다."
                       } ,{                      
                           type: "name",
                           title: "채널",
                           content: "현재 사용 중인 무선 채널입니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "익스텐더의 물리적 MAC 주소입니다."
                       } ,{                      
                           type: "name",
                           title: "DHCP 서버",
                           content: "DHCP 서버의 상태를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "IP 주소",
                           content: "DHCP 서버로부터 클라이언트에 할당된 IP 주소입니다."
                       } ,{                      
                           type: "name",
                           title: "유형",
                           content: "DHCP 서버에 의해 할당된 IP 주소의 유형입니다."
                       } ,{                      
                           type: "title",
                            title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> 호스트 네트워크"
                       } ,{                      
                           type: "paragraph",
                           content: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> 호스트 네트워크의 다음 정보를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "호스트 네트워크 SSID입니다."
                       } ,{                      
                           type: "name",
                           title: "신호",
                           content: "호스트 네트워크의 신호 강도입니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "호스트 네트워크의 물리적 MAC 주소입니다."
                       } ,{                      
                           type: "title",
                            title: "클라이언트"
                       } ,{                      
                           type: "paragraph",
                           content: "익스텐더 2.4GHz<span class=\"hidden_5g\">/5GHz</span>에 연결된 현재 클라이언트 장치를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "유형",
                           content: "클라이언트 장치가 연결하는 확장된 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 네트워크입니다."
                       } ,{                      
                           type: "name",
                           title: "장치명",
                           content: "연결된 클라이언트 장치의 이름입니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "연결된 클라이언트 장치의 물리적 MAC 주소입니다."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"상태",
               CONTENT: [{
                           type: "paragraph",
                           content: "상태 페이지는 대시보드에 현재 네트워크 상태 및 정보를 표시합니다. 더 자세한 정보를 보려면 각 아이콘을 클릭합니다."
                       } ,{                      
                           type: "title",
                            title: "인터넷"
                       } ,{                      
                           type: "name",
                           title: "인터넷 상태",
                           content: "장치의 인터넷 연결의 현재 상태를 표시합니다."
                       } ,{                      
                           type: "title",
                            title: "액세스 포인트"
                       } ,{                      
                           type: "name",
                           title: "DHCP 서버",
                           content: "DHCP 서버의 상태를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "IP 주소",
                           content: "DHCP 서버에 의해 액세스 포인트에 할당된 IP 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "유형",
                           content: "액세스 포인트가 IP 주소를 얻는 유형을 표시합니다."
                       } ,{                      
                           type: "title",
                            title: "무선 클라이언트"
                       } ,{                      
                           type: "name",
                           title: "이름",
                           content: "클라이언트 장치의 이름을 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "IP 주소",
                           content: "클라이언트 장치에 할당된 IP 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "클라이언트 장치의 물리적인 MAC 주소를 표시합니다."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"설정",
               CONTENT: [{
                           type: "name",
                           title: "지역",
                           content: "드롭다운 메뉴에서 지역을 선택하십시오. 국가 또는 지역이 목록에 없는 경우, 사용자의 위치에서 무선 라디오를 사용하는 것이 제한될 수 있습니다."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"무선 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "무선 라디오 사용",
                           content: "이 확인란을 선택하여 2.4GHz의 무선 라디오 주파수를 사용합니다."
                       } ,{                      
                           type: "name",
                           title: "무선 네트워크 이름 (SSID)",
                           content: "기본 네트워크 이름(SSID)을 그대로 사용하거나, 새 이름(최대 32자)을 입력할 수 있습니다. 이 필드는 대/소문자를 구분합니다."
                       } ,{                      
                           type: "name",
                           title: "SSID 숨기기",
                           content: "Wi-Fi 네트워크 목록에서 2.4GHz의 네트워크 이름 (SSID)을 숨기려는 경우 이 확인란을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "보안  ",
                           content: "다음 보안 옵션 중 하나를 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "보안 없음",
                           content: "이 옵션을 선택하여 무선 보안 기능을 사용하지 않습니다. 무선 보안을 사용하여 무단 접속으로부터 무선 네트워크를 보호할 것을 권장합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-개인",
                           content: "PSK(미리 공유한 키) 또는 암호를 기반으로 한 표준 인증 방법을 사용하려면 이 옵션을 선택합니다. 이 옵션을 권장합니다. 선택한 경우 다음을 구성합니다.",
       children: [{                      
                           type: "name",
                           title: "버전",
                           content: "무선 네트워크에 대한 보안 버전을 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "자동 ",
                           content: "이 옵션은 WPA 및 WPA2와 같은 다양한 WPA의 표준 (Wi-Fi Protected Access)의 구현을 지원합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "이 옵션은 높은 수준의 보안을 제공하는 TKIP 암호화만을 지원합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "이 옵션은 권장 사항으로 WPA-PSK보다 더 높은 수준의 보안인 AES암호화를 지원합니다."
                       }]
} ,{                      
                           type: "name",
                           title: "암호화",
                           content: "보안 암호화 유형을 선택합니다. TKIP (임시 키 통합 프로토콜), AES (고급 암호화 표준) 또는 자동 (TKIP 및 AES 모두). 802.11n 사양은 TKIP를 지원하지 않기 때문에 익스텐더가 802.11n 모드에서 작동하는 경우 TKIP 암호화를 사용하지 않을 것을 권장합니다. TKIP가 선택된 경우, WPS 기능은 사용되지 않습니다."
                       } ,{                      
                           type: "name",
                           title: "비밀번호  ",
                           content: "8에서 63자 사이의 ASCII 문자 또는 8에서 64자 사이의 16진수 문자로 무선 암호를 이 필드에 입력합니다."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "클라이언트 장치 중에 WEP(Wired Equivalent Privacy)를 사용하여야만 무선으로 액세스할 수 있는 경우 이 옵션을 선택하여 기본 인증 방법을 사용하십시오.",
       children: [{                      
                           type: "name",
                           title: "유형",
                           content: "무선 네트워크에 대한 인증 유형을 선택합니다. 기본값은 무선으로 클라이언트의 기능 및 접속 요청에 따라서 자동으로 개방형 시스템 또는 공유 키를 선택하는 자동입니다."
                       } ,{                      
                           type: "name",
                           title: "WEP 키 형식",
                           content: "ASCII 형식을 사용하거나 16진수를 선택합니다. ASCII 형식은 알파벳과 숫자의 조합입니다. 16진수 숫자 (0-9) 및 문자 (A-F, a-f)의 조합입니다."
                       } ,{                      
                           type: "name",
                           title: "키 유형",
                           content: "WEP 키 길이를 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "64비트",
                           content: "WEP 값 필드에 16진수 (0-9, AF, AF) 10자리 또는 ASCII 문자 5자를 입력할 수 있습니다."
                       } ,{                      
                           type: "name",
                           title: "128비트",
                           content: "WEP 값 필드에 16진수 (0-9, AF, AF) 26자리 또는 ASCII 문자 13자를 입력 할 수 있습니다."
                       }]
} ,{                      
                           type: "name",
                           title: "키 값",
                           content: "해당 필드에 WEP 키를 입력합니다."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "모드",
                           content: "전송 혼합 모드를 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "채널 폭",
                           content: "2.4GHz의 무선 네트워크의 채널 폭 (대역폭)을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "채널",
                           content: "2.4GHz의 무선 네트워크의 운영 채널을 선택합니다. 간헐적 무선 연결 문제가 발생하지 않을 경우, 채널 설정을 자동으로 설정할 것을 권장합니다."
                       } /*,{                      
                           type: "name",
                           title: "전력 전송",
                           content: "높음, 중간, 또는 낮음을 선택하여 데이터 전송 강도를 지정합니다. 기본 및 권장 설정은 높음입니다."
                       } */,{                      
                           type: "paragraph",
                           content: "[저장]을 클릭하여 설정을 저장합니다."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"무선 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "무선 라디오 사용",
                           content: "이 확인란을 선택하여 5GHz의 무선 라디오 주파수를 사용합니다."
                       } ,{                      
                           type: "name",
                           title: "무선 네트워크 이름 (SSID)",
                           content: "기본 네트워크 이름(SSID)을 그대로 사용하거나, 새 이름(최대 32 자)을 입력할 수 있습니다. 이 필드는 대/소문자를 구분합니다."
                       } ,{                      
                           type: "name",
                           title: "SSID 숨기기",
                           content: "Wi-Fi 네트워크 목록에서 5GHz의 네트워크 이름 (SSID)을 숨기려는 경우 이 확인란을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "보안  ",
                           content: "다음 보안 옵션 중 하나를 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "보안 없음",
                           content: "이 옵션을 선택하여 무선 보안 기능을 사용하지 않습니다. 무선 보안을 사용하여 무단 접속으로부터 무선 네트워크를 보호할 것을 권장합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-개인",
                           content: "PSK(미리 공유한 키) 또는 암호를 기반으로 한 표준 인증 방법을 사용하려면 이 옵션을 선택합니다. 이 옵션을 권장합니다. 선택한 경우 다음을 구성합니다.",
       children: [{                      
                           type: "name",
                           title: "버전",
                           content: "무선 네트워크에 대한 보안 버전을 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "자동 ",
                           content: "이 옵션은 WPA 및 WPA2와 같은 다양한 WPA의 표준 (Wi-Fi Protected Access)의 구현을 지원합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "이 옵션은 높은 수준의 보안을 제공하는 TKIP 암호화만을 지원합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "이 옵션은 권장 사항으로 WPA-PSK보다 더 높은 수준의 보안인 AES암호화를 지원합니다."
                       }]
} ,{                      
                           type: "name",
                           title: "암호화",
                           content: "보안 암호화 유형을 선택합니다. TKIP (임시 키 통합 프로토콜), AES (고급 암호화 표준) 또는 자동 (TKIP 및 AES 모두). 802.11n 사양은 TKIP를 지원하지 않기 때문에 익스텐더가 802.11n 모드에서 작동하는 경우 TKIP 암호화를 사용하지 않을 것을 권장합니다. TKIP가 선택된 경우, WPS 기능은 사용되지 않습니다."
                       } ,{                      
                           type: "name",
                           title: "비밀번호  ",
                           content: "8에서 63자 사이의 ASCII 문자 또는 8에서 64자 사이의 16진수 문자로 무선 암호를 이 필드에 입력합니다."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "클라이언트 장치 중에 WEP(Wired Equivalent Privacy)를 사용하여야만 무선으로 액세스할 수 있는 경우 이 옵션을 선택하여 기본 인증 방법을 사용하십시오.",
       children: [{                      
                           type: "name",
                           title: "유형",
                           content: "무선 네트워크에 대한 인증 유형을 선택합니다. 기본값은 무선으로 클라이언트의 기능 및 접속 요청에 따라서 자동으로 개방형 시스템 또는 공유 키를 선택하는 [자동]입니다."
                       } ,{                      
                           type: "name",
                           title: "WEP 키 형식",
                           content: "ASCII 형식을 사용하거나 16진수를 선택합니다. ASCII 형식은 알파벳과 숫자의 조합입니다. 16진수 숫자 (0-9) 및 문자 (A-F, a-f)의 조합입니다."
                       } ,{                      
                           type: "name",
                           title: "키 유형",
                           content: "WEP 키 길이를 선택합니다.",
       children: [{                      
                           type: "name",
                           title: "64비트",
                           content: "WEP 값 필드에 16진수 (0-9, AF, AF) 10자리 또는 ASCII 문자 5자를 입력할 수 있습니다."
                       } ,{                      
                           type: "name",
                           title: "128비트",
                           content: "WEP 값 필드에 16진수 (0-9, AF, AF) 26자리 또는 ASCII 문자 13자를 입력 할 수 있습니다."
                       }]
} ,{                      
                           type: "name",
                           title: "키 값",
                           content: "해당 필드에 WEP 키를 입력합니다."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "모드",
                           content: "전송 혼합 모드를 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "채널 폭",
                           content: "5GHz의 무선 네트워크의 채널 폭(대역폭)을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "채널",
                           content: "5GHz의 무선 네트워크의 운영 채널을 선택합니다. 간헐적 무선 연결 문제가 발생하지 않을 경우, 채널 설정을 자동으로 설정할 것을 권장합니다."
                       }/* ,{                      
                           type: "name",
                           title: "전력 전송",
                           content: "높음, 중간, 또는 낮음을 선택하여 데이터 전송 강도를 지정합니다. 기본 및 권장 설정은 높음입니다."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "[저장]을 클릭하여 설정을 저장합니다."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "WPS 사용",
                           content: "다른 장치는 AP의 PIN 번호와 WPS기능으로 액세스 포인트(AP)에 연결할 수 있습니다."
                       }]
},
       WPS :{ 
               TITLE:"AP의 PIN",
               CONTENT: [{
                           type: "name",
                           title: "AP의 PIN",
                           content: "무선 장치가 AP의 PIN(개인 식별 번호) 번호를 사용하여 AP에 연결할 수 있도록 켬으로 토글합니다."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "AP의 PIN 번호를 표시합니다. 기본 PIN 번호는 AP의 라벨에서 찾을 수 있습니다. [생성]을 클릭하여 무작위로 새 PIN 번호를 생성하거나 [기본값]을 클릭하여 현재 PIN 번호를 공장 출하 기본 PIN 번호로 복원합니다."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS 마법사",
               CONTENT: [{
                           type: "name",
                           title: "버튼을 누르세요 (권장)",
                           content: "WPS 버튼을 사용하거나 가상 연결 버튼을 사용하여 쉽게 모든 WPS 지원 장치를 무선 네트워크에 연결하는 기능을 사용하려면 이 연결 방법을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "이 연결 방식을 선택하여 이 필드에 무선 장치의 WPS PIN 번호를 입력하여 수동으로 장치를 추가하고 [연결]을 클릭합니다."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"호스트 네트워크에 연결",
               CONTENT: [{
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> 네트워크에 연결",
                           content: "익스텐더를 기존의 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 네트워크에 연결하기를 사용하거나 사용하지 않습니다."
                       } ,{                      
                           type: "name",
                           title: "무선 스캐너",
                           content: "이 버튼을 클릭하여 범위 내 연결 가능한 모든 Wi-Fi 네트워크를 스캔하고 표시합니다. 네트워크가 선택되면, 해당 네트워크의 SSID 및 보안 설정이 자동으로 채워집니다."
                       } ,{                      
                           type: "name",
                           title: "호스트 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "익스텐더가 연결될 호스트 네트워크의 SSID를 대/소문자를 구분하여 입력하거나 <strong>무선 스캐너</strong>를 클릭하고 Wi-Fi 네트워크를 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "호스트 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 보안",
                           content: "호스트 네트워크와 일치하는 보안 옵션을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "보안 없음",
                           content: "이 옵션은 무선 보안 기능을 사용하지 않습니다. "
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "이 옵션은 높은 수준의 보안을 제공하는 TKIP(임시 키 통합 프로토콜) 형식만 지원합니다 "
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "이 옵션은 WPA-PSK보다 더 높은 보안 수준을 제공하는 AES (고급 암호화) 암호화를 지원합니다. 이 옵션을 권장합니다."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "이 옵션은 WPA 및 WPA2와 같은 다양한 WPA의 표준 (Wi-Fi Protected Access)의 구현을 지원합니다."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "이 옵션은 클라이언트 장치가 무선으로 WEP(Wired Equivalent Privacy)에만 접속할 수 있는 경우에 사용할 수 있는 무선 보안의 가장 기본적인 형태입니다."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"확장된 네트워크 설정",
               CONTENT: [{
                           type: "name",
                           title: "확장된 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "익스텐더의 2.4GHz<span class=\"hidden_5g\">/5GHz</span> 무선 기능을 사용하거나 사용하지 않습니다."
                       } ,{                      
                           type: "name",
                           title: "확장된 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "<strong>호스트 SSID 복사</strong> 버튼을 사용하여 메인 라우터 또는 AP의 SSID를 자동으로 복사하거나 새 이름(최대 32자)을 입력합니다. 이 필드는 대/소문자를 구분합니다."
                       } ,{                      
                           type: "name",
                           title: "호스트 SSID 복사",
                           content: "이 버튼을 클릭하여 해당 필드에 호스트 네트워크의 SSID 및 보안 설정을 복사하고 자동으로 채웁니다."
                       } ,{                      
                           type: "name",
                           title: "SSID 브로드캐스트 숨기기",
                           content: "Wi-Fi 네트워크 목록에서 확장된 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID를 숨기려는 경우 이 확인란을 선택합니다."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"액세스 제어",
               CONTENT: [{
                           type: "paragraph",
                           content: "액세스 제어는 특정 컴퓨터 및 기타 장치가 확장된 네트워크에 액세스를 허용하거나 차단하는 데 사용됩니다. 장치가 차단되면, 더 이상 확장된 네트워크에 연결할 수 없습니다."
                       } ,{                      
                           type: "paragraph",
                           content: "접속 제어를 이용하려면 이 기능을 사용하고 블랙리스트 또는 허용 목록을 지정합니다. 접속 제어를 사용하지 않는(끔) 경우, 허용 목록에 포함된 장치를 포함한 모든 장치가 연결이 허용됩니다."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"액세스 모드",
               CONTENT: [{
                           type: "name",
                           title: "차단 목록",
                           content: "블랙리스트에 있는 장치만 네트워크에 접속할 수 없습니다."
                       } ,{                      
                           type: "name",
                           title: "허용 목록",
                           content: "허용 목록에 있는 장치만 네트워크에 접속할 수 있습니다."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"온라인 장치",
               CONTENT: [{
                           type: "name",
                           title: "장치명",
                           content: "연결된 장치의 이름을 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "IP 주소",
                           content: "연결된 장치의 IP 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "연결된 장치의 MAC 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "연결 유형",
                           content: "연결된 장치의 연결 유형을 표시합니다."
                       } ,{                      
                           type: "step",
                           title: "장치 연결 차단",
                           content: "온라인 장치 테이블에서 차단하려는 장치에 해당하는 수정 열에서 차단 아이콘을 클릭합니다."
                       } ,{                      
                           type: "step",
                           title: "여러 장치를 차단",
                           content: "온라인 장치 테이블에서 차단하려는 모든 장치를 선택하고 테이블 위의 [차단]을 클릭합니다. 장치는 자동으로 블랙리스트 또는 허용 목록에 있는 장치에 추가됩니다."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"블랙리스트/허용 목록의 장치",
               CONTENT: [{
                           type: "step",
                           title: "장치를 차단 또는 허용 목록에 넣으려면",
       content: [ 
                "1. [추가] 아이콘을 클릭합니다.",
                "2. 장치 이름을 입력합니다.",
                "3. 장치의 MAC 주소를 입력합니다.",
                "4. 효과가 적용되는 시간을 입력합니다. <b>시간 일정에 따라 액세스할 수 없음 / 시간 일정에 따라 액세스할 수 있음</b>을 선택하는 경우 시간 및 날짜를 설정하십시오.",
                "5. 확인을 클릭합니다."]
} ,{                      
                           type: "step",
                           title: "차단/허용 목록에서 장치를 수정 또는 삭제하려면",
                           content: "블랙리스트 또는 허용 목록 테이블에서 수정 도는 삭제하려는 기기에 해당하는 편집 아이콘 또는 삭제 아이콘을 클릭합니다."
                       } ,{                      
                           type: "step",
                           title: "차단/허용 목록에서 여러 장치를 삭제하려면",
                           content: "블랙리스트 및 허용 목록 테이블에서 삭제하려는 모든 장치를 선택하고 테이블 위에 [삭제]를 클릭합니다."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"이더넷",
               CONTENT: [{
                           type: "name",
                           title: "이더넷 포트에 대한 네트워크 호스트",
                           content: "유선 클라이언트에서 무선 클라이언트로 신호를 보내는 데 사용되는 호스트 네트워크의 무선 밴드(2.4GHz 또는 5GHz)를 선택합니다.<br/>이 옵션은 2.4GHz 및 5GHz 호스트 네트워크를 모두 사용할 때만 사용 가능합니다."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"네트워크 설정",
               CONTENT: [{
                           type: "name",
                           title: "자동으로 IP 주소 받기",
                           content: "익스텐더가 호스트 네트워크에서 IP 주소와 게이트웨이를 동적으로 받는 경우 이 옵션을 선택하십시오."
                       } ,{                      
                           type: "name",
                           title: "다음 IP 주소 사용",
                           content: "익스텐더의 IP 주소 및 게이트웨이를 수동으로 구성하는 경우 이 옵션을 선택하십시오."
                       } ,{                      
                           type: "name",
                           title: "IP 주소",
                           content: "IP 주소를 점으로 구분한 10진수 표기법으로 입력합니다(기본값은 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "서브넷 마스크",
                           content: "네트워크의 크기를 결정하는 서브넷 마스크를 점으로 구분한 10진수 표기법으로 입력합니다(기본값은 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "기본 게이트웨이",
                           content: "IP 주소와 동일한 서브넷에 있는 게이트웨이를 점으로 구분한 10진수 표기법으로 입력합니다. 일반적으로 라우터의 LAN IP 주소입니다."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP 서버 설정",
               CONTENT: [{
                           type: "paragraph",
                           content: "기본값으로 익스텐더는 DHCP(Dynamic Host Configuration Protocol) 서버로 설정되며 IP 주소 풀에서 LAN에 익스텐더로 연결되어있는 모든 클라이언트에 대해 TCP/IP 구성을 제공합니다."
                       } ,{                      
                           type: "name",
                           title: "DHCP 서버",
                           content: "기본값으로 [자동]이 선택되며 DHCP 서버가 자동으로 클라이언트에 유효한 IP 주소를 할당합니다. DHCP 서버를 켜거나(사용) 끌(사용 안 함) 수 있습니다. 끔을 선택한 경우, LAN 내에서 다른 DHCP 서버가 있어야 합니다. 그렇지 않은 경우, 수동으로 각 클라이언트의 IP 주소를 구성해야 합니다."
                       } ,{                      
                           type: "name",
                           title: "IP 주소 풀",
                           content: "클라이언트에게 임대할 수 있는 IP 주소의 범위를 입력합니다. 기본값으로 시작 IP 주소는 192.168.0.100이고 마지막 IP 주소는 192.168.0.199입니다. "
                       } ,{                      
                           type: "name",
                           title: "주소 임대 시간",
                           content: "IP 주소가 클라이언트에게 임대되는 지속 시간을 1에서 2880분 사이로 입력합니다. 기본값은 1분입니다."
                       } ,{                      
                           type: "name",
                           title: "기본 게이트웨이",
                           content: "<br/>익스텐더의 LAN IP 주소를 입력합니다. 기본값은 192.168.0.254입니다. (선택 사항)"
                       } ,{                      
                           type: "name",
                           title: "기본 DNS",
                           content: "ISP에서 제공하는 DNS IP 주소를 입력합니다. (선택 사항)"
                       } ,{                      
                           type: "name",
                           title: "보조 DNS",
                           content: "ISP에서 제공하는 매개 변수를 입력합니다. (선택 사항) "
                       } ,{                      
                           type: "note",
                           title: "참고",
                           content: "익스텐더의 DHCP 서버를 사용하려면, 사용자의 LAN의 모든 클라이언트가 자동으로 IP 주소를 획득하도록 구성합니다."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>저장</strong>을 클릭하여 구성을 저장합니다."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"주소 예약",
               CONTENT: [{
                           type: "paragraph",
                           content: "익스텐더에 연결된 클라이언트의 IP 주소를 수동으로 예약할 수 있습니다. 예약되면, 그 IP 주소는 DHCP 서버에 의해 같은 클라이언트에게만 할당됩니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "DHCP로 예약된 IP 주소와 함께 클라이언트의 MAC 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "예약된 IP 주소",
                           content: "클라이언트의 예약된 IP 주소를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "설명",
                           content: "클라이언트 장치의 설명을 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "상태",
                           content: "클라이언트 장치의 현재 상태(사용 또는 사용 안 함)를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "수정",
                           content: "해당 클라이언트의 수정 또는 삭제 옵션을 표시합니다."
                       } ,{                      
                           type: "step",
                           title: "IP 주소를 예약하려면",
       content: [ 
                "1. [추가]를 클릭합니다.",
                "2. 원하는 클라이언트의 MAC 주소를 입력합니다.",
                "3. 클라이언트에 대해 예약할 IP 주소를 입력합니다.",
                "4. 클라이언트에 대한 설명을 입력합니다.",
                "5. [항목을 사용]을 선택합니다.",
                "6. 확인을 클릭합니다."]
} ,{                      
                           type: "step",
                           title: "기존 클라이언트를 수정하거나 삭제하려면",
                           content: "테이블에서 수정 또는 삭제하려는 클라이언트에 해당하는 편집 아이콘 또는 삭제 아이콘을 클릭합니다."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP 클라이언트 목록",
               CONTENT: [{
                           type: "paragraph",
                           content: "익스텐더에 연결된 각 DHCP 클라이언트의 다음 정보를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "클라이언트 수",
                           content: "관련된 DHCP 클라이언트의 수를 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "클라이언트 이름",
                           content: "DHCP 클라이언트 이름입니다."
                       } ,{                      
                           type: "name",
                           title: "MAC 주소",
                           content: "DHCP 클라이언트의 MAC 주소입니다."
                       } ,{                      
                           type: "name",
                           title: "할당된 IP 주소",
                           content: "DHCP 서버로부터 클라이언트에 할당된 IP 주소입니다."
                       } ,{                      
                           type: "name",
                           title: "임대 시간",
                           content: "IP 주소가 DHCP 클라이언트에게 임대되는 시간 기간입니다."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>새로 고침</strong> - 이 버튼을 클릭하여 DHCP 클라이언트 목록을 업데이트합니다."
                       }]
},
       WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Wi-Fi 수신 범위",
               CONTENT: [{
							type:"paragraph",
                           content: "익스텐더의 Wi-Fi 수신 범위의 수준을 선택합니다."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"시간 설정",
               CONTENT: [{
                           type: "name",
                           title: "현재 시간",
                           content: "현재 시스템 시간을 표시합니다."
                       },{
                           type: "name",
                           title: "표준 시간대",
                           content: "표준 시간대를 선택합니다."
                       }]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"일광 절약 시간",
               CONTENT: [{
							type:"step",
                            title: "일광 절약 시간을 설정하려면 다음과 같이 합니다.",
							content:[
                "1. 일광 절약 시간을 선택합니다.",
                "2. 지역 표준 시간대에서 일광 절약 시간이 시작하는 정확한 <b>시작</b> 날짜 및 시간을 선택합니다.",
                "3. 지역 표준 시간대에서 일광 절약 시간이 끝나는 정확한 <b>끝</b> 날짜 및 시간을 선택합니다.",
                "4. 저장을 클릭합니다."]
                       },{
							type:"name",
                            title: "현재 상태",
							content:"현재 시간이 일광 절약 시간인지 아닌지를 표시합니다."
					   
					   }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED 제어",
               CONTENT: [{
                           type: "paragraph",
                           content: "LED 제어는 특정 시간 일정에 따라 익스텐더의 LED를 켜거나 끌 수 있습니다."
                       } ,{                      
                           type: "name",
                           title: "야간 모드",
                           content: "야간 모드를 켬(사용) 또는 끔(사용 안 함)을 표시하십시오."
                       } ,{                      
                           type: "name",
                           title: "LED 꺼짐 시간",
                           content: "시간 일정을 선택하여 LED를 끕니다."
                       }]
},
       POWER_SCHEDULE :{ 
               TITLE:"전력 일정",
               CONTENT: [{
                           type: "paragraph",
                           content: "이 기능을 사용하여 전력 절약 목적으로 시간 일정에 따라 익스텐더의 전원을 끕니다."
                       } ,{                      
                           type: "name",
                           title: "전력 일정 사용",
                           content: "이 옵션을 선택하여 전력 일정을 사용합니다."
                       } ,{                      
                           type: "name",
                           title: "전원 끄기 시간",
                           content: "시간 기간을 선택하여 익스텐더를 자동으로 끕니다."
                       } ,{                      
                           type: "name",
                           title: "요일",
                           content: "익스텐더의 전원을 끄는 요일을 선택합니다."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"펌웨어 업그레이드",
               CONTENT: [{
                           type: "name",
                           title: "펌웨어 버전",
                           content: "현재 펌웨어 버전을 표시합니다."
                       } ,{                      
                           type: "name",
                           title: "하드웨어 버전",
                           content: "현재 하드웨어 버전을 표시합니다."
                       } ,{                      
                           type: "step",
                           title: "중요: 업그레이드 실패를 방지하려면 다음 사항에 유의하십시오",
       content: [ 
                "1. 펌웨어 파일 업그레이드는 익스텐더의 현재 하드웨어 버전과 일치해야 합니다.",
                "2. 전력의 손실이 익스텐더에 손상을 줄 수도 있으므로, 전체 업그레이드 과정 중에 익스텐더의 전원을 유지하는 것이 중요합니다."]
} ,{                      
                           type: "step",
                           title: "익스텐더의 펌웨어를 업그레이드하려면:",
       content: [ 
                "1. 최신 펌웨어 업그레이드 파일을 <a class=\"link\" href=\"http://www.tp-link.co.kr/Support/\" target=\"_blank\">TP-Link 지원</a>에서 컴퓨터에 다운로드합니다.",
                "2. <strong>찾아보기</strong>를 클릭하여 다운로드한 파일을 찾아서 선택합니다.",
                "3. <strong>업그레이드</strong>를 클릭합니다."]
} ,{                      
                           type: "paragraph",
                           content: "업그레이드를 완료하는 데 몇 분 정도 소요되며 완료되면 익스텐더가 자동으로 다시 시작됩니다."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"백업",
               CONTENT: [{
                           type: "paragraph",
                           content: "시스템을 이전 상태 또는 공장 기본 설정으로 복원하기 위해 복구가 필요한 경우를 위해 현재 구성을 백업할 것을 권장합니다."
                       } ,{                      
                           type: "paragraph",
                           content: "[백업]을 클릭하여 현재 설정을 컴퓨터에 config.bin 파일로 저장합니다. 필요로 할 때 사용할 수 있는 안전한 위치에 저장 하십시오. "
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"복원",
               CONTENT: [{
                           type: "step",
                           title: "백업 파일에서 저장된 설정을 복원하려면 :",
       content: [ 
                "1. [찾기]를 클릭하여 백업 파일을 찾습니다.",
                "2. 백업 파일을 선택합니다.",
                "3. [복원]을 클릭합니다.",
                "4. <strong>예</strong>를 클릭하여 시스템 복원을 확인합니다.",
                "복원 프로세스를 완료하는 데 몇 분 정도 걸릴 수 있으며, 완료되면 익스텐더가 자동으로 다시 시작됩니다."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"공장 기본값 설정 복원",
               CONTENT: [{
                           type: "paragraph",
                           content: "[공장 설정 복원]을 클릭하여 익스텐더를 공장 출고시 기본 설정으로 재설정합니다."
                       } ,{                      
                           type: "note",
                            title: "참고",
							content: [
								"1. 공장 복원을 하게되면 확장을 위해 구성한 모든 설정이 지워집니다. 익스텐더의 관리 페이지에 다시 로그인하려면 사용자 이름과 비밀번호를 모두 기본 admin을 사용하십시오.",
								"1. 공장 복원을 선택하면 기존 익스텐더의 모든 설정이 삭제됩니다. 향후 로그인을 위하여 비밀번호를 생성하십시오. ",
								"2. 백업하는 동안 범위 익스텐더의 전원을 끄거나 프로세스를 복원하지 마십시오."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"관리자 계정",
               CONTENT: [{
                           type: "paragraph",
                           content: "이 페이지에서 기본 로그인 사용자 이름 및 비밀번호를 변경할 수 있습니다."
                       } ,{                      
                           type: "paragraph",
                           content: "이 페이지에서 로그인 비밀번호를 변경할 수 있습니다. "
                       } ,{                      
                           type: "name",
                           title: "이전 사용자 이름",
                           content: "현재 사용자 이름을 입력합니다."
                       } ,{                      
                           type: "name",
                           title: "이전 비밀번호",
                           content: "현재 비밀번호를 입력합니다."
                       } ,{                      
                           type: "name",
                           title: "새 사용자 이름",
                           content: "새 사용자 이름을 입력합니다."
                       } ,{                      
                           type: "name",
                           title: "새 비밀번호",
                           content: "새 비밀번호를 입력합니다."
                       } ,{                      
                           type: "name",
                           title: "비밀번호 확인",
                           content: "새 비밀번호를 다시 입력합니다."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"시스템 로그",
               CONTENT: [{
                           type: "paragraph",
                           content: "시스템 로그 페이지에 익스텐더의 가장 최근의 활동 (이벤트)의 목록을 표시합니다. 보려는 로그의 유형 및/또는 로그의 수준을 정의할 수 있습니다."
                       } ,{                      
                           type: "name",
                           title: "유형",
                           content: "보려는 로그 유형을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "수준",
                           content: "보려는 로그 수준을 선택합니다."
                       } ,{                      
                           type: "name",
                           title: "새로 고침",
                           content: "이 버튼을 클릭하여 시스템 로그를 업데이트합니다."
                       } ,{                      
                           type: "name",
                           title: "모두 삭제",
                           content: "이 버튼을 클릭하여 영구적으로 모든 로그를 제거합니다."
                       } ,{                      
                           type: "name",
                           title: "로그 저장",
                           content: "이 버튼을 클릭하여 시스템 로그를 .txt 파일로 저장합니다."
                       }]
},
    });
})(jQuery);
