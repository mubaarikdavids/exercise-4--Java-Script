function validateUserInput(user) {
    if (!user.username) {
        throw new Error("Validation Error: Username is required.");
    }
    if (typeof user.age !== 'number') {
        throw new TypeError("Validation Error: Age must be a number.");
    }
    if (user.age < 18) {
        throw new RangeError("Validation Error: Must be 18 or older.");
    }
    return true;
}

function demonstrateErrorTypes(type) {
    try {
        if (type === 'reference') {
            console.log(nonExistentVariable);
        } else if (type === 'type') {
            const num = 10;
            num();
        } else if (type === 'range') {
            const arr = new Array(-5);
        }
    } catch (error) {
        console.log(`[Caught ${error.name}]: ${error.message}`);
    }
}

const stringHelpers = {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split('').reverse().join('')
};

const arrayHelpers = {
    removeDuplicates: (arr) => [...new Set(arr)],
    calculateAverage: (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length
};

console.log("--- 1. Testing Validation ---");
try {
    validateUserInput({ username: "Alex", age: 16 });
} catch (e) {
    console.log(e.message);
}

console.log("\n--- 2. Testing Error Types ---");
demonstrateErrorTypes('reference');
demonstrateErrorTypes('type');
demonstrateErrorTypes('range');

console.log("\n--- 3. Testing String Helpers ---");
console.log("Capitalize:", stringHelpers.capitalize("hello"));
console.log("Reverse:", stringHelpers.reverse("world"));

console.log("\n--- 4. Testing Array Helpers ---");
const nums = [1, 2, 2, 3, 4, 4];
console.log("Unique Array:", arrayHelpers.removeDuplicates(nums));
console.log("Average:", arrayHelpers.calculateAverage([10, 20, 30]));