import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class UsersApiProvider {

	constructor( public http: HttpClient ) {
		console.log( 'Hello UsersApiProvider Provider' );
	}

}
