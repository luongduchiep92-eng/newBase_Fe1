# Angular Cơ Bản -- Buổi 8 (Angular v22)

## Nội dung buổi học

- Edit Story (PUT / PATCH)
- Load dữ liệu lên form
- Update dữ liệu
- Loading / Error (giữ nguyên cách cũ)

---

## 1. Ý tưởng Edit

Luồng xử lý:

1. Lấy `id` từ URL
2. Gọi API GET → lấy dữ liệu cũ
3. Set dữ liệu vào form
4. Submit → gọi API PUT/PATCH để update

---

## 2. Component Edit Story

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory implements OnInit {
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.fb.group({
      title: '',
    });
  }

  ngOnInit() {
    // 1. Lấy id từ URL
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      // 2. Gọi API lấy dữ liệu
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          // 3. Set dữ liệu vào form
          this.editForm.patchValue({
            title: data.title,
          });
        },
        error: () => {
          this.error = 'Không load được dữ liệu';
        },
      });
    }
  }

  submitForm() {
    if (!this.id) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.editForm.value;

    // 4. Gọi API update
    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Cập nhật thành công';

        this.router.navigateByUrl('/stories');
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}
```

---

## 3. HTML

```html
<h2>Sửa truyện</h2>

<form [formGroup]="editForm" (ngSubmit)="submitForm()">
  <input type="text" formControlName="title" />

  <button type="submit" [disabled]="loading">
    {{ loading ? 'Đang cập nhật...' : 'Cập nhật' }}
  </button>
</form>

@if (success) {
<p style="color: green">{{ success }}</p>
} @if (error) {
<p style="color: red">{{ error }}</p>
}
```

---

## 4. Route

```ts
{
  path: 'edit/:id',
  component: EditStory
}
```

---

## 5. So sánh PUT vs PATCH (ngắn gọn)

- **PUT**: update toàn bộ object
- **PATCH**: update 1 phần

👉 Với JSON Server: thường dùng PUT cho dễ

---

## 6. Lưu ý quan trọng

- Dùng `patchValue()` để set form
- Luôn check `id` trước khi call API
- Xử lý loading để tránh spam submit
- Có thể redirect sau khi update

---

## 7. Bài tập

### Bài 1

- Thêm field:
  - author
  - views

- Hiển thị đầy đủ khi edit

---

### Bài 2

- Validate:
  - title required
  - > = 3 ký tự

---

### Bài 3

- Nếu API lỗi:
  - Hiển thị message rõ ràng hơn

---

### Bài 4

- Thử dùng **PATCH** thay vì PUT

---

### Bài 5 (nâng cao)

- Sau khi update:
  - Không redirect
  - Hiển thị "Cập nhật thành công" + giữ nguyên form

---

## Tổng kết

Buổi này bạn đã biết:

- Load data lên form
- Edit dữ liệu
- Gọi API PUT
- Xử lý loading + error
