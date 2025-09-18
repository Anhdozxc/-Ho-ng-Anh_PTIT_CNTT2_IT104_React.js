import { useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function AlertModal({
  open,
  message,
  onClose,
  title = "Cảnh báo",
}: {
  open: boolean;
  message: string;
  onClose: () => void;
  title?: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

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
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button className="btn" onClick={onClose}>
            ✕
          </button>
        </header>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            padding: "6px 0 16px",
          }}
        >
          <ExclamationCircleOutlined
            style={{ fontSize: 22, color: "orange" }}
          />
          <div>{message}</div>
        </div>
        <div className="footer">
          <button className="btn" onClick={onClose}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}
