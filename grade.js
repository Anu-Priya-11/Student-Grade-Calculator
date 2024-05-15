function calculate(){
    
     var a = parseInt(document.getElementById('b1').value);
     var b = parseInt(document.getElementById('b2').value);
     var c = parseInt(document.getElementById('b3').value);
     var d = parseInt(document.getElementById('b4').value);
     var e = parseInt(document.getElementById('b5').value);

     if(a<0 || b<0 || c<0 || d<0 || e<0){
        alert("Negative marks is no allowed")
     }

     if(a>100 || b>100 || c>100 || d>100 || e>100){
        alert("Please enter correct value (0-100)")

     }
     else{
        var obtain=a+b+c+d+e;
        document.getElementById("obtain").innerHTML=obtain;
        var per=obtain/500*100;
        document.getElementById("per").innerHTML=per;
        if(a>40 && b>40 && c>40 && d>40 && e>40){
           document.getElementById("rem").innerHTML="<span style='color:#292'>Pass</span>"

        }
        else{
            document.getElementById("rem").innerHTML="<span style='color:red'>Fail</span>";
        }
        if(per>=80){
            document.getElementById("grade").textContent="A+";
        }
        else if(per>=70){
            document.getElementById("grade").textContent="B+";
        }
        else if(per>=60){
            document.getElementById("grade").textContent="C+";
        }
        else if(per>=50){
            document.getElementById("grade").textContent="D+";
        }
        else if(per>=40){
            document.getElementById("grade").textContent="E+";
        }
        else{
            document.getElementById("grade").textContent="F";
        }
     }
     return false;
}
