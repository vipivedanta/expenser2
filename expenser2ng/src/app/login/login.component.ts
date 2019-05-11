import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ AuthService,LocalstorageService ]
})
export class LoginComponent implements OnInit {

  user = { email : '', password : ''}
  loginError = false;
  constructor( private authService:AuthService, private localStorage:LocalstorageService, private router:Router) { }

  ngOnInit() {
  }

  doLogin(user){
  	this.authService.loginUser(user).subscribe( (response) => {
  		if(response.status){
  			this.localStorage.setUser(response.user);
  			this.router.navigate(['/dashboard']);
  		}else{
  			this.loginError = response.msg;
  		}
  	});
  }

}
