// JavaScript Document
(function($){
/*
interface textarea{
	
}
*/
//$.fn.textarea = function(options){
$.su.Widget("textarea", {
	defaults: {
		//id: "textarea-" + parseInt(Math.random()*1000*1000*1000, 10).toString(),
		value: "",
		name: "",

		isdisabled: false,
		isvalid: false,

		fieldLabel: "",

		tips: "",
		validator: null,
		invalidText: $.su.CHAR.INVALIDTEXT,
		vtype: null,
		vtypeText: null,
		allowBlank: true,
		blankText: $.su.CHAR.BLANKTEXT,
		cls: ""
	},

	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var input = $(this);
			if (!input.is("textarea")){
				//console.error("only textarea tag can be inited as textarea!");
				return null;
			};

			var id = options.id || this.id || "textarea-" + parseInt(Math.random()*1000*1000*1000, 10).toString(),
				value = options.value || this.value || defaults.value,
				name = options.name || this.name || defaults.name;
			//var clsName = this.className || "";

			$.extend(this, defaults, options);

			//重新初始化属性
			$(this).attr({
				value: value,
				id: id,
				name: name
			}).val(value).addClass("textarea-text"+" "+this.inputCls);

			//console.log(this._maxLength);

			if(this._maxLength){
				$(this).attr("maxlength", this._maxLength);
			};

			var inHTML = 	"<div class=\"container widget-container textarea-container "+this.cls+"\">";
				
			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel textarea-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<div class=\"widget-wrap-outer textarea-wrap-outer\">";
				inHTML +=			"<div class=\"widget-wrap textarea-wrap\">";
				inHTML +=				"<span class=\"text-wrap\"></span>";
				inHTML +=			"</div>";
				
				/*inHTML +=			"<div class=\"widget-tips textarea-tips "+obj.tipsCls+"\">";
				inHTML +=				"<div class=\"content tips-content\"></div>";
				inHTML +=			"</div>";*/
				if (this.tips != null && this.tips != undefined){
					inHTML +=		"<div class=\"widget-tips textbox-tips "+this.tipsCls+"\">";
					inHTML +=			"<div class=\"content tips-content\"></div>";
					inHTML +=		"</div>";
				};

					inHTML +=		"<div class=\"widget-error-tips textbox-error-tips "+this.errorTipsCls+"\">";
					inHTML +=			"<span class=\"widget-error-tips-delta\"></span>";
					inHTML +=			"<div class=\"widget-error-tips-wrap\">";
					inHTML +=				"<div class=\"content error-tips-content\"></div>";
					inHTML +=			"</div>";
					inHTML +=		"</div>";


				inHTML +=		"</div>";
				
				inHTML += 	"</div>";

			var container = $(inHTML);
			input.replaceWith(container);
			container.find("div.textarea-wrap span.text-wrap").append(input.detach());

			if (obj.readOnly){
				container.addClass("read-only");
				input.attr("readOnly", true)//.prop("disabled", true);
			};

			if (this.vtype){
				var vtype = this.vtype;
				if ($.type(vtype) === "string"){
					this.vtype = new $.su.vtype(vtype);
					if (this.vtypeText){
						this.vtype.vtypeText = this.vtypeText;
					};
				};
			};
		});

		var container = $(me.parents("div.widget-container").get(0));
		container.delegate("textarea.textarea-text", "focus", function(e){
			$(this).textarea("setFocus");
		}).delegate("textarea.textarea-text", "keyup blur", function(e){
			var t = $(this);
			if (document.all){
				var m = t.attr("maxlength");
				if (m){
					var v = t.val();
					v = v.substring(0, m);
					t.val(v);
				};
			};
			t.textarea("validate");
		}).delegate("textarea.textarea-text", "ev_validatechange", function(e, isValid, tips){
			e.stopPropagation();
			//console.log(arguments)
			if (isValid){
				$(this).textarea("setNormal");
			}else{
				$(this).textarea("setError", tips);
			};
		});

		//me.textarea("setTips", options.tips);
		
		return me;
	},
	validate: function(me, flag){
		//console.log("validate run!")
		var me = me || this,
			tar = me.get(0),
			result = false,
			value = $.trim(me.val()),
			flag = (flag[1] === false) ? false : true;

		var returnResult = function(me, resultText, val){
			if (resultText === true){
				if (flag){
					$(tar).trigger("ev_validatechange", [true, tar.tips]);
				};
				return true;
			}else{
				if (!resultText){
					resultText = tar.tips;
					//console.log("textbox no error tips!", tar.name);
				};
				if (flag){
					$(tar).trigger("ev_validatechange", [false, resultText]);
				};
				return false;
			};
			me.isValid = result;
			return result;
		};

		//console.log(tar, value)

		if (tar){
			//空白验证
			if (value === ""){
				if (tar.allowBlank !== true){
					result = false;
					return returnResult(tar, tar.blankText);
				}else{
					result = true;
					return returnResult(tar, true);
				};
			}else{
			/*
				if (!$.su.unicode.lengthCheck(value, tar._minLength, tar._maxLength)){
					result = false;
					return returnResult(tar, tar.invalidText);
				};
			*/
				//vtype验证
				var vtype = tar.vtype;
				if (vtype && vtype.isVtype === true){
					result = vtype.validate(value);

					//console.log("t, result")
					if (result !== true){
						if (result.result === false){
							return returnResult(tar, vtype.vtypeText);
						}else{
							return returnResult(tar, result);
						};
					};
				};
				
				//validator验证
				if (tar.validator){
					result = tar.validator(tar.value);
					if ($.type(result) !== "boolean"){
						//result = false;
						return returnResult(tar, result);
					};
					if (result !== true){
						return returnResult(tar, tar.invalidText);
					};
				};
			};

			//me.val(value);
			return returnResult(tar, true);
		};

		return result;
	},
	setValue: function(me, params){
		var me = me || this,
			value = params[1] || "";

		//console.log("textarea", value);


		me.val(value);

		/*if (true){
			me.css("height", );
		}*/

		/*if (true){
			me.height(me.css("line-height"))
		}*/
	}
});

})(jQuery);