document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for button click
    document.getElementById('toggleButton').addEventListener('click', function() {
        // Send message to background script to toggle feature
        chrome.runtime.sendMessage({ action: "toggleFeature" });
    });

    // Send a message to the background script to request the count of tracking pixels
    chrome.runtime.sendMessage({ action: "getTrackingPixelCount" }, function(response) {
        // Update the HTML content of the popup with the count of tracking pixels
        document.getElementById("pixelCount").innerText = response.count;
    });
});
