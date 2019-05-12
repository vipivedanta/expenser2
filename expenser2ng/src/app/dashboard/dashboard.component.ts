import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [ LocalstorageService]
})
export class DashboardComponent implements OnInit {

  user: User = {};
  constructor( private localstorage:LocalstorageService, private router:Router) { }

  ngOnInit() {
  	this.user = this.localstorage.getUser();
  	if(!this.user){
  		this.router.navigate(['/login']);
  	}  	
  }

}
