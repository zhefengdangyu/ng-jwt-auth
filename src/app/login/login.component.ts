import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  public login(): void {
    console.log('init');
    this.authService
      .login({
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value
      })
      .subscribe((val: boolean) => {
        if (val) {
          this.router.navigateByUrl(this.authService.redirectUrl, {
            replaceUrl: true
          });
        }
      });
  }
}
