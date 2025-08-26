import { Component } from "react";
interface State {
  name: string;
  email: string;
  age: string;
  error: string;
  submitted: boolean;
}
export default class UserForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { name: "", email: "", age: "", error: "", submitted: false };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ name: e.target.value });
  }
  handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ email: e.target.value });
  }
  handleAge(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ age: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", submitted: false });
      return;
    }
    if (age.trim() === "" || Number(age) < 0) {
      this.setState({ error: "Tuổi không được âm", submitted: false });
      return;
    }

    this.setState({ error: "", submitted: true });
  }

  handleReset() {
    this.setState({
      name: "",
      email: "",
      age: "",
      error: "",
      submitted: false,
    });
  }

  render() {
    const { name, email, age, error, submitted } = this.state;

    return (
      <div style={{ padding: 20, maxWidth: 420, margin: "0 auto" }}>
        <h2> Nhập thông tin người dùng</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleName}
            style={{ display: "block", width: "100%", margin: "8px 0" }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={this.handleEmail}
            style={{ display: "block", width: "100%", margin: "8px 0" }}
          />
          <input
            type="number"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleAge}
            style={{ display: "block", width: "100%", margin: "8px 0" }}
          />

          <button type="submit" style={{ marginRight: 8 }}>
            Gửi
          </button>
          <button type="button" onClick={this.handleReset}>
            Xóa tất cả
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: 10 }}> {error}</p>}
        {submitted && !error && (
          <div
            style={{
              marginTop: 16,
              padding: 12,
              background: "#eef6ff",
              borderRadius: 6,
            }}
          >
            <p>
              <strong>Thông tin đã nhập:</strong>
            </p>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    );
  }
}
