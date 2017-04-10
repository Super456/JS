/**
 * Created by Administrator on 2017/3/28.
 */
//传入数据
var random = localStorage.random;
random = JSON.parse(random);
console.log(random);
var a = 0;
var each = 1;
var click = 0;
function result(){
    img = document.getElementById("img");
    iden = document.getElementById("iden");
    //更换图片
    img.src = "../pic/pic2.png";
    //显示身份
    iden.innerHTML = random[a];
    //修改按钮文字
    word = document.getElementById("but");
    word.innerHTML = "隐藏并传递给"+page2+"号";
}
function hide() {
    //更换图片
    img.src ="../pic/pic1.png"
    //隐藏身份 修改按钮
    iden.innerHTML = null;
    word.innerHTML = "查看"+page+"号身份";
}
//最后一页的按钮
function last() {
    img.src = "../pic/pic2.png";
    iden.innerHTML = random[a];
    word.innerHTML = "法官查看"
}
function show() {
    //记录按钮次数
    click = click+1;
    //page是上面小图标的编号，page2是按钮里的编号
    var turn = click/2;
    page2 = Math.floor(turn)+2;
    page = Math.ceil(each);
    each = each+0.5;
    tp = document.getElementById("top1");
    tp.innerHTML = page;
    if(click<random.length*2-1) {
        //如果按钮次数为单数就执行显示身份，如果为双数就执行隐藏身份
        if (Number.isInteger(turn) === false) {
            result();
        }
        else {
            hide();
        }
    }
    //最后一页按钮样式改变
    else if (click<random.length*2){
        last();
    }
    //进入法官查看页面
    else {
        window.location.href='../judge/judge.html'
    }
    a=a+0.5;
}