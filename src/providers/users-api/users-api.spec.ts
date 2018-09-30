import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersApiProvider } from './users-api';



describe( 'UsersApiProvider', () => {

	let testBed: TestBed;
	let usersApi: UsersApiProvider;
	let httpMock: HttpTestingController;

	beforeEach( () => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ],
			providers: [ UsersApiProvider ]
		});

		testBed = getTestBed();
		usersApi = testBed.get( UsersApiProvider );
		httpMock = testBed.get( HttpTestingController );
	});

});
