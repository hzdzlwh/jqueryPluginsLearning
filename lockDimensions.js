(function($){
	$.fn.lockDimensions = function(type){
		
		/*return支持链式操作*/
		return this.each(function(){
			var $this = $(this);
			if(!type || type == 'width'){
				$this.width($this.width());
			}
			if(!type || type == 'height'){
				$this.height($this.height());
			}

		});
	}

})(jQuery);