//----====|| Angular App ||====----\\
var app = angular.module('Demo', ['ngMaterial']).config(function($mdThemingProvider){ $mdThemingProvider.theme('default') });

//----====|| Angular Controller ||====----\\
app.controller('main',function($scope){

	var arrShapes=['pie','square','leaf','drop','null'];
	var arrMods=['cutout','hollow','solid'];
	$scope.arrColors=['red','tomatoe','orange','yellow','green','teal','blue','purple'];

	

	var fnRandomElement=function(arr){ return  arr[Math.floor(Math.random() * arr.length)]; };
	var fnRandomClasses=function(){
		var arrClasses=[];

		arrClasses.push(fnRandomElement(arrShapes));
		arrClasses.push(fnRandomElement(arrMods));
		//arrClasses.push(fnRandomElement(arrColors));

		return arrClasses;
	};

	$scope.arrRows = [];
	for(i=0;i<12;i++){
		var arrColumn=[];
		for(ii=0;ii<9;ii++){
			arrColumn.push(
				{
					 nw:fnRandomClasses()
					,ne:fnRandomClasses()
					,sw:fnRandomClasses()
					,se:fnRandomClasses()
				}
			);
			arrColumn[ii].nw.push($scope.arrColors[ii]);
			arrColumn[ii].ne.push($scope.arrColors[ii]);
			arrColumn[ii].sw.push($scope.arrColors[ii]);
			arrColumn[ii].se.push($scope.arrColors[ii]);
		}
		$scope.arrRows.push(arrColumn);
	}
	//console.log($scope.arrRows);
}); //----====|| End Angular Controller ||====----\\