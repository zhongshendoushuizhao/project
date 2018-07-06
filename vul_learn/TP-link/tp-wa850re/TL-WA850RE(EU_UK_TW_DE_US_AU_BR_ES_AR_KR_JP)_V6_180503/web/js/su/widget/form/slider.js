// JavaScript Document
(function($){

$.su.Widget("slider", {
	defaults: {
		showPercentage: true,

		_width: 206,
		increment: 5,

		minValue: 0,
		maxValue: 100,

		range: null,

		unit: "%",
		value: 50
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var input = $(obj);

			if (options.width){
				options._width = options.width;
				delete options.width;
			};

			if (obj.maxValue <= obj.minValue){
				//console.error("Invalid maxValue or minValue!!");
				return;
			};

			$.extend(obj, defaults, options);

			if (!obj.range){
				obj.range = [obj.minValue, obj.maxValue];
			};

			var _value = options.value || input.val() || defaults.value;

			var inHTML = 	"<div class=\"container widget-container slider-container "+obj.cls+"\">";

			if (obj.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+obj.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel slider-fieldlabel\">"+obj.fieldLabel+"</label>";
				if (obj.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+obj.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<div class=\"widget-wrap-outer slider-wrap-outer\">"
				inHTML +=			"<div class=\"widget-wrap slider-wrap\">";
				inHTML +=				"<div class=\"widget-wrap slider-content\">";
				inHTML +=					"<div class=\"widget-value slider-value\">";
				inHTML +=						"<div class=\"widget-value-inner slider-value-inner\">";
				inHTML +=						"</div>";
				inHTML +=					"</div>";
				inHTML +=				"</div>";

			if (obj.showPercentage){
				inHTML +=				"<div class=\"slider-text\">";
				inHTML +=					"<span class=\"slider-percentage\">" + _value + obj.unit + "</span>";
				inHTML +=				"</div>";
			};

				inHTML +=			"</div>";
				inHTML +=		"</div>";

				inHTML +=	"</div>";

			var container = $(inHTML);
			input.replaceWith(container);
			container.prepend(input.addClass("hidden"));

			container.find("div.slider-content").css({
				"width": obj._width
			});
		});

		var container = me.closest("div.slider-container");

		var mouseupHandler = function(e){
			//console.log("mouseup");
			$("html").off("mousemove", dragingHandler);
			$("html").off("mouseup", mouseupHandler);
		};

		var dragingHandler = function(e){
			e.preventDefault();
			var bar = container.find("div.slider-value");
			var obj = me.get(0);

			var maxValue = parseInt(obj.maxValue, 10);
			var minValue = parseInt(obj.minValue, 10);
			var width = parseInt(obj._width, 10);
			var increment = parseInt(obj.increment, 10);
			var posX = e.pageX || e.screenX;
			var w = (posX - bar.offset().left);

			var step = Math.round(w/width*(maxValue));
			var v = Math.round(step/increment)*increment;
			me.slider("setValue", v);
			
		};

		// 拖拽部分的代码
		container.delegate("div.slider-value-inner", "mousedown", function(e){
			//console.log("mousedown")
			$("html").on("mousemove", dragingHandler);
			$("html").on("mouseup", mouseupHandler);
		}).delegate("div.slider-value-inner", "mouseup", mouseupHandler);

		return me;
	},
	getValue: function(me){
		var me = me || this;

		return me.val();
	},
	setValue: function(me, value){
		var me = me || this;
		var container = me.closest("div.slider-container");
		var box = container.find("div.slider-value");

		var obj = me.get(0);
		var vOld = me.val();
		var value = value[1];
		//console.log(value)
		var maxValue = parseInt(obj.maxValue, 10);
		var minValue = parseInt(obj.minValue, 10);

		var maxRange = parseInt(obj.range[1], 10);
		var minRange = parseInt(obj.range[0], 10);

		if (value > maxRange){
			value = maxRange;
		}else if (value < minRange){
			value = minRange;
		};

		var width = parseInt(obj._width, 10);

		var w = Math.round(width/(maxValue)*value);
		//console.log("setValue", value, maxValue, minValue, w)
		box.css({
			"width": w
		});

		container.find("span.slider-percentage").html(value + obj.unit);
		me.val(value);

		if (vOld.toString() !== value.toString()){
			me.trigger("ev_change", [vOld, value]);
		};
		return me;
	},
	reset: function(me){
		var me = me || this;
		var obj = me.get(0);
		var minValue = parseInt(obj.minValue, 10);
		var defaultValue = parseInt(obj.defaultValue, 10);

		var v = defaultValue || minValue;

		me.slider("setValue", v);
		return me;
	},
	setRange: function(me, range){
		var me = me || this;
		var obj = me.get(0);
		var range = range[1];

		var maxValue = parseInt(obj.maxValue, 10);
		var minValue = parseInt(obj.minValue, 10);

		if (range[0] < minValue){
			range[0] = minValue;
		};

		if (range[1] > maxValue){
			range[1] = maxValue;
		};

		if (range[0] > range[1]){
			//console.error("Invalid Range!!!!");
			return;
		};

		obj.range = range;
		return me;
	}
});

})(jQuery);