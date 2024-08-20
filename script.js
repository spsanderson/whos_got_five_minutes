const names = ["Steve", "Fang", "Mayur", "Billy", "Diane W", "Joe", "Casey", "Chris", "Caitlin", "Cindy", "Diane K", "Tom", "Jorge", "Ray", "Off the Hook"];

document.getElementById('pickNameButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    
    if (selectedName === "Off the Hook") {
        document.getElementById('result').textContent = "Nobody has to present next week! You're all off the hook!";
    } else {
        document.getElementById('result').textContent = `Who's next? It's ${selectedName}! Get ready ${selectedName} we look forward to it :)`;
    }
});