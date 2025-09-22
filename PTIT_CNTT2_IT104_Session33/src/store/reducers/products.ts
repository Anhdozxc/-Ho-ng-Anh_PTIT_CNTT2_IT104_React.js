import type { Product } from "../../types";

export type ProductsState = { list: Product[] };

const initialState: ProductsState = {
  list: [
    {
      id: 1,
      name: "Pizza",
      price: 30,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora odio quibusdam dicta similique sunt laudantium a inventore maxime distinctio mollitia? In architecto, laborum consectetur ratione perferendis doloremque dolorum voluptas dicta?",
      image: "https://img1.wsimg.com/isteam/stock/2982",
      stock: 30,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 15,
      desc: "Lorem ipsum dolor sit amet...",
      image:
        "https://cdn.tasteatlas.com/images/dishes/4713ddd8c2ee49f4bd05cd6506819adc.jpg?m=facebook",
      stock: 15,
    },
    {
      id: 3,
      name: "Bread",
      price: 20,
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora odio quibusdam dicta similique sunt laudantium a inventore maxime distinctio mollitia? In architecto, laborum consectetur ratione perferendis doloremque dolorum voluptas dicta?",
      image:
        "https://cdn.tgdd.vn/Files/2021/08/20/1376583/cach-lam-banh-mi-thit-nuong-cuc-don-gian-bang-chai-nhua-co-san-tai-nha-202108201640593483.jpg",
      stock: 20,
    },
    {
      id: 4,
      name: "Cake",
      price: 10,
      desc: "Lorem ipsum dolor sit amet...",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.uOSl4cZRaAgLm6XxXfgRDQHaEp?pid=Api&P=0&h=180",
      stock: 10,
    },
  ],
};
export function productsReducer(state: ProductsState = initialState) {
  return state;
}
