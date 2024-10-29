
const backendUrl = 'http://localhost:3000/api/message';


async function fetchMessage() {
  try {
    const response = await fetch(backendUrl);
    const data = await response.json();
    document.getElementById('message').textContent = data.message;
  } catch (error) {
    document.getElementById('message').textContent = "Failed to load message.";
    console.error("Error fetching message:", error);
  }
}


fetchMessage();
