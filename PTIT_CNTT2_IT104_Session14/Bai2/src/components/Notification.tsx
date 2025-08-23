import React from "react";

type Props = object;
type State = object;

export default class Notification extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  //Lifecycle chạy 1 lần sau khi component mount
  componentDidMount(): void {
    console.log("Component đã được mount!");
  }
  render() {
    return (
      <div>
        <p>Console</p>
      </div>
    );
  }
}
