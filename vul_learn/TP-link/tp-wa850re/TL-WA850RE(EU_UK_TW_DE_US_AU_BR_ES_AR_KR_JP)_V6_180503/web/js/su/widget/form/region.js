// JavaScript Document
(function($){

var REG_CHAR = $.su.CHAR.REGION;

$.su.Widget("region", {
	defaults: {
		noneSelectedText: $.su.CHAR.NOSELECTEDTEXT,
		tabs: [
			{title: "ABCD", classify: "ABCD"},
			{title: "EFGHI", classify: "EFGHI"},
			{title: "JKMN", classify: "JKMN"}

		],
		items: [
			{text: REG_CHAR.ALBANIA, value: "alb", search: "albania", classify: "ABCD", capital: "A"},
			{text: REG_CHAR.ALGERIA, value: "alg", search: "algeria", classify: "ABCD", capital: "A"},
			{text: REG_CHAR.ARGENTINA, value: "arg", search: "Argentina", classify: "ABCD", capital: "A"},
			{text: REG_CHAR.ARMENIA, value: "arm", search: "Armenia", classify: "ABCD", capital: "A"},
			{text: REG_CHAR.AUSTRALIA, value: "ausa", search: "Australia", classify: "ABCD", capital: "B"},
		]
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var target = $(obj);
			$.extend(obj, defaults, options);

			var	tabs = obj.tabs;

			var inHTML = 	"<div class=\"container widget-container region-container "+obj.cls+"\">";

			if (obj.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+obj.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel region-fieldlabel\">"+obj.fieldLabel+"</label>";
				if (obj.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+obj.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML +=		"<div class=\"widget-wrap region-wrap\">";
				inHTML +=			"<input class=\"region-text\" type=\"text\" value=\""+obj.noneSelectedText+"\"/>";
				inHTML +=			"<a class=\"region-switch\" href=\"javascript:void(0);\"></a>";

				//搜索框
				inHTML +=			"<div class=\"region-search-wrap\">";
				inHTML +=				"<ul class=\"region-search\"></ul>";
				inHTML +=			"</div>";

				//选择框
				inHTML +=			"<div class=\"region-select-wrap\">";
				inHTML +=				"<div class=\"region-tabs-container\">";
				inHTML +=					"<ul class=\"region-tabs\">";

				inHTML +=					"</ul>";
				inHTML +=				"</div>";

				inHTML +=				"<div class=\"region-content-container\">";
				inHTML +=				"</div>";


				inHTML +=			"</div>";

				inHTML +=		"</div>";

				inHTML +=	"</div>";


			var container = $(inHTML);
			target.replaceWith(container);
			container.prepend(target.addClass("hidden region-value"));

		});

		//初始化内容
		me.region("initSelection");
		me.region("initSearch");

		//事件绑定
		var container = me.region("getContainer");
		container.delegate("a.region-switch", "click", function(e){
			e.stopPropagation();
			//console.log("a.region-switch clicked");
			var searchContainer = container.find("div.region-search-wrap"),
				regionContent = container.find("div.region-select-wrap");

			searchContainer.fadeOut(100, function(e){
				regionContent.slideDown(200);
			});

		}).delegate("div.region-select-wrap", "click", function(e){
			e.stopPropagation();	//防止点击在选框内部，选框消失。
		}).delegate("input.region-text", "keyup", function(e){
			//console.log("input.region-text")
			var searchContainer = container.find("div.region-search-wrap"),
				regionContent = container.find("div.region-select-wrap");

			regionContent.fadeOut(100, function(e){
				searchContainer.slideDown(200);
			});

		});

		me.region("setValue", me.get(0).value);
		return me;
	},
	initSearch: function(me){
		var me = me || this,
			obj = me.get(0),
			items = obj.items,
			container = me.region("getContainer"),
			searchContainer = container.find("ul.region-search");

		var searchHTML = "";
		for (var index = 0, len = items.length; index < len; index++){
			var item = items[index];

			searchHTML +=	"<li class=\"region-search-btn\" data-search=\""+item.search+"\">";
			searchHTML +=		"<a class=\"\" href=\"javascript:void(0);\">"+item.text+"</a>";
			searchHTML +=	"</li>";
		};

		searchContainer.append($(searchHTML));

		return me;
	},
	initSelection: function(me){
		var me = me || this,
			obj = me.get(0),
			tabs = obj.tabs,
			items = obj.items,
			container = me.region("getContainer"),
			regionTabs = container.find("ul.region-tabs"),
			regionContent = container.find("div.region-content-container");

		var tabInHTML = "",
			selectionInHTML = "";
		for (var index = 0, len = tabs.length; index < len; index++){
			var tab = tabs[index];

			tabInHTML +=			"<li class=\"region-tab\">";
			tabInHTML +=				"<a class=\"\" href=\"javascript:void(0);\">"+ tab.title +"</a>";
			tabInHTML +=			"</li>";

			selectionInHTML +=		"<div class=\"region-content-wrap\" data-classify=\""+tab.classify+"\">";
			selectionInHTML +=		"</div>";
		};

		regionTabs.empty().append($(tabInHTML));
		regionContent.empty().append($(selectionInHTML));

		//新建哈希表
		var classObj = {};
		for (var index = 0, len = items.length; index < len; index++){
			var item = items[index];
			classObj[item.classify] = classObj[item.classify] || [];
			classObj[item.classify].push(item);
		};

		//创建选项
		for (var index in classObj){	//这个表是有序的...
			var oneClass = classObj[index];
			oneClass.sort(function(a, b){
				return a.capital - b.capital;
			});		//按capital排序...

			var contentHTML = "",
				cCapital = oneClass[0].capital;
				//首行
				contentHTML +=		"<div>";
				contentHTML +=			"<div>";
				contentHTML +=				"<span>"+cCapital+"</span>";
				contentHTML +=			"</div>";

				contentHTML +=			"<div>";
				contentHTML +=				"<ul>";

			for (var jndex = 0, len = oneClass.length; jndex < len; jndex++){
				var item = oneClass[jndex];
				if (cCapital !== item.capital){
					cCapital = item.capital;
					//上一组结尾
					contentHTML +=			"</ul>";
					contentHTML +=		"</div>";
					contentHTML +=	"</div>";

					//下一组开始
					contentHTML +=	"<div>";
					contentHTML +=		"<div>";
					contentHTML +=			"<span>"+cCapital+"</span>";
					contentHTML +=		"</div>";

					contentHTML +=		"<div>";
					contentHTML +=			"<ul>";


					contentHTML +=				"<li class=\"region-select\">";
					contentHTML +=					"<a href=\"javascript:void(0);\" data-value=\""+item.value+"\">"+item.text+"</a>";
					contentHTML +=				"</li>";

				}else{

					contentHTML +=				"<li class=\"region-select\">";
					contentHTML +=					"<a href=\"javascript:void(0);\" data-value=\""+item.value+"\">"+item.text+"</a>";
					contentHTML +=				"</li>";

				};
				
			};

				contentHTML +=				"</ul>";
				contentHTML +=			"</div>";
				contentHTML +=		"</div>";

			regionContent.find("div.region-content-wrap[data-classify="+index+"]").append($(contentHTML));
			//console.log(regionContent.find("div.region-content-wrap"), regionContent.find("div.region-content-wrap[data-classify="+index+"]"), index);

		};

		return me;
	},
	setValue: function(me, value){
		var me = me || this,
			value = value[1];

		return me;
	}
});


})(jQuery);