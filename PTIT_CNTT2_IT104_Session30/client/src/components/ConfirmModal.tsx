import { useEffect } from "react";
import type { ReactNode } from "react";
import { CloseOutlined, InfoCircleOutlined } from "@ant-design/icons";

type Props = {
  open: boolean;
  title?: string;
  message: ReactNode;
  cancelText?: string;
  okText?: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export default function ConfirmModal({
  open,
  title = "Xác nhận",
  message,
  cancelText = "Hủy",
  okText = "Xóa",
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
    <div
      onClick={onCancel}
      style={{
        position: "fixed",
        inset: 0,
        background: "#00000066",
        display: "grid",
        placeItems: "center",
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(560px,92vw)",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 20px 60px #00000026",
          border: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #f1f5f9",
          }}
        >
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{title}</h3>
          <button
            onClick={onCancel}
            aria-label="Close"
            style={{
              background: "transparent",
              border: "none",
              fontSize: 18,
              cursor: "pointer",
            }}
          >
            <CloseOutlined />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            padding: "18px 20px 8px 20px",
            alignItems: "flex-start",
          }}
        >
          <span
            style={{
              color: "#ef4444",
              fontSize: 22,
              lineHeight: "22px",
              display: "inline-flex",
              marginTop: 2,
            }}
          >
            <InfoCircleOutlined />
          </span>
          <div style={{ fontSize: 16 }}>{message}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 12,
            padding: "16px 20px 20px 20px",
          }}
        >
          <button
            onClick={onCancel}
            style={{
              height: 40,
              padding: "0 18px",
              borderRadius: 8,
              border: "1px solid #e5e7eb",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            style={{
              height: 40,
              padding: "0 18px",
              borderRadius: 8,
              border: "none",
              background: "#ef4444",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {okText}
          </button>
        </div>
      </div>
    </div>
  );
}
