function add(num1, num2){
    const arr = console.log([...arguments]);
    return num1 + num2 + arguments[2];
  
}
const result = add(3, 4, 5, 8);
console.log(result);