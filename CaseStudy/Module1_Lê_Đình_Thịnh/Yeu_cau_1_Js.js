function display() {
     let name = document.getElementById("name").value;
    document.getElementById("displayName").innerText = name;
    document.getElementById("name").value = "";
    let cmnd = document.getElementById("cmnd").value;
    document.getElementById("displaycmnd").innerHTML = cmnd;
    document.getElementById("cmnd").value = "";
     let date = document.getElementById("date").value;
     document.getElementById("displaydate").innerHTML = date;
    document.getElementById("date").value = "";
     let email = document.getElementById("email").value;
     document.getElementById("displayemail").innerText = email;
    document.getElementById("email").value = "";
     let address = document.getElementById("address").value;
     document.getElementById("displayaddress").innerText = address;
    document.getElementById("address").value = "";
     let customer = document.getElementById("customer").value;
     document.getElementById("displaycustomer").innerText = customer;
    document.getElementById("customer").value = "";
     let sale = document.getElementById("sale").value;
     document.getElementById("displaysale").innerText = sale;
    document.getElementById("sale").value = "";
    let people = document.getElementById("people").value;
    document.getElementById("displaypeople").innerText = people;
    document.getElementById("people").value = "";
    let rent = document.getElementById("rent").value;
    document.getElementById("displayrent").innerText = rent;
    document.getElementById("rent").value = "";
    let service = document.getElementById("service").value;
    document.getElementById("displayservice").innerText = service;
    document.getElementById("service").value = "";
    let room = document.getElementById("room").value;
    document.getElementById("displayroom").innerText = room;
    document.getElementById("room").value = "";}
//giảm giá theo địa chỉ
let saleAdd;
switch (address.value) {
    case "Đà Nẵng":
        saleAdd = 20;
        break;
    case "Huế":
        saleAdd = 10;
        break;
    case "Quảng Nam":
        saleAdd = 5;
        break;
    default:
        saleAdd = 0;
}
//giảm giá theo số ngày
let saleRent;
if (rent.value >7) {
    saleRent = 30;
} else if (rent.value >5) {
    saleRent = 20;
} else if (rent.value >2) {
    saleRent = 10;
} else {
    saleRent = 0;
}
//giảm giá theo loại khách hàng
let saleCus;
switch (service.value) {
    case "Diamond":
        saleCus = 15;
        break;
    case "Platinum":
        saleCus = 10;
        break;
    case "Gold":
        saleCus = 5;
        break;
    case "Silver":
        saleCus = 2;
        break;
    case "Member":
        saleCus = 0;
        break;
}
let allGia;
allGia = saleRent + saleCus + saleAdd;
let sl = parseInt(sale.value);
let rentD = parseInt(rent.value);
let outPay;
switch (service.value) {
    case "Villa" :
        outPay = 500 * rentD * ( 1 - sl/100) - allGia;
        break;
    case "House" :
        outPay = 300 * rentD * ( 1 - sl/100) - allGia;
        break;
    case "Room" :
        outPay = 100 * rentD * ( 1 - sl/100) - allGia;
        break;
}
displayPay.innerText = outPay;
function edit() {
    let displayName = document.getElementById("displayName").textContent;
    document.getElementById("name").value = displayName;
    let displaycmnd = document.getElementById("displaycmnd").textContent;
     document.getElementById("cmnd").value = displaycmnd;
     let displaydate = document.getElementById("displaydate").textContent;
     document.getElementById("date").value = displaydate;
     let displayemail = document.getElementById("displayemail").textContent;
     document.getElementById("email").value = displayemail;
     let displayaddress = document.getElementById("displayaddress").textContent;
     document.getElementById("address").value = displayaddress;
     let displaycustomer = document.getElementById("displaycustomer").textContent;
    document.getElementById("customer").value = displaycustomer;
     let displaysale = document.getElementById("displaysale").textContent;
     document.getElementById("sale").value = displaysale;
     let displaypeople = document.getElementById("displaypeople").textContent;
     document.getElementById("people").value = displaypeople;
     let displayrent = document.getElementById("displayrent").textContent;
     document.getElementById("rent").value = displayrent;
     let displayservice = document.getElementById("displayservice").textContent;
     document.getElementById("service").value = displayservice;
     let displayroom = document.getElementById("displayroom").textContent;
     document.getElementById("room").value = displayroom;
}