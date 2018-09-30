import { MyApp } from './../src/app/app.component';

describe( 'App', () => {

	let page: MyApp;

	beforeEach( () => {
		page = new MyApp();
	});

	describe( 'default screen', () => {
		beforeEach( () => {
			page.navigateTo( '/' );
		});

		it( 'should have a title saying "Accela Users App"', () => {
			page.getPageOneTitleText()
			.then( title => {
				expect( title ).toEqual( 'Accela Users App' );
			});
		});
	});

});
