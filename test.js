document.addEventListener("copy", function (event) {
    // Set the clipboard data
    event.clipboardData.setData("text/plain", "© By Coding Hub. All Rights Reserved");

    // Prevent the default copy action
    event.preventDefault();
});

document.addEventListener("mousedown",function(event){
    if(event.button===2){
        event.preventDefault();
    }
    event.clipboardData.setData("text/plain", "© By Coding Hub. All Rights Reserved");
});

document.addEventListener("touchstart",function(event){
    event.preventDefault(); 
});