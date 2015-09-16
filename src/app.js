(function () {

    'use strict';

    angular.module('app', ['app.aws']);

    angular
        .module("app")
        .config(['AwsSrvProvider', function (AWSSrvProvider) {
            AWSSrvProvider.setRegion('us-east-1');
            AWSSrvProvider.setRoleArn('arn:aws:iam::063990526105:role/googleAuthFatso');
            AWSSrvProvider.setDynamoEndpoint('dynamodb.us-east-1.amazonaws.com');
        }]);

})();