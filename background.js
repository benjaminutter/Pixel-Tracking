let tpcount = 0;
// Set up the web request listener outside of the message listener
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const pixelPattern = /(pixel|beacon|tracker|analytics|gif|ad|webbug|transparent|1x1|clear)/i;
    
    // Check if the request is for an image
    if (details.type === 'image') {
      // Check if the image source (src) matches the tracking pixel pattern
      if (pixelPattern.test(details.url)) {
        // Detect the tracking pixel
        console.log('Tracking pixel detected:', details.url);
        tpcount++;
        // Optionally, you can block the request here
        return { cancel: true };
      }
    }
  },
  { urls: ["<all_urls>"] }
);

// Set up the message listener separately
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === "startWebRequestInterception") {
    // You can optionally handle this message here
    console.log("Received message to start web request interception");
  } else if (message.action === "getTrackingPixelCount") {
    // Your logic to count tracking pixels and send the count back to the popup
    // For example:
    const count = countTrackingPixels();
    sendResponse({ count: count });
  }
});

// Function to count tracking pixels
function countTrackingPixels() {
  return tpcount;
}
