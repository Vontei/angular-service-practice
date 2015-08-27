app.filter('kebab', function () {
  return function (input) {
      if(parseInt(input) === Number){
        return parseInt(input)
      }
      return input.replace(/_/g , "-");
  };
});

app.filter('camel', function(){
  return function(input){
	     return input.replace(/(\_[a-z])/g, function($1){
         return $1.toUpperCase().replace('_','');
       });
  }
})
