import React, { useState } from "react";

const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME as string;
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET as string;

type UpRes = { secure_url: string };

export default function Bai2() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const onChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    setFiles(list);
    setUrls([]);
    setPreviews(list.map((f) => URL.createObjectURL(f)));
  };

  const onUpload = async () => {
    if (files.length === 0) return;
    setLoading(true);
    try {
      const results: string[] = [];
      for (const f of files) {
        const form = new FormData();
        form.append("file", f);
        form.append("upload_preset", UPLOAD_PRESET);
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: form }
        );
        const data = (await res.json()) as UpRes & { error?: unknown };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((data as any).error) throw new Error((data as any).error.message);
        results.push(data.secure_url);
      }
      setUrls(results);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input type="file" multiple accept="image/*" onChange={onChoose} />
      <button
        onClick={onUpload}
        disabled={files.length === 0 || loading}
        style={{ marginLeft: 12 }}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {previews.length > 0 && (
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}
        >
          {previews.map((src, i) => (
            <img key={i} src={src} alt={`preview-${i}`} width={220} />
          ))}
        </div>
      )}

      {urls.length > 0 && (
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}
        >
          {urls.map((u, i) => (
            <a key={i} href={u} target="_blank">
              <img src={u} alt={`uploaded-${i}`} width={220} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
