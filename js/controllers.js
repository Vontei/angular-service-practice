app.controller('HomeController', function($scope){
  $scope.message = "Welcome!"
});


app.controller('bioController', function($scope){
    $scope.message = "Woof Woof!"
});


app.controller('addController', function($scope, $http, $routeParams){
    console.log($routeParams)
    $scope.result = parseInt($routeParams.num1) + parseInt($routeParams.num2)
})

app.controller('queryController', function($scope, $routeParams){
    $scope.result = parseInt($routeParams.x) + parseInt($routeParams.y);
    console.log($routeParams)
})

app.controller('zenController', function($scope, $http){
  $http.get('https://api.github.com/zen').then(function(data){
    $scope.zenData = data.data;
  })

  $http.get('../itunes.json').then(function (data) {
    console.log(data.data.results)
    $scope.JJ = data.data.results;
  })

  $http.get('https://shielded-peak-6345.herokuapp.com/messages').then(function (data) {
    console.log(data)
    $scope.chatter = data.data
  })

  $scope.submitComment = function(){
    $http.post('https://shielded-peak-6345.herokuapp.com/messages', {message: {name: $scope.name, content: $scope.content}}).then(function (response) {
      console.log(response)
    })
    $scope.name = '';
    $scope.content = '';
  }
  


  })
