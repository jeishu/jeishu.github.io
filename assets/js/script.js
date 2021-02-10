function Clipboard_CopyTo(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}
  
document.querySelector('#copy').onclick = function() {
    Clipboard_CopyTo('jeremy.zhu@utexas.edu');
}