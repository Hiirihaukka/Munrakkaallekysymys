document.addEventListener("DOMContentLoaded", function() {
    const message = document.getElementById("message");
    const valentineImage = document.getElementById("valentineImage");

    valentineImage.addEventListener("mouseover", function() {
        message.textContent = "Hovering over the image!";
    });

    valentineImage.addEventListener("mouseout", function() {
        message.textContent = "Express your love and make this day memorable!";
    });
});
