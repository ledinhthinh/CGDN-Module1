function tinh() {
    let nhap = parseInt(document.getElementById('Amount').value);
    let tinh1 = (document.getElementById("From").value);
    let tinh2 = (document.getElementById("To").value);
    let xuat;
    if (tinh1 === "VND" && tinh2 === "USD") {
        xuat = nhap / 23000;
    } else if (tinh1 === "USD" && tinh2 === "VND") {
        xuat = nhap * 23000;
    } else xuat = nhap;
    document.getElementById("xuat").innerText = xuat;
}