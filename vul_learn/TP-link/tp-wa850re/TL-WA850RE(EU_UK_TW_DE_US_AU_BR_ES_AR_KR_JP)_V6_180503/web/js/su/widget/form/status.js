// JavaScript Document
(function($){

$.su.Widget("status", {
	defaults: {
		proxy: null,
		fieldLabel: null,
		interval: 500,

		loadingText: $.su.CHAR.OPERATION.CONNECTING,
		loadedText: $.su.CHAR.OPERATION.CONNECTED,
		loadedFailedText: $.su.CHAR.OPERATION.CONNECTFAILED,

		unloadingText: $.su.CHAR.OPERATION.DISCONNECTING,
		unloadedText: $.su.CHAR.OPERATION.DISCONNECTED,
		unloadedFailedText: $.su.CHAR.OPERATION.DISCONNECTFAILED,

		showText: true
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var inHTML = 	"<div class=\"container widget-container status-container "+obj.cls+"\">";

			if (obj.fieldLabel !== null){
				inHTML +=		"<div class=\"widget-fieldlabel-wrap "+obj.labelCls+"\">";
				inHTML +=			"<label class=\"widget-fieldlabel status-fieldlabel\">"+obj.fieldLabel+"</label>";
				if (obj.fieldLabel !== ""){
					inHTML +=		"<span class=\"widget-separator\">"+obj.separator+"</span>";
				};
				inHTML +=		"</div>";
			};

				inHTML += 		"<div class=\"widget-wrap status-wrap\">";
				inHTML +=			"<span class=\"icon\"></span>";

			var textCls = obj.textCls || "";

				inHTML +=			"<span class=\"text "+textCls+"\"></span>";
				inHTML +=		"</div>";

				inHTML +=	"</div>";

			var container = $(inHTML);
			tar.replaceWith(container);
			container.append(tar.addClass("hidden"));

			if (!obj.showText){
				container.find("span.text").css("display", "none");
			};


			var proxy = obj.proxy;
			if (proxy && !proxy.isProxy){
				obj.proxy = new $.su.Proxy(proxy);
			}
		});
		
		me.status("setNormal");
		return me;
	},
	sync: function(me, param){	//data, callback_success, callback_failed
		var me = me || this,
			obj = me.get(0),
			proxy = obj.proxy,
			data = param[1] || {},
			callback_success = param[2] || null,
			callback_failed = param[3] || null;

		if (!proxy || !proxy.isProxy){
			return me;
		};

		proxy.write(data, function(data, status, xhr){
			//成功的回调
			if (callback_success){
				callback_success.call(me, data, status, xhr);
			};
		}, function(data, errorcode, others){
			//失败的回调
			if (callback_failed){
				callback_failed.call(me, errorcode, others);
			};
		});

		return me;
	},
	
	//方便开发添加的几个方法
	connect: function(me, param){	//data, callback_success, callback_failed
		var me = me || this,
			obj = me.get(0),
			data = param[1] || {},
			callback_success = param[2] || null,
			callback_failed = param[3] || null,
			data = $.extend({
				"operation": "connect"
			}, data);

		me.status("setLoading", obj.loadingText);

		me.status("sync", data, function(data, status, xhr){
			//console.log("succ", data)
			me.status("setSuccess", obj.loadedText);
			if (callback_success){
				callback_success.call(me, data, status, xhr);
			};
		}, function(errorcode, others){
			//console.log("fail", data, obj.loadedFailedText)
			loadedFailedTextArray
			me.status("setFailed", obj.loadedFailedText);
			if (callback_failed){
				callback_failed.call(me, errorcode, others);
			};
		});

		return me;
	},
	disconnect: function(me, param){	//data, callback, callback_success, callback_failed
		var me = me || this,
			obj = me.get(0),
			data = param[1] || {},
			callback_success = param[2] || null,
			callback_failed = param[3] || null,
			data = $.extend({
				"operation": "disconnect"
			}, data);

		me.status("setLoading", obj.unloadingText);

		me.status("sync", data, function(data, status, xhr){
			me.status("setSuccess", obj.unloadedText);
			if (callback_success){
				callback_success.call(me, data, status, xhr);
			};
		}, function(errorcode, others){
			me.status("setFailed", obj.unloadedFailedText);
			if (callback_failed){
				callback_failed.call(me, errorcode, others);
			};
		});
		return me;
	},

	refresh: function(me, param){
		var me = me || this,
			obj = me.get(0),
			data = param[1] || {},
			callback_success = param[2] || null,
			callback_failed = param[3] || null;
			data = $.extend({
				"operation": "refresh"
			}, data);

		me.status("sync", data, function(data, status, xhr){
			if (callback_success){
				callback_success.call(me, data, status, xhr);
			};
		}, function(errorcode, others){
			if (callback_failed){
				callback_failed.call(me, errorcode, others);
			};
		});

		return me;
	},

	//以下几个都是样式上的修改
	reset: function(me){
		var me = me || this,
			container = me.closest("div.status-container"),
			textContainer = container.find("div.status-wrap span.text");

		textContainer.empty();

		container.removeClass("loading failed success normal");

		return me;
	},
	setNormal: function(me, text){
		var me = me || this,
			container = me.closest("div.status-container"),
			text = text[1] || "";

		me.status("reset");
		container.addClass("normal");
		me.status("setText", text);
		return me;
	},
	setSuccess: function(me, text){
		var me = me || this,
			container = me.closest("div.status-container"),
			text = text[1] || "";

		me.status("reset");
		container.addClass("success");
		me.status("setText", text);

		return me;
	},
	setFailed: function(me, text){
		var me = me || this,
			container = me.closest("div.status-container"),
			text = text[1] || "";

		me.status("reset");
		container.addClass("failed");
		me.status("setText", text);

		return me;
	},
	setLoading: function(me, text){
		var me = me || this,
			container = me.closest("div.status-container"),
			text = text[1] || "";

		me.status("reset");
		container.addClass("loading");
		me.status("setText", text);

		return me;
	},
	setText: function(me, text){
		var me = me || this,
			container = me.closest("div.status-container"),
			textContainer = container.find("div.status-wrap span.text"),
			text = text[1] || "";
		//console.log(textContainer, "text", text)
		textContainer.empty().html(text);

		return me;
	}

});

})(jQuery);