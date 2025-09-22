export default function Badge({ children }: { children: string }) {
  return (
    <span
      style={{
        background: "#f05a28",
        color: "#fff",
        padding: "6px 10px",
        borderRadius: 3,
      }}
    >
      {children}
    </span>
  );
}
