/**
 * Created by Administrator on 2017/5/6.
 */
var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("page1")
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
                templateUrl:"articledetail.html",
                params:{"id":{}}
            })
})
myApp.controller('getarticle',function ($scope,$http,$state) {
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
    $scope.dele=function () {
        console.log(this.x.id)
        var id = this.x.id
        $http({
            method:"delete",
            url:"/carrots-admin-ajax/a/u/article/"+id
        })
        $scope.getart()
    }
    $scope.changeStatus=function (id,status) {
        if (status==1){
            status=2
        }
        else {
            status=1
        }
        $http({
            method:"put",
            url:"/carrots-admin-ajax/a/u/article/status",
            params:{
                "id":id,
                "status":status
            }
        })
        $scope.getart()
    }
    $scope.addArt=function (id) {
        $state.go('page3',{'id':id})
    }
})
myApp.filter("typename",function () {
    var typeshow=["首页banner","找职位banner","找精英banner","行业大图"];
    return function (type) {
        return type = typeshow[type];
    }
})
myApp.controller("upload",function ($scope,$http,$stateParams) {
    if (isNaN($stateParams.id)) {
        $scope.submit = function () {
            $http({
                method:"POST",
                url:"/carrots-admin-ajax/a/u/article",
                params:{
                    "title":$scope.title,
                    "type":$scope.typenum,
                    "status":"2",
                    "img":$scope.picloc,
                    "content":editor.$txt.text(),
                    "url":$scope.link,
                    "industry":$scope.indus,
                }
            }).then(function successCallback(mes) {
                if (mes.data.code==0) {
                    alert ("提交成功")
                }
            })
        }
        $scope.save = function () {
            $http({
                method:"POST",
                url:"/carrots-admin-ajax/a/u/article",
                params:{
                    "title":$scope.title,
                    "type":$scope.typenum,
                    "status":"1",
                    "img":$scope.picloc,
                    "content":editor.$txt.text(),
                    "url":$scope.link,
                    "industry":$scope.indus,
                }
            }).then(function successCallback(mes) {
                if (mes.data.code==0) {
                    alert ("提交成功")
                }
            })
        }
    }
    else {
        $http({
            method:"get",
            url:"/carrots-admin-ajax/a/article/"+$stateParams.id
        }).then(function successCallback(mes) {
            $scope.article=mes.data.data.article
            $("#typenum").val($scope.article.type)
            if($scope.article.type!=3){
                $scope.show="hid"
            }else {
                $("#indus").val($scope.article.industry)
            }
            $scope.title=$scope.article.title
            $scope.typenum=$scope.article.type
            $scope.status=$scope.article.status
            $scope.indus=$scope.article.industry
            $scope.link=$scope.article.url
            $scope.picloc=$scope.article.img
            $("#file_img").attr("src",$scope.article.img)
            console.log($scope.article.type)
            editor.$txt.append($scope.article.content)
            $scope.submit=function () {
                $http({
                    method:"put",
                    url:"/carrots-admin-ajax/a/u/article/"+$stateParams.id,
                    params:{
                        "title":$scope.title,
                        "status":"2",
                        "img":$scope.picloc,
                        "content":editor.$txt.text(),
                        "url":$scope.link,
                        "industry":$scope.indus,
                    }
                }).then(function successCallback(mes) {
                    if (mes.data.code==0) {
                        alert ("修改成功")
                    }
                })
            }
            $scope.save=function () {
                $http({
                    method:"put",
                    url:"/carrots-admin-ajax/a/u/article/"+$stateParams.id,
                    params:{
                        "title":$scope.title,
                        "status":"1",
                        "img":$scope.picloc,
                        "content":editor.$txt.text(),
                        "url":$scope.link,
                        "industry":$scope.indus,
                    }
                }).then(function successCallback(mes) {
                    if (mes.data.code==0) {
                        alert ("修改成功")
                    }
                })
            }
        })
    }
    $scope.up=function () {
        $http({
            method:"POST",
            url:"/carrots-admin-ajax/a/u/img/task",
            headers:{'Content-Type':undefined},
            transformRequest: function () {
                var picdata = new FormData()
                picdata.append('file',picfile)
                return picdata
            },
            uploadEventHandlers:{
                progress:function (evt) {
                    console.log(parseInt(100.0 * evt.loaded / evt.total))
                    console.log(evt)
                    $scope.percent=parseInt(100.0 * evt.loaded / evt.total) + "%"
                }
            }
        }).then(function successCallback(reponse) {
            if (reponse.data.code==0) {
                document.getElementById("status").innerHTML="上传成功"
                $scope.picloc = reponse.data.data.url
            }
            else {
                document.getElementById("status").innerHTML="失败"
            }
        },function errorCallback(reponse) {
            document.getElementById("status").innerHTML="文件过大"
        })
    }
    $scope.change=function (typenum) {
        if (typenum!=3) {
            $scope.show = "hid"
        }
        else {
            $scope.show = "show"
        }
    }
    $scope.Mychange=function () {
        console.log($scope.title)
        console.log($scope.typenum)
        console.log($scope.picloc)
        console.log($scope.link)
        console.log($scope.indus)
    }
})