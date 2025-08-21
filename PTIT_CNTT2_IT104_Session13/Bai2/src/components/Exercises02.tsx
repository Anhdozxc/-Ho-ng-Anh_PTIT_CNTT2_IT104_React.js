import { useState } from "react";

export default function Exercise02() {
  const [id] = useState(1);
  const [name] = useState("Nguyễn Văn Sơn");
  const [dob] = useState("20/12/2023");
  const [address] = useState("Thanh Xuân, Hà Nội");

  return (
    <div>
      <h1>Bài 2</h1>
      <h2>Thông tin cá nhân</h2>
      <p>
        <b>id:</b> {id}
      </p>
      <p>
        <b>Tên:</b> {name}
      </p>
      <p>
        <b>Ngày sinh:</b> {dob}
      </p>
      <p>
        <b>Địa chỉ:</b> {address}
      </p>
    </div>
  );
}
