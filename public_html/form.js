/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';


var myapp = angular.module('myapp', []);
 

myapp.directive('ngCompare', function () {
 return {
 require: 'ngModel',
 link: function (scope, currentEl, attrs, ctrl) {
 var comparefield = document.getElementsByName(attrs.ngCompare)[0];
 compareEl = angular.element(comparefield);
 
 currentEl.on('keyup', function () {
 if (compareEl.val() != "") {
 var isMatch = currentEl.val() === compareEl.val();
 ctrl.$setValidity('compare', isMatch);
 scope.$digest();
 }
 });
 
 compareEl.on('keyup', function () {
 if (currentEl.val() != "") {
 var isMatch = currentEl.val() === compareEl.val();
 ctrl.$setValidity('compare', isMatch);
 scope.$digest();
 }
 });
 }
 }
});
 

myapp.controller('form', function ($scope) {
  
 $scope.submitForm = function () {
  $scope.submitted = true;
 
 if ($scope.userForm.$valid) {
         $location.path("/login" );
 }
 else {
 alert("Please correct errors!");
 }
 };
});
 

