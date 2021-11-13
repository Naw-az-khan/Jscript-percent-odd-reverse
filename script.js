// //percentage functions
// function marksPercentage(MarksObatained,TotalMarks)
// {
//     percentage=MarksObatained/TotalMarks*100;
//     return percentage;
// }
// marksPercentage(681,800)
// console.log(percentage);

// //odd or even
// var num;
// function OddEven(num){
//     if((num%2)==0){
//         console.log("Num is even");
//     }
//     else{
//         console.log("Num is odd");
//     }
//     return num;
// }
// OddEven(6);

// //reverse string
// function ReverseString(str) {
//     console.log(str.split('').reverse().join(''));
   
//  }
// var res =ReverseString("Nawaz")
 

// //palindrome

// function palindrome(str){
//     var reversed="";
//     for(var i=str.length-1; i>=0;i--)
//     {
//         reversed += str[i];
//     }
//     if(str===reversed){
//         console.log("It is a palindrome");
//     }
//     else{
//         console.log("Not a palindrome")
//     }
// }
// palindrome("MADAM")
// var arr1=["a","b","c","d","e"];

// console.log(arr1.indexOf("a"));

// Anonimus function-

// var a = function(){
//     let c = 10;
//     console.log(c);
// };
// a();

//immediately invoked function-
// (function(){
//     console.log("This is immediately invoked")
// }())
var JSONname ={
    names:[
        {name:"CleanTechnica"},
        {name:"NDTV News"},
        {name:"CleanTechnica"},
        {name:"Fox Business"},
        {name:"MoneyControl"},
        {name:"Livemint"},
        {name:"Tech Times"},
        {name:"CNA"},
        {name:"Slashdot.org"},
        {name:"Monevator.com"},
        {name:"Independent"},
        {name:"Seeking Alpha"},
        {name:"seattlepi.com"},
        {name:"Livemint"},
        {name:"ABC News"},
        {name:"ABC News"},
        {name:"Associated Press"},
        {name: "24/7 Wall St."},
        {name:"24/7 Wall St."},
        {name:"The Information"},
    ],
};
console.log(JSONname.names);
