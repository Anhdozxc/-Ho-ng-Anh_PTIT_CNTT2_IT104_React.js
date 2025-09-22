import type { ReactNode } from "react";
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div style={{ maxWidth: 1100, margin: "24px auto", padding: "0 12px" }}>
      {children}
    </div>
  );
}
