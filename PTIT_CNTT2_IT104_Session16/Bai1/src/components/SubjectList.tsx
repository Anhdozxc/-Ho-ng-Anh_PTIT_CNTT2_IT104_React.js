import { Component } from "react";
export default class SubjectList extends Component {
  subjects: string[];

  constructor(props: object) {
    super(props);
    this.subjects = ["Toán", "Văn", "Anh", "Hóa", "Sinh"];
  }
  render() {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Danh sách môn học</h2>
        {this.subjects.map((sub, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#e0f7fa",
              margin: "10px auto",
              padding: "10px",
              width: "200px",
              borderRadius: "10px",
            }}
          >
            {sub}
          </div>
        ))}
      </div>
    );
  }
}
