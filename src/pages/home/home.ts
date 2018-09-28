import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailPage } from './../user-detail/user-detail';
import { User, UsersApiProvider } from './../../providers/users-api/users-api';



@Component({
	selector: 'page-home',
	templateUrl: './home.html'
})
export class HomePage {

	private users: User[] = [];

	constructor( public navCtrl: NavController, public usersAPI: UsersApiProvider ) {
		this.usersAPI.getUsers().subscribe( (users: User[]) => {
			this.users = users;
		});
	}

	showDetails( user ) {
		this.navCtrl.push( UserDetailPage, {user: user} );
	}

}
