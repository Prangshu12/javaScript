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

// function classifyNumber(number){
//     if(number>0){
//         return "Positive";
//     }
//     else if(number<0){
//         return "Negative";
//     }
//     else{
//         return "Zero";
//     }
// }
// console.log(classifyNumber(34));



// ### 7. Day Name
// (DATE - 17/09/2026)
// Write a function:
// ```
// getDayName(day)
// ```
// where `day` is a number from `1` to `7`.
// Return:
// - `1` → `"Monday"`
// - `2` → `"Tuesday"`
// - `3` → `"Wednesday"`
// - `4` → `"Thursday"`
// - `5` → `"Friday"`
// - `6` → `"Saturday"`
// - `7` → `"Sunday"`
// Requirements:
// - Use `switch`
// - Use `break`
// - Use `default` for invalid numbers
// Example:
// ```
// getDayName(4)
// ```
// should return:
// ```
// "Thursday"
// ```

function getDayName(day){
switch(day){
    case 1: 
        return "Monday";
    case 2:
        return "Tuesday";
    case 3: 
        return "Wednesday";
    case 4:
        return "Thursday";
    case 5:
        return "Friday";
    case 6:
        return "Saturday";
    case 7:
        return "Sunday";
    default:
        return "invalid numbers"
}
}
console.log(getDayName(2));
