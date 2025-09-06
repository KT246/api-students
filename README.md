# 🎓 Student API - Node.js + Express + TypeScript + MongoDB

RESTful API for student management, written in **Node.js + Express + TypeScript**, using **MongoDB** and authentication using **JWT**.
👉 Only **Admin** is allowed to **Register** and **Login**.

---

## 🚀 Features

- Admin register & login to get JWT token
- Token authentication middleware (block access if no token or wrong token)
- CRUD students (only admin can do):
- `GET /api/students` → Get student list
- `GET /api/students/:id` → Get details
- `POST /api/students` → Add new student
- `PUT /api/students/:id` → Update student
- `DELETE /api/students/:id` → Delete student

# 🎓 API ນັກສຶກສາ - Node.js + Express + TypeScript + MongoDB

API RESTful ສໍາລັບການຄຸ້ມຄອງນັກຮຽນ, ຂຽນໃນ **Node.js + Express + TypeScript**, ໂດຍໃຊ້ **MongoDB** ແລະການກວດສອບຄວາມຖືກຕ້ອງໂດຍໃຊ້ **JWT**.
👉 ພຽງແຕ່ ** Admin ** ອະນຸຍາດໃຫ້ ** ລົງທະບຽນ ** ແລະ ** ເຂົ້າສູ່ລະບົບ **.

---

## 🚀 ຄຸນສົມບັດ

- Admin ລົງທະບຽນ & ເຂົ້າສູ່ລະບົບເພື່ອຮັບ JWT token
- ເຄື່ອງ​ກາງ​ການ​ກວດ​ສອບ Token (ປິດ​ການ​ເຂົ້າ​ເຖິງ​ຖ້າ​ຫາກ​ວ່າ​ບໍ່​ມີ token ຫຼື token ຜິດ​)
- ນັກສຶກສາ CRUD (ພຽງແຕ່ admin ສາມາດເຮັດໄດ້):
- `GET /api/student` → ເອົາລາຍຊື່ນັກຮຽນ
- `GET /api/students/:id` → ເອົາລາຍລະອຽດ
- `POST /api/students` → ເພີ່ມນັກຮຽນໃໝ່
- `PUT /api/students/:id` → ອັບເດດນັກຮຽນ
- `ລຶບ /api/students/:id` → ລຶບນັກຮຽນ
