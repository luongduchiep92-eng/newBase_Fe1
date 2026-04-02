import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router 
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required]],
      image: ['',],
      genre: ['', [Validators.required]],
      year: ['',],
    })
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          this.editForm.patchValue(data);
        },
        error: () => {
          this.error = "Không load được dữ liệu";
        }
      })
    }
  }

  submitForm() {
    if(!this.id) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.editForm.value;
    this.http.patch(`http://localhost:3000/stories/${this.id}`, this.editForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = "Cập nhập thành công!";

        // this.router.navigateByUrl('/stories');
      },
      error: (err) => {
        this.loading = false;

        if (err.status === 404) {
          this.error = "Không tìm thấy truyện!";
        } else if (err.status === 500) {
          this.error = "Lỗi server!";
        } else if (err.status === 0) {
          this.error = "Không kết nối được API!";
        } else {
          this.error = "Có lỗi xảy ra!";
        }
      }
    })
  }
}
