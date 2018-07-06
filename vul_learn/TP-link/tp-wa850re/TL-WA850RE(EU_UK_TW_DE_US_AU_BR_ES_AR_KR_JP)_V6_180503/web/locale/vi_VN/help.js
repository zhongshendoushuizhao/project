(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.extend(true,$.su.CHAR.HELP,{
       BASIC_REGION :{ 
               TITLE:"Cài đặt khu vực",
               CONTENT: [{
                           type: "name",
                           title: "Khu vực",
                           content: "Chọn khu vực của bạn từ trình đơn thả xuống. Nếu quốc gia hay khu vực của bạn không được liệt kê, có thể do các giới hạn về việc sử dụng vô tuyến không dây trong khu vực của bạn."
                       }]
},
       BASIC_STATUS :{ 
               TITLE:"Trạng thái",
               CONTENT: [{
                           type: "paragraph",
                           content: "Trang Trạng thái cơ bản hiển thị một bảng điều khiển với thông tin và trạng thái hiện tại của mạng của bạn. Bạn có thể bấm chọn từng biểu tượng để biết thêm chi tiết."
                       } ,{                      
                           type: "title",
                            title: "Bộ mở rộng sóng"
                       } ,{                      
                           type: "paragraph",
                           content: "Hiển thị thông tin mạng 2.4GHz<span class=\"hidden_5g\">/5GHz</span> mở rộng."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Tên mạng mở rộng (SSID)."
                       } ,{                      
                           type: "name",
                           title: "Kênh",
                           content: "Kênh không dây hiện tại đang được sử dụng"
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Địa chỉ MAC vật lý của bộ mở rộng sóng."
                       } ,{                      
                           type: "name",
                           title: "Máy chủ DHCP",
                           content: "Hiển thị trạng thái của máy chủ DHCP"
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP",
                           content: "Địa chỉ IP được cấp phát cho máy khách bởi máy chủ DHCP"
                       } ,{                      
                           type: "name",
                           title: "Dạng",
                           content: "Dạng địa chỉ IP được cấp phát bởi máy chủ DHCP"
                       } ,{                      
                           type: "title",
                            title: "Mạng gốc 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "paragraph",
                           content: "Hiển thị thông tin bên dưới của mạng 2.4GHz<span class=\"hidden_5g\">/5GHz</span>."
                       } ,{                      
                           type: "name",
                           title: "SSID",
                           content: "Mạng gốc SSID "
                       } ,{                      
                           type: "name",
                           title: "Tín hiệu",
                           content: "Cường độ tín hiệu của Mạng gốc"
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Địa chỉ MAC vật lý của Mạng gốc"
                       } ,{                      
                           type: "title",
                            title: "Máy khách"
                       } ,{                      
                           type: "paragraph",
                           content: "Hiển thị máy khách hiện đang kết nối đến bộ mở rộng 2.4GHz<span class=\"hidden_5g\">/5GHz</span>"
                       } ,{                      
                           type: "name",
                           title: "Dạng",
                           content: "Mạng mở rộng 2.4GHz<span class=\"hidden_5g\">/5GHz</span> máy khách đang kết nối tới"
                       } ,{                      
                           type: "name",
                           title: "Tên thiết bị",
                           content: "Tên của máy khách kết nối"
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Địa chỉ MAC vật lý của máy khách kết nối."
                       }]
},
       AP_BASIC_STATUS :{ 
               TITLE:"Trạng thái",
               CONTENT: [{
                           type: "paragraph",
                           content: "Trang Trạng thái hiển thị bảng thông báo với thông tin và trạng thái mạng hiện tại của bạn Bạn có thể bấm chọn các biểu tượng để có thông tin chi tiết."
                       } ,{                      
                           type: "title",
                            title: "Internet"
                       } ,{                      
                           type: "name",
                           title: "Trạng thái Internet",
                           content: "Hiển thị trạng thái hiện tại của kết nối Internet của thiết bị."
                       } ,{                      
                           type: "title",
                            title: "Điểm truy cập"
                       } ,{                      
                           type: "name",
                           title: "Máy chủ DHCP",
                           content: "Hiển thị trạng thái của máy chủ DHCP."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP",
                           content: "Hiển thị địa chỉ IP cấp phát cho Điểm truy cập bởi máy chủ DHCP."
                       } ,{                      
                           type: "name",
                           title: "Dạng",
                           content: "Hiển thị cách thức lấy địa chỉ IP của điểm truy cập."
                       } ,{                      
                           type: "title",
                            title: "Máy khách Không dây"
                       } ,{                      
                           type: "name",
                           title: "Tên",
                           content: "Hiển thị tên của máy khách."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP",
                           content: "Hiển thị địa chỉ IP cấp phát cho máy khách."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Hiển thị địa chỉ MAC vật lý của máy khách."
                       }]
},
       WIRELESS_REGION :{ 
               TITLE:"Cài đặt",
               CONTENT: [{
                           type: "name",
                           title: "Khu vực",
                           content: "Chọn khu vực của bạn từ trình đơn thả xuống. Nếu quốc gia hay khu vực của bạn không được liệt kê, có thể do các giới hạn về việc sử dụng vô tuyến không dây trong khu vực của bạn."
                       } ,{                      
                           type: "paragraph",

                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Không dây 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Kích hoạt vô tuyến không dây",
                           content: "Chọn hộp chọn này để kích hoạt vô tuyến không dây tần số 2.4GHz"
                       } ,{                      
                           type: "name",
                           title: "Tên mạng không dây (SSID)",
                           content: "Bạn có thể giữ Tên Mạng (SSID) mặc định, hoặc nhập tên mới (tối đa 32 ký tự). Ô này phân biệt chữ hoa và chữ thường."
                       } ,{                      
                           type: "name",
                           title: "Giấu SSID",
                           content: "Chọn hộp chọn này nếu bạn muốn giấu tên mạng (SSID) 2.4GHz khỏi danh sách mạng Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Bảo mật",
                           content: "Chọn một trong số các tùy chọn bảo mật sau:",
       children: [{                      
                           type: "name",
                           title: "Không bảo mật",
                           content: "Chọp lựa chọn này để vô hiệu hóa bảo mật không dây. Chúng tôi đề nghị bạn hãy kích hoạt bảo mật mạng không dây để bảo vệ mạng không dây của bạn khỏi các truy cập trái phép."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Cá nhân",
                           content: "Chọn tùy chọn này để kích hoạt phương thức xác thực chuẩn dựa trên Pre-shared Key (PSK), còn được gọi là cụm mật khẩu. Lựa chọn này được đề nghị. Nếu bạn chọn, vui lòng cấu hình các thông số sau:",
       children: [{                      
                           type: "name",
                           title: "Phiên bản",
                           content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
       children: [{                      
                           type: "name",
                           title: "Tự động",
                           content: "Lựa chọn này hỗ trợ đa thực thi của chuẩn WPA (Wi-Fi Truy cập được bảo vệ), như WPA và WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Lựa chọn này chỉ hỗ trợ mã hóa TKIP, cung cấp cấp độ bảo mật tốt"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Lựa chọn này hỗ trợ mã hóa AES, cung cấp cấp độ bảo mật tốt hơn WPS-PSK và được đề nghị."
                       }]
} ,{                      
                           type: "name",
                           title: "Mã hóa",
                           content: "Chọn một dạng mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES(Advanced Encryption Standard), hoặc Tự động (cho cả TKIP và AES). Chúng tôi không đề nghị sử dụng mã hóa TKIP nếu bộ mở rộng hoạt động ở chế độ 802.11n, vì TKIP không được bảng thông số kỹ thuật 802.11n hỗ trợ. Nếu chọn TKIP, chức năng WPS sẽ bị vô hiệu hóa."
                       } ,{                      
                           type: "name",
                           title: "Mật khẩu",
                           content: "Nhập mật khẩu không dây từ 8-63 ký tự ASCII hoặc 8 đến 64 ký tự thập lục phân vào ô này."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Chọn tùy chọn này để kích hoạt phương pháp xác thực cơ bản nếu thiết bị của bạn chi có thể truy cập không dây bằng cách sử dụng mã WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Dạng",
                           content: "Chọn một dạng xác thực cho mạng không dây của bạn. Giá trị mặc định là Tự động, nghĩa là thiết bị sẽ tự chọn Hệ thống Mở hoặc Shared Key (Mã Chia sẽ) dựa trên yêu cầu truy cập và khả năng của máy khách không dây."
                       } ,{                      
                           type: "name",
                           title: "Định dạng mã WEP",
                           content: "Sử dụng định dạng ASCII hoặc Thập lục phân. Định dạng ASCII là sự kết hợp của ký tự chữ và số. Định dạng Thập lục phân là sự kết hợp của số (0-9) và mẫu tự (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Dạng mã",
                           content: "Chọn độ dài mã WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Cho phép bạn nhập 10 kỷ tự thập lục phân (0-9, A-F, a-f) hoặc 5 ký tự ASCII vào ô Giá trị mã WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Cho phép bạn nhập 26 ký tự thập lục phân (0-9, A-F, a-f) hoặc 13 ký tự ASCII vào ô Giá trị mã WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Giá trị mã",
                           content: "Nhập mã WEP vào ô tương ứng."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Chế độ",
                           content: "Chọn một chế độ truyền hỗn hợp."
                       } ,{                      
                           type: "name",
                           title: "Độ rộng kênh",
                           content: "Chọn độ rộng kênh (băng thông) cho mạng không dây 2.4GHz."
                       } ,{                      
                           type: "name",
                           title: "Kênh",
                           content: "Chọn kênh hoạt động cho mạng không dây 2.4GHz. Chúng tôi đề nghị để kênh ở chế độ Tự động, nếu bạn không có kinh nghiệm về vấn đề gián đoạn kết nối không dây."
                       } /*,{                      
                           type: "name",
                           title: "Công suất truyền tải",
                           content: "Chọn hoặc Cao, Trung bình, hoặc Thấp để xác định công suất truyền tải. Giá trị mặc định và được đề nghị là đặt ở mức Cao."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Bấm Lưu để lưu tất cả cài đặt của bạn."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Không dây 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Kích hoạt vô tuyến không dây",
                           content: "Chọn hộp chọn này để kích hoạt vô tuyến không dây tần số 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Tên mạng không dây (SSID)",
                           content: "Bạn có thể giữ Tên mạng (SSID) mặc định hoặc nhập tên mới (tối đa 32 ký tự). Thông số này phân biệt chữ hoa và chữ thường."
                       } ,{                      
                           type: "name",
                           title: "Giấu SSID",
                           content: "Chọn hộp chọn này nếu bạn muốn giấu tên mạng (SSID) 5GHz khỏi danh sách mạng Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Bảo mật",
                           content: "Chọn một trong số các tùy chọn bảo mật sau:",
       children: [{                      
                           type: "name",
                           title: "Không bảo mật",
                           content: "Chọp tùy chọn này để vô hiệu hóa bảo mật không dây. Chúng tôi rất đề nghị bạn kích hoạt bảo mật không dây để bảo vệ mạng không dây của bạn khỏi các truy cập trái phép."
                       } ,{                      
                           type: "name",
                           title: "WPA/WPA2-Cá nhân",
                           content: "Chọn tùy chọn này để kích hoạt phương thức xác thực chuẩn dựa trên Pre-shared Key (PSK), còn được gọi là cụm mật khẩu. Lựa chọn này được đề nghị. Nếu bạn chọn, vui lòng cấu hình các thông số sau:",
       children: [{                      
                           type: "name",
                           title: "Phiên bản",
                           content: "Chọn một phiên bản bảo mật cho mạng không dây của bạn.",
       children: [{                      
                           type: "name",
                           title: "Tự động",
                           content: "Tùy chọn này hỗ trợ đa thực thi của chuẩn WPA (Wi-Fi Protected Access), như WPA và WPA2."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Tùy chọn này chỉ hỗ trợ mã hóa TKIP, cung cấp cấp độ bảo mật tốt"
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Tùy chọn này hỗ trợ mã hóa AES, cung cấp cấp độ bảo mật tốt hơn WPS-PSK và được đề nghị."
                       }]
} ,{                      
                           type: "name",
                           title: "Mã hóa",
                           content: "Chọn một dạng mã hóa bảo mật: TKIP (Temporal Key Integrity Protocol), AES(Advanced Encryption Standard), hoặc Tự động (cho cả TKIP và AES). Chúng tôi không đề nghị sử dụng mã hóa TKIP nếu bộ mở rộng hoạt động ở chế độ 802.11n, vì TKIP không được bảng thông số kỹ thuật 802.11n hỗ trợ. Nếu chọn TKIP, chức năng WPS sẽ bị vô hiệu hóa."
                       } ,{                      
                           type: "name",
                           title: "Mật mã",
                           content: "Nhập mật mã không dây từ 8-63 ký tự ASCII hoặc 8 đến 64 ký tự thập lục phân vào ô này."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Chọn tùy chọn này để kích hoạt phương pháp xác thực cơ bản nếu thiết bị của bạn chỉ có thể truy cập mạng không dây bằng cách sử dụng mã WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Dạng",
                           content: "Chọn một dạng xác thực cho mạng không dây của bạn. Giá trị mặc định là Tự động, nghĩa là thiết bị sẽ tự chọn Hệ thống mở hoặc Shared Key (Mã chia sẽ) dựa trên yêu cầu truy cập và khả năng của máy khách không dây."
                       } ,{                      
                           type: "name",
                           title: "Định dạng mã WEP",
                           content: "Sử dụng định dạng ASCII hoặc Thập lục phân. Định dạng ASCII là sự kết hợp của ký tự chữ và số. Định dạng Thập lục phân là sự kết hợp của số (0-9) và ký tự (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Dạng mã",
                           content: "Chọn độ dài mã WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Cho phép bạn nhập 10 ký tự thập lục phân (0-9, A-F, a-f) hoặc 5 ký tự ASCII vào ô Giá trị mã WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Cho phép bạn nhập 26 ký tự thập lục phân (0-9, A-F, a-f) hoặc 13 ký tự ASCII vào ô Giá trị WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Giá trị mã",
                           content: "Nhập mã WEP vào ô tương ứng."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Chế độ",
                           content: "Chọn một chế độ truyền hỗn hợp."
                       } ,{                      
                           type: "name",
                           title: "Độ rộng kênh",
                           content: "Chọn độ rộng kênh (băng thông) cho mạng không dây 5GHz."
                       } ,{                      
                           type: "name",
                           title: "Kênh",
                           content: "Chọn kênh hoạt động cho mạng không dây 5GHz. Chúng tôi đề nghị để kênh ở chế độ Tự động, nếu bạn không có kinh nghiệm về vấn đề gián đoạn kết nối không dây."
                       } /*,{                      
                           type: "name",
                           title: "Công suất truyền tải",
                           content: "Chọn hoặc Cao, Trung bình, hoặc Thấp để xác định công suất truyền tải. Giá trị mặc định và được đề nghị là đặt ở mức Cao."
                       }*/ ,{                      
                           type: "paragraph",
                           content: "Bấm Lưu để lưu tất cả cài đặt của bạn."
                       }]
},
       ENABLE_WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "name",
                           title: "Kích hoạt WPS",
                           content: "Các thiết bị khác có thể kết nối đến điểm truy cập (AP) này bằng WPS với mã PIN của AP."
                       }]
},
       WPS :{ 
               TITLE:"PIN của AP",
               CONTENT: [{
                           type: "name",
                           title: "PIN của AP",
                           content: "Chuyển sang Mở để cho phép thiết bị không dây kết nối đến AP bằng cách sử dụng mã PIN của AP (Personal Identification Number)."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Hiển thị mã PIN của AP. Mã PIN mặc định có thể được tìm thấy trên nhãn của AP. Bấm chọn Tạo để tạo mã PIN ngẫu nhiên mới hoặc bấm chọn Mặc định để khôi phục mã PIN hiện tại về mã PIN mặc định."
                       }]
},
       WPS_WIZARD :{ 
               TITLE:"Thuật sỹ cài đặt WPS",
               CONTENT: [{
                           type: "name",
                           title: "Nút nhấn (khuyến nghị)",
                           content: "Chọn phương pháp kết nối này để kích hoạt tính năng WPS để dễ dàng kết nối vào bất cứ thiết bị nào kích hoạt WPS đến mạng không dây của bạn bằng nút nhấn WPS hoặc bằng cách nhấn nút Kết nối."
                       } ,{                      
                           type: "name",
                           title: "PIN",
                           content: "Chọn phương pháp kết nối này để thêm một thiết bị theo cách thủ công bằng cách nhập mã PIN WPS của thiết bị không dây vào khung và bấm chọn Kết nối."
                       }]
},
       WIRELESS_CONNECT :{ 
               TITLE:"Kết nối đến mạng chủ",
               CONTENT: [{
                           type: "name",
                           title: "Kết nối đến mạng gốc 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Kích hoạt hoặc Vô hiệu hóa để kết nối bộ mở rộng đến mạng 2.4GHz<span class=\"hidden_5g\">/5GHz</span> hiện có."
                       } ,{                      
                           type: "name",
                           title: "Quét không dây",
                           content: "Bấm nút này để quét và hiển thị tất cả mạng Wi-Fi khả dụng trong vùng phủ mà bạn muốn bộ mở rộng sóng kết nối. Khi một mạng được chọn, cài đặt SSID và bảo mật của mạng đó sẽ được tạo tự động."
                       } ,{                      
                           type: "name",
                           title: "SSID gốc 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Nhập SSID phân biệt chữ hoa và chữ thường của mạng chủ mà bộ mở rộng sóng sẽ kết nối đến, hoặc bấm chọn <strong>Quét Không dây</strong> và chọn một mạng Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Bảo mật mạng gốc 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Chọn một tùy chọn bảo mật phù hợp với mạng gốc."
                       } ,{                      
                           type: "name",
                           title: "Không bảo mật",
                           content: "Tùy chọn này vô hiệu hóa bảo mật không dây. Tất cả máy khách không dây có thể kết nối đến mạng của bạn mà không cần mật mã."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK",
                           content: "Tùy chọn này chỉ hỗ trợ TKIP (Temporal Key Integrity Protocol), cung cấp cấp độ bảo mật tốt."
                       } ,{                      
                           type: "name",
                           title: "WPA2-PSK",
                           content: "Tùy chọn này hỗ trợ mã hóa AES (Advanced  encryption ), cung cấp cấp độ bảo mật tốt hơn WPA-PSK. Đây là lựa chọn được đề nghị."
                       } ,{                      
                           type: "name",
                           title: "WPA-PSK/WPA2-PSK",
                           content: "Tùy chọn này hỗ trợ đa thực thi của chuẩn WPA (Wi-Fi Protected Access), như WPA và WPA2."
                       } ,{                      
                           type: "name",
                           title: "WEP",
                           content: "Tùy chọn này là dạng bảo mật không dây cơ bản nhất có thể được sử dụng nếu thiết bị khách của bạn chỉ có thể truy cập không dây bằng mã WEP (Wired Equivalent Privacy)."
                       }]
},
       WIRELESS_EXTEND :{ 
               TITLE:"Cài đặt mạng mở rộng",
               CONTENT: [{
                           type: "name",
                           title: "Mạng mở rộng 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Kích hoạt hoặc Vô hiệu hóa chức năng không dây 2.4GHz<span class=\"hidden_5g\">/5GHz</span> của bộ mở rộng sóng."
                       } ,{                      
                           type: "name",
                           title: "SSID mở rộng 2.4GHz<span class=\"hidden_5g\">/5GHz</span>",
                           content: "Hoặc sử dụng nút <strong>Sao chép SSID gốc</strong> để tự động sao chép SSID của Router/AP chính hoặc nhập tên mới (tối đa 32 ký tự). Thông số này phân biệt chữ hoa và chữ thường."
                       } ,{                      
                           type: "name",
                           title: "Sao chép SSID gốc",
                           content: "Bấm chọn nủt này để sao chép và tự động tạo cài đặt SSID và bảo mật của mạng gốc vào ô tương ứng."
                       } ,{                      
                           type: "name",
                           title: "Không broadcast SSID",
                           content: "Chọn hộp chọn này nếu bạn không muốn broadcast SSID 2.4GHz<span class=\"hidden_5g\">/5GHz</span> của bộ mở rộng sóng trong danh sách mạng Wi-Fi."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Kiểm soát truy cập",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kiểm soát truy cập được sử dụng để cho phép hoặc chặn một máy tính hoặc thiết bị khác xác định truy cập mạng mở rộng của bạn. Khi một thiết bị bị chặn, thiết bị đó sẽ không thể kết nối đến mạng mở rộng."
                       } ,{                      
                           type: "paragraph",
                           content: "Để sử dụng Kiểm soát truy cập, kích hoạt tính năng này và xác định danh sách trắng hoặc đen. Nếu Kiểm soát Truy cập bị vô hiệu hóa (Tắt), tất cả thiết bị, kể cả thiết bị trong danh sách đen, đều được phép kết nối."
                       }]
},
       ACCESS_MODE :{ 
               TITLE:"Chế độ truy cập",
               CONTENT: [{
                           type: "name",
                           title: "Danh sách đen",
                           content: "Chỉ thiết bị trong Danh sách đen KHÔNG được phép truy cập mạng của bạn."
                       } ,{                      
                           type: "name",
                           title: "Danh sách trắng",
                           content: "Chỉ thiết bị trong Danh sách trắng được phép truy cập mạng của bạn."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Thiết bị trực tuyến",
               CONTENT: [{
                           type: "name",
                           title: "Tên thiết bị",
                           content: "Hiển thị tên thiết bị kết nối."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP",
                           content: "Hiển thị địa chỉ IP của thiết bị kết nối."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Hiển thị địa chỉ MAC của thiết bị kết nối."
                       } ,{                      
                           type: "name",
                           title: "Dạng kết nối",
                           content: "Hiển thị dạng kết nối của thiết bị kết nối."
                       } ,{                      
                           type: "step",
                           title: "Khóa một thiết bị",
                           content: "Trong bảng Thiết bị trực tuyến, bấm chọn biểu tượng Khóa ở cột Tùy chỉnh tương ứng với thiết bị bạn muốn khóa."
                       } ,{                      
                           type: "step",
                           title: "Khóa nhiều thiết bị",
                           content: "Trong bảng Thiết bị trực tuyến, chọn tất cả thiết bị bạn muốn khóa, bấm chọn Khóa (Block) trên bảng. Các thiết bị này sẽ tự động được thêm vào mục Thiết bị trong Danh sách đen hoặc Danh sách trắng."
                       }]
},
       ACCESS_LIST :{ 
               TITLE:"Thiết bị trong Danh sách trắng/Danh sách Đen",
               CONTENT: [{
                           type: "step",
                           title: "Để thêm một thiết bị vào danh sách đen hoặc trắng",
       content: [ 
                "1. Bấm chọn biểu tượng Thêm.",
                "2. Nhập Tên thiết bị.",
                "3. Nhập địa chỉ MAC của thiết bị.",
                "4. Chọn loại Thời gian có hiệu quả. Nếu bạn chọn <b> Không thể truy cập dựa trên thời gian biểu / Truy cập dựa trên thời gian biểu </b>, đặt thời gian và ngày.",
                "5. Nhấp OK."]
} ,{                      
                           type: "step",
                           title: "Để tùy chỉnh hoặc xóa một thiết bị trong Danh sách đen/trắng",
                           content: "Trong bảng Danh sách đen/trắng, bấm chọn biểu tượng Tùy chỉnh hoặc biểu tượng Xóa tương ứng với thiết bị bạn muốn tùy chỉnh hoặc xóa."
                       } ,{                      
                           type: "step",
                           title: "Để xóa nhiều thiết bị trong Danh sách đen/trắng",
                           content: "Trong bảng Danh sách đen/trắng, chọn tất cả thiết bị bạn muốn xóa, bấm Xóa trên danh sách."
                       }]
},
       LAN_ETHERNERT :{ 
               TITLE:"Ethernet",
               CONTENT: [{
                           type: "name",
                           title: "Cổng Ethernet cho mạng máy chủ",
                           content: "Chọn băng tần không dây (2.4GHz hoặc 5GHz) của mạng chủ dùng để gửi lưu lượng từ thiết bị khách nối dây đến thiết bị khách không dây.<br/> Lựa chọn này chỉ khả dụng khi cả mạng 2.4GHz và 5GHz được kích hoạt."
                       }]
},
       LAN_SETTINGS :{ 
               TITLE:"Cài đặt mạng",
               CONTENT: [{
                           type: "name",
                           title: "Lấy địa chỉ IP tự động",
                           content: "Chọn tùy chọn này (khuyến nghị) nếu bạn muốn bộ mở rộng sóng nhận địa chỉ IP và gateway từ mạng gốc. "
                       } ,{                      
                           type: "name",
                           title: "Sử dụng địa chỉ IP sau",
                           content: "Chọn tùy chọn này (khuyến nghị) nếu bạn cấu hình địa chỉ IP và gateway cho bộ mở rộng sóng theo cách thủ công."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP",
                           content: "Nhập địa chỉ IP trong ký hiệu chấm thập phân (mặc định là 192.168.0.254)."
                       } ,{                      
                           type: "name",
                           title: "Subnet Mask",
                           content: "Nhập subnet mask trong ký hiệu chấm thập phân để xác định kích thước mạng (mặc định là 255.255.255.0)."
                       } ,{                      
                           type: "name",
                           title: "Cổng vào mặc định",
                           content: "Nhập cổng vào ở cùng mạng con (subnet) như địa chỉ IP trong ký hiệu chấm thập phân. Thường sẽ là địa chỉ IP LAN của router của bạn."
                       }]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Cài đặt máy chủ DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Theo mặc định, bộ mở rộng sóng được cài đặt làm máy chủ DHCP  (Dynamic Host Configuration Protocol) để cung cấp cấu hình TCP/IP cho tất cả máy khách kết nối đến bộ mở rộng trong mạng LAN từ Dãy địa chỉ IP (IP Address Pool)."
                       } ,{                      
                           type: "name",
                           title: "Máy chủ DHCP",
                           content: "Theo mặc định, Tự động sẽ được chọn; máy chủ DHCP sẽ tự động gán địa chỉ IP hợp lệ cho máy khách. Bạn có thể chuyển Mở (Kích hoạt) hoặc Tắt (Vô hiệu hóa) máy chủ DHCP.  Nếu chọn Tắt, bạn cần phải có một máy chủ DHCP khác trong mạng LAN của bạn, nếu không, bạn cần cấu hình địa chỉ IP của từng máy khách theo cách thủ công."
                       } ,{                      
                           type: "name",
                           title: "Dãy địa chỉ IP",
                           content: "Nhập một dãy số địa chỉ IP có thể cho máy khách thuê. Theo mặc định, địa chỉ IP bắt đầu là 192.168.0.100 và địa chỉ IP kết thúc là 192.168.0.199."
                       } ,{                      
                           type: "name",
                           title: "Thời gian thuê địa chỉ",
                           content: "Nhập khoảng thời gian một địa chỉ IP được cho máy khách thuê, trong khoảng từ 1 đến 2880 phút. Giá trị mặc định là 1 phút."
                       } ,{                      
                           type: "name",
                           title: "Cổng vào mặc định",
                           content: "<br/>Nhập địa chỉ IP LAN của bộ mở rộng sóng. Giá trị mặc định là 192.168.0.254. (Tùy chọn)"
                       } ,{                      
                           type: "name",
                           title: "DNS thứ nhất",
                           content: "Nhập địa chỉ IP DNS được cung cấp bởi ISP của bạn. (Tùy chọn)"
                       } ,{                      
                           type: "name",
                           title: "DNS thứ hai",
                           content: "Nhập các thông số sau do ISP của bạn cung cấp. (Tùy chọn)"
                       } ,{                      
                           type: "note",
                           title: "Lưu ý",
                           content: "Để sử dụng máy chủ DHCP của bộ mở rộng sóng, tất cả máy khách trong mạng LAN phải cấu hình để có được địa chỉ IP một cách tự động."
                       } ,{                      
                           type: "paragraph",
                           content: "Bấm chọn <strong>Lưu</strong> để lưu cấu hình của bạn."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Dành riêng địa chỉ",
               CONTENT: [{
                           type: "paragraph",
                           content: "Theo cách thủ công, bạn có thể dành riêng một địa chỉ IP cho một máy khách kết nối đến bộ mở rộng . Một khi được dành riêng, máy chủ DHCP sẽ chỉ gán địa chỉ IP đó cho cùng một máy khách."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Hiển thị địa chỉ MAC của máy khách với địa chỉ IP dành riêng từ DHCP."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP dành riêng",
                           content: "Hiển thị địa chỉ IP được dành riêng của máy khách."
                       } ,{                      
                           type: "name",
                           title: "Mô tả",
                           content: "Hiển thị một mô tả của máy khách."
                       } ,{                      
                           type: "name",
                           title: "Trạng thái",
                           content: "Hiển thị trạng thái hiện tại (đã kích hoạt hoặc đã vô hiệu hóa) của máy khách."
                       } ,{                      
                           type: "name",
                           title: "Tùy chỉnh",
                           content: "Hiển thị tùy chọn để Tùy chỉnh hoặc Xóa máy khách tương ứng."
                       } ,{                      
                           type: "step",
                           title: "Dành riêng một địa chỉ IP",
       content: [ 
                "1. Bấm chọn Add (Thêm).",
                "2. Nhập đia chỉ MAC của máy khách bạn chọn.",
                "3. Nhập địa chỉ IP mà bạn muốn dành riêng cho máy khách.",
                "4. Nhập một mô tả cho máy khách.",
                "5. Chọn Kích hoạt cho Mục nhập Này.",
                "6. Bấm chọn OK."]
} ,{                      
                           type: "step",
                           title: "Tùy chỉnh hoặc xóa một máy khách hiện có",
                           content: "Trong bảng, bấm chọn biểu tượng Edit (Sửa) hoặc biểu tượng Trash (Thùng rác) tương ứng với máy khách mà bạn muốn chỉnh sửa hoặc xóa bỏ."
                       }]
},
       DHCP_SERVER_CLIENT :{ 
               TITLE:"Danh sách máy khách DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hiển thị thông tin bên dưới của từng máy khách DHCP kết nối đến bộ mở rộng sóng."
                       } ,{                      
                           type: "name",
                           title: "Tổng máy khách",
                           content: "Hiển thị số lượng máy khách DHCP liên kết."
                       } ,{                      
                           type: "name",
                           title: "Tên máy khách",
                           content: "Tên của máy khách DHCP."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ MAC",
                           content: "Địa chỉ MAC của máy khách DHCP."
                       } ,{                      
                           type: "name",
                           title: "Địa chỉ IP được gán",
                           content: "Địa chỉ IP được cấp phát cho máy khách bởi máy chủ DHCP"
                       } ,{                      
                           type: "name",
                           title: "Thời gian thuê",
                           content: "Khoảng thời gian địa chỉ IP được thuê bởi máy khách DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "<strong>Làm mới</strong> - Bấm chọn nút này để cập nhật Danh sách máy khách DHCP."
                       }]
},
        WIFI_COVERAGE_SETTINGS :{ 
               TITLE:"Phủ sóng Wifi",
               CONTENT: [{
						   type:"paragraph",
                           content: "Chọn mức phủ sóng Wifi cho bộ mở rộng sóng."
                       }]
},
       TIME_SETTINGS :{ 
               TITLE:"Cài đặt thời gian",
               CONTENT: [{
                           type: "name",
                           title: "Giờ hiện tại",
                           content: "Hiển thị giờ hệ thống hiện tại"
                       } ,{
                           type: "name",
                           title: "Múi giờ",
                           content: "Chọn múi giờ của bạn."
                       }]
},
        TIME_SETTING_DAYLIGHT :{ 
               TITLE:"Tiết kiệm thời gian ban ngày",
               CONTENT: [{
              type: "step",
                            title: "Để đặt Tiết kiệm Thời gian Ban ngày:",
              content:[
                "1. Chọn Tiết kiệm Thời gian Ban ngày.",
                "2. Chọn ngày và thời gian<b> Bắt đầu </b> đúng khi Tiết kiệm Thời Gian Ban ngày bắt đầu từ múi giờ địa phương của bạn.",
                "3. Chọn ngày và thời gian<b> Bắt đầu </b> đúng khi Tiết kiệm Thời Gian Ban ngày kết thúc từ múi giờ địa phương của bạn.",
                "4. Nhấp vào Lưu."]},
        {
          type:"name",
          title:"Trạng thái hiện tại",
          content:"Cho biết thời gian hiện tại có phải là trong thời gian tiết kiệm ánh sáng ban ngày hay không."
        }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Kiểm soát LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Control LED (Kiểm soát đèn LED) cho phép bạn Mở hoặc Tắt đèn LED trên bộ mở rộng sóng tùy theo một thời gian biểu cụ thể."
                       } ,{                      
                           type: "name",
                           title: "Chế độ ban đêm",
                           content: "Báo hiệu Chế độ Ban đêm đang Mở (Kích hoạt) hoặc Tắt (Vô hiệu hóa)."
                       } ,{                      
                           type: "name",
                           title: "Thời gian tắt LED",
                           content: "Chọn thời gian biểu để tắt đèn LED."
                       }]
},
        POWER_SCHEDULE :{ 
               TITLE:"Lịch biểu Điện",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kích hoạt chức năng này để tắt nguồn điện của bộ mở rộng theo thời gian biểu vì mục đích tiết kiệm điện."
                       } ,{                      
                           type: "name",
                           title: "Kích hoạt Lịch biểu Điện",
                           content: "Chọn tùy chọn này để kích hoạt Lịch biểu Điện."
                       } ,{                      
                           type: "name",
                           title: "Thời gian tắt điện",
                           content: "Chọn khoảng thời gian để tự động tắt nguồn điện bộ mở rộng."
                       } ,{                      
                           type: "name",
                           title: "(các)Ngày",
                           content: "Chọn (các) ngày tắt nguồn điện bộ mở rộng."
                       }]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Nâng cấp firmware",
               CONTENT: [{
                           type: "name",
                           title: "Phiên bản Firmware",
                           content: "Hiển thị phiên bản firmware (phần mềm hệ thống) hiện tại."
                       } ,{                      
                           type: "name",
                           title: "Phiên bản phần cứng",
                           content: "Hiển thị phiên bản phần cứng hiện tại."
                       } ,{                      
                           type: "step",
                           title: "QUAN TRỌNG: Để đề phòng nâng cấp thất bại, vui lòng lưu ý:",
       content: [ 
                "1. Tập tin nâng cấp firmware phải tương thích với phiên bản phần cứng hiện tại của bộ mở rộng sóng của bạn.",
                "2. Bạn cần phải duy trì nguồn điện cho bộ mở rộng sóng trong suốt quá trình nâng cấp firmware, vì mất nguồn trong quá trình nâng cấp sẽ có thể làm hỏng bộ mở rộng sóng của bạn."]
} ,{                      
                           type: "step",
                           title: "Để nâng cấp firmware cho bộ mở rộng sóng:",
       content: [ 
                "1. Tải tập tin nâng cấp firmware mới nhất từ <a class=\"link\" href=\"http://www.tp-link.vn/Support/\" target=\"_blank\">TP-Link Support</a> về máy tính của bạn.",
                "2. Bấm chọn <strong>Duyệt để</strong> xác định và chọn tập tin đã tải.",
                "3. Bấm chọn <strong>Nâng cấp</strong>."]
} ,{                      
                           type: "paragraph",
                           content: "Việc nâng cấp sẽ mất khoảng vài phút để hoàn tất và bộ mở rộng sóng sẽ tự động khởi động lại sau khi đã hoàn tất"
                       }]
},
       BACKUP_RESTORE_BACKUP :{ 
               TITLE:"Sao lưu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Chúng tôi khuyến nghị bạn sao lưu cấu hình hiện tại của bạn, đề phòng trường hợp cần khôi phục cấu hình hệ thống về trạng thái trước đó hoặc từ cài đặt gốc."
                       } ,{                      
                           type: "paragraph",
                           content: "Bấm chọn Sao lưu để lưu cấu hình hiện tại thành tập tin config.bin trên máy tính của bạn. Vui lòng đảm bảo lưu tập tin này vào một phân vùng an toàn, nơi bạn có thể truy xuất để sử dụng khi cần."
                       }]
},
       BACKUP_RESTORE_RESTORE :{ 
               TITLE:"Phục hồi",
               CONTENT: [{
                           type: "step",
                           title: "Để khôi phục cài đặt của bạn từ tập tin sao lưu:",
       content: [ 
                "1. Bấm chọn Duyệt để xác định vị trí tập tin sao lưu của bạn.",
                "2. Chọn tập tin sao lưu.",
                "3. Bấm chọn Khôi phục.",
                "4. Bấm chọn <strong>Có</strong> để xác nhận khôi phục hệ thống.",
                "Quá trình khôi phục sẽ có thể mất vài phút để hoàn tất và bộ mở rộng sóng sẽ tự động khởi động lại sau khi đã hoàn tất."]
}]
},
       BACKUP_RESTORE_FACTORY :{ 
               TITLE:"Khôi phục cài đặt gốc",
               CONTENT: [{
                           type: "paragraph",
                           content: "Bấm chọn Khôi phục cài đặt gốc để khôi phục cài đặt bộ mở rộng sóng của bạn về cài đặt gốc của thiết bị."
                       } ,{                      
                           type: "note",
                            title: "Lưu ý",
                            content: [
                              "1. Khôi phục cài đặt gốc sẽ xóa tất cả cài đặt mà bạn đã cấu hình cho bộ mở rộng sóng. Để đăng nhập lại vào trang web quản lý của bộ mở rộng sóng, vui lòng sử dụng tên đăng nhập và mật mã là admin.",
                              "1. Khôi phục cài đặt gốc sẽ xóa tất cả cài đặt trước  của bộ mở rộng sóng. Vui lòng tạo mật mã cho các lần đăng nhập sau.",
                              "2. Vui lòng KHÔNG tắt nguồn bộ mở rộng sóng trong suốt quá trình nâng cấp hoặc khôi phục cài đặt gốc."
                            ]
                       }]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Tài khoản quản trị viên",
               CONTENT: [{
                           type: "paragraph",
                           content: "Trang này cho phép bạn thay đổi tên đăng nhập và/hoặc mật khẩu mặc định của bạn."
                       } ,{                      
                           type: "paragraph",
                           content: "Bạn có thể thay đổi mật mã đăng nhập của bạn tại trang này."
                       } ,{                      
                           type: "name",
                           title: "Tên đăng nhập cũ",
                           content: "Nhập tên đăng nhập hiện tại của bạn."
                       } ,{                      
                           type: "name",
                           title: "Mật mã cũ",
                           content: "Nhập mật mã hiện tại của bạn."
                       } ,{                      
                           type: "name",
                           title: "Tên đăng nhập mới",
                           content: "Nhập tên đăng nhập mới."
                       } ,{                      
                           type: "name",
                           title: "Mật mã mới",
                           content: "Nhập mật mã mới."
                       } ,{                      
                           type: "name",
                           title: "Xác nhận mật mã",
                           content: "Nhập lại mật mã mới của bạn."
                       }]
},
       SYSTEM_LOG :{ 
               TITLE:"Giúp đỡ bản ghi hệ thống",
               CONTENT: [{
                           type: "paragraph",
                           content: "Trang Bản ghi Hệ thống hiển thị danh sách các hoạt động (sự kiện) gần đây của bộ mở rộng sóng. Bạn có thể xác định dạng bản ghi và/hoặc cấp độ bản ghi bạn muốn xem."
                       } ,{                      
                           type: "name",
                           title: "Dạng",
                           content: "Chọn dạng bản ghi bạn muốn xem."
                       } ,{                      
                           type: "name",
                           title: "Cấp độ",
                           content: "Chọn cấp độ bản ghi bạn muốn xem."
                       } ,{                      
                           type: "name",
                           title: "Làm mới",
                           content: "Bấm chọn nút này để cập nhật bản ghi hệ thống."
                       } ,{                      
                           type: "name",
                           title: "Xóa tất cả",
                           content: "Bấm chọn nút này để xóa bỏ vĩnh viễn tất cả bản ghi."
                       } ,{                      
                           type: "name",
                           title: "Lưu bản ghi",
                           content: "Bấm chọn nút này để lưu bản ghi hệ thống thành tập tin .txt"
                       }]
},
    });
})(jQuery);
