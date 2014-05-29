angular.module("esmfamil.directive", [])
  .directive('esmfamilSlideBox', -> {
    restrict: 'E'
    templateUrl: '../slide_box_temp.html'
  }).directive('esmfamilHeader', -> {
    restrict: 'E'
    templateUrl: '../header_temp.html'
  })
