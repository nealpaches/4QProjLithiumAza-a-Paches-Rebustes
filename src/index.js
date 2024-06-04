function validateForm() {
    var isValid = true;
    var checkInDate = document.getElementById('checkInDate').value;
    var checkOutDate = document.getElementById('checkOutDate').value;
  
    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      alert("Check-out date must be after check-in date.");
      document.getElementById('checkOutDate').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('checkOutDate').classList.remove('error');
      document.getElementById('bookingForm').addEventListener('submit', function(event) { 
        event.preventDefault();
        localStorage.setItem('checkInDate', document.getElementById('checkInDate').value);
        localStorage.setItem('checkInTime', document.getElementById('checkInTime').value);
        localStorage.setItem('checkOutDate', document.getElementById('checkOutDate').value);
        localStorage.setItem('checkOutTime', document.getElementById('checkOutTime').value);
        localStorage.setItem('guests', document.getElementById('guests').value);
        localStorage.setItem('roomRates', document.getElementById('roomRates').value);
        window.location.href = '../htdocs/page1.html';
     });
        window.open("../htdocs/page1.html")
    }
    
    return isValid;
  }
  
  function clearAll() {
    if (confirm("Would you like to clear all parts of this form?")) {
      document.getElementById("bookingForm").reset();
    }
  }

  function onBlur(input) {
    if (input.value === '') {
        input.style.border = '2px solid #ffb008';
    } 
    else {
        input.style.border = '2px solid #108c93';
    }
}
function onFocus(input) {
    input.style.border = '2px solid #108c93'; 
}
  