# Angular Cơ Bản -- Buổi 9 (Register API `/register`)

## Nội dung buổi học

- Tạo form đăng ký UI đẹp (Tailwind)
- Gọi API `/register`
- Validate cơ bản
- Loading / Error / Success

---

## 1. Ý tưởng

Luồng:

1.  Nhập form
2.  Validate
3.  Submit → POST `/register`
4.  Thành công → thông báo / chuyển trang

---

## 2. Component Register

```ts
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  imports: [ReactiveFormsModule],
  templateUrl: "./register.html",
  styleUrl: "./register.css",
})
export class Register {
  registerForm: FormGroup;

  loading = false;
  error = "";
  success = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group({
      name: "",
      email: "",
      password: "",
    });
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = "";
    this.success = "";

    const data = this.registerForm.value;

    this.http.post("http://localhost:3000/register", data).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Đăng ký thành công";
        this.router.navigateByUrl("/login");
      },
      error: () => {
        this.loading = false;
        this.error = "Đăng ký thất bại";
      },
    });
  }
}
```

---

## 3. HTML

```html
<div class="p-6 max-w-md mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Đăng ký</h1>

  <form [formGroup]="registerForm" (ngSubmit)="submitForm()" class="space-y-6">
    <div>
      <label class="block font-medium mb-1">Tên</label>
      <input formControlName="name" type="text" class="w-full border rounded-lg px-3 py-2" />
    </div>

    <div>
      <label class="block font-medium mb-1">Email</label>
      <input formControlName="email" type="email" class="w-full border rounded-lg px-3 py-2" />
    </div>

    <div>
      <label class="block font-medium mb-1">Mật khẩu</label>
      <input formControlName="password" type="password" class="w-full border rounded-lg px-3 py-2" />
    </div>

    <button type="submit" class="px-5 py-2 bg-blue-600 text-white rounded-lg w-full">Đăng ký</button>
  </form>
</div>
```

---

## 4. Bài tập

### Bài 1

Thêm confirmPassword

### Bài 2

Reset form sau khi đăng ký

### Bài 3

Disable button khi form invalid

### Bài 4

Hiển thị lỗi rõ ràng

### Bài 5

Lưu token vào localStorage

---

## Tổng kết

- Gọi API `/register`
- Validate form
- UI đẹp với Tailwind
