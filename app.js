function handleFirstClass(isIncrease) {
    const firstClass = document.getElementById('first-class');
    const firstClassParse = parseInt(firstClass.value);
    let inputNewValue = firstClassParse;
    if (isIncrease == true) {
        inputNewValue = firstClassParse + 1;
    }
    if (isIncrease == false) {
        inputNewValue = firstClassParse - 1;
    }
    if (inputNewValue <= 0) {
        inputNewValue = 0
    }
    firstClass.value = inputNewValue;
    const firstClassTotal = document.getElementById('first-class-total');
    firstClassTotal.innerText = `Total = ${inputNewValue * 40}`;
    // call the total price function
    TotalPrice()
}

function handleEconomy(isIncrease) {
    const economyClass = document.getElementById('economy-class');
    const economyClassParse = parseInt(economyClass.value);
    let inputNewValue = economyClassParse;
    if (isIncrease == true) {
        inputNewValue = economyClassParse + 1;
    }
    if (isIncrease == false) {
        inputNewValue = economyClassParse - 1;
    }
    if (inputNewValue <= 0) {
        inputNewValue = 0;
    }
    economyClass.value = inputNewValue;
    const economyTotal = document.getElementById('economy-class-total');
    economyTotal.innerText = `Total = ${inputNewValue * 20}`;
    // call the total price function
    TotalPrice()
}


function TotalPrice() {
    const firstClass = document.getElementById('first-class');
    const firstClassParse = parseInt(firstClass.value);

    const economyClass = document.getElementById('economy-class');
    const economyClassParse = parseInt(economyClass.value);

    const total = firstClassParse * 40 + economyClassParse * 20;
    document.getElementById('sub-total').innerText = `$${total}`;

    const vat = total * .1;
    document.getElementById('vat').innerText = `$${vat}`;

    document.getElementById('grand-total').innerText = `$${total + vat}`
}


document.getElementById('book-btn').addEventListener('click', function () {
    document.getElementById('home').style.display = 'none'
    document.getElementById('ticket').style.display = "block"

    const departure = document.getElementById('departure');
    document.getElementById('show-departure').innerText = `Departure:  ${departure.value}`;

    const destination = document.getElementById('destination');
    document.getElementById('show-destination').innerText = `Destination: ${destination.value}`;

    const date = document.getElementById('date')
    document.getElementById('show-date').innerText = `Date: ${date.value}`

    const grandTotal = document.getElementById('grand-total');
    document.getElementById("show-total").innerText = `Total Price: ${grandTotal.innerText}`;

    const firstClass = document.getElementById('first-class');
    const firstClassParse = parseInt(firstClass.value)
    if (firstClass) {
        document.getElementById("ticketClass1").innerText = `First-Class-Ticket: ${firstClass.value} X 40 = $${firstClassParse * 40}`;
    }

    const economy = document.getElementById('economy-class');
    const economyParse = parseInt(economy.value)
    if (economy) {
        document.getElementById('ticketClass2').innerText =
            `Economy-Ticket: ${economy.value} x 20 = $${economyParse * 20}`;
    }

    document.getElementById('total-ticket').innerText = `Total Ticket = ${firstClassParse + economyParse}`
})