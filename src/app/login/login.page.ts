import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],  // Nombre de usuario en lugar de correo
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  ngOnInit() {}

  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /\d/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasThreeChars = /[A-Za-z]{3}/.test(value);
    const valid = hasNumber && hasUpper && hasThreeChars;
    return valid ? null : { invalidPassword: true };
  }

  login() {
    if (this.loginForm.valid) {
      const navigationExtras = {
        state: {
          username: this.loginForm.get('username')?.value,
        },
      };
      this.router.navigate(['/index'], navigationExtras);
    }
  }

  goToRegister() {
    this.router.navigate(['/registro']);  // Redirige a la página de registro
  }
}
