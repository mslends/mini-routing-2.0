angular.module("miniRouting", ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeCtrl',
      templateUrl: 'js/home/homeTmpl.html'
    })
    .state('settings', {
        url: '/settings',
        templateUrl: 'js/settings/settingsTmpl.html',
        controller: 'settingsCtrl'
    })
    .state('products', {
        url: '/products/:id',
        templateUrl: 'js/products/productTmpl.html',
        controller: 'productsCtrl'
    });

$urlRouterProvider
    .otherwise('/');
});
