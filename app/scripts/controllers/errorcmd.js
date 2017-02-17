'use strict';

/**
 * @ngdoc function
 * @name myAppApp.controller:ErrorcmdCtrl
 * @description
 * # ErrorcmdCtrl
 * Controller of the myAppApp
 */
angular.module('myApp')
        .controller('ErrorcmdCtrl', ['$scope', '$modalInstance', 'msg', '$timeout',
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
                    $scope.msgList = [{type: 'danger', content: msg}];
//		    $timeout($scope.cancel, 1000);
                };

                $scope.showMsg(msg);
                $scope.init = function ()
                {
                    $scope.errorMsg = msg;
                };
                $scope.init();


            }]);
