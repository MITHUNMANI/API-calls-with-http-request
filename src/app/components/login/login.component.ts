import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray, FormControlName } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formData = { username: '', password: '' };
  msg: string;
  constructor(public loginUser: UserService, public myRoute: Router) { 
  }

  ngOnInit() {  
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
    const eyeBtn = document.getElementById('eye-btn');
    const passwordField = document.getElementById('password');
    eyeBtn.addEventListener('click', (e)=>{
      if(passwordField.type === 'password'){
        e.target.setAttribute('class', 'fas fa-eye-slash');
        passwordField.type = 'text';
      }
      else{
        e.target.setAttribute('class', 'fas fa-eye');
        passwordField.type = 'password';
      }
    });
  }
  
  get usernameCtrl() {
    return this.loginForm.get('username');
  }
   
doLogin() {
  this.loginUser.userLogin().subscribe((data: any) => {
    let userlist = data; 
    console.log(this.loginForm.value.username);
      userlist.forEach(element => {
        if(element.username == this.loginForm.value.username && element.password==this.loginForm.value.password) {
          localStorage.setItem('token',element.username);
          this.myRoute.navigateByUrl('/welcome');
        }
        else if(!this.loginUser.isLoggedIn()) { 
          localStorage.clear();
          this.msg = "something went wrong";
          this.loginForm.reset();
        }
      });
     
  }, (error: any) => {
    console.log(error);
  });
}

}
