# Angular Cơ Bản -- Buổi 4 (Angular v22)

## Nội dung buổi học

Trong buổi này chúng ta sẽ học:

- Reactive Form trong Angular
- Sử dụng **FormBuilder**
- `FormGroup`
- `formControlName`
- Validation với `Validators`
- Xây dựng trang **Thêm truyện tranh**

---

# 1. Reactive Form là gì?

**Reactive Form** là cách xây dựng form bằng **code trong component**
thay vì viết logic trong HTML.

Ưu điểm:

- Dễ quản lý dữ liệu
- Dễ validation
- Phù hợp project lớn
- Test dễ dàng

---

# 2. Import ReactiveFormsModule

Để sử dụng Reactive Form cần import:

```ts
import { ReactiveFormsModule } from '@angular/forms';
```

Ví dụ component:

```ts
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {}
```

---

# 3. FormBuilder là gì?

**FormBuilder** là một service giúp tạo Form nhanh hơn.

---

# 4. Tạo Form với FormBuilder

## add-story.ts

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: '',
      author: '',
      views: 0,
    });
  }

  submitForm() {
    console.log(this.addForm.value);
  }
}
```

---

# 5. Kết nối Form với HTML

Angular sử dụng:

- `formGroup`
- `formControlName`
- `(ngSubmit)`

## add-story.html

```html
<h2>Thêm truyện tranh</h2>

<form [formGroup]="addForm" (ngSubmit)="submitForm()">
  <div>
    <label>Tên truyện</label>
    <input type="text" formControlName="title" />
  </div>

  <div>
    <label>Tác giả</label>
    <input type="text" formControlName="author" />
  </div>

  <div>
    <label>Lượt xem</label>
    <input type="number" formControlName="views" />
  </div>

  <button type="submit">Thêm truyện</button>
</form>
```

---

# 6. Lấy dữ liệu Form

Trong component:

```ts
submitForm() {
  console.log(this.addForm.value);
}
```

Kết quả:

```json
{
  "title": "One Piece",
  "author": "Oda",
  "views": 100000
}
```

---

# 7. Kiểm tra Validation

Angular cung cấp nhiều Validators:

| Validator | Ý nghĩa          |
| --------- | ---------------- |
| required  | Bắt buộc nhập    |
| minLength | Độ dài tối thiểu |
| min       | Giá trị nhỏ nhất |
| max       | Giá trị lớn nhất |

Ví dụ:

```ts
title: ['', [Validators.required, Validators.minLength(3)]];
views: ['', Validators.min(0)];
```

---

# 8. Xử lý lỗi với get()

Angular cho phép truy cập control bằng `get`:

Ví dụ trong component:

```ts
get title() {
  return this.addForm.get('title');
}
```

---

# 9. Hiển thị lỗi Validation

## add-story.html

```html
<input type="text" formControlName="title" />

@if (title?.invalid && title?.touched) {

<p style="color:red">Tên truyện phải ít nhất 3 ký tự</p>

}
```

---

# 10. Disable button khi form lỗi

```html
<button type="submit" [disabled]="addForm.invalid">Thêm truyện</button>
```

---

# 11. Xem dữ liệu form realtime

```html
<pre>
{{ addForm.value | json }}
</pre>
```

---

# 12. CSS đơn giản

```css
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
}

input {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
}

button {
  padding: 8px;
  cursor: pointer;
}
```

---

# 13. Bài tập thực hành

## Bài 1

Tạo **Form thêm Product**

Field:

- name
- price
- category

Validation:

- name bắt buộc
- price \> 0

---

## Bài 2

Tạo **Form đăng ký tài khoản**

Field:

- username
- email
- password

Validation:

- tất cả bắt buộc
- password \>= 6 ký tự

---

## Bài 3 (Nâng cao)

Hiển thị lỗi validation sử dụng `get` trong components:

```ts
get password() {
  return this.addForm.get('password');
}
```

Ví dụ:

```html
@if(password?.invalid){
<p>Password không hợp lệ</p>
}
```

---
