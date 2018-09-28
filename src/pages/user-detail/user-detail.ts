import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
	selector: 'page-user-detail',
	templateUrl: 'user-detail.html',
})
export class UserDetailPage {

	public name: string = '';

	constructor( public navCtrl: NavController, public navParams: NavParams ) {}

	ionViewDidLoad() {
		const user = this.navParams.get( 'user' );

		this.name = user.name;
	}

}
