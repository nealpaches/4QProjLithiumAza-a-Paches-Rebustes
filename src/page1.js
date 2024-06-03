function togglePaymentDetails(paymentMethod) {
    var cardDetails = document.getElementById('card-details');
    var gcashDetails = document.getElementById('gcash-details');

    if (paymentMethod === 'card') {
        cardDetails.style.display = 'block';
        gcashDetails.style.display = 'none';
    } else if (paymentMethod === 'gcash') {
        cardDetails.style.display = 'none';
        gcashDetails.style.display = 'block';
    }
}

function fillFormFields() {
    document.getElementById('checkInDate').value = localStorage.getItem('checkInDate') || '';
    document.getElementById('checkInTime').value = localStorage.getItem('checkInTime') || '';
    document.getElementById('checkOutDate').value = localStorage.getItem('checkOutDate') || '';
    document.getElementById('checkOutTime').value = localStorage.getItem('checkOutTime') || '';
    document.getElementById('guests').value = localStorage.getItem('guests') || '';
    document.getElementById('roomRates').value = localStorage.getItem('roomRates') || '';
}

window.onload = function() {
    fillFormFields();
};



