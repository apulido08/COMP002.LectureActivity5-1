myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// First error was found in let i = 1. It should be 0. So that it does not skip the first index of an array*/
// Second error was i <= myGrades.length. This calls for a grade that skips 0. Should be fixed to i < myGrades.length to start at 0 */
// 