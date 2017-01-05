$(document).ready(function(){

	$('#modal1-content').load('/modal1.html');
	$('#modal2-content').load('/modal2.html');

	$('.modal').modal();

	var options = [
		{ 
			selector: '#pricing-table', 
			offset: 100,
			callback: function(e) {
				$(e).addClass('animated zoomIn');
			}
		},
		{
			selector: '#modal1-button',
			offset: 50,
			callback: function(e) {
				$(e).addClass('animated slideInLeft');
			}
		},
		{
			selector: '#modal2-button',
			offset: 50,
			callback: function(e) {
				$(e).addClass('animated slideInRight');
			}
		},
		{
			selector: '#osha-contact',
			offset: 50,
			callback: function(e) {
				$(e).addClass('animated slideInRight');
			}
		},
	];

	Materialize.scrollFire(options);

});