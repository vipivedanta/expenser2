import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers : [ AuthService ],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
     firstname : '',
     lastname : '',
     email : '',
     password : ''
  };

  registrationError = false;
 
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {}

  registerUser(){
     this.authService.registerUser(this.user).subscribe( (response) => {
        if(response.status == true){
            this.router.navigate(['/login']);
        }else{
            this.registrationError = response.msg;
        }
    })
  }

} 
