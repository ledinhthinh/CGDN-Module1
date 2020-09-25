
function display() {
    let name = document.getElementById("name").value;
    document.getElementById("displayName").innerText = name;
    let cmnd = document.getElementById("cmnd").value;
    document.getElementById("displaycmnd").innerHTML = cmnd;
     let date = document.getElementById("date").value;
     document.getElementById("displaydate").innerHTML = date;
     let email = document.getElementById("email").value;
     document.getElementById("displayemail").innerText = email;
     let address = document.getElementById("address").value;
     document.getElementById("displayaddress").innerText = address;
     let customer = document.getElementById("customer").value;
     document.getElementById("displaycustomer").innerText = customer;
     let sale = document.getElementById("sale").value;
     document.getElementById("displaysale").innerText = sale;
    let people = document.getElementById("people").value;
    document.getElementById("displaypeople").innerText = people;
    let rent = document.getElementById("rent").value;
    document.getElementById("displayrent").innerText = rent;
    let service = document.getElementById("service").value;
    document.getElementById("displayservice").innerText = service;
    let room = document.getElementById("room").value;
    document.getElementById("displayroom").innerText = room;
    let tottalPay;
    switch (k) {
        case ("Villa"):
            tottalPay = 500 * j *(1-g / 100);
            break;
        case ("House"):
            tottalPay = 300 * j *(1-g / 100);
            break;
        case ("Room"):
            tottalPay = 100 * j *(1-g / 100);
            break;
    }document.getElementById("displaypay").innerHTML = tottalPay + ' $ ';
}