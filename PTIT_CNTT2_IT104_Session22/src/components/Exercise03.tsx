import { Card, Button } from "antd";
const { Meta } = Card;
const data = [
  {
    title: "MacBook Air 2018",
    desc: "The reason I am selling the machine is because it is too much power for what I need",
    price: "30.000.000 đ",
    img: "https://consomac.fr/images/news/macbookair-2018-reviews-header.jpg",
  },
  {
    title: "MacBook Pro 2019",
    desc: "The reason I am selling the machine is because it is too much power for what I need.",
    price: "30.000.000 đ",
    img: "https://i.rtings.com/assets/products/0F3KAC3z/apple-macbook-pro-16-2019/design-medium.jpg",
  },
];
export default function Exercise03() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {data.map((item) => (
        <Card
          key={item.title}
          hoverable
          style={{ width: 300 }}
          cover={<img alt={item.title} src={item.img} />}
        >
          <Meta title={item.title} description={item.desc} />
          <div
            style={{
              marginTop: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button type="primary">Xem chi tiết</Button>
            <span style={{ fontWeight: 600 }}>{item.price}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
