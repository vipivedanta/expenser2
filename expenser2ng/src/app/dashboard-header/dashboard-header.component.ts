import { Component, OnInit, Input } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css'],
  providers : [ LocalstorageService ]
})
export class DashboardHeaderComponent implements OnInit {

  appName = 'Expenser 2';
  constructor(private localstorage:LocalstorageService, private router:Router) { }

  @Input() user;
  ngOnInit() {
  }

  logoutUser(){
  	if(confirm('Do you want to logout ?')){
  		this.localstorage.removeUser();
  		MessageService.setSuccessMessage('Your are successfully logged out');
  		this.router.navigate(['/login']);
  	}
  }

}
