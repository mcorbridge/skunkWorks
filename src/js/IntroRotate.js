/**
 * Created by Mike on 11/10/2015.
 */
angular.module('IntroRotate', [])

	.controller('rotateSegmentCtrl', ['$scope', '$rootScope', function ($scope,$rootScope) {

		$rootScope.$on('navChanged', function(event, data) {
			if(data === 6){
				$scope.divStyle = 1;
			}else{
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		$scope.outputTxt6 = 'click SVG to start rotate';

		var tm0 = new TimelineLite();
		var tm1 = new TimelineLite();
		var tm2 = new TimelineLite();

		var isRun = false;

		$scope.doRotation = function(){

			if(!isRun){
				$scope.outputTxt6 = 'SVG rotate';
				tm0.to('.pie0', 0.5, {rotation:"90", ease:Linear.easeNone})
					.to('.pie0', 1, {rotation:"-90", ease:Linear.easeNone})
					.to('.pie0', 2, {rotation:"50", ease:Linear.easeNone});

				tm1.to('.pie1', 0.5, {rotation:"-120", ease:Linear.easeNone, delay:0.25})
					.to('.pie1', 1, {rotation:"270", ease:Linear.easeNone})
					.to('.pie1', 2, {rotation:"50", ease:Linear.easeNone});

				tm2.to('.pie2', 0.5, {rotation:"350", ease:Linear.easeNone, delay:0.5})
					.to('.pie2', 1, {rotation:"-270", ease:Linear.easeNone})
					.to('.pie2', 2, {rotation:"50", ease:Linear.easeNone, onComplete:doRotationComplete});
				isRun = true;
			}else{
				isRun = false;
				TweenLite.set('.pie0',{css: {rotation:"7"}});
				TweenLite.set('.pie1',{css:  {rotation:"140"}});
				TweenLite.set('.pie2',{css:  {rotation:"270"}});
				$scope.outputTxt6 = 'SVG rotate reset';
			}


		}

		var doRotationComplete = function(){
			$scope.outputTxt6 = 'SVG rotate complete';
			$scope.$apply();
		}

	}])