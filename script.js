document.getElementById('fetchMessage').addEventListener('click', async () => {
  try {
    const response = await fetch('https://checker-j3o3.onrender.com');  // Replace with your Render backend URL
    const data = await response.json();
    document.getElementById('message').textContent = data.message;
  } catch (error) {
    console.error("Error fetching message:", error);
  }
});
