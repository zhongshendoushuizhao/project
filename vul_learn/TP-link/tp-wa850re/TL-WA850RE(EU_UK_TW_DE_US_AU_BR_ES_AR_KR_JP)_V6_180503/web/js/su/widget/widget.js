// JavaScript Document
(function($){
$.su = $.su || {};

$.su.Widget = function(name, options){
	var constructor = $.fn[name];

	//基本属性
	var fn = {
		defaults: {
			separator: ":",
			cls: "",
			labelCls: "m",
			inputCls: "l",
			
			fieldLabel: "",
			tips: null,
			tipsCls: "m",
			errorTipsCls: ""
		},
		create: null,	//function(i, obj)
		validate: function(){
			return true
		}, 	//function(me)	
		/*widgetname: name,*/
		setValue: function(me, _value){
			var me = me || this,
				value = _value[1];
			//console.log("setValue, Widget");
			//console.log("setValue", value)
			$(me).attr("snapshot", value);
			$(me).val(value);

			return me;
		},		//以上几个函数可能需要在各个组件中独立定义

		enable: function(){
			var me = me || this,
				container = me[name]("getContainer");

			container.removeClass("disabled");
			me.prop("disabled", false);

			return me;
		},
		disable: function(){
			var me = me || this,
				container = me[name]("getContainer");

			container.addClass("disabled");
			me.prop("disabled", true);
			//..需要后续的禁用工作！
			return me;
		},
		/*option: function(me, key, value){

		},*/
		setFieldLabel: function(me, _fieldLabel){
			var me = me || this,
				container = me[name]("getContainer");
			var fieldLabel = _fieldLabel[1] || me.get(0).fieldLabel || "";
			container.find("label.widget-fieldlabel").html(fieldLabel);
			return me;
		},
		setNormal: function(me){
			var me = me || this,
				obj = me.get(0),
				container = me[name]("getContainer");

			//if (obj.tips){
				me[name]("setTips", obj.tips);
			//}
			
			container.removeClass("focus error disable dirty");
			container.find("span.widget-validate-icon").css({
				"display": "none"
			});
			container.find("div.widget-error-tips-wrap").css({
				"display": "none"
			});
			container.find("div.widget-error-tips").height('');
			container.find("div.widget-error-tips").removeClass("show");
		},
		setFocus: function(me){
			var me = me || this,
				container = me[name]("getContainer");

			me[name]("setNormal");
			container.addClass("focus");
			return me;
		},
		removeFocus: function(me){
			var me = me || this,
				container = me[name]("getContainer");

			//me[name]("setNormal");
			container.removeClass("focus");
			return me;
		},
		setValid: function(me){
			var me = me || this,
				container = me[name]("getContainer");

			//me[name]("setNormal");
			container.removeClass("error");
			container.addClass("valid");

			container.find("span.widget-validate-icon").css({
				"display": "inline-block"
			});
			container.find("div.widget-error-tips-wrap").css({
				"display": "none"
			})
			
			container.find("div.widget-error-tips").height('');
			container.find("div.widget-error-tips").removeClass("show");
			
			return me;
		},
		setError: function(me, tips){
			var me = me || this,
				tips = tips[1] || null,
				container = me[name]("getContainer");

			if (tips){
				me[name]("setErrorTips", tips);
			};

			//me[name]("setNormal");
			container.removeClass("valid");
			container.addClass("error");

			container.find("span.widget-validate-icon").css({
				"display": "inline-block"
			});
			if (tips){
				// container.find("div.widget-error-tips").height(container.find("div.widget-error-tips-wrap").height());
				container.find("div.widget-error-tips").height(container.find("div.error-tips-content").outerHeight());
				container.find("div.widget-error-tips").addClass("show");
			}
			return me;
		},
		reset: function(me){
			var me = me || this,
				obj = me.get(0),
				defaultValue = obj.defaultValue || "";

			if(obj.xtype === "password"){
				me.closest("div.password-container").find("input.password-hidden").val(defaultValue);
			}
			me.val(defaultValue);
			return me;
		},
		setDirty: function(me){
			var me = me || this,
				container = me[name]("getContainer");

			me[name]("setNormal");
			container.addClass("dirty");
			return me;
		},
		setTips: function(me, _tips){
			var me = me || this,
				container = me[name]("getContainer"),
				tipsContainer = container.find("div.widget-tips div.tips-content"),
				tips = _tips[1] || "";
			if(me.get(0)){
				me.get(0).tips = tips;
			}
				//alert(tips);
			//console.log(me, name,  tips)
			if ($.type(tips) === "string"){
				tipsContainer.html(tips);
			};

			if (tips == ""){
				tipsContainer.hide();
				tipsContainer.css("display", "none");
			}else{
				tipsContainer.show();
				tipsContainer.fadeIn(150);
			};

			return me;		
		},
		setErrorTips: function(me, _tips){
			var me = me || this,
				container = me[name]("getContainer"),
				tips = _tips[1] || "",
				c = container.find("div.widget-error-tips-wrap").removeClass("show").css({
					left: "-9999px",
					top: "-9999px",
					display: "block"
				}),
				content = c.find("div.error-tips-content")/* .css({
					"width": "inherit",
					"white-space": "normal"
				}); */

			if (tips == ""){
				c.css("display", "none");
			}else{
				var w = c.width();
				// content.css({
					// "width": w,
					// "white-space": "normal"
				// });

			//console.log(container.find("div.error-tips-content"));
			if ($.type(tips) === "string"){
				content.html(tips);
			};

				c.css({
					"display": "block",
					left: 0,
					top: 0
				});

				setTimeout(function(){
					c.addClass("show");
				}, 200);
			};

			return me;
		},
		hideErrorTips: function(){
			var me = me || this,
				container = me[name]("getContainer"),
				//tips = _tips[1] || "",
				c = container.find("div.widget-error-tips-wrap").removeClass("show").css({
					// left: "-9999px",
					// top: "-9999px",
					display: "none"
				}),
				content = c.find("div.error-tips-content").css({
					"width": "inherit",
					"white-space": "normal"
				});
			container.find("div.widget-error-tips").height('');
			container.find("div.widget-error-tips").removeClass("show");
		},
		setPosition: function(me, _pos){	//当输入值为center, center时居中显示
			var me = me || this,
				container = me[name]("getContainer"),
				posX = _pos[1] === "center" ? parseInt((Math.max($(window).width(),$("body").width(),document.body.scrollWidth,document.body.clientWidth,document.documentElement.clientWidth,1000) - container.width())/2, 10) : _pos[1] || 0,
				posY = _pos[2] === "center" ? parseInt(($(window).height() - container.height())/2, 10) : _pos[2] || 0;

				posX = posX < 0 ? 0 : posX;
				posY = (posY - 60) < 0 ? 0 : posY - 60;
				
			//这里没有考虑scroll！
			container.css({
				left: posX,
				top: posY
			});

			return {
				x: posX,
				y: posY
			}
		},
		getContainer: function(me){
			var me = me || this;
			if (me.hasClass("widget-container")){
				return me;
			}else{
				var container = me.closest("div.widget-container");
				//console.log("Widget", name, me, container)
				if (container.get(0)){
					return $(container.get(0));
				}else{
					//console.trace();
					//console.error("No Container Found!");
					return null;
				};
			};
		},
		getWidth: function(me){
			var me = me || this;
			return me[name]("getContainer").width();
		},
		getHeight: function(me){
			var me = me || this;
			return me[name]("getContainer").height();
		},
		getSize: function(me){
			var me = me || this,
				container = me[name]("getContainer");
			return {
				"width": container.width(),
				"height": container.height()
			};
		},
		getValue: function(me){
			var me = me || this;
			return me.val();
		},
		show: function(me){
			var me = me || this,
				container = me[name]("getContainer");
			container.fadeIn(150);
			return me;
		},
		hide: function(me){
			var me = me || this,
				container = me[name]("getContainer");
			container.css({
				"display": "none"
			});
			return me;
		}
	};
	
	constructor = constructor || function(options){
		var me = this,
			defaults = constructor.defaults || {},
			options = options || {};
			
		defaults = $.extend(fn.defaults, defaults);
		//console.log(name)
		defaults.xtype = name;
		defaults.isWidget = true;

		if (options.title){
			options._title = options.title;
			delete options.title;
		};	//防止hover效果！

		//console.log(me, options.minLength, options.maxLength)
		if (options.minLength){
			options._minLength = options.minLength;
			delete options.minLength;
		};
		if (options.maxLength){
			options._maxLength = options.maxLength;
			delete options.maxLength;
		};
		//console.log(me, options._minLength, options._maxLength)

		//me.addClass("container widget-container");	//这句话不应该在这里...
		if ($.type(options) === "string"){
			//console.log(constructor, options)
			return constructor[options].call(me, me, arguments);
		};

		if (!constructor.create){
			//console.error("No constructor!");
		}else{
			/*return me.each(function(i, obj){
				constructor.create.call(this, defaults, options, i, obj);
			});*/
			return constructor.create.call(me, defaults, options);
		};
	};

	$.fn[name] = $.extend(constructor, fn, options);
	return constructor;
};

//几个公用的事件监听
$("html").delegate("input", "focus", function(e){
	e.stopPropagation();
	e.preventDefault();
	//input选中全选
	//$(this).select();
}).on("click", function(e){
	//combobox取消选择
	e.stopPropagation();
	$("div.region-select-wrap, div.region-search-wrap").hide();
	$("div.combobox-list-wrap").hide().attr("toggleflag", "hidden");
	$("div.combobox-container").removeClass("selected focus");

	$("div.widget-error-tips-wrap.show").css("display", "none");
	// $("div.widget-error-tips").height('');
	$("div.timepicker-msg-container").removeAttr("dragFlag");

}).on("mouseup", function(e){
	e.stopPropagation();
	$("div.button-container").removeClass("clicked");
	$("div.btn-help-container a.btn-help").removeClass("clicked");

	$("div.timepicker-msg-container-wrap").trigger("mouseup");
	// $("div.timepicker-msg-container").removeAttr("dragFlag");
	// $("div.timepicker-select-wrap").css({
	// 	"display": "none",
	// 	"width": 0,
	// 	"height": 0
	// });
}).on("mousedown", function(e){
	$("div.widget-error-tips-wrap.show").css("display", "none");
	$("div.widget-error-tips").height('');
});/*.on("keyup", function(e){
	if (e.key == "Enter" || e.keyCode == 13){
		var target = e.target;
		var form = $(target).closest(".form-panel");
		var obj = form.get(0);
		if (obj && !obj.preventEnter && !obj.submiting){
			form.form("submit");
		};
	};
})*/;


$(window).on("resize", function(e){
	var msg = $("div.msg-container");
	msg.each(function(i, obj){
		var m = $(obj);
		if (obj.shown || m.attr("shown")){
			m.msg("setPosition", "center", "center");
		};
	})
	
});

})(jQuery);