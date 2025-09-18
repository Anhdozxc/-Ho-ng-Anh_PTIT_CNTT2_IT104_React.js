import type { Post } from "../types";

type Props = {
  posts: Post[];
  onAdd: () => void;
  onBlock: (p: Post) => void;
  filter: "all" | "published" | "blocked";
  onFilterChange: (v: "all" | "published" | "blocked") => void;
};

const fmtDate = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${d.getFullYear()}`;
};

export default function PostTable({
  posts,
  onAdd,
  onBlock,
  filter,
  onFilterChange,
}: Props) {
  return (
    <div className="container">
      <div className="controls">
        <div className="left">
          <input
            className="input"
            placeholder="Nhập từ khóa tìm kiếm"
            style={{ width: 320 }}
          />
          <select
            className="select"
            value={filter}
            onChange={(e) =>
              onFilterChange(e.target.value as "all" | "published" | "blocked")
            }
          >
            <option value="all">Lọc bài viết</option>
            <option value="published">Đã xuất bản</option>
            <option value="blocked">Bị chặn</option>
          </select>
        </div>
        <button className="btn primary" onClick={onAdd}>
          Thêm mới bài viết
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th style={{ width: 60 }}>STT</th>
            <th>Tiêu đề</th>
            <th style={{ width: 140 }}>Hình ảnh</th>
            <th style={{ width: 140 }}>Ngày viết</th>
            <th style={{ width: 150 }}>Trạng thái</th>
            <th style={{ width: 220 }}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p, i) => (
            <tr key={p.id}>
              <td>{i + 1}</td>
              <td>{p.title}</td>
              <td>
                <img className="thumb" src={p.image} alt="" />
              </td>
              <td>{fmtDate(p.createdAt)}</td>
              <td>
                <span className="badge ok">
                  {p.status === "published" ? "Đã xuất bản" : "Ngừng xuất bản"}
                </span>
              </td>
              <td>
                <div className="actions">
                  <button className="btn warn" onClick={() => onBlock(p)}>
                    Chặn
                  </button>
                  <button className="btn edit">Sửa</button>
                  <button className="btn danger">Xóa</button>
                </div>
              </td>
            </tr>
          ))}
          {posts.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center" }}>
                Không có bài viết
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
