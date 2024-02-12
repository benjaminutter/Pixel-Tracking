chrome.runtime.sendMessage({ action: "startWebRequestInterception" });
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === "showNotification") {
      // Show notification to the user
      chrome.notifications.create({
        type: 'basic',
        iconUrl: '/Users/benutter/Downloads/tracking-pixel-definition.jpg', // Replace 'icon.png' with your extension icon
        title: 'Tracking Pixel Detected',
        message: 'A tracking pixel was detected at: ' + message.pixelUrl
      });
    }
  });