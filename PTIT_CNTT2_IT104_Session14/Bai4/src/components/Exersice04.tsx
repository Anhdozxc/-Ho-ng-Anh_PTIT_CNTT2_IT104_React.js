import React from "react";
type Props = object;
type State = { slogan: string };
export default class BlockRender extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(): void {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!",
    });
  }
  // Chặn render lại khi state thay đổi
  shouldComponentUpdate(): boolean {
    console.log("shouldComponentUpdate được gọi nhưng trả về false");
    return false; // Không cho render lại giống đề
  }
  render() {
    return (
      <div>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
