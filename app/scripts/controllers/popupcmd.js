'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:ErrorcmdCtrl
 * @description
 * # ErrorcmdCtrl
 * Controller of the myAppApp
 */
angular.module('myApp')
        .controller('PopupcmdCtrl', ['$scope', '$modalInstance', 'msg', '$timeout',
            function ($scope, $modalInstance, msg, $timeout) {

                $scope.msgList = [];

                $scope.clearMsg = function () {
                    $scope.cancel();
                    $scope.msgList = [];
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };

                $scope.ok = function () {
                    $modalInstance.close();
                };

                $scope.showMsg = function (msg) {
                    $scope.msgList = [{type: 'success', content: msg}];
		    $timeout($scope.cancel, 3000);
                };

                $scope.showMsg(msg);
                $scope.init = function ()
                {
                    $scope.popupMsg = msg;
                };
                $scope.init();


            }]);
