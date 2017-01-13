$(document).ready(function(){

	$('#modal1-content').load('/modal1.html');
	$('#modal2-content').load('/modal2.html');

	$('.modal').modal();

	var animateCallback = function() {
		var blurbs = document.querySelectorAll('.blurb');
		for (var i = 0; i < blurbs.length; i++) {
			(function(index) {
		        setTimeout(function() { 
		        	$(blurbs[index]).addClass('animated fadeInUp'); 
		        }, i * 80);
		    })(i);
		}
	};

	var options = [
		{ selector: '#pricing-table', offset: 150, callback: function(e) { $(e).addClass('animated zoomIn'); } },
		{ selector: '#modal1-button', offset: 50, callback: function(e) { $(e).addClass('animated slideInLeft'); } },
		{ selector: '#modal2-button', offset: 50, callback: function(e) { $(e).addClass('animated slideInRight'); } },
		{ selector: '#osha-contact', offset: 50, callback: function(e) { $(e).addClass('animated slideInRight'); } },
		{ selector: '#construction', offset: 50, callback: function(e) { $(e).addClass('animated fadeInUp'); } },

		{ 
			selector: '#four-cols', 
			offset: 150, 
			callback: animateCallback
		}
	];

	Materialize.scrollFire(options);

});