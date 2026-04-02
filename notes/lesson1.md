# Angular Cơ Bản -- Buổi 1 (Angular v22)

## 1. Angular là gì?

Angular là một framework phát triển ứng dụng web **frontend** được phát
triển bởi Google.\
Angular sử dụng **TypeScript** để xây dựng các ứng dụng **Single Page
Application (SPA)**.

### Ưu điểm của Angular

- Kiến trúc rõ ràng
- Hỗ trợ TypeScript
- Angular CLI mạnh mẽ
- Phù hợp cho dự án lớn
- Hệ sinh thái phong phú

---

# 2. Cài đặt môi trường

## Bước 1: Cài NodeJS

Tải tại:

https://nodejs.org

Kiểm tra:

```bash
node -v
npm -v
```

Khuyến nghị:

    Node >= 18

---

## Bước 2: Cài Angular CLI

```bash
npm install -g @angular/cli
```

Kiểm tra:

```bash
ng version
```

---

# 3. Tạo project Angular

## Tạo project mới

```bash
ng new angular-learning
```

Angular CLI sẽ hỏi:

    Would you like to add Angular routing? → Yes
    Which stylesheet format would you like to use? → CSS

Angular v22 mặc định:

- Standalone Components
- Vite build system
- Vitest test runner

---

## Chạy project

```bash
cd angular-learning
ng serve
```

Mở trình duyệt:

    http://localhost:4200

---

# 4. Cấu trúc project Angular v22

Cấu trúc project mặc định:

    src
     └── app
          ├── app.config.ts
          ├── app.routes.ts
          ├── app.ts
          ├── app.html
          └── app.css

### Giải thích

File Chức năng

---

- main.ts Điểm khởi động ứng dụng
- app.ts Root component
- app.html Giao diện root
- app.css Style root
- app.routes.ts Khai báo routing
- app.config.ts Cấu hình Angular app

---

# 5. Component trong Angular

Component là **khối xây dựng cơ bản của Angular**.

Angular v22 sử dụng **Standalone Component**, không cần sử dụng
`NgModule`.

## Ví dụ Component

### app.ts

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'angular-learning';
}
```

---

### app.html

```html
<h1>Hello {{ title }}</h1>

<router-outlet></router-outlet>
```

Angular sử dụng **Interpolation** để hiển thị dữ liệu:

    {{ variable }}

---

# 6. Data Binding

Angular hỗ trợ nhiều kiểu Data Binding.

## Interpolation

```html
<h1>{{ title }}</h1>
```

---

## Property Binding

```html
<img [src]="imageUrl" />
```

---

## Event Binding

```html
<button (click)="clickMe()">Click</button>
```

Ví dụ:

```ts
clickMe() {
  alert("Button clicked");
}
```

---

# 7. Tạo Component mới

Sử dụng Angular CLI:

```bash
ng generate component home
```

hoặc:

```bash
ng g c home
```

Angular sẽ tạo:

    home/
     ├── home.ts
     ├── home.html
     ├── home.css

Ví dụ:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h2>Trang Home</h2>`,
})
export class HomeComponent {}
```

---

# BÀI TẬP THỰC HÀNH

## Bài 2

Thay đổi nội dung trang chủ:

    Xin chào Angular
    Tôi đang học Angular Framework

---

## Bài 3

Tạo component mới tên:

    about

Hiển thị nội dung:

    Đây là trang giới thiệu

---

## Bài 4

Tạo biến trong component:

```ts
name = 'Nguyen Van A';
age = 25;
```

Hiển thị ra HTML:

    Tên: ...
    Tuổi: ...

Ví dụ:

```html
<p>Tên: {{ name }}</p>
<p>Tuổi: {{ age }}</p>
```

---

## Bài 5 (Nâng cao)

Tạo button:

    Click Me

Khi click hiển thị:

    Bạn đã click button

Ví dụ:

```html
<button (click)="handleClick()">Click Me</button>
```

```ts
handleClick() {
  alert("Bạn đã click button");
}
```

---

# TỔNG KẾT BUỔI 1

Trong buổi này bạn đã học:

- Angular là gì
- Cài đặt Angular CLI
- Tạo project Angular
- Cấu trúc project Angular v22
- Component
- Data Binding cơ bản

---

# Buổi sau sẽ học

- Angular Routing
- Service
- HTTP API
- CRUD Angular
