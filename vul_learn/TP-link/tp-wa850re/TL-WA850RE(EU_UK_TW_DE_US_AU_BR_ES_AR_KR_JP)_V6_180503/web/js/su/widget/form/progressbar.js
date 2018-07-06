// JavaScript Document
(function($){

$.su.Widget("progressbar", {
	defaults: {
		text: "",
		fieldLabel: "",
		tips: "",
		unit: "%",
		_timeout: 0,
		value: 0,	//0-1
		url: null,
		isProgressbar: true,
		showPercentage: true,
		width: 18,
		height: 6,
		fn: null,	//function
		widgetName: "progressbar",
		expression: "percentage*1",
		ptype: "horizontal"	//horizontal vertical
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var type = obj.ptype,
				_value = options.value || defaults.value,
				_width = options.width || defaults.width,
				_height = options.height || defaults.height,
				_style = type === "horizontal" ? "width:" + _width*_value + "px" : "height:" + _height*_value + "px";
			
			//target.addClass("container widget-container progressbar-container progressbar-"+type);
			
			var	inHTML = 	"<div class=\"container widget-container progressbar-container progressbar-"+type+" "+obj.cls+"\">";

			if (obj.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+obj.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel processbar-fieldlabel\">"+obj.fieldLabel+"</label>";
				if (obj.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+obj.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<div class=\"widget-wrap-outer progressbar-wrap-outer\">";
				inHTML +=			"<div class=\"widget-wrap progressbar-wrap\">";
				inHTML +=				"<div class=\"widget-wrap progressbar-content\">";
				inHTML +=					"<div class=\"progressbar-value\" style=\""+_style+"\"></div>"
				inHTML +=				"</div>";
				inHTML +=				"<div class=\"progressbar-text\">";

			if (obj.text != ""){
				inHTML +=					"<span class=\"progressbar-text\">" + obj.text + "</span>";
			};
			if (obj.showPercentage){
				inHTML +=					"<span class=\"progressbar-percentage\">" + _value*100 + obj.unit + "</span>";
			};
				
				inHTML += 				"</div>";
				inHTML +=			"</div>";
				
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
			container.append(tar.addClass("hidden"));
			//console.log(tar, tar.attr("width"), _width)
			var bar = container.find("div.progressbar-content").css("width", _width);
			bar.css("height", _height);
		});

		me.password("setTips", options.tips);
		return me;
	},
	animate: function(me, args){
	//console.log(arguments)
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.progressbar-container"),
			type = obj.ptype,
			unit = obj.unit,
			expression = obj.expression,
			property = type === "horizontal" ? "width" : "height";

		args[1] = (args[1] === null) ?  (me.percentageCurrent || 0) : args[1];
		var	percentageStart = parseInt(args[1]*100, 10),
			percentageEnd = parseInt(args[2]*100, 10),
			duration = $.type(parseInt(args[3], 10)) === "number" ? parseInt(args[3], 10) : 500,
			callback = args[4] || null,
			percentageCurrent = percentageStart || 0;

		var progressbarBox = container.find("div.progressbar-content"),
			progressbarBar = progressbarBox.children("div.progressbar-value"),
			percentageBox = container.find("span.progressbar-percentage");

		var num = progressbarBox[property]();
		progressbarBar.css(property, parseInt(num*percentageStart/100, 10));

		var p = Math.round(eval(expression.replace("percentage", percentageStart))*100)/100;
		percentageBox.html(p+unit);

		var t = parseInt(duration/Math.abs(percentageEnd - percentageStart), 10);

		me.get(0)._timeout = setInterval(function(){
			if (percentageCurrent != percentageEnd){
				if (percentageCurrent > percentageEnd){
					percentageCurrent--;
				}else{
					percentageCurrent++;
				};
				me.percentageCurrent = percentageCurrent.toFixed(1)/100;
				//var p = Math.round(eval(expression.replace("percentage", percentageCurrent))*100)/100;
				//percentageBox.html(p+unit);

				var animateObj = property === "width" ? {
					"width": parseInt(num*percentageCurrent/100, 10)
				} : {
					"height": parseInt(num*percentageCurrent/100, 10)
				};

				progressbarBar.clearQueue().animate(animateObj, t, function(){
					var p = Math.round(eval(expression.replace("percentage", percentageCurrent))*100)/100;
					percentageBox.html(p+unit);
					me.val(percentageCurrent/100);
				});

			}else{
				clearInterval(me.get(0)._timeout);
				me.get(0)._timeout = 0;


				var animateObj = property === "width" ? {
					"width": parseInt(num*percentageEnd/100, 10)
				} : {
					"height": parseInt(num*percentageEnd/100, 10)
				};
				
				progressbarBar.css(animateObj);

				var p = Math.round(eval(expression.replace("percentage", percentageEnd))*100)/100;
					percentageBox.html(p+unit);

				if (callback){
					callback.call(me);
				};
			};

			//console.log(num, percentageCurrent, )
		}, t);

		me.val(percentageEnd/100);

		return me;
	},
	reset: function(me){
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.progressbar-container"),
			type = obj.ptype,
			unit = obj.unit,
			expression = obj.expression,
			property = type === "horizontal" ? "width" : "height";

		me.progressbar("stop");

		var progressbarBox = container.find("div.progressbar-content"),
			progressbarBar = progressbarBox.children("div.progressbar-value"),
			percentageBox = container.find("span.progressbar-percentage");

		var animateObj = (property === "width") ? {
			"width": 0
		} : {
			"height": 0
		};

		/*progressbarBar.animate(animateObj, 150, function(){
			percentageBox.html("0%");
		});*/
	
		progressbarBar.stop();
		progressbarBar.css(animateObj);

		var p = Math.round(eval(expression.replace("percentage", 0))*100)/100
		percentageBox.html(+unit);
		
		return me;
	},
	stop: function(me){
		var me = me || this,
			container = me.closest("div.progressbar-container"),
			_timeout = me.get(0)._timeout;

		clearInterval(_timeout);
		return me;
	},
	setText: function(me, arguments){
		var me = me || this,
			container = me.closest("div.progressbar-container"),
			text = arguments[0];
		
		var	textBox = container.find("span.progressbar-text");
		textBox.html(text);
	},
	setValue: function(me, arguments){	//value, test
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.progressbar-container"),
			type = obj.ptype,
			unit = obj.unit,
			expression = obj.expression,
			property = type === "horizontal" ? "width" : "height";

		var	value = arguments[1] || 0,
			text = arguments[2]	|| me.get(0).text,
			animateFlag = arguments[3] || false;

		var progressbarBox = container.find("div.progressbar-content"),
			progressbarBar = progressbarBox.children("div.progressbar-value"),
			percentageBox = container.find("span.progressbar-percentage"),
			textBox = container.find("span.progressbar-text");

		var num = progressbarBox[property]();
		if (!animateFlag){
			progressbarBar.css(property, num*value);
			var p = Math.round(eval(expression.replace("percentage", value))*100)/100;
			percentageBox.html(p+unit);

			textBox.html(text);
		}else{
			me.progressbar("animate", me.val(), value, 500 ,function(){
				textBox.html(text);
			});
		};

		me.val(parseInt(value, 10));

		return me;
	},
	update: function(me, arguments){	//url, data, callback, dataName
		var me = me || this,
			type = me.get(0).ptype,
			property = type === "horizontal" ? "width" : "height",
			dataName = dataName || "percentage";

		var	url = arguments[1] || me.get(0).url,
			data = arguments[2],
			callback = arguments[3] || null;

		//调整成内建proxy
		$.ajax({
			url: url,
			type: "POST",
			data: data,
			dataType: "json",
			tradidional: true,
			cache: false,
			success: callback || function(data){
				var percentage = data[dataName];
				if (percentage){
					me.progressbar("setValue", percentage, null, true);
				}else{
					//console.error("Can not find the percentage data!");
					return null;
				};
			}
		});

	},
	hide: function(me){
		var me = me || this,
			container = me.closest("div.progressbar-container");
		container.css("display", "none");
		return me;
	},
	show: function(me){
		var me = me || this,
			container = me.closest("div.progressbar-container");
		container.fadeIn(150);
		return me;
	}
});


})(jQuery);