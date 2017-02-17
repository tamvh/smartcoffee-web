'use strict';
/**
 * @ngdoc overview
 * @name upphotoviewApp
 * @description
 * # upphotoviewApp
 *
 * Main module of the application.
 */
angular.module('myApp', [
    'ngResource',
    'ngRoute',
    'ngCookies',
    'ui.bootstrap',
    'smart-table'

])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/home', {
                        templateUrl: 'views/home.html',
                        controller: 'MainCtrl',
                        activetab: 'home'
                    })
                    .when('/log', {
                        templateUrl: 'views/log.html',
                        controller: 'LogCtrl',
                        activetab: 'log'
                    })
                    .otherwise({
                        redirectTo: '/home'
                    });
        })

        .controller('IndexCtrl', ['$scope', '$cookieStore', '$modal', '$window',
            'SessionService', 'ErrorCMDService', 'UserService',
            function ($scope, $cookieStore, $modal, $window,
                    SessionService, ErrorCMDService, UserService) {

                $scope.showLogin = function () {
                    $modal.open({
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl'
                    });
                };
                $scope.isLoggedIn = function () {
                    return SessionService.getUser() !== undefined;
                };
                $scope.logOut = function () {
                    SessionService.logOut();
                };
                $scope.getProfile = function () {
                    var resp = UserService.getUserBySession({
                    }, function () {
                        if (resp.error_code === 0)
                        {
                            $modal.open({
                                templateUrl: 'views/userdetail.html',
                                controller: 'UserDetailCtrl',
                                resolve: {
                                    cb: function () {
                                        return undefined;
                                    },
                                    user: function () {
                                        return resp.data;
                                    }
                                }
                            });
                        }
                        else
                        {
                            ErrorCMDService.displayError('No Permission');
                        }
                    });
                };
                $scope.getUserMenu = function ()
                {
                    return $cookieStore.get('user');
                };
                $scope.userMenu = $scope.getUserMenu();
                $scope.getMenuTabs = function () {

                    var tabs;
                    tabs = [{name: 'home', path: '#/home', title: 'Home', bcolor: ''}];
                    tabs.push({name: 'users', path: '#/users', title: 'Users', bcolor: ''});
                    tabs.push({name: 'groups', path: '#/groups', title: 'Groups', bcolor: ''});
                    tabs.push({name: 'doors', path: '#/doors', title: 'Doors', bcolor: ''});
                    tabs.push({name: 'logs', path: '#/logs/all', title: 'Logs', bcolor: ''});
                    return tabs;
                };
                $scope.menutabs = $scope.getMenuTabs();
                $scope.init = function () {

                    var sessionId = SessionService.getSessionId();
                    if (sessionId)
                    {
                        $scope.showMenu = true;
                    }
                    var menuItem = getMenuItem();
                    for (var i = 0; i < $scope.menutabs.length; ++i)
                    {
                        if ($scope.menutabs[i].name == menuItem)
                        {
                            $scope.menutabs[i].bcolor = '#eee';
                        }
                        else
                        {
                            $scope.menutabs[i].bcolor = '';
                        }
                    }
                };
                $scope.init();

                function getMenuItem()
                {
                    var url = window.location.href.split('#/')[1];
                    var param = url.split('/')[0];
                    return param;
                }

                $scope.focusMenu = function (menuItem)
                {
                    for (var i = 0; i < $scope.menutabs.length; ++i)
                    {
                        if ($scope.menutabs[i].name == menuItem)
                        {
                            $scope.menutabs[i].bcolor = '#eee';
                        }
                        else
                        {
                            $scope.menutabs[i].bcolor = '';
                        }
                    }
                };
            }]);

