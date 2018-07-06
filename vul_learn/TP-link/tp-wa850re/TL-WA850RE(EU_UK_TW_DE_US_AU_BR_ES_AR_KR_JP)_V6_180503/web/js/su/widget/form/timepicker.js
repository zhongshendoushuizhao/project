// JavaScript Document
(function($){

$.su.Widget("timepicker", {
	defaults: {
		fieldLabel: "",
		viewOnly: false,
		legendText: $.su.CHAR.TIMESET.TIME || "Time",
		inputCls: "",
		cls: ""
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var viewOnlyCls = "",
				viewOnly = false;
			if (obj.viewOnly){
				viewOnlyCls = "view-only";
				viewOnly = true;
			}

			var inHTML = 	"<div class=\"container widget-container timepicker-container "+obj.cls+"\">";

				if (this.fieldLabel !== null){
					inHTML +=	"<div class=\"widget-fieldlabel-wrap "+this.labelCls+"\">";
					inHTML +=		"<label class=\"widget-fieldlabel timepicker-fieldlabel\">"+this.fieldLabel+"</label>";
					if (this.fieldLabel !== ""){
						inHTML +=	"<span class=\"widget-separator\">"+this.separator+"</span>";
					};
					inHTML +=	"</div>";				
				};

			//fieldset部分
				inHTML +=		"<div class=\"widget-wrap timepicker-wrap inline\">";
				inHTML +=			"<a class=\"timepicker-switch\" href=\"javascript:void(0);\">";
				inHTML +=				"<span class=\"icon\"></span>";
				inHTML +=				"<span class=\"text\"></span>";
				inHTML +=			"</a>";
				inHTML +=		"</div>";

			//弹出框部分
				inHTML +=		"<div class=\"timepicker-msg-container "+viewOnlyCls+"\">";

				inHTML +=			"<div class=\"canvas\">";
				inHTML +=				"<div class=\"timepicker-msg-container-wrap\">";
				inHTML +=					"<table class=\"timepicker\">";

				inHTML +=						"<thead>";

				inHTML +=							"<tr>";
				inHTML +=								"<th class=\"fst\"></th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"mon\">"+$.su.CHAR.DATE.MONDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"tue\">"+$.su.CHAR.DATE.TUESDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"wed\">"+$.su.CHAR.DATE.WEDNESDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"thu\">"+$.su.CHAR.DATE.THURSDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"fri\">"+$.su.CHAR.DATE.FRIDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"sat\">"+$.su.CHAR.DATE.SATURDAY+"</th>";
				inHTML +=								"<th class=\"week-picker\" data-week=\"sun\">"+$.su.CHAR.DATE.SUNDAY+"</th>";
				inHTML +=							"</tr>";

				inHTML +=						"</thead>";

				inHTML +=						"<tbody>";
			
			for (var index = 0; index < 24; index++){

				inHTML += 							"<tr>";
				inHTML +=								"<td class=\"fst\"><div data-time=\""+index + "-" + (index+1) +"\" class=\"row-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"mon\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"tue\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"wed\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"thu\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"fri\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"sat\" class=\"timepicker-picker\"></div></td>";
				inHTML +=								"<td><div data-time-start=\""+index+"\" data-time-end=\""+(index+1)+"\" data-week=\"sun\" class=\"timepicker-picker\"></div></td>";
				inHTML +=							"</tr>";

			};

				inHTML +=						"</tbody>";

				inHTML +=					"</table>";

			if (viewOnly){
				inHTML +=					"<div class=\"timepicker-view-only timepicker-view-only-cover\"></div>";
			};

				inHTML +=				"</div>";

			//垂直坐标
				inHTML +=				"<div class=\"x-axis\">";
				inHTML +=					"<div class=\"x-axis-wrap\">";

			for (var index = 0; index <= 24; index++){
				var time = (index.toString().length == 1) ? ("0"+index) : index.toString();
				inHTML +=						"<span>"+time+ ":00" +"</span>";
			};
				
				inHTML +=					"</div>";
				inHTML +=				"</div>";

				inHTML +=				"<div class=\"legend-container\">";
				inHTML +=					"<span class=\"icon\"></span>";
				inHTML +=					"<span class=\"text\">"+obj.legendText+"</span>";
				inHTML +=				"</div>";

				inHTML +=			"</div>";

			if (!viewOnly){
				inHTML +=			"<div class=\"msg-btn-container\">";
				inHTML +=				"<div class=\"msg-btn-wrap\">";
				inHTML +=					"<div class=\"button-container inline\">";
				inHTML +=						"<button type=\"button\" class=\"button-button btn-msg btn-msg-cancel\"><span class=\"button-button-before\"></span><span class=\"text button-text\">" +$.su.CHAR.OPERATION.CANCEL+ "</span></button>";
				inHTML +=					"</div>";
				inHTML +=					"<div class=\"button-container inline\">";
				inHTML +=						"<button type=\"button\" class=\"button-button btn-msg btn-msg-reset\"><span class=\"button-button-before\"></span><span class=\"text button-text\">"+$.su.CHAR.OPERATION.RESET+"</span></button>";
				inHTML +=					"</div>";
				inHTML +=					"<div class=\"button-container inline\">";
				inHTML +=						"<button type=\"button\" class=\"button-button btn-msg btn-msg-ok\"><span class=\"button-button-before\"></span><span class=\"text button-text\">"+$.su.CHAR.OPERATION.OK+"</span></button>";
				inHTML +=					"</div>";
				inHTML +=				"</div>";
				inHTML +=			"</div>";
			};	

				inHTML +=		"</div>";
				inHTML +=	"</div>";

			var container = $(inHTML);
			tar.addClass(obj.inputCls).replaceWith(container);
			container.append(tar.addClass("hidden"));

			//初始化弹窗
			var msgContaienr = container.find("div.timepicker-msg-container");
			msgContaienr.msg({
				cls: "timepicker-container "+obj.cls,
				//type: (viewOnly ? "window" : "prompt")
				type: "window"
			});

			obj.msg = msgContaienr;
		});

		//事件监听部分
		var container = me.closest("div.timepicker-container");
		var obj = me.get(0);
		var msg = obj.msg;
		container.delegate("a.timepicker-switch", "click", function(e){
			if ($(this).hasClass("disabled")){
				return;
			}else{
				var snapshot = obj.snapshot || "[]";

				me.timepicker("setValue", snapshot);
				me.trigger("ev_beforeshow", [me, msg]);
				msg.msg("show");
			};
		});

		msg.on("ev_close", function(e, msg){
			me.trigger("ev_close", [me, msg]);
		});

		msg.delegate("div.timepicker-picker", "click", function(e){
			e.stopPropagation();
			e.preventDefault();
			//console.log(this)
			//$(this).toggleClass("selected");
		}).delegate("button.btn-msg-cancel", "click", function(e){
			//me.timepicker("reset");
		}).delegate("button.btn-msg-ok", "click", function(e){
			var v = me.timepicker("getValue");
			me.timepicker("setValue", v);
		}).delegate("button.btn-msg-reset", "click", function(e){
			/*var snapshot = me.get(0).snapshot;
			//console.log(snapshot)
			if (snapshot){
				me.timepicker("setValue", snapshot);
			};*/
			me.timepicker("restore");
		});/*.delegate("div.row-picker", "mouseover", function(e){
			//下面是row-picker的响应
			var dataTime = $(this).attr("data-time");
			msg.find("div.timepicker-picker[data-time="+dataTime+"]").addClass("hover");
		}).delegate("div.row-picker", "mouseout", function(e){
			var dataTime = $(this).attr("data-time");
			msg.find("div.timepicker-picker[data-time="+dataTime+"]").removeClass("hover");
		}).delegate("div.row-picker", "click", function(e){
			var dataTime = $(this).attr("data-time");
			var thisRow = msg.find("div.timepicker-picker[data-time="+dataTime+"]");

			var selectAllFlag = true;
			thisRow.each(function(i, obj){

				if (!$(obj).hasClass("selected")){
					selectAllFlag = false;
					return false;
				};
			});

			if (selectAllFlag){
				thisRow.removeClass("selected");
			}else{
				thisRow.addClass("selected");
			};
		}).delegate("th.week-picker", "mouseover", function(e){
			//下面是week-picker的响应
			var dataWeek = $(this).attr("data-week");
			msg.find("div.timepicker-picker[data-week="+dataWeek+"]").addClass("hover");
		}).delegate("th.week-picker", "mouseout", function(e){
			var dataWeek = $(this).attr("data-week");
			msg.find("div.timepicker-picker[data-week="+dataWeek+"]").removeClass("hover");
		}).delegate("th.week-picker", "click", function(e){
			var dataWeek = $(this).attr("data-week");
			var thisCol = msg.find("div.timepicker-picker[data-week="+dataWeek+"]");

			var selectAllFlag = true;
			thisCol.each(function(i, obj){

				if (!$(obj).hasClass("selected")){
					selectAllFlag = false;
					return false;
				};
			});

			if (selectAllFlag){
				thisCol.removeClass("selected");
			}else{
				thisCol.addClass("selected");
			};
		});*/

		//拖拽的监听
		var obj = me.get(0);

		msg.delegate("div.timepicker-msg-container-wrap", "mousedown", function(e){
			e.stopPropagation();
			e.preventDefault();

			if (obj.viewOnly){
				return;
			};

			var posX = e.pageX || e.screenX,
				posY = e.pageY || e.screenY;
			
			var canvas = $(this);
			posX = posX - canvas.offset().left;
			posY = posY - canvas.offset().top;

			var wrap = canvas.find("div.timepicker-select-wrap");
			if (wrap.length == 0){
				wrap = $("<div class=\"timepicker-select-wrap\"></div>");
				canvas.append(wrap);
			};

			wrap.attr("fl", posX);
			wrap.attr("ft", posY);			

			wrap.css({
				"left": posX,
				"top": posY,
				"display": "block"
			});

			msg.attr("dragFlag", true);

		}).delegate("div.timepicker-msg-container-wrap", "mouseup", function(e){
			e.stopPropagation();
			e.preventDefault();

			if (obj.viewOnly){
				return;
			};
			var wrap = msg.find("div.timepicker-select-wrap");
			if(wrap.length > 0)
			{
				var l = wrap.offset().left;
				var t = wrap.offset().top;
				var r = l + wrap.width();
				var b = t + wrap.height();

				var canvas = $(this);
				var pickers = canvas.find("div.timepicker-picker");
				var hasEmptyPicker = false;
				if (l == 0 && t == 0 && r == 0 && b == 0){
					return;
				}
				pickers.each(function(i, obj){
					var p = $(obj);

					var pl = p.offset().left;
					var pt = p.offset().top;
					var pr = pl + p.width();
					var pb = pt + p.height();

					//if ()
					var c1 = (pl <= l && l <= pr) || (l <= pl && pr <= r) || (pl <= r && r <= pr);
					var c2 = (pt <= t && t <= pb) || (t <= pt && pb <= b) || (pt <= b && b <= pb);

					if (c1 && c2){
						if (p.hasClass("selected")){
							return;
						}
						else{
							hasEmptyPicker = true;
							return false;
						}
					};
				});
				pickers.each(function(i, obj){
					var p = $(obj);

					var pl = p.offset().left;
					var pt = p.offset().top;
					var pr = pl + p.width();
					var pb = pt + p.height();

					//if ()
					var c1 = (pl <= l && l <= pr) || (l <= pl && pr <= r) || (pl <= r && r <= pr);
					var c2 = (pt <= t && t <= pb) || (t <= pt && pb <= b) || (pt <= b && b <= pb);

					if (c1 && c2){
						if (hasEmptyPicker){
							p.addClass("selected");
						}else{
							p.toggleClass("selected");
						};
					};
				});

				wrap.css({
					"display": "none",
					"width": 0,
					"height": 0
				});
				msg.removeAttr("dragFlag");
			}
		}).delegate("div.timepicker-msg-container-wrap", "mousemove", function(e){
			e.stopPropagation();
			e.preventDefault();

			if (obj.viewOnly){
				return;
			};

			var posX = e.pageX || e.screenX,
				posY = e.pageY || e.screenY;

			var canvas = $(this);
			posX = posX - canvas.offset().left;
			posY = posY - canvas.offset().top;

			if (msg.attr("dragFlag")){
				var wrap = msg.find("div.timepicker-select-wrap");

				var fl = parseInt(wrap.attr("fl"), 10);
				var ft = parseInt(wrap.attr("ft"), 10);

				var w = posX - fl;
				if (w > 0){
					wrap.css({
						"width": w
					});
				}else{
					w = Math.abs(w);
					wrap.css({
						"width": w,
						"left": posX
					})
				};

				var h = posY - ft;
				if (h > 0){
					wrap.css({
						"height": h
					});
				}else{
					h = Math.abs(h);
					wrap.css({
						"height": h,
						"top": posY
					})
				};
			};
		});

		return me;
	},
	enable: function(me){
		var me = me || this,
			container = me.closest("div.timepicker-container"),
			aSwitch = container.find("a.timepicker-switch");

		container.removeClass("disabled");
		aSwitch.removeClass("disabled");

		return me;
	},
	disable: function(me){
		var me = me || this,
			container = me.closest("div.timepicker-container"),
			aSwitch = container.find("a.timepicker-switch");

		container.addClass("disabled");
		aSwitch.addClass("disabled");

		return me;
	},
	setValue: function(me, value){
		var me = me || this,
			value = value[1] || "{}",
			result = {};

		var msg = me.get(0).msg,
			pickers = msg.find("div.timepicker-picker").removeClass("selected");

		me.val(value);
		me.get(0).snapshot = value;

		var value = $.su.json.parseJSON(value);
		//console.log(value);
		for (var week in value){
			var dataWeek = week.toLowerCase(),
				timeArray = value[week];
			var col = pickers.filter("[data-week="+dataWeek+"]");
			//console.log("timeArray", timeArray, col)
			for (var index = 0, len = timeArray.length; index < len; index++){
				var time = timeArray[index],
					dataTimeStart = time[0],
					dataTimeEnd = time[1];
				//console.log(dataTimeStart, dataTimeEnd);
				for (var jndex = dataTimeStart; jndex < dataTimeEnd; jndex++){
					col.filter("[data-time-start=\""+jndex+"\"]").addClass("selected");
				}
			};
		};
		
		return me;
	},
	getValue: function(me){
		var me = me || this,
			msg = me.get(0).msg;

		var pickers = msg.find("div.timepicker-picker");
		var result = {};

		for (var index = 0, len = pickers.length; index < len; index++){
			var tar = $(pickers[index]),
				dataWeek = tar.attr("data-week"),
				dataTimeStart = parseInt(tar.attr("data-time-start"), 10),
				dataTimeEnd = parseInt(tar.attr("data-time-end"), 10);

			if (tar.hasClass("selected")){
				result[dataWeek] = result[dataWeek] || [];
				result[dataWeek].push([dataTimeStart, dataTimeEnd]);
				//result[dataWeek].push(dataTimeStart);
			}else{
				continue;
			};
		};

		//console.log(result);

		for (var week in result){
			var timeArray = result[week],
				dArray = [],
				tmpArray = [],
				tmp = -1;

			timeArray.sort(function(a, b){
				return a[0] - b[0];
			});

			//console.log("week", week, timeArray);

			for (var index = 0, len = timeArray.length; index < len; index++){
				var d = timeArray[index];

				if (len == 1){
					dArray.push(d);
					tmp = -1;
					tmpArray = [];
					continue;
				};

				if (tmp == -1){
					tmp = d;
					tmpArray = [tmp[0]];
					continue;
				};
				
				if (tmp[1] == d[0]){
					tmp = d;
				}else{
					tmpArray.push(tmp[1]);
					dArray.push(tmpArray);
					//console.log("done", tmpArray, "00");
					tmp = d;
					tmpArray = [tmp[0]];
				};

				if (index == len - 1){
					tmpArray.push(d[1]);
					dArray.push(tmpArray);
					//console.log("done", tmpArray);
					tmp = -1;
					tmpArray = [];
					continue;
				};
			};

			//console.log("d", d, "tmp", tmp, "tmpArray", tmpArray, "dArray", dArray);
			result[week] = dArray;
		};

		//console.log("result", result);
		var val = $.su.json.toJSONString(result);
		me.val(val);
		return val;
	},
/*	getMsg: function(me){
		var me = me || this,
			msg = me.get(0).msg;

		return msg;
	},*/
	restore: function(me){		//重置成snapshot
		var me = me || this,
			obj = me.get(0),
			msg = obj.msg,
			snapshot = obj.snapshot;

		if (!snapshot){
			snapshot = "[]";
		};

		me.timepicker("setValue", snapshot);
		return me;
	},
	reset: function(me){		//reset重置成空
		var me = me || this,
			obj = me.get(0),
			msg = obj.msg;
		//console.log("herre");
		var pickers = msg.find("div.timepicker-picker");

		pickers.removeClass("selected");

		obj.snapshot = null;
		me.val("");
		return me;
	}
});

})(jQuery);