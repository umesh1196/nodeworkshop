/**
 * Created by Omkar Dusane on 27-Oct-16.
 */

var coinApp = angular.module('coinApp',
    [
        'ngRoute',
        'coinApp.payment',
    ]);

coinApp.config(function ($routeProvider) {
    $routeProvider
        .when("/pay", {
            templateUrl: 'pages/payment/pay.html',
            controller: 'sampleCtrl'
        })
        .when("/newpage", {
            templateUrl: 'pages/newpage.html',
            controller: 'nCtrl'
        })
        .when("/home", {
            templateUrl: 'pages/home.html',
            controller: 'sampleCtrl'
        })
        .otherwise({
            templateUrl: 'pages/home.html',
            controller: 'sampleCtrl'
        })
        ;

});

coinApp.service('api',function ($http) {
    // sample http api POST request
    var sampleHttpApiCall = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "POST",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "data": $.param(jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                next();
            }else{
                alert("Error");
            }
        });
    };
});

coinApp.controller('sampleCtrl', sampleCtrl);
coinApp.controller('nCtrl', nCtrl);


function sampleCtrl($scope,api){
    $scope.sample = "Sample Controller module Home";
}

function nCtrl($scope,api){
    $scope.sample = "new page new module new ctrl";
}