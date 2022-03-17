//rand
var rand_USD=0.067;
var rand_POUND=0.051;
var rand_Ruble=7.48;
var rand_EURO=0.061;
var rand_YEN=7.93;

//USD
var usd_RAND=14.95;
var usd_POUND=0.76 ;
var usd_Ruble=103.25;
var usd_EURO=0.91;
var usd_YEN=118.70;

//Pound
var Pound_RAND=19.61;
var Pound_USD=1.31;
var Pound_Ruble=138.03;
var Pound_EURO=1.19;
var Pound_YEN=155.62;

//Ruble
var Ruble_Rand=0.14;
var Ruble_USD=0.0095;
var Ruble_POUND=0.0072;
var Ruble_EURO=0.0086;
var Ruble_YEN=1.13;


//Euro
var euro_rand=16.55;
var euro_USD=1.10;
var euro_POUND=0.84;
var euro_Ruble=116.53;
var euro_YEN=131.28;

//Yen
var yen_Rand=0.13;
var yen_USD=0.0084;
var yen_POUND=0.0064;
var yen_Ruble=0.89;
var yen_EURO=0.0076;





let conversionList=[
[0      ,rand_USD,rand_POUND,rand_Ruble,rand_EURO,rand_YEN],
[usd_RAND,    0    , usd_POUND, usd_Ruble, usd_EURO, usd_YEN],
[Pound_RAND,Pound_USD,     0    ,Pound_Ruble,Pound_EURO,Pound_YEN],
[Ruble_Rand,Ruble_USD,Ruble_POUND,    0    ,Ruble_EURO,Ruble_YEN],
[euro_rand,euro_USD,euro_POUND,euro_Ruble,    0    ,euro_YEN],
[yen_Rand,yen_USD,yen_POUND,yen_Ruble,yen_EURO,    0]
];

let symbolList=["R","$","£","₽","€","¥"]

function tocurrencmultiply(curren1,curren2){
    var userInput=document.querySelector("#money").value;
    let converted =userInput*(conversionList[curren1][curren2])
    let symbol=symbolList[curren2];
    document.querySelector("#result").innerHTML=` ${symbol}${converted.toFixed(2)}`
}





document.querySelector("button").onclick=function(){
    var userInput=document.querySelector("#money").value;


  var currency1= document.querySelector("#Currency1");
  var currency1Val=currency1.options[currency1.selectedIndex].value;
  var currency2= document.querySelector("#Currency2");
  var currency2Val=currency2.options[currency2.selectedIndex].value;

  
   var currency1Txt=currency1.options[currency1.selectedIndex].text;
   var currency2Txt=currency2.options[currency2.selectedIndex].text;
   if(currency1Val =="none" || currency2Val=="none"){
    alert("Please make sure that you have chosen the types of currencies.")
    }else if(currency1Val==currency2Val){
       alert(`You cannot convert ${currency1Txt} to ${currency2Txt}. Because its the same currency.`)
    }else if(userInput<=0 || isNaN(userInput)){
        alert(`Please enter a number greater than zero.`) 
   }else{tocurrencmultiply(currency1Val,currency2Val)}
   
   
}