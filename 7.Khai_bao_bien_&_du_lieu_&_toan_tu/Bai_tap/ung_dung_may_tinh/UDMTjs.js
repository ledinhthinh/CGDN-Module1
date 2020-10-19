let ketqua;
function tinh1() {
    let N1 = parseInt(document.getElementById('Nhap1').value);
    let N2 = parseInt(document.getElementById('Nhap2').value);
    ketqua = N1 + N2;
    document.getElementById("ketqua").innerText = ketqua;
}
function tinh2() {
    let N1 = parseInt(document.getElementById('Nhap1').value);
    let N2 = parseInt(document.getElementById('Nhap2').value);
    ketqua = N1 - N2;
    document.getElementById("ketqua").innerText = ketqua;
}
function tinh3() {
    let N1 = parseInt(document.getElementById('Nhap1').value);
    let N2 = parseInt(document.getElementById('Nhap2').value);
    ketqua = N1 * N2;
    document.getElementById("ketqua").innerText = ketqua;
}
function tinh4() {
    let N1 = parseInt(document.getElementById('Nhap1').value);
    let N2 = parseInt(document.getElementById('Nhap2').value);
    ketqua = N1 / N2;
    document.getElementById("ketqua").innerText = ketqua;
}