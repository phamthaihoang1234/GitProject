function calculator_income(){
    let input_bacluong = document.getElementById('input').value;
    let incom_of_month = parseFloat(document.getElementById('income').value);
    if(input_bacluong== "bậc 1"){
        document.getElementById('output').innerHTML = "Income : "+(incom_of_month*6 + 0.9*3*incom_of_month + 0.8*3*incom_of_month)

    }else{
        document.getElementById('output').innerHTML = "Income : "+( incom_of_month*3 + 0.9*3*incom_of_month + 0.8*6*incom_of_month )
    }

}