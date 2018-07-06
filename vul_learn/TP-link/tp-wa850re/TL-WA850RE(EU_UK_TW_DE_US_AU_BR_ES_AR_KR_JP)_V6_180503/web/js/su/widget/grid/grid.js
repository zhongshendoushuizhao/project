// JavaScript Document
(function($){

$.su.Widget("grid", {
	defaults: {
		columns: [],
		store: null,
		//currentStartNumber: 0,	//临时参数，分页时使用
		operation: null,	//"add|delete|enable|disable|search|refresh", [{xtype: "display", display: "rownumber", fieldLabel: "fieldLabel"}, {xtype: "button", text: "button"}, "search"]	或者是数组对象
		sortable: false,
		
		paging: null,
		
		editor: null,	// "default"/null/{options}
		update: "operation",	//complete
		autoRefresh: false,		//autoRefresh为true时自动载入，不论autoLoad
		refreshDuration: 500,
		//progressbar: false,

		minLines: 0,
		maxLines: 0,
		reverseIndex: false,

		rows: [],

		promptTextSuccessed: $.su.CHAR.OPERATION.GRID_SAVED,
		promptTextFailed: $.su.CHAR.OPERATION.GRID_FAILED,
		noneSelectedMsgText: $.su.CHAR.OPERATION.GRID_NONE_SELECT,
		deleteConfirmMsgText: $.su.CHAR.OPERATION.GRID_DELETE_COMFIRM,
		maxRulesMsgText: $.su.CHAR.OPERATION.GRID_MAX_RULES,
		deleteAllConfirmMsgText: $.su.CHAR.OPERATION.GRID_DELETE_ALL_COMFIRM,

		maxRulesProperty: "max_rules",

		showPrompt: true
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(this, defaults, options);
			obj.id = obj.id || $.su.randomId("gird");

			if (!obj.isPanel){
				$(obj).panel(options).addClass("grid-panel");
			};

			//初始化表格容器
			var columns = this.columns;
			if (columns.length === 0){
				//console.error("Please define the columns property!");
				return false;
			};

			var btnSort = "";
			if (obj.sortable){
				btnSort = "<button class=\"grid-header-btn btn-sort\"></button>";
			};
			var styleText = "<style type=\"text/css\">";

			var inHTML =	"<div class=\"container grid-container\">";

			/*if (obj.progressbar){
				inHTML +=		"<div class=\"container widget-container progressbar-container\">";
				inHTML +=			"<div class=\"progressbar-wrap\">"
				inHTML +=				"<div class=\"widget-wrap progressbar-content\">";
				inHTML +=					"<div class=\"progressbar-value\"></div>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";
				inHTML +=		"</div>";
			};*/

				inHTML +=		"<div class=\"container grid-header-container\">";
				inHTML +=			"<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
				inHTML +=				"<tr class=\"grid-header-tr\">";

			for (var index = 0; index < columns.length; index++){

				var column = columns[index];
				//column.text = (column.xtype === "rownumberer") ? "Row" : (column.text || ""),
				column.cls = column.cls || "",
				column.dataIndex = column.dataIndex || column.name || "",
				column.renderer = column.renderer || function(data){return $.su.func.escapeHtml(data)};

				if (column.width){
					/*styleText +=	"th.grid-header-"+name+",";
					styleText +=	"td.grid-content-td-"+name+",";*/
					styleText +=	"div#"+obj.id+" th.grid-header-"+index+",";
					styleText +=	"div#"+obj.id+" td.grid-content-td-"+index;
					styleText +=	"{width:"+column.width+"px;}";
				};

				var addOn = "";

				switch(column.xtype){
					case "checkcolumn":
						addOn +=	"<div class=\"checkbox-group-container grid-header-checkbox checkcolumn inline\">";
						addOn +=		"<div class=\"widget-wrap\">";
						addOn +=			"<label class=\"checkbox-label\">";
						addOn +=				"<input class=\"checkbox-checkbox\" type=\"checkbox\" value=\"\"/>";
						addOn +=				"<span class=\"icon\"></span>";
						addOn +=			"</label>";
						addOn +=		"</div>";
						addOn +=	"</div>";
						column.text = column.text || "";
						column.name = column.name || "select";
						break;
					case "rownumberer":
						column.text = column.text || $.su.CHAR.GRID.ID;
						column.name = column.name || "seq";
						break;
					case "settings":
						column.text = column.text || $.su.CHAR.GRID.MODIFY;
						column.name = column.name || "settings";
						break;
					case "statuscolumn":
						column.text = column.text || $.su.CHAR.GRID.STATUS;
						column.dataIndex = column.dataIndex || "status";
						column.name = column.name || column.dataIndex;
						break;
					default:
						column.text = column.text || "";
						column.name = column.name || column.dataIndex;
				};

				inHTML +=			"<th class=\"grid-header grid-header-"+index+" "+column.dataIndex + (index==columns.length-1?" lst":"") +"\" name=\""+column.dataIndex+"\">";
				inHTML +=				addOn;
				inHTML +=				"<span class=\"content "+column.xtype+"\">"+column.text+"</span>";
				inHTML +=				btnSort;
				//inHTML +=				"<div></div>";			//这部分扩展菜单
				inHTML +=			"</th>";

				//obj.columns[index] = column;
			};

				inHTML +=				"</tr>";
				inHTML +=			"</table>";
				inHTML +=		"</div>";

				inHTML +=		"<div class=\"grid-content-container-outer\">";
				inHTML +=			"<div class=\"grid-content-container\">";
			/*	inHTML +=				"<table class=\"grid-content-bg\">";
				inHTML +=					"<tbody>";

			for (var index = 0; index < obj.minLines; index++){
				inHTML += 						"<tr class=\"grid-content-tr grid-content-tr-"+index+"\" >";
				for (var kndex = 0; kndex < columns.length; kndex++){
					var column = columns[kndex];

					inHTML += 						"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-"+column.dataIndex+"\" name=\""+column.dataIndex+"\">";
					inHTML += 							"<span class=\"content\"></span>";
					inHTML += 						"</td>";
				};
				inHTML +=						"</tr>";
			};
			
				inHTML +=					"</tbody>";
				inHTML +=				"</table>";*/

				inHTML +=				"<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
				inHTML +=					"<tbody class=\"grid-content-data\">";
				inHTML +=					"</tbody>";
				inHTML +=				"</table>";

				//无条目的提示
				//inHTML +=			"<div class=\"grid-content-hint\"></div>";
				inHTML +=			"</div>";
				/*inHTML +=			"<div class=\"clear\"></div>";*/

				inHTML +=		"</div>";
				inHTML +=	"</div>";

			var grid = $(inHTML);
			//console.log(obj)
			$(obj).find("div.panel-content-container").append(grid);

			grid.find("tbody.grid-content-data").append(me.grid("initEmptyRow"));

				styleText +=	"div#"+obj.id+ " div.grid-content-container{";

			var lineHeight = grid.find("tr.grid-content-tr").outerHeight();

			if (obj.minLines){
				styleText +=	"min-height:" + obj.minLines*lineHeight + "px;";
			};

			if (obj.maxLines){
				styleText +=	"max-height:" + obj.maxLines*lineHeight + "px;";
				grid.addClass("allow-scroll");
			};
				styleText +=    "}";
			
			styleText +=	"</style>";
			grid.prepend($(styleText));

			/*var c = grid.find("div.grid-content-container-outer");
			c.css("width", c.width())
			grid.find("div.grid-content-container").css("width", c.outerWidth());*/

			if (!obj.store){
				//console.error("Debug: Grid without store!");
				return null;
			}else{
				if (!obj.store.isStore){
					obj.store = new $.su.Store(obj.store);
				};
			};

			this.isGrid = true;

			//以下我插件加载
			if (obj.operation){
				tar.grid("initTBar");
			};

			//初始化editor
			if (obj.editor){
				tar.grid("initEditor");
			};

			//初始化分页
			if (obj.paging){
				tar.grid("initPaging");
			};

			//事件监听 grid监听store的事件
			/*me.on("ev_load", function(e, data, start, len){
				var store = me.grid("getStore");
				store.loadData(data);
			});*/

			/*if (this.isPanel){
				this.isGridPanel = true;
			};*/
		});

		// 添加事件监听
		var obj = me.get(0),
			//paging = obj.paging,
			store = obj.store;

			obj.rows = [];	//清空行队列
			//console.log(paging)
			//事件监听 store监听grid的事件

		if (store.updateMode == "operation"){
			//局部加载
			$(store).on("ev_insertdata", function(e, index, data){
				// if (paging && paging.isPaging){
				// 	$(paging).paging("loadPage", paging.currentPage);
				// }else{
					me.grid("insert", index, data);
					//临时修复bug
					me.find("tr.grid-content-tr.add").remove();
					me.find("tr.grid-content-tr.empty").remove();
					//me.grid("updateRowNumber");
				//};
			}).on("ev_loaddata", function(e, data, others){
				// if (paging && paging.isPaging){
				// 	$(paging).paging("loadPage");
				// }else{
					if (me.grid("isEditing")){
						$(obj.editor).editor("cancelEdit");
					};

					me.grid("load", data);
					
					if (others){
						var maxRules = others[obj.maxRulesProperty];
						obj.maxRules = maxRules || 0;
					};
					
				//};
			}).on("ev_updatedata", function(e, key, index, data){
				me.grid("update", key, index, data);

			}).on("ev_removedata", function(e, keyArray, indexArray){
				// if (paging && paging.isPaging){
				// 	$(paging).paging("loadPage", paging.currentPage);
				// }else{
					//console.log(keyArray);
					me.grid("remove", keyArray);
				// };
			});
		}else{
			//全部刷新
			$(store).on("ev_loaddata", function(e, data, others){
				if (me.grid("isEditing")){
					$(obj.editor).editor("cancelEdit");
				};

				me.grid("load", data);

				if (others){
					var maxRules = others[obj.maxRulesProperty];
					obj.maxRules = maxRules || 0;
				};
			});/*.on("ev_insertdata", function(e, index, data){
				me.grid("load", data);
			}).on("ev_updatedata", function(e, key, index, data){
				me.grid("load", data);
			}).on("ev_removedata", function(e, keyArray, indexArray, data){
				me.grid("load", data);
			});*/
		};
		

		//行事件的监听
		me.delegate("tr.grid-content-tr", "click", function(e){
			e.stopPropagation();
			e.preventDefault();
			/*var tar = $(this);
			if (e.shiftKey){
				//选择添加或减少
				tar.toggleClass("selected");
				if (tar.hasClass("selected")){
					tar.find("td.grid-content-td-check-column input[type=checkbox]").prop("checked", true);
				}
			}else{
				var trList = me.find("tr.grid-content-tr")
				trList.removeClass("selected");
				trList.find("td.grid-content-td-check-column input[type=checkbox]").prop("checked", false);

				tar.addClass("selected");
				tar.find("td.grid-content-td-check-column input[type=checkbox]").prop("checked", true);
			
				var key = $(this).attr("data-key"),
					store = me.grid("getStore");
				if (store && key !== undefined && key !== "undefined"){
					var	data = store.getData(key);
					me.trigger("ev_lineclicked", [key, data]);
				};
			};*/

			var key = $(this).attr("data-key"),
				store = me.grid("getStore");
			if (store && key !== undefined && key !== "undefined"){
				var	data = store.getData(key);
				me.trigger("ev_lineclicked", [key, data]);
			};

			return false;	
		});

		me.delegate("td.grid-content-td-check-column label.checkbox-label", "click", function(e){
			e.stopPropagation();
			e.preventDefault();
			//console.log("label")
			var label = $(this),
				tr = label.closest("tr.grid-content-tr"),
				checkbox = label.find("input[type=checkbox]");
			tr.toggleClass("selected");
			//console.log(tr)

			if (tr.hasClass("selected")){
				checkbox.prop("checked", true);
				label.addClass("checked");
			}else{
				checkbox.prop("checked", false);
				label.removeClass("checked");
			};
			//如果勾选框不全选或全选了，同步th上的勾选框
			var trList = trList = me.find("tr.grid-content-tr");
			var label = me.find("tr.grid-header-tr label.checkbox-label");//.closest("div.checkbox-group-container");//.closest("");
			var container = label.closest("div.checkbox-group-container");
			if(trList.length>0){
				//不全选
				for(var index=0; index<trList.length; ++index){
					//console.log($(trList[index]).hasClass("selected"))
					if($(trList[index]).hasClass("disabled")){
						continue;
					}
					if(!$(trList[index]).hasClass("selected")){
						break;
					}
				}
				if(index != trList.length){
					container.removeClass("selected");
					label.removeClass("checked");
				}
				//全选
				for(var index=0; index<trList.length; ++index){
					//console.log($(trList[index]).hasClass("selected"))
					if($(trList[index]).hasClass("disabled")){
						continue;
					}
					if(!$(trList[index]).hasClass("selected")){
						break;
					}
				}
				if(index == trList.length){
					container.addClass("selected");
					label.addClass("checked");
				}
			}

			return false;
		}).delegate("th.grid-header div.checkcolumn label.checkbox-label", "click", function(e){
			e.stopPropagation();
			e.preventDefault();
			var label = $(this),
				container = $(this).closest("div.checkbox-group-container"),
				trList = me.find("tr.grid-content-tr");
			if(trList.hasClass("empty")){
				return false;
			}
				//console.log(label)
				//console.log(container)
			if (container.hasClass("selected")){
				container.removeClass("selected");

				trList.removeClass("selected");
				trList.find("label.checkbox-label").removeClass("checked");
				trList.find("input[type=checkbox]").prop("checked", false);

				label.find("input[type=checkbox]").prop("checked", false);
				label.removeClass("checked");
			}else{
				container.addClass("selected");

				//console.log($(this).find("input[type=checkbox]"))
				trList.addClass("selected");
				trList.find("input[type=checkbox]").prop("checked", true);
				trList.find("label.checkbox-label").addClass("checked");

				label.find("input[type=checkbox]").prop("checked", true);
				label.addClass("checked");
			};

			return false;
		});
		
		var btn_status_id = false;
		var btn_delete_id = false;
		me.delegate("a.grid-content-btn.grid-content-btn-status", "click", function(e){
			e.preventDefault();
			e.stopPropagation();
			var btn = $(this),
				tr = $(this).closest("tr.grid-content-tr");
			if (tr.hasClass("disabled")){
				return;
			};

			var editorObj = me.grid("getEditor");
			if (editorObj && editorObj.isEditor){
				if (editorObj.editing){
					$(editorObj).editor("shake");
					return;
				};
			};
			
			var	key = btn.attr("data-key"),
				value = btn.attr("data-value"),
				vOn = btn.attr("data-on"),
				vOff = btn.attr("data-off"),
				name = btn.attr("data-name"),
				store = me.grid("getStore"),
				keyProperty = store.keyProperty,
				dOld = store.getData(key);

			var opt = {};
				opt[name] = (value === vOn) ? vOff : vOn;

			var	dNew = $.extend({}, dOld, opt);
			
			delete dNew[keyProperty];
			if(btn_status_id){
				clearTimeout(btn_status_id);
				btn_status_id = false;
			}
			btn_status_id = setTimeout(function(){
				me.grid("runProgress");
				store.update(key, {
					"old": $.su.json.toJSONString(dOld),
					"new": $.su.json.toJSONString(dNew)
				}, function(){
					me.grid("prompt", true);
				}, function(){
					me.grid("prompt", false);
				});
			},500);

		}).delegate("a.grid-content-btn.grid-content-btn-delete", "click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var btn = $(this),
				tr = btn.closest("tr.grid-content-tr");
			if (tr.hasClass("disabled")){
				return;
			};

			var	key = btn.attr("data-key"),
				editorObj = me.grid("getEditor");

			if (editorObj && editorObj.isEditor){
				if (editorObj.editing === false){
					store = me.get(0).store;
					if(btn_delete_id){
						clearTimeout(btn_delete_id);
						btn_delete_id = false;
					}
					btn_delete_id = setTimeout(function(){
						me.grid("runProgress");
						store.remove([key], {}, function(){
							me.grid("prompt", true);
						}, function(){
							me.grid("prompt", false);
						}, function(){
							me.grid("prompt", false);
						});
					},500);
				}else{
					$(editorObj).editor("shake");
				};
			};
			//console.log("item delete");
		});;

		var tar = me.get(0);
		tar.autoRefreshTime = 0;
		if (tar.autoRefresh){
			tar.autoRefreshTime = setTimeout(function(e){
				me.grid("getStore").load();
			}, tar.refreshDuration);
		};

		return me; 
	},
	initRow: function(me, params){	//row-index, data 返回html值
		var me = me || this,
			obj = me.get(0),
			jndex = params[1] || 0,
			data = params[2],
			key = data[obj.store.keyProperty],
			columns = me.grid("getColumns");
		//console.log(data, keyProperty)
		var inHTML = 	"<tr class=\"grid-content-tr grid-content-tr-"+key+"\" data-key=\""+key+"\" >";

		var len = columns.length,
			actionFlag = [];
		//console.log(data);
		for (var kndex = 0; kndex < len; kndex++){
			var column = columns[kndex],
				dd = (data[column.dataIndex] == undefined  || data[column.dataIndex] === "") ? "---" : data[column.dataIndex],
				fst = (kndex === 0) ? "fst" : "",
				lst = (kndex === len-1) ? "lst" : "";
			//console.log(column.xtype, column.dataIndex, data[column.dataIndex], column.renderer);
			switch (column.xtype){
				case "rownumberer":
					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-row-numberer "+fst+" "+lst+" "+column.cls+ "\" name=\"row-numberer\">";
					inHTML += 		"<span class=\"grid-row-numberer content\">"+(jndex+1)+"</span>";
					inHTML += 	"</td>";
					break;
				case "checkcolumn":
					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-check-column "+fst+" "+lst+"\" name=\"check-column\">";
					//inHTML += 		"<input type=\"checkbox\"/>";
					inHTML +=		"<div class=\"checkbox-group-container\">";
					inHTML +=			"<div class=\"widget-wrap\">";
					inHTML +=				"<label class=\"checkbox-label\">";
					inHTML +=					"<input class=\"checkbox-checkbox\" type=\"checkbox\" value=\""+key+"\"/>";
					inHTML +=					"<span class=\"icon\"></span>";
					inHTML +=				"</label>";
					inHTML +=			"</div>";
					inHTML +=		"</div>";
					inHTML +=		"<span class=\"content\">--</span>";
					inHTML += 	"</td>";
					break;
				case "statuscolumn":
					var res = "",
						cls = "",
						val = "",
						trueValue = column.trueValue || "on",
						falseValue = column.falseValue || "off";

					if (data[column.dataIndex] === trueValue){
						res = $.su.CHAR.GRID.ENABLED;
						cls = "enabled";
						val = trueValue;
					}else{
						res = $.su.CHAR.GRID.DISABLED;
						cls = "disabled";
						val = falseValue;
					};

					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-status-column "+fst+" "+lst+"\" name=\"check-column\">";
					inHTML +=		"<a href=\"javascript:void(0);\" data-index=\""+jndex+"\" data-name=\""+column.dataIndex+"\" data-value=\""+val+"\" data-key=\""+key+"\" data-on=\""+trueValue+"\" data-off=\""+falseValue+"\" class=\"grid-content-btn grid-content-btn-status btn-status "+cls+"\">";
					inHTML +=			"<span class=\"icon\"></span>";
					inHTML +=			"<span class=\"text\">"+res+"</span>";
					inHTML +=		"</a>";
					inHTML += 	"</td>";
					break;
				case "settings":
					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-settings-column "+fst+" "+lst+"\" name=\"settings-column\">";
					inHTML += 		"<a href=\"javascript:void(0);\" data-index=\""+jndex+"\" data-key=\""+key+"\" class=\"grid-content-btn grid-content-btn-edit btn-edit\">";
					inHTML +=			"<span class=\"icon\"></span>";
					inHTML += 			"<span class=\"text\">"+$.su.CHAR.OPERATION.EDIT+"</span>";
					inHTML += 		"</a>";
					inHTML += 		"<a href=\"javascript:void(0);\" data-index=\""+jndex+"\" data-key=\""+key+"\" class=\"grid-content-btn grid-content-btn-delete btn-delete\">";
					inHTML +=			"<span class=\"icon\"></span>";
					inHTML += 			"<span class=\"text\">"+$.su.CHAR.OPERATION.DELETE+"</span>";
					inHTML += 		"</a>";
					inHTML += 	"</td>";
					break;
				case "actioncolumn":
					var items = column.items;
					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-action-column "+fst+" "+lst+"\" name=\"action-column\">";
					inHTML +=		"<div class=\"grid-content-td-wrap\">";
					for (var index = 0; index < items.length; index++){
						var item = items[0];
						inHTML+= 	"<input class=\"actioncolumn-input\" data-index=\""+jndex+"\" data-type=\""+item.xtype+"\" data-property=\""+column.dataIndex+"\" data=\""+column.renderer.call(me, dd, jndex)+"\" />";
					};
					inHTML +=		"</div>";
					inHTML += 	"</td>";
					actionFlag.push(kndex);
					break;
				default:
					inHTML += 	"<td class=\"grid-content-td grid-content-td-"+kndex+" grid-content-td-"+column.name+" "+fst+" "+lst+" "+column.cls+"\" name=\""+column.name+"\">";
					inHTML += 		"<div class=\"content\">"+column.renderer.call(me, dd, jndex, data)+"</div>";
					inHTML += 	"</td>";
					break;
			};
		};

		inHTML +=		"</tr>";

		//对象初始化
		var row = $(inHTML);
		if (actionFlag.length > 0){
			for (var index = 0; index < actionFlag.length; index++){
				var num = actionFlag[index],
					items = columns[num].items,
					cellObj = row.find("td.grid-content-td-"+num);

				var inputs = cellObj.find("input.actioncolumn-input"),
					dIndex = inputs.attr("data-index"),			//条目序号
					dataIndex = inputs.attr("data-property"),	//属性项
					dd = me.grid("getStore").data[dIndex] || {};
				
				for (var lndex = 0; lndex < items.length; lndex++){
					var propertyObj = {},
						item = items[lndex],
						dIndex = item.dIndex;

					if (item.properties){
						var properties = item.properties;
						for (var mndex = 0; mndex < properties.length; mndex++){
							var property = properties[mndex];
							if (property.value === undefined || property.value === null){
								propertyObj[property.property] = property.index;
							}else{
								propertyObj[property.property] = (data[property.index] === property.value) ? true : false;
							};
						};
					};

					var input = inputs.eq(lndex),
						item = items[lndex],
						xtype = item.xtype,
						dIndex = item.dIndex,
						daIndex = item.dataIndex || dataIndex,
						di = input.attr("data-index");

					if (xtype == "html"){
						var renderer = item.renderer || function(d, dd){return "<span>"+d+"</span>"},
							inHTML = "";

						if (!dIndex || dIndex == ""){
							inHTML = renderer(dd[daIndex], dd, di);
						}else{
							var d = "";
							if (dd[dataIndex]){
								d = dd[dataIndex][dIndex] || "";
							}
							inHTML = renderer(d, dd);
						};

						input.replaceWith($(inHTML));
						//input.remove();
					}else{
						input[xtype]($.extend({}, item, propertyObj));

						if (!dIndex || dIndex == ""){
							input[xtype]("setValue", dd[daIndex]);
						}else if (dd[dataIndex]){
							var d = "";
							if (dd[dataIndex]){
								d = dd[dataIndex][dIndex] || "";
							};
							input[xtype]("setValue", d);
						};
					};
					
				};
			};
		};

		//me.trigger("ev_rowinited", [data, jndex, key]);                                                                                         
		return row;
	},
	initEmptyRow: function(me){
		var me = me || this,
			columns = me.grid("getColumns");

		var inHTML = 	"<tr class=\"grid-content-tr empty\">";

		for (var index = 0, len = columns.length; index < len; index++){
			var lst = (index == len-1) ? "lst" : ""
			inHTML += 		"<td class=\"grid-content-td grid-content-td-"+index+" "+lst+"\">--</td>";
		};
			inHTML +=	"</tr>";

		var row = $(inHTML);
		return row;
	},
	initTBar: function(me, params){
		var me = me || this,
			tar = me.get(0);

		if (!tar){
			return null;
		};
		
		//这里需要判断类型
		var type = $.type(tar.operation);
		var operations = null;
		//console.log(type, tar.operation);
		if (type === "string"){
			operations = tar.operation.split("|");
		}else if (type === "array"){
			operations = tar.operation;
		}else{
			return null;
		};
		tar.operation = operations;
		//console.log(operations);
		//var operations = tar.operation.split("|");
		var inHTML = "<div class=\"operation-container\">";
		for (var index = 0, len = operations.length; index < len; index++){
			var fst = (index === 0) ? "fst" : "",
				lst = (index === len-1) ? "lst" : "";
			
			switch (operations[index]){
				case "add":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-add "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.ADD+"</span>";
					inHTML +=	"</a>";

					var msgInHTML = 	"<div class=\"grid-warning-msg warning\">";
						msgInHTML +=		"<h4 class=\"title\">";
						msgInHTML +=			"<span class=\"icon\"></span>";
						msgInHTML +=			"<span class=\"text\">"+tar.maxRulesMsgText+"</span>";
						msgInHTML +=		"</h4>";
						msgInHTML += 	"</div>";

					var maxRulesMsg = $("<div class=\"grid-max-rules-msg\"></div>").msg({
						type: "alert",
						cls: "grid-popup-msg",
						innerHTML: msgInHTML
					});

					tar.maxRulesMsg = maxRulesMsg;
					break;
				case "edit":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-edit "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.EDIT+"</span>";
					inHTML +=	"</a>";
					break;
				case "prompt":
					inHTML +=	"<div class=\"grid-prompt hidden widget-container successed inline-block left\">";
					inHTML += 		"<div class=\"content\">";
					inHTML +=			"<span class=\"icon\"></span>";
					inHTML +=			"<span class=\"text text-successed\">"+tar.promptTextSuccessed+"</span>";
					inHTML +=			"<span class=\"text text-failed\">"+tar.promptTextFailed+"</span>";
					inHTML +=		"</div>";
					inHTML +=	"</div>";

					tar.showPrompt = true;
					break;
				/*case "reset":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-reset "+fst+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.RESET+"</span>";
					inHTML +=	"</a>";
					break;*/
				case "delete":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-delete "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.DELETE+"</span>";
					inHTML +=	"</a>";

					var msgInHTML = 	"<div class=\"grid-warning-msg warning\">";
						msgInHTML +=		"<h4 class=\"title\">";
						msgInHTML +=			"<span class=\"icon\"></span>";
						msgInHTML +=			"<span class=\"text\">"+tar.noneSelectedMsgText+"</span>";
						msgInHTML +=		"</h4>";
						msgInHTML += 	"</div>";

					var noneSelectMsg = $("<div class=\"grid-none-selected-msg\"></div>").msg({
						type: "alert",
						cls: "grid-popup-msg",
						innerHTML: msgInHTML
					});

						msgInHTML = 	"<div class=\"grid-warning-msg warning\">";
						msgInHTML +=		"<h4 class=\"title\">";
						msgInHTML +=			"<span class=\"icon\"></span>";
						msgInHTML +=			"<span class=\"text\">"+tar.deleteConfirmMsgText+"</span>";
						msgInHTML +=		"</h4>";
						msgInHTML += 	"</div>";

					var deleteConfirmMsg = $("<div class=\"grid-delete-comfirm-msg\"></div>").msg({
						type: "prompt",
						cls: "grid-popup-msg",
						innerHTML: msgInHTML,
						okHandler: function(e){
							var selectedKeys = me.grid("getSelected"),
							store = me.grid("getStore");
							if (selectedKeys.length > 0){
								me.grid("runProgress");
								store.remove(selectedKeys, {}, function(){
									me.grid("prompt", true);
								}, function(){
									me.grid("prompt", false);
								}, function(){
									me.grid("prompt", false);
								});
								//console.log(store, selectedKeys);
							};
						}
					});

					tar.noneSelectMsg = noneSelectMsg;
					tar.deleteConfirmMsg = deleteConfirmMsg;

					break;
				case "deleteAll":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-delete-all "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.DELETE_ALL+"</span>";
					inHTML +=	"</a>";

					var msgInHTML = 	"<div class=\"grid-warning-msg warning\">";
						msgInHTML +=		"<h4 class=\"title\">";
						msgInHTML +=			"<span class=\"icon\"></span>";
						msgInHTML +=			"<span class=\"text\">"+tar.noneSelectedMsgText+"</span>";
						msgInHTML +=		"</h4>";
						msgInHTML += 	"</div>";
						
					var noneSelectMsg = $("<div class=\"grid-none-selected-msg\"></div>").msg({
						type: "alert",
						cls: "grid-popup-msg",
						innerHTML: msgInHTML
					});

					var msgInHTML = 	"<div class=\"grid-warning-msg warning\">";
						msgInHTML +=		"<h4 class=\"title\">";
						msgInHTML +=			"<span class=\"icon\"></span>";
						msgInHTML +=			"<span class=\"text\">"+tar.deleteAllConfirmMsgText+"</span>";
						msgInHTML +=		"</h4>"
						msgInHTML += 	"</div>";

					var deleteConfirmMsg = $("<div class=\"grid-delete-comfirm-msg\"></div>").msg({
						type: "prompt",
						cls: "grid-popup-msg",
						innerHTML: msgInHTML,
						okHandler: function(e){
							var	store = me.grid("getStore"),
								keyProperty = store.keyProperty,
								selectedKeys = [],
								data = store.data;

							for (var index = 0, len = data.length; index < len; index++){
								selectedKeys.push(data[index][keyProperty]);
							};

							if (selectedKeys.length > 0){
								store.remove(selectedKeys, {}, null, function(){
									me.grid("prompt", false);
								}, function(){
									me.grid("prompt", false);
								});
							}
						}
					});

					tar.noneSelectMsg = noneSelectMsg;
					tar.deleteConfirmMsg = deleteConfirmMsg;

					break;
				case "enable":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-enable "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.ENABLE+"</span>";
					inHTML +=	"</a>";
					break;
				case "disable":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-disable "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.DISABLE+"</span>";
					inHTML +=	"</a>";
					break;
				case "search":
					inHTML +=	"<div class=\"container widget-container text-container search-container inline\">";
					inHTML +=		"<span class=\"widget-wrap text-wrap search-wrap\">";
					inHTML +=			"<input type=\"text\" class=\"text-text search-text\" value=\""+$.su.CHAR.OPERATION.SEARCH+"\" />";
					inHTML +=			"<span class=\"pos\"></span>"
					inHTML +=			"<a href=\"javascript:void(0);\" class=\"search-switch\"></a>"
					inHTML +=		"</span>";
					inHTML +=	"</div>";
					break;
				case "refresh":
					inHTML +=	"<a href=\"javascript:void(0);\" class=\"operation-btn btn-refresh "+fst+" "+lst+"\">";
					inHTML +=		"<span class=\"icon\"></span>";
					inHTML +=		"<span class=\"text\">"+$.su.CHAR.OPERATION.REFRESH+"</span>";
					inHTML +=	"</a>";
					break;
				case "autoRefresh":
					inHTML +=	"<input class=\"operation-auto-refresh "+fst+" "+lst+"\"/>";
					break;
				default:
					var xtype = operations[index].xtype
					if (xtype){
						inHTML += "<input operation-index=\""+index+"\" class=\"operation-user-defined operation-"+index+" "+fst+" "+lst+" "+xtype+"\"/>";
					};
					break;
			};
		};


		inHTML +=	"</div>";
		var toolbar = $(inHTML);
		if (tar.isPanel){
			//console.log("grid",me)
			me.panel("getContainer").find("div.panel-tbar-container").append(toolbar);
			//事件监听
			/*toolbar.find("button.operation-refresh").button({
				text: $.su.CHAR.OPERATION.REFRESH,
				handler: function(e){
					//console.log("refresh handler run!");
					me.grid("getStore").load();
				}
			});*/

			toolbar.find("input.operation-auto-refresh").checkbox({
				fieldLabel: null,
				items: [{
					boxlabel: $.su.CHAR.GRID.AUTO_REFRESH,
					inputValue: true,
					name: "auto-refesh"
				}],
				cls: "inline"
			}).on("ev_change", function(e, vOld, vNew){
				clearTimeout(tar.autoRefreshTime);
				if (vNew.length > 0 && vNew[0] === "auto-refesh"){
					tar.autoRefreshTime = setTimeout(function(){
						me.grid("getStore").load();
					}, tar.refreshDuration);
				};
			});
			toolbar.find("input.operation-auto-refresh").checkbox("setValue",tar.autoRefresh);
			//直接赋值不触发ev_change，判断autoRefresh的值来设置修改
			if(tar.autoRefresh){
				tar.autoRefreshTime = setInterval(function(){
					if(me.grid("isEditing"))return;
					me.grid("getStore").load();
				}, tar.refreshDuration);
			}
			
			toolbar.find("input.operation-user-defined").each(function(e){
				var input = $(this),
					index = input.attr("operation-index"),
					options = operations[index],
					xtype = options.xtype;

				switch (xtype){
					case "totalCount":
						options = $.extend({
							fieldLabel: "",
							labelCls: "s",
							readOnly: true,
							inputCls: "xs",
							value: 0,
							cls: "inline-block"				
						}, options);
						input.textbox(options);
						break;
					case "display":
						options = $.extend({
							cls: "grid-display",
							fieldLabel: null,
							labelCls: "s",
							readOnly: true,
							inputCls: "xl grid-display",
							cls: "inline-block"				
						}, options);
						input.textbox(options);
						break;
					default:
						options = $.extend(options, {"cls": "inline-block"});
						input[xtype](options);
				};
			});

			//按钮相关事件
			toolbar.delegate("a.btn-add", "click", function(e){
				e.stopPropagation();
				e.preventDefault();

				var	obj = me.get(0),
					editor = me.grid("getEditor"),
					isEditing = me.grid("isEditing");

				if ($.type(obj.beforeStartAdd) == "function"){
					if (!obj.beforeStartAdd()){
						return;
					};
				};
					
				if (isEditing === true){
					$(editor).editor("shake");
				}else if (isEditing === false){
					var paging = obj.paging,
						store = me.grid("getStore");
					//console.log(obj.maxRules, store.data.length);

					if (obj.maxRules && obj.maxRules <= store.data.length){
						obj.maxRulesMsg.msg("show");
						return;
					};
					//console.log(paging)
					if (paging && paging.isPaging){
						$(paging).paging("goToPage", 0);
					};
					$(editor).editor("startEdit", "add");
				};

			}).delegate("a.btn-delete", "click", function(e){
				e.stopPropagation();
				e.preventDefault();

				var	editor = me.grid("getEditor"),
					obj = me.get(0),
					isEditing = me.grid("isEditing");
				if (isEditing === true){
					$(editor).editor("shake");
				}else{
					var selectedKeys = me.grid("getSelected");
					if (selectedKeys.length == 0){
						obj.noneSelectMsg.msg("show");
					}else{
						obj.deleteConfirmMsg.msg("show");
					};
				};
			}).delegate("a.btn-delete-all", "click", function(e){
				e.stopPropagation();
				e.preventDefault();

				var	editor = me.grid("getEditor"),
					obj = me.get(0),
					isEditing = me.grid("isEditing");
					
				if (isEditing === true){
					$(editor).editor("shake");
				}else{
					// obj.deleteConfirmMsg.msg("show");

					var selectedKeys = me.grid("getStore").data.length;
					if (selectedKeys == 0){
						obj.noneSelectMsg.msg("show");
					}else{
						obj.deleteConfirmMsg.msg("show");
					};
				};	
			}).delegate("a.btn-refresh", "click", function(e){
				e.stopPropagation();
				e.preventDefault();

				me.grid("runProgress");
				me.grid("getStore").load({}, function(){
					me.grid("prompt", true);
				}, function(){
					me.grid("prompt", false);
				}, function(){
					me.grid("prompt", false);
				});
			});	//后面还要添加启用/禁用操作。

			//搜索框相关事件
			toolbar.delegate("input.search-text", "focus", function(e){
				e.stopPropagation();
				$(this).closest("div.search-container").addClass("focus");
			}).delegate("input.search-text", "blur", function(e){
				e.stopPropagation();
				$("div.search-container").removeClass("focus");
			}).delegate("button.operation-btn", "mousedown", function(e){
				e.stopPropagation();
				$(this).closest("div.button-container").addClass("clicked");
			}).delegate("a.search-switch", "click", function(e){
				e.stopPropagation();
				var gridContainer = $(this).closest("div.grid-container"),
					content = $(this).prevAll("input.search-text").val();
				gridContainer.grid("search", content);
			});

			var store = tar.store;
			$(store).on("ev_datachanged", function(e, store, data){
				toolbar.find("input.totalCount").textbox("setValue", data.length);
			});

		};

		if (tar.showPrompt){
			/*var progressbar = $("<input type=\"hidden\"/>");
			progressbar.progressbar({
				cls: "gird-prompt-progressbar",
				width: me.width(),
				height: 4	//这个是硬编码
			});
			toolbar.append(progressbar.closest("div.widget-container"));*/
			inHTML =	"<div class=\"container widget-container progressbar-container progressbar-horizontal gird-prompt-progressbar \">";
			inHTML +=		"<div class=\"widget-wrap progressbar-wrap\">";
			inHTML +=		"<div class=\"widget-wrap progressbar-content\">";
			inHTML +=			"<div class=\"progressbar-value\">";
			// inHTML +=				"<div class=\"progressbar-text\">";
			// inHTML +=					"<span class=\"progressbar-percentage\">100%</span>";
			// inHTML +=				"</div>";
			inHTML +=			"</div>";
			inHTML +=		"</div>";
			inHTML +=	"</div>";

			toolbar.append($(inHTML));
		};

		tar.operation = toolbar.get(0);	
	},
	initPaging: function(me, params){
		var me = me || this,
			obj = me.get(0),
			options = {};

		if (!obj || !obj.paging){
			return null;
		};

		options = $.extend({
			grid: me
		}, obj.paging);

		var panelContainer = me.panel("getContainer"),
			fbarContainer = panelContainer.find("div.panel-fbar-container");

		var paging = $("<input type=\"hidden\" class=\"hidden paging-input\">").paging(options);
		fbarContainer.append(paging.paging("getContainer"));
		
		obj.paging = paging.get(0);
		return me;
	},
	initEditor: function(me, params){
		var me = me || this,
			obj = me.get(0),
			settings;

		if (!obj){
			return null;
		};

		var editor = obj.editor;
		if (!editor || !editor.isEditor){
			var type = $.type(editor),
				settings = {
					columns: obj.columns,
					grid: me
				};
			if (type == "string" && editor !== "default"){
				settings = $.extend(settings, {
					content: editor
				});
			}else{
				settings = $.extend(settings, editor);
			};

			var editorObj = $("<tr class=\"editor-container\"></tr>").editor(settings);
			
		};

		obj.editor = editorObj.get(0);
		return me;
	},
	load: function(me, params){	//data,
		//加载全部
		var me = me || this,
			obj = me.get(0),
			data = params[1] || obj.store.data,
			wrap = me.grid("getContainer").find("tbody.grid-content-data");
		obj.rows = [];
		wrap.empty();

		for (var index = 0, actualIndex = 0, len = data.length; index < len; index++){
			if (!data[index]){
				break;
			};
			actualIndex = obj.reverseIndex?(len-index-1):index;
			var rowNew = me.grid("initRow", actualIndex, data[index]);
			obj.rows.push(rowNew);
			wrap.append(rowNew);
		};

		me.grid("updateRowNumber");
		me.trigger("ev_load", [data]);
		return me;
	},
	insert: function(me, params){	//index, data
		//加载一个
		var me = me || this,
			obj = me.get(0),
			index = parseInt(params[1], 10) || 0,
			data = params[2] || [{}],
			wrap = me.find("tbody.grid-content-data");

		if (!$.isArray(data)){
			data = [data];
		};

		data.reverse();

		for (var jndex = 0, len = data.length; jndex < len; jndex++){
		 	var newRow = me.grid("initRow", index+jndex, data[jndex]);
			
		 	if (index == 0){
		 		wrap.prepend(newRow);
		}else{
		 		newRow.insertBefore(obj.rows[index])
			};
		 	obj.rows.splice(index, 0, newRow);
		};

		me.grid("updateRowNumber");
		me.trigger("ev_insert", [index, data]);
		return me;
	},
	update: function(me, params){
		var me = me || this,
			obj = me.get(0),
			rows = obj.rows,
			wrap = me.find("tbody.grid-content-data"),
			key = params[1],
			index = params[2] || 0,
			data = params[3];

		if ($.isArray(data)){
			data = data[0];
		};

		var	trNew = me.grid("initRow", index, data),
			trOld = rows[index];

		if (key == trOld.attr("data-key")){
			//确保key相同再操作
		trOld.replaceWith(trNew);
			rows[index] = trNew;
		};
		me.grid("updateRowNumber");
		me.trigger("ev_update", [key, index, data]);
		return me;
	},

	remove: function(me, params){
		var me = me || this,
			obj = me.get(0),
			rows = obj.rows,
			keys = params[1],
			keyObj = {};

		if (!(keys === undefined) && !(keys === null)){
			if ($.type(keys) === "number"){
				keys = [keys];
			};

			//制作哈希表
			for (var index = 0, len = keys.length; index < len; index++){
				keyObj[keys[index]] = true;
			};
		};
		
		for (var index = rows.length-1; index >= 0; index--){
			var rowOld = obj.rows[index];
			if (rowOld.attr("data-key") in keyObj){
				rowOld.remove();
				obj.rows.splice(index, 1);
			};
		};

		me.grid("updateRowNumber");
		me.trigger("ev_remove", [keys]);

		//$(obj).find('th.grid-header div.checkcolumn label.checkbox-label').removeClass("checked");
		//$(obj).find('th.grid-header div.checkcolumn label.checkbox-label').find("input[type=checkbox]").prop("checked", false);
		return me;
	},

	removeAllData: function(me, params){
		//console.log("grid   removeAllData");
		var me = me || this,
			obj = me.get(0);

		obj.rows = [];
		
		me.grid("updateRowNumber");
		me.trigger("ev_remove", ["all"]);
		return me;
	},

	updateRowNumber: function(me, start){
		var me = me || this,
			obj = me.get(0),
			rows = obj.rows,
			len = rows.length,
			wrap = me.find("tbody.grid-content-data"),
			label = $(obj).find('th.grid-header div.checkcolumn label.checkbox-label'),
			container = label.closest("div.checkbox-group-container");

		if (len == 0){
			var	rowEmpty = me.grid("initEmptyRow");

			wrap.empty();
			wrap.append(rowEmpty);
			rowEmpty.css("display", "table-row")
			return me;
		};

		for (var index = 0; index < len; index++){
			var row = rows[index];
			if (row){
				$(row).find("span.grid-row-numberer").html(index+1);
			};
		};



		var trList =  me.find("tr.grid-content-tr");

		if(trList.length>0){
			//不全选
			for(var index=0; index<trList.length; ++index){
				//console.log($(trList[index]).hasClass("selected"))
				if($(trList[index]).hasClass("disabled")){
					continue;
				}
				if(!$(trList[index]).hasClass("selected")){
					break;
				}
			}
			if(index != trList.length){
				container.removeClass("selected");
				label.removeClass("checked");
			}
			//全选
			for(var index=0; index<trList.length; ++index){
				//console.log($(trList[index]).hasClass("selected"))
				if($(trList[index]).hasClass("disabled")){
					continue;
				}
				if(!$(trList[index]).hasClass("selected")){
					break;
				}
			}
			if(index == trList.length){
				container.addClass("selected");
				label.addClass("checked");
			}
		}


		return me;
	},

	// renderer: function(me){
	// 	var me = me || this,
	// 		obj = me.get(0),
	// 		wrap = me.grid("getContainer").find("tbody.grid-content-data"),
	// 		rows = obj.rows;

	// 	wrap.empty();

	// 	if (rows.length == 0){
	// 		//若当前无条目存在
	// 		var	trEmpty = me.grid("initEmptyRow");
	// 		wrap.append(trEmpty);
	// 	}else{
	// 		//若当前有条目存在
	// 		for (var index = 0, len < rows.length; index < len; index++){
	// 			var row = rows[index];
	// 			if (row){
	// 				wrap.append(row);
	// 			};
	// 		};
	// 	};

	// 	return me;
	// },

	//这部分放到editor控件中去，若不需要编辑，则不会被初始化
	/*startEdit: function(me, params){	//index, oldData, newData, callback //调出编辑框
		var me = me || this,
			index = params[1] || 0;
	},
	cancelEdit: function(me, params){	//取消编辑，关闭编辑框

	},
	completeEdit: function(me, params){	//完成编辑，调用store，发送request

	},*/

	getColumns: function(me){
		var me = me || this;
		return me.get(0).columns;
	},
	getSelected: function(me, allFlag){
		var me = me || this;
		var allFlag = allFlag[1];

		//console.log(allFlag)
		var selectedTrs = me.find("tr.grid-content-tr.selected");

		var result = [];
		selectedTrs.each(function(i, obj){
			var tr = $(obj);
			var rules = allFlag ? !tr.hasClass("empty") : (!tr.hasClass("empty") && !tr.hasClass("disabled"));
			if (rules){
				var key = tr.attr("data-key");
				result.push(key);
			}

		});

		return result;
	},

	/*setStartNumber: function(me, number){
		var me = me || this,
			num = number[1] || 0;
		return me.get(0).currentStartNumber = num;
	},
	getStartNumber: function(me){
		var me = me || this;
		return me.get(0).currentStartNumber || 0;
	},*/
	getStore: function(me){
		var me = me || this;
		return me.get(0).store || null;
	},
	getEditor: function(me){
		var me = me || this,
			editor = me.get(0).editor;

		if (editor && $.type(editor) === "object" && editor.isEditor === true){
			return editor;
		}else{
			return undefined;
		};
	},
	getDisplay: function(me){
		var me = me || this,
			container = me.closest("div.grid-panel");

		var display = me.find("input.grid-display");
		if (display.length > 0){
			return display;
		}else{
			return null
		};
	},
	search: function(me, content){
		var me = me || this,
			content = content[1];
		if (!content){
			return null;
		};

		//alert(content)
		return me;
	},
	isEditing: function(me){
		var me = me || this,
			editor = me.grid("getEditor"),
			store = me.get(0).store;

		if (editor && editor.isEditor){
			if (editor.editing === true){
				return true;
			};
		}else{
			return null;
		};

		return false;
	},
	runProgress: function(me){
		var me = me || this,
			obj = me.get(0),
			toolbar = $(obj.operation),
			progressbar = toolbar.find("div.gird-prompt-progressbar"),
			bar = progressbar.find("div.progressbar-value");

		bar.stop();
		bar.css("width", "0px");
		progressbar.clearQueue().fadeIn(100, function(){
			bar.animate({
				width: "50%"
			}, 5*1000);
		});

		return me;
	},
	prompt: function(me, params){		//successed: true, false;	text为错误内容
		var me = me || this,
			obj = me.get(0),
			successed = params[1],
			text = params[2],
			toolbar = $(obj.operation),
			progressbar = toolbar.find("div.gird-prompt-progressbar"),
			editing = me.find("tr.grid-content-tr.editing"),
			editor = $(me.grid("getEditor")),
			formPrompt = toolbar.find("div.grid-prompt");

		var btn_container = me.find("div.editor-buttons-container");
		if(btn_container.length){
			var btn_submit = btn_container.find("button.btn-submit");
			if(btn_submit.length){
				btn_submit.attr("disabled",false);
			}
		}
		progressbar.find("div.progressbar-value").clearQueue().animate({
			width: "100%"
		}, 150, function(){
			progressbar.fadeOut(100, function(){
				if (successed){
					//成功
					formPrompt.find("span.text-successed").html((text || obj.promptTextSuccessed));
					formPrompt.removeClass("failed").addClass("successed");
				}else{
					//失败
					formPrompt.find("span.text-failed").html((text || obj.promptTextFailed));
					formPrompt.removeClass("successed").addClass("failed");

					editing.addClass("error");
					editor.addClass("error");
				};

				formPrompt.fadeIn(50, function(){
					setTimeout(function(){
						formPrompt.css("display", "none");
						editor.removeClass("error");
						editing.removeClass("error");
					}, 3*1000);
				});
			});
		});
			

		return me;
	},

	disableRow: function(me, index){	//index
		var me = me || this,
			obj = me.get(0),
			columns = obj.columns,
			index = index[1],
			row = null;
		
		if (!isNaN(index)){
			row = obj.rows[index];
		};
		
		if (row){
			row = $(row);
			row.addClass("disabled");

			for (var index = 0, len = columns.length; index < len; index++){
				var column = columns[index],
					items = column.items;
				//console.log("111", column.xtype, column.items);
				if (column.xtype === "actioncolumn"){
					for (var jndex = 0, jen = items.length; jndex < jen; jndex++){
						var item = items[jndex],
							xtype = item.xtype,
							dataIndex = column.dataIndex,

						act = row.find("input[data-property="+dataIndex+"][data-type="+xtype+"]");
						//console.log(column, act, xtype, dataIndex)
						if (act && $.type(act[xtype]) == "function"){
							act[xtype]("disable");
						};

						//act.attr("auto-disabled", true);
					};
				};
			};
		};

		return me;
	},

	enableRow: function(me, index){
		var me = me || this;
			obj = me.get(0),
			columns = obj.columns,
			index = index[1],
			row = null;

		if (!isNaN(index)){
			row = obj.rows[index];
		};
		
		if (row){
			row = $(row);
			row.removeClass("disabled");

			for (var index = 0, len = columns.length; index < len; index++){
				var column = columns[index],
					items = column.items;
				//console.log("111", column.xtype, column.items);
				if (column.xtype === "actioncolumn"){
					for (var jndex = 0, jen = items.length; jndex < jen; jndex++){
						var item = items[jndex],
							xtype = item.xtype,
							dataIndex = column.dataIndex,

						act = row.find("input[data-property="+dataIndex+"][data-type="+xtype+"]");
						//console.log(column, act, xtype, dataIndex)
						if (act && $.type(act[xtype]) == "function"){
							act[xtype]("enable");
						};

						//act.removeAttr("auto-disabled");
					};
				};
			};
		};

		return me;
	}
});
	

})(jQuery);