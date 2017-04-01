/**
 * Created by Omkar Dusane on 27-Oct-16.
 */

var sampleApp = angular.module('sampleApp',
    [
        'ngRoute',
        'm1',
    ]);

sampleApp.config(function ($routeProvider) {
    $routeProvider
        .when("/m1", {
            templateUrl: 'pages/m1/view.html',
            controller: 'm1SampleCtrl'
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

sampleApp.service('api',function ($http) {
    // sample http api POST request
    let self = this;
    self.token = '';
    this.signInHttpCall = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/signin",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "params": (jsonData)
        };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                //self.token = response.token ;
                localStorage.setItem('TOKEN',response.token);
                next();
            }else{
                alert("Error in signin "+response.message);
            }
        });
    };

    this.getAllRs = function (next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/r/get",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
                "token":localStorage.getItem('TOKEN')
            }
            };
        $http(settings).success(function (response) {
            console.log(response);
            if(response.ok){
                next(response.rs);
            }else{
                alert("Error in r get : "+response.message);
            }
        });
    };

    this.sampleHttpApiCallGet = function (jsonData,next){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/sample",
            "method": "GET",
            "headers": {
                "content-type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            "params": (jsonData)
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

     this.sampleHttpApiCallPost = function (jsonData,next){
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

sampleApp.controller('sampleCtrl', sampleCtrl);
sampleApp.controller('nCtrl', nCtrl);


function sampleCtrl($scope,api){
    $scope.sample = "Sample Controller module Home";
    $scope.user ={};
    $scope.rs = [];

    $scope.signin = function(){
        let mockUser = {
            email:'omkar@gmail.com',
            password:'123'
        };
        api.signInHttpCall($scope.user,function(){
            console.log('Logged In')
            alert('Logged In successfully')
           // window.location = '';
        })
    };

    $scope.getAllRests = function(){
         api.getAllRs(function(rs){
            console.log('got all : ',rs);
            $scope.rs = rs;
        })
    };

}

function nCtrl($scope,api){
    $scope.sample = "new page new module new ctrl";
}




var contact = {
    omkar : 'omkardusane@gmail.com',
    krish : 'krish@drcaos.com'
};