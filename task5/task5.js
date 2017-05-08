/**
 * Created by Administrator on 2017/4/26.
 */
var loginApp = angular.module("loginApp",[])
loginApp.controller('userinfoctrl',['$scope',function ($scope,$http) {
}])
loginApp.controller('userinfoctrl',function ($scope,$http) {
    $scope.getpwd=function () {
        console.log($scope.userinfo.user);
        console.log($scope.userinfo.pwd);
        var name = $scope.userinfo.user
        var pwd = $scope.userinfo.pwd
        $http({
            method: 'post',
            url: "/carrots-admin-ajax/a/login",
            params: {"name": $scope.userinfo.user, "pwd": $scope.userinfo.pwd},
        }).then(function successCallback(response) {
            console.log(response)
            $("#tip").text(response.data.message);
            if(response.data.message=="success"){
                window.location.href="./backend.html"
        }})
    }
})