function onClickService1BookBtn() {
    firstName = document.getElementById("s1firstNameInput");
    lastName = document.getElementById("s1lastNameInput");
    email = document.getElementById("s1emailInput");
    phone = document.getElementById("s1phoneInput");
    professional = document.getElementById("s1professionalDropdown");
    appointmentDate = document.getElementById("s1appointmentDateInput");
    appointmentTime = document.getElementById("s1appointmentTimeInput");
    cardFirstName = document.getElementById("s1cardFirstNameInput");
    cardLastName = document.getElementById("s1cardLastNameInput");
    cardNumber = document.getElementById("s1cardNumber");
    cardExpiry = document.getElementById("s1cardExpiryInput");
    cardCode = document.getElementById("s1cardCodeInput");

    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && phone.checkValidity() && professional.checkValidity() && appointmentDate.checkValidity() && appointmentTime.checkValidity() && cardFirstName.checkValidity() && cardLastName.checkValidity() && cardNumber.checkValidity() && cardExpiry.checkValidity() && cardCode.checkValidity()) {
        alert("Thank you for booking with us! \nWe will send you an email with your appointment details at the email address you provided. \nSee you soon! – The She Repairs Team");
        document.getElementById("closeModal1").click();
    }
}

function onClickService2BookBtn() {
    firstName = document.getElementById("s2firstNameInput");
    lastName = document.getElementById("s2lastNameInput");
    email = document.getElementById("s2emailInput");
    phone = document.getElementById("s2phoneInput");
    professional = document.getElementById("s2professionalDropdown");
    appointmentDate = document.getElementById("s2appointmentDateInput");
    appointmentTime = document.getElementById("s2appointmentTimeInput");
    cardFirstName = document.getElementById("s2cardFirstNameInput");
    cardLastName = document.getElementById("s2cardLastNameInput");
    cardNumber = document.getElementById("s2cardNumber");
    cardExpiry = document.getElementById("s2cardExpiryInput");
    cardCode = document.getElementById("s2cardCodeInput");

    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && phone.checkValidity() && professional.checkValidity() && appointmentDate.checkValidity() && appointmentTime.checkValidity() && cardFirstName.checkValidity() && cardLastName.checkValidity() && cardNumber.checkValidity() && cardExpiry.checkValidity() && cardCode.checkValidity()) {
        alert("Thank you for booking with us! \nWe will send you an email with your appointment details at the email address you provided. \nSee you soon! – The She Repairs Team");
        document.getElementById("closeModal2").click();
    }
}

function onClickService3BookBtn() {
    firstName = document.getElementById("s3firstNameInput");
    lastName = document.getElementById("s3lastNameInput");
    email = document.getElementById("s3emailInput");
    phone = document.getElementById("s3phoneInput");
    professional = document.getElementById("s3professionalDropdown");
    appointmentDate = document.getElementById("s3appointmentDateInput");
    appointmentTime = document.getElementById("s3appointmentTimeInput");
    cardFirstName = document.getElementById("s3cardFirstNameInput");
    cardLastName = document.getElementById("s3cardLastNameInput");
    cardNumber = document.getElementById("s3cardNumber");
    cardExpiry = document.getElementById("s3cardExpiryInput");
    cardCode = document.getElementById("s3cardCodeInput");

    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && phone.checkValidity() && professional.checkValidity() && appointmentDate.checkValidity() && appointmentTime.checkValidity() && cardFirstName.checkValidity() && cardLastName.checkValidity() && cardNumber.checkValidity() && cardExpiry.checkValidity() && cardCode.checkValidity()) {
        alert("Thank you for booking with us! \nWe will send you an email with your appointment details at the email address you provided. \nSee you soon! – The She Repairs Team");
        document.getElementById("closeModal3").click();
    }
}

$('[data-toggle="tooltip"]').tooltip()