function Myfuntion() {
    let a = parseInt(document.getElementById('1').value);
    let b = parseInt(document.getElementById('2').value);
    let c = parseInt(document.getElementById('3').value);


    if (a === 0) {
        alert("phuong trinh tren khong phai la phuong trinh bac 2");
    } else {
        let delta = b * b - 4 * a * c;
        if (delta < 0) {
            alert("phuong trinh vo nghiem");
        } else if (delta === 0) {
            alert("phuong trinh tren co nghiem kep:" + (-b) / (2 * a));
        } else {
            x1 = (-b - Math.sqrt(delta)) / (2 * a);
            x2 = (-b + Math.sqrt(delta)) / (2 * a)
            alert("phuong trinh co nghiem  la: x1= " + x1 +" , x2 = " +x2);

        }
    }

}