'use strict';
/**
 * @ngdoc service
 * @name myAppApp.ErrorCMDService
 * @description
 * # ErrorCMDService
 * Factory in the myAppApp.
 */
angular.module('myApp')
	.factory('PupupCMDService', ['$modal',
	    function ($modal) {

		return {
		    displayPopup: function (msg) {
			$modal.open({
			    templateUrl: 'views/popupcmd.html',
			    controller: 'PopupcmdCtrl',
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
