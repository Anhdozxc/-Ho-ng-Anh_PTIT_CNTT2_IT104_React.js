import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Button, Backdrop, CircularProgress } from "@mui/material";

import type { Student } from "./features/students/types";
import StudentForm from "./features/students/StudentForm";
import StudentList from "./features/students/StudentList";
import StudentSearchSortFilter from "./features/students/StudentSearchSortFilter";

const API = "http://localhost:8080/students";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Student[]>(API)
      .then((res) => {
        setTimeout(() => {
          setStudents(res.data);
          setLoading(false);
        }, 1500);
      })
      .catch(() => setLoading(false));
  }, []);

  const [search, setSearch] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"name" | "age">("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const grades = useMemo(
    () => Array.from(new Set(students.map((s) => s.grade))).sort(),
    [students]
  );

  const filteredSorted = useMemo(() => {
    let out = students.slice();
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      out = out.filter((s) => s.name.toLowerCase().includes(q));
    }
    if (gradeFilter !== "all") out = out.filter((s) => s.grade === gradeFilter);
    out.sort((a, b) => {
      if (sortBy === "name") {
        const r = a.name.localeCompare(b.name);
        return sortDir === "asc" ? r : -r;
      }
      const r = a.age - b.age;
      return sortDir === "asc" ? r : -r;
    });
    return out;
  }, [students, search, gradeFilter, sortBy, sortDir]);

  const handleAddClick = () => {
    setOpenForm(true);
  };

  const handleSubmit = async (data: {
    name: string;
    age: number;
    grade: string;
  }) => {
    await axios.post(API, data);
    const res = await axios.get<Student[]>(API);
    setStudents(res.data);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = (_s: Student) => {};
  const handleDelete = async (id: number) => {
    const ok = window.confirm("Xác nhận xóa học sinh?");
    if (!ok) return;

    await axios.delete(`${API}/${id}`);
    const res = await axios.get<Student[]>(API);
    setStudents(res.data);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎓 Student Manager</h1>

      <div className="flex gap-4 mb-4">
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddClick}
          disabled={loading}
        >
          Add Student
        </Button>
      </div>

      <StudentSearchSortFilter
        search={search}
        gradeFilter={gradeFilter}
        sortBy={sortBy}
        sortDir={sortDir}
        grades={grades}
        onSearchChange={setSearch}
        onGradeChange={setGradeFilter}
        onSortChange={(by, dir) => {
          setSortBy(by);
          setSortDir(dir);
        }}
        onClear={() => {
          setSearch("");
          setGradeFilter("all");
          setSortBy("name");
          setSortDir("asc");
        }}
      />

      <div className="mt-6">
        <StudentList
          students={filteredSorted}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      <StudentForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
        existingNames={students.map((s) => s.name)}
      />

      <Backdrop open={loading && !openForm} sx={{ color: "#fff" }}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default App;
