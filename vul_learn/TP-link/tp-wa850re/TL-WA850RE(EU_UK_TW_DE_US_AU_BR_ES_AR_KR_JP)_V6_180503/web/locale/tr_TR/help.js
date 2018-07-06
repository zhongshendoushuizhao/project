(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Bölge Ayarları",
               CONTENT: [{
                           type: "name",
                           title: "Bölge",
                           content: "Açılan menüden bölgenizi seçin. Eğer ülkeniz veya bölgeniz listede yoksa, bölgenizde kablosuz yayının kullanımı kısıtlanmış olabilir."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Durum",
               CONTENT: [{
                           type: "paragraph",
                           content: "Temel Durum sayfası mevcut ağ durumunuz ve bilgilerinizi cihaz tablosu ile gösterir. Daha fazla ayrıntı için her simgeleri tıklayabilirsinzi."
                       } ,{                      
                           type: "title",
                            title: "Menzil Genişletici"
                       } ,{                      
                           type: "paragraph",
                           content: "Genişletilmiş 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ağ bilgisini gösterir."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Genişletilmiş ağ adı (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Kablosuz kanal şu anda kullanımda."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "Menzil genişleticinin fiziksel adresi."
                       } ,{                      
                           type: "name",
                           title: "DHCP Sunucusu",
                           content: "DHCP sunucusunun durumunu gösterir. "
                       } ,{                      
                           type: "name",
                           title: "IP Adresi",
                           content: "DHCP sunucusu tarafından istemciye atanan IP adresi."
                       } ,{                      
                           type: "name",
                           title: "Tür",
                           content: "DHCP sunucusu tarafından atanan IP adresi türü."
                       } ,{                      
                           type: "title",
                            title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> Host Ağı"
                       } ,{                      
                           type: "paragraph",
                           content: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> host ağının belirtilen bilgilerini gösterir."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Host ağı SSID."
                       } ,{                      
                           type: "name",
                           title: "Sinyal",
                           content: "Host ağının sinyal gücü."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "Host ağının fiziksel MAC adresi."
                       } ,{                      
                           type: "title",
                            title: "İstemciler"
                       } ,{                      
                           type: "paragraph",
                           content: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> genişleticisine bağlı olan mevcut istemci cihazlarını gösterir."
                       } ,{                      
                           type: "name",
                           title: "Tür",
                           content: "İstemci cihazının bağlı olduğu genişletilmiş 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ağı."
                       } ,{                      
                           type: "name",
                           title: "Cihaz Adı",
                           content: "Bağlı olan istemci cihazının adı."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "Bağlı olan istemci cihazının fiziksel MAC adresi."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Durum",
               CONTENT: [{
                           type: "paragraph",
                           content: "Durum sayfasında, mevcut ağ bilgisi ve durumu ile ilgili bir gösterge tablosu görüntülenir. Daha fazla detaylı bilgi almak için her bir simgeye tıklayabilirsiniz."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Internet Durum",
                           content: "Cihazdaki Internet bağlantısının güncel durumu görüntülenir."
                       } ,{                      
                           type: "title",
                            title: "Access Point"
                       } ,{                      
                           type: "name",
                           title: "DHCP Sunucu",
                           content: "DHCP sunucusunun durumu görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "IP Adresi",
                           content: "DHCP sunucusu tarafından access point için tahsis edilen IP adresi görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Tür",
                           content: "Erişim noktasının IP adresi türünü alma şekli görüntülenir."
                       } ,{                      
                           type: "title",
                            title: "Kablosuz Alıcılar"
                       } ,{                      
                           type: "name",
                           title: "Ad",
                           content: "İstemci cihazların adı görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "IP Adresi",
                           content: "İstemci cihazlar için tahsis edilmiş IP adresi görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "İstemci cihazların fiziksel MAC adresi görüntülenir."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Ayarlar",
               CONTENT: [{
                           type: "name",
                           title: "Bölge",
                           content: "Açılan menüden bölgenizi seçin. Eğer ülkeniz veya bölgeniz listede yoksa, bölgenizde kablosuz yayının kullanımı kısıtlanmış olabilir."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Kablosuz 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Kablosuz Radyoyu Etkinleştir",
                           content: "2.4GHz kablosuz yayın frekansını etkinleştirmek için bu işaret kutucuğunu seçin."
                       } ,{                      
                           type: "name",
                           title: "Kablosuz Ağ Adı(SSID)",
                           content: "Varsayılan Ağ Adını (SSID) olduğu gibi bırakabilir veya yeni bir ad girebilirsiniz (32 karaktere kadar). Bu alan büyük-küçük harf duyarlıdır."
                       } ,{                      
                           type: "name",
                           title: "SSID'yi Gizle",
                           content: "2.4GHz ağ adını (SSID) Wi-Fi ağ listesinden gizlemek istiyorsanız, bu işaret kutucuğunu seçin."
                       } ,{                      
                           type: "name",
                           title: "Güvenlik",
                           content: "Belirtilen güvenlik seçeneklerinden birini seçin:",
       children: [{                      
                           type: "name",
                           title: "Güvenlik Yok",
                           content: "Kablosuz güvenliği devre dışı bırakmak için bu seçeneği seçin. Kablosuz ağınızı yetkisiz erişimlerden korumak için kablosuz güvenliğini etkinleştirmeniz önerilir."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Kişisel",
                           content: "Ön Paylaşımlı Anahtar (PSK), ayrıca parola olarak adlandırılan standart kimlik doğrulama metodunu etkinleştirmek için bu seçeneği seçin. Önerilen seçenektir. Eğer seçilirse, belirtilenleri yapılandırın.",
       children: [{                      
                           type: "name",
                           title: "Sürüm",
                           content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
       children: [{                      
                           type: "name",
                           title: "Otomatik",
                           content: "Bu seçenek WPA'nın  (Wi-Fi Protected Access) WPA ve WPA2 gibi çoklu uygulamalarını destekler."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Bu seçenek sadece iyi seviyede güvenlik sağlayan TKIP şifrelemeyi destekler."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Bu seçenek WPA-PSK'dan daha iyi güvenlik seviyesi sağlayan AES şifrelemeyi destekler ve önerilir."
                       }]
} ,{                      
                           type: "name",
                           title: "Şifreleme",
                           content: "Bir güvenlik şifreleme türü seçin: TKIP (Geçici Anahtar Bütünlüğü Protokolü), AES (Gelişmiş Şifreleme Standardı) veya Oto (hem TKIP hem de AES için). Genişletici eğer 802.11n modunda çalışıyorsa, TKIP şifreleme kullanılması önerilmemektedir, çünkü 802.11n modu TKIP desteklememektedir. Eğer TKIP seçerseniz, WPS fonksiyonu devre dışı olacaktır."
                       } ,{                      
                           type: "name",
                           title: "Şifre",
                           content: "Bu alana 8 ila 63 arasında ASCII karakter veya 8 ila 64 arasında onaltılık karakterden oluşan bir kablosuz şifresi giriniz."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Eğer herhangi istemci cihazınız sadece WEP kullanan kablosuza bağlanabiliyorsa temel kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin.",
       children: [{                      
                           type: "name",
                           title: "Tür",
                           content: "Kablosuz ağınız için kimlik doğrulama türü seçin. Varsayılan otomatik seçeneğidir. Bu seçenek, kablosuz istemcinin kapasitesine ve taleplerine dayanan Açık Sistem veya Paylaşılan Anahtar'ı otomatik olarak seçer."
                       } ,{                      
                           type: "name",
                           title: "WEP Anahtar Biçimi",
                           content: "ASCII formatını kullanın veya Onaltılık formatını seçin. ASCII formatı alfabetik ve sayısal karakterlerin birleşimidir. Onaltılık format rakamların (0-9) ve harflerin (A-F, a-f) birleşimidir."
                       } ,{                      
                           type: "name",
                           title: "Anahtar Türü",
                           content: "Bir WEP anahtarı uzunluğu seçin.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "WEP değeri alanına 10 tane onaltılık formatta (0-9, A-F, a-f) hane veya 5 ASCII karakteri girmenize olanak sağlar."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "WEP değeri alanına 26 tane onaltılık formatta (0-9, A-F, a-f) hane veya 13 ASCII karakteri girmenize olanak sağlar."
                       }]
} ,{                      
                           type: "name",
                           title: "Anahtar Değeri",
                           content: "İlgili alana WEP anahtarı girin."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mod",
                           content: "Bir iletim karma modu seçin."
                       } ,{                      
                           type: "name",
                           title: "Kanal Genişliği",
                           content: "2.4GHz kablosuz ağı için bir kanal genişliği seçin."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "2.4GHz kablosuz ağı için bir çalışma kanalı seçin. Eğer kablosuz bağlantınızda kesintiler yoksa, bu kanalı otomatik olarak bırakmanız önerilir."
                       } /*,{                      
                           type: "name",
                           title: "Verici Gücü",
                           content: "Veri iletim gücünü belirlemek için Yüksek, Orta veya Düşük seçeneklerinden birini seçin. Varsayılan ve önerilen ayar yüksek seçeneğidir."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Tüm ayarlarınızı kaydetmek için Kaydet düğmesine tıklayın."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Kablosuz 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Kablosuz Radyoyu Etkinleştir",
                           content: "5GHz kablosuz yayın frekansını etkinleştirmek için bu işaret kutucuğunu seçin."
                       } ,{                      
                           type: "name",
                           title: "Kablosuz Ağ Adı(SSID)",
                           content: "Varsayılan Ağ Adını (SSID) olduğu gibi bırakabilirsiniz veya yeni bir ad girebilirsiniz (32 karaktere kadar). Bu alan büyük-küçük harf duyarlıdır."
                       } ,{                      
                           type: "name",
                           title: "SSID'yi Gizle",
                           content: "5GHz ağ adını (SSID) Wi-Fi ağ listesinden gizlemek istiyorsanız, bu işaret kutucuğunu seçin."
                       } ,{                      
                           type: "name",
                           title: "Güvenlik",
                           content: "Belirtilen güvenlik seçeneklerinden birini seçin:",
       children: [{                      
                           type: "name",
                           title: "Güvenlik Yok",
                           content: "Kablosuz güvenliği devre dışı bırakmak için bu seçeneği seçin. Kablosuz ağınızı yetkisiz erişimlerden korumak için kablosuz güvenliğini etkinleştirmeniz önerilir."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Kişisel",
                           content: "Ön paylaşımlı anahtar (PSK), ayrıca parola olarak adlandırılan standart kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin. Önerilen seçenektir. Eğer seçilirse, belirtilenleri yapılandırın.",
       children: [{                      
                           type: "name",
                           title: "Sürüm",
                           content: "Kablosuz ağınız için bir güvenlik sürümü seçin.",
       children: [{                      
                           type: "name",
                           title: "Otomatik",
                           content: "Bu seçenek WPA'nın (Wi-Fi Protected Access) WPA ve WPA2 gibi çoklu uygulamalarını destekler."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Bu seçenek sadece  TKIP şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Bu seçenek WPA-PSK'dan daha iyi güvenlik seviyesi sağlayan AES şifrelemeyi destekler ve önerilir."
                       }]
} ,{                      
                           type: "name",
                           title: "Şifreleme",
                           content: "Bir güvenlik şifreleme türü seçin: TKIP (Geçici Anahtar Bütünlüğü Protokolü), AES (Gelişmiş Şifreleme Standardı) veya Oto (hem TKIP hem de AES için). Genişletici eğer 802.11n modunda çalışıyorsa, TKIP şifreleme kullanılması önerilmemektedir, çünkü 802.11n modu TKIP desteklememektedir. Eğer TKIP seçerseniz, WPS fonksiyonu devre dışı olacaktır."
                       } ,{                      
                           type: "name",
                           title: "Şifre",
                           content: "Bu alana 8 ila 63 arasında ASCII karakter veya 8 ila 64 arasında onaltılık karakterden oluşan bir kablosuz şifresi giriniz."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Eğer herhangi istemci cihazınız sadece WEP kullanan kablosuza bağlanabiliyorsa temel kimlik doğrulama yöntemini etkinleştirmek için bu seçeneği seçin.",
       children: [{                      
                           type: "name",
                           title: "Tür",
                           content: "Kablosuz ağınız için bir kimlik doğrulama türü seçin. Varsayılan otomatik seçeneğidir. Bu seçenek, kablosuz istemcinin kapasitesine ve taleplerine dayanan Açık Sistem veya Paylaşılan Anahtar'ı otomatik olarak seçer."
                       } ,{                      
                           type: "name",
                           title: "WEP Anahtar Biçimi",
                           content: "ASCII formatını kullanın veya Onaltılık formatını seçin. ASCII formatı alfabetik ve sayısal karakterlerin birleşimidir. Onaltılık format rakamların (0-9) ve harflerin (A-F, a-f) birleşimidir."
                       } ,{                      
                           type: "name",
                           title: "Anahtar Türü",
                           content: "Bir WEP anahtarı uzunluğunu seçin.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "WEP değeri alanına 10 tane onaltılık formatta (0-9, A-F, a-f) hane veya 5 ASCII karakteri girmenize olanak sağlar."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "WEP değeri alanına 26 tane onaltılık formatta (0-9, A-F, a-f) hane veya 13 ASCII karakteri girmenize olanak sağlar."
                       }]
} ,{                      
                           type: "name",
                           title: "Anahtar Değeri",
                           content: "İlgili alana WEP anahtarı girin."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Mod",
                           content: "Bir iletim karma modu seçin."
                       } ,{                      
                           type: "name",
                           title: "Kanal Genişliği",
                           content: "5GHz kablosuz ağı için bir kanal genişliği seçin."
                       } ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "5GHz kablosuz ağı için bir işletim kanalı seçin. Eğer kablosuz bağlantınızda kesintiler yoksa, bu kanalı otomatik olarak bırakmanız önerilir."
                       } /*,{                      
                           type: "name",
                           title: "Verici Gücü",
                           content: "Veri iletim gücünü belirlemek için Yüksek, Orta veya Düşük seçeneklerinden birini seçin. Varsayılan ve önerilen ayar yüksek seçeneğidir."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Tüm ayarlarınızı kaydetmek için Kaydet düğmesine tıklayın."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "WPS Etkinleştir",
                           content: "Diğer cihazlar, AP'nin PIN numarası ile WPS üzerinden erişim noktasına (AP) bağlanabilir."
                       }]
},
       WPS :{ 
               TITLE:"AP'nin PIN",
               CONTENT: [{
                           type: "name",
                           title: "AP'nin PIN",
                           content: "AP'nin PIN (Kişisel Kimlik Numarası) kullanarak kablosuz cihazlarınızı AP'ye bağlamak için Anahtarı Açın."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "AP'nin PIN'i görüntülenir. Varsayılan PIN, AP'nin altındaki etikette bulunmaktadır. Rastgele yeni bir PIN oluşturmak için Oluştur'a tıklayın veya varsayılan PIN numarasını geri yüklemek için Varsayılan'a tıklayın."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"WPS Sihirbazı",
               CONTENT: [{
                           type: "name",
                           title: "Basılabilir Buton (Önerilen)",
                           content: "WPS özelliğini etkinleştirmek için bu bağlantı metodunu seçin ve herhangi bir WPS özellikli cihazı kolaylıkla kablosuz ağınıza bağlamak için WPS düğmesini veya web arayüzdeki Bağlan düğmesini kullanın."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Manuel olarak yeni bir cihaz eklemek için kablosuz erişim noktasının WPS PIN'ini ilgili alana girin ve Bağlan'a tıklayın."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Host Ağına Bağlan",
               CONTENT: [{
                           type: "name",
                           title: "2.4GHz<span class=\"hidden_5g\">/5GHz</span> Ağına Bağlan",
                           content: "Genişleticiyi mevcut 2.4GHz<span class=\"hidden_5g\">/5GHz</span> ağına bağlamak için etkinleştirin veya devre dışı bırakın. "
                       } ,{                      
                           type: "name",
                           title: "Kablosuz Tarayıcı",
                           content: "Tara düğmesine tıklayın ve genişleticinin menzilindeki bağlanmak istediğiniz Wi-Fi ağlarını görüntüleyin. Bir ağ seçtikten sonra, kablosuz ağın SSID ve güvenlik ayarları otomatik olarak verilecektir."
                       } ,{                      
                           type: "name",
                           title: "Host 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "Genişleticiyi bağlamak istediğiniz aralıkta kullanılabilir tüm Wi-Fi ağlarını görüntülemek ve taramak için bu düğmeye tıklayın veya <strong>Kablosuz Tarayıcıya</strong> tıklayın ve bir Wi-Fi ağı seçin."
                       } ,{                      
                           type: "name",
                           title: "Host 2.4GHz<span class=\"hidden_5g\">/5GHz</span> Güvenlik",
                           content: "Host ağı ile eşleştirmek için güvenlik seçeneklerinden birini seçin."
                       } ,{                      
                           type: "name",
                           title: "Güvenlik Yok",
                           content: "Bu seçenek kablosuz güvenliğini devre dışı bırakır."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Bu seçenek sadece TKIP (Geçici Anahtar Bütünlüğü Protokolü) şifrelemeyi destekler. TKIP şifreleme iyi seviyede güvenlik sağlar."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Bu seçenek WPA-PSK'dan daha iyi güvenlik seviyesi sağlayan AES (Gelişmiş Şifreleme) şifrelemeyi destekler ve önerilir."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Bu seçenek WPA'nın (Wi-Fi Protected Access) WPA ve WPA2 gibi çoklu uygulamalarını destekler."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Eğer istemci cihazlarınız sadece WEP kullanan kablosuza bağlanabiliyorsa, bu seçenek kullanılabilecek kablosuz güvenliğin en temel biçimidir."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Genişletilmiş Ağ Ayarları",
               CONTENT: [{
                           type: "name",
                           title: "Genişletilmiş 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Menzil genişleticinin 2.4GHz<span class=\"hidden_5g\">/5GHz</span> kablosuz fonksiyonunu etkinleştirin veya devre dışı bırakın."
                       } ,{                      
                           type: "name",
                           title: "Genişletilmiş 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID",
                           content: "Ana Router'ın/AP'nin SSID'sini otomatik olarak kopyalamak için <strong>Host SSID'sini Kopyala</strong> düğmesini kullanın veya yeni bir isim girin (32 karaktere kadar). Bu alan büyük-küçük harf duyarlıdır."
                       } ,{                      
                           type: "name",
                           title: "Host SSID'sini Kopyala",
                           content: "Kopyalamak için bu düğmeye tıklayın ve ilgili alanlara otomatik olarak SSID'yi ve ana bilgisayar ağının güvenlik ayarlarını doldurun."
                       } ,{                      
                           type: "name",
                           title: "SSID Yayınını Gizle",
                           content: "Eğer genişletilmiş 2.4GHz<span class=\"hidden_5g\">/5GHz</span> SSID'sini Wi-Fi ağ listesinden gizlemek istiyorsanız, bu işaret kutucuğunu seçin."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Erişim Kontrolü",
               CONTENT: [{
                           type: "paragraph",
                           content: "Erişim Kontrolü genişletilmiş ağ üzerinden belirli bilgisayarları ve diğer cihazları izin vermek veya engellemek için kullanılabilir. Bir cihaz engellendiğinde, genişletilmiş ağ üzerinden bağlantı kuramaz."
                       } ,{                      
                           type: "paragraph",
                           content: "Erişim Kontrolünü kullanmak için bu özelliği etkinleştirin ve kara veya beyaz liste belirleyin. Eğer Erişim Kontrolü devre dışıysa (Kapalı), kara listede olan cihazlar dahil tüm cihazların bağlantısına izin verilir."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Erişim Modu",
               CONTENT: [{
                           type: "name",
                           title: "Kara Liste",
                           content: "Sadece kara listedeki cihazların ağınıza erişimine izin verilmez."
                       } ,{                      
                           type: "name",
                           title: "Beyaz Liste",
                           content: "Sadece beyaz listedeki cihazların ağınızına erişimine izin verilir."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Çevrimiçi Cihazlar",
               CONTENT: [{
                           type: "name",
                           title: "Cihaz Adı",
                           content: "Bağlı bulunan cihazın adını gösterir."
                       } ,{                      
                           type: "name",
                           title: "IP Adresi",
                           content: "Bağlı bulunan cihazın IP adresini gösterir."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "Bağlı bulunan cihazın MAC adresini gösterir."
                       } ,{                      
                           type: "name",
                           title: "Bağlantı Türü",
                           content: "Bağlı bulunan cihazın bağlantı türünü gösterir."
                       } ,{                      
                           type: "step",
                           title: "Bir Cihazı Engellemek İçin",
                           content: "Çevrimiçi Cihazlar tablosunda, Değiştir sütunundaki engellemek istediğiniz cihazla ilgili olan Engelle simgesine tıklayın."
                       } ,{                      
                           type: "step",
                           title: "Birden Çok Cihazı Engellemek İçin",
                           content: "Çevrimiçi Cihazlar tablosunda, engellemek istediğiniz tüm cihazları seçin, tablonun yukarısındaki Engelle düğmesine tıklayın. Cihaz otomatik olarak kara listedeki veya beyaz listedeki cihazlara eklenecektir."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Kara Listedeki/Beyaz Listedeki Cihazlar",
               CONTENT: [{
                           type: "step",
                           title: "Bir Cihazı Kara/Beyaz Listeye Almak İçin",
       content: [ 
                "1. Ekle simgesine tıklayın.",
                "2. Cihaz adını girin.",
                "3. Cihazın MAC adresini girin.",
                "4. Etkili Süre türünü seçin. <b>Zaman programına göre erişemez/Zaman programına göre erişebilir</b>'i seçerseniz saati ve günleri ayarlayın.",
                "5. Tamam'ı tıklatın."]
} ,{                      
                           type: "step",
                           title: "Kara/Beyaz listedeki bir cihazı değiştirmek veya silmek için",
                           content: "Kara/Beyaz liste tablosundaki, değiştirmek veya silmek istediğiniz cihazla ilgili olan Değiştir veya Sil simgesine tıklayın."
                       } ,{                      
                           type: "step",
                           title: "Kara/Beyaz listedeki birden çok cihazı silmek için",
                           content: "Kara/Beyaz liste tablosundaki, silmek istediğiniz tüm cihazları seçin, listenin yukarısındaki Sil düğmesine tıklayın."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Ethernet portu için Host Ağı",
                           content: "Kablolu istemcilerden kablosuz istemcilere akış göndermek için kullanılan host ağının kablosuz bandını (2.4GHz veya 5GHz) seçin. Bu seçenek sadece 2.4GHz ve 5GHz host ağı etkinleştirildiğinde kullanılabilir."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Host Ağ IP Adresi",
               CONTENT: [{
                           type: "name",
                           title: "IP Adresini Otomatik Olarak Al (Önerilen)",
                           content: "Eğer menzil genişletici IP Adresini, Alt Ağ Maskesini ve Ağ Geçidini ana Router'dan/AP'den dinamik olarak almasını istiyorsanız bu seçeneği seçin."
                       } ,{                      
                           type: "name",
                           title: "Aşağıdaki IP Adresini Kullan",
                           content: "Eğer menzil genişletici IP Adresini, Alt Ağ Maskesini ve Ağ Geçidini manuel olarak girmek istiyorsanız bu seçeneği seçin."
                       } ,{                      
                           type: "name",
                           title: "IP Adresi",
                           content: "Noktalı-ondalık sayı biçiminde bir IP adresi girin. (varsayılan 192.168.0.254)"
                       } ,{                      
                           type: "name",
                           title: "Alt Ağ Maskesi",
                           content: "Ağın boyutunu belirleyen noktalı-ondalık sayı biçiminde bir alt ağ maskesi girin (varsayılan 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Varsayılan Ağ Geçidi",
                           content: "Noktalı-ondalık sayı biçiminde IP adresiyle aynı alt ağ maskesinde bulunan bir ağ geçidi girin. Genellikle Router'ınızın LAN IP adresidir."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP Sunucusu Ayarları",
               CONTENT: [{
                           type: "paragraph",
                           content: "Varsayılan olarak, LAN'daki IP Adresi Havuzundan genişleticiye bağlı olan tüm istemcilere TCP/IP yapılandırması sağlamak için menzil genişletici DHCP (Dinamik Host Yapılandırma Protokolü) sunucusu olarak kurulmuştur."
                       } ,{                      
                           type: "name",
                           title: "DHCP Sunucusu",
                           content: "DHCP sunucusu geçerli IP adresini istemcilere otomatik olarak atar. Varsayılan olarak otomatik seçilidir. Anahtarı Açık (Etkin) veya Kapalı (Devre Dışı) konuma getirerek DHCP sunucusunu açabilir veya kapatabilirsiniz. Eğer kapalı seçiliyse, LAN'ınız dahilinde başka bir DHCP sunucusuna sahip olmak zorundasınız; aksi halde her istemci için IP adresini manuel olarak yapılandırmanız gerekir."
                       } ,{                      
                           type: "name",
                           title: "IP Adresi Havuzu",
                           content: "İstemcilere kiralanabilecek IP adresi aralığını girin. Varsayılan olarak, başlangıç IP adresi 192.168.0.100 ve bitiş IP adresi 192.168.0.199'dur."
                       } ,{                      
                           type: "name",
                           title: "Adres Kiralama Süresi",
                           content: "IP adresinin istemciye kiralanan süresini 1-2880 dakika arasında değer olarak girin. Varsayılan 1 dakikadır."
                       } ,{                      
                           type: "name",
                           title: "Varsayılan Ağ Geçidi",
                           content: "<br/>Menzil genişleticinin LAN IP adresini girin. Varsayılan olarak 192.168.0.254'tür. (Opsiyonel)"
                       } ,{                      
                           type: "name",
                           title: "Birincil DNS",
                           content: "İSS'niz tarafından sağlanan DNS IP Adresini girin. (Opsiyonel)"
                       } ,{                      
                           type: "name",
                           title: "İkincil DNS",
                           content: "İSS'niz tarafından sağlanan parametreleri girin. (Opsiyonel)"
                       } ,{                      
                           type: "note",
                           title: "Dikkat",
                           content: "Menzil genişleticinin DHCP sunucusunu kullanmak amacıyla, LAN'ınızdaki tüm istemciler IP adresini otomatik olarak almak için yapılandırmalı."
                       } ,{                      
                           type: "paragraph",
                           content: "Yapılandırmanızı kaydetmek için <strong>Kaydet</strong> düğmesine tıklayın."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Address Reservation",
               CONTENT: [{
                           type: "paragraph",
                           content: "Genişleticiye bağlı bir istemci için manuel olarak bir IP adresi rezerve edebilirsiniz. Bir kez rezerve yaptığınızda, DHCP sunucusu tarafından istemciye sadece tanımlanan IP adresi atanacaktır."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "Burada DHCP sunucusunda IP adresinin rezerve edildiği istemcinin MAC adresi görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Rezerve IP Adresi",
                           content: "Burada istemci için rezerve edilen IP adresi görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Açıklama",
                           content: "Burada istemci cihaz hakkındaki açıklama görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Durum",
                           content: "Burada istemci cihazın mevcut durumu (etkin veya devre dışı) görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Düzenle",
                           content: "Burada ilgili istemciyi Düzenleme veya Silme seçeneği görüntülenir."
                       } ,{                      
                           type: "step",
                           title: "Bir IP adresi rezerve etmek için",
       content: [ 
                "1. Ekle'ye tıklayın.",
                "2. İstediğiniz istemcinin MAC adresini girin.",
                "3. İstemci için rezerve etmek istediğiniz IP adresini girin.",
                "4. İstemci için bir açıklama girin.",
                "5. Etkinleştirmek istediğiniz kaydı seçin.",
                "6. TAMAM'a tıklayın."]
} ,{                      
                           type: "step",
                           title: "Mevcut bir istemciyi düzenlemek veya silmek için",
                           content: "Bu tabloda, düzenlemek veya silmek istediğiniz istemci için ilgili Sil veya Düzenle simgesine tıklayın."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"DHCP İstemci Listesi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Menzil genişleticisine bağlı olan her DHCP istemcisinin belirtilen bilgilerini gösterir."
                       } ,{                      
                           type: "name",
                           title: "Total Clients",
                           content: "Displays the number of the associated DHCP client."
                       } ,{                      
                           type: "name",
                           title: "İstemci Adı",
                           content: "DHCP istemcisinin adı."
                       } ,{                      
                           type: "name",
                           title: "MAC Adresi",
                           content: "DHCP istemcisinin MAC adresi."
                       } ,{                      
                           type: "name",
                           title: "Atanan IP Adresi",
                           content: "DHCP sunucusu tarafından istemciye atanan IP adresi."
                       } ,{                      
                           type: "name",
                           title: "Kiralama Süresi",
                           content: "DHCP istemcisine kiralanan IP adresinin süresi."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Yenile</strong> - DHCP istemci listesini güncellemek için bu düğmeye tıklayın."
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Wi-Fi Kapsamı",
               CONTENT: [{
							type:"paragraph",
                           content: "Menzil genişleticinizin Wi-Fi kapsama seviyesini seçin."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Zaman Ayarları",
               CONTENT: [{
                           type: "name",
                           title: "Geçerli Saat",
                           content: "Geçerli sistem saatini görüntüler."
                       } ,{
                           type: "name",
                           title: "Saat Dilimi",
                           content: "Saat diliminizi seçin."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Yaz Saati",
               CONTENT: [{
              type: "step",
                            title: "Yaz Saatini ayarlamak için",
              content:[
                "1. Yaz Saati'ni seçin.",
                "2. Yerel saat diliminizde yaz saati uygulamasının  <b>Başlangıç</b> tarihini ve saatini seçin.",
                "3. Yerel saat diliminizde yaz saati uygulamasının  <b>Bitiş</b> tarihini ve saatini seçin.",
                "4. Kaydet'e tıklayın."]},
        {
          type:"name",
          title:"Geçerli Durum",
          content:"Geçerli saatin, yaz saati uygulamasında olup olmadığını gösterir."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED Kontrolü",
               CONTENT: [{
                           type: "paragraph",
                           content: "LED kontrolü menzil genişleticinizin üstünde bulunan LED'leri belirli zaman çizelgesine göre açıp kapamanıza olanak sağlar."
                       } ,{                      
                           type: "name",
                           title: "Gece Modu",
                           content: "Gece modunun açık (etkinleştirilmiş) veya kapalı (devre dışı) olup olmadığını gösterir."
                       } ,{                      
                           type: "name",
                           title: "LED Kapanma Zamanı",
                           content: "LED'leri kapamak için zaman çizelgesi seçin."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Güç Programı",
               CONTENT: [{
                           type: "paragraph",
                           content: "Genişleticiyi, güç tasarrufu sağlamak amacıyla zaman programına göre kapatmak için bu işlevi seçin."
                       } ,{                      
                           type: "name",
                           title: "Güç Programını Etkinleştir",
                           content: "Güç Programı'nı etkinleştirmek için bunu seçin."
                       } ,{                      
                           type: "name",
                           title: "Kapanma Zamanı",
                           content: "Genişleticinin otomatik olarak kapatılacağı zaman dilimini seçin."
                       } ,{                      
                           type: "name",
                           title: "Gün(ler)",
                           content: "Genişleticinin kapatılacağı günü/günleri seçin."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Firmware Güncelle",
               CONTENT: [{
                           type: "name",
                           title: "Firmware Sürümü",
                           content: "Mevcut firmware sürümü görüntülenir."
                       } ,{                      
                           type: "name",
                           title: "Donanım Sürümü",
                           content: "Burada mevcut donanım donanım sürümü görüntülenir."
                       } ,{                      
                           type: "step",
                           title: "ÖNEMLİ: Güncelleme hatasını önlemek için, şunlara dikkat ediniz:",
       content: [ 
                "1. Yüklenecek firmware dosyası, genişleticinizin mevcut donanım sürümü ile uyumlu olmalıdır.",
                "2. Tüm güncelleme işlemi boyunca genişleticinin gücünün açık olması önemlidir, çünkü güç kesintisi genişleticiye zarar verebilir."]
} ,{                      
                           type: "step",
                           title: "Genişleticinin yazılımını güncellemek için:",
       content: [ 
                "1. Bilgisayarınıza <a class=\"link\" href=\"http://www.tp-link.com.tr/Support/\" target=\"_blank\">TP-Link Destek</a> sayfasından en yeni firmware dosyasını indirin.",
                "2. İndirdiğiniz dosyayı bulmak için <strong>Gözat</strong> tıklayın ve dosyayı seçin.",
                "3. <strong>Güncelle</strong>'ye tıklayın."]
} ,{                      
                           type: "paragraph",
                           content: "Güncellemenin tamamlanması birkaç dakikayı alabilir ve tamamlandığında menzil genişletici otomatik olarak yeniden başlatılacaktır."
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Yedekle",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kurtarma işleminin sistemi fabrika ayarlarından, önceki duruma geri yüklemesinin gerektiği durumlarda, mevcut yapılandırmanızın yedeğini almanız önerilir. "
                       } ,{                      
                           type: "paragraph",
                           content: "Mevcut yapılandırmanızı config.bin dosyası olarak bilgisayarınıza kaydetmek için Yedekle düğmesine tıklayın. İhtiyacınız olduğunda dosyayı geri alabilmek için dosyayı güvenli bir yere kaydettiğinizden emin olun."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Geri Yükle",
               CONTENT: [{
                           type: "step",
                           title: "Yedekleme dosyasından kaydedilen ayarları geri yüklemek için",
       content: [ 
                "1. Yedekleme dosyanızın konumu bulmak için Göz at düğmesine tıklayın",
                "2. Yedekleme dosyanızı seçin.",
                "3. Geri Yükle düğmesine tıklayın.",
                "4. Sistem geri yüklemesini onaylamak için <strong>Evet</strong> düğmesine tıklayın.",
                "Geri yükleme işleminin tamamlanması birkaç dakika sürebilir ve işlem bitince genişletici kendini otomatik olarak yeniden başlatacaktır."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Fabrika Ayarlarına Geri Al",
               CONTENT: [{
                           type: "paragraph",
                           content: "Menzil genişleticinizi varsayılan fabrika ayarlarına geri yüklemek için Fabrika Ayarlarına Geri Al düğmesine tıklayın."
                       } ,{                      
                           type: "note",
                            title: "Dikkat",
							content:[ 
								"1. Fabrika Ayarları, genişleticide yapılandırılan tüm ayarları silecektir. Genişleticinin yönetim sayfasına yeniden giriş yapmak için, hem kullanıcı adı hem de şifre alanına varsayılan değer 'admin' kullanın.",
								"1. Fabrika Geri Yükleme işlemi, extender’ın şu anki tüm ayarlarını silecektir. Daha sonra tekrar oturum açabilmeniz için bir şifre oluşturunuz.",
								"2. Lütfen yedekleme veya geri yükleme işlemi bitene kadar menzil genişleticinin gücünü KESMEYİNİZ."
							]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Yönetici Hesabı",
               CONTENT: [{
                           type: "paragraph",
                           content: "Bu sayfa varsayılan giriş kullanıcı adınızı ve/veya şifrenizi değiştirmenize olanak sağlar."
                       } ,{                      
                           type: "paragraph",
                           content: "Bu sayfada oturum açma şifresini değiştirebilirsiniz."
                       } ,{                      
                           type: "name",
                           title: "Eski Kullanıcı Adı",
                           content: "Mevcut kullanıcı adınızı girin."
                       } ,{                      
                           type: "name",
                           title: "Eski Şifre",
                           content: "Mevcut şifrenizi girin."
                       } ,{                      
                           type: "name",
                           title: "Yeni Kullanıcı Adı",
                           content: "Yeni bir kullanıcı adı girin."
                       } ,{                      
                           type: "name",
                           title: "Yeni Şifre",
                           content: "Yeni bir şifre girin."
                       } ,{                      
                           type: "name",
                           title: "Şifreyi Onayla",
                           content: "Yeni şifrenizi tekrar girin."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Sistem Günlüğü",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sistem Günlüğünde, genişleticinin en son faaliyetlerin (olaylar) listesi görüntülenir. Görüntülemek istediğiniz günlük düzeyini ve/veya günlük tipini belirtebilirsiniz."
                       } ,{                      
                           type: "name",
                           title: "Tür",
                           content: "Görüntülemek istediğiniz Günlük Türünü seçin."
                       } ,{                      
                           type: "name",
                           title: "Seviye",
                           content: "Görüntülemek istediğiniz Günlük Seviyesini seçin."
                       } ,{                      
                           type: "name",
                           title: "Yenile",
                           content: "Sistem günlüğünü güncelleştirmek için bu düğmeye tıklayın."
                       } ,{                      
                           type: "name",
                           title: "Tümünü Sil",
                           content: "Tüm günlükleri kalıcı olarak silmek için bu düğmeye tıklayın."
                       } ,{                      
                           type: "name",
                           title: "Günlüğü Kaydet",
                           content: "Sistem günlüğünü .txt dosyası olarak kaydetmek için bu düğmeye tıklayın."
                       }]
		},
    });
})(jQuery);
