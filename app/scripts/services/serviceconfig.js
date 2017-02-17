'use strict';

/**
 * @ngdoc service
 * @name myAppApp.ServiceConfig
 * @description
 * # ServiceConfig
 * Factory in the myAppApp.
 */
angular.module('myApp')
.factory('ServiceConfig', ['$location', function ($location) {
    var host = $location.host() + ':' + $location.port();
    host += '/call/';
    return {
        httpServer: 'http://' + host
    };
}]);
