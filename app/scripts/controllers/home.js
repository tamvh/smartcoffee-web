'use strict';

/**
 * @ngdoc function
 * @name upphotoviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanplayApp
 */
//angular.module('myApp')
//		.controller('MainCtrl', function ($scope, $route) {
//			$scope.$route = $route;
//			$scope.things = [];
//		});
//		
//		
//'use strict';
var app = angular.module('myApp');
app.controller('MainCtrl', ['$scope', 'PupupCMDService', 'SessionService', 'CoffeeShopService',
    function ($scope, PupupCMDService, SessionService, CoffeeShopService) {
        var notification = 'Yêu cầu đang được thực hiện';
        $scope.init = function ()
        {
            var sessionId = SessionService.getSessionId();
            $scope.sessionId = sessionId;
        };

        $scope.selectCoffeeCup = function (type)
        {
            PupupCMDService.displayPopup(notification);            
            CoffeeShopService.add({
                type: type
              }, function () {             
              });
        };
        
        
            
        $scope.init();
    }
]);
