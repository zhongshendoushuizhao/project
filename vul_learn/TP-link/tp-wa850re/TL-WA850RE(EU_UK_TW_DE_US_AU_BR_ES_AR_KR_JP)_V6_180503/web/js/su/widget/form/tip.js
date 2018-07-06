
// JavaScript Document
(function($){

$.su.Widget("tip", {
	defaults: {
		cls: "",
		icon: "",
		iconCls: "",

		_title: "",
		text: "",

		position: null,
		positionRelative: "mouse",	//或者是body, selector, me
		showEvent: "mouseover",		//或者是click
		showDelay: 1*1000,	//å½“ä¸º0åˆ™ä¸æ˜¾ç¤º
		dismissDelay: 1*1000,	//å½“ä¸º0åˆ™ä¸æ¶ˆå¤±

		//æ‰©å±•ï¼šå½“ç„¶å†…å®¹ä¸ºå¯¹è±¡æˆ–è€…å…¶ä»–çš„æ—¶å€?...
		html: null,
		content: null	//优先级： conent高于html, content传选择器！
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			this.tip = this.tip || {};
			
			var tip = $.extend(this.tip, defaults, options);
			if (this.tip.global){
				if (!this.tip.id){
					//console.error("You are init a global Tip, so you have to set an id for it!");
					return null;
				};
			};
			this.tip.id = this.tip.id || $.su.randomId("tip");

			var tar = $(this);
			var inHTML = 	"<div class=\"container widget-container tip-container "+this.tip.cls+"\" id=\""+this.tip.id+"\">";

				inHTML +=		"<div class=\"tip-wrap\">";
				inHTML +=			"<span class=\"tip-delta\"></span>";

			if (this.tip._title){
				inHTML +=			"<h4 class=\"tip-title\">"+this.tip._title+"</h4>";
			};

			if (this.tip.showEvent === "click"){
				inHTML +=				"<a href=\"javascript:void(0);\" class=\"tip-close\">x</a>";
			};
				
				inHTML +=			"<div class=\"tip-text\">"+this.tip.text+"</div>";
				inHTML +=		"</div>";
				inHTML +=	"</div>";

			var container = $(inHTML),
				contentContainer = container.find("div.tip-text");
			//内容部分
			if (this.tip.content){
				var content = $(this.tip.content),
					contentObj = content.get(0);
				if (contentObj.isWidget){
					contentContainer.append(content[contentObj.xtype]("getContainer"));
				}else{
					contentContainer.append(content);
				};
			}else if (this.tip.html){
				contentContainer.append($(html));
			};

			tip.hostId= tar.attr("id");
			tip.isTip = true;
			this.tip = $.extend(container.get(0), tip);

			$.su.tipManager.add(this.tip);

			tip.t = 0;
		});

		var tip = me.get(0).tip;
		if (tip.showEvent === "mouseover"){
			me.bind("mouseover", function(e){
				clearTimeout(this.tip.t);
				if (this.tip.showDelay){
					this.tip.t = setTimeout(function(){
						me.tip("show", e);
					}, this.tip.showDelay);
				};
			});

			me.bind("mouseout mouseleave", function(e){
				clearTimeout(this.tip.t);
				if (this.tip.dismissDelay){
					this.tip.t = setTimeout(function(){
						me.tip("hide");
					}, this.tip.dismissDelay);
				};
			});

		}else if (tip.showEvent === "click"){
			me.bind("click", function(e){
				$(this).tip("show", e);
			});

			$(tip).delegate("a.tip-close", "click", function(e){
				e.preventDefault();
				me.tip("hide");
			});
		};

		return me;
	},
	show: function(me, _e){
		var me = me || this,
			tip = me.get(0).tip,
			container = $(tip).tip("getContainer"),
			positionRelative = tip.positionRelative,
			ev = tip.position || {
				pageX: 0,
				pageY: 0
			};

		switch (positionRelative){
			case "mouse":
				ev = _e[1];
				break;
			case "body":
				break;
			case "me":
				if (me.is("div")){
					me.append($(tip).detach());
				}else{
					var p = me.parent();
					if (p.css("position") != "absolute"){
						p.css("position", "relative");
					};
					p.append($(tip).detach());
				}
				break;
			default:
				if ($(positionRelative).length > 0){
					$(positionRelative).append($(tip).detach());
				};
				break;
		};
			
		clearTimeout(tip.t);
		container.css({
			"left": ev.pageX,
			"top": ev.pageY
		}).fadeIn(200, function(){
			$(this).css("display", "block");
		});

		me.trigger("ev_show");
		return me;
	},
	hide: function(me){
		var me = me || this,
			tip = me.get(0).tip,
			container = $(tip).tip("getContainer");

		clearTimeout(tip.t);
		container.fadeOut(200, function(){
			$(this).css("display", "none");
		});

		me.trigger("ev_hide");
		return me;
	},
	setText: function(me, text){
		var me = me || this;
		var obj = me.get(0);
		var text = text[1];

		var tip = $(obj.tip);
		tip.find("div.tip-text").html(text);

		return me;
	}
});

})(jQuery);