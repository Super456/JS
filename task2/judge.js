/**
 * Created by Administrator on 2017/3/28.
 */
//传入数据
var random = localStorage.random;
random = JSON.parse(random);
console.log(random);
function display() {
    var box = document.getElementsByClassName("box");
    var iden = document.getElementsByClassName("iden");
    var num = random.length;
    for (var i=0;i<num;i++){
        box[i].style.visibility = "visible";   //将小格子设置为可见
        box[i].style.position = "inherit";     //取消position：absolute
        iden[i].innerHTML = random[i];          //更改格子里身份信息
    }
}