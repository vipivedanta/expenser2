import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

	 item = '';
	  constructor() { }

	  getItemByName(itemName){
	  	this.item = localStorage.getItem(itemName);
	  	if(this.item == '')
	  		return false;
	  	return JSON.parse(this.item);
	  }

	  setItem(itemName,itemValue){
	  	localStorage.setItem(itemName,itemValue);
	  }

	  setUser(user){
	  	this.setItem('user',JSON.stringify(user));
	  }

	  getUser(){
	  	return this.getItemByName('user');
	  }

	  removeUser(){
	  	localStorage.removeItem('user');
	  }
}
