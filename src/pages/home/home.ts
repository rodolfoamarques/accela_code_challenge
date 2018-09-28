import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserDetailPage } from './../user-detail/user-detail';



@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public users;

	constructor( public navCtrl: NavController ) {}

	ionViewDidLoad() {
		this.users = [
			{ name: 'Example 1', email: 'one@example.com', street_name: 'some address 1', city: 'Dublin', zip_code: 'A00B0C0', company_name: 'Accela' },
			{ name: 'Example 2', email: 'two@example.com', street_name: 'some address 2', city: 'Galway', zip_code: 'A11B1C1', company_name: 'Accela' },
			{ name: 'Example 3', email: 'three@example.com', street_name: 'some address 3', city: 'Cork', zip_code: 'A22B2C2', company_name: 'Accela' }
		];
	}

	showDetails( user ) {
		this.navCtrl.push( UserDetailPage, {user: user} );
	}

}
