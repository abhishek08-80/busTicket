let checkboxes = document.querySelectorAll('.busSeats input[type="checkbox"]');
let ticketNo = []

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const checkedCheckboxes = document.querySelectorAll('.busSeats input[type="checkbox"]:checked');
        checkedCheckboxes.forEach(item => {
            ticketNo.push(item?.value)
        })

        checkboxes.forEach(checkField => {

            if (checkedCheckboxes.length >= 5) {
                checkField.disabled = true;
            } else {
                checkField.disabled = false;
            }
        });
    });
});

function generateBill() {
    const arrVal  = new Set(ticketNo)
    const no = [...arrVal]
    window.location.href = `invoice.html?seatValue=${no.length}&seatno=${no.join()}`;
}
