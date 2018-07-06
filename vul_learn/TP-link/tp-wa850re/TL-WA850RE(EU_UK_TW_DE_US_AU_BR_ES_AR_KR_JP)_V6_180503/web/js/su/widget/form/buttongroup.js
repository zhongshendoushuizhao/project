// JavaScript Document
(function($){

$.su.Widget("buttongroup", {
	defaults: {
		btnsType: "on/off",		//默认有两种 on/off low/middle/high
		handler: null,
		onHandler: null,
		onCallback: null,
		onValue: "on",
		offValue: "off",
		lowValue: "low",
		middleValue: "middle",
		highValue: "high",
		offHandler: null,
		offCallback: null,
		lowHandler: null,
		middleHandler: null,
		highHandler: null,
		items: null,
		url: null,
		cls: "",
		value: "",

		//以下是ajax相关
		proxy: null,
		field: null,
		autoLoad: true
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var type = "";
			if (obj.btnsType == "on/off" && obj.items == null){
				type = "on-off-container";
			};

			if (obj.proxy && !obj.proxy.isProxy){
				obj.proxy = new $.su.Proxy(obj.proxy);
			};

			var inHTML = 	"<div class=\"container widget-container button-group-container "+obj.cls+" "+type+"\">";

			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel button-group-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";				
			};

				inHTML +=		"<div class=\"widget-wrap-outer button-group-wrap-outer\">";
				inHTML += 			"<div class=\"widget-wrap button-group-wrap\">";
				inHTML += 				"<ul class=\"button-group-container\"></ul>";
				inHTML +=			"</div>";

			/*if (this.tips){
				inHTML +=		"<span class=\"widget-tips text-tips "+this.tipsCls+"\">"+this.tips+"</span>";
			};*/
			if (this.tips != null && this.tips != undefined){
				inHTML +=			"<div class=\"widget-tips textbox-tips "+obj.tipsCls+"\">";
				inHTML +=				"<div class=\"content tips-content\"></div>";
				inHTML +=			"</div>";
			};

				inHTML +=			"<div class=\"widget-error-tips textbox-error-tips "+obj.errorTipsCls+"\">";
				inHTML +=				"<span class=\"widget-error-tips-delta\"></span>";
				inHTML +=				"<div class=\"widget-error-tips-wrap\">";
				inHTML +=					"<div class=\"content error-tips-content\"></div>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";

				inHTML +=		"</div>";
				inHTML +=	"</div>";
		


			var container = $(inHTML);
				tar.replaceWith(container);
				container.append(tar.addClass("hidden button-group-value"));


			if (obj.items == null){
				switch (obj.btnsType){
					case "on/off":
						obj.items = [
							{text: $.su.CHAR.OPERATION.ON, handler: obj.onHandler, value: obj.onValue, callback: obj.onCallback},
							{text: $.su.CHAR.OPERATION.OFF, handler: obj.offHandler, value: obj.offValue, callback: obj.offCallback}
						];
						break;
					case "low/middle/high":
						obj.items = [
							{text: $.su.CHAR.OPERATION.LOW, handler: obj.lowHandler, value: obj.lowValue, callback: obj.lowCallback},
							{text: $.su.CHAR.OPERATION.MIDDLE, handler: obj.middleHandler, value: obj.middleValue, callback: obj.middleCallback},
							{text: $.su.CHAR.OPERATION.HIGH, handler: obj.highHandler, value: obj.highValue, callback: obj.highCallback}
						];
						break;
					default:
						//console.error("Invalid Type buttongroup!");
						return false;
						break;
				}
			};
				

			var items = obj.items,
				btnUl = container.find("ul.button-group-container");

			for (var index = 0; index < items.length; index++){
				var item = items[index],
					posCls = (index === 0) ? "fst" : (index === (items.length-1) ? "lst" : "");

				var inHTML = 	"<li>";
					inHTML +=		"<button type=\"button\" value=\""+((item.value === undefined || item.value === null) ? "" : item.value)+"\" class=\"button-group-button "+posCls+" "+(item["cls"] || "s")+"\" item-index=\""+index+"\">";
					inHTML +=			"<span class=\"button-text\">"+item.text+"</span>";
					inHTML +=		"</button>";
					inHTML +=	"</li>";

				btnUl.append($(inHTML));
			};
		});

		var container = me.closest("div.button-group-container")
		container.delegate("button.button-group-button", "click", function(e){
			var btn = $(this),
				value = btn.val() || btn.attr("value"),
				btnGroupContainer = btn.closest("ul.button-group-container"),
				obj = me.get(0),
				item = obj.items[btn.attr("item-index")];

			if (!item){
				return;
			};

			btnGroupContainer.find("button").removeClass("selected");
			btnGroupContainer.find("li").removeClass("selected");

			btn.addClass("selected");
			btn.closest("li").addClass("selected");

			if (!obj.proxy || !obj.proxy.isProxy){
				me.buttongroup("setValue", item.value);
			}else{
				//console.log(me.attr("name"), item.value)
				var dd = {},
					name = me.attr("name"),
					val = item.value;
				dd[name] = val;
				
				obj.proxy.write(dd, function(){
					if (item.callback){
						//console.log("item.callback")
						item.callback.call(me, value);
						//console.log(i, item.handler.toString())
					};
				});
			};
			
			//console.log(item);
		});

		var obj = me.get(0),
			value = obj.value,
			proxy = obj.proxy,
			field = obj.field;

		if (value !== undefined && value !== null){
			me.buttongroup("setValue", value);
		};

		if (proxy && proxy.isProxy){
			
			if (!field){
				//console.error("No field found for buttongroup!");
				return false;
			};

			proxy = $(proxy);

			proxy.on("ev_read", function(e, result, status, xhr){
				me.buttongroup("loadData", result);
			});

			proxy.on("ev_write", function(e, result, status, xhr){
				me.buttongroup("loadData", result);
			});

			if (obj.autoLoad){
				obj.proxy.read();
			}
		};

		me.buttongroup("setTips", options.tips);
		
		return me;
	},
	loadData: function(me, data){
		var me = me || this,
			obj = me.get(0),
			field = obj.field,
			data = data[1] || [];

		var name = field.name,
			mapping = field.mapping || name,
			dd = data[mapping];

		me.buttongroup("setValue", dd);
		me.trigger("ev_loadData", [data, dd]);
		return me;
	},
	setValue: function(me, value){
		var me = me || this,
			container = me.closest("div.button-group-container"),
			valueBox = container.find("input.button-group-value"),
			value =(value[1] === null || value[1] === undefined) ?  "" : value[1],
			items = me.get(0).items;


		var btns = container.find("button.button-group-button");
		btns.removeClass("selected").closest("li").removeClass("selected");
		//btns.eq("[value=\""+value+"\"]").addClass("selected").closest("li").addClass("selected");

		btns.each(function(i, obj){
			var btn = $(obj),
				v = obj.value || btn.attr(value) || btn.val(),
				item = items[i];

			//console.log(v, value, item.value);
			//var v = (obj.value === null || obj.value === undefined) ? ((btn.attr(value) === null || btn.attr(value) === undefined) ? btn.val() : btn.attr(value)) : obj.value;
			//console.log(value, v);
			//console.log("v:", obj.value, btn.attr(value), btn.val());

			if (value == v){

				if (item.handler){
					item.handler.call(me, value);
					//console.log(i, item.handler.toString())
				};

				if (obj.handler){
					obj.handler.call(me, value);
				};

				btn.addClass("selected").closest("li").addClass("selected");
				return false;
			};
		});

		//console.log("[value=\""+value+"\"]", btns.eq("[value=\""+value+"\"]"));
		valueBox.val(value);
		return me;

	},
	getValue: function(me){
		var me = me || this,
			container = me.closest("div.button-group-container"),
			valueBox = container.find("input.button-group-value");
			//value = value[1] || "";

		return valueBox.val();
	},
	getProxy: function(me){
		var me = me || this,
			obj = me.get(0);

		if (obj && obj.proxy && obj.proxy.isProxy){
			return obj.proxy;
		}else{
			return undefined;
		};
	},
	disable: function(me){
		var me = me || this;
			container = me.closest("div.button-group-container"),
			buttons = container.find("button.button-group-button");

		buttons.prop("disabled", true);
		container.addClass("disabled");
		return me;
	},
	enable: function(me){
		var me = me || this;
			container = me.closest("div.button-group-container"),
			buttons = container.find("button.button-group-button");

		buttons.prop("disabled", false);
		container.removeClass("disabled");
		return me;
	}
});
	

})(jQuery);