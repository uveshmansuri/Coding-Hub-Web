document.addEventListener("copy", function (event) {
    // Set the clipboard data
    event.clipboardData.setData("text/plain", "© By Coding Hub. All Rights Reserved");

    // Prevent the default copy action
    event.preventDefault();
});