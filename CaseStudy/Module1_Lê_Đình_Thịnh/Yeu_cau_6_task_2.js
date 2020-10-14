class Employee {
    constructor(nameEmployee, birthday, phone, email, cmnd, level, location, salary) {
        this.nameEmployee = nameEmployee;
        this.birthday = birthday;
        this.phone = phone;
        this.email = email;
        this.cmnd = cmnd;
        this.level = level;
        this.location = location;
        this.salary = salary;
    }
    getNameEmployee() {
        return this.nameEmployee;
    }
    setNameEmployee(nameEmployee) {
        this.nameEmployee = nameEmployee;
    }
    getBirthday() {
        return this.birthday;
    }
    setBirthday(birthday) {
        this.birthday = birthday;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getCmnd() {
        return this.cmnd;
    }
    setCmnd(cmnd) {
        this.cmnd = cmnd;
    }
    getLevel() {
        return this.level;
    }
    setLevel(level) {
        this.level = level;
    }
    getLocation() {
        return this.location;
    }
    setLocation(location) {
        this.location = location;
    }
    getSalary() {
        if (this.location === "Manager"){
            this.salary = 500;
        }else if (this.location === "Sale"){
            this.salary = 300;
        }else if (this.location === "Makerting"){
            this.salary = 200;
        }
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
}