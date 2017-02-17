'use strict';

/**
 * @ngdoc service
 * @name vngdoorviewApp.SessionService
 * @description
 * # SessionService
 * Factory in the vngdoorviewApp.
 */
angular.module('myApp')
        .factory('SessionService', ['$cookieStore', '$window', function ($cookieStore, $window) {

                return {
                    logIn: function (sessionId, userName, isAdmin) {
                        var user = {sessionId: sessionId, userName: userName, isAdmin: isAdmin};
                        $cookieStore.put('v2_user', user);
                    },
                    logOut: function () {
                        $cookieStore.remove('v2_user');
                        $window.location.reload();
                    },
                    getUser: function () {
                        return $cookieStore.get('v2_user');
                    },
                    getSessionId: function ()
                    {
                        var user = this.getUser();
                        if (user !== undefined) {
                            return user.sessionId;
                        }
                        return null;
                    }
                };
            }]);
