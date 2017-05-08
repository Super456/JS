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
app.controller('getarticle',function ($scope,$http) {
    $scope.getart=function () {
        $http({
            method:"GET",
            url:"/carrots-admin-ajax/a/article/search"
        }).then(function successCallback(reponse) {
            $scope.article = reponse.data.data.articleList;
            console.log($scope.article[1].type)
        })
    }
})
