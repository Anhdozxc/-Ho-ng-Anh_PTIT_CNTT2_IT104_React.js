import React, { useState } from "react";
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET as string;

export default function Bai1() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const onChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setUrl("");
    setPreview(f ? URL.createObjectURL(f) : "");
  };

  const onUpload = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((data as any)?.error) throw new Error((data as any).error.message);
      setUrl(data.secure_url);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" accept="image/*" onChange={onChoose} />
      <button
        onClick={onUpload}
        disabled={!file || loading}
        style={{ marginLeft: 12 }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {preview && (
        <div style={{ marginTop: 16 }}>
          <img src={preview} alt="preview" width={320} />
        </div>
      )}

      {url && (
        <div style={{ marginTop: 16 }}>
          <a href={url} target="_blank" rel="noreferrer">
            Mở ảnh trên Cloudinary
          </a>
          <div>
            <img src={url} alt="uploaded" width={320} />
          </div>
        </div>
      )}
    </div>
  );
}
