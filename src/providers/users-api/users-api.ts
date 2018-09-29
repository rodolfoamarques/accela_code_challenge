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

	public getUsers( start: number = undefined, limit: number = undefined ): Observable<User[]> {
		let uri = this.apiURL + '/users';
		uri += (start || limit) ? '?' : '';
		uri += start ? '_start='+start : ''; // when start=0, the condition returns false. however, in the context of this application, this is not considered relevant as a bug since the server returns users from 0 regardless of _start being provided or being provided with value 0
		uri += (start && limit) ? '&' : '';
		uri += limit ? '_limit='+limit : '';

		return this.http.get( uri )
			.map( (users: User[]) => {
				return users.map( user => new User(user) );
			});
	}

}
