import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = 'hoadv21';
  age: number = 10;

  sayHello() {
    console.log('hello ');
    alert('hello ' + this.fullName);
  }
}
