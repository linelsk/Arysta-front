'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('DondeEstamosCtrl', ['contenidoFactory', '$scope', '$window', '$http', 'API_PATH', 'API_PATH_MEDIA', function (contenidoFactory, $scope, $window, $http, API_PATH, API_PATH_MEDIA) {

        $scope.mapa = [];
        $scope.isMap = true;
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;

        contenidoFactory.ServiceContenido('catalogos/DondeEstamos/', 'GET', {}).then(function (data) {
            $scope.donde = data.data;
        });

        $scope.setMap = function (id) {
            console.log(id);
            $scope.isMap = false;
            contenidoFactory.ServiceContenido('catalogos/DondeEstamos_telefonoUpdate/' + id + '/', 'GET', {}).then(function (data) {
                $scope.mapa = data.data;
                console.log(data.data);
            });
            
        }

    }]);
