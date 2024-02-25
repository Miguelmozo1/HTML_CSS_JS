var num1 = "";
var num2 = "";
var oper = "";
var display = document.getElementById("display")

const input = (int) => {
    num1 += int
    console.log(num1)
    display.innerHTML = num1
}

const operation = (op) => {
    num2 = num1
    num1 = "";
    oper = op
}

const Equal = () => {
    var ans = "";
    switch(oper) {
        case "+":
            ans = num2 + num1
            break;
        case "-":
            ans = num2 - num1
            break;
        case "/":
            ans = num2 / num1
            break;
        case "x":
            ans = num2 * num1
            break;
    }
    num1 = "";
    num2 = "";
    display.innerHTML = ans
}

const Clear = () => {
    num1 = "";
    num2 = "";
    display.innerHTML = "0"
}