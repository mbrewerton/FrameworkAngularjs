angular.module('app', []);

angular.module('app')
    .directive('myAjsDirective', [
        function () {
            return {
                restrict: 'E',
                template: `
                    <h1>myAjsDirective Works!</h1>
                `
            }
        }
    ])