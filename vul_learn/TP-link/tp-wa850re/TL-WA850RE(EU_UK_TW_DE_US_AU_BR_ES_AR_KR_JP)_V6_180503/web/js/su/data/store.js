// JavaScript Document
(function($){

$.su.Store = function(options){
	var defaults = {
		fields: null,
		xtype: "store",
		proxy: null,
		autoLoad: false,
		tag: "store",
		global: false,
		keyProperty: "key",
		updateMode: "operation",	//"complete"
		keyLength: 0
	};

	var settings = $.extend({}, defaults, options);
	
	/*if (!settings.proxy){
		//console.error("Debug: store without proxy!");
		return null;
	}else*/
	if (settings.proxy){
		if (settings.proxy.isProxy !== true){
			//var proxyConfig = settings.proxy;
			settings.proxy = new $.su.Proxy(settings.proxy);
		};
	}else{
		settings.autoLoad = false;
	};
	
	if (!settings.fields || settings.fields.length === 0){
		//console.error("Debug: without fields or fields error!");
		return null;
	};

	if (settings.global == true){
		if (!settings.id){
			//console.error("You are init a global store, so you have to set an id for it!");
			return null;
		};
	};
	
	this.id = settings.id || $.su.randomId("store");
	this.init(settings);
};
$.su.Store.prototype.init = function(config){
	$.extend(this, config);

	this.data = [];
	this.snapshot = null;
	
	this.isStore = true;
	this.isSorted = false;
	if (this.autoLoad === true){
		this.load();
	};
	
	//初始化默认的事件监听，这里注释定义了传进去的参数个数
	//$(this).on("loads", function(e, store, records){});
	$(this).on("ev_datachanged", function(e, store, records){
		this.isSorted = false;
	});

	$.su.storeManager.add(this);
};

$.su.Store.prototype.getData = function(key){	//根据key值来返回数据
	var	data = this.data,
		keyProperty = this.keyProperty;

	if (!key){
		return undefined;
	};
	//console.log(this, key);
	var index = this.getIndex(key);
	if (index == undefined){
		return undefined;
	}else{
		return data[index];
	};

};

$.su.Store.prototype.getDataByIndex = function(index){
	var data = this.data;
	return data[index];
};

$.su.Store.prototype.getIndex = function(key){	//根据key值来返回index值，key属性由keyProperty定义，默认为key
	var	data = this.data,
		keyProperty = this.keyProperty;
	//console.log(data, keyProperty);
	if (!key){
		return undefined;
	};

	for (var index = 0, len = data.length; index < len; index++){
		if (data[index][keyProperty].toString() == key.toString()){
			return index;
			break;
		};
	};

	return undefined; 
};

$.su.Store.prototype.getKeyByIndex = function(index){
	var data = this.data;
	var keyProperty = this.keyProperty;
	var d = data[index];

	return d[keyProperty];
};

$.su.Store.prototype.getIndexs = function(keyArray){	//根据keyArray返回index的array
	var	data = this.data,
		keyProperty = this.keyProperty;

	if (keyArray.length == 0){
		return undefined;
	};

	var indexArray = [];
	for (var jndex = 0, jlen = keyArray.length; jndex < jlen; jndex++){
		for (var index = 0, len = data.length; index < len; index++){
			var key = keyArray[jndex];
			if (data[index][keyProperty].toString() == key.toString()){
				indexArray.push(index);
				break;
			};
		};
	};

	return indexArray;
};

//可注释 ， 带data是本地操作，无data是ajax操作
$.su.Store.prototype.insert = function(index, data, _callback, _callback_failed, _callback_error){
	var	index = (index == undefined || index == null) ? data.length-1 : index,
		store = this,
		opt = {};
	opt[this.keyProperty] = "add";

	this.proxy.write($.extend(opt, {
		"operation": "insert",
		"index": index
	}, data), function(data, others, status, xhr){
		if (!$.isArray(data)){
			data = [data];
		};

		data = store.dataFormat(data);

		if (store.updateMode == "operation"){
			store.insertData(index, data, function(index, data){
				if (_callback){
					_callback.call(store, index, data);
				};
			});
		}else{
			store.loadData(data, others, false, function(data){
				if (_callback){
					_callback.call(store, data, others, status, xhr);
				};
			});
		}
		
	}, function(error, others){
		if (_callback_failed){
			_callback_failed.call(store, error, others);
		};
		$(store).trigger("ev_failed", ["insert", error, others]);
	}, function(xhr, status, type) {
		if (_callback_error){
			_callback_error.call(store, xhr, status, type);
		};
		$(store).trigger("ev_error", ["insert", xhr, status, type]);
	});
};
$.su.Store.prototype.load = function(data, _callback, _callback_failed, _callback_error){
	var store = this,
		data = data || {};
	this.proxy.read($.extend({
		"operation": "load"
	}, data), function(data, others, status, xhr){
		data = store.dataFormat(data);
		store.loadData(data, others, false, function(data){
			if (_callback){
				_callback.call(store, data, others, status, xhr);
			};
		});
		
		$(store).trigger("ev_load", [store, data]);
	}, function(error, others){
		if (_callback_failed){
			_callback_failed.call(store, error, others);
		};
		$(store).trigger("ev_failed", ["load", error, others]);
	}, function(xhr, status, type) {
		if (_callback_error){
			_callback_error.call(store, xhr, status, type);
		};
		$(store).trigger("ev_error", ["load", xhr, status, type]);
	});
};
$.su.Store.prototype.update = function(key, data, _callback, _callback_failed, _callback_error){
	var	keyProperty = this.keyProperty;

	if (key == undefined || key == null){
		return;
	};
	var index = this.getIndex(key),
		opt = {},
		store = this;

	opt[keyProperty] = key;
	this.proxy.write($.extend({
		"operation": "update",
		"index": index
	}, opt, data), function(data, others, status, xhr){

		if (!$.isArray(data)){
			data = [data];
		};
		//console.log("store update", key)
		$.extend(data, opt);	//附加id

		data = store.dataFormat(data);

		if (store.updateMode == "operation"){
			store.updateData(key, data, function(key, data){
				if (_callback){
					_callback.call(store, key, data);
				};
			});
		}else{
			store.loadData(data, others, false, function(data){
				if (_callback){
					_callback.call(store, data);
				};
			});
		};

		$(store).trigger("ev_update", [store, data]);
	}, function(error, others){
		if (_callback_failed){
			_callback_failed.call(store, error, others);
		};
		$(store).trigger("ev_failed", ["update", error, others]);
	}, function(xhr, status, type) {
		if (_callback_error){
			_callback_error.call(store, xhr, status, type);
		};
		$(store).trigger("ev_error", ["update", xhr, status, type]);
	})
};

$.su.Store.prototype.remove = function(keyArray, data, _callback, _callback_failed, _callback_error){	//需要返回indexArray
	var	store = this,
		keyProperty = this.keyProperty;

	if (!$.isArray(keyArray)){
		keyArray = [keyArray]
	};

	var indexArray = this.getIndexs(keyArray);
	//console.log(keyArray);
	this.proxy.write($.extend({
		"operation": "remove",
		"key": keyArray,
		"index": indexArray
	}, data), function(data, others, status, xhr){
		//console.log(data);
		if (store.updateMode == "operation"){
			if (data.length > 0){
				if (data[0][keyProperty]){
					//有key值的状态
					var keyArray = [];
					for (var index = 0, len = data.length; index < len; index++){
						if (data[index].success){
							var key = data[index][keyProperty];
							keyArray.push(key);
						};
					};
					store.removeDataByKey(keyArray);
				}else{
					//无key值的状态，返回index
					var indexArray = [];
					for (var jndex = 0, len = data.length; jndex < len; jndex++){
						if (data[jndex].success){
							var index = data[jndex]["index"];
							indexArray.push(parseInt(index, 10));
						};
					};
					store.removeDataByIndex(indexArray);
				};
			};

			if (_callback){
				_callback.call(store, keyArray, indexArray, data);
			};
		}else{
			var d = store.dataFormat(data);
			store.loadData(d, others, false, function(data){
				if (_callback){
					_callback.call(store, data, others);
				};
			});
		}
			
	}, function(error, others){
		if (_callback_failed){
			_callback_failed.call(store, error, others);
		};
		$(store).trigger("ev_failed", ["remove", error, others]);
	}, function(xhr, status, type) {
		if (_callback_error){
			_callback_error.call(store, xhr, status, type);
		};
		$(store).trigger("ev_error", ["remove", xhr, status, type]);
	});
};

/*$.su.Store.prototype.sync = function(_callback){	//opt: insert/ add/ edit/ delete	有ajax操作，我觉得这个应该是个批量操作的事情
};
*/
//数据格式化操作
$.su.Store.prototype.dataFormat = function(data){
	var	fields = this.fields,
		keyProperty = this.keyProperty,
		formatFuncList = $.su.format;

	if (!data || $.isEmptyObject(data)){
		data = [];
	};

	if (!$.isArray(data)){
		data = [data];
	};

	var result = [],
		keyInitialedFlag = false;

	for (var jndex = 0; jndex < fields.length; jndex++){
		//这部分应该是初始model的过程
		var fieldName = fields[jndex].name,
			fieldType = fields[jndex].type || "string",
			dataMapping = fields[jndex].mapping || fieldName,
			defaultValue = fields[jndex].defaultValue || undefined,
			formatFunc = (fields[jndex].dataFormat) ? fields[jndex].dataFormat : function(data){ return data };

		for (var index = 0; index < data.length; index++){
			result[index] = result[index] || {}; // {"seq": (index+1)};
			var _dd = data[index][dataMapping];
			//var ds = (_dd || _dd === 0 || _dd === false || _dd === "") ? _dd : defaultValue;
			var ds = (_dd === undefined || _dd === null) ? defaultValue : _dd;
			var dd = formatFunc(ds);
			result[index][fieldName] = dd;
		};

		if (keyProperty == name){
			keyInitialedFlag = true;
		};
	};

	if (!keyInitialedFlag){
		for (var index = 0; index < data.length; index++){
			result[index] = result[index] || {}; // {"seq": (index+1)};
			var d = data[index][keyProperty];
			result[index][keyProperty] = (d === undefined || d === null) ? "key-"+(index+this.keyLength) : d;
		};
	};

	this.keyLength += data.length;
	return result;
};



$.su.Store.prototype.insertData = function(index, records, _callback){		//可以多条目操作~
	var	data = this.data;

	if (index > data.length){
		//console.error("Debug: insert overflow!");
		return false;
	};
	if (!$.isArray(records)){
		records = [records];
	};

	var dataStart = data.slice(0, index);
	var dataEnd = data.slice(index, data.length);
	var result = dataStart.concat(records, dataEnd);

	this.data = null; delete this.data;
	this.data = result;

	this.snapshot = null; delete this.snapshot;
	this.snapshot = $.su.clone(this.data);

	if (_callback){
		_callback.call(this, index, records);
	};

	$(this).trigger("ev_insertdata", [index, records]);
	$(this).trigger("ev_datachanged", [this, this.data, "insertData"]);
	return this;
};
//无ajax操作
$.su.Store.prototype.loadData = function(data, others, _append, _callback){
	//console.log(this.data)
	if (!_append && this.data.length > 0){
		this.removeAllData();
	};
	
	if (!data || $.isEmptyObject(data)){
		data = [];
	};

	if (!$.isArray(data)){
		data = [data];
	}

	this.data = this.data || [];
	this.data = this.data.concat(data);

	this.snapshot = null; delete this.snapshot;
	this.snapshot = $.su.clone(this.data);
	//console.log(_callback)
	if (_callback){
		_callback.call(this, data, _append);
	};

	$(this).trigger("ev_loaddata", [this.data, others]);
	$(this).trigger("ev_datachanged", [this, this.data, "loadData"]);
	return this;
};

$.su.Store.prototype.updateData = function(key, data, _callback){	//目前只允许单条目操作~
	
	if (!data || $.isEmptyObject(data)){
		data = [];
	};

	if ($.isArray(data)){
		data = data[0];
	};

	var index = this.getIndex(key);
	if (index === undefined || index === null){
		return;
	};
	//console.log("store updateData", index, key);
	this.data.splice(index, 1, data);

	//console.log(this.data, data)

	this.snapshot = null; delete this.snapshot;
	this.snapshot = $.su.clone(this.data);

	if (_callback){
		_callback.call(this, key, data);
	};

	$(this).trigger("ev_updatedata", [key, index, data]);
	$(this).trigger("ev_datachanged", [this, this.data, "updateData"]);
	return this;
};

$.su.Store.prototype.removeDataByKey = function(keyArray, _callback){
	var	keyProperty = this.keyProperty;

	if (!$.isArray(keyArray)){
		keyArray = [keyArray];
	};

	var keyObj = {}
	for (var index = 0, len = keyArray.length; index < len; index++){
		keyObj[keyArray[index]] = true;
	};

	var data = this.data;
	var indexArray = [];
	for (var index = 0, len = data.length; index < len; index++){
		if (data[index][keyProperty] in keyObj){
			indexArray.push(index);
		};
	};
	//console.log("store index array", indexArray)
	this.removeDataByIndex(indexArray, function(keyArray, indexArray){
		if (_callback){
			_callback.call(this, keyArray, indexArray);
		}
	});
};

$.su.Store.prototype.removeDataByIndex = function(indexArray, _callback){
	var	keyProperty = this.keyProperty,
		data = this.data;

	if (!$.isArray(indexArray)){
		indexArray = [indexArray];
	};

	indexArray.sort(function(a, b){
		return a - b;
	});

	//从后向前作删除
	var keyArray = [];
	for (var index = indexArray.length - 1; index >= 0; index--){
		var i = indexArray[index];
		if (isNaN(i)){
			continue;
		};
		keyArray.push(data[i][keyProperty]);
		data.splice(indexArray[index], 1);
	};

	this.snapshot = null; delete this.snapshot;
	this.snapshot = $.su.clone(this.data);

	if (_callback){
		_callback.call(this, keyArray, indexArray);
	};
	
	$(this).trigger("ev_removedata", [keyArray, indexArray]);
	$(this).trigger("ev_datachanged", [this, this.data, "removeData"]);
	//console.log("store", keyArray)
	return this;
};

$.su.Store.prototype.removeAllData = function(_callback){
	this.data = null; delete this.data;
	this.data = [];
	this.snapshot = null;
	
	$(this).trigger("ev_removeAllData", [this]);
	$(this).trigger("ev_datachanged", [this, this.data, "removeData"]);
	return this;
};


})(jQuery);