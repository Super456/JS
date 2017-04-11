/**
 * Created by Administrator on 2017/4/5.
 */
var alive = localStorage.alive;
alive = JSON.parse(alive);
var date = localStorage.date;
step = sessionStorage.step;
dead = localStorage.dead;
dead = parseInt(dead);
var days = document.getElementsByClassName("date");
var boxs = document.getElementsByClassName("step");
console.log(date);
for (w=1;w<date;w++) {
    $('.content').append(
        '<div id="dt" class="date">第1天 </div><div class="step"><div class="night"> <img class="moon" src="../pic/moon.png"> <div class="kill" onclick="kill()">杀手杀人</div> </div> <div class="daytime"> <img class="sun" src="../pic/sun.png"> <div class="word">亡灵发表遗言</div> <div class="all">玩家依次发言</div> <div class="vote">全民投票</div> </div> </div>'
    )
    t=w-1;
    boxs[t].style.visibility="hidden";
    boxs[t].style.position="absolute";
}
for (q=0;q<date;q++) {
    days[q].innerHTML="第"+(q+1)+"天";
}

console.log()
if (step==0) {
    $(".kill").css('backgroundColor','#69D1E9');
    $('.word').css('backgroundColor','#69D1E9');
    $('.all').css('backgroundColor','#69D1E9');
    if (date>1) {
        $(".night").before('<div class="vot"></div>')
        $(".vot").text((dead+1)+"号被投票出局")
        $(".sun").css('top','9.5rem')
        $(".moon").css('top','4rem')
    }
}
if (step==1) {
    $(".kill").css('backgroundColor','lightgray')
    $(".kill").css('cursor','not-allowed')
}
if (step==2) {
    $(".kill").css('backgroundColor','lightgray');
    $('.word').css('backgroundColor','lightgray');
}
if (step==3) {
    $(".kill").css('backgroundColor','lightgray');
    $('.word').css('backgroundColor','lightgray');
    $('.all').css('backgroundColor','lightgray');
}
function kill() {
    step=0;
    step=step+1;
    sessionStorage.step=step;
    $(".kill").css('backgroundColor','lightgray');
    window.location.href="../kill/kill.html";
    console.log(step)
}
$(function () {
    $('.word').click(function () {
        $(".kill").text('杀手杀人'+(dead+1)+"号死亡");
        step++;
        sessionStorage.step=step;
        $('.word').css('backgroundColor','lightgray');
    })
})
$(function () {
    $('.all').click(function () {
        step++;
        sessionStorage.step=step;
        $('.all').css('backgroundColor','lightgray');
    })
})
$(function () {
    $('.vote').click(function () {
        step=0;
        sessionStorage.step=step;
        window.location.href="../kill/kill.html"
        date++
        localStorage.date=date;
    })
})
$("#diary").click(function () {
    window.location.href="../judge/judge.html"
})