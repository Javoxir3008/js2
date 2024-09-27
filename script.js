// let a = prompt('вибери число')
// if(a){

// }

    let num1 = parseFloat(prompt("Введите первое число:"));
  
    let operation = prompt("Введите операцию (+, -, *, /):");
  
    let num2 = parseFloat(prompt("Введите второе число:"));
  
    let result;
    if (operation === "+") {
      result = num1 + num2;
    } else if (operation === "-") {
      result = num1 - num2;
    } else if (operation === "*") {
      result = num1 * num2;
    } else if (operation === "/") {
    } else {
      result = "Неверная операция!";
    }
  
    alert("Результат: " + result);
 