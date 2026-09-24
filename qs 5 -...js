// ### 6. Number Classifier
// (DATE - 17/09/2026)
// Write a function:
// ```
// classifyNumber(number)
// ```
// The function should return:
// - `"Positive"` if the number is greater than 0
// - `"Negative"` if the number is less than 0
// - `"Zero"` if the number is equal to 0
// Requirements:
// - Use `if...else if...else`
// - Use `return`
// Example:
// ```
// classifyNumber(-8)
// ```
// should return:

function classifyNumber(number){
    if(number>0){
        return "Positive";
    }
    else if(number<0){
        return "Negative";
    }
    else{
        return "Zero";
    }
}
console.log(classifyNumber(34));

