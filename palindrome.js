detectPalindrome = (str) => {
    let strArray = [];
    for (let i = str.length -1; i >= 0; i--) {
        strArray.push(str.slice(i, i + 1));
    }
    comparisonStr = strArray.join('');
    console.log("Flipping word...")
    console.log(`Flipped word: ${comparisonStr}`);
    if (str === comparisonStr) {
        return true;
    } else {
        return false;
    }
}

console.log("Enter a word to check if it's a palindrome");
let input = process.stdin.on('data', (userInput) => {
    input = userInput.toString().trim().toLowerCase();
    if (!input) {
        console.log("no input detected!");
    } else if (!isNaN(input)) {
        console.log("Number detected! Please enter a word.");
    } else {
        detectPalindrome(input)
        ? console.log('Congrats! You found a palindrome!')
        : console.log('Not a palindrome! Better luck next time.');
        
    }
});
