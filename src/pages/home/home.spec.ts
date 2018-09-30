import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from './home';
import { PlatformMock, StatusBarMock, SplashScreenMock } from './../../../mocks-ionic';



describe( 'HomePage Component', () => {

	let fixture;
	let component;

	beforeEach( async( () => {
		TestBed.configureTestingModule({
			declarations: [ HomePage ],
			providers: [
				{ provide: Platform, useClass: PlatformMock }
			]
		});
	}));

});
