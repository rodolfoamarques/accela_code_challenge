import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './../pages/home/home';
import { UserDetailPage } from './../pages/user-detail/user-detail';
import { UsersApiProvider } from '../providers/users-api/users-api';



@NgModule({
	declarations: [
		MyApp,
		HomePage,
		UserDetailPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot( MyApp )
	],
	bootstrap: [ IonicApp ],
	entryComponents: [
		MyApp,
		HomePage,
		UserDetailPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersApiProvider
	]
})
export class AppModule {}
