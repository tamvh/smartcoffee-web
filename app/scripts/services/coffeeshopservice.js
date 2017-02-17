'use strict';
/**
 * @ngdoc service
 * @name myAppApp.UserService
 * @description
 * # UserService
 * Factory in the myAppApp.
 */
angular.module('myApp')
        .factory('CoffeeShopService', ['$resource', 'ServiceConfig', 'SessionService',
            function ($resource, ServiceConfig, SessionService) {
                var apiUrl = ServiceConfig.httpServer;
                var Resource = $resource(apiUrl + '/api/user/device/:id', {id: '@deviceid'}, {
                    add: {method: 'POST', url: apiUrl + '/api/coffee/choose/'}
                });
                
                var _add = function (data, successCallback, errorCallback) {
                    Resource.add(data, function (response) {
                        if (response.error) {
                            errorCallback();
                            return;
                        }

                        successCallback(response);
                    }, errorCallback)
                };
                
                return {                   
                    add: _add
                };                               
            }]);