
var titleList=$('[title]');

if(typeof(titleList.qtip)=='function'){

$('[title]').qtip({
	id: 'myTooltip',
// 	content: {
// 		text: 'My ID is #ui-tooltip-myTooltip'
// 	},
	style: {
		classes: 'ui-tooltip-blue ui-tooltip-shadow ui-tooltip-tipsy'
	},
	position: {
		my: 'top left',
		at: "bottom center"
	},
	show: {
		effect: function(offset) {
			$(this).slideDown(100); // "this" refers to the tooltip
		}
	}
});
}