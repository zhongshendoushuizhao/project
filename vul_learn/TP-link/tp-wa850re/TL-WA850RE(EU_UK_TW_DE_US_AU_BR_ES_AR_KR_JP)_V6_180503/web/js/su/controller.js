// JavaScript Document
(function($){

$.su.Controller = function(options){
	var defaults = {
		xtype: "controller",
		host: null,	//这个应该没必要！
		view: null,
		store: null,
		//model: null,	//如果这个不需要暂时不添加
		listeners: {
			"#sample": {
				click: function(e){
					//console.log("Controller", e);
				}
			}
		},
		init: function(opt){
			
		}

	}

	var settings = $.extend(defaults, options);

	if (settings.host){
		settings.host = $(settings.host);
		if (settings.host.length == 0){
			settings.host = null;
		}
	};

	var host = settings.host,
		listeners = settings.listeners;
	if (host){
		for (var obj in listeners){
			for (var ev in listeners[obj]){
				var handler = listeners[obj][ev];
				host.delegate(obj, ev, handler);
			};
		};
	}else{
		for (var obj in listeners){
			for (var ev in listeners[obj]){
				var handler = listeners[obj][ev];
				$(obj).bind(ev, handler);
			};
		};
	};

	this.views = {};
	for (var id in settings.view){
		var obj = $(id);
		if (obj.length !== 0){
			this.views[id] = obj;
		};
	};
	delete settings.view;

	this.stores = {};
	for (var id in settings.store){
		var obj = $(id);
		if (obj.length !== 0){
			this.stores[id] = obj;
		};
	};
	delete settings.stores;

	$.extend(this, settings);
	this.isController = true;
	this.id = $.su.randomId("controller")

	this.init();
	//console.log(host, handlers)
};

$.su.Controller.prototype.getStore = function(id){
	if (id in this.stores){
		return $.su.storeManager.get(id);
	}else{
		//console.error("Do not belone to this Controller!");
		return null;
	};
};
$.su.Controller.prototype.getView = function(id){
	if (id in this.views){
		return $.su.storeManager.get(id);
	}else{
		//console.error("Do not belone to this Controller!");
		return null;
	};
	var obj = $(id);
	if (obj.length === 0){
		return undefined;
	}else{
		return obj;
	};
};

})(jQuery);