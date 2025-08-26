import { Component } from "react";
interface State {
  isLoggedIn: boolean;
}
export default class LoginStatus extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { isLoggedIn: false };
    this.toggleLogin = this.toggleLogin.bind(this);
  }
  toggleLogin() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }
  render() {
    return (
      <div
        style={{
          background: "#eaf3fb",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          textAlign: "center",
          margin: "20px auto",
        }}
      >
        {this.state.isLoggedIn ? (
          <>
            <p>
              <strong>Xin chào, User!</strong>
            </p>
            <button
              onClick={this.toggleLogin}
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Đăng xuất
            </button>
          </>
        ) : (
          <>
            <p>
              <strong>Vui lòng đăng nhập để tiếp tục.</strong>
            </p>
            <button
              onClick={this.toggleLogin}
              style={{
                backgroundColor: "#1877f2",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Đăng nhập
            </button>
          </>
        )}
      </div>
    );
  }
}
