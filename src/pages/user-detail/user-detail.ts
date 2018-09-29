import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from './../../providers/users-api/users-api';



@IonicPage()
@Component({
	selector: 'page-user-detail',
	templateUrl: './user-detail.html'
})
export class UserDetailPage {

	private user: User;

	constructor( public navCtrl: NavController, public navParams: NavParams ) {}

	ionViewDidLoad() {
		this.user = this.navParams.get( 'user' );
	}

	phoneCall() {
		window.open( 'tel:'+this.user.phone, '_system' );
	}

	mailTo() {
		window.open( 'mailto:'+this.user.email, '_system' );
	}

	openUrl() {
		window.open( 'https://'+this.user.website, '_system' );
	}

}
