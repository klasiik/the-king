var TK = function(){
  return {
    create: function(element){
	  var elo = document.createElement(element);
      return elo    
  	},
    append: function(parent, element) {
    	parent.appendChild(element);
      
    },
    tag: function(element){
    	var chuj = document.getElementsByTagName(element);
    	return chuj
    }
  };
}();
