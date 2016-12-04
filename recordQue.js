angular.module("ngRecordQue", []).directive('recordQue',function(){
	'use strict';
	console.log('return the prime directive');
	return {
		 restrict:'E'
		,replace: true
		,transclude: false 
		,scope:{ d:'=' }
		,template: '<table class="recordQue"><tr><td id="nw" class="{{::d.nw}}"></td><td id="ne" class="{{::d.ne}}"></td></tr><tr><td id="sw" class="{{::d.sw}}"></td><td id="se" class="{{::d.se}}"></td></tr></table>'
		,controller:function($scope){
			console.log('data: ',$scope.d);	
		}
	};
});