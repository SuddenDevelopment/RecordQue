angular.module("ngRecordQue", []).directive('recordQue',function(){
	'use strict';
	return {
		 restrict:'E'
		,replace: true
		,transclude: false 
		,scope:{ d:'=' }
		,template: '<div class="recordQue"><table><tr><td id="nw" class="{{::d.nw}}"></td><td id="ne" class="{{::d.ne}}"></td></tr><tr><td id="sw" class="{{::d.sw}}"></td><td id="se" class="{{::d.se}}"></td></tr></table><i ng-if="d.center!==false" class="fa fa-lg centerIcon {{::d.center}}"></i></div>'
		,controller:function($scope){
			//add a little flexibility can define classes as space separated or an array, becasue arrays are often easier to work with
			if($scope.d.nw.constructor === Array){ $scope.d.nw=$scope.d.nw.join(' '); }
			if($scope.d.ne.constructor === Array){ $scope.d.ne=$scope.d.ne.join(' '); }
			if($scope.d.sw.constructor === Array){ $scope.d.sw=$scope.d.sw.join(' '); }
			if($scope.d.se.constructor === Array){ $scope.d.se=$scope.d.se.join(' '); }
			if($scope.d.hasOwnProperty('center') && $scope.d.center.constructor === Array){ $scope.d.se=$scope.d.center.join(' '); }
			if($scope.d.center===''){$scope.d.cente=false;}
		}
	};
});