'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('ContactoCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location) {

        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.contacto = [];
   
        contenidoFactory.ServiceContenido('manager/Contacto_Administrable_Imagen/', 'GET', {}).then(function (data) {
            //console.log(data.data);
            $scope.imagen_contacto = data.data[0];
        });

        contenidoFactory.ServiceContenido('manager/Contacto_Administrable/', 'GET', {}).then(function (data) {
            console.log(data.data);
            $scope.contacto = data.data;
        });

        $scope.enviar_contacto = function (ev) {
            contenidoFactory.ServiceContenido('manager/Contacto/', 'POST', {

                "nombres": $scope.contacto_env.nombres,
                "telefono": $scope.contacto_env.telefono,
                "correo": $scope.contacto_env.correo,
                "localidad": $scope.contacto_env.localidad,
                "mensaje": $scope.contacto_env.mensaje,
                "created_by": 1

            }).then(function (data) {
                contenidoFactory.mensaje(ev, "Datos enviados");
            });
        }
    }]);
