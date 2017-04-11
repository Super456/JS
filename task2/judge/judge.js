/**
 * Created by Administrator on 2017/3/28.
 */
//传入数据
var random = localStorage.random;
random = JSON.parse(random);
var alive = localStorage.alive;
alive = JSON.parse(alive);
var step = sessionStorage.step;
step = parseInt(step);
console.log(step);
var nam = document.getElementsByClassName('iden');
function display() {
    var box = document.getElementsByClassName("box");
    var iden = document.getElementsByClassName("iden");
    var num = random.length;
    for (var i=0;i<num;i++){
        box[i].style.visibility = "visible";   //将小格子设置为可见
        box[i].style.position = "inherit";     //取消position：absolute
        iden[i].innerHTML = random[i];          //更改格子里身份信息
    }
    if (step==0||step==1||step==2||step==3) {
        for (u=0;u<alive.length;u++) {
            if (alive[u][1] == "dead") {
                nam[u].style.backgroundColor = "red"
            }
        }
        $("#game").text("继续游戏")
    }
}

function jumpto() {
    if (step==0||step==1||step==2||step==3) {
        window.location.href="../book/book.html"
    }
    else {
        var date = 1;
        var alive = new Array();
        for (var i=0;i<random.length;i++) {
            alive[i]=[random[i],"alive"]
        }
        alive = JSON.stringify(alive);
        localStorage.alive = alive;
        localStorage.date = date;
        window.location.href="../book/book.html"
    }
}