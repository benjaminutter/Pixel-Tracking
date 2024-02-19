document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the current setting from storage
    chrome.storage.sync.get('pixelTrackingEnabled', function(data) {
        // Set the toggle button state based on the stored setting
        document.getElementById('pixelTrackingToggle').checked = data.pixelTrackingEnabled || false;
    });

    // Add event listener for toggle button change
    document.getElementById('pixelTrackingToggle').addEventListener('change', function() {
        // Save the new setting to storage
        chrome.storage.sync.set({ pixelTrackingEnabled: this.checked });
    });
});