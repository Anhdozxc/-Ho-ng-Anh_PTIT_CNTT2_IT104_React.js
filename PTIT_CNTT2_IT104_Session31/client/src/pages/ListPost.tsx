import { useEffect, useState } from "react";
import { api } from "../api";
import type { Post } from "../types";
import PostTable from "../components/PostTable";
import PostFormModal from "../components/PostFormModal";
import ConfirmModal from "../components/ConfirmModal";

export default function ListPost() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openForm, setOpenForm] = useState(false);

  // chặn
  const [openConfirm, setOpenConfirm] = useState(false);
  const [target, setTarget] = useState<Post | null>(null);
  //filter
  const [filter, setFilter] = useState<"all" | "published" | "blocked">("all");

  const load = () => api.get<Post[]>("/posts").then((r) => setPosts(r.data));
  useEffect(() => {
    load();
  }, []);

  const askBlock = (p: Post) => {
    setTarget(p);
    setOpenConfirm(true);
  };
  const confirmBlock = async () => {
    if (!target) return;
    const next = target.status === "published" ? "blocked" : "published";
    await api.patch(`/posts/${target.id}`, { status: next });
    setOpenConfirm(false);
    setTarget(null);
    load();
  };

  const handleCreate = async (data: {
    title: string;
    image: string;
    content: string;
  }) => {
    await api.post("/posts", {
      ...data,
      status: "published",
      createdAt: new Date().toISOString(),
    });
    setOpenForm(false);
    load();
  };
  // filter
  const shown =
    filter === "all" ? posts : posts.filter((p) => p.status === filter);

  return (
    <>
      <PostTable
        posts={shown}
        onAdd={() => setOpenForm(true)}
        onBlock={askBlock}
        filter={filter}
        onFilterChange={setFilter}
      />

      <PostFormModal
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleCreate}
        existingTitles={posts.map((p) => p.title)}
      />

      <ConfirmModal
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        onConfirm={confirmBlock}
        message={
          target?.status === "published"
            ? "Bạn có chắc chắn muốn ngừng xuất bản bài viết ?"
            : "Bạn có chắc chắn muốn xuất bản lại bài viết ?"
        }
      />
    </>
  );
}
