import React from "react";
type Props = object;
type State = {
  productCode: string;
  productName: string;
  price: string;
  quantity: string; // submit thành number
};

export default class ProductForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      productCode: "SP001",
      productName: "Cam da xanh",
      price: "20000",
      quantity: "10",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }

  onChangeCode(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ productCode: e.target.value });
  }

  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ productName: e.target.value });
  }

  onChangePrice(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ price: e.target.value }); // giữ string, thay đổi khi submit
  }

  onChangeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ quantity: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity),
    };
    console.log(product);
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          maxWidth: 390,
          margin: "16px",
          backgroundColor: "rgba(255, 255, 255, 1)",
          borderRadius: 8,
          padding: 16,
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Thêm mới sản phẩm</h2>
        <label>Mã sản phẩm</label>
        <input
          type="text"
          value={this.state.productCode}
          onChange={this.onChangeCode}
          style={{
            width: "95%",
            padding: 8,
            marginBottom: 12,
            borderRadius: 8,
          }}
        />

        <label>Tên sản phẩm</label>
        <input
          type="text"
          value={this.state.productName}
          onChange={this.onChangeName}
          style={{
            width: "95%",
            padding: 8,
            marginBottom: 12,
            borderRadius: 8,
          }}
        />

        <label>Giá</label>
        <input
          type="number"
          value={this.state.price}
          onChange={this.onChangePrice}
          style={{
            width: "95%",
            padding: 8,
            marginBottom: 12,
            borderRadius: 8,
          }}
        />

        <label>Số lượng</label>
        <input
          type="number"
          value={this.state.quantity}
          onChange={this.onChangeQuantity}
          style={{
            width: "95%",
            padding: 8,
            marginBottom: 16,
            borderRadius: 8,
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            background: "#00f",
            color: "#fff",
            border: "none",
            borderRadius: 8,
          }}
        >
          Đăng ký
        </button>
      </form>
    );
  }
}
