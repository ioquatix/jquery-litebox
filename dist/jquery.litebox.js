
(function ($) {
	$.fn.litebox = function() {
		this.on('click', function() {
			if ($('.overlay').length < 1) {
				var overlay = $('<div class="litebox-overlay"></div>');
				
				overlay.on('click', function() {
					$('.litebox-overlay').remove();
					$("body").css("overflow", "auto");
				});
				
				if (this.href) {
					var image = new Image();
					image.src = this.href;
					overlay.append(image);
				}
				
				$("body").css("overflow", "hidden");
				$('body').append(overlay);
			}
			
			return false;
		});
	}
}(jQuery));
