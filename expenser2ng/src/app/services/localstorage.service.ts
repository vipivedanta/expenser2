import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

	  constructor() { }

	  getItem(itemName){
	  	item = localStorage.getItem(itemName);
	  	if(item == '')
	  		return false;
	  	return JSON.parse(item);
	  }

	  setItem(itemName,itemValue){
	  	localStorage.setItem(itemName,itemValue);
	  }

	  setUser(user){
	  	this.setItem('user',JSON.stringify(user));
	  }

	  getUser(){
	  	return this.getItem('uuid');
	  }
}
