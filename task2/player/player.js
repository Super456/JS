/**
 * Created by Administrator on 2017/3/26.
 */
function distri() {
    num = document.getElementById("num").value;   //获取数量
    //判断数量是否正确
    if (num<4 || num>18) {
        alert("请输入正确的数量");
    }
    else {apart()}
}
//计算杀手和平民数量
function apart() {
    kill = Math.floor(num/4);
    var civilnum = num-kill;
    var killer = document.getElementById("killer");
    var civil = document.getElementById("civil");
    killer.innerHTML = ("杀手"+kill+"人");
    civil.innerHTML = ("平民"+civilnum+"人");
}
function order() {
    //建立新数组，有几个杀手就将前几个输入为杀手，其他为平民
    var random = new Array;
    for (var i=0;i<kill;i++) {
        random[i] = "杀手";
    }
    for (var a=kill;a<num;a++) {
        random[a] = "平民";
    }
    //用洗牌算法，将数组打乱
    var temp,ran;
    while(0 != num){
        ran = Math.floor(Math.random() * num)    //取一个随机数
        num--;
        //将数组的最后一项与随机一项互相交换，然后一次类推直到全部交换
        temp = random[num];
        random[num] = random[ran];
        random[ran] = temp;
    }
    random = JSON.stringify(random)
    localStorage.random = random;
}
function goto() {
    if (num<4 || num>18 ) {
        alert("请输入正确的数量");
    }
    else {
        order();
        window.location.href='../distri/distri.html';
    }
}
var deador = new Array;
deador[0]=1;
deador = JSON.stringify(deador)
localStorage.deador=deador;
