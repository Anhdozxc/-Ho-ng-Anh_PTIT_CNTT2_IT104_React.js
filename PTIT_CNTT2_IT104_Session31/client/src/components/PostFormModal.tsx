import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";

export default function PostFormModal({
  open,
  onClose,
  onSubmit,
  existingTitles,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; image: string; content: string }) => void;
  existingTitles: string[];
}) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState<string>("");

  const [askReset, setAskReset] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    if (!open) {
      setTitle("");
      setImage("");
      setContent("");
    }
  }, [open]);

  if (!open) return null;

  const handlePublish = () => {
    if (!title.trim() || !image.trim() || !content.trim()) {
      setAlertMsg("Tên bài viết, hình ảnh và nội dung không được để trống");
      return;
    }
    const dupSet = new Set(existingTitles.map((t) => t.toLowerCase().trim()));
    if (dupSet.has(title.toLowerCase().trim())) {
      setAlertMsg("Tên bài viết không được phép trùng");
      return;
    }
    onSubmit({ title, image, content });
  };

  const clearAll = () => {
    setTitle("");
    setImage("");
    setContent("");
    setAskReset(false);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Thêm mới bài viết</h2>
          <button className="btn" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="field">
          <label>Tên bài viết</label>
          <input
            className="input text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Hình ảnh</label>
          <input
            className="input text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="field" data-color-mode="light">
          <label>Nội dung</label>
          <MDEditor value={content} onChange={(v) => setContent(v || "")} />
        </div>

        <div className="footer">
          <button className="btn" onClick={() => setAskReset(true)}>
            Làm mới
          </button>
          <button className="btn primary" onClick={handlePublish}>
            Xuất bản
          </button>
        </div>
      </div>

      <ConfirmModal
        open={askReset}
        onCancel={() => setAskReset(false)}
        onConfirm={clearAll}
        message="Bạn có chắc chắn muốn xóa hết giá trị trong các ô nhập?"
      />

      <AlertModal
        open={!!alertMsg}
        title="Cảnh báo"
        message={alertMsg}
        onClose={() => setAlertMsg("")}
      />
    </div>
  );
}
