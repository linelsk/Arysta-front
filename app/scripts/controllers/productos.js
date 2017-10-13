'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('ProductosCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location) {

        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.proteccion = [];

        $scope.biosoluciones = [];

        contenidoFactory.ServiceContenido('manager/Productos/', 'GET', {}).then(function (data) {
            //console.log(data.data);
            $scope.producto_slider = data.data[0];
        });

        contenidoFactory.ServiceContenido('catalogos/SubCategoria/', 'GET', '{}').then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].id_categoria == 1) {

                    $scope.proteccion.push({
                        "id": data.data[i].id,
                        "id_categoria": data.data[i].id_categoria,
                        "nombre": data.data[i].nombre,
                        "img": '../images/Protección/' + [i + 1] + '.png'
                    });
                }
                else {
                    $scope.biosoluciones.push({
                        "id": data.data[i].id,
                        "id_categoria": data.data[i].id_categoria,
                        "nombre": data.data[i].nombre,
                        "img": '../images/Biosoluciones/' + [i + 1] + '.png'
                    });
                }
            }
            //console.log($scope.subcategoriaarr);
        });

    }]);
