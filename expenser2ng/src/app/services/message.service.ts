import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

	successMessage = 'loggg';
	errorMessage = '';
	infoMessage = '';
  	constructor() { }

  	setSuccessMessage(msg){
  		this.successMessage = msg;
  	}

  	
}
