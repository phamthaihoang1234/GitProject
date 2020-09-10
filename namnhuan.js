let year= parseInt(prompt("Input year"))

if(year%4==0&&year%100!=0){
    alert("is leap year");
}else if(year%100==0&&year%400==0){
    alert("is leap year");
}else {
    alert("is not leap year");
}



