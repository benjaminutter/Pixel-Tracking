document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for button click
    document.getElementById('toggleButton').addEventListener('click', function() {
        // Send message to background script to toggle feature
        chrome.runtime.sendMessage({ action: "toggleFeature" });
    });
});
