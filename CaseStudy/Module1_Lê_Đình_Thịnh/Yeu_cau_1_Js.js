
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
// function edit() {
//     let displayName = document.getElementById("displayName").value;
//     document.getElementById("name").innerText = displayName;
//     let displaycmnd = document.getElementById("displaycmnd").value;
//     document.getElementById("cmnd").innerHTML = displaycmnd;
//     let displaydate = document.getElementById("displaydate").value;
//     document.getElementById("date").innerHTML = displaydate;
//     let displayemail = document.getElementById("displayemail").value;
//     document.getElementById("email").innerText = displayemail;
//     let displayaddress = document.getElementById("displayaddress").value;
//     document.getElementById("address").innerText = displayaddress;
//     let displaycustomer = document.getElementById("displaycustomer").value;
//     document.getElementById("customer").innerText = displaycustomer;
//     let displaysale = document.getElementById("displaysale").value;
//     document.getElementById("sale").innerText = displaysale;
//     let displaypeople = document.getElementById("displaypeople").value;
//     document.getElementById("people").innerText = displaypeople;
//     let displayrent = document.getElementById("displayrent").value;
//     document.getElementById("rent").innerText = displayrent;
//     let displayservice = document.getElementById("displayservice").value;
//     document.getElementById("service").innerText = displayservice;
//     let displayroom = document.getElementById("displayroom").value;
//     document.getElementById("room").innerText = displayroom;}
