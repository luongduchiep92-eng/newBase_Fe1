import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  form: any;
  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required]],
      image: ['',],
      genre: ['', [Validators.required]],
      year: ['',],
    });
    }
    submit() {
      if(this.form.invalid) return;
      this.http.post('http://localhost:3000/stories', this.form.value).subscribe(() => {
        alert("Thêm thành công!");
        this.router.navigate(['/list']);
      })
    }
}
