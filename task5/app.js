/**
 * Created by Administrator on 2017/5/6.
 */
var app = angular.module("myApp", ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/pag1', {
            template: '<p>Welcome</p>',
        })
        .when('/pag2', {
            templateUrl: './articlelist.html',
        })
        .when('/pag3', {
            templateUrl: './articledetail.html',
        })
        .otherwise({
            redirectTo: '/pag1'
        });
}])