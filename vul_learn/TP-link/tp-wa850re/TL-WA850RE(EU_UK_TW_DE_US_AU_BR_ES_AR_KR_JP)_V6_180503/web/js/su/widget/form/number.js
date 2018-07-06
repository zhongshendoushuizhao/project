(function($){

$.su.Widget("number", {
	defaults: {
		fieldLabel: "",
		tips: "",
		cls: "",

		isdisabled: false,
		isvalid: false,

		maxValue: null,
		minValue: null,

		validator: null,
		invalidText: $.su.CHAR.INVALIDTEXT,
		allowBlank: true,
		blankText: $.su.CHAR.BLANKTEXT,

		isNumber: true
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var input = $(this);
			if (!input.is("input")){
				//console.error("only input tag can be inited as number box!");
				return null;
			};

			var id = options.id || this.id || "textbox-" + parseInt(Math.random()*1000*1000*1000, 10).toString(),
				value = options.value || this.value || defaults.value,
				name = options.name || this.name || defaults.name;

			$.extend(this, defaults, options);

			$(this).attr({
				value: value,
				id: id,
				name: name
			}).val(value).addClass("number-text");

			if(this._maxLength){
				$(this).attr("maxlength", this._maxLength);
			};

			var inHTML = 	"<div class=\"container widget-container text-container number-container "+this.cls+"\">";
				
			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel number-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<span class=\"widget-wrap text-wrap number-wrap\">";
				//inHTML +=			"<span class=\"number-switch-container\">";
				inHTML +=				"<button class=\"widget-switch number-switch number-switch-up\" title=\"Increase\" type=\"button\"></button>";
				inHTML +=				"<button class=\"widget-switch number-switch number-switch-down\" title=\"Decrease\" type=\"button\"></button>";
				//inHTML +=			"</span>";
				inHTML +=		"</span>";
				
				inHTML +=		"<div class=\"widget-tips number-tips "+obj.tipsCls+"\">";
				inHTML +=			"<div class=\"content tips-content\"></div>";
				inHTML +=		"</div>";
				
				inHTML +=	"</div>";


			var container = $(inHTML);
			input.replaceWith(container);
			container.find("span.number-wrap").prepend(input.remove().addClass("text-text number-text"));

		});

		var container = me.parents("div.number-container"),
			t = 0;

		container.delegate(".number-switch-up", "mousedown", function(e){
			var wrap = $(this).parent("span.number-wrap"),
				input = wrap.find("input.number-text");

			t = setInterval(function(){
				var _value = input.val();

				if ($.su.vtype.types.number.regex.test(_value)){
					_value++;
					input.val(_value);
				};

			}, 60);

		}).delegate(".number-switch-up", "mouseup mouseleave mouseout",function(e){
			clearTimeout(t);
		});

		container.delegate(".number-switch-down", "mousedown", function(e){
			var wrap = $(this).parent("span.number-wrap"),
				input = wrap.find("input.number-text");

			t = setInterval(function(){
				var _value = input.val();

				if ($.su.vtype.types.number.regex.test(_value)){
					_value = _value - 1;
					input.val(_value);
				};

			}, 60);
		}).delegate(".number-switch-down", "mouseup mouseleave mouseout",function(e){
			clearTimeout(t);
		});
		
		container.delegate("input.number-text", "keydown", $.su.vtype.types.number.keybordHandler);

		me.number("setTips", options.tips);

		return me;
	},
	validate: function(me){

	}
});

})(jQuery);