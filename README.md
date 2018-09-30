# Accela Code Challenge


## The problem

Write an Android / iOS / Hybrid Mobile application to show the users in a system.
The application should display a list of Users (Name, Email) from the following endpoint: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
Clicking on a specific user should display a page containing (Name, Email, Street Name, City, Zip Code, Company Name)
Swiping right should return you to the list of Users in the position within the list you entered from.

> Note: The attributes `_start` and `_limit` can be used to restrict the data requested to the system. `_limit` is for the number of entries you'd like to get, and `_start` is the starting entry. [https://jsonplaceholder.typicode.com/users?\_start=5&\_limit=3](https://jsonplaceholder.typicode.com/users?_start=5&_limit=3)



## Features requested

* Application for mobile phones/tables
* Integration with external API
* Rendering of a list of users
* Lazy loading of list of users
* Rendering of the details of a particular user
* Navigational swipe from the user details page to the users list page



## Features implemented in this implementation

* Hybrid App, with Ionic v4
* Integration with external API via Service Provider
* Rendering a list of users (Name + Email per entry)
* Lazy loading of the list of users, 10 entities at a time
* Rendering details of a particular user (most user properties are displayed)
* Integration with Google Maps API, based on user's `address.geo` property
* Integration with Android system, linking to phone caller, email client and mobile browser, using the relevant properties of the user.
* Navigational swipe from the user details page to the users list page
* Unit and E2E testing suites



## Installation

Make sure your system has NodeJs+Npm, Ionic and Cordova installed. Refer to [Dependency Version](#dependency-version) for the versions utilized during development.



Once your system is ready, clone this repository and execute the following commands:

```
	$ npm install
	$ ionic cordova platform add android
	$ ionic cordova platform add browser
	$ ionic cordova platform add ios
```

To execute the application, use the following commands:

* `ionic serve` - if you wish to run the application in your browser.
* `ionic cordova run android` - if you wish to run this application in a real/emulated Android Device
* `ionic cordova run ios` - if you wish to run this application in a real/emulated iPhone Device



## Tests

* To run the unit test suite execute `npm run test`.
* To run the end-to-end test suite execute `npm run e2e`.



## Dependency Versions

```
	$ node -v
	v8.12.0

	$ npm -v
	6.4.1

	$ cordova -v
	8.1.1 (cordova-lib@8.1.0)

	$ ionic -v
	 _             _
	(_) ___  _ __ (_) ___
	| |/ _ \| '_ \| |/ __|
	| | (_) | | | | | (__
	|_|\___/|_| |_|_|\___|  CLI 4.1.2

	$ npm ls --depth=0
	accela-users@0.0.1 ~/accela-users
	├── @angular/animations@5.2.11
	├── @angular/common@5.2.11
	├── @angular/compiler@5.2.11
	├── @angular/compiler-cli@5.2.11
	├── @angular/core@5.2.11
	├── @angular/forms@5.2.11
	├── @angular/http@5.2.11
	├── @angular/platform-browser@5.2.11
	├── @angular/platform-browser-dynamic@5.2.11
	├── @ionic-native/core@4.12.2
	├── @ionic-native/splash-screen@4.12.2
	├── @ionic-native/status-bar@4.12.2
	├── @ionic/app-scripts@3.2.0
	├── @ionic/storage@2.2.0
	├── @types/jasmine@2.8.8
	├── @types/node@10.11.3
	├── angular2-template-loader@0.6.2
	├── cordova-android@7.1.1
	├── cordova-browser@5.0.4
	├── cordova-ios@4.5.5
	├── cordova-plugin-device@2.0.2
	├── cordova-plugin-ionic-keyboard@2.1.3
	├── cordova-plugin-ionic-webview@2.1.4
	├── cordova-plugin-splashscreen@5.0.2
	├── cordova-plugin-statusbar@2.4.2
	├── cordova-plugin-whitelist@1.3.3
	├── html-loader@0.5.5
	├── ionic-angular@3.9.2
	├── ionicons@3.0.0
	├── istanbul-instrumenter-loader@3.0.1
	├── jasmine@3.2.0
	├── jasmine-spec-reporter@4.2.1
	├── karma@3.0.0
	├── karma-chrome-launcher@2.2.0
	├── karma-coverage-istanbul-reporter@2.0.4
	├── karma-jasmine@1.1.2
	├── karma-jasmine-html-reporter@1.3.1
	├── karma-sourcemap-loader@0.3.7
	├── karma-webpack@3.0.5
	├── null-loader@0.1.1
	├── protractor@5.4.1
	├── rxjs@5.5.11
	├── sw-toolbox@3.6.0
	├── ts-loader@5.2.1
	├── ts-node@7.0.1
	├── typescript@2.6.2
	├── webpack@4.20.2
	└── zone.js@0.8.26

	$ ionic cordova plugin
	> cordova plugin ls
	cordova-plugin-device 2.0.2 "Device"
	cordova-plugin-ionic-keyboard 2.1.3 "cordova-plugin-ionic-keyboard"
	cordova-plugin-ionic-webview 2.1.4 "cordova-plugin-ionic-webview"
	cordova-plugin-splashscreen 5.0.2 "Splashscreen"
	cordova-plugin-statusbar 2.4.2 "StatusBar"
	cordova-plugin-whitelist 1.3.3 "Whitelist"

	$ ionic cordova platform
	> cordova platform ls
	Installed platforms:
	  android 7.1.1
	  browser 5.0.4
	  ios 4.5.5
	Available platforms:
	  osx ~4.0.1
	  windows ~6.0.0
```



## Other considerations

1. Commit messages attempt to be as descriptive as possible. CLI commands and utilized are provided.

2. Google Maps API requires a token key. For the functionality to work properly, one needs to create one in the Developer Console and paste it in the [index.html](./index.html) file, in the root of the project.

3. Testing suites are demonstrative only. No actual test scenarios were added, but base and structure are included and functional.

4. This application has been tested in the browser (Chrome) and an Android device (HTC U11). No special consideration was taken for real devices of other resolutions, sizes or hardware capabilities. No effort was taken to test on iPhone devices or iOS environment.
