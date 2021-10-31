//percentage functions
function marksPercentage(MarksObatained,TotalMarks)
{
    percentage=MarksObatained/TotalMarks*100;
    return percentage;
}
marksPercentage(681,800)
console.log(percentage);

//odd or even
var num;
function OddEven(num){
    if((num%2)==0){
        console.log("Num is even");
    }
    else{
        console.log("Num is odd");
    }
    return num;
}
OddEven(6);

//reverse string
function ReverseString(str) {
    console.log(str.split('').reverse().join(''));
   
 }
var res =ReverseString("Nawaz")


