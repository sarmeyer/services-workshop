app.controller('PostMessageController', function ($scope, MessagesService, $location) {
  $scope.vw = {};
  $scope.vw.success = "Success!!"
  $scope.vw.addMessage = function(){
    MessagesService.add($scope.vw.input);
    $location.path('/')
  }
})
