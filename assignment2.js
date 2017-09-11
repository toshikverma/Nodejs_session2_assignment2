var multiply=(function (){
var num1=10; //private variables
var num2=20;
var result=function(){ return num1*num2; }  // inner function
return function(){alert(result())}  //closure
})();