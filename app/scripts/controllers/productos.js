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
        $scope.busqueda = false;
        $scope.productos = [];

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
                        "img": API_PATH_MEDIA + data.data[i].image
                    });
                }
                else {
                    $scope.biosoluciones.push({
                        "id": data.data[i].id,
                        "id_categoria": data.data[i].id_categoria,
                        "nombre": data.data[i].nombre,
                        "img": API_PATH_MEDIA + data.data[i].image
                    });
                }
            }
            //console.log($scope.subcategoriaarr);
        });

        contenidoFactory.ServiceContenido('catalogos/Producto/', 'GET', {}).then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                $scope.productos.push({
                    "id": data.data[i].id,
                    "image": data.data[i].image,
                    "nombre": data.data[i].nombre,
                    "definicion": data.data[i].definicion,
                    "registro": data.data[i].registro,
                    "formulacion": data.data[i].formulacion,
                    "consentracion": data.data[i].consentracion,
                    "ingredientes": data.data[i].ingredientes,
                    "cultivos": data.data[i].cultivos,
                    "envases": data.data[i].envases,
                    "toxitologia": data.data[i].toxitologia,
                    "expectro": data.data[i].expectro,
                    "etiqueta": data.data[i].etiqueta,
                    "hoja": data.data[i].hoja,
                    "ficha": data.data[i].ficha,
                });
            }
        });

        $scope.IsBusqueda = function () {
            $scope.busqueda = true;            
        }

        $scope.IsBack = function () {
            $scope.busqueda = false;
        }
    }]);
