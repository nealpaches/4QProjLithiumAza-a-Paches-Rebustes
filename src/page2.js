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
  };
  