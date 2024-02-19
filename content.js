// Function to send message to background script and expect a response
async function sendMessageToBackground(message) {
    try {
      // Send message to background script
      const response = await chrome.runtime.sendMessage(message);
      console.log("Received response from background script:", response);
    } catch (error) {
      console.error("Error sending message to background script:", error);
    }
  }
  
  // Listener for messages from background script
  chrome.runtime.onMessage.addListener(async function(message) {
    if (message.action === "updateTrackingPixelCount") {
      // Update the UI with the tracking pixel count
      await displayTrackingPixelCount(message.count);
    }
  });
  
  // Function to display the tracking pixel count on the webpage
  async function displayTrackingPixelCount(count) {
    // Replace this with your logic to display the count on the webpage
    console.log("Tracking pixel count:", count);
  }
  
  // Example usage: Send message to background script and expect a response
  sendMessageToBackground({ action: "updateCount" });
  
