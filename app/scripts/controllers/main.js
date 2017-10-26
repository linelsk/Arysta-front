'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('MainCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location) {
        //Carrousel

        $scope.Indicators = "";
        $scope.Wrapper = "";
        $scope.API_PATH_MEDIA = API_PATH_MEDIA;

        carrousel();
        //Carrousel
        function carrousel() {
            contenidoFactory.ServiceContenido('manager/Slider/', 'GET', '{}').then(function (data) {
                //console.log(data.data);
                $scope.Indicators += '<ol class="carousel-indicators">';
                for (var i = 0; i < data.data.length; i++) {
                    switch (i) {
                        case 0:
                            $scope.Indicators += '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>'
                            $scope.Wrapper += '<div class="item active">' +
                                '<img src="' + API_PATH_MEDIA + data.data[i].image + '" />' +
                                '<div class="carousel-caption">' +
                                '<h2>' + data.data[i].textomensaje + '</h2>' +
                                '<br />' +
                                '<br />' +
                                '<br />' +
                                '<br />' +
                                '<a href="quinessomos" class="btn btn-lg btn-primary btn-banner">' + data.data[i].mensaje_boton + '</a>' +
                                '</div>' +                               
                                '</div>';
                            break;
                        default:
                            $scope.Indicators += '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>'
                            $scope.Wrapper += '<div class="item">' +
                                '<img src="' + API_PATH_MEDIA + data.data[i].image + '" />' +
                                '<div class="carousel-caption">' +
                                '<h2>' + data.data[i].textomensaje + '</h2>' +
                                '<br />' +
                                '<br />' +
                                '<br />' +
                                '<br />' +
                                '<a href="quinessomos" class="btn btn-lg btn-primary btn-banner">' + data.data[i].mensaje_boton + '</a>' +
                                '</div>' +
                                '</div>';
                    }

                }
                

                $scope.Indicators += '</ol>';
            });
        }

        //Seccion Azul
        contenidoFactory.ServiceContenido('manager/Seccion_azul/', 'GET', {}).then(function (data) {
            //console.log(data.data);
            $scope.seccion_azul = data.data[0];
        });

        //Video
        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        }
        contenidoFactory.ServiceContenido('manager/Seccion_video/', 'GET', {}).then(function (data) {           
            $scope.movie = { src: data.data[0].video_url, title: "Arysta" };;
        });

        //Seccion Distribuidor
        contenidoFactory.ServiceContenido('manager/Seccion_distribuidor/', 'GET', {}).then(function (data) {           
            $scope.seccion_distribuidor = data.data[0];
        });

        //Seccion Contacto
        contenidoFactory.ServiceContenido('manager/Seccion_contacto/', 'GET', {}).then(function (data) {
            $scope.seccion_contacto = data.data[0];
        });
  }]);
