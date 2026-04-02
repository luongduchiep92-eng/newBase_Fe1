import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./register.css'],
})
export class Register {
  registerForm: FormGroup;
  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.matchPassword,
      },
    );
  }
  matchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword');

    if (!confirmPassword) return null;

    if (password !== confirmPassword.value) {
      confirmPassword.setErrors({ ...confirmPassword.errors, mismatch: true });
    } else {
      if (confirmPassword.errors) {
        delete confirmPassword.errors['mismatch'];
        if (!Object.keys(confirmPassword.errors).length) {
          confirmPassword.setErrors(null);
        }
      }
    }
    return null;
  }

  submitForm() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const { confirmPassword, ...data } = this.registerForm.value;

    this.http.post('http://localhost:3000/register', data).subscribe({
      next: (res: any) => {
        this.loading = false;

        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }

        this.success = 'Đăng ký thành công';
        this.registerForm.reset();

        this.router.navigateByUrl('/login');
      },
      error: () => {
        this.loading = false;
        this.error = 'Đăng ký thất bại';
      },
    });
  }
}
