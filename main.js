// 1. Declare a variable name and assign it as your name. Print the variable to the console.
let Myname = "Xia Sun";
console.log(Myname);


// 2. Add a new fruit to the fruits array using the push method.
let arrays = ["apple, banana"];
arrays.push("kiwi");
console.log(arrays);

// 3. Write a function getDaysUntilAdeshBirthday that calculates and returns the number of days remaining until his birthday. Print the result to the console. Adesh's birthday is on March 25. 

function getDaysUntilAdeshBirthday() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const adeshBirthday = new Date(currentYear, 2, 25); 


    const timeDifference = adeshBirthday - today;
    // Convert the milliseconds to days
    const daysUntilBirthday = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysUntilBirthday;
}

console.log(`days until Adesh's birthday ${getDaysUntilAdeshBirthday()} days`);