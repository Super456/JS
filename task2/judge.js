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
        box[i].style.visibility = "visible";
        box[i].style.position = "inherit";
        iden[i].innerHTML = random[i];
    }
    console.log(i);
}