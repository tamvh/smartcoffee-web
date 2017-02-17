'use strict';
/**
 * @ngdoc service
 * @name myAppApp.ErrorCMDService
 * @description
 * # ErrorCMDService
 * Factory in the myAppApp.
 */
angular.module('myApp')
	.factory('ErrorCMDService', ['$modal',
	    function ($modal) {

		return {
		    displayError: function (msg) {
			$modal.open({
			    templateUrl: 'views/errorcmd.html',
			    controller: 'ErrorcmdCtrl',
			    resolve: {
				msg: function () {
				    return msg;
				}
			    }
			});
		    }

		}
		;
	    }]);
