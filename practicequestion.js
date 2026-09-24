// // ### 1. Create a JavaScript program that stores information about a student.
// // **(DATE - 19/08/2026)**
// // Your program should store:
// // - Student name
// // - Age
// // - Course
// // - College name
// // - Marks
// // - Birth year
// // Then display all the information in the console.
// // ### Requirements
// // 1. Use `let`, `const`, and `var` in your program.
// // 2. Change at least **two values** after declaring them.
// // 3. Try changing a value that should not be changed.
// // 4. Observe what happens.
// // 5. Print the final values to the console.
// // ### ⭐ Bonus ⭐
// // Add:
// // - City
// // - Semester
// // - Favourite subject
// const Student_name = "Prangshu Pranjal Saikia";
// let age = 18;
// let course = "BTech Cse"
// var College_name = "SITM";
// let Marks = 80 + "%";
// const Birth_year = 2008;
// age = 19;
// Marks = 80.5 + "%";
// let City = "Golaghat";
// let Semester = 1 + "st";
// let Favourite_subject = "coding";
// console.log("Student name: " + Student_name);
// console.log("Student age: " + age);
// console.log("Student course: " + course);
// console.log("College name: " + College_name);
// console.log("Student's perfomance: " + Marks);
// console.log("Birth year: " + Birth_year);
// console.log("City: " + City);
// console.log("Semester: " + Semester);
// console.log("Student's subject preference: " + Favourite_subject);





// // ### Temperature Checker
// // (DATE - 17/09/2026)
// // Create a function:
// // ```jsx
// // checkTemperature(temperature)
// // ``
// // The function should return:
// // - `"Cold"` if temperature is below 20
// // - `"Normal"` if temperature is between 20 and 30
// // - `"Hot"` if temperature is above 30
// // ### Extra Challenge
// // Create a variable **inside the function**:
// // ```jsx
// // let message = " " ;
// // ```
// // Use that variable to store the result before returning it.
// function checkTemperature(temperature){
//    let jsx = "";
//         if(temperature<20){
//             jsx = "Cold"
//         }
//         else if (temperature>20 && temperature < 30){
//             jsx = "Normal"
//         }
//         else{
//             jsx = "Hot"
//         }
//     return jsx;
// }
// console.log(checkTemperature(22))

// // ### 3. Mini Menu System
// // (DATE - 17/09/2026)
// // Write a function:
// // ```jsx
// // menuChoice(choice)
// // ```
// // Use `switch` to return:
// // - `1` → `"Start Game"`
// // - `2` → `"Load Game"`
// // - `3` → `"Settings"`
// // - `4` → `"Exit"`
// // - anything else → `"Invalid Choice"`
// // Requirements:
// // - Use `switch`
// // - Use `case`
// // - Use `break`
// // - Use `default`
// // - Return the result instead of printing it
// // ---

// function menuChoice(choice){
//     switch(choice){
//         case (1):
//             return "Start Game";
//             break;
//         case (2):
//             return "Load Game";
//             break;
//         case (3):
//             return "Settings";
//             break;
//         case (4):
//             return "Exit"
//             break;
//         default:
//             return "Invalid Choise"
//     }
// }
// console.log(menuChoice(4))


// // ### 4. Number Search with `break` and `continue`
// // (DATE - 17/09/2026)
// // Write:
// // ```
// // findNumber(numbers,target)
// // ```
// // Search through the array and:
// // - Skip negative numbers using `continue`
// // - Stop immediately when `target` is found using `break`
// // - Return `"Found"` if found
// // - Return `"Not Found"` otherwise
// // Example:
// // ```
// // findNumber([-5,10,-2,7,20],7)
// // ```
// // should return:
// // ```
// // "Found"
// // ```

// function findNumber(numbers, target) {
//     // let n = "";
//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] < 0) {
//             continue;
//         }

//         if (numbers[i] == target) {
//             // n = "found";
//             // return n;
//             return "found";
//             // break;
//         }
//         // if(n == "found"){
//         //     return "found1";
//         // }
//     }

//     return "Not Found";
// }
// console.log(findNumber([-5, 10, -2, 7, 20], 7));


// ### 5. Password Checker Using `do...while`
// (DATE - 17/09/2026)
// Write a function:
// ```
// checkPassword(passwords)
// ```
// where `passwords` is an array containing attempted passwords.
// The correct password is:
// ```
// "1234"
// ```
// Check the attempts one by one using a `do...while` loop.
// Return:
// - `"Password Correct"` when `"1234"` is found
// - `"Password Failed"` if all attempts are exhausted
// Example:
// ```
// checkPassword(["1111","5678","1234"])
// ```
// should return:
// ```
// "Password Correct"
// ```

// function checkPassword(passwords) {
//     let i = 0;

//     do {
//         if (passwords[i] === "1234") {
//             return "Password Correct";
//         }

//         i++;
//     } while (i < passwords.length);

//     return "Password Failed";
// }
// console.log(checkPassword(["134", "1313","2341"]));