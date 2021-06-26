import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../login/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User('', '', '', '');
  isRegister: boolean = false;
  isLogin: boolean = true;
  errorMessage: any;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.user).subscribe((response: any) => {
      console.log('login response received: ', response);
      let resp = response;
      if (resp.status == 200) {
        this.router.navigate(['/dashboard']);
      }
    },
    (error: any) => {
      console.log(error);
     this.errorMessage = error;     
    });
  }

  register() {
    console.log('in register page', this.isRegister)
  }
}
