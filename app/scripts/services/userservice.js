'use strict';
/**
 * @ngdoc service
 * @name myAppApp.UserService
 * @description
 * # UserService
 * Factory in the myAppApp.
 */
angular.module('myApp')
	.factory('UserService', ['$resource', 'ServiceConfig', 'SessionService',
	    function ($resource, ServiceConfig, SessionService) {
		var apiUrl = ServiceConfig.getUrl();
		var sessionId = SessionService.getSessionId();

		return $resource(null, {
		    sessionId: sessionId
		}, {
		    logIn: {
			method: 'GET',
			url: apiUrl + '?method=user.signin&user=:user&password=:password'
		    },
		    addUser: {
			method: 'GET',
			url: apiUrl + '?method=user.add&user=:user&password=:password'
		    },
		    getUser: {
			method: 'GET',
			url: apiUrl + '?method=user.get'
		    },
		    updateUserPassword: {
			method: 'GET',
			url: apiUrl + '?method=user.update.password&password=:password' +
				 '&newPassword=:newPassword' + '&repeatPassword=:repeatPassword'
		    },
		    listUser: {
			method: 'GET',
			url: apiUrl + '?method=user.list'
		    },
		    getUserBySession: {
			method: 'GET',
			url: apiUrl + '?method=user.getBySession'
		    },
		    disableUser: {
			method: 'GET',
			url: apiUrl + '?method=user.disableUser&userId=:userId&flag=:flag'
		    }
		});
	    }]);