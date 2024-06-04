window.onload = function() {
    const roomImage = document.getElementById('roomImage');
    const hotelName = document.getElementById('hotelName');
    const roomType = document.getElementById('roomType');
    const guestName = document.getElementById('guestName');
    const guestEmail = document.getElementById('guestEmail');
    const guestMobile = document.getElementById('guestMobile');
    const checkInDate = document.getElementById('checkInDate');
    const checkInTime = document.getElementById('checkInTime');
    const checkOutDate = document.getElementById('checkOutDate');
    const checkOutTime = document.getElementById('checkOutTime');
    const guests = document.getElementById('guests');
    const roomRates = document.getElementById('roomRates');
    const paymentMethod = document.getElementById('paymentMethodValue');
  
    roomImage.src = localStorage.getItem('roomImage') || '';
    hotelName.innerText = localStorage.getItem('hotelName') || '';
    roomType.innerText = localStorage.getItem('roomType') || '';
    guestName.innerText = `${localStorage.getItem('firstname')} ${localStorage.getItem('lastname')}`;
    guestEmail.innerText = localStorage.getItem('email') || '';
    guestMobile.innerText = localStorage.getItem('mobile') || '';
    checkInDate.innerText = localStorage.getItem('checkInDate') || '';
    checkInTime.innerText = localStorage.getItem('checkInTime') || '';
    checkOutDate.innerText = localStorage.getItem('checkOutDate') || '';
    checkOutTime.innerText = localStorage.getItem('checkOutTime') || '';
    guests.innerText = localStorage.getItem('guests') || '';
    roomRates.innerText = localStorage.getItem('roomRates') || '';
    const paymentOption = localStorage.getItem('paymentMethod');
    paymentMethod.innerText = paymentOption === 'card' ? 'Credit Card' : 'Gcash';

    setRoomImage()
    alert("Thank you for using Resortify! Hope you enjoy your stay!")
  };
  function setRoomImage() {
    const priceRange = localStorage.getItem('roomRates');
    let numberOfGuests = parseInt(localStorage.getItem('guests'));

    if (numberOfGuests > 10) {
        numberOfGuests = 10;
    }

    let roomImage = "";
    let roomType = "";
    let hotelName = "";

    if (priceRange === "1000-2999") {
        if (numberOfGuests === 1) {
            roomImage = "../img/single-room.jpg";
            roomType = "Single Room";
            hotelName = "Go Hotels Iloilo";
        } else if (numberOfGuests <= 4) {
            roomImage = "../img/double-room.jpg";
            roomType = "Double Room";
            hotelName = "Tune Hotel - Makati";
        } else if (numberOfGuests <= 6) {
            roomImage = "../img/triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "City Garden Hotel Makati";
        } else {
            roomImage = "../img/deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "Bayfront Hotel Cebu";
        }
    } else if (priceRange === "3000-4999") {
        if (numberOfGuests === 1) {
            roomImage = "../img/single-room.jpg";
            roomType = "Single Room";
            hotelName = "Discovery Suites Ortigas";
        } else if (numberOfGuests <= 4) {
            roomImage = "../img/double-room.jpg";
            roomType = "Double Room";
            hotelName = "The Linden Suites Manila";
        } else if (numberOfGuests <= 6) {
            roomImage = "../img/triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "Golden Phoenix Hotel Manila";
        } else {
            roomImage = "../img/deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "The Heritage Hotel Manila";
        }
    } else if (priceRange === "5000-6999") {
        if (numberOfGuests === 1) {
            roomImage = "../img/single-room.jpg";
            roomType = "Single Room";
            hotelName = "New World Makati Hotel";
        } else if (numberOfGuests <= 4) {
            roomImage = "../img/double-room.jpg";
            roomType = "Double Room";
            hotelName = "The Farm at San Benito";
        } else if (numberOfGuests <= 6) {
            roomImage = "../img/triple-room.jpg";
            roomType = "Triple Room";
            hotelName = "Shangri-La Mactan Resort & Spa";
        } else {
            roomImage = "../img/deluxe-room.jpg";
            roomType = "Deluxe Room";
            hotelName = "The Peninsula Manila";
        }
    }

    document.getElementById('roomImage').src = roomImage;
    document.getElementById('roomType').innerText = roomType;
    document.getElementById('hotelName').innerText = hotelName;
}


  
