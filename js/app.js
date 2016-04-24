(function () {
    "use strict";
    var app = angular.module('IndexApp', [] );
    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

}());
