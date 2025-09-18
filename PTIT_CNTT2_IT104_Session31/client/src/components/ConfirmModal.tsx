import { useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";

type Props = {
  open: boolean;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ConfirmModal({
  open,
  message,
  onCancel,
  onConfirm,
}: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="modal" onClick={onCancel}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Xác nhận</h3>
          <button className="btn" onClick={onCancel}>
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
          <button className="btn" onClick={onCancel}>
            Hủy
          </button>
          <button className="btn primary" onClick={onConfirm}>
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}
