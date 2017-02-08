(function ($, root, undefined) {

	var JAG = JAG || {};



	JAG = {

		init: function() {

			var $sldr = $('.slider');


			$sldr.slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
  				infinite: true,
  				arrows: false
			});

			this.initEventHandlers();
			// this.revealHiddenField();

		},
		initEventHandlers: function() {
			var _this 	 = this,
				userForm = document.getElementById('wpcf7-f6-o1');

			$('.cta, .main-cta a').on('click', function(e) {
				var dest = $(".form-area").offset().top;
				e.preventDefault();

				$("html:not(:animated),body:not(:animated)").animate({ scrollTop: dest}, 500 );
			});

			$(userForm).on('change', function() {

				_this.revealHiddenField();

			});


		}, 
		revealHiddenField: function() {

			var select = document.querySelectorAll('select')[0],
				hidden = document.getElementsByClassName('hidden-field')[0];

			
				if (select.value === "Social Media" || select.value === "Referral" || select.value === "Other") {
					hidden.style.display = 'block';
				} else {
					hidden.style.display = 'none';
				}

		}
	}

	JAG.init();


	
})(jQuery, this);
