(function () {
    'use strict';

    angular.module('myApp', ["ngRoute"])

        .controller('Dlv', function ($scope, $http) {
            $scope.t = "Top Delivery Times Throughout the Day";
        })

        .controller("Fltr", function ($scope, $http) {
            $http.get("https://jimit17.github.io/MCA-Sem-2-WSB-Lab-7/data.json")
            .then(function (response) {
                $scope.fd = response.data;
                $scope.rowlimit = 3;
                $scope.orderByMe = function (x) {
                    $scope.myOrderBy = x;
                }

                $scope.changeColorFilter = function (item) {

                    if (item.distance > 40) {
                        item.class = 'High';
                    }
                    else if (item.distance < 20) {
                        item.class = 'Low';
                    }
                    else {
                        item.class = 'Medium';
                    }

                    return true;

                };
            })
        })

        .controller("Srch", function ($scope, $http) {
            $http.get("https://jimit17.github.io/MCA-Sem-2-WSB-Lab-7/data.json")
            .then(function (response) {
                $scope.fd = response.data;
                $scope.rowlimit = 3;
                $scope.orderByMe = function (x) {
                    $scope.myOrderBy = x;
                }

                $scope.changeColorFilter = function (item) {

                    if (item.distance > 40) {
                        item.class = 'High';
                    }
                    else if (item.distance < 20) {
                        item.class = 'Low';
                    }
                    else {
                        item.class = 'Medium';
                    }

                    return true;

                };
            })
        })

        .config(function ($routeProvider) {
            $routeProvider
                .when("/Top_Delivery_Time", {
                    templateUrl: "Top Delivery Time.html",
                    controller: "Dlv"
                })
                .when("/Search", {
                    templateUrl: "Search.html",
                    controller: "Srch"
                })
                .when("/Filter", {
                    templateUrl: "Filter.html",
                    controller: "Fltr"
                })
        })
        
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }])
})();