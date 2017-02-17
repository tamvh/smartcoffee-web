'use strict';

var app = angular.module('myApp');
app.controller('LoginCtrl', ['$scope', '$resource', '$cookieStore', '$window',
	'SessionService', 'UserService', 'ErrorCMDService',
	function ($scope, $resource, $cookieStore, $window,
			SessionService, UserService, ErrorCMDService) {

		$scope.localUser = {uname: '', password: ''};
		$scope.login = function () {
			var resp = UserService.logIn({
				user: $scope.localUser.uname,
				password: $scope.localUser.passwd

			}, function () {
				if (resp.error_code === 0) {
					$scope.ok(resp.data.sessionId, $scope.localUser.uname, resp.data.isAdmin);
				} else {
					$scope.showMsg('Login failed');
				}
			});
		};


		$scope.cancel = function () {
//			$modalInstance.dismiss();
			$window.location.reload();
		};

		$scope.ok = function (sessionId, userName, isAdmin) {
			
			SessionService.logIn(sessionId, userName, isAdmin);
			window.location.href='/#/home';
			$window.location.reload();
			//$modalInstance.close('Login Success');

		};
		$scope.msgList = [];
		$scope.clearMsg = function () {
			$scope.msgList = [];
		};
		$scope.showMsg = function (msg) {
			$scope.msgList = [{type: 'danger', content: msg}];
		};

	}
]);