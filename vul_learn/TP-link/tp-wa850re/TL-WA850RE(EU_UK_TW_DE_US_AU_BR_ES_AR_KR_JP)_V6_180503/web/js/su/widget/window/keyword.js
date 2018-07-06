// JavaScript Document
(function($) {

$.su.Widget("keyword",{
	defaults: {
		fieldLabel: null,
		addBtnText: $.su.CHAR.OPERATION.ADD_A_NEW_KEYWORD,
		removeBtnText: $.su.CHAR.OPERATION.REMOVE,
		keywordType: "textbox",
		keywordProperty: {
			fieldLabel: null,
			cls: "inline-block"
		},
		columns: 3,
		maxHeight: 160,
		//currentCol: 0,
		maxKeys: 99999,
		maxKeysText: $.su.CHAR.OPERATION.KEYWORD_MAX_OVERFLOW,
		keyNumbers: 0,
		keyTag: 0
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var inHTML = 	"<div class=\"container widget-container keyword-container "+this.cls+"\">";

			if (this.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel keyword-fieldlabel\">"+this.fieldLabel+"</label>";
				if (this.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+this.separator+"</span>";
				};
				inHTML +=		"</div>";				
			};

				inHTML +=		"<div class=\"widget-wrap keyword-container-wrap\">";
				inHTML +=			"<div class=\"keyword-btn-container\">";
				inHTML +=				"<a class=\"keyword-btn keyword-add-btn\" href=\"javascript:void(0);\">";
				inHTML +=					"<span class=\"keyword-add-btn-wrap\">";
				inHTML +=						"<span class=\"keyword-icon add-icon icon\"></span>";
				inHTML +=						"<span class=\"keyword-text add-text text\">"+obj.addBtnText+"</span>";
				inHTML +=					"</span>";
				inHTML +=				"</a>";


				inHTML +=				"<span class=\"keyword-overflow-warning hidden\">"+ this.maxKeysText +"</span>";

				inHTML +=			"</div>";
				inHTML +=			"<div class=\"keyword-container-div\">";
				inHTML +=				"<table>";
				inHTML +=					"<tbody class=\"keyword-container-body\">";
				inHTML +=					"</tbody>";
				inHTML +=				"</table>";
				inHTML +=			"</div>";
				inHTML +=		"</div>";

				inHTML +=	"</div>";


			var container = $(inHTML);
			tar.replaceWith(container);
			container.append(tar.addClass("hidden"));

			//计算宽度
			/*var w = container.find("div.keyword-container-div").css({
				"max-height": obj.maxHeight
			}).width();
			obj.tdWidth = parseInt(w/obj.columns, 10);*/
		});

		//me.keyword("setValue", [1000, 10001, 100002, 100003, 1000004]);

		var container = me.closest("div.keyword-container");
		container.delegate("a.keyword-remove-btn", "click", function(e){
			e.stopPropagation();
			e.preventDefault();

			me.keyword("removeKey", $(this).attr("data-index"));
		}).delegate("a.keyword-add-btn", "click", function(e){
			e.stopPropagation();
			e.preventDefault();

			if ($(this).hasClass("disabled")){
				return;
			};

			me.keyword("addKey", "");
		});

		return me;
	},
	/*initKey: function(me, value){
		var me = me || this,
			obj = me.get(0),
			value = value[1] || "",

			keywordType = obj.keywordType,
			keywordProperty = obj.keywordProperty,
			currentCol = obj.currentCol,
			columns = obj.columns || 1,
			keywordContainer = me.keyword("getContainer").find("div.keyword-container tbody.keyword-container-body");

		var inHTML = "";
		if (currentCol == 0 || columns <= currentCol){
			//一行满
			inHTML +=	"<tr>";
			for (var index = 0, len = columns; index < len; index++){
				inHTML +=	"<td class=\"keyword-td\"></td>";
			};
			inHTML +=	"</tr>";

			keywordContainer.append($(inHTML));
		};

		var tdContainer = keywordContainer.find("tr:last td.keyword-td").eq(currentCol);

		var input = $("<input />");
		tdContainer.append(input);
		input[keywordType](keywordProperty)[keywordType]("setValue", value);

		inHTML =			"<a class=\"keyword-remove-btn\" href=\"javascript:void(0);\" data-index=\""+(obj.keyTag++)+"\">";
		inHTML +=				"<span class=\"keyword-icon add-icon\"></span>";
		inHTML +=				"<span class=\"keyword-text add-text\">"+obj.removeBtnText+"</span>";
		inHTML +=			"</a>";

		tdContainer.append($(inHTML));

		obj.currentCol++;
		if (obj.currentCol >= columns){
			obj.currentCol = 0;
		};

		return me;
	},*/
	addKey: function(me, value){
		var me = me || this;

		if (me.keyword("hasEmpty")){
			return me;
		};

		var	obj = me.get(0),
			value = value[1] || "",

			keywordType = obj.keywordType,
			keywordProperty = obj.keywordProperty,
			columns = obj.columns || 1,
			container = me.closest("div.keyword-container"),
			keywordContainer = container.find("div.keyword-container-div tbody.keyword-container-body");
		if (obj.maxKeys <= obj.keyNumbers){
			//添加提示
			container.find("span.keyword-overflow-warning").css("display", "inline-block");
			return me;
		};

		container.removeClass("empty");

		var trLast = keywordContainer.find("tr:last"),
			tdContainerList =  trLast.find("td.keyword-td");

		//var inHTML = "";
		if (tdContainerList.length >= columns || trLast.length == 0){
			keywordContainer.append($("<tr></tr>"));
		};

		trLast = keywordContainer.find("tr:last");

		var tdContainer = $("<td class=\"keyword-td\" style=\"display: none; width: "+obj.tdWidth+"px;\"></td>");
		trLast.append(tdContainer);

		obj.keyTag++;
		obj.keyNumbers++;

		var input = $("<input class=\"keyword-content\" data-index=\""+obj.keyTag+"\" />");

		tdContainer.append(input);
		input[keywordType](keywordProperty)[keywordType]("setValue", value);

		var inHTML =			"<a class=\"keyword-btn keyword-remove-btn\" href=\"javascript:void(0);\" data-index=\""+obj.keyTag+"\">";
			inHTML +=				"<span class=\"keyword-icon remove-icon icon\"></span>";
			inHTML +=				"<span class=\"keyword-text remove-text text\">"+obj.removeBtnText+"</span>";
			inHTML +=			"</a>";

		tdContainer.append($(inHTML)).fadeIn(250);
		//console.log(obj.keyNumbers, obj.maxKeys)
		if (obj.maxKeys <= obj.keyNumbers){
			container.find("div.keyword-btn-container").addClass("disabled");
		};

		return me;
	},
	getKeyByIndex: function(me, index){
		var me = me || this;
		var index = index[1];
		var container = me.closest("div.keyword-container");
		//console.log(index);
		var input = container.find("input.keyword-content").get(index);
		//console.log("input", input);
		return input;
	},
	removeKey: function(me, index){
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.keyword-container"),
			index = index[1];

		obj.keyNumbers--;

		var tdContainer = container.find("a.keyword-remove-btn[data-index="+index+"]").closest("td.keyword-td");
		var formContainer = tdContainer.closest("form.form-panel");
		if( tdContainer.find("div.error input.text-text").length != 0 ){
			formContainer.find(".form-error-tips").css("display","none");
			formContainer.find("div.error").removeClass("error");
		}

		tdContainer.fadeOut(350, function(){
			$(this).remove();
			//setTimeout(function(){
			 	me.keyword("refreshLayout");
			//}, 200);
		});

		if (obj.maxKeys <= obj.keyNumbers){
		}else{
			container.find("div.keyword-btn-container").removeClass("disabled");
			container.find("span.keyword-overflow-warning").css("display", "none");
		};
		
		return me;
	},
	refreshLayout: function(me, index){
		var me = me || this,
			obj = me.get(0),
			columns = obj.columns,
			container = me.closest("div.keyword-container"),
			keywordContainer = container.find("div.keyword-container-div tbody.keyword-container-body");

		var tdContainerList = container.find("td.keyword-td");
		tdContainerList.detach();

		keywordContainer.empty();

		var temp = 0;
		for (var index = 0, len = tdContainerList.length; index < len; index++){
			var tdContainer = $(tdContainerList[index]);

			if (temp >= columns || temp == 0){
				//需要新建行
				keywordContainer.append($("<tr></tr>"));
				temp = 1;
			}else{
				temp++;
			};

			keywordContainer.find("tr:last").append(tdContainer);
			tdContainer.find("a.keyword-remove-btn").attr("data-index", index);
		};

		if (tdContainerList.length == 0){
			container.addClass("empty");
		};

		return me;
	},
	getValue: function(me){
		var me = me || this,
			keywordContainer = me.closest("div.keyword-container").find("div.keyword-container-div tbody.keyword-container-body"),
			value = [];

		var keywords = keywordContainer.find("input.keyword-content");
		for (var index = 0, len = keywords.length; index < len; index++){
			var keyword = keywords.eq(index),
				v = keyword.val();
			if (v != ""){
				value.push(v);
			};
		};
		//console.log("value", value);
		return $.su.json.toJSONString(value);
	},
	setValue: function(me, value){
		var me = me || this,
			value = value[1] || "",
			container = me.closest("div.keyword-container"),
			keywordContainer = container.find("div.keyword-container-div tbody.keyword-container-body");

		value = $.su.json.parseJSON(value);
		me.keyword("removeAll");

		for (var index = 0, len = value.length; index < len; index++){
			me.keyword("addKey", value[index]);
		};

		if (len == 0){
			container.addClass("empty");
		};

		return me;
	},
	removeAll: function(me){
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.keyword-container"),
			keywordContainer = container.find("div.keyword-container-div tbody.keyword-container-body");

		keywordContainer.empty();
		obj.keyTag = 0;
		obj.keyNumbers = 0;
		container.addClass("empty");


		container.find("div.keyword-btn-container").removeClass("disabled");
		container.find("span.keyword-overflow-warning").css("display", "none");

		return me;
	},
	removeEmpty: function(me){
		var me = me || this,
			obj = me.get(0),
			keywordContainer = me.closest("div.keyword-container").find("div.keyword-container-div tbody.keyword-container-body"),
			keywordType = obj.keywordType;

		var keywords = keywordContainer.find("input.keyword-content");
		for (var index = 0, len = keywords.length; index < len; index++){
			var keyword = keywords.eq(index);
			if (keyword.val() == ""){
				me.keyword("removeKey", keyword.attr("data-index"));
			};
		};

		return me;
	},
	hasEmpty: function(me){
		var me = me || this,
			obj = me.get(0),
			keywordContainer = me.closest("div.keyword-container").find("div.keyword-container-div tbody.keyword-container-body"),
			keywordType = obj.keywordType;

		var keywords = keywordContainer.find("input.keyword-content");
		for (var index = 0, len = keywords.length; index < len; index++){
			var keyword = keywords.eq(index);
			if (keyword.val() == ""){
				keyword[keywordType]("setError");
				return true;
			};
		};

		return false;
	},
	setMaxKeys: function(me, max){
		var me = me || this,
			obj = me.get(0),
			maxKeys = max[1],
			container = me.closest("div.keyword-container");

		if (maxKeys){
			obj.maxKeys = maxKeys;
		};

		if (obj.maxKeys <= obj.keyNumbers){
			container.find("div.keyword-btn-container").addClass("disabled");
			//container.find("span.keyword-overflow-warning").css("display", "inline-block");
		};

		return me;
	},
	validate: function(me){
		var me = me || this,
			obj = me.get(0),
			keywordContainer = me.closest("div.keyword-container").find("div.keyword-container-div tbody.keyword-container-body"),
			keywordType = obj.keywordType,
			result = true;
		//前N个若出错，提示
		var keywords = keywordContainer.find("input.keyword-content"),
			len = keywords.length;

		for (var index = 0; index < len-1; index++){
			var keyword = keywords.eq(index);
			if (keyword.val() == ""){
				if(!obj.allowBlank)
				{
					keyword[keywordType]("setError");
					return false;
				}
			}else{
				if (!keyword[keywordType]("validate")){
					return false;
				};
			};
		};

		//最后一个key的特殊处理
		if (len){
			keyword = keywords.eq(len-1);
			if (keyword.val() == ""){
				//console.log("here");
				me.keyword("removeKey", len-1);
			}else{
				if (!keyword[keywordType]("validate")){
					return false;
				};
			};
		};

		//其他验证
		if (obj.validator){
			result = obj.validator.call(me);
		};

		if (!result){
			return false;
		}else{
			var v = me.keyword("getValue")
			me.val(v);
			return true;
		};
	}
});

})(jQuery);