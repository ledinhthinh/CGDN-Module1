
class Yeu_cau_6_task_1_Js {
    constructor() {
        this.setName = function (name) {
            this.name = name;
        };
        this.getName = function () {
            return this.name;
        };
        this.setCMND = function (cmnd) {
            this.cmnd = cmnd;
        };
        this.getCMND = function () {
            return this.cmnd;
        };
        this.setBirthday = function (birthday) {
            this.birthday = birthday;
        };
        this.getBirthday = function () {
            return this.birthday;
        };
        this.setEmail = function (email) {
            this.email = email;
        };
        this.getEmail = function () {
            return this.email;
        };
        this.setAddress = function (address) {
            this.address = address;
        };
        this.getAddress = function () {
            return this.address;
        };
        this.setTypeCustomer = function (typeCustomer) {
            this.typeCustomer = typeCustomer;
        };
        this.getTypeCustomer = function () {
            return this.typeCustomer;
        };
        this.setQuantityIncluded = function (quantityIncluded) {
            this.quantityIncluded = quantityIncluded;
        };
        this.getQuantityIncluded = function () {
            return this.quantityIncluded;
        };
        this.setTypeRoom = function (typeRoom) {
            this.typeRoom = typeRoom;
        };
        this.getTypeRoom = function () {
            return this.typeRoom;
        };
        this.setRentDays = function (rentDays) {
            this.rentDays = rentDays;
        };
        this.getRentDays = function () {
            return this.rentDays;
        };
        this.setTypeService = function (typeService) {
            this.typeService = typeService;
        };
        this.getTypeService = function () {
            return this.typeService;
        };
        this.totalPays = function () {
            let moneyPerDays = 0;
            if (this.getTypeService() === "Villa") {
                moneyPerDays = 500;
            }
            else if (this.getTypeService() === "House") {
                moneyPerDays = 300;
            }
            else if (this.getTypeService() === 'Room'){
                moneyPerDays = 200;
            }
            return (moneyPerDays *(this.getRentDays()));
        };
    }
}
