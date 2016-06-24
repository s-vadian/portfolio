function tads_switch(tab) {	
	if (tab == 1) {
		hide_tabs();	
		show_tabs('#section1');

	};
	if (tab == 2) {
		hide_tabs();
		show_tabs('#section2');
	
	};
	if (tab == 3) {
		hide_tabs();
		show_tabs('#section3');

	};
}
function hide_tabs() {
	$('#section1').css('display','none');
	$('#section2').css('display','none');
	$('#section3').css('display','none');
}
function show_tabs(id) {
	$(id).fadeIn(800);
}