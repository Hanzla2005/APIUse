import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validationUserMessage = {
    email: [
      { type: "required", message: "Please enter your email" },
      { type: "pattern", message: "The entered email is invalid" }
    ],
    password: [
      { type: "required", message: "Please enter your password" },
      { type: "minlength", message: "Password must be at least 5 characters long" },
    ]
  };

  validationFormUser!: FormGroup;

  constructor(
    public formbuilder: FormBuilder,
    public authservice: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$")]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  LoginUser(value: { email: string, password: string }) {
    console.log("Attempting to log in with:", value);
    if (this.validationFormUser.valid) {
      this.authservice.loginFireauth(value)
        .then(() => {
          this.router.navigate(['/home']);
        })
        .catch((error: any) => {
          console.log("Login failed", error);
        });
    } else {
      console.log("Form is not valid");
    }
  }

  
}

