
function validateForm(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let dob = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let pincode = document.getElementById('pincode').value;


    if (name && dob && email && address && city && pincode) {
        let message = "Name: " + name + "\n";
        message += "Date of Birth: " + dob + "\n";
        message += "Email Address: " + email + "\n";
        message += "Address: " + address + "\n";
        message += "City: " + city + "\n";
        message += "Pincode: " + pincode + "\n";
        alert("Form Submitted Successfully \n" + message);
        document.getElementById('myForm').reset();
        return true;
    } else {
        alert("Please fill all the fields");
        return false;
    }
}

