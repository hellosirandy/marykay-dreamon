import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitTried = false;
  errorMessage: string;

  constructor(
    private auth: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.submitTried = true;
    this.errorMessage = null;
    if (this.loginForm.valid) {
      const loginForm = this.loginForm.getRawValue();
      this.auth.login(loginForm.email, loginForm.password).then(_ => {
        this.route.navigate(['/admin']);
      }).catch(err => {
        // this.errorMessage = err.message;
        this.errorMessage = '不正確的信箱或密碼';
      });
    }
  }

}
