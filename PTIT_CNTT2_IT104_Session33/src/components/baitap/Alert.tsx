export default function Alert({ text }: { text: string }) {
  return (
    <div
      style={{
        background: "#e6f4ea",
        border: "1px solid #b7e1c1",
        color: "#2e7d32",
        padding: 12,
        marginTop: 12,
      }}
    >
      {text}
    </div>
  );
}
