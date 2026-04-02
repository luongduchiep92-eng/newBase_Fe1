# Angular Cơ Bản -- Buổi 3 (Angular v22)

## Nội dung buổi học

Trong buổi này chúng ta sẽ học:

- Angular Directive
- Directive `@for`
- Directive `@if`
- Hiển thị danh sách dữ liệu
- Xây dựng trang **List truyện tranh**
- Kết hợp Routing + Directive

---

# 1. Directive trong Angular là gì?

**Directive** là một tính năng cho phép **thay đổi cấu trúc hoặc hành vi
của HTML**.

Các directive phổ biến:

- `@for`
- `@if`

---

# 2. Tạo trang List Truyện Tranh

Tạo component:

```bash
ng g c pages/stories
```

Angular sẽ tạo:

    pages/stories/
      stories.ts
      stories.html
      stories.css

---

# 3. Cập nhật Routes

## app.routes.ts

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'stories', component: Stories },
];
```

---

# 4. Tạo dữ liệu truyện tranh

## stories.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
    },
  ];
}
```

---

# 5. Directive @for

`@for` dùng để **lặp qua danh sách dữ liệu**.

Cú pháp:

```html
@for (item of items) { }
```

Ví dụ:

```html
@for (item of [1,2,3]) {
<p>{{ item }}</p>
}
```

---

# 6. Hiển thị danh sách truyện

## stories.html

```html
<h2>Danh sách truyện tranh</h2>

@for (story of stories; track story.title) {

<div class="story-card">
  <h3>{{ story.title }}</h3>

  <p>Tác giả: {{ story.author }}</p>

  <p>Lượt xem: {{ story.views }}</p>
</div>

}
```

---

# 7. Directive @if

`@if` dùng để **hiển thị nội dung theo điều kiện**.

Cú pháp:

```html
@if (condition) { }
```

Ví dụ:

```html
@if (true) {
<p>Hello Angular</p>
}
```

---

# 8. Kết hợp @if với truyện

```html
<h2>Danh sách truyện tranh</h2>

@for (story of stories; track story.title) {

<div class="story-card">
  <h3>{{ story.title }}</h3>

  <p>Tác giả: {{ story.author }}</p>

  <p>Lượt xem: {{ story.views }}</p>

  @if (story.views > 80000) {
  <p>🔥 Truyện nổi bật</p>
  }
</div>

}
```

---

# 9. CSS đơn giản

## stories.css

```css
.story-card {
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  padding: 20px 0;
}
```

---

# 10. Thêm menu điều hướng

## app.html

```html
<h1>Website Truyện Tranh</h1>

<nav>
  <a routerLink="/">Home</a> | <a routerLink="/about">About</a> |
  <a routerLink="/stories">Stories</a>
</nav>

<hr />

<router-outlet></router-outlet>
```

---

# BÀI TẬP THỰC HÀNH

## Bài 1

Thêm truyện:

- Dragon Ball
- Attack On Titan
- Bleach

---

## Bài 2

Thêm thông tin:

- Năm phát hành
- Thể loại
- Hình ảnh

---

## Bài 3

Hiển thị `HOT` nếu:

    views > 90000

---

## Bài 4

Nếu danh sách rỗng hiển thị:

    Không có truyện nào

Gợi ý:

```html
@if (stories.length === 0)
```

---

## Bài 5 (Nâng cao)

Hiển thị danh sách truyện tranh dưới dạng **table**.

Bảng cần có các cột:

- STT
- Hình ảnh
- Tên truyện
- Tác giả
- Lượt xem

Ví dụ kết quả:

| STT | Hình ảnh | Tên truyện | Tác giả           | Lượt xem |
| --- | -------- | ---------- | ----------------- | -------- |
| 1   | (image)  | One Piece  | Eiichiro Oda      | 100000   |
| 2   | (image)  | Naruto     | Masashi Kishimoto | 90000    |
| 3   | (image)  | Doraemon   | Fujiko F. Fujio   | 70000    |

Gợi ý:

```html
@for (story of stories; track story.title; let i = $index)
```

---

# Tổng kết Buổi 3

Trong buổi này bạn đã học:

- Angular Directive
- Directive `@for`
- Directive `@if`
- Hiển thị danh sách dữ liệu
- Xây dựng trang **List truyện tranh**
