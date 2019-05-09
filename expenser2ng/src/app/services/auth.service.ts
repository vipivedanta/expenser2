import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService{

	registerUrl = 'api/register';

	constructor(private http:HttpClient){ }

	registerUser(userData){
		return this.http.post<any>(this.registerUrl,userData);
	}
}