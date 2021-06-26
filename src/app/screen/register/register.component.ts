import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../login/user';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  user = new User('', '', '', '');
  errorMessage: any;
  successMessage: any;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    
  }

  onRegister() {
    console.log('registring user: ', this.user);
    this.registerService.registerUser(this.user).subscribe((response: any) => {
      console.log('response received: ', response);
      this.errorMessage = null;
      this.successMessage = response.message
    },
    (error: any) => {
      console.log(error);
      this.successMessage = null;
      this.errorMessage = error;     
    });
  }
}
