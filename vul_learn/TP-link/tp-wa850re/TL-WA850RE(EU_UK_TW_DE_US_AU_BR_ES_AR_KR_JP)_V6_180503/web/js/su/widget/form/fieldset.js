// JavaScript Document
(function($){

$.su.Widget("fieldset", {
	defaults: {
		_title: "",
		fields: null
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);
			
			tar.addClass("container widget-container filedset-container");
		});
		return me;
	},
	hide: function(me, callback){
		var me = me || this,
			obj = me.get(0),
			fields = obj.fields,
			callback = callback[1];

		for (var index = 0, len = fields.length; index < len; index++){
			var field = fields[index];
			if (field){
				var	name = field["name"];
				var tar = me.find("[name=\""+name+"\"]");
				tar.prop("inFront", "no");
			};
		};

		me.fieldset("disable");

		//me.fadeOut(100);
		me.css("display", "none");

		if (callback){
			callback.call(me);
		}
		return me;
	},
	show: function(me, callback){
		var me = me || this,
			obj = me.get(0),
			fields = obj.fields,
			callback = callback[1];

		for (var index = 0, len = fields.length; index < len; index++){
			var field = fields[index],
				name = field.name;

			var tar = me.find("[name=\""+name+"\"]");
			tar.prop("inFront", "yes");
		};

		me.fieldset("enable");

		me.fadeIn(200, callback);
		return me;
	},
	disable: function(me, callback){
		var me = me || this,
			obj = me.get(0),
			fields = obj.fields,
			callback = callback[1];

		for (var index = 0, len = fields.length; index < len; index++){
			var field = fields[index];
			if (field){
				var	name = field["name"];
				var tar = me.find("[name=\""+name+"\"]");
				if (tar.length > 0){
					var xtype = tar.get(0).xtype;
					//console.log(xtype, tar, name);
					if (xtype){
						tar[xtype]("disable");
					};
				};
			};
		};

		if (callback){
			callback.call(me);
		};
		return me;
	},
	enable: function(me, callback){
		var me = me || this,
			obj = me.get(0),
			fields = obj.fields,
			callback = callback[1];

		for (var index = 0, len = fields.length; index < len; index++){
			var field = fields[index];
			if (field){
				var name = field["name"];
				var tar = me.find("[name=\""+name+"\"]");
				if (tar.length > 0){
					var xtype = tar.get(0).xtype;
					if (xtype){
						tar[xtype]("enable");
					};
				};
			};
		};

		if (callback){
			callback.call(me);
		};
		return me;
	}
});

})(jQuery);