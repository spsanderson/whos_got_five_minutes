// Author: Steve P. Sanderson II, MPH

const names = [
    "Steve", "Fang", "Mayur", "Billy", "Diane W", "Joe", "Chris", "Caitlin", "Cindy",
    "Diane K", "Tom", "Jorge", "Ray", "Elena", "Cecilia", "Malacy", "Off the Hook"
];

const usedNames = [];

// Add event listener to button. Pick a name from the array and display it.
// The message should be something like:
// "Who's next? It's [name]! Get ready [name] we look forward to it :)"
// If the name is "Off the Hook" the message should be:
// "Nobody has to present next week! You're all off the hook!"   
// After the button is pressed the name should be removed from the array names and added to usedNames.
// Once all names have been picked, the array will be reset. If the array is empty, the array will be reset.

document.getElementById('pickNameButton').addEventListener('click', () => {
    // get a random index from the names array
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    
    // remove the selected name from the names array
    names.splice(randomIndex, 1);

    // add the selected name to the usedNames array.
    usedNames.push(selectedName);

    // if the names array is empty, reset the names array
    if (names.length === 0) {
        names.push(...usedNames);
        usedNames.length = 0;
    }

    // display the result
    if (selectedName === "Off the Hook") {
        document.getElementById('result').textContent = "Nobody has to present next week! You're all off the hook!";
    } else {
        document.getElementById('result').textContent = `Who's next? It's ${selectedName}! Get ready ${selectedName} we look forward to it :)`;
    }

    // display the names in the usedNames array.
    document.getElementById('usedNames').textContent = usedNames.join(', ');

    // display the names in the names array
    document.getElementById('names').textContent = names.join(', ');
});
