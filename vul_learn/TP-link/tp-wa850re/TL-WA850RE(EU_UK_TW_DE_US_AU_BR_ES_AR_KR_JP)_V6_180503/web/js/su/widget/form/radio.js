// JavaScript Document
(function($){


$.su.Widget("radio", {
	defaults: {
		name: null,
		items: [],
		fieldLable: null,
		cls: "",
		fieldLabel: "",

		/*tips: "",*/
		columns: 1 //在几列中显示，默认为1
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var input = $(this);
			var id = options.id || this.id || defaults.id,
				value = options.value || input.val() || this.value || defaults.value,
				name = options.name || this.name || defaults.name;

			input.addClass("hidden");
			//this.setAttribute("type", "hidden");

			$.extend(this, defaults, options);

			//重新初始化属?
			input.attr({
				value: value,
				id: id,
				name: name
			}).val(value).addClass("radio-value");

			var inHTML = 	"<div class=\"container widget-container radio-group-container "+this.cls+"\">";
				
			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel radio-group-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";
			};				
				
				inHTML +=		"<div class=\"widget-wrap-outer radio-group-wrap-outer\">";
				inHTML +=			"<div class=\"radio-group-wrap\">";
				inHTML +=			"</div>";
				
			if (this.tips != null && this.tips != undefined){
				inHTML +=			"<div class=\"widget-tips textbox-tips "+obj.tipsCls+"\">";
				inHTML += 				"<div class=\"widget-tips-wrap\">";
				inHTML +=					"<div class=\"content tips-content\"></div>";
				inHTML +=				"</div>";
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
			input.attr("disabled", true).replaceWith(container);
			container.prepend(input);			
		});

		var container = me.closest("div.radio-group-container");
		container.delegate("label.radio-label", "click", function(e){
			e.preventDefault();
			
			var label = $(this),
				li = label.closest("li.radio-list"),
				input = label.find("input.radio-radio"),
				vOld = me.val(),
				vNew = input.val();

			//console.log(li);
			if (li.hasClass("disabled")){
				return;
			}else{
				container.find("label.radio-label").removeClass("checked");
				label.addClass("checked");
				
				me.radio("setValue", vNew);
			};
			me.trigger("ev_click", vNew);
		});
		
		me.radio("setTips", options.tips);

		return me.radio("loadData", me.get(0).items);
	},
	loadData: function(me, items){
		var me = me || this,
			obj = me.get(0),
			name = obj.name,
			value = obj.name,
			items = items[1],
			len = items.length,
			perColumnNum = Math.ceil(len/obj.columns),
			_numFlag = 0,
			_contentFlag = false;;

		if (!$.isArray(items) || items.length < 0){
			return;
		};

		var inHTML = 			"<ul class=\"radio-group-list-wrap\">";

		var funcInitLi = function(boxName, boxValue, boxId, boxlabel, boxCls){

			inHTML += 				"<li class=\"radio-list\">";
			inHTML += 					"<div class=\"widget-wrap\">";
			inHTML +=						"<label class=\"radio-label "+boxCls+" "+checkedCls+"\" for=\""+boxId+"\">";
			inHTML += 							"<input class=\"radio-radio\" type=\"radio\" display=\""+item.boxlabel+"\" name=\""+boxName+"\" value=\""+boxValue.toString()+"\" id=\""+boxId+"\" "+checked+" />";
			inHTML +=							"<span class=\"icon\"></span>";
			inHTML +=							"<span class=\"text\">"+item.boxlabel+"</span>";
			inHTML +=						"</label>";
			inHTML += 					"</div>";
			inHTML +=					"<div class=\"radio-content-wrap "+(item.contentCls || "")+"\"></div>";
			inHTML += 				"</li>";

		};

		for (var index = 0; index < items.length; index++){
			var item = items[index],
				boxName = item.name || name || "",
				boxValue = item.inputValue || value || "",
				boxId = item.id || $.su.randomId("radio"),
				boxCls = items[index].itemCls || "";

			_contentFlag = item.content ? true : _contentFlag;

			var checked = "",
				checkedCls = "";

			if (item.checked === "checked" || item.checked === true || boxValue === value){
				checked = "checked=\"checked\"";
				checkedCls = "checked";
				me.val(boxValue);
			};

			if (_numFlag < perColumnNum){
				funcInitLi(boxName, boxValue, boxId, item.boxlabel, boxCls);
			}else{
				inHTML +=		"</ul>";
				inHTML +=		"<ul class=\"radio-group-list-wrap\">";
				funcInitLi(boxName, boxValue, boxId, item.boxlabel, boxCls);
				_numFlag = 0;
			}
			_numFlag++;
		};

			inHTML += 			"</ul>";

		var container = me.radio("getContainer"),
			wrap = container.find("div.radio-group-wrap").empty();

		wrap.append($(inHTML));

		if (_contentFlag){
			for (var index = 0; index < items.length; index++){
				var item = items[index];
				if (item.content){
					var content = $(item.content);
					container.find("li.radio-list").eq(index).find("div.radio-content-wrap").append(content);
				}else{
					continue;
				};
			};
		};

		return me;
	},
	getSelectedText: function(me){
		var me = me || this,
			container = me.radio("getContainer"),
			value = me.val();

		var radioBox = container.find("input.radio-radio[value="+value+"]");

		return radioBox.attr("display");
	},
	getValue: function(me){
		var me = me || this;
		return me.val();
	},
	setValue: function(me, _value){
		var me = me.filter("input.radio-value") || this,
			vOld = me.val(),
			vNew = _value[1],
			container = me.radio("getContainer");

		var radioBox = container.find("input.radio-radio").removeAttr("checked");

		radioBox = radioBox.filter("[value="+vNew+"]");
		//radioBox.attr("checked", "checked").get(0).checked = true;
		radioBox.prop("checked", true);
		
		container.find("label.radio-label").removeClass("checked");
		radioBox.closest("label.radio-label").addClass("checked");

		me.val(vNew);

		if (vOld.toString() !== vNew.toString()){
			me.trigger("ev_change", [vOld, vNew]);
		};
		
		return me;	
	},
	disableItem: function(me, valueArray){
		var me = me || this,
			obj = me.get(0),
			container = me.radio("getContainer"),
			radios = container.find("input.radio-radio"),
			valueArray = valueArray[1];

		if ($.type(valueArray) === "string"){
			valueArray = [valueArray];
		};

		var valueObj = (function(){
			var valueObj = {};
			for (var index = 0; index < valueArray.length; index++){
				valueObj[valueArray[index]] = true;
			};
			return valueObj;
		})();

		radios.each(function(i, obj){
			var tar = $(obj);
			if (tar.val() in valueObj){
				tar.closest("li.radio-list").addClass("disabled");
				tar.closest("label.radio-label").addClass("disabled");
				obj.disabled = true;
			};
		});

		return me;
	},
	enableItem: function(me, valueArray){
		var me = me || this,
			obj = me.get(0),
			container = me.radio("getContainer"),
			radios = container.find("input.radio-radio"),
			valueArray = valueArray[1];

		if ($.type(valueArray) === "string"){
			valueArray = [valueArray];
		};

		var valueObj = (function(){
			var valueObj = {};
			for (var index = 0; index < valueArray.length; index++){
				valueObj[valueArray[index]] = true;
			};
			return valueObj;
		})();

		radios.each(function(i, obj){
			var tar = $(obj);
			if (tar.val() in valueObj){
				tar.closest("li.radio-list").removeClass("disabled");
				tar.closest("label.radio-label").removeClass("disabled");
				obj.disabled = false;
			};
		});

		return me;
	},
	disable: function(me){
		var me = me || this,
			obj = me.get(0),
			container = me.radio("getContainer").addClass("disabled"),
			radios = container.find("input.radio-radio");

		radios.each(function(i, obj){
			var tar = $(obj);
			
			tar.closest("li.radio-list").addClass("disabled");
			tar.closest("label.radio-label").addClass("disabled");
			tar.prop("disabled", true);
			
		});

		return me;
	},
	enable: function(me){
		var me = me || this,
			obj = me.get(0),
			container = me.radio("getContainer").removeClass("disabled"),
			radios = container.find("input.radio-radio");

		radios.each(function(i, obj){
			var tar = $(obj);

			tar.closest("li.radio-list").removeClass("disabled");
			tar.closest("label.radio-label").removeClass("disabled");
			tar.prop("disabled", false);
			
		});

		return me;
	},
	reset: function(me){
		var me = me || this,
			obj = me.get(0),
			//container items = obj.items,
			val = "";

		if (obj.defaultValue){
			val = obj.defaultValue;
		}/*else if (items[0]){
			val = items[0]["inputValue"];
		}*/;

		me.radio("setValue", val);
		return me;
	},
	getContainer: function(me){
		var me = me || this,
			container = me.closest("div.radio-group-container");
		return container;
	}/*,
	disableAll: function(me){

	},
	enableAll: function(me){

	}*/

});

})(jQuery);