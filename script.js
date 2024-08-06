const names = ["Steve", "Fang", "Mayur", "Billy", "Diane W", "Joe", "Casey", "Chris", "Caitlin", "Cindy", "Diane K", "Tom", "Jorge", "Ray"];

document.getElementById('pickNameButton').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    document.getElementById('result').textContent = `Who's next? It's ${selectedName}! Get ready ${selectedName} we look forward to it :)`;
});