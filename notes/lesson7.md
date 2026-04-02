# Angular Cơ Bản -- Buổi Ôn Tập

## Nội dung buổi học

Ôn lại các kiến thức quan trọng:

- Component trong Angular
- Cú pháp `@for`
- HttpClient (GET, POST, DELETE)
- Reactive Form
- Validation
- Tư duy làm CRUD
- Bài kiểm tra tổng hợp

---

## 1. Component trong Angular

### Cần nhớ:

- Mỗi UI là 1 component
- Component gồm:
  - template (HTML)
  - logic (TS)
  - style (CSS)

### Tư duy:

- Chia nhỏ UI thành nhiều component
- Mỗi component chỉ làm 1 nhiệm vụ

---

## 2. @for (Angular mới)

### Cần nhớ:

- Dùng để lặp danh sách

### Cú pháp:

@for (item of list; track item.id) { ... }

### Tư duy:

- Luôn dùng track để tối ưu render
- Dữ liệu list phải có id

---

## 3. HttpClient

### Cần nhớ:

- Dùng để gọi API
- Trả về Observable → phải subscribe

### 3 hành động chính:

- GET → lấy dữ liệu
- POST → thêm dữ liệu
- DELETE → xoá dữ liệu

### Tư duy:

- Sau POST / DELETE → phải reload lại data
- Tách logic API thành function riêng

---

## 4. Reactive Form

### Cần nhớ:

- Form được tạo trong TS
- Sử dụng:
  - FormGroup
  - FormBuilder
  - formControlName

### Tư duy:

- Form = state
- Không xử lý logic trong HTML

---

## 5. Validation

### Cần nhớ:

- required
- minLength
- min, max

### Tư duy:

- Không cho submit khi form invalid
- Hiển thị lỗi khi:
  - invalid
  - touched

---

## 6. Luồng CRUD cơ bản

### Khi xây dựng 1 feature:

1.  GET → hiển thị list
2.  POST → thêm item
3.  DELETE → xoá item
4.  Reload list sau mỗi hành động

### Tư duy chuẩn:

- UI → gọi function → gọi API → cập nhật state

---

## 7. Các lỗi thường gặp

- Không subscribe → API không chạy
- Quên reload list
- Form không bind đúng formControlName
- Không validate nhưng vẫn submit
- Không dùng track trong @for

---

## 8. Bài kiểm tra ôn tập

### Bài 1 -- Hiển thị danh sách

- Gọi API để lấy danh sách
- Hiển thị bằng @for
- Mỗi item có:
  - tên
  - mô tả (tuỳ chọn)

---

### Bài 2 -- Xoá item

- Thêm nút Delete
- Gọi API xoá theo id
- Sau khi xoá → cập nhật lại danh sách

---

### Bài 3 -- Thêm item

Tạo form gồm:

- title
- description

---

### Bài 4 -- Validation UI

- Validation: title bắt buộc, \>= 3 ký tự
- Hiển thị lỗi khi input sai
- Disable button khi form invalid

---
