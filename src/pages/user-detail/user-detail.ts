import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from './../../providers/users-api/users-api';

declare var google;



@IonicPage()
@Component({
	selector: 'page-user-detail',
	templateUrl: './user-detail.html'
})
export class UserDetailPage {

	@ViewChild('map') mapElement: ElementRef;

	private map: any;
	private user: User;

	constructor( public navCtrl: NavController, public navParams: NavParams ) {}

	public ionViewDidLoad() {
		this.user = this.navParams.get( 'user' );
		this.initMap();
	}

	public ionViewWillEnter(): void {
		this.navCtrl.swipeBackEnabled = true;
	}

	public ionViewDidLeave(): void {
		this.navCtrl.swipeBackEnabled = false;
	}

	private initMap() {
		const mapOptions = {
			center: { lat: Number(this.user.address.geo.lat), lng: Number(this.user.address.geo.lng) },
			disableDefaultUI: true,
			fullscreenControl: false,
			mapTypeControl: false,
			rotateControl: false,
			scaleControl: false,
			streetViewControl: false,
			zoom: 7,
			zoomControl: false
		};

		this.map = new google.maps.Map( this.mapElement.nativeElement, mapOptions );
	}

	private phoneCall() {
		window.open( 'tel:'+this.user.phone, '_system' );
	}

	private mailTo() {
		window.open( 'mailto:'+this.user.email, '_system' );
	}

	private openUrl() {
		window.open( 'https://'+this.user.website, '_system' );
	}

}
