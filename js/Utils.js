export default class Utils {

  	static getSupportedPropertyName(property) {
	    var prefixes = ['', 'ms', 'Webkit', 'Moz', 'O'];
	    
	    for(var i = 0; i < prefixes.length; i++) {
	        var prefix = prefixes[i];
	        property = prefix === '' ? property : property.charAt(0).toUpperCase() + property.substring(1).toLowerCase();
	        var prop = prefix+property;
	        
	        if(typeof document.body.style[prop] != "undefined") 
	            return prop;
	    }
	    
	    return null;
	}

	static getScrollTop() {
	     return (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
	}

}

