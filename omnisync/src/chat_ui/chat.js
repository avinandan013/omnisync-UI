const roomButtons = document.querySelectorAll(".list-of-rooms button");
const chatWindow = document.querySelector(".chat-window");
const chatHeader = document.querySelector(".chat-header");

roomButtons.forEach(function(button) {
    console.log(button)
    button.addEventListener("click", function() {
        chatWindow.style.display = "flex";
        chatHeader.textContent = button.textContent;
    });
});