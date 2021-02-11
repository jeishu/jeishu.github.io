// Variables
const copyBtn = document.querySelector("#copy");
const menuDotsBtn = document.querySelector(".menu-container");
const dotsBtn = menuDotsBtn.getElementsByClassName("menu-dots");

// Functions
function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

// Event Listeners
copyBtn.onclick = function() {
    Clipboard_CopyTo('jeremy.zhu@utexas.edu');
}

// Active Page

// Horizontal Scroll
$(".horizontal-container").mousewheel(function(e) {
    console.log(e.deltaX, e.deltaY, e.deltaFactor);
});

$(document).ready(function() {

    $('html, body, *').mousewheel(function(e, delta) {     
        if (window.innerWidth >= 992) {
            // multiplying by 40 is the sensitivity, 
            // increase to scroll faster.
            this.scrollLeft -= (delta * 800);
            e.preventDefault();
            console.log(window.innerWidth);
        }   
    });
});