// JavaScript Document
(function($){

$.su.Widget("charts", {
	defaults: {
		store: null,
		//坐标轴
		axis: [{
			position: "bottom",
			fields: "name",
			title: "Name"
		},{
			position: "left",
			fields: "data",
			title: "Data"
		},{
			position: "right",
			fields: "data"
		}],
		series: [{
			type: "bar",
			xField: "name",
			yField: ["data"]
		}]
	},
	create: function(defaults, options){
		var me = this;

		me.each(function(i, obj){
			var tar = $(obj);
			$.extend(obj, defaults, options);

			var inHTML = 	"<div class=\"container widget-container charts-container\">";
				//显示背景部分
				inHTML +=		"<div class=\"charts-bg\">";
				inHTML +=			"<div class=\"bg-container\">";
				inHTML +=				"<table>";
				inHTML +=				"</table>";
				inHTML +=			"</div>";

				inHTML +=			"<div class=\"axis-container\">";
				inHTML +=			"</div>";
				inHTML +=		"</div>";

				//内容呈现部分
				inHTML +=		"<div class=\"canvas-container\">";
				inHTML +=		"</div>";

				inHTML +=	"</div>";

			var container = $(inHTML);
			tar.replaceWith(container);
		});

		return me;
	}
});

})(jQuery);