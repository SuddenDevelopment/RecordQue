angular.module("ngFeatureGrid", []).directive('featureGrid', function() {
    'use strict';
    var controller = ['$scope', 'featureGridConstant', function($scope, featureGridConstant) {
        var arrIcons = featureGridConstant.icons,
            arrShapes = $scope.arrShapes = featureGridConstant.shapes,
            arrMods = $scope.arrMods = featureGridConstant.mods,
            arrColors = $scope.arrColors = featureGridConstant.colors,
            featureGridObj, recordQueRulesObj = [],
            showRecordEventListner;

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
            showRecordEventListner = $scope.$on("SHOW_RECORDQUE_RULES", function(event, data) {
                recordQueRulesObj = data;
                normalizeRecordQueData(angular.copy(data));
            });
            $scope.$on('$destroy', function() {
                removeAllListners();
            });
        }

        function normalizeRecordQueData(data) {
            angular.forEach(data, function(value, index) {
                featureGridObj.recordQue[value.region].push(value);
            });
        }

        function removeAllListners() {
            showRecordEventListner();
        }

        $scope.fnAddRecordQueRule = function() {
            console.log(featureGridObj.shape, featureGridObj.color);
            var recordQueRuleData = {
                'region': featureGridObj.region,
                'path': featureGridObj.path,
                'value': featureGridObj.value,
                'op': featureGridObj.op,
                'class': [featureGridObj.shape, featureGridObj.color].join(' ')
            }
            featureGridObj.recordQue[featureGridObj.region].push(recordQueRuleData);
            recordQueRulesObj.push(recordQueRuleData);
        };

        $scope.fnSaveRecordQueRules = function() {
            $scope.$emit("SAVE_RECORDQUE_RULES", recordQueRulesObj);
            removeAllListners();
        }
    }];


    return {
        restrict: 'E',
        replace: true,
        templateUrl: function(element, attrs) {
            if (attrs.isDemo) {
                return './featureGrid.htm';
            } else {
                return "../node_modules/RecordQue/featureGrid.htm";
            }
        },
        controller: controller
    };
});
