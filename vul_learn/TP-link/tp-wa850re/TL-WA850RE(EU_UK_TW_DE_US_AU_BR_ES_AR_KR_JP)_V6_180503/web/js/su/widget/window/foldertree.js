// JavaScript Document
(function($){

$.su.Widget("foldertree",{
	defaults: {
		store: null,
		routerName: "My Router",
		selectLeaves: false,
		extension:"*"
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var inHTML =	"<div class=\"container widget-container foldertree-container\">";
				inHTML +=		"<div class=\"router\">";
				inHTML +=			"<span class=\"icon\"></span>";
				inHTML +=			"<span class=\"text\">"+obj.routerName+"</span>";
				inHTML +=		"</div>";
				//inHTML +=		"<ul class=\"foldertree-wrap\"></ul>";
				inHTML +=	"</div>";

			var container = $(inHTML);
			tar.replaceWith(container);
			container.append(tar.addClass("hidden"));
		});

		//dom的事件监听
		var container = me.closest("div.foldertree-container");
		container.delegate("a.foldertree-text", "click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var tar = $(this);
			
			if(me.get(0).selectLeaves){
				if(tar.attr("data-type")!="leaf")return;
				container.find("li.foldertree-branch, a.foldertree-text").removeClass("selected");
				tar.closest("li.foldertree-branch").addClass("selected");
				tar.addClass("selected");
				
				var path = tar.attr("data-path");
				me.foldertree("setValue", path);
				return;
			}
			container.find("li.foldertree-branch, a.foldertree-text").removeClass("selected");
			tar.closest("li.foldertree-branch").addClass("selected");
			tar.addClass("selected");
			
			var path = tar.attr("data-path");
			me.foldertree("setValue", path);

		}).delegate("span.foldertree-icon", "click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var btn = $(this),
				path = btn.attr("data-path"),
				store = me.get(0).store,
				subBranch = btn.next("a.foldertree-text").next("ul.foldertree-wrap"),
				subLeaf = subBranch.next("ul.foldertree-wrap"),
				uuid = me.get(0).uuid;
			//console.log(store.data)
			if (btn.hasClass("foldertree-root")){
				return;
			};

			if (btn.hasClass("foldertree-has-branch")){
				//可以点
				if (btn.hasClass("opened")){
					//已经打开
					subBranch.slideUp(200, function(){
						btn.removeClass("opened");
					});
					if(subLeaf)
					subLeaf.slideUp(200, function(){
						btn.removeClass("opened");
					});
				}else{
					//已经关闭
					store.loadNode(path, {
						"path": path,
						"uuid": uuid
					}, function(){
						btn.addClass("opened");
						subBranch.slideDown(200);
						if(subLeaf)
						subLeaf.slideDown(200);
					});
				};
			};

			//console.log("foldertree-icon clicked: ", path);
		});

		//store的事件监听
		var store = $(me.get(0).store);
		store.on("ev_loaddata", function(e, data){
			me.foldertree("load", data);
		}).on("ev_loadnode", function(e, store, nodeId, data){
			var Nodes = container.find("ul.foldertree-wrap"),
				parentNode = null;
			
			Nodes.each(function(i, obj){
				if ($(obj).attr("data-path") == nodeId){
					parentNode = $(obj);
					return false;
				};
			});
			if($.isArray(data.branches))
				me.foldertree("initBranch", data.branches, parentNode);
			if (me.get(0).selectLeaves){
				var leafUl;
				if(parentNode.siblings(".foldertree-leaf-wrap").length){
					leafUl=parentNode.siblings(".foldertree-leaf-wrap");
				}else{
					leafUl=$("<ul class=\"foldertree-wrap foldertree-leaf-wrap\" data-path=\""+nodeId+"\" ></ul>");
					parentNode.after(leafUl);
				}
				me.foldertree("initLeaf", data.leaves, leafUl);
			}
		});

		return me;
	},
	load: function(me, params){
		var me = me || this,
			container = me.closest("div.foldertree-container"),
			obj = me.get(0),
			data = params[1][0];

		me.foldertree("initRoot", data, container);
		me.trigger("ev_treeloaded", [me, data]);
		return me;
	},
	/*initLeaf: function(me, params){
		var me = me || this,
			data = params[1],
			parentBranch = params[2];

		var inHTML = 	"<li class=\"foldertree-leaf\">";
			inHTML +=		"<span class=\"foldertree-icon foldertree-leaf\"></span>";
			inHTML +=		"<a class=\"foldertree-text foldertree-leaf\">"+data.text+"</a>";
			inHTML +=	"</li>";

		parentBranch.append($(inHTML));
	},*/
	initRoot: function(me, params){
		var me = me || this,
			obj = me.get(0),
			container = me.closest("div.foldertree-container"),
			data = params[1] || {},
			parentNode = params[2],
			uuid = data.uuid || "0000000000";
		//console.log(data.uuid)
		obj.uuid = uuid;

		if (!data){
			//没有节点的状况
			return me;
		};

		container.find("div.foldertree-root").remove();

		var hasBranch = data.hasBranch ? "foldertree-has-branch" : "";

		var	inHTML =	"<div class=\"foldertree-root\">";
			inHTML +=		"<span class=\"foldertree-icon foldertree-root "+hasBranch+" opened\" data-path=\""+data.path+"\"></span>";
			inHTML +=		"<a href=\"javascript:void(0);\" class=\"foldertree-text foldertree-root\" data-path=\""+data.path+"\">";
			inHTML +=			"<span class=\"icon\"></span>";
			inHTML +=			"<span class=\"text\">"+data.name+"</span>";
			inHTML +=		"</a>";
			inHTML +=		"<ul class=\"foldertree-wrap foldertree-root-wrap\" data-path=\""+data.path+"\"></ul>";
			inHTML +=		"<ul class=\"foldertree-wrap foldertree-leaf-wrap\" data-path=\""+data.path+"\"></ul>";
			inHTML +=	"</div>";

		var currentNode = $(inHTML);
		parentNode.append(currentNode);

		if (data.hasBranch){
			//有子节点
			var childNode = currentNode.find("ul.foldertree-root-wrap");
			me.foldertree("initBranch", data.branches, childNode);

		};

		if (data.leavesInfo&&me.get(0).selectLeaves){
			//有子文件
			var childNode = currentNode.find("ul.foldertree-leaf-wrap");
			me.foldertree("initLeaf", data.leaves, childNode);
		};

		return me;
	},
	initBranch: function(me, params){
		var me = me || this,
			datas = params[1],
			parentBranch = params[2].empty(),
			span = parentBranch.prev("a.foldertree-text").prev("span.foldertree-icon");

		if (!$.isArray(datas)){
			/*if ($.isArray(datas.branches)){
				datas = datas.branches;
			}else{*/
				datas = [datas];
			/*};*/
		};

		var inHTML = "";
		if (datas.length == 0){
			span.removeClass("foldertree-has-branch");
		}else{
			for (var index = 0, len = datas.length; index < len; index++){
				var data = datas[index];
				var hasBranch = (data.hasBranch) ? "foldertree-has-branch" : "foldertree-has-branch opened";
				var lst = (index == len - 1) ? "lst" : ""; 

					inHTML +=	"<li class=\"foldertree-branch "+lst+"\">";
					inHTML +=		"<span class=\"foldertree-icon foldertree-branch "+hasBranch+"\" data-path=\""+data.path+"\"></span>";
					inHTML +=		"<a href=\"javascript:void(0);\" class=\"foldertree-text foldertree-branch\" data-path=\""+data.path+"\">";
					inHTML +=			"<span class=\"icon\"></span>";
					inHTML +=			"<span class=\"text\">"+data.name+"</span>";
					inHTML +=		"</a>";
					inHTML +=		"<ul class=\"foldertree-wrap foldertree-branch-wrap\" data-path=\""+data.path+"\"></ul>";
					inHTML +=	"</li>";
			};

			var currentBranch = $(inHTML);
			parentBranch.append(currentBranch);
			span.addClass("foldertree-has-branch");
		};

		return me;
	},
	initLeaf: function(me, params){
		var me = me || this,
			extension=me.get(0).extension,
			datas = params[1],
			parentBranch = params[2].empty(),
			span = parentBranch.prev("a.foldertree-text").prev("span.foldertree-icon");

		if (!$.isArray(datas)){
			datas = [datas];
		};
		
		var inHTML = "";
		for (var index = 0, len = datas.length; index < len; index++){
			
			var data = datas[index];
			if(extension!="*"){
				if(extension==data.character);
				else continue;
			}
			var lst = (index == len - 1) ? "lst" : ""; 

				inHTML +=	"<li class=\"foldertree-branch "+lst+"\">";
				inHTML +=		"<span class=\"foldertree-icon foldertree-branch \" data-path=\""+data.path+"\"></span>";
				inHTML +=		"<a href=\"javascript:void(0);\" class=\"foldertree-text foldertree-leaf\" data-type=\"leaf\" data-path=\""+data.path+"\">";
				inHTML +=			"<span class=\"icon\"></span>";
				inHTML +=			"<span class=\"text\">"+data.name+"</span>";
				inHTML +=		"</a>";
				inHTML +=		"<ul class=\"foldertree-wrap foldertree-branch-wrap\" data-path=\""+data.path+"\"></ul>";
				inHTML +=	"</li>";
		};

		var currentBranch = $(inHTML);
		parentBranch.append(currentBranch);
		return me;
	},
	setValue: function(me, path){
		var me = me || this;
			path = path[1];
		//console.log("setValue:", path)
		me.val(path);

		return me;
	},
	getValue: function(me){
		var me = me || this;
		return me.val();
	},
	reset: function(me){
		var me = me || this;
		return me.val("");
	}
});

})(jQuery);