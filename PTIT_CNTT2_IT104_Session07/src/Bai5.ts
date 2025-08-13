class Account {
  public id: string;
  public userName: string;
  private password: string;
  public isLogin: boolean;
  public role: string;

  constructor(id: string, userName: string, password: string, role: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
    this.role = role;
    this.isLogin = false;
  }
  public login(): void {
    console.log("Login method in Account");
  }

  public logout(): void {
    if (this.isLogin) {
      console.log("Đăng xuất thành công");
      this.isLogin = false;
    }
  }
}
class userAcc extends Account {
  public status: string; // active hoặc banned

  constructor(
    id: string,
    userName: string,
    password: string,
    role: string,
    status: string
  ) {
    super(id, userName, password, role);
    this.status = status;
  }
  public login(): void {
    if (this.status === "active") {
      this.isLogin = true;
      console.log("Đăng nhập thành công");
    } else if (this.status === "banned") {
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
