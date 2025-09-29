import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import type { Book } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Book>;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
  }) => void;
}

const BookForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState(initial.title ?? "");
  const [author, setAuthor] = useState(initial.author ?? "");
  const [year, setYear] = useState(initial.year ?? new Date().getFullYear());
  const [category, setCategory] = useState(initial.category ?? "");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  useEffect(() => {
    setTitle(initial.title ?? "");
    setAuthor(initial.author ?? "");
    setYear(initial.year ?? new Date().getFullYear());
    setCategory(initial.category ?? "");
    setErrors({});
  }, [initial, open]);

  const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!title.trim()) newErrors.title = "Tên sách không được để trống";
    if (!author.trim()) newErrors.author = "Tác giả không được để trống";
    if (!year || year < 0) newErrors.year = "Năm xuất bản phải >= 0";
    if (!category.trim()) newErrors.category = "Thể loại không được để trống";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    onSubmit({ id: initial.id, title, author, year: Number(year), category });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Book" : "Add Book"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            error={!!errors.title}
            helperText={errors.title}
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            error={!!errors.author}
            helperText={errors.author}
          />
          <TextField
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            fullWidth
            error={!!errors.year}
            helperText={errors.year}
          />
          <TextField
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            error={!!errors.category}
            helperText={errors.category}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default BookForm;
