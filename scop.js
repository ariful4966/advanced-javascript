let bonus = 20;
function sum(first, second){
    let result = first + second +bonus;
    // console.log(bonus);
    if(result > 9){
        let mood = "happy";
        mood = "funcy";
        mood = "cranky";
        console.log(mood);
    }
    return result;
}
const output = sum (5, 7);
// console.log(bonus)
console.log(output);