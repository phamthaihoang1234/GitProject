function myFunction(type){
    let input1=parseFloat(document.getElementById('input1').value);
    let input2=parseFloat(document.getElementById('input2').value);



    if(type=="+"){
        document.getElementById('output').innerHTML="Kết quả là:"+ (input1+input2);
    }
    else if(type=="-"){
        document.getElementById('output').innerHTML="Kết quả là:"+ (input1-input2);
    }
    else if(type=="x"){
        document.getElementById('output').innerHTML="Kết quả là:"+ (input1*input2);
    }else {
        document.getElementById('output').innerHTML="Kết quả là:"+ (input1/input2);
    }

}