/**
 * Created by Administrator on 2017/3/20.
 */
function change() {
    document.getElementById("box1").style.backgroundColor = "#ffa000";
    document.getElementById("box2").style.backgroundColor = "#ffa000";
    document.getElementById("box3").style.backgroundColor = "#ffa000";
    document.getElementById("box4").style.backgroundColor = "#ffa000";
    document.getElementById("box5").style.backgroundColor = "#ffa000";
    document.getElementById("box6").style.backgroundColor = "#ffa000";
    document.getElementById("box7").style.backgroundColor = "#ffa000";
    document.getElementById("box8").style.backgroundColor = "#ffa000";
    document.getElementById("box9").style.backgroundColor = "#ffa000";
    var num = new Array();
    num[0]=Math.ceil(Math.random()*9);
    num[1]=Math.ceil(Math.random()*9);
    num[2]=Math.ceil(Math.random()*9);
    while ((num[0]===num[1])||(num[1]===num[2])||(num[2]===num[0]))
    {
        num[0]=Math.ceil(Math.random()*9);
        num[1]=Math.ceil(Math.random()*9);
        num[2]=Math.ceil(Math.random()*9);
    }
    var idnum = new Array();
    idnum[0]="box"+num[0];
    idnum[1]="box"+num[1];
    idnum[2]="box"+num[2];
    var col = new Array();
    col[0]=Math.ceil(Math.random()*(0xFFFFFF).toString(10));
    col[1]=Math.ceil(Math.random()*(0xFFFFFF).toString(10));
    col[2]=Math.ceil(Math.random()*(0xFFFFFF).toString(10));
    var colo = new Array();
    colo[0]="#"+(col[0]).toString(16);
    colo[1]="#"+(col[1]).toString(16);
    colo[2]="#"+(col[2]).toString(16);
    document.getElementById(idnum[0]).style.backgroundColor = colo[0];
    document.getElementById(idnum[1]).style.backgroundColor = colo[1];
    document.getElementById(idnum[2]).style.backgroundColor = colo[2];
}
function spot() {
    int=setInterval("change()",2000)
}
function over() {
    clearInterval(int);
    document.getElementById("box1").style.backgroundColor = "#ffa000";
    document.getElementById("box2").style.backgroundColor = "#ffa000";
    document.getElementById("box3").style.backgroundColor = "#ffa000";
    document.getElementById("box4").style.backgroundColor = "#ffa000";
    document.getElementById("box5").style.backgroundColor = "#ffa000";
    document.getElementById("box6").style.backgroundColor = "#ffa000";
    document.getElementById("box7").style.backgroundColor = "#ffa000";
    document.getElementById("box8").style.backgroundColor = "#ffa000";
    document.getElementById("box9").style.backgroundColor = "#ffa000";
}