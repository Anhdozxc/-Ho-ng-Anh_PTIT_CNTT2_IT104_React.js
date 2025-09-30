import { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET as string;

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function Bai4() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!name) newErrors.name = "'name' is required";
    if (!price) newErrors.price = "'price' is required";
    if (!file) newErrors.image = "'image' is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onUploadImage = async (): Promise<string> => {
    if (!file) return "";
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: form }
    );
    const data = await res.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((data as any).error) throw new Error((data as any).error.message);
    return data.secure_url as string;
  };

  const onAdd = async () => {
    if (!validate()) return;
    setLoading(true);
    try {
      const imageUrl = await onUploadImage();
      const newProduct: Product = {
        id: Date.now(),
        name,
        price: Number(price),
        description: desc,
        imageUrl,
      };
      setProducts([...products, newProduct]);
      setName("");
      setPrice("");
      setDesc("");
      setFile(null);
      setErrors({});
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sản phẩm</h2>

      <div
        style={{ display: "flex", flexDirection: "column", gap: 8, width: 400 }}
      >
        <input
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}

        <input
          placeholder="Giá"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}

        <textarea
          placeholder="Mô tả"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        {errors.image && <span style={{ color: "red" }}>{errors.image}</span>}

        <button onClick={onAdd} disabled={loading}>
          {loading ? "Đang thêm..." : "Thêm sản phẩm"}
        </button>
      </div>

      <div
        style={{ display: "flex", gap: 16, marginTop: 20, flexWrap: "wrap" }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 12,
              width: 220,
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.name}
              width="100%"
              style={{ borderRadius: 4 }}
            />
            <h3>
              {p.name} - {p.price} đ
            </h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
