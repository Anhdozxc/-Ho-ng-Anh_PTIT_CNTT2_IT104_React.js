import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../app/store";
import {
  DashboardOutlined,
  UserOutlined,
  DollarOutlined,
  LineChartOutlined,
  FileTextOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { toggle } from "./menuSlice";

const items = [
  { icon: <DashboardOutlined />, label: "Bảng điều khiển" },
  { icon: <UserOutlined />, label: "Tài khoản" },
  { icon: <DollarOutlined />, label: "Tài sản" },
  { icon: <LineChartOutlined />, label: "Thống kê" },
  { icon: <FileTextOutlined />, label: "Tài liệu" },
];

export default function Sidebar() {
  const collapsed = useSelector((s: RootState) => s.menu.collapsed);
  const dispatch = useDispatch<AppDispatch>();

  const baseItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    height: 44,
    padding: "0 12px",
    borderRadius: 4,
  };

  return (
    <div
      style={{
        width: collapsed ? 56 : 220,
        background: "#071a3a",
        color: "#fff",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        minHeight: 360,
      }}
    >
      {items.map((it, idx) => (
        <div
          key={idx}
          style={{
            ...baseItemStyle,
            justifyContent: collapsed ? "center" : "flex-start",
          }}
        >
          <span style={{ fontSize: 18 }}>{it.icon}</span>
          {!collapsed && <span>{it.label}</span>}
        </div>
      ))}

      <button
        onClick={() => dispatch(toggle())}
        style={{
          ...baseItemStyle,
          justifyContent: collapsed ? "center" : "flex-start",
          background: "transparent",
          color: "#fff",
          border: "1px solid #ffffff66",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 18 }}>
          {collapsed ? <RightOutlined /> : <LeftOutlined />}
        </span>
        {!collapsed && <span>Thu gọn</span>}
      </button>
    </div>
  );
}
