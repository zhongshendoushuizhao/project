// JavaScript Document
(function($){

$.su.Widget("paging", {
	defaults: {
		numPerPage: 8
	},
	create: function(defaults, options){
		var me = this;
		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var inHTML =	"<div class=\"container widget-container paging-container disabled\">";
				inHTML +=		"<div class=\"paging-wrap\">";
				// 上一页按钮
				inHTML +=			"<a href=\"javascript:void(0);\" class=\"paging-btn pageing-btn-prev\" data-index=\"prev\">";
				inHTML +=				"<span class=\"icon\"></span>";
				inHTML +=				"<span class=\"text\">"+$.su.CHAR.OPERATION.PREV+"</span>";
				inHTML +=			"</a>";

				inHTML +=			"<div class=\"num-buttons-container\">";
				inHTML +=			"</div>";

				// 下一页按钮
				inHTML +=			"<a href=\"javascript:void(0);\" class=\"paging-btn pageing-btn-next\" data-index=\"next\">";
				inHTML +=				"<span class=\"icon\"></span>";
				inHTML +=				"<span class=\"text\">"+$.su.CHAR.OPERATION.NEXT+"</span>";
				inHTML +=			"</a>";

				inHTML +=		"</div>";
				inHTML +=	"</div>";

			var bar = $(inHTML);

			bar.append(tar.addClass("hidden"));
			obj.isPaging = true;

		});

		//监听部分
		// var store = $(options.grid.get(0).store);
		// store.on("ev_datachanged", function(e){
		// });
		var obj = me.get(0),
			grid = obj.grid,
			editor = grid.get(0).editor;

		grid.on("ev_load ev_insert ev_remove", function(e){
			var obj = me.get(0),
				currentPage = obj.currentPage;

			me.paging("updateBtns");
			me.paging("goToPage", currentPage);
		});
		// }).on("ev_update", function(){

		// });

		var container = me.closest("div.paging-container");
		container.delegate("a.paging-btn-num", "click", function(e){
			e.stopPropagation();
			e.preventDefault();

			var btn = $(this),
				pageNum = parseInt(btn.attr("data-index"), 10);

			if (btn.hasClass("disabled")){
				return;
			}else{
				if (editor && editor.editing){
					$(editor).editor("cancelEdit");
				};
			};

			me.paging("goToPage", pageNum);

		}).delegate("a.pageing-btn-prev", "click", function(e){
			e.stopPropagation();
			e.preventDefault();

			var btn = $(this);
			if (btn.hasClass("disabled")){
				return;
			}else{
				if (editor && editor.editing){
					$(editor).editor("cancelEdit");
				};
				btn.addClass("disabled");
				me.paging("goPrev");
			};

		}).delegate("a.pageing-btn-next", "click", function(e){
			e.stopPropagation();
			e.preventDefault();

			var btn = $(this);
			if ($(this).hasClass("disabled")){
				return;
			}else{
				if (editor && editor.editing){
					$(editor).editor("cancelEdit");
				};
				btn.addClass("disabled");
				me.paging("goNext");
			};

		});

		return me;
	},
	updateBtns: function(me){
		var me = me || this,
			container = me.closest("div.paging-container"),
			btnsContainer = container.find("div.num-buttons-container"),
			obj = me.get(0),
			numPerPage = obj.numPerPage,
			currentPage = obj.currentPage,
			grid = obj.grid,
			rows = grid.get(0).rows,
			len = rows.length;

		var totalPage = Math.ceil(len/numPerPage);
		obj.totalPage = totalPage;
		
		if (totalPage == 0 || totalPage == 1){
			container.addClass("disabled");
		}else{
			container.removeClass("disabled");

			var inHTML = 	"";
			for (var index = 0; index < totalPage; index++){
				inHTML +=	"<a href=\"javascript:void(0);\" class=\"paging-btn paging-btn-num pageing-btn-"+index+"\" data-index=\""+index+"\">";
				inHTML +=		"<span class=\"icon\"></span>";
				inHTML +=		"<span class=\"text\">"+(index+1)+"</span>";
				inHTML +=	"</a>"
				inHTML +=	"<span class=\"dots\">...</span>";
			};

			btnsContainer.empty().append($(inHTML));
		};

		return me;
	},
	goToPage: function(me, pageNum){
		var me = me || this,
			container = me.closest("div.paging-container"),
			obj = me.get(0),
			grid = obj.grid,
			rows = grid.get(0).rows,
			currentPage = isNaN(pageNum[1]) ? 0 : pageNum[1],
			numPerPage = obj.numPerPage,
			totalPage = obj.totalPage;

		if (currentPage >= totalPage){
			currentPage = 0;
		};

		//console.log(currentPage, totalPage)
		//按钮样式调整
		var btnPrev = container.find("a.paging-btn.pageing-btn-prev"),
			btnNext = container.find("a.paging-btn.pageing-btn-next"),
			btns = container.find("a.paging-btn-num"),
			dots = container.find("span.dots");

		//数字按钮的处理
		btns.removeClass("current");
		dots.removeClass("more");
		btns.filter("[data-index="+currentPage+"]").addClass("current");

		if (totalPage > 7){
			var gap1 = 0 + currentPage - 2,
				gap2 = 0 + currentPage + 3 - (totalPage - 1),

				minNum = 0,
				maxNum = 0;

			if (gap1 > 0){
				if (gap2 > 0){
					minNum = 0 + currentPage - 2 - gap2;
					maxNum = 0 + totalPage;
				}else{
					minNum = 0 + currentPage - 2;
					maxNum = 0 + currentPage + 3;
				};
			}else{
				if (gap2 > 0){
					minNum = 0;
					maxNum = 0 + totalPage;
				}else{
					minNum = 0;
					maxNum = 0 + currentPage + 3 - gap1;
				};
			};

			//console.log(currentPage, totalPage, gap1, gap2, minNum, maxNum);
			// var minNum = gap1 > 0 ? currentPage - 2 : 0;
			// 	maxNum = gap1 > 0 ? currentPage + 3 : currentPage + 3 - gap1;

			btns.addClass("hidden");

			for (var index = minNum; index < maxNum; index++){
				btns.eq(index).removeClass("hidden");
			};

			if (gap1 > 1){
				btns.eq(minNum).prev("span.dots").addClass("more");
			};

			if (gap2 < 0){
				btns.eq(maxNum).next("span.dots").addClass("more");
			};

			btns.filter(":first").removeClass("hidden");
			btns.filter(":last").removeClass("hidden");
		};

		//数据跳转
		var minNum = numPerPage*currentPage,
			maxNum = minNum + numPerPage;

		//这个写法不太好
		grid.find("tr.grid-content-tr").css("display", "none");
		grid.find("tr.grid-content-tr.empty").css("display", "table-row");

		for (var index = minNum; index < maxNum; index++){
			var row = rows[index];
			if (row){
				row.fadeIn(150, function(){
					$(this).css("display", "table-row");
				});
			};
		};

		setTimeout(function(){
			//前后按钮的处理
			if (currentPage == 0){
				btnPrev.addClass("disabled");
				btnNext.removeClass("disabled");
			}else if (currentPage >= (totalPage-1)){
				btnPrev.removeClass("disabled");
				btnNext.addClass("disabled");
			}else{
				btnPrev.removeClass("disabled");
				btnNext.removeClass("disabled");
			};
		}, 180);

		obj.currentPage = currentPage;
		return me;
	},
	goPrev: function(me){
		var me = me || this,
			obj = me.get(0),
			currentPage = obj.currentPage;

		currentPage--;
		if (currentPage < 0){
			return me;
		}else{
			//跳转到前一页
			me.paging("goToPage", currentPage);
		};

		return me;
	},
	goNext: function(me){
		var me = me || this,
			obj = me.get(0),
			currentPage = obj.currentPage,
			totalPage = obj.totalPage;

		currentPage++;
		if (currentPage >= totalPage){
			return me;
		}else{
			//跳转到下一页
			me.paging("goToPage", currentPage);
		};

		return me;
	}
});

})(jQuery);