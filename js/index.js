function check() {
     var score=0;

     var q1=document.exam.quiz1.value;
     var q2=document.exam.quiz2.value;
     var q3=document.exam.quiz3.value;
     var q4=document.exam.quiz4.value;
     var q5=document.exam.quiz5.value;
     

     if (q1=="B") {score +=20}
     if (q2=="C") {score +=20}
     if (q3=="C") {score +=20}
     if (q4=="C") {score +=20}
     if (q5=="D") {score +=20}

     alert(score) 
   
     if (score >80){
         alert("performed excellently")
     }     
     else if(score>=50 && score<= 80){
         alert("Fairly performed")

     }

     else
     {
         alert(""+" Poorly performed. Retake quiz")
     }
    
   

    

    }