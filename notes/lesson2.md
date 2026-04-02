# Angular Cơ Bản -- Buổi 2 (Angular v22)

## Nội dung buổi học

Trong buổi này chúng ta sẽ học:

- Angular Routing
- Tạo nhiều trang trong Angular
- RouterOutlet
- RouterLink
- Cấu hình routes
- Điều hướng giữa các trang

---

# 1. Angular Routing là gì?

**Routing** cho phép ứng dụng Angular có nhiều trang khác nhau mà
**không cần reload trình duyệt**.

Đây là cơ chế quan trọng để xây dựng **Single Page Application (SPA)**.

Ví dụ website có các trang:

- Trang chủ
- Trang giới thiệu
- Trang liên hệ

Khi người dùng chuyển trang, Angular chỉ **thay đổi component hiển
thị**, không tải lại toàn bộ trang.

---

# 2. File routing trong Angular v22

Angular sẽ tạo file:

src/app/app.routes.ts

File này dùng để **khai báo các route của ứng dụng**.

---

# 3. Cấu hình Routes

Ví dụ:

## app.routes.ts

```ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
];
```

Giải thích:

Path Component

- "/" hiển thị giao diện của Home
- "/about" hiển thị giao diện của About

---

# 4. RouterOutlet

`RouterOutlet` là nơi Angular **hiển thị component theo route**.

## app.ts

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
```

---

## app.html

```html
<h1>Angular Routing Demo</h1>

<router-outlet></router-outlet>
```

Component tương ứng với route sẽ hiển thị tại đây.

---

# 5. Tạo Component cho các trang

Tạo component bằng Angular CLI.

## Tạo trang Home

```bash
ng g c pages/home
```

## Tạo trang About

```bash
ng g c pages/about
```

---

# 6. Home Component

## home.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
```

---

# 7. About Component

## about.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
```

---

# 8. RouterLink

`routerLink` là directive dùng để **điều hướng giữa các route trong
Angular mà không reload trang**.

Thay vì dùng HTML truyền thống:

```html
<a href="/about">About</a>
```

Angular sử dụng:

```html
<a routerLink="/about">About</a>
```

Khi click link, Angular sẽ **thay đổi component hiển thị trong
RouterOutlet**.

---

## Ví dụ RouterLink

```html
<h1>Angular Routing Demo</h1>

<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>

<hr />

<router-outlet></router-outlet>
```

---

## RouterLink dạng mảng (khuyến nghị)

Angular thường dùng dạng:

```html
<a [routerLink]="['/about']">About</a>
```

Cách này giúp dễ dàng truyền **tham số động** trong route.

---

## RouterLinkActive (Highlight menu)

Dùng để đánh dấu menu đang active.

```html
<a routerLink="/" routerLinkActive="active">Home</a>
<a routerLink="/about" routerLinkActive="active">About</a>
```

Ví dụ CSS:

```css
.active {
  color: red;
  font-weight: bold;
}
```

---

# 9. Ví dụ hoàn chỉnh

## app.routes.ts

```ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
];
```

---

## Kết quả

Khi truy cập:

http://localhost:4200

→ hiển thị trang Home

Khi truy cập:

http://localhost:4200/about

→ hiển thị trang About

---

# BÀI TẬP THỰC HÀNH

## Bài 1

Tạo thêm một trang:

contact

Sử dụng CLI:

ng g c pages/contact

---

## Bài 2

Cập nhật routes:

```ts
{ path: 'contact', component: Contact }
```

---

## Bài 3

Thêm menu điều hướng:

Home\
About\
Contact

Sử dụng:

routerLink

---

## Bài 4

Trang Contact hiển thị nội dung:

Đây là trang liên hệ\
Email: example@gmail.com

---

## Bài 5 (Nâng cao)

Tạo route:

/products

Hiển thị danh sách:

Laptop\
Phone\
Tablet

---

# TỔNG KẾT BUỔI 2

Trong buổi này bạn đã học:

- Angular Routing
- Cấu hình routes
- RouterOutlet
- RouterLink
- RouterLinkActive
- Tạo nhiều trang trong Angular

---
