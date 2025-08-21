import { Component } from 'react'
import ListItem from './components/ListItem'

export default class App extends Component {
  handleClickMethod(event: React.MouseEvent) {
    console.log("Phương thức click của lớp");
  }
  render() {
    function handleClick(event: React.MouseEvent) {
      console.log(event);
    }
    return (
      <>
        <h1 onClick={handleClick}>Demo props</h1>
        <ul>
          <ListItem content="content được truyền từ cha" id={5}>
            <h3>Nội dung bên trong ListItem</h3>
          </ListItem>
        </ul>
      </>
    )
  }
}
