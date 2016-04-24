(function () {

    var app = angular.module('IndexApp');

    app.controller('destaqueController', ['$scope', function ($scope) {
        $scope.title = "PRODUTOS EM DESTAQUE";
        $scope.cards = [
            {
             'productImagerl': "ryuu.jpg",
             'productName': "Ryu",
             'productEspecification': "vem com hadouken",
             'productPrice': "3700",
             'productUrl': '#'
            },
            {
             'productImagerl': "ken.jpg",
             'productName': "Ken",
             'productEspecification': "vem com shoryuken",
             'productPrice': "2700",
             'productUrl': '#'
            },
            {
             'productImagerl': "akuma.jpg",
             'productName': "Akuma",
             'productEspecification': "especial tela preta",
             'productPrice': "2700",
             'productUrl': '#'
            }
        ];
    }]);

    app.controller('novidadesController', ['$scope', '$http', function ($scope, $http) {
        $scope.title = "NOVIDADES";
        $scope.cardError = false;
        $scope.cards = [];
        $scope.getProductData = function () {
            $http({
                method:"GET",
                url: 'data.json'
            }).then(function success(response) {
                var products = response.data;
                $scope.cards = products;

            }, function err(response) {
                console.log(response);
                $scope.cardError = true;
            });
        };
        $scope.getProductData();
    }]);

}());
