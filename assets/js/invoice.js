
let searchParams = new URLSearchParams(window.location.search);
let seatValue = searchParams.get('seatValue')
let seatno = searchParams.get('seatno')

document.getElementById("seatValue").innerHTML = seatValue;
document.getElementById("seatno").innerHTML = seatno;
