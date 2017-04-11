/**
 * Created by Administrator on 2017/4/7.
 */
var alive = localStorage.alive;
var alive = JSON.parse(alive);
var deador = localStorage.deador;
var deador = JSON.parse(deador)
var date = localStorage.date;
var nam = document.getElementsByClassName('iden');
var num = document.getElementsByClassName('num');
var c = 0;
var n = 0;
step = sessionStorage.step;
step = parseInt(step);
function chan() {
    for (i=0;i<(alive.length-1);i++) {
        $('.container').append(
            '<div class="slection"><div class="box"><div class="iden">水民</div><div class="num">1号</div> </div> <div class="tips"> <img class="icon" src="../pic/knife.png"> </div> </div>'
        );
    }
    for (var j=0;j<alive.length;j++) {
        nam[j].innerHTML=alive[j][0];
        num[j].innerHTML=(j+1)+"号";
    }
    for (u=0;u<alive.length;u++) {
        if (alive[u][1]=="dead") {
            nam[u].style.backgroundColor="red"
        }
    }
}
$(function() {
    chan();
    if (step==0) {
        $('#vote').text('投票');
        $('.intro').text('发言讨论结束，请开始投票');
        $('.tip').text('点击得票最多的人的头像');
    }
    $(".slection").click(function() {
        dead = ($(".slection").index($(this)));
        if (alive[dead][1]=="dead") {
            alert("此人已死")
        }
    });
})

function chang() {
    alive[dead][1]="dead";
    for (p=0;p<alive.length;p++) {
        if (alive[p][0]=="杀手") {
            if (alive[p][1]=="alive"){
               n++;
            }
        }
    }
    for (z=0;z<alive.length;z++) {
        if (alive[z][1]=="alive") {
            if (alive[z][0]=="平民") {
                c++;
            }
        }
    }
    deador.push(dead)
    deador = JSON.stringify(deador);
    localStorage.deador = deador;
    if (n==0 || n==c) {
        alert("游戏结束")
        alive = JSON.stringify(alive);
        localStorage.alive = alive;
        localStorage.dead = dead;
        window.location.href="../result/result.html"
    }
    else {
        alive = JSON.stringify(alive);
        localStorage.alive = alive;
        localStorage.dead = dead;
        window.location.href="../book/book.html";
    }
}
