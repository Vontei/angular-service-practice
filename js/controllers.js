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
