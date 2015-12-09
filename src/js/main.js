/**
 * Created by Mike on 11/7/2015.
 */

angular.module('main', ['IntroRotate'])

	.controller('titleHeadCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		var titles = [
			'A place to try out code that might stink',
			'Try your stinky code out here.',
			'A stinky little corner of code heaven.',
			'No one here cares if your code still breaks.',
			'It may look sweet, but it still stinks.',
			'No air freshener will save this code.',
			'Putting lipstick on this code will not help.',
			"I'll try not to gag - let me have a look...",
			'I coded. It stank. I refactored. (no Latin translation)',
			'Kurtz: [voiceover] The horror... the horror...',
			'Terminate this code with extreme prejudice.',
			'And the "Worst Coding Award" goes to...',
			'Houston ... we have a problem.',
			'No one has a hope in hell of maintaining this code.',
			'Lie in the comments. You don\'t have to actively lie, just fail to keep comments as up to date with the code',
			'Make sure that every method does a little bit more (or less) than its name suggests',
			'Ignore the conventions for where to use upper case in variable and class names',
			'Never EVER put a comment on a variable',
			'Try to pack as much as possible into a single line',
			'Never use an automated source code tidier to keep your code aligned',
			'To break the boredom, use a thesaurus to look up as much alternate vocabulary as possible to refer to the same action',
			'I used to think I was the best programmer in the world',
			'ERROR!! User has just attempted to use program in the manner program was meant to be used. Options: 1) Weep  2)Erase Computer',
			'Disclaimer: I have no idea what I\'m talking about.',
			'"Simple is better than complex." - Tim Peters, The Zen of Python',
			'Bikeshedding: Tendency to spend excessive amounts of time debating and deciding on trivial and often subjective issues',
			'Class Fear: Fear of breaking large classes into several smaller classes.',
			'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.- Bill Gates'
		];
		var max = titles.length - 1;
		var min = 0;
		var rnd = Math.floor(Math.random() * (max - min + 1)) + min;
		$scope.titleHead = titles[rnd];

		$scope.changeHeader = function () {

			if (rnd === max) {
				rnd = 0;
			} else {
				rnd++
			}
			$scope.titleHead = titles[rnd];
		}

	}])

	.controller('navCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$scope.navClick = function (item) {
			$rootScope.$emit('navChanged', item);
		}
	}])

	.controller('lodashCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 0) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = 1;

		var chunk = ['a', 'b', 'c', 'd'];
		var chunkResult = _.chunk(chunk, 2);

		var compact = [0, 1, false, 2, '', 3];
		var compactResult = _.compact(compact);

		var difference = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5];
		var differenceResult = _.difference([0, 2, 3, 7], difference);

		var drop = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 5];
		var dropResult = _.drop(drop, 3);

		$scope.outputTxt0 =

			'CHUNK creates an array of elements split into groups the length of size. If collection can not be split evenly, the final chunk will be the remaining elements\n' +
			chunk.toString() + ' = ' + chunkResult + '\n\n' +

			'COMPACT creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.\n' +
			'compact: ' + compact.toString() + ' = ' + compactResult + '\n\n' +

			'DIFFERENCE Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.\n' +
			difference.toString() + ' = ' + differenceResult + '\n\n' +

			'DROP Creates a slice of array with n elements dropped from the beginning.\n' +
			drop.toString() + ' = ' + dropResult + '\n\n';

	}])

	.controller('mapCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 1) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = 0;

		var map = {};
		map["key1"] = "value1";
		map["key2"] = "value2";

		var txt = '';

		for (var item in map) {
			txt += item + ' = ' + map[item] + '\n';
		}

		$scope.outputTxt1 = txt;
	}])

	.controller('closureCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 2) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		var counter = (function () {
			var i = 0; // this var is 'private' or encapsulated inside the IIFE function
			return {
				get: function () { // similar to a public method
					return i;
				},
				set: function (val) {  // similar to a public method
					i = val;
				},
				increment: function () {  // similar to a public method
					return ++i;
				}
			};
		}());

		$scope.outputTxt2 = 'javascript closure example\n\n';
		counter.set(1);
		$scope.outputTxt2 += '                ' + counter.get() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';
		$scope.outputTxt2 += '                ' + counter.increment() + '\n';


	}])

	.controller('segmentCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		var rotationNdx = 0;
		$scope.segmentClick = function () {
			rotationNdx = rotationNdx + 10;
			$scope.rotation = 'rotate(' + rotationNdx + ')deg';
			console.log($scope.rotation);
		}

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 3) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

	}])

	.controller('instanceCtrl', ['$scope', '$rootScope', 'User', function ($scope, $rootScope, User) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 4) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		var newUser = new User('Mike');

		$scope.outputTxt4 = 'using angularjs factory to instantiate a javascript object\n\n\n';

		$scope.outputTxt4 += 'instance  of object "User" = ' + newUser.toString();

	}])

	.controller('gsapCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 5) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		$scope.outputTxt5 = 'GSAP and TweenLite';

		var tm0;

		$scope.doRotate = function () {
			doCWRotate();
		};

		$scope.stopRotation = function () {
			tm0.pause();
		};

		var doCWRotate = function () {
			tm0 = TweenMax.to('.test', 2, {rotation: "360", ease: Linear.easeNone, repeat: -1});
		}
	}])

	.controller('svgLineCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

		$rootScope.$on('navChanged', function (event, data) {
			if (data === 7) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		$scope.outputTxt6 = 'SVG line draw';

		var isClicked = false;
		var tm = new TimelineMax({});

		$scope.doDrawSVG = function () {
			if (!isClicked) {
				TweenLite.set(".line0", {visibility: 'visible'});
				TweenLite.set(".line1", {visibility: 'visible'});
				tm.add(TweenLite.fromTo(".line0", 0.25, {drawSVG: "0%"}, {drawSVG: "100%"}));
				tm.add(TweenLite.fromTo(".line1", 0.25, {drawSVG: "0%"}, {
					drawSVG: "100%",
					onComplete: doDrawComplete
				}));
				isClicked = true;
			} else {
				tm.add(TweenLite.fromTo(".line0", 0.25, {drawSVG: "100%"}, {drawSVG: "0%"}));
				tm.add(TweenLite.fromTo(".line1", 0.25, {drawSVG: "100%"}, {
					drawSVG: "0%",
					onComplete: doDrawComplete
				}));
				isClicked = false;
			}

		}

		var doDrawComplete = function () {
			console.log('doDrawComplete');
		}

	}])

	.controller('svgRectCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 8) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;
		TweenLite.set(".rect1", {rotationY: 180, transformOrigin: "50% 50%"});

		var isClicked = false;
		var tm = new TimelineMax({});

		$scope.doRectDraw = function () {

			if (!isClicked) {
				TweenLite.set(".rect0", {visibility: 'visible'});
				TweenLite.set(".rect1", {visibility: 'visible'});
				tm.add(TweenLite.fromTo([".rect0", ".rect1"], 1, {drawSVG: "0%"}, {drawSVG: "100%"}));
			} else {
				TweenLite.set(".rect0", {visibility: 'hidden'});
				TweenLite.set(".rect1", {visibility: 'hidden'});
			}
			isClicked = !isClicked;

		}
	}])

	.controller('bounceCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 9) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;
		$scope.outputTxt9 = 'Intended as a hint to a user that something needs to be done (clicked on).';

		var isClicked = false;

		$scope.startBounce = function () {
			if (!isClicked) {
				TweenMax.to('.bouncer', 1, {
					top: "50px", ease: Bounce.easeOut, repeat: 5, onComplete: function () {
						console.log('bounce');
					}
				});
			} else {
				TweenMax.set('.bouncer', {css: {top: "30px"}});
			}
			isClicked = !isClicked;
		}

		;
	}])

	.controller('flipCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 10) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;


		TweenLite.set(".cardWrapper", {perspective:400});
		TweenLite.set(".back", {rotationX:180});
		TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

		var pauseTime = 5;

		//TweenLite.delayedCall(pauseTime, workCardsRotation);

		var workCardsRotation = function() {
			//console.log("currentCard : " + currentCard);
			TweenLite.to('#wrap1 .card', 2, {rotationX:-180, transformOrigin:"left 95px", transformStyle:"preserve-3d", ease:Back.easeInOut});
			//TweenLite.to('#wrap1 .card', 2, {rotationX:-360, transformOrigin:"left 95px", transformStyle:"preserve-3d", ease:Back.easeInOut, delay:pauseTime});
		}

		 var resetCard = function() {
			//console.log(cardsArray[currentCard]);
			TweenLite.set('#wrap1 .card', {rotationX:0});
			TweenLite.delayedCall(pauseTime, workCardsRotation);
		};

		var count = 0;
		$scope.doFlip = function(arg){
			console.log('count ' + count++);
			workCardsRotation();
		}



	}])

	.controller('svgTxtCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 11) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		$scope.doTextDraw = function () {
			TweenMax.to('.svgTxt', 10, {drawSVG: '50%'});
		}
	}])

	.controller('dynamicDivCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 12) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;
		$scope.count = 0;

		$scope.getChildren = function () {
			console.log('** do tween?');
			var xVal = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			var yVal = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
			console.log('x:' + xVal + ' y:' + yVal);
			TweenMax.set('#row' + $scope.count, {x: xVal, y: yVal, opacity: 1});
		}

		$scope.getRow = function (event, data) {
			console.log('row ' + data + ' clicked: ');
			console.log(event);
		}

	}])

	.controller('divStudyCtrl', ['$scope', '$rootScope', '$interval', function ($scope, $rootScope, $interval) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 13) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		var toggleBox = 0;
		var boxMover;

		$scope.stopBoxMover = function () {
			$interval.cancel(boxMover);
		}

		$scope.startBoxMover = function () {
			boxMover = $interval($scope.moveBox, 250);
		}

		$scope.moveBox = function () {
			var xVal = Math.floor(Math.random() * (900 - 0 + 1)) + 0;
			var yVal = Math.floor(Math.random() * (400 - 0 + 1)) + 0;
			switch (toggleBox) {
				case 0:
					TweenMax.set('.box0', {x: xVal, y: yVal, opacity: 1});
					break;
				case 1:
					TweenMax.set('.box1', {x: xVal, y: yVal, opacity: 1});
					break;
				case 2:
					TweenMax.set('.box2', {x: xVal, y: yVal, opacity: 1});
					break;
				case 3:
					TweenMax.set('.box3', {x: xVal, y: yVal, opacity: 1});
					toggleBox = -1;
					break;
			}
			toggleBox++;
			//$scope.$apply();
		}
	}])

	.controller('svgDrawTextCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 14) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});


		$scope.divStyle = -1;

		var isClicked = false;

		$scope.doTextDraw = function () {
			TweenLite.set('.svgStroke',{css:{visibility:'visible'}});
			if(!isClicked){
				TweenLite.to('.svgStroke',1,{drawSVG:0});
			}else{
				TweenLite.to('.svgStroke',1,{drawSVG:'100%'});
			}
			isClicked = !isClicked;
		}

	}])

	.controller('clipArtCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 15) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});


		$scope.divStyle = -1;
		var isTweened = false;

		var arrPath = [];
		var pathNumStart = 4145;

		for(var n=0; n<38; n++){
			var tmp = '#path' + pathNumStart;
			pathNumStart = pathNumStart + 2;
			arrPath.push(tmp);
		}

		console.log(arrPath);

		$scope.startTween = function(){
			if(!isTweened){
				for(var n=0; n<arrPath.length; n++){
					TweenLite.to(arrPath[n],5,{drawSVG:0});
				}
			}else{
				for(var n=0; n<arrPath.length; n++){
					TweenLite.to(arrPath[n],5,{drawSVG:'100%'});
				}
			}
			isTweened = !isTweened;
		}

	}])

	.controller('pngToSvgCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 16) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		$scope.finishLoading = function() {
			   console.log('made with angularjs svg loaded!')
		}


	}])

	.controller('labellaCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 17) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

// ---------------------------------------------------
// Create dummy data
// ---------------------------------------------------

		var data = [
			{date: new Date(2015,0,9), name: 'Snape'},
			{date: new Date(2015,0,30), name: 'Lily'},
			{date: new Date(2015,2,1), name: 'Ron'},
			{date: new Date(2015,2,27), name: 'James'},
			{date: new Date(2015,5,5), name: 'Draco'},
			{date: new Date(2015,6,30), name: 'Neville'},
			{date: new Date(2015,6,31), name: 'Harry'},
			{date: new Date(2015,8,19), name: 'Hermione'},
			{date: new Date(2015,11,6), name: 'Hagrid'},
			{date: new Date(2015,11,31), name: 'Voldemort'}
		];

		var formatDate = d3.time.format('%b %e');

		var options =   {
			margin: {left: 20, right: 20, top: 20, bottom: 20},
			initialWidth: 800,
			initialHeight: 220
		};

		var innerWidth =  options.initialWidth - options.margin.left - options.margin.right;
		var innerHeight = options.initialHeight - options.margin.top - options.margin.bottom;
		var colorScale = d3.scale.category10();

		var vis = d3.select('#timeline')
			.append('svg')
			.attr('width',  options.initialWidth)
			.attr('height', options.initialHeight)
			.append('g')
			.attr('transform', 'translate('+(options.margin.left)+','+(options.margin.top)+')');

		function labelText(d){
			return formatDate(d.date) + ' - ' + d.name;
		}

// compute labels dimension
		var dummyText = vis.append('text');

		var timeScale = d3.time.scale()
			.domain(d3.extent(data, function(d){return d.date;}))
			.range([0, innerWidth])
			.nice();

		var nodes = data.map(function(movie){
			var bbox = dummyText.text(labelText(movie))[0][0].getBBox();
			movie.h = bbox.height;
			movie.w = bbox.width;
			return new labella.Node(timeScale(movie.date), movie.w + 9, movie);
		});

		dummyText.remove();

// ---------------------------------------------------
// Draw dots on the timeline
// ---------------------------------------------------

		vis.append('line')
			.classed('timeline', true)
			.attr('x2', innerWidth);

		var linkLayer = vis.append('g');
		var labelLayer = vis.append('g');
		var dotLayer = vis.append('g');

		dotLayer.selectAll('circle.dot')
			.data(nodes)
			.enter().append('circle')
			.classed('dot', true)
			.attr('r', 3)
			.attr('cx', function(d){return d.getRoot().idealPos;});

		function color(d,i){
			return '#888';
		}

//---------------------------------------------------
// Labella has utility to help rendering
//---------------------------------------------------

		var renderer = new labella.Renderer({
			layerGap: 60,
			nodeHeight: nodes[0].data.h,
			direction: 'bottom'
		});

		function draw(nodes){
			// Add x,y,dx,dy to node
			renderer.layout(nodes);

			// Draw label rectangles
			var sEnter = labelLayer.selectAll('rect.flag')
				.data(nodes)
				.enter().append('g')
				.attr('transform', function(d){return 'translate('+(d.x-d.width/2)+','+(d.y)+')';});

			sEnter
				.append('rect')
				.classed('flag', true)
				.attr('width', function(d){ return d.data.w + 9; })
				.attr('height', function(d){ return d.data.h + 4; })
				.attr('rx', 2)
				.attr('ry', 2)
				.style('fill', color);

			sEnter.append('text')
				.attr('x', 4)
				.attr('y', 15)
				.style('fill', '#fff')
				.text(function(d){return labelText(d.data);});

			// Draw path from point on the timeline to the label rectangle
			linkLayer.selectAll('path.link')
				.data(nodes)
				.enter().append('path')
				.classed('link', true)
				.attr('d', function(d){return renderer.generatePath(d);})
				.style('stroke', color)
				.style('stroke-width',2)
				.style('opacity', 0.6)
				.style('fill', 'none');
		}

//---------------------------------------------------
// Use labella.Force to place the labels
//---------------------------------------------------

		var force = new labella.Force({
			minPos: -10,
			maxPos: innerWidth
		})
			.nodes(nodes)
			.on('end', function(){
				draw(force.nodes());
			})
			.start(100);

	}])

	.controller('jsonCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
		$rootScope.$on('navChanged', function (event, data) {
			if (data === 18) {
				$scope.divStyle = 1;
			} else {
				$scope.divStyle = -1;
			}
		});

		$scope.divStyle = -1;

		var expr1 = function(item){
				if(item.blogTitle.toLocaleLowerCase().indexOf($scope.searchTerm.toLocaleLowerCase()) !== -1){
					return true;
				}else{
					false;
				}
		};
		var expr2 = function(arg){
			return true;
		};
		$scope.filterExpr = expr2;
		$scope.btnLabel = 'search';

		$http.get('../js/blogData.json').
			success(function (data, status, headers, config) {
				console.log(data);
				$scope.blogItems = data;
			}).
			error(function (data, status, headers, config) {
				console.log('Blog json data was not received correctly.');
			});

		var isClicked = false;
		$scope.applyFilter = function(){
			$scope.filterExpr = $scope.filterExpr == expr1 ? expr2 : expr1;
			if(!isClicked) {
				$scope.filterExpr = expr1;
				$scope.btnLabel = 'clear';
			}else{
				$scope.searchTerm = '';
				$scope.filterExpr = expr2;
				$scope.btnLabel = 'search';
			}
			isClicked = !isClicked;
		}

	}])


	//Directive that returns an element which adds buttons on click which show an alert on click
	.directive("addbuttonsbutton", function () {
		return {
			restrict: "E",
			template: "<button addbuttons>add boxes</button>"
		}
	})

//Directive for adding buttons on click that show an alert on click
	.directive("addbuttons", ['$compile', function ($compile) {
		return function (scope, element, attrs) {
			element.bind("click", function () {
				scope.count++;
				if (scope.count > 999)
					return;
				//angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
				angular.element(document.getElementById('spaceForBoxes'))
					.append($compile("<div class='dyn' id='row" + scope.count + "' ng-click='getRow($event," + scope.count + ")'>" + scope.count + "</div>")(scope));
				scope.getChildren();
			});
		};
	}])

//Directive for showing an alert on click
	.directive("alert", function () {
		return function (scope, element, attrs) {
			element.bind("click", function () {
				console.log(attrs);
				alert("This is alert #" + attrs.alert);
			});
		};
	})

	.controller('titleCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
		$scope.title = '_lodash';
		$rootScope.$on('navChanged', function (event, data) {
			switch (data) {
				case 0:
					$scope.title = '_lodash';
					break;
				case 1:
					$scope.title = 'javascript map';
					break;
				case 2:
					$scope.title = 'javascript closure';
					break;
				case 3:
					$scope.title = 'svg circle segment';
					break;
				case 4:
					$scope.title = 'angularjs object instance';
					break;
				case 5:
					$scope.title = 'gsap';
					break;
				case 6:
					$scope.title = 'SVG rotate';
					break;
				case 7:
					$scope.title = 'SVG line draw';
					break;
				case 8:
					$scope.title = 'SVG mirrored rect draw';
					break;
				case 9:
					$scope.title = 'bounce alert';
					break;
				case 10:
					$scope.title = 'flip';
					break;
				case 11:
					$scope.title = 'svg text';
					break;
				case 12:
					$scope.title = 'add div dynamically';
					break;
				case 13:
					$scope.title = 'random div placement';
					break;
				case 14:
					$scope.title = 'gsap svg draw text';
					break;
				case 15:
					$scope.title = 'svg clipArt';
					break;
				case 16:
					$scope.title = 'png to svg';
					break;
				case 17:
					$scope.title = 'labella';
					break;
				case 18:
					$scope.title = 'json, ngRepeat & filters';
					break;
			}
		});

	}])

// this instantiates a new User
	// this actually works !!!
	.factory('User', function () {
		// instantiate our initial object
		var user = function (username) {
			this.username = username;
			this.profile = {};
		};

		user.prototype.getProfile = function () {
			return this.profile;
		};

		user.prototype.setProfile = function (fname, lname, city) {
			this.profile.fname = fname;
			this.profile.lname = lname;
			this.profile.city = city;
		};

		return user;
	})