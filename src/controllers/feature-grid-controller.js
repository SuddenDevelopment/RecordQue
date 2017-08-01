var app = angular.module('featureGrid');
app.controller('featureGridController', ['$scope', 'featureGridConstant', function($scope, featureGridConstant) {
    var arrIcons = featureGridConstant.icons,
        arrShapes = $scope.arrShapes = featureGridConstant.shapes,
        arrMods = $scope.arrMods = featureGridConstant.mods,
        arrColors = $scope.arrColors = featureGridConstant.colors,
        featureGridObj;

    initialize();

    function initialize() {
        $scope.tmp = featureGridObj = {};
        featureGridObj.recordQue = {
            c: [],
            nw: [],
            ne: [],
            sw: [],
            se: []
        };

        $scope.arrRows = [];
        for (i = 0; i < 12; i++) {
            var arrColumn = [];
            for (ii = 0; ii < 9; ii++) {
                arrColumn.push({
                    nw: fnRandomClasses(),
                    ne: fnRandomClasses(),
                    sw: fnRandomClasses(),
                    se: fnRandomClasses(),
                    c: fnRandomElement(arrIcons)
                });
                arrColumn[ii].nw.push(arrColors[ii]);
                arrColumn[ii].ne.push(arrColors[ii]);
                arrColumn[ii].sw.push(arrColors[ii]);
                arrColumn[ii].se.push(arrColors[ii]);
            }
            $scope.arrRows.push(arrColumn);
        }
    }

    function fnRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function fnRandomClasses() {
        var arrClasses = [];
        arrClasses.push(fnRandomElement(arrShapes));
        arrClasses.push(fnRandomElement(arrMods));
        //arrClasses.push(fnRandomElement(arrColors));
        return arrClasses;
    }

    $scope.fnRecordQueExample = function(objIn) {
        var objOut = {};
        objOut[$scope.region] = [objIn.shape, objIn.mod, objIn.color];
        return objOut;
    };

    $scope.fnAddRecordQueRule = function() {
        console.log(featureGridObj.shape, featureGridObj.color);
        featureGridObj.recordQue[featureGridObj.region].push({
            'region': featureGridObj.region,
            'path': featureGridObj.path,
            'value': featureGridObj.value,
            'op': featureGridObj.op,
            'class': [featureGridObj.shape, featureGridObj.color].join(' ')
        });
    }
}]);
