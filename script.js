// Initialize arrays to store the names and picked names
let names = [];
let usedNames = [];

// Load names from names.json file
async function loadNames() {
  try {
    const response = await fetch('names.json');
    const data = await response.json();
    names = [...data.names];  // Populate the `names` array
    usedNames = [];           // Reset usedNames array
  } catch (error) {
    console.error('Error loading names:', error);
  }
}

// Function to pick a random name
function pickName() {
  if (names.length === 0) {
    // All names have been used, reset the arrays
    loadNames();
    displayMessage("Hi! You're all off the hook this time!");
    return;
  }

  // Pick a random index from the `names` array
  const randomIndex = Math.floor(Math.random() * names.length);
  const pickedName = names.splice(randomIndex, 1)[0];  // Remove from `names`
  usedNames.push(pickedName);                          // Add to `usedNames`

  // Display the message
  displayMessage(`Hi ${pickedName}, you have been picked! We are excited to hear your presentation!`);
}

// Function to display a message
function displayMessage(message) {
  const messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.textContent = message;
  } else {
    console.error("Message element not found!");
  }
}

// Set up the button event listener
document.getElementById('pickNamesButton').addEventListener('click', pickName);

// Initial load of names
loadNames();
