document.write("<table border='1px' >");
let i,j;
for ( i=1;i<11;i++ ){
    document.write("<tr>");
   for (j=1;j<11;j++){
       document.write("<td>"+ j + " x " + i + " = "+ i*j +"</td>");
   }
   document.write("</tr>");

}

document.write("</table>");