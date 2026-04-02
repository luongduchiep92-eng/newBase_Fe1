# Angular Cơ Bản -- Buổi 6 (Angular v22)

## Nội dung buổi học

- Gọi API GET trong Angular
- Hiển thị danh sách dữ liệu từ server
- Loading / Error khi fetch API
- Hiển thị table + xóa dữ liệu (DELETE)

---

## 1. Gọi API GET là gì?

- API GET dùng để **lấy dữ liệu từ server**
- Không làm thay đổi dữ liệu

Ví dụ:

GET http://localhost:3000/stories

---

## 2. Component gọi API

```ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories implements OnInit {
  stories: any[] = [];

  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xóa thành công');
      },
      error: () => {
        alert('Xóa thất bại');
      },
    });
  }
}
```

---

## 3. HTML hiển thị Table

```html
<h2>Danh sách truyện</h2>

@if (loading) {
<p>Đang tải dữ liệu...</p>
} @if (error) {
<p style="color: red">{{ error }}</p>
} @if (!loading && stories.length === 0) {
<p>Không có truyện nào</p>
} @if (stories.length > 0) {
<table border="1" cellpadding="10" cellspacing="0">
  <tr>
    <th>ID</th>
    <th>Tên truyện</th>
    <th>Tác giả</th>
    <th>Lượt xem</th>
    <th>Hành động</th>
  </tr>

  @for (story of stories; track story.id) {
  <tr>
    <td>{{ story.id }}</td>
    <td>{{ story.title }}</td>
    <td>{{ story.author }}</td>
    <td>{{ story.views }}</td>
    <td>
      <button (click)="deleteStory(story.id)">Xóa</button>
    </td>
  </tr>
  }
</table>
}
```

---

## 4. CSS

```css
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th {
  background-color: #f5f5f5;
}

td,
th {
  text-align: center;
  padding: 10px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  background-color: red;
  color: white;
  border-radius: 4px;
}
```

---

## 5. Luồng xử lý

### Load trang:

- Gọi API GET
- Render danh sách

### Xóa:

- Click nút Xóa
- Confirm
- Gọi API DELETE
- Cập nhật UI bằng filter

---

## 6. Bài tập thực hành

### Bài 1

- Hiển thị danh sách products dạng table

### Bài 2

- Thay thế any thành type/interface Story

### Bài 3

- Hiển thị loading + error

### Bài 4

- Hiển thị HOT nếu views \> 90000

### Bài 5 (Nâng cao)

- Disable button khi đang xóa

Gợi ý:

```ts
loading: boolean = false;
```

---

## Tổng kết

- Gọi API GET
- Hiển thị table
- Xử lý DELETE
- Update UI realtime
