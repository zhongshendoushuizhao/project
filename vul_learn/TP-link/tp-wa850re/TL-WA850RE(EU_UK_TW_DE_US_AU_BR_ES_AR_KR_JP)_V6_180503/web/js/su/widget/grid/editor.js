// JavaScript Document
(function($){

$.su.Widget("editor", {
	defaults: {
		columns: null,
		grid: null,		//宿主grid
		//properties
		editing: false,
		pluginId: "",
		editingId: null,
		form: null,

		beforeSubmit: null,

		//额外项目
		items: null,
		content: null,
		fields: null
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			$.extend(this, defaults, options);
			var tar = $(obj),
				columns = obj.columns;
			//需要添加一个td和colspan
			var inHTML = 	"<td class=\"editor-container\" colspan=\""+columns.length+"\">";

				inHTML +=		"<div class=\"container editor-content-container\"></div>";		//编辑器内容

				inHTML +=		"<div class=\"container editor-buttons-container\">";

				inHTML +=			"<span class=\"form-error-tips\"></span>";

				inHTML +=			"<div class=\"button-container submit\">";
				inHTML +=				"<button type=\"button\" class=\"editor-btn btn-cancel button-button\">";
				inHTML +=					"<span class=\"button-button-before\"></span>";
				inHTML +=					"<span class=\"button-text text\">"+$.su.CHAR.OPERATION.CANCEL+"</span>";
				inHTML +=				"</button>";
				inHTML +=			"</div>";

				// inHTML +=			"<div class=\"button-container\">";
				// inHTML +=				"<button type=\"button\" class=\"editor-btn btn-delete button-button\">"+$.su.CHAR.OPERATION.DELETE+"</button>";
				// inHTML +=			"</div>";

				inHTML +=			"<div class=\"button-container submit\">";		//按钮框
				inHTML +=				"<button type=\"button\" class=\"editor-btn btn-submit button-button\">";
				inHTML +=					"<span class=\"button-button-before\"></span>";
				inHTML +=					"<span class=\"button-text text\">"+$.su.CHAR.OPERATION.OK+"</span>";
				inHTML +=				"</button>";
				inHTML +=			"</div>";

				inHTML +=		"</div>";

				inHTML +=	"</td>";

			var form = $(inHTML);
			tar.append(form).addClass("container widget-container editor-container");

			var editorContentContainer = tar.find("div.editor-content-container");
			var fields = [];
			//初始化编辑框
			for (var index = 0; index < columns.length; index++){
				var	column = columns[index],
					editorType = columns[index]["editor"];	//先只默认为text

				//这个初始化函数需要优化~		1、column的属性 + 扩展 editor的属性
				//console.log(column);
				if (editorType){
					var	editor = $("<input />");
					editorContentContainer.append(editor);

					if ($.type(editorType) === "string"){
						editor[editorType]({
							fieldLabel: column.text || "",
							name: column.name || column.dataIndex || ""
						});
					}else{
						if (editorType.xtype){
							var opt = $.extend({}, editorType, {
								fieldLabel: column.text || "",
								name: column.name || column.dataIndex || ""
							});
							editor[editorType.xtype](opt);
						}else{
							//console.error("Invalid Editor type!");
							return null;
						};
					};

					//设置fields
					fields.push({
						name: column.name || column.dataIndex || ""
					});
				};
			};

			//额外的表单部分
			if (obj.items){
				for (var index = 0, len = obj.items.length; index < len; index++){
					var	item = obj.items[index],
						editor = $("<input />");

					editorContentContainer.append(editor);
					editor[item.xtype]($.extend({}, item));

					fields.push({
						name: item.name
					})
				};
			};

			if (obj.content && obj.content != "default"){
				if (!obj.fields){
					//console.error("You shold defined the fields first!");
					return;
				};

				editorContentContainer.append($(obj.content).detach());	
			};

			$.extend(fields, obj.fields);
			$.extend(options, {
				fields: fields
			});

			//console.log(options)

			form.form(options);

			obj.pluginId = $.su.randomId("editor");	//这个就不用id了，xtype属于form！
			obj.isEditor = true;
		});

		//console.log(me, me.find("button.btn-submit"))
		me.delegate("button.btn-submit", "click", function(e){
			e.stopPropagation();
			$("button.btn-submit").attr("disabled",true);
			var obj = me.get(0);
			if (obj.beforeSubmit){
				var t = obj.beforeSubmit();
				if (!t){
					$("button.btn-submit").attr("disabled",false);
					return;
				};
			};
			me.editor("completeEdit");
		});

		/*me.delegate("button.btn-delete", "click", function(e){
			
		});*/

		me.delegate("button.btn-cancel", "click", function(e){
			e.stopPropagation();
			me.editor("cancelEdit");
		});

		//存放
		var grid = me.get(0).grid;
		if (!grid || grid.length == 0 || !grid.get(0).isGrid){
			//console.error("Invalid grid for the editor!");
			return null;
		};

		//事件绑定
		grid.delegate("a.grid-content-btn.grid-content-btn-edit", "click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var btn = $(this),
				tr = btn.closest("tr.grid-content-tr");
			if (tr.hasClass("disabled")){
				return;
			};

			var	key = btn.attr("data-key"),
				index = btn.attr("data-index"),
				editor = me;

			//console.log(btn, key, index, editor);

			if (editor){
				var editorObj = editor.get(0);
				if (editorObj && editorObj.isEditor){
					if (editorObj.editing === false){
						editor.editor("startEdit", key);
					}else{
						editor.editor("shake");
					};
				};
			};
			//console.log("item edit");
		});


		//默认隐藏
		me.css("display", "none");

		//初始化差错提示
		/*var msg = (function(){
			var msg = $("<div></div>");

			msg.msg({
				title: options.title,
				
			});

			return msg.get(0);
		})();*/

		/*return me.css({
			display: "none"
		});*/

		return me;
	},
	hide: function(me){	//不会对对象进行销毁
		var me = me || this;
		me.detach().css("display", "none");
		return me;
	},
	shake: function(me){
		var me = me || this;
		me.queue(function(){
			$(this).addClass("shaking");
			$(this).dequeue();
		});
		me.delay(80);
		me.queue(function(){
			$(this).removeClass("shaking");
			$(this).dequeue();
		});
		me.delay(80);
		me.queue(function(){
			$(this).addClass("shaking");
			$(this).dequeue();
		});
		me.delay(80);
		me.queue(function(){
			$(this).removeClass("shaking");
			$(this).dequeue();
		});
		return me;
	},
	startEdit: function(me, params){	//editingId, column	//因为是对一整条条目操作，顾第二个参数暂时忽视
		var me = me || this,
			obj = me.get(0),
			editingId = params[1] || "add",	//数据条目数如何传进来？
			//editingIndex = params[2] || "add",
			grid = me.get(0).grid,
			gridObj = grid.get(0),
			store = grid.get(0).store,
			//dataContainer = grid.find("tbody.grid-content-data"),
			targetTr = null,
			form = me.find("td.editor-container");

		me.editor("hide");
		form.form("setNormal");
		obj.editing = true;
		obj.editingId = editingId;
		obj.editingIndex = "add";

		//obj.editingIndex = isNaN(editingIndex) ? "add" : parseInt(editingIndex, 10);
		//console.log(store, gridObj.rows, listIndex, editingId)
		if (editingId != "add"){
			//在这集添加数据回显
			var data = store.getData(editingId),
				editingIndex = store.getIndex(editingId);

			obj.editingIndex = editingIndex;
			obj.adding = false;

			if (data){
				form.form("loadData", data);
			}else{
				form.form("reset");
			};
			
			targetTr = gridObj.rows[editingIndex];

			if (targetTr){
				targetTr.addClass("editing");
				grid.grid("disableRow", editingIndex);
			};
			//显示编辑器
			//targetTr = dataContainer.find("tr.grid-content-tr").filter(".grid-content-tr-"+editingId).addClass("editing");
		}else{
			//清空表单
			me.get(0).adding = true;
			form.form("reset");

			var dataContainer = grid.find("tbody.grid-content-data"),
				fistTr = dataContainer.find("tr.grid-content-tr").eq(0);

			if (fistTr.hasClass("empty")){
				targetTr = fistTr;
			}else{
				targetTr = me.grid("initEmptyRow");
				dataContainer.prepend(targetTr);
			};

			//显示编辑器
			targetTr.addClass("editing add disabled")
		};

		me.insertAfter(targetTr);
		me.slideDown(300);

		//重新计算表格高度

		//me.editor("show", editingId);
		//console.log("startEdit", editingId);
		me.trigger("ev_startEdit", [obj.editingIndex, obj.editingId])
		return me;
	},
	completeEdit: function(me){
		var me = me || this,
			form = me.find("td.editor-container"),
			obj = me.get(0),
			grid = obj.grid,
			listIndex = obj.editingIndex,
			store = grid.get(0).store,
			editingId = obj.editingId,
			len = 0;	/*这里的修改点~~~*/

		
		//console.log(form.form("validate"))
		if (form.form("validate")){
			var dNew = form.form("serialize"),
				dOld = null;
				
			grid.grid("runProgress");
			if (editingId != "add"){
				dOld = store.getData(editingId);
				store.update(editingId, {
					"old": $.su.json.toJSONString(dOld),
					"new": $.su.json.toJSONString(dNew)
				}, function(){
					grid.grid("prompt", true);
					me.editor("cancelEdit");
				}, function(){
					grid.grid("prompt", false);
				}, function(){
					grid.grid("prompt", false);
				});
			}else{
				//新增
				store.insert(len, {
					"old": "add",
					"new": $.su.json.toJSONString(dNew)
				}, function(){
					grid.grid("prompt", true);
					me.editor("cancelEdit");
				}, function(){
					grid.grid("prompt", false);
				}, function(){
					grid.grid("prompt", false);
				});
			};
			me.get(0).adding = false;
		}
		else{
			setTimeout(function(){
				$("button.btn-submit").attr("disabled",false);
			},500);
		}
		return me;
	},
	cancelEdit: function(me){
		var me = me || this,
			obj = me.get(0),
			grid = me.get(0).grid,
			gridObj = grid.get(0),
			editingIndex = obj.editingIndex;

		var	tr = null;
		if (editingIndex !== "add"){
			gridObj.rows[editingIndex].removeClass("editing");
			grid.grid("enableRow", editingIndex);
		}else{
			grid.find("tr.grid-content-tr.add").remove();
		};

			me.editor("hide");

		//添加清空表表单
		obj.editing = false;
		obj.editingIndex = "";

		grid.grid("updateRowNumber")
		return me;
	},
	isEditing: function(me){
		var me = me || this;
		if (me.get(0).editing){
			return true;
		}else{
			return false;
		};
	},
	getEditingId: function(me){
		var me = me || this;
		if (me.get(0).editing){
			return me.get(0).editingId;
		}else{
			return undefined;
		}
	}
	/*getOwnGrid: function(me){	//只有当editor插入dom中之后才能生效！
		var me = me || this,
			gridContainer = me.closest("div.grid-panel");
		//console.log(gridContainer)
		if ((gridContainer.length != 0) && (gridContainer.get(0).isGrid == true)){
			return gridContainer;
		}else{
			return null;
		};
	},
	showMsg: function(me, params){	// _content, _title,
		var me = me || this,
			text = params[2],
			title = params[1],
			msgBox = $(me.get(0).msg);

		if (text){
			msgBox.msg("setContent", text);
		};

		if (title){
			msgBox.msg("setTitle", title);
		};

		msgBox.msg("show");

		return me;
	}*/
});

})(jQuery);