'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
    .controller('PronutivaCtrl', ['$scope', '$sce', 'API_PATH_MEDIA', 'contenidoFactory', '$interpolate', 'API_PATH', '$window', '$stateParams', '$location', '$mdDialog', function ($scope, $sce, API_PATH_MEDIA, contenidoFactory, $interpolate, API_PATH, $window, $stateParams, $location, $mdDialog) {

        $scope.API_PATH_MEDIA = API_PATH_MEDIA;
        $scope.pronutiva = [];
        $scope.cultivos = [];

        contenidoFactory.ServiceContenido('manager/Pronutiva/', 'GET', {}).then(function (data) {
            //console.log(data.data);
            $scope.pronutiva = data.data[0];
        });

        contenidoFactory.ServiceContenido('catalogos/Cultivo/', 'GET', {}).then(function (data) {
            console.log(data.data);
            $scope.cultivos = data.data;
        });

        $scope.verInfo = function (id, ev) {
            console.log(id);
            contenidoFactory.ServiceContenido('catalogos/CultivoUpdate/' + id + '/', 'GET', {}).then(function (data) {
                console.log($scope.API_PATH_MEDIA + data.data.infografia);
                var _url = $scope.API_PATH_MEDIA + data.data.infografia;
                var confirm = $mdDialog.confirm({
                    targetEvent: ev,
                    template: '<md-dialog md-theme="{{ dialog.theme || dialog.defaultTheme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">' +
                    '<md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">' +
                    '<div class="md-dialog-content-body"><img class="img-responsive" width="100%" src="' + _url + '" /></div>' +
                    '</md-dialog-content>' +
                    '<md-dialog-actions>' +
                    //'<md-button ng-click="dialog.hide()" class="md-primary md-confirm-button">Si</md-button>' +
                    '<md-button ng-click="dialog.abort()" class="md-primary md-cancel-button">Cerrar</md-button>' +
                    '</md-dialog-actions>' +
                    '</md-dialog>'
                })
                $mdDialog.show(confirm).then(function () {
                    $window.location.href = "home";
                });
            });
        }

    }]);
