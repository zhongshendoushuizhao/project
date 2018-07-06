// JavaScript Document
(function($){

$.su.Widget("page", {
	defaults: {
		_title: "",
		help: "...",
		showTitle: false
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);
			
			tar.find("h2.func-title").remove();

			var inHTML = "";
			if (obj.showTitle){
				inHTML += 	"<h2 class=\"func-title\">";
    			inHTML +=		"<span>"+obj._title+"</span>";
    			inHTML +=	"</h2>";
			};
    		
    // 		if (obj.help != null){
				// inHTML +=	"<div class=\"help-container\">";
    // 			inHTML +=		"<div class=\"btn-help-container\">";
				// inHTML +=			"<a class=\"btn-help closed\" name=\""+obj.help+"\" href=\"javascript:void(0);\"></a>";
				// inHTML +=		"</div>";
				// inHTML +=		"<div class=\"help-content-container\">";
				// inHTML +=		"</div>";
				// inHTML +=	"</div>";
    // 		};
			
			tar.prepend($(inHTML)).addClass("container widget-container page-container");
			
		});

		me.delegate("div.btn-help-container a.btn-help", "mousedown", function(e){
			var btn = $(this);
			btn.addClass("clicked");
		}).delegate("div.btn-help-container a.btn-help", "click", function(e){
			e.preventDefault();
			var contaienrWidth = $.su.help.width;
			var btn = $(this),
				btnContainer = btn.closest("div.btn-help-container");
			if (btn.hasClass("closed")){
				$("div.help-content-container").css("display", "block");
				btn.closest("div.help-container").animate({
					"width": "+="+contaienrWidth+"px"
				}, 200);
				var right = btnContainer.css("right");
				right = right.slice(0, right.length - 2);
				btnContainer.animate({
					"right": Math.abs(right) + contaienrWidth - btn.width()
				}, 200, function(e){
					btn.removeClass("closed");
				});

				if ($.su.CHAR.HELP){
					$.su.help.load(btn.attr("name"));
				}else{
					//这里需要选取文本路径~~~~~~~~~~~~~~~~~~~~~
					$.getScript("./locale/en_US/help.js", function(e){
						//console.log(btn.attr("name"));
						$.su.help.load(btn.attr("name"));
					});
				};
			}else{
				$("div.help-content-container").empty();
				btn.closest("div.help-container").animate({
					"width": "-=0"
				}, 200);
				var right = btnContainer.css("right");
				right = right.slice(0, right.length - 2);
				btnContainer.animate({
					"right": Math.abs(right) - contaienrWidth + btn.width()
				}, 200, function(){
					btn.addClass("closed");
				});
			};
		});
	}
	//可能要添加的功能，页面帮助模块
});

})(jQuery);