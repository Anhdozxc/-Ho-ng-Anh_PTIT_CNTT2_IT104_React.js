"use strict";
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login() {
        console.log("Login method in Account");
    }
    logout() {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        }
        else if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}
const user1 = new userAcc("001", "anhbear", "123456", "user", "active");
user1.login();
user1.logout();
const user2 = new userAcc("002", "john", "abcdef", "user", "banned");
user2.login();
user2.logout();
