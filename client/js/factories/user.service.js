// interaction with web api
﻿(function () {
    'use strict';

    angular.module('app').factory('UserService', Service);

    function Service($http, $q) {
        var service = {};

        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetCurrent = GetCurrent;
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;

        return service;
        function GetCurrent() {
            return $http.get('https://vast-scrubland-38554.herokuapp.com/api/users/current').then(handleSuccess, handleError);
        }
        function GetById(_id) {
            return $http.get('https://vast-scrubland-38554.herokuapp.com/api/users/' + _id).then(handleSuccess, handleError);
        }
        function GetAll() {
            return $http.get('https://vast-scrubland-38554.herokuapp.com/api/users').then(handleSuccess, handleError);
        }

        function GetByUsername(username) {
            return $http.get('https://vast-scrubland-38554.herokuapp.com/api/users/' + username).then(handleSuccess, handleError);
        }
        function Create(user) {
            return $http.post('https://vast-scrubland-38554.herokuapp.com/api/users', user).then(handleSuccess, handleError);
        }
        function Update(user) {
            return $http.put('https://vast-scrubland-38554.herokuapp.com/api/users/' + user._id, user).then(handleSuccess, handleError);
        }
        function Delete(_id) {
            return $http.delete('https://vast-scrubland-38554.herokuapp.com/api/users/' + _id).then(handleSuccess, handleError);
        }
        function handleSuccess(res) {
            return res.data;
        }
        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
