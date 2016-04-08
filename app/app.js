'use strict';

var app = angular.module('myApp', []);


app.filter('checkmark', function () {
  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});





app.directive('loginForm', [function(){
    var output = {
        replace: "true",
        templateUrl: 'loginform.html'
        
    };
    return output;
    
}]);



app.controller('YourCtrl', ['$scope', "threeFunctions", function ($scope, threeFunctions) {

$scope.names = [
        {name:'Doe, John'},
        {name:'Naperi, Alberto'},
        {name:'Last, First'},
        {name:'Espolon, Justin'},
        {name:'Bor, Em'},
        {name:'Pik, El'}
      ];

    $scope.high = threeFunctions.high("hej verden");
    console.log($scope.high);
    $scope.camel = threeFunctions.camel("hej verden");
    $scope.dash = threeFunctions.dash("hej verden");

    

}]);

app.filter('customNameFormat', function() {    

    return function(input) {
        var nameStr = input.split(',').reverse().join(' ');
        return nameStr;
    };

});


app.service("threeFunctions", function () {
    this.high = function (x) {
        
        var one = x.split(" ");
        var res = "";
        
        for (var i = 0; i < one.length; i++) {
            var a = one[i].slice(0, 1);
            var b = one[i].slice(1, one[i].length);
            
            res += (a.toUpperCase() + b + " ");
        }
        return res;
        
    };
    
    this.camel = function (y){
        var one = y.split(" ");
        var res = "";
        
        for (var i = 0; i < one.length; i++) {
            var a = one[i].slice(0, 1);
            var b = one[i].slice(1, one[i].length);
            
            res += (a.toUpperCase() + b);
        }
        return res;
    };
    
    this.dash = function (z){
        var one = z.split(" ");
        var res = "";
        
        for (var i = 0; i < one.length; i++) {
            if (i !== one.length-1) {
                res += (one[i] + "-");
                
            } else{
                res += (one[i]);
            }
        }
        return res;
    };
    

});