'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('QuinesSomosCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location) {

        $scope.API_PATH_MEDIA = API_PATH_MEDIA;

        contenidoFactory.ServiceContenido('manager/Acordeon_historia/', 'GET', {}).then(function (data) {
            $scope.acordion_historia = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Acordeon_mision/', 'GET', {}).then(function (data) {
            console.log(data.data);
            $scope.acordion_mision = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Acordeon_mision_imagen/', 'GET', {}).then(function (data) {
            console.log(data.data);
            $scope.acordion_mision_imagenes = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Acordeon_vision_imagen/', 'GET', {}).then(function (data) {
            console.log(data.data);
            $scope.acordion_vision_imagenes = data.data;
        });

        contenidoFactory.ServiceContenido('manager/Acordeon_valores/', 'GET', {}).then(function (data) {
            $scope.acordion_valores = data.data;
        });

        //Seccion Contacto
        contenidoFactory.ServiceContenido('manager/QuienesSomos/', 'GET', {}).then(function (data) {
            $scope.seccion_banner = data.data[0];
        });

    }]);