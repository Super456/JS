/**
 * Created by Administrator on 2017/4/26.
 */
$("#login").click(function() {
    var name = $("#user").val();
    console.log('name：' + name);
    var pwd = $("#pwd").val();
    console.log('pwd：' + pwd);
    $.ajax({
        type: "POST",
        url: "/carrots-admin-ajax/a/login",
        data:{"name": name,"pwd": pwd},
        dataType: "json",
        success: function(data){
            $("#tip").text(data.message);
        }
    });
});