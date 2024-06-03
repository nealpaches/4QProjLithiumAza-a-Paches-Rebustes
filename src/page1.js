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
    setRoomImage();
}

function setRoomImage() {
    const priceRange = localStorage.getItem('roomRates');
    let numberOfGuests = parseInt(localStorage.getItem('guests'));

    if (numberOfGuests > 10) {
        numberOfGuests = 10;
    }

    let roomImage = "";
    let roomType = "";

    if (priceRange === "1000-2999") {
        if (numberOfGuests === 1) {
            roomImage = "single-room.jpg";
            roomType = "Single Room";
            hotelName = "Go Hotels Iloilo"
        } else if (numberOfGuests <= 4) {
            roomImage = "double-room.jpg";
            roomType = "Double Room";
            hotelName = "Tune Hotel - Makati"
        } else if (numberOfGuests <= 6) {
            roomImage = "triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "City Garden Hotel Makati"
        } else {
            roomImage = "deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "Bayfront Hotel Cebu"
        }
    } else if (priceRange === "3000-4999") {
        if (numberOfGuests === 1) {
            roomImage = "single-room.jpg";
            roomType = "Single Room";
            hotelName = "Discovery Suites Ortigas"
        } else if (numberOfGuests <= 4) {
            roomImage = "double-room.jpg";
            roomType = "Double Room";
            hotelName = "The Linden Suites Manila"
        } else if (numberOfGuests <= 6) {
            roomImage = "triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "Golden Phoenix Hotel Manila"
        } else {
            roomImage = "deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "The Heritage Hotel Manila"
        }
    } else if (priceRange === "5000-6999") {
        if (numberOfGuests === 1) {
            roomImage = "single-room.jpg";
            roomType = "Single Room";
            hotelName = "New World Makati Hotel"
        } else if (numberOfGuests <= 4) {
            roomImage = "double-room.jpg";
            roomType = "Double Room";
            hotelName = "The Farm at San Benito"
        } else if (numberOfGuests <= 6) {
            roomImage = "triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "Shangri-La Mactan Resort & Spa"
        } else {
            roomImage = "deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "The Peninsula Manila"
        }
    }

    document.getElementById('roomImage').src = "../img/" + roomImage;
    document.getElementById('roomType').innerText = roomType;
    document.getElementById('hotelName').innerText = hotelName;
}

window.onload = function() {
    fillFormFields();
};
