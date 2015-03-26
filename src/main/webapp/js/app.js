/*jshint unused: false */
/*global angular:true */
// Declare app level module
var App = angular.module('App', []);
(function () {
    'use strict';

    App.controller("HelloCtrl", ['$scope', '$http', function ($scope, $http) {
            $scope.name = undefined;
            $scope.message = undefined;

            $scope.getMessage = function () {
                $http.get('hello/' + $scope.name)
                        .then(function (response) {
                            $scope.message = response.data;
                        });
            };
        }]);

    App.controller('ToDoCtrl', ['$scope', '$http', function ($scope, $http) {

            $scope.priorities = ['Loading priorities...'];
            $scope.tasks = [];

            $scope.initPriorities = function () {
                $http.get('tasks/priorities')
                        .then(function (response) {
                            $scope.priorities = response.data;

                            $scope.initNewTask();
                        });
            };

            $scope.initNewTask = function () {
                $scope.newTask = {
                    label: '',
                    priority: $scope.priorities[0]
                };
            };

            $scope.refreshTasks = function () {
                $http.get('tasks').then(function (response) {
                    $scope.tasks = response.data;
                });
            };

            $scope.addTask = function () {
                $http.post('tasks', $scope.newTask)
                        .then(function () {
                            $scope.initNewTask();
                            $scope.refreshTasks();
                        });
            };

            $scope.initPriorities();
            $scope.initNewTask();

            // Fetch existing tasks at loading
            $scope.refreshTasks();
        }]);

})();