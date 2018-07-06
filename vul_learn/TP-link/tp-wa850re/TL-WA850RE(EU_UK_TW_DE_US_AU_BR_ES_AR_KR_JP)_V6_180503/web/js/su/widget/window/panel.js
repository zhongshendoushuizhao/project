// JavaScript Document
(function($){

$.su.Widget("panel", {
	defaults: {
		_title: "",
		icon: "",
		iconCls: "",

		panelType: "form",

		collapsible: false,
		collapsed: false,	//属性

		help: false,
		helpHandler: null	//function(e) e.data.panel 为panel对象！

	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(this);
			$.extend(this, defaults, options);

			var display = this.collapsed === false ? "block" : "none";

			//var inHTML = 	"<div class=\"container widget-container panel-container "+this.cls+"\">";
			var	inHTML =		"<div class=\"panel-wrap\">";
			var collapsed = this.collapsed ? "collapsed" : "";

			if (!(this._title == "")){

				inHTML +=			"<div class=\"panel-header\">";
				inHTML +=				"<h3 class=\"panel-title\">";
				inHTML +=					"<span class=\"panel-title-icon\"></span>";
				inHTML +=					"<span class=\"panel-title-text\">"+this._title+"</span>";
				inHTML +=					"<div class=\"panel-header-btn-container\">";

				/*if (this.help){
					inHTML +=					"<button class=\"panel-header-btn-help\" type=\"button\" title=\"help\"></button>";
				}*/

				if (this.collapsible){
					inHTML +=					"<button class=\"panel-header-btn-collapse "+collapsed+"\" type=\"button\"></button>";
				};

				inHTML +=					"</div>"
				inHTML +=				"</h3>";
				inHTML +=			"</div>";

			};

				inHTML +=			"<div class=\"panel-content\" style=\"display: "+display+"\">";
				inHTML +=				"<div class=\"panel-tbar-container\"></div>";
				inHTML +=				"<div class=\"panel-content-container\"></div>";
				inHTML +=				"<div class=\"panel-fbar-container\"></div>";
				inHTML +=			"</div>";
				inHTML +=		"</div>";
			//	inHTML +=	"</div>";


			//这里的节点插入需要考虑事件监听
			/*var container = $(inHTML),
				posTag = $("<div class=\"div-pos-tag\"></div>");
			tar.after(posTag).detach();
			posTag.replaceWith(container).remove();
			container.find("div.panel-content-container").append(tar.addClass("panel-main"));*/

			var content = $(inHTML);
			content.find("div.panel-content-container").append(tar.children().detach())
			//console.log(tar)
			tar.append(content).addClass("container widget-container panel-container "+this.cls);

			this.isPanel = true;

		});

		me.delegate("button.panel-header-btn-collapse", "click", function(e){
			var btn = $(this),
				container = btn.closest("div.panel-container"),
				content = container.find("div.panel-content");
				//tar = _content.find(".panel-main");
			//console.log(container.get(0))
			if (container.get(0).collapsed){
				content.slideDown(200, function(){
					$(this).css("display", "block");
					btn.removeClass("collapsed");
				});
				container.get(0).collapsed = false;
			}else{
				content.slideUp(200, function(){
					$(this).css("display", "none");
					btn.addClass("collapsed");
				});
				container.get(0).collapsed = true;
			}
		});
		
		if ($.type(options.helpHandler) === "function"){
			container.delegate("button.panel-header-btn-help", "click", {
				panel: $(this)
			}, options.helpHandler)
		};

		return me;
	},
	setTitle: function(me, title){
		var me = me || this,
			container = me.closest("div.panel-container"),
			title = title[1];

		if (!title){
			return me;
		};

		container.find("h3.panel-title span.panel-title-text").html(title);

		return me;
	},
	getContainer: function(me){
		var me = me || this;
		return me;
	}
});


})(jQuery);