import { Component } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

interface State {
  users: User[];
}

class Exercise03 extends Component<{}, State> {
  state: State = {
    users: [
      { id: 1, name: "John", age: 30 },
      { id: 2, name: "Mary", age: 25 },
      { id: 3, name: "Jane", age: 20 },
    ],
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Tuổi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Exercise03;
