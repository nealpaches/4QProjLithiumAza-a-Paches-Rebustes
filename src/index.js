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

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('checkInDate', document.getElementById('checkInDate').value);
    localStorage.setItem('checkInTime', document.getElementById('checkInTime').value);
    localStorage.setItem('checkOutDate', document.getElementById('checkOutDate').value);
    localStorage.setItem('checkOutTime', document.getElementById('checkOutTime').value);
    localStorage.setItem('guests', document.getElementById('guests').value);
    localStorage.setItem('roomRates', document.getElementById('roomRates').value);
    window.location.href = 'page1.html';
});


function redirect(){
    window.open("../htdocs/page1.html")
}
