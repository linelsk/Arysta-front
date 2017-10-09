'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('ProductosCtrl', ['$scope', function ($scope) {
        $scope.proteccion = [
            {
                id: 1,
                titulo: 'Herbicidas',
                img: 'http://placeimg.com/640/640/tech/grayscale'
            },
            {
                id: 1,
                titulo: 'Fungicidas',
                img: 'http://placeimg.com/640/640/tech/grayscale'
            },
            {
                id: 1,
                titulo: 'Insectididas',
                img: 'http://placeimg.com/640/640/tech/grayscale'
            },
            {
                id: 1,
                titulo: 'Tratamiento de semillas',
                img: 'http://placeimg.com/640/640/tech/grayscale'
            },
            {
                id: 1,
                titulo: 'Coadyuvantes',
                img: 'http://placeimg.com/640/640/tech/grayscale'
            }
        ];

        $scope.biosoluciones = [
            {
                id: 1,
                titulo: 'Biocontrol',
                img: 'http://placeimg.com/640/640/nature/grayscale'
            },
            {
                id: 1,
                titulo: 'Bioestimulantes',
                img: 'http://placeimg.com/640/640/nature/grayscale'
            },
            {
                id: 1,
                titulo: 'Fertilización Innovadora',
                img: 'http://placeimg.com/640/640/nature/grayscale'
            }
        ];
    }]);
