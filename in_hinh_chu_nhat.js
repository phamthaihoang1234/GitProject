let n=7;
let m=21;

for(let i = 1; i <= n; i++)    {
    for(let k = 1 ; k <= m; k++){
        if(i == 1 || k == 1 || i == n || k == m){
            document.write("*")
        }
        else{
            document.write("&emsp;")
        }
    }
    document.write("<br>");
}