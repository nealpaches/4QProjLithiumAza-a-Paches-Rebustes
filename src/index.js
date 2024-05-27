function onBlur(input) {
    if (input.value === '') {
        input.style.borderColor = '#820610';
    } 
    else {
        input.style.borderColor = '#df9b2e';
    }
}
function onFocus(input) {
    input.style.borderColor = '#edbc6d';
}
function clearAll() {
    if(confirm("Would you like to clear all parts of this form?")) {
        document.getElementById("output").innerHTML = ""; 
    }
}