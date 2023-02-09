
function showQuestion1(){
    var Question_1 = document.getElementById("question1");
    var Question_2 = document.getElementById("question2");
    var Question_3 = document.getElementById("question3");
    var Question_4 = document.getElementById("question4");
    var Question_5 = document.getElementById("question5");
    Question_1.style.display="block";
    Question_2.style.display="none";
    Question_3.style.display="none";
    Question_4.style.display="none";
    Question_5.style.display="none";
}
function showQuestion2(){
    var Question_1 = document.getElementById("question1");
    var Question_2 = document.getElementById("question2");
    var Question_3 = document.getElementById("question3");
    var Question_4 = document.getElementById("question4");
    var Question_5 = document.getElementById("question5");
    Question_2.style.display="block";
    Question_1.style.display="none";
    Question_3.style.display="none";
    Question_4.style.display="none";
    Question_5.style.display="none";
}
function showQuestion3(){
    var Question_1 = document.getElementById("question1");
    var Question_2 = document.getElementById("question2");
    var Question_3 = document.getElementById("question3");
    var Question_4 = document.getElementById("question4");
    var Question_5 = document.getElementById("question5");
    Question_3.style.display="block";
    Question_1.style.display="none";
    Question_2.style.display="none";
    Question_4.style.display="none";
    Question_5.style.display="none";
}
function showQuestion4(){
    var Question_1 = document.getElementById("question1");
    var Question_2 = document.getElementById("question2");
    var Question_3 = document.getElementById("question3");
    var Question_4 = document.getElementById("question4");
    var Question_5 = document.getElementById("question5");
    Question_4.style.display="block";
    Question_2.style.display="none";
    Question_3.style.display="none";
    Question_1.style.display="none";
    Question_5.style.display="none";
}
function showQuestion5(){
    var Question_1 = document.getElementById("question1");
    var Question_2 = document.getElementById("question2");
    var Question_3 = document.getElementById("question3");
    var Question_4 = document.getElementById("question4");
    var Question_5 = document.getElementById("question5");
    Question_5.style.display="block";
    Question_2.style.display="none";
    Question_3.style.display="none";
    Question_4.style.display="none";
    Question_1.style.display="none";
}

function kk(){
    function answ1(){
        var a1 = document.getElementsByName("ans1");
        var x;
        for(i = 0; i < a1.length; i++) {
            if(a1[i].checked){
                if(a1[i].value == 1){
                    x = 10;
                    return x;
                }
                else{
                    x = 1000;
                    return x;
                }
            }
        }
    }
    var y1 = answ1();
    
    function answ2(){
        var a1 = document.getElementsByName("ans2");
        var x;
        for(i = 0; i < a1.length; i++) {
            if(a1[i].checked){
                if(a1[i].value == 1){
                    x = 10;
                    return x;
                }
                else{
                    x = 1000;
                    return x;
                }
            }
        }
    }
    var y2 = answ2();
    
    function answ3(){
        var a1 = document.getElementsByName("ans3");
        var x;
        for(i = 0; i < a1.length; i++) {
            if(a1[i].checked){
                if(a1[i].value == 1){
                    x = 10;
                    return x;
                }
                else{
                    x = 1000;
                    return x;
                }
            }
        }
    }
    var y3 = answ3();
    
    function answ4(){
        var a1 = document.getElementsByName("ans4");
        var x;
        for(i = 0; i < a1.length; i++) {
            if(a1[i].checked){
                if(a1[i].value == 1){
                    x = 10;
                    return x;
                }
                else{
                    x = 1000;
                    return x;
                }
            }
        }
    }
    var y4 = answ4();
    document.getElementById('ss').innerHTML = y1+y2+y3+y4; 
}

           

