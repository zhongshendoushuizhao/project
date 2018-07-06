// JavaScript Document
(function($){

$.su.Widget("time", {
	defaults: {
		fieldLabel: "",
		tips: "",
		cls: "",

		value: "24:00:00",
		maxValue: "24:00:00",
		minValue: "00:00:00",

		format: "h:m:s",	//h:t:s, h:t. t:s等组合形式
		allowBlank: true,

		widgetName: "time"
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(this);
			if (!tar.is("input")){
				//console.error("only input tag can be inited as time box!");
				return null;
			};
			$.extend(this, defaults, options);

			var id = options.id || this.id || "textbox-" + parseInt(Math.random()*1000*1000*1000, 10).toString();
			tar.attr({
				id: id
			});

			var inHTML = 	"<div class=\"container widget-container combobox-container time-container "+this.cls+"\">";
				
			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel time-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

			var _format = this.format,
				_sepMark = this.format.charAt(1),
				_pattern = /^[A-Za-z0-9]+$/;	//判断切分字符

			if (_pattern.test(_sepMark)){
				//console.error("Maybe wrong type of the separator: ", _sepMark);
			};

				inHTML += 	"<div class=\"widget-wrap-outer time-wrap-outer\">"

			var params = _format.split(_sepMark),
				len = params.length;
			obj.separator = _sepMark;
			for (var index = 0; index < len; index++){
				var param = params[index],
					_param = "",
					_len = 24,
					_lst = (index === len-1) ? "lst": "";
				switch (param){
					case "h":
						//小时
						_param = "hour";
						_len = 24;
						break;
					case "m":
						//分钟
						_param = "min";

						_len = 60;
						break;
					case "s":
						//秒钟
						_param = "sec";
						_len = 60;
						break;
				};

				inHTML +=	"<div class=\"combobox-container widget-wrap time-wrap "+_param+"-container "+_lst+"\">";
				inHTML +=		"<div class=\"combobox-wrap time-wrap "+_param+"-wrap\">";
				inHTML += 			"<input readonly=\"readonly\" class=\"combobox-text time-text "+_param+"-text\" maxlength=\"2\" value=\""+_param+"\" data-type=\""+param+"\" />";
				inHTML += 			"<a class=\"combobox-switch time-switch "+_param+"-switch\" href=\"javascript:void(0);\">";
				inHTML += 				"<span class=\"icon\"></span>";
				inHTML += 			"</a>";
				inHTML +=			"<div class=\"combobox-list-wrap time-list-wrap "+_param+"-list-wrap\" toggleflag=\"hidden\" >";

				inHTML +=				'<div class="position-top-left"></div><div class="position-top-center"></div>';/////
				inHTML +=				'<div class="position-center-left"><div class="position-center-right">';/////
				
				inHTML +=				"<div class=\"combobox-list-content-wrap\">";//////
				inHTML +=				"<ul class=\"combobox-list time-list "+_param+"-list\">";

				for (var jndex = 0; jndex < _len; jndex++){
					var text = jndex.toString().charAt(1) == "" ? "0"+jndex : jndex;
					inHTML +=				"<li class=\"combobox-list time-list\" data-index=\""+text+"\">";
					inHTML +=					"<label class=\"combobox-label time-label\" >"+text+"</label>"
					inHTML +=				"</li>";
				};
				
				inHTML +=				"</ul>";
				inHTML +=				"</div>";/////

				inHTML +=				'</div></div>';///////
				inHTML +=				'<div class="position-bottom-left"></div><div class="position-bottom-center"></div>';///////////
				inHTML +=			"</div>";
				inHTML +=		"</div>";
				inHTML +=	"</div>";


				if (index != len-1){
					inHTML += 	"<span class=\"time-separator\">"+_sepMark+"</span>";
				};
			};

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
			container.append(tar.addClass("time-value hidden"));
		});
		
		//事件监听
		var container = $(me.parents("div.time-container").get(0));
		container.delegate("a.time-switch", "click", function(e){
			//下拉开关
			e.stopPropagation();
			var swicth = $(this),
				wrap = swicth.parent("div.time-wrap").find("div.time-list-wrap"),
				toggleFlag = wrap.attr("toggleflag") || "hidden";

			$("div.combobox-list-wrap").hide().attr("toggleflag", "hidden");
			if (toggleFlag != "shown"){
				wrap.slideDown(150, function(e){
					$(this).css({
						display: "block"
					});
				}).attr("toggleflag", "shown");
			}else{
				wrap.hide().attr("toggleflag", "hidden");
			};
		});/*.delegate("input.time-text", "keydown", $.su.vtype.types.number.keybordHandler
		.delegate("input.time-text", "keydown", function(e){
			//只允许数据
			e.stopPropagation();
			var keyCode = e.keyCode,
				shiftKey = e.shiftKey,
				ctrlKey = e.ctrlKey;

			if (shiftKey){
				return false;
			};

			if (keyCode == 37 || keyCode == 39){
				return true;
			};

			if (keyCode == 38 || keyCode == 40){
				var input = $(this),
					_value = input.val();

				if ($.su.vtype.types.number.regex.test(_value)){
					if (keyCode == 38){
						var _maxValue = input.hasClass("hour-text") ? 23: 59;
						if (_value < _maxValue){
							input.val(parseInt(_value, 10)+1);
						}else{
							return false;
						};
					}else{
						if (_value == 0){
							return false;
						}else{
							input.val(parseInt(_value, 10)-1);
						}
					};
				}else{
					input.val(0);
				};
			};

			if (!ctrlKey){
				if ((keyCode < 48 || keyCode > 57) && keyCode > 32){
					return false;
				};
			};
		}).delegate("input.time-text", "blur", function(e){
			e.stopPropagation();
			var tar = $(this),
				input = tar.closest("div.time-container").find("input.time-value"),
				_value = parseInt(tar.val(), 10);

			if (input.time("validate")){
				var lis = tar.parent("div.time-wrap").find("li.time-list").removeClass("selected");
				for (var index = 0; index < lis.length; index++){
					var tarLi = $(lis.get(index))
					if (parseInt(tarLi.children("label.time-label").html(), 10) == _value){
						tarLi.addClass("selected")
					};
				};

				if (_value < 10 && _value > 0){
					tar.val("0"+_value);
				}
			};
			
		})*/
		container.delegate("label.time-label", "click", function(e){
			e.stopPropagation();
			var tar = $(this),
				type = tar.attr("data-type"),
				wrap = tar.parents("div.time-list-wrap"),
				container = me.closest("div.time-container"),
				obj = me.get(0),
				format = obj.format,
				separator = obj.separator;

			wrap.find("li.time-list").removeClass("selected");
			tar.parent("li.time-list").addClass("selected");

			wrap.hide().attr("toggleflag", "hidden");

			tar.closest("div.time-wrap").find("input.time-text").val(tar.html());

			//赋值
			var h = container.find("input.hour-text").val() || "00",
				m = container.find("input.min-text").val() || "00",
				s = container.find("input.sec-text").val() || "00";
			
			var formats = format.split(separator),
				value = "";
			for (var index = 0, len = formats.length; index < len; index++){
				var param = formats[index];
				switch (param){
					case "h":
						value = value + h + separator;
						break;
					case "m":
						value = value + m + separator;
						break;
					case "s":
						value = value + s + separator;
						break;
				};
			};
			value = value.slice(0, value.length-1);
			me.val(value);
		});

		container.delegate("div.time-wrap.lst label.time-label", "click", function(e){
			me.time("validate");
		});

		me.on("ev_validatechange", function(e){
			e.stopPropagation();
		});

		//赋值
		if (me.val()){
			me.time("setValue", me.val());
		};

		me.time("setTips", options.tips);

		return me;
	},
	/*reset: function(me){
		var me = me || this;

		return me;
	},*/
	getHour: function(me){
		var me = me || this,
			container = me.closest("div.time-container");

		var hourText = container.find("input.hour-text");

		return hourText.val();
	},
	getMin: function(me){
		var me = me || this,
			container = me.closest("div.time-container");

		var minText = container.find("input.min-text");

		return minText.val();
	},
	getSec: function(me){
		var me = me || this,
			container = me.closest("div.time-container");

		var secText = container.find("input.sec-text");

		return secText.val();
	},
	setValue: function(me, value){
		var me = me || this,
			container = me.closest("div.time-container"),
			obj = me.get(0),
			format = obj.format,
			separator = obj.separator,
			value = value[1];

		var values = value.split(separator),
			formats = format.split(separator);

		for (var index = 0, len = formats.length; index < len; index++){
			var fmt = formats[index],
				val = values[index];
			//console.log(val, fmt)
			switch(fmt){
				case "h":
					container.find("input.hour-text").val(val);
					var lis = container.find("div.hour-container li.time-list").removeClass("selected");
					lis.filter("[data-index="+val+"]").addClass("selected");
					break;
				case "m":
					container.find("input.min-text").val(val);
					var lis = container.find("div.min-container li.time-list").removeClass("selected");
					lis.filter("[data-index="+val+"]").addClass("selected");
					break;
				case "s":
					container.find("input.sec-text").val(val);
					var lis = container.find("div.sec-container li.time-list").removeClass("selected");
					lis.filter("[data-index="+val+"]").addClass("selected");
					break;
			};
		};
		
		me.val(value);
		return me;
	},
	getValue: function(me){
		var me = me || this;
		return me.val();
	},
	validate: function(me){
		var me = me || this,
			obj = me.get(0),
			validator = obj.validator,
			value = me.val(),
			result = true;

		//alert(value)

		if (validator){
			return validator.call(me, value);
		};

		me.trigger("ev_validatechange", result);
		return result;
	},
	getContainer: function(me){
		var me = me || this;
		return me.closest("div.time-container");
	}
});

})(jQuery);