// JavaScript Document
(function($){

$.su.Widget("switchbutton", {
	defaults: {
		handler: null,
		onHandler: null,
		onCallback: null,
		onValue: "on",
		offValue: "off",

		//defaultValue: "off",

		onText: $.su.CHAR.OPERATION.ON,
		offText: $.su.CHAR.OPERATION.OFF,

		offHandler: null,
		offCallback: null,

		cls: "",

		//以下是ajax相关
		proxy: null,
		field: null,
		autoLoad: true
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var input = $(obj);
			$.extend(obj, defaults, options);

			if (obj.proxy && !obj.proxy.isProxy){
				obj.proxy = new $.su.Proxy(obj.proxy);
			};

			var inHTML = 	"<div class=\"container widget-container switch-button-container off "+obj.cls+"\">";

			if (obj.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+obj.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel switch-button-fieldlabel\">"+obj.fieldLabel+"</label>";
				if (obj.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+obj.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<div class=\"widget-wrap-outer switch-button-wrap-outer\">";
				inHTML +=			"<a class=\"switch-button-btn off\" href=\"javascript:void(0);\">";

				inHTML +=				"<span class=\"switch-button-btn-wrap\">";

				inHTML +=					"<span class=\"switch-button-text-wrap\">";
				inHTML +=						"<span class=\"switch-button-text on\">"+obj.onText+"</span>";
				inHTML +=						"<span class=\"switch-button-text off\">"+obj.offText+"</span>";
				inHTML +=					"</span>";

				inHTML +=					"<span class=\"switch-button-btn-slider\"></span>";

				inHTML += 				"</span>";
				inHTML +=			"</a>";

				inHTML +=			"<div class=\"loading-wrap\">";
				inHTML +=				"<div class=\"loading-wrap-outer\">";
				inHTML +=					"<span class=\"loading\"></span>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";

			if (this.tips != null && this.tips != undefined){
				inHTML +=			"<div class=\"widget-tips switch-button-tips "+obj.tipsCls+"\">";
				inHTML +=				"<div class=\"content tips-content\"></div>";
				inHTML +=			"</div>";
			};

				inHTML +=			"<div class=\"widget-error-tips switch-button-error-tips "+obj.errorTipsCls+"\">";
				inHTML +=				"<span class=\"widget-error-tips-delta\"></span>";
				inHTML +=				"<div class=\"widget-error-tips-wrap\">";
				inHTML +=					"<div class=\"content error-tips-content\"></div>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";
					
				inHTML +=		"</div>";

				inHTML +=	"</div>";

			var container = $(inHTML);
			input.replaceWith(container);
			container.prepend(input.addClass("hidden"));

		});

		var container = me.closest("div.switch-button-container");
		container.delegate("a.switch-button-btn", "click", function(e){
			var btn = $(this);
			var obj = me.get(0);
			if (btn.hasClass("disabled")){
				return;
			};
			
			var value = obj.defaultValue;
			if (btn.hasClass("on")){
				value = obj.offValue;
			}else{
				value = obj.onValue;
			};

			me.switchbutton("startWaiting");

			var proxy = obj.proxy;
			if (!proxy || !proxy.isProxy){
				me.switchbutton("setValue", value);
				
				me.switchbutton("stopWaiting");
			}else{
				var dd = {};
				var	name = me.attr("name");
				dd[name] = value;
				
				proxy.write(dd, function(){
					me.switchbutton("stopWaiting");
				}, function(){
					me.switchbutton("stopWaiting");
				}, function(){
					me.switchbutton("stopWaiting");
				});
			};

		});


		var obj = me.get(0);
		var v = obj.value || obj.defaultValue;
		if (v){
			me.switchbutton("setValue", v);
		};

		var proxy = obj.proxy;
		var field = obj.field;

		if (proxy && proxy.isProxy){
			if (!field){
				//console.error("No field found for switchbutton!");
				return false;
			};

			proxy = $(proxy);

			proxy.on("ev_read", function(e, result, status, xhr){
				//console.log("ev_read", arguments);
				me.switchbutton("loadData", result);

			}).on("ev_write", function(e, result, status, xhr){
				//console.log("ev_write", arguments);
				me.switchbutton("loadData", result);

			})/*.on("ev_failed", function(e, errorcode, others, data){
				me.switchbutton("stopWaiting");
			}).on("ev_error", function(e, errorcode, others, data){
				me.switchbutton("stopWaiting");
			})*/;

			if (obj.autoLoad){
				obj.proxy.read();
			}
		};

		return me;
	},
	loadData: function(me, data){
		var me = me || this;
		var obj = me.get(0);
		var field = obj.field;
		var data = data[1];

		var name = field.name;
		var	mapping = field.mapping || name;
		var	dd = data[mapping];

		me.switchbutton("setValue", dd);

		var onValue = obj.onValue;
		var onCallback = obj.onCallback;
		var offCallback = obj.offCallback;

		if (onValue == dd){
			if (onCallback){
				onCallback.call(me, dd)
			};
		}else{
			if (offCallback){
				offCallback.call(me, dd)
			};
		};

		me.trigger("ev_loadData", [data, dd]);
		return me;
	},
	getValue: function(me){
		var me = me || this;
		var obj = me.get(0);

		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");

		if (btn.hasClass("on")){
			return obj.onValue;
		}else{
			return obj.offValue;
		};
	},
	setValue: function(me, value){
		var me = me || this;
		var obj = me.get(0);
		var value = value[1] || obj.offValue;

		var onValue = obj.onValue;

		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");
		var slider = btn.find("span.switch-button-btn-slider");

		if (onValue == value){
			slider.css({
				"right": 0,
				"left": "inherit"
			});

			btn.addClass("on");
			container.addClass("on");

			btn.removeClass("off");
			container.removeClass("off");

			if (obj.handler){
				obj.handler.call(me, value);
			};

			if (obj.onHandler){
				obj.onHandler.call(me, value);
			};
		}else{
			slider.css({
				"right": "inherit",
				"left": 0
			});

			btn.removeClass("on");
			container.removeClass("on");

			btn.addClass("off");
			container.addClass("off");

			if (obj.handler){
				obj.handler.call(me, value);
			};

			if (obj.offHandler){
				obj.offHandler.call(me, value);
			};
		};

		me.val(value);
		return me;
	},
	disable: function(me) {
		var me = me || this;
		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");

		container.addClass("disabled");
		btn.addClass("disabled");

		return me;
	},
	enable: function(me) {
		var me = me || this;
		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");

		container.removeClass("disabled");
		btn.removeClass("disabled");
		
		return me;
	},
	startWaiting: function(me){
		var me = me || this;
		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");

		btn.addClass("disabled");
		container.find("div.loading-wrap-outer").fadeIn(50);
		return me;
	},
	stopWaiting: function(me){
		var me = me || this;
		var container = me.closest("div.switch-button-container");
		var btn = container.find("a.switch-button-btn");

		container.find("div.loading-wrap-outer").fadeOut(50, function(){
			btn.removeClass("disabled");
		});

		return me;
	}
});

})(jQuery);