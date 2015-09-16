(function () {

    'use strict';

    angular
        .module("app")
        .controller("testController", testController);

    testController.$inject = ["AwsSrv"];

    function testController(AwsSrv){
        var vm = this;

        vm.linkGoogleTokenWithAws = function(token){
            AwsSrv.setToken(token);
        }

        vm.addTestData = function(){

            var params = {
                TableName: 'Users',
                Item: {
                    'UserID': { S: "test email" },
                    data: { S: "test data" }
                }
            };

            AwsSrv.dbPut(params)
                .then(function (data) {
                    console.log(data);
                    vm.result = data;
            })
                .catch(function (error) {
                    console.error(error);
                    vm.result = error;
            });
        }
    }

})();