// ==UserScript==
// @name         BD Logger for ABC-PVP-Format
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.neopets.com/dome/arena.phtml
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// @grant        none
// ==/UserScript==

// Only useful for ABC PVP Format
//ABC PVP Format: https://www.neopets.com/~Vlnt
//How 2 Use:Above the battle log,in the black bar, you will see how many times your multi-healers healed.(Make it easier for oneself to follow the rules)Also, if there is a difference on MaxHp of 2 pets, this script helps note the number.



////////////////////////////////////////////weapon pic link/////////////////////////////////////////////////////////////////
var tmt='url("https://images.neopets.com/items/wea_magical_tablet.gif")';
var istaff='url("https://images.neopets.com/items/earth_staff.gif")';
var wodf='url("https://images.neopets.com/items/darkfaerie_wand.gif")';
var blaze='url("https://images.neopets.com/items/wea_tge_scimitar.gif")';
var rodn='url("https://images.neopets.com/items/rod_darknova.gif")';
////////////////////////////////////////////weapon string to display/////////////////////////////////////////////////////////////////
var tmtstr="TMT15";
var istaffstr='Istaff20';
var wodfstr='WODF30';
var blazestr='Blaze15';
var rodnstr='RODN30';



var onlyonce=0;
var slot1=document.querySelector("#p1e1m > div");
var slot2=document.querySelector("#p1e2m > div");


 // 选择到指定的元素
const element =document.querySelector("#container__2020 > div.battledome-container");

// 创建一个新的 <p> 元素
const newParagraph = document.createElement("p");
//只要不是第一輪,就改變文字
var intervalText=setInterval(function(){if(document.querySelector("#flround")&&!(document.querySelector("#flround").textContent=="1")){
    ////////////////////

if(localStorage.ABCMaxHP!=null&&localStorage.ABCMaxHP!=""&&localStorage.ABCMaxHP!="0"){
// 设置 <p> 元素的文本内容
newParagraph.textContent = "MaxHP Difference="+localStorage.ABCMaxHP;
}
// 设置 <p> 元素的文本颜色为红色
newParagraph.style.color = "red";

// 将新的 <p> 元素添加到选择的元素下面
element.appendChild(newParagraph);





    //////////////////////////
    document.querySelector("#statusmsg > h4").textContent=localStorage.getItem('ABCLogger');}},3500);//改变文字
var interva2Text=setInterval(function(){


},3500);//改变文字
var intervalId0=setInterval(function(){
 // 1. 获取按钮元素（假设按钮的id为"myButton"）
    var button = document.querySelector("#fight");

    // 2. 检查按钮是否存在
    if (button) {
            // 移除可能存在的旧事件监听器
          // 元素已经加载，清除定时器
      clearInterval(intervalId0);
       // button.removeEventListener('click', handleClick);
        // 3. 绑定点击事件监听器
        button.addEventListener('click', handleClick);
    }

    // 自定义点击事件处理函数
    function handleClick() {
        if(onlyonce!=document.querySelector("#flround").textContent){
            onlyonce=document.querySelector("#flround").textContent;
        myCustomMethod();}
    }

    // 自定义方法
    function myCustomMethod() {
         console.log(document.querySelector("#flround").textContent);
        if(document.querySelector("#flround").textContent=="1"){
            localStorage.ABCMaxHP=document.querySelector("#p1hp").textContent-document.querySelector("#p2hp").textContent;
localStorage.setItem('ABCLogger', "Log:");

}
        
        TestWeapon(slot1,tmt,tmtstr,1200,2);
         TestWeapon(slot1,istaff,istaffstr,1200,0.2);
        TestWeapon(slot1,wodf,wodfstr,1200,0.25);
        TestWeapon(slot1,blaze,blazestr,1200,0.2);
        TestWeapon(slot1,rodn,rodnstr,1200,2);

                        
        //
           
         TestWeapon(slot2,tmt,tmtstr, 2200,2);
         TestWeapon(slot2,istaff,istaffstr, 2200,0.2);
        TestWeapon(slot2,wodf,wodfstr,2200,0.25);
        TestWeapon(slot2,blaze,blazestr,2200,0.2);
        TestWeapon(slot2,rodn,rodnstr,2200,2);
                        
        // 这里可以写你想要触发的任何自定义代码
    }


},3500);


function TestWeapon(item,identity,str,delayy,percent){

var hpjudge=parseInt(document.getElementById('p1hgreen').style.top, 10)<-456*(1-percent);
console.log(item,identity,str,hpjudge);//打印送进来的变量
    if(hpjudge&&item&&item.style.backgroundImage==identity)
    {//判断包裹

         setTimeout(function() {
// 获取存储的字符串
let storedString = localStorage.getItem('ABCLogger');

// 如果存储的字符串不存在（即首次使用），可以设置为一个空字符串
if (storedString === null) {
    storedString = '';
}

// 要添加的内容
let newContent = "|"+str;

// 将新内容拼接到原有内容后面
storedString += newContent; // 或者 storedString = storedString + newContent;

// 将更新后的字符串存回 localStorage
localStorage.setItem('ABCLogger', storedString);
   }, delayy);
         }//判断结束

}
