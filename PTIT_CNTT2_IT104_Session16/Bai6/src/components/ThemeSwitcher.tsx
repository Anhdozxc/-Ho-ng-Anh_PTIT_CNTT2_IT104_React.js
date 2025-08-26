import { Component } from "react";
interface State {
  isDarkMode: boolean;
}
export default class ThemeSwitcher extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = { isDarkMode: false };
    this.toggleTheme = this.toggleTheme.bind(this);
  }
  toggleTheme() {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  }
  render() {
    const style = {
      backgroundColor: this.state.isDarkMode ? "black" : "white",
      color: this.state.isDarkMode ? "white" : "black",
    };

    return (
      <div style={style}>
        <h3>
          {this.state.isDarkMode
            ? "🌙 Chế độ Tối đang bật"
            : "☀️ Chế độ Sáng đang bật"}
        </h3>
        <button onClick={this.toggleTheme}>Chuyển theme</button>
      </div>
    );
  }
}
