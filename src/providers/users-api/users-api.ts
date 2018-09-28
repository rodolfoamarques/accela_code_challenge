import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



export class User {
	address: {
		city: string,
		geo: {
			lat: string,
			lng: string
		},
		street: string,
		suite: string,
		zipcode: string
	};
	company: {
		name: string,
		bs: string,
		catchPhrase: string
	};
	email: string;
	id: number;
	name: string;
	phone: string;
	street_name: string;
	username: string;
	website: string;
	zip_code: string;

	constructor( values: Object={} ) {
		Object.assign( this, values );
	}
};


@Injectable()
export class UsersApiProvider {

	private apiURL: string = 'https://jsonplaceholder.typicode.com';

	constructor( public http: HttpClient ) {}

	public getUsers(): Observable<User[]> {
		return this.http.get( this.apiURL + '/users' )
			.map( (users: User[]) => {
				return users.map( user => new User(user) );
			});
	}

}
