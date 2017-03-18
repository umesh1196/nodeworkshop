/**
 * Created by Omkar Dusane on 27-Oct-16.
 */
var paymentModule = angular.module('coinApp.payment',
    [
        'ngRoute'
    ]).config(function ($routeProvider) {

    });

paymentModule.controller('paymentCtrl',
    function ($scope) {
        $scope.sample = "payment module ctrl";

    });