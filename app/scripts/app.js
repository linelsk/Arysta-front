'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
    .module('frontApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'vAccordion'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('quinessomos', {
                url: '/quinessomos',
                templateUrl: 'views/quinessomos.html',
                controller: 'QuinesSomosCtrl'
            })
            .state('productos', {
                url: '/productos',
                templateUrl: 'views/productos.html',
                controller: 'ProductosCtrl'
            })
            .state('pronutiva', {
                url: '/pronutiva',
                templateUrl: 'views/pronutiva.html',
                controller: 'PronutivaCtrl'
            })
            .state('dondeestamos', {
                url: '/dondeestamos',
                templateUrl: 'views/dondeestamos.html',
                controller: 'DondeEstamosCtrl'
            })
            .state('contacto', {
                url: '/contacto',
                templateUrl: 'views/contacto.html',
                controller: 'ContactoCtrl'
            })
            .state('productosdetail', {
                url: '/productosdetail/:id',
                templateUrl: 'views/productosdetail.html',
                controller: 'ProductosDetailCtrl'
            })

        $qProvider.errorOnUnhandledRejections(false);
        $locationProvider.html5Mode(true);

    });
