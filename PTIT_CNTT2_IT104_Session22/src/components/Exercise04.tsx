import { Dropdown, Button, type MenuProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const items: MenuProps["items"] = [
  { key: "setting", label: "Cài đặt" },
  { key: "password", label: "Đổi mật khẩu" },
  { key: "logout", label: "Đăng xuất" },
];

export default function Exercise04() {
  return (
    <div style={{ width: 220 }}>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Button
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: 8,
          }}
        >
          <span>Nguyễn Văn Nam</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </Dropdown>
    </div>
  );
}
