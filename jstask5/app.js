/**
 * Created by Administrator on 2017/5/6.
 */
var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when("", "<p>Welcome</p>")
        $stateProvider
            .state("page1",{
                url:"/page1",
                template:'<p>Welcome</p>'
            })
            .state("page2",{
                url:"/page2",
                templateUrl:"articlelist.html"
            })
            .state("page3",{
                url:"/page3",
                templateUrl:"articledetail.html"
            })
})
myApp.controller('getarticle',function ($scope,$http) {
    $scope.getart=function () {
        $scope.startAt=Date.parse($scope.selestart)
        $scope.endAt=Date.parse($scope.selepublish)
        searcharr = [$scope.seletitle,$scope.seleauthor,$scope.startAt,$scope.endAt,$scope.seletype,$scope.selestatus,$scope.page]
        for (i=0;i<searcharr.length;i++) {
            if (searcharr[i]==undefined) {
                searcharr[i]=""
            }
            else if (isNaN(searcharr[i])) {
                searcharr[i]=""
            }
        }
        $http({
            method:"GET",
            url:"/carrots-admin-ajax/a/article/search?title="+searcharr[0]+"&author="+searcharr[1]+"&startAt="+searcharr[2]+"&endAt="+searcharr[3]+"&type="+searcharr[4]+"&status="+searcharr[5]+"&page="+searcharr[6]
        }).then(function successCallback(reponse) {
            $scope.pagesum=Math.ceil(reponse.data.data.total/reponse.data.data.size)
            $scope.article = reponse.data.data.articleList;
        })
    }
    $scope.getart()
    $scope.clear=function () {
        $http({
            method:"GET",
            url:"/carrots-admin-ajax/a/article/search"
        }).then(function successCallback(reponse) {
            $scope.article = reponse.data.data.articleList;
        })
    }
    $scope.page=1
    $scope.firstpage=function () {
        $scope.page=1
        $scope.getart()
    }
    $scope.gopre=function () {
        if ($scope.page>1) {
            $scope.page--
            $scope.getart()
        }
        else {
            alert("已经是第一页了")
        }
    }
    $scope.gonext=function () {
        if ($scope.page==$scope.pagesum){
            alert('已经是最后一页了')
        }
        else {
            $scope.page++
            $scope.getart()
        }
        console.log($scope.page)
        console.log($scope.pagesum)
    }
    $scope.lastpage=function () {
        $scope.page=$scope.pagesum
        console.log($scope.page)
        $scope.getart()
    }
    $scope.direct=function () {
        if ($scope.page=="") {
            alert("请输入页码")
        }
        else if($scope.page>$scope.pagesum) {
            $scope.page=$scope.pagesum
            $scope.getart()
        }
        else {$scope.getart()}
    }
})
myApp.filter("typename",function () {
    var typeshow=["首页banner","找职位banner","找精英banner","行业大图"];
    return function (type) {
        return type = typeshow[type];
    }
})