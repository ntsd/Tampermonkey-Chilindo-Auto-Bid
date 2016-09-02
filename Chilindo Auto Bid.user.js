// ==UserScript==
// @name         Chilindo Auto Bid
// @namespace    http://www.ntsd.in.th
// @version      0.1
// @description  Auto Bid for http://www.chilindo.com/ you can set highest price you want to bid
// @author       ntsd
// @match       http://www.chilindo.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function getText(el) {
        return el.textContent || el.innerText;
    }
    function ClickButtonBid(){
        document.getElementById("ContentPlaceHolder1_btnBid").click();
    }
    function isInArray(value, array) {
        return array.indexOf(value) > -1;
    }
    function startAutoBid(){
        //var maxPrice = 5500;
       // var myId = 'jo.ntsd';
        var maxPrice = document.getElementById('maxprice').value;
        var myId = document.getElementById('myusername').value;
        console.log(myId, maxPrice);
        setInterval(function(){
            var timeelement = document.getElementById('spanCountDown');
            var time = getText(timeelement);
            var currentWinnerElement =  document.getElementsByClassName('current_winner')[0]; //var currentWinnerElement =  document.getElementsByClassName('bid_user current_winner pro_user')[0];
            var currentWinner = getText(currentWinnerElement).split(" ");
            var priceElement = document.getElementsByClassName('bid_amount')[1];
            var price = getText(priceElement) ;
            if(!isInArray(myId, currentWinner)){
                console.log("I'm not winner");
                if(time < " 00:00:05"){
                    console.log("Time less than 5 sec");
                    if(price < maxPrice){
                        console.log("Bid For "+price);
                        //ClickButtonBid();
                    }
                }
            }
            console.log(time, price, currentWinner);
        }, 3000);
    }
    function addDiv(){
        var div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = '<br>Your Username<input type="text" name="name" value="" id="myusername"/><br>Max Price<input type="number" name="price" value="" id="maxprice"/><br><input type="button" value="Start Auto Bid" id="startAutoBidButton">';
        var divElement = document.getElementsByClassName('bid-slider')[0];
        divElement.appendChild(div);
        var startAutoBidButton = document.getElementById('startAutoBidButton');
        startAutoBidButton.onclick = startAutoBid();
    }
    addDiv();
})();