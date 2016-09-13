(function($){
	$.fn.tooltip = function(type){
		/*多个插件方法收集到一个对象定义当中，并通过传递方法名称字符串调用*/
		var methods = {
		    init : function( options ) { 
		      
		    },
		    show : function( ) {
		      
		    },
		    hide : function( ) { 
		      
		    },
		    update : function( content ) { 
		      
		    }
		};

		 $.fn.tooltip = function( method ) {

		    // Method calling logic
		    if ( methods[method] ) {
		      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		    } else if ( typeof method === 'object' || ! method ) {
		      return methods.init.apply( this, arguments );
		    } else {
		      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		    }    

		};
		
	}

})(jQuery);