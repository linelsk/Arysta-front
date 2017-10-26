'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('ProductosDetailCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location) {

        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.titulo = "";
        $scope.subtitulo = $stateParams.titulo;
        $scope.productos = [];

        if ($stateParams.idcatgoria == 1) {
            $scope.titulo = "PROTECCIÓN";
        }
        else {
            $scope.titulo = "BIOSOLUCIONES"
        }

        contenidoFactory.ServiceContenido('manager/Productos/', 'GET', {}).then(function (data) {
            $scope.producto_slider = data.data[0];
        });

        contenidoFactory.ServiceContenido('catalogos/Producto/', 'GET', {}).then(function (data) {
            console.log(data.data);
            for (var i = 0; i < data.data.length; i++) {
                if (data.data[i].subcategoria[0] == $stateParams.id) {
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
            }
        });
    }]);
