import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailPage } from './../user-detail/user-detail';
import { User, UsersApiProvider } from './../../providers/users-api/users-api';



@Component({
	selector: 'page-home',
	templateUrl: './home.html'
})
export class HomePage {

	private current: number = 0;
	private keepLoading: boolean = true;
	private limit: number = 10;
	private users: User[] = [];

	constructor( public navCtrl: NavController, public usersAPI: UsersApiProvider ) {
		this.usersAPI.getUsers( this.current, this.limit ).subscribe( (users: User[]) => {
			this.users = users;
		});
	}

	showDetails( user ) {
		this.navCtrl.push( UserDetailPage, {user: user} );
	}

	doInfinite( infiniteScroll ) {
		if( this.keepLoading ) {
			this.current += this.limit;

			this.usersAPI.getUsers( this.current, this.limit )
			.subscribe( (users: User[]) => {
				this.users = this.users.concat( users );

				if( users.length < this.limit ) {
					this.keepLoading = false;
					this.current = 0;
				}

				infiniteScroll.complete();
			});
		}
		else {
			infiniteScroll.complete();
		}
	}

}
