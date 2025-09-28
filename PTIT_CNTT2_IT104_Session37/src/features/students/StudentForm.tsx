import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

import type { Student } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
  existingNames: string[];
  onSubmit: (data: {
    name: string;
    age: number;
    grade: string;
  }) => Promise<void>;
}

const StudentForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
  existingNames,
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<string>("16");
  const [grade, setGrade] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    age?: string;
    grade?: string;
  }>({});
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setName(initial.name ?? "");
      setAge(initial.age !== undefined ? String(initial.age) : "16");
      setGrade(initial.grade ?? "");
      setErrors({});
    }
  }, [initial.age, initial.grade, initial.name, open]);

  const validate = () => {
    const e: typeof errors = {};
    const n = name.trim();
    const g = grade.trim();

    if (!n) e.name = "Không được bỏ trống";
    else if (existingNames.some((x) => x.toLowerCase() === n.toLowerCase()))
      e.name = "Tên bị trùng";

    if (age.trim() === "") e.age = "Không được bỏ trống";
    else if (Number(age) < 0) e.age = "Tuổi phải ≥ 0";

    if (!g) e.grade = "Không được bỏ trống";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    await onSubmit({
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });

    setName("");
    setAge("16");
    setGrade("");
    setTimeout(() => nameRef.current?.focus(), 0);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add Student</DialogTitle>

        <DialogContent className="flex flex-col gap-4 !pt-2">
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            inputRef={nameRef}
            autoFocus
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            label="Age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            fullWidth
            error={!!errors.age}
            helperText={errors.age}
          />
          <TextField
            label="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            fullWidth
            error={!!errors.grade}
            helperText={errors.grade}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;
