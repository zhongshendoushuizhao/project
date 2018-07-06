// JavaScript Document
(function($){

$.su.Widget("wizard", {
	defaults: {
		autoStart: true,
		//submitType: "complete",	//complete/step
		items: [
			{name: "", label: "", content: "", prevButton: true, prevHandler: null, nextButton: true,  nextHandler: null}
		],
		currentIndex: 0,

		finishHandler: null
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var container = $(obj);
			$.extend(obj, defaults, options);


			var	inHTMLStep =	"<div class=\"process-flow\">";
				inHTMLStep +=		"<div class=\"process-flow-wrap\">";

			var inHTML = 		"<div class=\"form-container\">";

				
				

			var items = obj.items,
				len = items.length,
				pos = "up";

			for (var index = 0; index < len; index++){
				var item = items[index],
					last = (index == (len-1) ) ? "lst" : "",
					pos = (pos === "up") ? "down" : "up",
					labelCls = item.labelCls || "";

				//steps图标的部分
				inHTMLStep += 			"<div name=\""+item.name+"\" class=\"process-flow-step step"+index+" "+last+"\">";
				inHTMLStep +=				"<span class=\"icon\"></span>";

				if (item.label){
					inHTMLStep +=			"<span class=\"text "+pos+" "+labelCls+"\">"+item.label+"</span>";
				};

				inHTMLStep +=			"</div>";

				if (last != "lst"){
					inHTMLStep +=		"<span class=\"bar\">";
					inHTMLStep +=			"<span class=\"bar-inner\">";
					inHTMLStep +=			"</span>";
					inHTMLStep +=		"</span>";
				};
				

				//内容部分
				inHTML +=			"<div class=\"form-step\" data-step=\""+index+"\" name=\""+item.name+"\">";
				inHTML +=				"<div class=\"form-content\" data-step=\""+index+"\" name=\""+item.name+"\"></div>";
				inHTML +=				"<div class=\"form-buttons-container\">";
				if (item.prevButton !== false){
					inHTML +=				"<button type=\"button\" class=\"button-prev wizard-buttons\" data-name=\""+item.name+"\" data-step=\""+index+"\"></button>";
				};
				if (item.nextButton !== false){
					inHTML +=				"<button type=\"button\" class=\"button-next wizard-buttons\" data-name=\""+item.name+"\" data-step=\""+index+"\"></button>";
				};
				inHTML +=				"</div>";
				inHTML +=			"</div>";
				

			};
				inHTMLStep += 		"</div>";
				inHTMLStep += 	"</div>";
				inHTML +=		"</div>";

			container.append($(inHTMLStep)).append($(inHTML)).addClass("container widget-container wizard-container");


			for (var index = 0; index < len; index++){
				var item = items[index];
				var form = $(item.content).attr("name", item.name),
					stepContainer = container.find("div.form-step[name="+item.name+"]").css("display", "none");

				//内容替换
				stepContainer.find("div.form-content").append(form);
				//按钮初始化
				if (item.prevButton !== false){
					stepContainer.find("button.button-prev").button({
						text: item.prevButtonText || $.su.CHAR.OPERATION.BACK,
						cls: "wizard-btn btn-prev",
						handler: function(e){
							me.wizard("goPrev");
						}
					});
				};
				
				if (item.nextButton !== false){
					stepContainer.find("button.button-next").button({
						text: item.nextButtonText || $.su.CHAR.OPERATION.NEXT,
						cls: "wizard-btn btn-next",
						handler: function(e){
							me.wizard("goNext");
						}
					});
				}
			};

		});

		me.wizard("geToIndex", 0);
		return me;
	},

	setCurrent: function(me, params){	//stepName
		var me = me || this,
			stepName = params[1];

		var stepIcon = me.find("div.process-flow-step[name='"+stepName+"']");

		stepIcon.addClass("current");
		var stepBar = stepIcon.prev("span.bar").addClass("processed");
		stepBar.find("span.bar-inner").css("width", "0").animate({
			"width": "+=100%"
		}, 200);

		me.find("div.form-container div.form-step").css("display", "none");
		me.find("div.form-container div.form-step[name='"+stepName+"']").fadeIn(200);
	},
	setProcessed: function(me, params){	//stepName
		var me = me || this,
			stepName = params[1];

		var stepIcon = me.find("div.process-flow-step[name='"+stepName+"']");

		stepIcon.addClass("processed");
		var stepBar = stepIcon.prev("span.bar").addClass("processed");
		//console.log(stepBar.find("span.bar-inner"))
		stepBar.find("span.bar-inner").css("width", "0").animate({
			"width": "+=100%"
		}, 200);
	},
	setNormal: function(me, params){	//setpName
		var me = me || this,
			stepName = params[1];

		var stepIcon = me.find("div.process-flow-step[name='"+stepName+"']");

		stepIcon.removeClass("current, processed");
		var stepBar = stepIcon.prev("span.bar").removeClass("current, processed");

		stepBar.find("span.bar-inner").css("width", "100%").animate({
			"width": "-=0"
		}, 200);
	},
	setNormalAll: function(me, params){
		me.find("div.process-flow-step, span.bar").removeClass("current processed");
	},

	goNext: function(){
		var me = me || this,
			obj = me.get(0),

			items = obj.items,
			len = items.length,
			currentIndex = obj.currentIndex,
			nextIndex = currentIndex + 1;
		
		var item = items[currentIndex],
			res;

		if (item.nextHandler){
			res = item.nextHandler.call(me);
		};

		if (res === false){
			return;
		};


		if (currentIndex >= len){
			return false;
		}else if (currentIndex === len-1){
			nextIndex = currentIndex;
		};

		
		var	currentName = item["name"],
			nextName = items[nextIndex]["name"];


		var stepIcon = me.find("div.process-flow-step[name='"+currentName+"']").removeClass("current").addClass("processed"),
			stepBarNext = stepIcon.next("span.bar"),
			stepBarNextInner = stepBarNext.find("span.bar-inner");

		var nextIcon = me.find("div.process-flow-step[name='"+nextName+"']")

		stepBarNextInner.width(0);
		stepBarNext.addClass("processed");
		stepBarNextInner.animate({
			width: "+=100%"
		}, 200,function(){
			stepBarNextInner.css("width", "100%");
			nextIcon.addClass("current");

			me.find("div.form-container div.form-step").css("display", "none");
			me.find("div.form-container div.form-step[name='"+nextName+"']").fadeIn(150, function(){
				if ($.su.layout.doLayout){
					$.su.layout.doLayout();
				};
			});
		});

		obj.currentIndex = nextIndex;

		return me;
	},
	goPrev: function(){
		var me = me || this,
			obj = me.get(0),

			items = obj.items,
			len = items.length,

			currentIndex = obj.currentIndex,
			prevIndex = currentIndex - 1;

		var item = items[currentIndex],
			res;
		
		if (item.prevHandler){
			res = item.prevHandler.call(me);
		};

		if (res === false){
			return me;
		};


		if (currentIndex < 0){
			return false;
		}else if (currentIndex === 0){
			prevIndex = 0;
		};
		
		var	currentName = item["name"],
			prevName = items[prevIndex]["name"];

		var stepIcon = me.find("div.process-flow-step[name='"+currentName+"']").removeClass("current processed"),
			stepBarPrev = stepIcon.prev("span.bar"),
			stepBarPrevInner = stepBarPrev.find("span.bar-inner");

		var prevIcon = me.find("div.process-flow-step[name='"+prevName+"']")

		stepBarPrevInner.css("width", "100%");
		stepBarPrev.addClass("processed");
		stepBarPrevInner.animate({
			width: "-=0px"
		}, 200,function(){
			stepBarPrev.removeClass("processed");
			stepBarPrevInner.css("width", "0");
			prevIcon.removeClass("processed").addClass("current");
			stepIcon.removeClass("current processed");

			me.find("div.form-container div.form-step").css("display", "none");
			me.find("div.form-container div.form-step[name='"+prevName+"']").fadeIn(150, function(){
				if ($.su.layout.doLayout){
					$.su.layout.doLayout();
				};
			});

		});

		obj.currentIndex = prevIndex;

		return me;
	},
	/*goFinish: function(){
		var me = me || this,
			obj = me.get(0);

		if (obj.finishHandler){
			finishHandler.call(me);
		};
	},*/

	goTo: function(me, params){	//stepName
		var me = me || this,
			stepName = params[1];
		
		var obj = me.get(0),
			items = obj.items,
			currentIndex = obj.currentIndex;

		me.wizard("setNormalAll");

		var flag = false;	//标记是否搜索到步骤
		for (var index = 0; index < items.length; index++){
			var item = items[index],
				name = item.name;
			//console.log(index);

			if (flag == false){
				if (name == stepName){
					//当前这步骤
					me.wizard("setCurrent", name);
					currentIndex = index;
					flag = true;
					continue;
				}else{
					//已经完成的步骤
					me.wizard("setProcessed", name);
					continue;
				};
			}else{
				me.wizard("setNormal", name);
				continue;
			}
			
		};

		if (flag){
			/*if (currentIndex === 0){
				//可能需要添加隐藏before
				me.find("div.buttons-container div.next-button-container").css("display", "inline-block");
				me.find("div.buttons-container div.finish-button-container").css("display", "none");
			}else if (currentIndex === items.length-1){
				me.find("div.buttons-container div.next-button-container").css("display", "none");
				me.find("div.buttons-container div.finish-button-container").css("display", "inline-block");
			}else{
				me.find("div.buttons-container div.next-button-container").css("display", "inline-block");
				me.find("div.buttons-container div.finish-button-container").css("display", "none");
			};*/

			if (currentIndex >= 0 && currentIndex <= items.length-1){
				me.find("div.form-step[data-step="+currentIndex+"]");
			};			

			obj.currentIndex = currentIndex;

			if ($.su.layout.doLayout){
				$.su.layout.doLayout();
			};

			return true;
		}else{
			//console.error("Invalid Step Name or index!");
			return false;
		};
		
		return me;
	},
	geToIndex: function(me, params){	//stepIndex
		var me = me || this,
			stepIndex = params[1];

		var obj = me.get(0),
			items = obj.items,
			stepName = items[stepIndex].name;

		if (!stepName){
			//console.error("Invalid Step Name or index!");
			return false;
		}else{
			return me.wizard("goTo", stepName);
		};

		return me;
	},
	getContainer: function(me){
		var me = me || this;
		return me;
	},
	showButtons: function(me){
		var me = me || this,
			buttons = me.find("button.wizard-buttons");

		buttons.each(function(i, obj){
			$(obj).button("show");
		});

		return me;
	},
	hideButtons: function(me){
		var me = me || this,
			buttons = me.find("button.wizard-buttons");

		buttons.each(function(i, obj){
			$(obj).button("hide");
		});

		return me;
	}
});

})(jQuery);