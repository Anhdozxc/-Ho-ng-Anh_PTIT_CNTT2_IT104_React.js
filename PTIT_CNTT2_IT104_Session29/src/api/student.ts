// Bài 4
// import axios from "axios";

// export async function getAllStudent() {
//   const res = await axios.get("http://localhost:3000/student");
//   return res.data;
// }

// Bài 5
// import axios from "axios";

// export async function getStudentById(id) {
//   try {
//     const res = await axios.get("http://localhost:3000/student/" + id);
//     console.log("Chi tiết sinh viên:", res.data);
//   } catch (err) {
//     console.log("Không tìm thấy bản ghi");
//   }
// }

// Bài 6
import axios from "axios";

export async function createStudent() {
  const student = {
    id: Date.now(), // tạm dùng timestamp làm id
    student_name: "Nguyen Van Toan",
    email: "new@example.com",
    address: "Ha Noi",
    phone: "0900000006",
    status: true,
    created_at: new Date().toISOString(),
  };

  try {
    const res = await axios.post("http://localhost:3000/student", student);
    console.log("Thêm mới thành công:", res.data);
  } catch (err) {
    console.error("Lỗi khi thêm:", err);
  }
}
