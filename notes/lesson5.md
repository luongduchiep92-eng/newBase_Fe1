# Angular Cơ Bản -- Buổi 5 (Angular v22)

## Nội dung buổi học

- Gọi API POST trong Angular
- Xử lý form + submit
- Loading / Error
- Refactor sang Service

---

## 1. Setup HttpClient

```ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient()],
};
```

---

## 2. Add Story với API (Component)

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.addForm = this.fb.group({
      title: '',
    });
  }

  submitForm() {
    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';
        this.addForm.reset();
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
<h2>Thêm truyện</h2>

<form [formGroup]="addForm" (ngSubmit)="submitForm()">
  <input type="text" formControlName="title" />

  <button type="submit" [disabled]="loading">{{ loading ? 'Đang gửi...' : 'Thêm truyện' }}</button>
</form>

@if (success) {
<p style="color: green">{{ success }}</p>
} @if (error) {
<p style="color: red">{{ error }}</p>
}
```

---

## 4. Refactor Service

```bash
ng g s services/story
```

```ts
@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private api = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  create(data: any) {
    return this.http.post(this.api, data);
  }
}
```

---

## 5. Bài tập

### Bài 1

- Thêm author, views
- Validate title required

### Bài 2

- Tạo form Thêm Product

- name

- price

- Gọi API POST

### Bài 3

Hiển thị loading + error

### Bài 4

Refactor sang service
