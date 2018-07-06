// JavaScript Document
(function($){

$.su.Widget("combobox", {
	defaults: {
		//åŸºæœ¬å±žæ€?
		fieldLabel: "",
		tips: "",
		cls: "",

		readOnly: true,
		noneSelectedText: $.su.CHAR.OPERATION.NOSELECTEDTEXT,
		//noneSelectedText: "",
		noneSelectedRemind:false,
		multiSelect: false,
		displayField: "name",
		valueField: "value",
		//ä»Žitemså±žæ€§åˆå§‹åŒ–
		items: null,

		//ä»Žstoreåˆå§‹åŒ?
		store: null,
		isCombobox: true,
		allowBlank: true,

		widgetName: "combobox",
		tabindex: 0
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var target = $(obj);
			$.extend(obj, defaults, options);
			//console.log(target.is("input"), target.attr("id"))
			if (target.is("select")){
				//console.error("Combobox can only initialed by input tag!");
				//return null;
				var optionObjs = target.find("option");
				obj.items = obj.items || [];
				for (var index = 0, len = optionObjs.length; index < len; index++){
					obj.items.push({
						value: optionObjs[index].value,
						name: optionObjs[index].innerHTML,
						selected: optionObjs[index].selected ? "selected" : false
					});
				};
			};

			var inHTML = 	"<div class=\"container widget-container combobox-container "+(obj.multiSelect ? "multiple" : "single")+" "+obj.cls+" "+(obj.className || "")+"\">";
			
			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel combobox-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML += 		"<div class=\"widget-wrap-outer combobox-wrap-outer\">";
				inHTML += 			"<div class=\"widget-wrap combobox-wrap\">";
				inHTML +=				"<span class=\"text-wrap-before\"></span>";
				inHTML +=				"<input class=\"combobox-text "+obj.inputCls+"\" type=\"text\"  UNSELECTABLE =\"on\" tabindex=\"-1\" "+(this.readOnly ? "readonly=\"true\"" : "")+ " value=\"" + (this.noneSelectedRemind ? obj.noneSelectedText+ "\"": "\"") + " />";	//ç›®å‰å…ˆåšæˆreadonly
				inHTML +=				"<input class=\"combobox-hidden hidden\" name=\""+obj.name+"\" UNSELECTABLE =\"on\" type=\"checkbox\" checked=\"true\" disabled=\"disabled\"/>";
				inHTML +=				"<a class=\"combobox-switch\" href=\"javascript:void(0);\" tabindex=\""+this.tabindex+"\">";
				inHTML +=					"<span class=\"icon\"></span>";
				inHTML +=				"</a>";
				
			// for ie shadow			
			//	
					
				inHTML += 				"<div class=\"combobox-list-wrap\">";

				inHTML +=					'<div class="position-top-left"></div><div class="position-top-center"></div>';
				inHTML +=					'<div class="position-center-left"><div class="position-center-right">';

				inHTML +=						"<div class=\"combobox-list-content-wrap\">";
				inHTML +=							"<ul class=\"combobox-list\">";
				inHTML +=							"</ul>";
				inHTML +=						"</div>";
				
				inHTML +=					'</div></div>';

				inHTML +=					'<div class="position-bottom-left"></div><div class="position-bottom-center"></div>';

				inHTML +=				"</div>";
				inHTML +=				"<span class=\"text-wrap-after\"></span>";				
				inHTML +=			"</div>";
				
			if (this.tips != null && this.tips != undefined && this.tips != ""){
				inHTML +=			"<div class=\"widget-tips combobox-tips "+obj.tipsCls+"\">";
				inHTML +=				"<div class=\"content tips-content\"></div>";
				inHTML +=			"</div>";
			};

				inHTML +=			"<div class=\"widget-error-tips combobox-error-tips "+obj.errorTipsCls+"\">";
				inHTML +=				"<span class=\"widget-error-tips-delta\"></span>";
				inHTML +=				"<div class=\"widget-error-tips-wrap\">";
				inHTML +=					"<div class=\"content error-tips-content\"></div>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";
			
				inHTML ==		"</div>";
				inHTML ==	"</div>";

			var container = $(inHTML);
			target.replaceWith(container);
			container.prepend(target.addClass("hidden combobox-value").prop("disabled", true));
			me.combobox("setText");			
		});

		//äº‹ä»¶ç»‘å®šï¼Œæ˜¾ç¤ºç›¸å…³çš„ä¸–ç•Œç»‘å®š
		var container = null;
		if (me.hasClass("div.combobox-container")){
			container = me;
		}else{
			container = me.closest("div.combobox-container");
		};
		
		container.delegate("div.combobox-wrap", "click", function(e){
			//ä¸‹æ‹‰å¼€å…?
			e.stopPropagation();
			var switchBtn = $(this).find("a.combobox-switch"),
				wrap = switchBtn.next("div.combobox-list-wrap"),
				container = switchBtn.closest("div.combobox-container"),
				toggleFlag = wrap.attr("toggleflag") || "hidden";

			if (container.hasClass("disabled") || container.hasClass("none-items")){
				return false;
			};

			container.removeClass("error");

			$("div.combobox-list-wrap").hide().attr("toggleflag", "hidden");
			if (toggleFlag === "hidden"){
				container.addClass("focus")
				wrap.slideDown(150);
				wrap.attr("toggleflag", "shown");
			}else{
				container.removeClass("focus")
				wrap.hide();
				wrap.attr("toggleflag", "hidden");
			};
			//$("div.combobox-container").removeClass("selected");

			$("div.widget-error-tips-wrap.show").css("display", "none");
		}).delegate("label.combobox-label", "click", function(e){
			e.stopPropagation();
			e.preventDefault();
			/*var tar = $(this),
				tarLi = $(this).closest("li.combobox-list"),
				listWrap = tar.parents("div.combobox-list-wrap"),
				container = tar.closest("div.combobox-container"),
				_selectType = tar.attr("type"),
				combobox = container.find("input.combobox-value, select.combobox-value");	//å› ä¸ºåªæœ‰ä¸€ä¸ªï¼Œæ‰€ä»¥å…ˆè¿™æ ·å†

			if (tarLi.hasClass("disabled")){
				return;
			};

			var vOld = combobox.combobox("getValue").sort();

			if (_selectType !== "multiple"){	//å•é€‰æ¡†çš„æƒ…å†?
				//é‡ç½®æ‰€æœ?
				var checkboxs = listWrap.find("li.combobox-list").removeClass("selected").find("input.combobox-checkbox");
				checkboxs.each(function(i, obj){
					obj.checked = false;
				});
				//è®¾ç½®å½“å‰
				tarLi.addClass("selected");
				tar.children("input.combobox-checkbox").get(0).checked = true;
				//éšè—é€‰æ¡†
				listWrap.hide().attr("toggleflag", "hidden");
			}else{	//å¤é€‰çš„æƒ…å†µ
				var input = tar.children("input.combobox-checkbox").get(0);
				if (input.checked){
					input.checked = false;
					tarLi.removeClass("selected");
				}else{
					input.checked = true;
					tarLi.addClass("selected");
				};
			};
			container.addClass("selected");
			combobox.combobox("setText");
			container.removeClass("focus");
			//$("div.combobox-container").removeClass("focus");
			//combobox.combobox("setValue");

			var vNew = combobox.combobox("getValue").sort();
			if (vOld.toString() != vNew.toString()){
				combobox.trigger("ev_change", [vOld, vNew]);
			};*/

			var label = $(this),
				li = label.closest("li.combobox-list"),
				container = label.closest("div.combobox-container"),
				selectType = label.attr("type"),
				input = label.find("input.combobox-checkbox"),
				value = input.val(),
				vOld = me.combobox("getValue"),
				vNew = [];

			if (li.hasClass("disabled")){
				return;
			};

			switch (selectType){
				case "multiple":
					var checked = input.prop("checked");
					if (checked){
						for (var index = vOld.length - 1; index--; index >= 0){
							if (vOld[index] == value){
								vOld.splice(index, 1);
								break;
							};
						};
					}else{
						vNew = vOld.push(value);
					};

					me.combobox("select", vNew);
					break;
				case "single":
					vNew.push(value);
					me.combobox("select", vNew);
					var listWrap = label.parents("div.combobox-list-wrap");
					listWrap.hide().attr("toggleflag", "hidden");
					break;
			};

			container.addClass("selected");
			container.removeClass("focus");

			me.trigger("ev_click", [vOld, vNew])
		});

		container.delegate("input.combobox-text", "click", function(e){
//            if stopPropagation here, the event would not bubble to div.widget-wrap. So the list will not slide down normally.
//			e.stopPropagation();
			e.preventDefault();
		}).delegate("input.combobox-text", "focus", function(e){
			if (container.hasClass("disabled") || container.hasClass("none-items")){
				return;
			};
			$(this).combobox("setFocus");
		}).delegate("input.combobox-text", "keydown", function(){
			var value = $("input.combobox-text").val();
			var checkboxs = container.find("input.combobox-checkbox");
			
			var selectFlag = false;
			checkboxs.each(function(i, obj){
				if ($(obj).val() == value){
					selectFlag = true;
					return false;
				};
			});
			
			if (!selectFlag){
				container.find("input.combobox-hidden").prop("disabled", false);
				container.find("li").removeClass("selected");
				checkboxs.prop("checked", false);
			}else{
				container.find("input.combobox-hidden").prop("disabled", true);
			};
			
		}).delegate("input.combobox-text", "keyup blur", function(e){
			if (container.hasClass("disabled") || container.hasClass("none-items")){
				return;
			};
			container.find("input.combobox-value").combobox("validate");
		}).delegate("input.combobox-value", "ev_validatechange", function(e, isvalid){
			e.stopPropagation();
			if (isvalid){
				$(this).combobox("setNormal");
			}else{
				$(this).combobox("setError");
			};
		});

		//åˆå§‹æ•°æ®åŠ è½½
		var items = me.get(0).items;
		/*if (items){
			for (var index = 0, len = items.length; index < len; index++){
				if (items[index]){
					me.combobox("initItem", items[index]);
				};
			};
		};*/
		me.combobox("loadData", items);
		me.combobox("setTips", options.tips);
		me.combobox("setErrorTips", "");
		
		return me;
	},
	getSelectedIndex: function(me){
		var items = me.get(0).items;
		var value = me.combobox("getValue");
		var len = items.length;
		for (var index = 0; index < len; index++){
			if(value[0] === items[index].value){
				return index;
			};
		};
		return -1;
	},
	loadData: function(me, items){
		var me = me || this,
			obj = me.get(0),
			container = me.combobox("getContainer"),
			items = items[1];

		container.find("ul.combobox-list").empty();

		if (!$.isArray(items)){
			items = [];
		};

		obj.items = items;
		var lists = "";
		for (var index = 0, len = items.length; index < len; index++){
			if (items[index]){
				//修改内部接口，下拉框数据加载时，只操作DOM一次（组装好再append）
				lists += me.combobox("initItemHtml", items[index]);
			};
		};
		//append
		var ctn = me.closest("div.combobox-container");
		ctn.find("ul.combobox-list").append($(lists));
		me.combobox("setText");

		if (items.length == 0){
			container.addClass("none-items");
		}else{
			container.removeClass("none-items");
		};

		return me;
	},
	initItem: function(me, itemProperty){
		var me = me || this,
			container = me.closest("div.combobox-container"),
			obj = me.get(0),
			item = itemProperty[1];

		var	_selectType = obj.multiSelect == true ? "multiple" : "single",

			_inputId = obj.id+"-"+$.su.randomId("option"),

			_display = item[obj.displayField],
			_value = item[obj.valueField],

			_disabled = item["disabled"] ? true : false,
			_checked = item.selected ? true : false,
			_cls = item.cls || "";

		var lists = 	"";
			lists += 	"<li class=\"combobox-list "+_cls+" "+(_disabled ? "disabled" : "")+" "+(_checked ? "selected" : "")+"\">";
			lists +=		"<label for=\""+_inputId+"\" type=\""+_selectType+"\" class=\"combobox-label "+_selectType+"\">";
			lists +=			"<input id=\""+_inputId+"\" name=\""+obj.name+"\" display=\""+_display+"\" class=\"combobox-checkbox\" type=\"checkbox\" value=\""+_value+"\""+(_checked ? " checked=\"checked\"" : "")+" "+(_disabled ? "disabled=\"disabled\"" : "")+" />";
			lists +=			"<span class=\"icon\"></span>";
			lists +=			"<span class=\"text\">"+_display+"</span>";
			lists +=		"</label>";
			lists +=	"</li>";

		container.find("ul.combobox-list").append($(lists));

		if (me.is("select")){
			me.append("<option value=\""+_value+"\">"+_display+"</option>");
		};
		
		me.combobox("setText");
		//me.combobox("setValue");
	},
	initItemHtml: function(me, itemProperty){
		var me = me || this,
			container = me.closest("div.combobox-container"),
			obj = me.get(0),
			item = itemProperty[1];

		var	_selectType = obj.multiSelect == true ? "multiple" : "single",

			_inputId = obj.id+"-"+$.su.randomId("option"),

			_display = item[obj.displayField],
			_value = item[obj.valueField],

			_disabled = item["disabled"] ? true : false,
			_checked = item.selected ? true : false,
			_cls = item.cls || "";

		var lists = 	"";
			lists += 	"<li class=\"combobox-list "+_cls+" "+(_disabled ? "disabled" : "")+" "+(_checked ? "selected" : "")+"\">";
			lists +=		"<label for=\""+_inputId+"\" type=\""+_selectType+"\" class=\"combobox-label "+_selectType+"\">";
			lists +=			"<input id=\""+_inputId+"\" name=\""+obj.name+"\" display=\""+_display+"\" class=\"combobox-checkbox\" type=\"checkbox\" value=\""+_value+"\""+(_checked ? " checked=\"checked\"" : "")+" "+(_disabled ? "disabled=\"disabled\"" : "")+" />";
			lists +=			"<span class=\"icon\"></span>";
			lists +=			"<span class=\"text\">"+_display+"</span>";
			lists +=		"</label>";
			lists +=	"</li>";
		if (me.is("select")){
			me.append("<option value=\""+_value+"\">"+_display+"</option>");
		};
		return lists;
	},
	getItem: function(me, value){
		var me = me || this,
			obj = me.get(0),
			value = value[1];

		var items = obj.items;
		var item = null;
		for (var index = 0, len = items.length; index < len; index++){
			if (items[index]["value"] == value){
				item = items[index];
				break;
			};
		};
		return item;
	},
	setText: function(me, arguments){
		var me = me || this,
			container = me.combobox("getContainer"),
			optionItems = container.find("input.combobox-checkbox"),
			textBox = container.find("input.combobox-text");

		var _value = me.combobox("getValue"),
			_valueType = $.type(_value),
			text = "";

		if (_valueType === "array"){
			for (var index = 0; index < _value.length; index++){
				// var _name = optionItems.filter("[value='"+_value[index]+"']").nextAll("span.text").html();
				var _name = optionItems.filter("[value='"+_value[index]+"']").attr("display");
				text = text + _name + ",\x20";
			};
			text = text.slice(0, text.length-2);			
		}else if(_valueType === "string"){
			// var _name = optionItems.filter("[value='"+_value+"']").nextAll("span.text").html();
			var _name = optionItems.filter("[value='"+_value[index]+"']").attr("display");
			text = _name;
		};

		if (text == ""){
			textBox.val(me.get(0).noneSelectedText);
		}else{
			textBox.val(text);
		};

		return me;
	},
	getSelectedText: function(me){
		var me = me || this,
			container = me.closest("div.combobox-container"),
			textBox = container.find("input.combobox-text");
			
		return textBox.val();
	},
	setValue: function(me, value){

		var me = me || this,
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
			value = value[1];
		
		if (!$.isArray(value)){
			//console.log("here");
			value = [value];
		};

		var valueObj = {};
		for (var index = 0; index < value.length; index++){
			valueObj[value[index]] = true;
		};
		var noSelectflag = true;
		checkboxs.each(function(i, obj){
			var checkbox = $(obj);
			if (checkbox.val() in valueObj){
				noSelectflag = false;
				//console.log("1");
				return false;
			};
		});
		//console.log("noSelectflag", noSelectflag)
		if (noSelectflag){
			var input = container.find("input.combobox-text");
			me.get(0).noneSelectedRemind? input.val(me.get(0).noneSelectedText) : input.val(value);
		}else{
			me.combobox("select", value);
		};

		return me;
	},
	getValue: function(me){
		var me = me || this,
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox");

		var result = [];
		checkboxs.each(function(i, obj){
			if (obj.checked){
				result.push($(obj).val());
			};
		});
		
		if (result.length == 0 && me.get(0).readOnly == false){
			var input = container.find("input.combobox-text");
			result = [input.val()];
		};

		return result;
	},
	disable: function(me){	//å¯¹æ•´ä¸ªå¯¹è±¡å®žçŽ°ç¦ç”?
		var me = me || this,
			container = me.combobox("getContainer");
		
		container.addClass("disabled");
		container.find("input.combobox-text").attr("disabled", true);
		container.find("input.combobox-checkbox").prop("disabled", true);

		return me;
	},
	enable: function(me){
		var me = me || this,
			container = me.combobox("getContainer");

		container.removeClass("disabled");
		container.find("input.combobox-text").removeAttr("disabled");
		container.find("input.combobox-checkbox").prop("disabled", false);

		return me;
	},
	disableItem: function(me, valueArray){	//å®žçŽ°å¯¹å•ä¸ªå¯¹è±¡çš„å¯ç”¨ç¦ç”¨
		var me = me || this,
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
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

		checkboxs.each(function(i, obj){
			var tar = $(obj);
			if (tar.val() in valueObj){
				tar.closest("li.combobox-list").addClass("disabled");
				tar.attr("disabled", true);
			};
		});

		me.combobox("setText");
		return me;
	},
	enableItem: function(me, valueArray){
		var me = me || this,
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
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

		checkboxs.each(function(i, obj){
			var tar = $(obj);
			if (tar.val() in valueObj){
				tar.closest("li.combobox-list").removeClass("disabled");
				tar.attr("disabled", false);
			};
		});

		me.combobox("setText");
		return me;
	},
	select: function(me, valueArray){
		var me = me || this,
			obj = me.get(0),
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
			valueArray = valueArray[1];

		var vOld = me.combobox("getValue").sort();

		if ($.type(valueArray) === "string"){
			valueArray = [valueArray];
		};

		if (obj.multiSelect){
			//å¤šé€‰æƒ…å†?
			var valueObj = (function(){
				var valueObj = {};
				for (var index = 0; index < valueArray.length; index++){
					valueObj[valueArray[index]] = true;
				};
				return valueObj;
			})();
			
			checkboxs.each(function(i, obj){
				var tar = $(obj);
				if (tar.val() in valueObj){
					tar.closest("li.combobox-list").addClass("selected");
					obj.checked = true;
				};
			});
		}else{
			//å•é€‰æƒ…å†?
			if (valueArray.length > 0){
				valueArray = valueArray[0];
			};
			checkboxs.each(function(i, obj){
				var tar = $(obj);
				if (tar.val() == valueArray){
					tar.closest("li.combobox-list").addClass("selected");
					obj.checked = true;
				}else{
					tar.closest("li.combobox-list").removeClass("selected");
					obj.checked = false;
				};
			});
		}
		
		var vNew = me.combobox("getValue").sort();
		if (vOld.toString() != vNew.toString()){
			me.trigger("ev_change", [vOld, vNew]);
		};

		//me.val(vNew[0]);//console.log(me)
		me.combobox("setText").val(vNew);
		return me;
	},
	validate: function(me){
		var me = me || this,
			tar = me.get(0),
			container = me.combobox("getContainer"),
			value = container.find("input.combobox-value, select.combobox-value").val(),
			result = true;
			
		if (value == ""){
			if (!tar.allowBlank){
				result = false;
			};
		};

		if (tar.validator){
			result = tar.validator(value);
			if ($.type(result) !== "boolean"){
				result = false;
			};
		};
		
		$(tar).trigger("ev_validatechange", result);

		return result;
	},
	reset: function(me){
		var me = me || this,
			obj = me.get(0),
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
			defaultValue = obj.defaultValue;

		checkboxs.each(function(i, obj){
			var tar = $(obj);
			tar.closest("li.combobox-list").removeClass("selected");
			obj.checked = false;
		});

		me.combobox("setText");
		if (defaultValue !== undefined || defaultValue !== null){
			me.combobox("setValue", defaultValue);
		}else{
			me.combobox("setValue", []);
		};
		return me;
	},
	selectNoTrigger: function(me, valueArray){
		var me = me || this,
			obj = me.get(0),
			container = me.combobox("getContainer"),
			checkboxs = container.find("input.combobox-checkbox"),
			valueArray = valueArray[1];

		var vOld = me.combobox("getValue").sort();

		if ($.type(valueArray) === "string"){
			valueArray = [valueArray];
		};

		if (obj.multiSelect){
			//å¤šé€‰æƒ…å†?
			var valueObj = (function(){
				var valueObj = {};
				for (var index = 0; index < valueArray.length; index++){
					valueObj[valueArray[index]] = true;
				};
				return valueObj;
			})();
			
			checkboxs.each(function(i, obj){
				var tar = $(obj);
				if (tar.val() in valueObj){
					tar.closest("li.combobox-list").addClass("selected");
					obj.checked = true;
				};
			});
		}else{
			//å•é€‰æƒ…å†?
			if (valueArray.length > 0){
				valueArray = valueArray[0];
			};
			checkboxs.each(function(i, obj){
				var tar = $(obj);
				if (tar.val() == valueArray){
					tar.closest("li.combobox-list").addClass("selected");
					obj.checked = true;
				}else{
					tar.closest("li.combobox-list").removeClass("selected");
					obj.checked = false;
				};
			});
		}
		
		//me.val(vNew[0]);//console.log(me)
		me.combobox("setText").val(valueArray);
		return me;
	}
});

})(jQuery);