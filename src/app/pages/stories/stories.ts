import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-page',
  imports: [RouterModule],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories: any[] = [];
  loading: boolean = false;

  constructor (private http: HttpClient){}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.http.get<any[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  deleteStory(id: number) {
    if(confirm("Bạn có chắc chắn muốn xóa không?")) {
      this.http.delete(`http://localhost:3000/stories/${id}`).subscribe(() => {
        alert("Xóa thành công!");
        this.getStories();
      })
    }
  }
}
