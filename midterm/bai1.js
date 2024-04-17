function sum(){
    var num1 = parseFloat(document.getElementById("A").value);
    var num2 = parseFloat(document.getElementById("B").value);
    var sum = num1 + num2;
    document.getElementById("Result").textContent = "Result: " + sum;
}
function subtract() {
    var num1 = parseFloat(document.getElementById("A").value);
    var num2 = parseFloat(document.getElementById("B").value);
    var subtract = num1 - num2;
    document.getElementById("Result").textContent = "Result: " + subtract;
}
function multiply() {
    var num1 = parseFloat(document.getElementById("A").value);
    var num2 = parseFloat(document.getElementById("B").value);
    var multiply = num1 * num2;
    document.getElementById("Result").textContent = "Result: " + multiply;
}
function divide() {
    var num1 = parseFloat(document.getElementById("A").value);
    var num2 = parseFloat(document.getElementById("B").value);
    var divide = num1 / num2;
    document.getElementById("Result").textContent = "Result: " + divide;
}
function reset() {
    document.getElementById("Result").textContent = "Result:"
    document.getElementById("A").value = "";
    document.getElementById("B").value = "";
}