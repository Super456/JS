/**
 * Created by Administrator on 2017/4/10.
 */
var alive = localStorage.alive;
var alive = JSON.parse(alive);
var date = localStorage.date;
var deador = localStorage.deador;
var deador = JSON.parse(deador);
step = sessionStorage.step;
step = parseInt(step);
var civil=0;
var killer=0;
console.log(deador)
date = parseInt(date)
console.log(date)
console.log(step)
var days = document.getElementsByClassName("day")
var detail = document.getElementsByClassName("kill")
var deta = document.getElementsByClassName("detail")
for (i=0;i<alive.length;i++) {
    if (alive[i][1]=="alive") {
        if (alive[i][0]=="平民") {
            civil++;
        }
        else {
            killer++;
        }
    }
}
$('.killer').text("杀手"+killer+"人");
$('.civil').text("平民"+civil+"人");
for (w=1;w<date;w++) {
    $('.content').append(
        '<div class="detail"><span class="day">第1天</span><span class="kill"></span><span class="kill"></span></div>'
    )
}
for (q=0;q<date;q++) {
    days[q].innerHTML="第"+(q+1)+"天";
}
detail[0].innerHTML="晚上："+(deador[1]+1)+"号被杀手杀死，"+(deador[1]+1)+"号是"+alive[deador[1]][0]
long = date;
if (step==0) {
    long = date-1;
    $('.detail:last-child').remove()
    detail[(long*2-1)].innerHTML="<br />白天："+(deador[(long*2)]+1)+"号被全民投票投死，"+(deador[long*2]+1)+"号是"+alive[deador[long*2]][0]
}
for (h=1;h<long;h++) {
    detail[h*2].innerHTML="晚上："+(deador[(h+1)*2-1]+1)+"号被杀手杀死，"+(deador[(h+1)*2-1]+1)+"号是"+alive[deador[(h+1)*2-1]][0]
    detail[(h*2-1)].innerHTML="<br />白天："+(deador[(h*2)]+1)+"号被全民投票投死，"+(deador[h*2]+1)+"号是"+alive[deador[h*2]][0]
}
$(".again").click(function () {
    window.location.href="../home/home.html"
})