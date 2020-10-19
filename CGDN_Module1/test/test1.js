let arrayName = [];
let arrayIDcard = [];
let arrayBirthday = [];
let arrayEmail = [];
let arrayAddress = [];
let arraySpecialCustomer = [];
let arrayNumOfPerson = [];
let arrayRentDay = [];
let arraySpecialService = [];
let arraySpacialRoom = [];

function displayMainMenu() {
    document.body.innerHTML ="";
    let mainMenu = '<input type="button" name="Add" value="Thêm khách hàng" onclick="addNewCustomer()"><br><br>' +
        '<input type="button" name="Display" value="Hiển thị khách hàng" onclick="displayInformationCustomer()"><br><br>' +
        '<input type="button" name="Edit" value="Chỉnh sửa thông tin khách hàng" onclick="editInformationCustomer()"><br><br>' +
        '<input type="button" name="Delete" value="Xóa khách hàng" onclick="deleteCustomer()"><br><br>'

    document.body.innerHTML = mainMenu
}
function addNewCustomer() {
    document.body.innerHTML ="";
    let newCustotmer = '<table><tr><th colspan="2"><h2>Thông tin khách hàng</h2></th></tr>' +
        '<tr><td>Ho và tên:</td><td><input type="text" name="name" id="name"></td></tr>' +
        '<tr><td>Số CMND</td><td><input type="text" name="IDcard" id="IDcard"></td></tr>' +
        '<tr><td>Ngày tháng năm sinh:</td><td><input type="date" name="birthday" id="birthday"></td></tr>' +
        '<tr><td>Email:</td><td><input type="text" name="email" id="email"></td></tr>' +
        '<tr><td>Địa chỉ:</td><td><input type="text" name="address" id="address"></td></tr>' +
        '<tr><td>Loại customer:</td><td><select id="specialCustomer"><option>Diamond</option><option>Platinum</option>' +
        '<option>Gold</option><option>Silver</option><option>Member</option></select></td></tr>' +
        '<tr><td>Số người đi kèm:</td><td><input type="text" name="numOfPerson" id="numOfPerson"></td></tr>' +
        '<tr><td>Số ngày thuê:</td><td><input type="text" name="rentDay" id="rentDay"></td></tr>' +
        '<tr><td>Loại dịch vụ:</td><td><select id="specialService"><option>Villa</option><option>House</option><option>Room</option></select></td></tr>' +
        '<tr><td>Loại phòng thuê:</td><td><select id="specialRoom"><option>Vip</option><option>Business</option><option>Normal</option></select></td></tr>' +
        '<tr><td colspan="2" style="text-align: center"><input type="button" name="submit" value="Xác nhân" onclick="confirmCustomer()">' +
        '<input type="reset" name="reset" value="Nhập lại"><input type="button" name="return" value="Quay lại menu" onclick="displayMainMenu()"></td></tr></table>';

    document.body.innerHTML = newCustotmer
}
function confirmCustomer() {
    let name = document.getElementById('name').value;
    let IDcard = document.getElementById('IDcard').value;
    let birthDay = document.getElementById('birthday').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let specialCustomer = document.getElementById('specialCustomer').value;
    let numOfPerson = document.getElementById('numOfPerson').value;
    let rentDay = document.getElementById('rentDay').value;
    let specialService = document.getElementById('specialService').value;
    let specialRoom = document.getElementById('specialRoom').value;
    if (check(rentDay) && checkIDcard(IDcard) && checkEmail(email) && check(numOfPerson)) {
        let confirmCustomer = '<table><tr><th colspan="2"><h2>Thông tin khách hàng</h2></th></tr>'+
            '<tr><td>Họ và tên:</td><td><p id="name">'+edit(name)+'</p></td></tr>' +
            '<tr><td>Số CMND:</td><td><p id="IDcard">'+IDcard+'</p></td></tr>' +
            '<tr><td>Ngày tháng năm sinh:</td><td><p id="birthday">'+birthDay+'</p></td></tr>' +
            '<tr><td>Email</td><td><p id="email">'+email+'</p></td></tr>' +
            '<tr><td>Địa chỉ</td><td><p id="address">'+edit(address)+'</p></td></tr>' +
            '<tr><td>Loại Yeu_cau_6_task_1_Js</td><td><p id="specialCustomer">'+specialCustomer+'</p></td></tr>' +
            '<tr><td>Số người đi kèm</td><td><p id="numOfPerson">'+numOfPerson+'</p></td></tr>' +
            '<tr><td>Số ngày thuê</td><td><p id="rentDay">'+rentDay+'</p></td></tr>' +
            '<tr><td>Loại dịch vụ</td><td><p id="specialService">'+specialService+'</p></td></tr>' +
            '<tr><td>Loại phòng thuê</td><td><p id="specialRoom">'+specialRoom+'</p></td></tr>' +
            '<tr><td><input type="button" name="submit" value="Xác nhận" onclick="pushCustomer()">' +
            '<input type="button" name="edit" value="Sửa lại" onclick="addNewCustomer()"> </td></tr></table>';
        document.body.innerHTML = confirmCustomer
    }
}
function checkEmail(email) {
    let first = ''; // nhận giá trị @
    let second = ''; // nhận giá trị .
    let i=0;
    let checkEmail;
    while (i < email.length) {
        if (email[i] === '@') {
            if (first !== ''){
                checkEmail = false;
                break;
            }else {
                first = i;
            }
        } if (email[i] === '.') {
            second = i;
        } i++;
    } if (first === 0 || second === (email.length - 1) || first === '' || second === '' || first > second || checkEmail === false) {
        alert('email sai');
    } else {
        checkEmail = true;
    }
    return checkEmail;
}
function checkIDcard(IDcard){
    let i = 0;
    let checkIDcard;
    if (IDcard.length !== 8) {
        checkIDcard = false;
    } else {
        while (i < IDcard.length) {
            if (IDcard[i] >=0 && IDcard[i] <= 9) {
                checkIDcard = true;
                i++;
            } else {
                checkIDcard = false;
                break;
            }
        }
    }
    if (checkIDcard) {
        checkIDcard = true;
    } else {
        alert('Sai CMND');
    }
    return checkIDcard;
}
function check(num) {
    let i = 0;
    let checkNumber = false;
    while (i < num.length) {
        if (num[i] >=0 && num[i] <= 9) {
            checkNumber = true;
            i++;
        } else {
            checkNumber = false;
            break;
        }
    } if (checkNumber) {
        checkNumber = true;
    } else {
        alert('Sai đinh dạng');
    }
    return checkNumber;
}
function edit(name) {
    let displayName = '';
    let inputName = name.trim();
    for (let n = 0; n < inputName.length; n++) {
        if (n === 0) {
            displayName += inputName[n].toUpperCase();
        } else {
            if (inputName[n-1] === " ") {
                if (inputName[n] === " ") {
                    continue;
                } else {
                    displayName += inputName[n].toUpperCase();
                }
            } else {
                displayName += inputName[n].toLowerCase();
            }
        }
    }
    return displayName;
}
function pushCustomer(){
    let name = document.getElementById('name').textContent;
    let IDcard = document.getElementById('IDcard').textContent;
    let birthday = document.getElementById('birthday').textContent;
    let email = document.getElementById('email').textContent;
    let address = document.getElementById('address').textContent;
    let specialCustomer = document.getElementById('specialCustomer').textContent;
    let numOfPerson = document.getElementById('numOfPerson').textContent;
    let rentDay = document.getElementById('rentDay').textContent;
    let specialService = document.getElementById('specialService').textContent;
    let specialRoom = document.getElementById('specialRoom').textContent;
    let editName = edit(name);
    let editAddress = edit(address);
    arrayName.push(editName);
    arrayIDcard.push(IDcard);
    arrayBirthday.push(birthday);
    arrayEmail.push(email);
    arrayAddress.push(editAddress);
    arraySpecialCustomer.push(specialCustomer);
    arrayNumOfPerson.push(numOfPerson);
    arrayRentDay.push(rentDay);
    arraySpecialService.push(specialService);
    arraySpacialRoom.push(specialRoom);
    displayMainMenu()
}
function displayInformationCustomer(){
    let choosesCustomer = prompt()
    for (let i = 0; i<arrayName.length; i++){
        if (choosesCustomer == arrayName[i]){
            let confirmCustomer = '<table><tr><th colspan="2"><h2>Thông tin khách hàng</h2></th></tr>'+
                '<tr><td>Họ và tên:</td><td><p id="name">'+arrayName[i]+'</p></td></tr>' +
                '<tr><td>Số CMND:</td><td><p id="IDcard">'+arrayIDcard[i]+'</p></td></tr>' +
                '<tr><td>Ngày tháng năm sinh:</td><td><p id="birthday">'+arrayBirthday[i]+'</p></td></tr>' +
                '<tr><td>Email</td><td><p id="email">'+arrayEmail[i]+'</p></td></tr>' +
                '<tr><td>Địa chỉ</td><td><p id="address">'+arrayAddress[i]+'</p></td></tr>' +
                '<tr><td>Loại Yeu_cau_6_task_1_Js</td><td><p id="specialCustomer">'+arraySpecialCustomer[i]+'</p></td></tr>' +
                '<tr><td>Số người đi kèm</td><td><p id="numOfPerson">'+arrayNumOfPerson[i]+'</p></td></tr>' +
                '<tr><td>Số ngày thuê</td><td><p id="rentDay">'+arrayRentDay[i]+'</p></td></tr>' +
                '<tr><td>Loại dịch vụ</td><td><p id="specialService">'+arraySpecialService[i]+'</p></td></tr>' +
                '<tr><td>Loại phòng thuê</td><td><p id="specialRoom">'+arraySpacialRoom[i]+'</p></td></tr>' +
                '<tr><td><input type="button" name="return" value="Trang chủ" onclick="displayMainMenu()"</td></tr></table>'
            document.body.innerHTML = confirmCustomer
        }
    }
}
function editInformationCustomer() {
    let choosesCustomer = prompt();
    for (let i=0; i<arrayName.length; i++) {
        if (choosesCustomer == arrayName[i]) {
            let editCustomer = '<table><tr><th colspan="2"><h2>Thông tin khách hàng</h2></th></tr>' +
                '<tr><td>Ho và tên:</td><td><input type="text" name="name" id="name" value="'+arrayName[i]+'"></td></tr>' +
                '<tr><td>Số CMND</td><td><input type="text" name="IDcard" id="IDcard" value="'+arrayIDcard[i]+'"></td></tr>' +
                '<tr><td>Ngày tháng năm sinh:</td><td><input type="date" name="birthday" id="birthday" value="'+arrayBirthday[i]+'"></td></tr>' +
                '<tr><td>Email:</td><td><input type="text" name="email" id="email" value="'+arrayEmail[i]+'"></td></tr>' +
                '<tr><td>Địa chỉ:</td><td><input type="text" name="address" id="address" value="'+arrayAddress[i]+'"></td></tr>' +
                '<tr><td>Loại customer:</td><td><select id="specialCustomer" value="'+arraySpecialCustomer[i]+'"><option>Diamond</option><option>Platinum</option>' +
                '<option>Gold</option><option>Silver</option><option>Member</option></select></td></tr>' +
                '<tr><td>Số người đi kèm:</td><td><input type="text" name="numOfPerson" id="numOfPerson" value="'+arrayNumOfPerson[i]+'"></td></tr>' +
                '<tr><td>Số ngày thuê:</td><td><input type="text" name="rentDay" id="rentDay" value="'+arrayRentDay[i]+'"></td></tr>' +
                '<tr><td>Loại dịch vụ:</td><td><select id="specialService" value="'+arraySpecialService[i]+'"><option>Villa</option><option>House</option><option>Room</option></select></td></tr>' +
                '<tr><td>Loại phòng thuê:</td><td><select id="specialRoom" value="'+arraySpacialRoom[i]+'"><option>Vip</option><option>Business</option><option>Normal</option></select></td></tr>' +
                '<tr><td colspan="2" style="text-align: center"><input type="button" name="submit" value="Xác nhân" onclick="confirmCustomerAfterEdit('+i+')">' +
                '<input type="reset" name="reset" value="Nhập lại"><input type="button" name="return" value="Quay lại menu" onclick="displayMainMenu()"></td></tr></table>';

            document.body.innerHTML = editCustomer
        }
    }
}
function deleteCustomer(){
    let choosesCustomer = prompt();
    for (let i=0; i<arrayName.length; i++){
        if (choosesCustomer == arrayName[i]) {
            arrayName.splice(i, 1);
            arrayIDcard.splice(i,1);
            arrayBirthday.splice(i,1);
            arrayEmail.splice(i,1);
            arrayAddress.splice(i,1);
            arraySpecialCustomer.splice(i,1);
            arrayNumOfPerson.splice(i,1);
            arrayRentDay.splice(i,1);
            arraySpecialService.splice(i,1);
            arraySpacialRoom.splice(i,1);
        }
    }
}
function confirmCustomerAfterEdit(i){
    let name = document.getElementById('name').value;
    let IDcard = document.getElementById('IDcard').value;
    let birthday = document.getElementById('birthday').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let specialCustomer = document.getElementById('specialCustomer').value;
    let numOfPerson = document.getElementById('numOfPerson').value;
    let rentDay = document.getElementById('rentDay').value;
    let specialService = document.getElementById('specialService').value;
    let specialRoom = document.getElementById('specialRoom').value;
    let editName = edit(name);
    let editAddress = edit(address);
    arrayName[i] = editName;
    arrayIDcard[i] = IDcard;
    arrayBirthday[i] = birthday;
    arrayEmail[i] = email;
    arrayAddress[i] = editAddress;
    arraySpecialCustomer[i] = specialCustomer;
    arrayNumOfPerson[i] = numOfPerson;
    arrayRentDay[i] = rentDay;
    arraySpecialService[i] = specialService;
    arraySpacialRoom[i] = specialRoom;
    displayMainMenu();
}
displayMainMenu()