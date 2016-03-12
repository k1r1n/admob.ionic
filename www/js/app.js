// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    // Open app.js and just paste the following code inside .run method and done!
    var admobid = {};

    // select the right Ad Id according to platform
    if( /(android)/i.test(navigator.userAgent) ) { 
        admobid = { // for Android
            banner: 'ca-app-pub-7197999805164308/9802473070',
            interstitial: 'ca-app-pub-7197999805164308/5193816674'
        };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        admobid = { // for iOS
            banner: 'ca-app-pub-7197999805164308/9802473070',
            interstitial: 'ca-app-pub-7197999805164308/5193816674'
        };
    } else {
        admobid = { // for Windows Phone
            banner: 'ca-app-pub-7197999805164308/9802473070',
            interstitial: 'ca-app-pub-7197999805164308/5193816674'
        };
    }

    if(window.AdMob) AdMob.createBanner({
      adId:admobid.banner, 
      isTesting: true, //Don't forget to set 'isTesting: false' while deploying your app to the store.
      position:AdMob.AD_POSITION.BOTTOM_CENTER, 
      autoShow:true} 
      );

    if(window.AdMob) AdMob.prepareInterstitial( {
      adId:admobid.interstitial, 
      autoShow:true} );
      
      });
})

