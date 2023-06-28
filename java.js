var op;
function func() {
    var s;
    var a = Number(document.getElementById("num1").value);
    var b = Number(document.getElementById("num2").value);
    switch (op) {
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
}