var s1 = 0, s2 = 0, s3 = 0, a1=0, a2=0, a3=0, b1=0, b2=0, b3=0, znak1='', znak2='', znak3='';
var znak;
function func() {
    var s;
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    switch (znak) {
        case '+':
        s = a + b;
        break;
        case '-':
        s = a - b;
        break;
        case '*':
        s = a * b;
        break;
        case '/':
        s = a / b;
        break;
    }
    document.getElementById("result").innerHTML = s;
    s3 = s2;
    s2 = s1;
    s1 = s;
    a3=a2;
    a2=a1;
    a1=a;
    b3=b2;
    b2=b1;
    b1=b;
    znak3=znak2;
    znak2=znak1;
    znak1=znak;
    if(znak1 != '') {
        document.getElementById("a1").innerHTML = a1;
        document.getElementById("znak1").innerHTML = znak1;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("=1").innerHTML = '=';
        document.getElementById("s1").innerHTML = s1;
    }

    if(znak2 != '') {
        document.getElementById("a2").innerHTML = a2;
        document.getElementById("znak2").innerHTML = znak2;
        document.getElementById("b2").innerHTML = b2;
        document.getElementById("=2").innerHTML = '=';
        document.getElementById("s2").innerHTML = s2;
    }

    if(znak3 != '') {
        document.getElementById("a3").innerHTML = a3;
        document.getElementById("znak3").innerHTML = znak3;
        document.getElementById("b3").innerHTML = b3;
        document.getElementById("=3").innerHTML = '=';
        document.getElementById("s3").innerHTML = s3;
    }
}


function themeSwitch() {
    
    document.getElementById('themain').style.backgroundColor = "rgb(30, 30, 30, 0)";
    document.getElementById('themain').style.backgroundImage = "url(waltuh.gif)";
}
