// JavaScript Document
(function($){

$.su.TreeStore = function(options){
	var defaults = {
		proxy: null,
		fields: [
			{name: "name"},
			{name: "path"},
			{name: "hasBranch"},
			{name: "branches"},
			{name: "leavesInfo"},
			{name: "leaves"},
			{name: "uuid"}

		],
		keyProperty: "path"
	};

	var settings = $.extend({}, defaults, options);


	//this.id = settings.id || $.su.randomId("tree-store");
	//this.init(settings);

	var store = new $.su.Store(settings);
	
	store.getNode = function(nodeId){
		var me = this;

		if (!me.map || !me.map[nodeId]){
			return undefined;
		}else{
			return me.map[nodeId];
		};

	};
	
	/*store.loadNode = function(data, _callback){
		var me = this;
		var param = $.extend({
			"operation": "read"
		}, data);

		me.proxy.read(param, function(data, status, xhr){
			//console.log(data);

			if (_callback){
				_callback.call(me, data, status, xhr);
			};

			$(me).trigger("ev_datachanged", [me, "loadNode"]);
			$(me).trigger("ev_loadnode", [me, data]);
		});

		
	};*/



	store.loadNode = function(nodeId, data, _callback){
		//console.log(this);
		var me = this,
			node = me.getNode(nodeId);

		if (!node){
			return;
		}
		var	path = node.path,
			param =  $.extend({
				"operation": "read",
				"path": path
			}, data);

		me.proxy.read(param, function(data, status, xhr){

			if (_callback){
				_callback.call(me, data, status, xhr);
			};

			if (!$.isArray(data.branches) && !$.isArray(data.leaves)){
				return;
			};

			me.map[nodeId].branches = data.branches;

			$(me).trigger("ev_datachanged", [me, "loadNode"]);
			$(me).trigger("ev_loadnode", [me, nodeId, data]);
		});
	};

	store.updateMap = function(){
		var me = this,
			root = me.data[0];

		if (!root){
			return;
		};

		var map = {};
		map[root[me.keyProperty]] = root;

		var mapNode = function(node){
			if (node.branches){
				for (var index = 0, len = node.branches.length; index < len; index++){
					var n = node.branches[index];
					store.mapId++;
					map[n[me.keyProperty]] = n;
					mapNode(n);
				};
			};
		};

		mapNode(root);
		store.map = map;
	};

	$(store).on("ev_datachanged", store.updateMap);
	return store;
};

/*$.su.TreeStore.prototype.init = function(config){
	var me = this;
	$.extend(me, config);

	me.data = [];
	me.snapshot = null;
	
	me.isStore = true;

	if (me.autoLoad === true){
		me.load();
	};
};

$.su.TreeStore.prototype.load = function(){

};*/

})(jQuery);