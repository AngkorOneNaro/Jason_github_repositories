// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/main",
      abstract: true,
      templateUrl: "templates/main.html"
    })

    // the pet tab has its own child nav-view and history
    .state('tab.pet-index', {
      url: '/news',
      views: {
        'news-tab': {
          templateUrl: 'templates/news.html',
          controller: 'newsCtrl'
        }
      }
    })

    .state('tab.pet-detail', {
      url: '/phones',
      views: {
        'phones-tab': {
          templateUrl: 'templates/phones.html',
          controller: 'phonesCtrl'
        }
      }
    })

    .state('tab.adopt', {
      url: '/jobs',
      views: {
        'jobs-tab': {
          templateUrl: 'templates/jobs.html',
          controller: 'jobsCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })

    .state('tab.page_view', {
      url: '/page_view',
      views: {
        'about-tab': {
          templateUrl: 'templates/page_view.html',
          controller: 'pageViewCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/news');

});

