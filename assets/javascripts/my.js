$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
	$('svg symbol').popover({
		'trigger':'hover',
		'container': 'body',
		'placement': 'bottom',
		'white-space': 'nowrap',
		'html':'true'
	});
});