export type Post = {
  id: number;
  title: string;
  image: string;
  content: string;
  status: "published" | "blocked";
  createdAt: string;
};
