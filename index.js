let myWindow;

window.addEventListener('load', function () {
    myWindow = window.open("page.html", "myWindow", "width=400, height=200 ");
});


let y = 0;
let dy = 20;

let intervalId = window.setInterval(bounce, 100);

document.getElementById('stop').addEventListener('click', function () {
    clearInterval(intervalId);
});

function bounce() {
    // If the user closed the window, stop the animation.
    if (myWindow.closed) {
        clearInterval(intervalId);
        return;
    }

    // Check if we have reached the bottom or top edge.
    if ((y + dy >= (window.innerHeight)) || (y + dy <= 0)) dy = -dy;

    // Update the current position of the window.
    y += dy;

    // Finally, move the window to the new position.
    myWindow.moveTo(0, y);
}
