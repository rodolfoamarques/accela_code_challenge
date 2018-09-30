import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserDetailPage } from './user-detail';
import { PlatformMock, StatusBarMock, SplashScreenMock } from './../../../mocks-ionic';



describe( 'UserDetailPage Component', () => {

	let fixture;
	let component;

	beforeEach( async( () => {
		TestBed.configureTestingModule({
			declarations: [ UserDetailPage ],
			providers: [
				{ provide: Platform, useClass: PlatformMock }
			]
		});
	}));

});
