$(document).ready(function() {

  $('#fullpage').fullpage({
		verticalCentered: false,
    anchors:['home', 'pillars', 'services', 'enablers', 'team'],
    responsiveWidth: 768,
		// navigation: true,
		// navigationPosition: 'right',
		// navigationTooltips: ['Home', 'Pillars', 'Services', 'Enablers', 'Team'],
    // showActiveTooltip: true,
  });

  var $menuToggle = $('#menu-toggle'),
      $mainNav    = $("#mainNav");

  $menuToggle .click(function(){
    toggleMobNav();
  });

  $mainNav.find('a').on("click", function(){
    toggleMobNav();
  });

  function toggleMobNav() {
    $menuToggle .toggleClass('open');

    // Add display:none when fade is animated
    if($mainNav.hasClass('fs-menu-active')) {
      $mainNav.removeClass('fs-menu-active');
      $mainNav.addClass('fs-menu');
      setTimeout(function () {
        $mainNav.addClass('hidden');
      }, 1200);
    } else {
      $mainNav.removeClass('hidden');
      setTimeout(function () {
        $mainNav.addClass('fs-menu-active');
        $mainNav.removeClass('fs-menu');
      }, 200);
    }

  }

  // media query event handler
  if (matchMedia) {
    const mq = window.matchMedia("(min-width: 769px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
      $('#va-accordion').vaccordion({
        accordionW		: $(window).width() - 60,
      	accordionH		: $(window).height() - 186,
        expandedHeight	: $(window).height() / 2,
      });
      $(".va-slice > .wide-center").contents().unwrap();
      $('#mainNav').removeClass('hidden');
    } else {
      $('.va-slice').wrapInner('<div class="wide-center"></div>');
      $('#mainNav').addClass('hidden');
    }

  }

  $('.services li').on('click',function(){
    if($(this).hasClass('hover')) {
      $(this).removeClass('hover');
    } else {
      $(this).addClass('hover').siblings().removeClass('hover');
    }
  });


  particlesJS.load('particles-js', 'particlesjs-config.json');

  // particlesJS.load('particles-js-2', 'particlesjs-config.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });

  // create an array with nodes
  var DIR = '../img/team/team-';
  nodesArray = [
    {id: 1,  shape: 'circularImage', image: DIR + '01.png', teamName: 'CUMAI ABOUL HOUSN', teamPosition: 'Chief Innovation Officer', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 2,  shape: 'circularImage', image: DIR + '02.png', teamName: 'Team2', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 3,  shape: 'circularImage', image: DIR + '03.png', teamName: 'Luma', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 4,  shape: 'circularImage', image: DIR + '04.png', teamName: 'team3', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 5,  shape: 'circularImage', image: DIR + '05.png', teamName: 'team4', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 6,  shape: 'circularImage', image: DIR + '06.png', teamName: 'team5', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 7,  shape: 'circularImage', image: DIR + '07.png', teamName: 'team6', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 8,  shape: 'circularImage', image: DIR + '08.png', teamName: 'team7', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 9,  shape: 'circularImage', image: DIR + '09.png', teamName: 'team8', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 10, shape: 'circularImage', image: DIR + '10.png', teamName: 'team9', teamDesc: 'Lorem ipsum dolor sit amet'},
    {id: 11, shape: 'circularImage', image: DIR + '11.png', teamName: 'team10', teamDesc: 'Lorem ipsum dolor sit amet'},
  ];
  nodes = new vis.DataSet(nodesArray);

  // create an array with edges
  edgesArray = [
    {from: 1, to: 2}, {from: 1, to: 3}, {from: 1, to: 4}, {from: 1, to: 5}, {from: 1, to: 6}, {from: 1, to: 7}, {from: 1, to: 8}, {from: 1, to: 9}, {from: 1, to: 10}, {from: 1, to: 11}, {from: 2, to: 3}, {from: 2, to: 4}, {from: 2, to: 5}, {from: 2, to: 6}, {from: 2, to: 7}, {from: 2, to: 8}, {from: 2, to: 9}, {from: 2, to: 10}, {from: 2, to: 11}, {from: 3, to: 4}, {from: 3, to: 5}, {from: 3, to: 6}, {from: 3, to: 7}, {from: 3, to: 8}, {from: 3, to: 9}, {from: 3, to: 10}, {from: 3, to: 11}, {from: 4, to: 5}, {from: 4, to: 6}, {from: 4, to: 7}, {from: 4, to: 8}, {from: 4, to: 9}, {from: 4, to: 10}, {from: 4, to: 11}, {from: 5, to: 6}, {from: 5, to: 7}, {from: 5, to: 8}, {from: 5, to: 9}, {from: 5, to: 10}, {from: 5, to: 11}, {from: 6, to: 7}, {from: 6, to: 8}, {from: 6, to: 9}, {from: 6, to: 10}, {from: 6, to: 11}, {from: 7, to: 8}, {from: 7, to: 9}, {from: 7, to: 10}, {from: 7, to: 11}, {from: 8, to: 9}, {from: 8, to: 10}, {from: 8, to: 11}, {from: 9, to: 10}, {from: 9, to: 11}, {from: 10, to: 11},
  ];
  edges = new vis.DataSet(edgesArray);

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
      nodes: nodes,
      edges: edges
  };
  var options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    clickToUse: false,
    nodes: {
      borderWidth: 3,
      borderWidthSelected: 5,
      size: 50,
      color: {
        border: '#8FDEF6',
        background: 'transparent',
        highlight: {
          border: '#8FDEF6',
          background: '#transparent'
        },
        hover: {
          border: '#8FDEF6',
          background: '#transparent'
        }
      },
      shapeProperties: {
        useImageSize: true,
      },
    },
    edges: {
      color: 'rgba(143, 222, 246, 0.6)',
      width: 2,
      smooth: false,
    },
    physics:{
      enabled: true,
      barnesHut: {
        gravitationalConstant: -30000,
        centralGravity: 0,
        springLength: 415,
        damping: 0.015,
        // avoidOverlap: 0.02
      },
      forceAtlas2Based: {
        gravitationalConstant: -20,
        centralGravity: 0.2,
        springConstant: 0.08,
        springLength: 150,
        damping: 0.8,
        avoidOverlap: 0.8
      },
      repulsion: {
        centralGravity: 0.2,
        springLength: 600,
        nodeDistance: 3000,
        damping: 1
      },
      hierarchicalRepulsion: {
        centralGravity: 0.0,
        springLength: 100,
        springConstant: 0.01,
        nodeDistance: 120,
        damping: 0
      },
      maxVelocity: 50,
      minVelocity: 0.1,
      solver: 'barnesHut',
      stabilization: {
        enabled: true,
        iterations: 1000,
        updateInterval: 100,
        onlyDynamicEdges: false,
        fit: true
      },
      timestep: 0.5,
      adaptiveTimestep: true
    },
    layout: {
      randomSeed: 0,
      improvedLayout:true,
      hierarchical: {
        enabled:false,
        levelSeparation: 1050,
        nodeSpacing: 100,
        treeSpacing: 1000,
        blockShifting: true,
        edgeMinimization: true,
        parentCentralization: true,
        direction: 'UD',
        sortMethod: 'hubsize'
      }
    },
    interaction: {
      hover: true
    }
  };

  network = new vis.Network(container, data, options);
  networkCanvas = document.getElementById("mynetwork").getElementsByTagName("canvas")[0];

  function changeCursor(newCursorStyle){
	   networkCanvas.style.cursor = newCursorStyle;
  }
  function changeEventCursor(eventName,cursorType){
    network.on(eventName, function() {
      changeCursor(cursorType);
    });
  }
  network.on('hoverNode', function () {
	   changeCursor('pointer');
  });
  network.on('blurNode', function () {
	   changeCursor('crosshair');
  });
  network.on('hoverEdge', function () {
	   changeCursor('default');
  });
  network.on('blurEdge', function () {
	   changeCursor('default');
  });
  network.on('dragStart', function () {
	   changeCursor('default');
  });
  network.on('dragging', function () {
	   changeCursor('crosshair');
  });
  network.on('dragEnd', function () {
	   changeCursor('default');
  });

  network.on("resize", function (size) {
    var newOptions = {
      edges: {
        width: 5,
        smooth: {
          forceDirection: 'none'
        }
      },
      physics: {
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 100,
          onlyDynamicEdges: false,
          fit: true
        },
        hierarchicalRepulsion: {
          centralGravity: 0,
          springLength: 365,
          springConstant: 0.22,
          nodeDistance: 255,
          damping: 0.58
        },
        maxVelocity: 79,
        minVelocity: 0.12,
        solver: 'hierarchicalRepulsion',
        timestep: 0.16
      }
    }
    if(size.width <= 768) {
      network.setOptions(newOptions);
      var options = {
        position: {
          x: 940,
          y: -600
        },
        scale: 0.4,
        animation: true // default duration is 1000ms and default easingFunction is easeInOutQuad.
      };
      network.moveTo(options);
      network.redraw();
    }
  });

  // network.on( 'click', function(properties) {
  //   console.log('clicked nodes:', JSON.stringify(properties));
  // });

  network.on( 'selectNode', function(properties) {
    var ids = properties.nodes;
    var clickedNodes = nodes.get(ids);

    // Initalize content of modal
    $('#myModal').on('show.bs.modal', function (event) {

      var modal = $(this);
      var thisNode = clickedNodes[0];

      modal.find('.modal-content').html('<div class="modal-body text-center"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class=team-header><img alt=Cumai class=img-responsive src=' + thisNode.image + '><h2>' + thisNode.teamName + '</h2><h4>' + thisNode.teamPosition + '</h4></div><div class=team-description><p>' + thisNode.teamDesc + '<ul><li><a href=#><i class="fa fa-linkedin"></i></a><li><a href=#><i class="fa fa-envelope"></i></a><li><a href=#><i class="fa fa-heart"></i></a></ul></div></div>');

      $('body').attr("style",'overflow: hidden; height: 100%;');

    });

    $('#myModal').modal('toggle');
    // alert('Hi my name is ' + clickedNodes[0].teamName);
    // console.log('clicked nodes:', JSON.stringify();
    //

    });
    $(document).on('hidden.bs.modal', '.modal', function () {
      $('body').attr("style",'overflow: visible; height: initial;');
    });


});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _canvasParticles = __webpack_require__(1);

	var _canvasParticles2 = _interopRequireDefault(_canvasParticles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//	Scripts loaded via loadJS; initialise.
	_canvasParticles2.default.init(); //----------------------------------------------------------------------
	//	MASTER JS
	//
	//----------------------------------------------------------------------

	//	Module imports

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _clientSettings = __webpack_require__(2);

	var _clientSettings2 = _interopRequireDefault(_clientSettings);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Settings
	var canvasSelectorId = 'canvas-particles'; //----------------------------------------------------------------------
	//	CANVAS PARTICLES
	//	Base Package
	//----------------------------------------------------------------------

	// Module imports

	var readyClass = 'canvas-particles--is-ready';
	var particleImageId = 'canvas-particle-image';

	var canvasAF = {};

	// Canvas
	var canvasEl = {};
	var ctx = {};
	var canvasWidth = 0;
	var canvasHeight = 0;

	// Particles
	var particles = [];
	var particleCalibration = 20000; // fine-tune particle density (higher = fewer)
	var particleMinSize = 60;
	var particleMaxSize = 200;
	var particleMaxVelocity = 2;
	var particleMinOpacity = 1;

	var CanvasParticles = {

		// FEATURE DETECTS
		isCanvasSupported: function isCanvasSupported() {
			var elem = document.createElement('canvas');
			return !!(elem.getContext && elem.getContext('2d'));
		},

		// INIT
		init: function init() {
			// get canvas element
			canvasEl = document.getElementById(canvasSelectorId);
			// ensure canvas supported and element exists
			if (this.isCanvasSupported() && !!canvasEl) {
				// set canvas context
				ctx = canvasEl.getContext('2d');
				// bind resize
				this.bindResize();
				// add ready class
				canvasEl.className += ' ' + readyClass;
			}
		},

		// SETUP
		setCanvasSize: function setCanvasSize(w, h) {
			// set element dimensions, and store locally for object
			canvasEl.width = canvasWidth = w;
			canvasEl.height = canvasHeight = h;
		},

		// EVENTS
		bindResize: function bindResize() {
			var _this = this;

			var resizeTimer = undefined;
			// bind window resize and call for init
			window.addEventListener('resize', function (event) {
				// throttle resize event
				clearTimeout(resizeTimer);
				// call to resize events
				resizeTimer = setTimeout(function () {
					return _this.resizeEvent();
				}, 100);
			});
			this.resizeEvent();
		},

		resizeEvent: function resizeEvent() {
			var width = window.innerWidth;
			var height = window.innerHeight;

			// check breakpoint to set desktop size
			if (window.matchMedia('(min-width: ' + _clientSettings2.default.bpDesk + '%)').matches) {
				width = 100;
				height = 100;
			} else if (window.matchMedia('(min-width: ' + _clientSettings2.default.bpLap + '%)').matches) {
				width = 100;
				height = 100;
			}

			// call to resize canvas, passing window dimensions
			this.setCanvasSize(width, height);
			// destroy
			this.destroy();
			// call to create particles, passing particle ratio
			this.createParticles(this.getParticleRatio(), this.updateParticles);
		},

		// PARTICLE CONSTRUCTOR
		createParticles: function createParticles(count, callback) {
			// particle constructor
			var Particle = function Particle() {
				this.x = this.y = this.vx = this.vy = this.r = this.o = 0;
				this.reset();
			};

			// particle reset method
			Particle.prototype.reset = function () {
				// position
				this.x = Math.random() * canvasWidth;
				this.y = Math.random() * canvasHeight;
				// velocity
				this.vy = 1 - Math.random() * particleMaxVelocity;
				this.vx = 1 - Math.random() * particleMaxVelocity;
				// size
				this.r = particleMinSize + Math.random() * particleMaxSize;
				// opacity
				this.o = particleMinOpacity + Math.random() * 0.5;
			};

			// check if particles need altering
			if (count != particles.length) {
				// reset particle array
				particles = [];
				// count loop to create particles
				for (var i = 0; i < count; i++) {
					particles.push(new Particle());
				}
				// run callback
				callback();
			}
		},

		updateParticles: function updateParticles() {
			ctx.clearRect(0, 0, canvasWidth, canvasHeight);
			ctx.fillStyle = '#ffffff';

			for (var i = 0; i < particles.length; i++) {

				var image = new Image();

        var myStringArray = ["../img/team/team-01.png","../img/team/team-02.png","../img/team/team-03.png","../img/team/team-04.png","../img/team/team-05.png","../img/team/team-06.png","../img/team/team-07.png","../img/team/team-08.png","../img/team/team-09.png","../img/team/team-10.png","../img/team/team-11.png"];

        // console.log(myStringArray.length);

            // image.src = myStringArray[i];
					image.src = (i%2 == 0) ? '../img/team/team-01.png' : '../img/team/team-02.png';
				// update coords to destination x, y
				particles[i].x += particles[i].vx;
				particles[i].y += particles[i].vy;

				// check if particle fallen off canvas and reset
				if (particles[i].x > canvasWidth || particles[i].x < 1) {
					particles[i].reset();
					particles[i].y = 0;
				}

				if (particles[i].y > canvasHeight) {
					particles[i].reset();
					particles[i].y = 0;
				}

				ctx.globalAlpha = particles[i].o;
				// draw image
				ctx.drawImage(image, particles[i].x, particles[i].y, particles[i].r, particles[i].r);
			}

			// loop over particles
			/*var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = particles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var particle = _step.value;

					var image = new Image();
					image.src = (Symbol.iterator%2 == 0) ? 'https://emojipedia-us.s3.amazonaws.com/cache/78/46/78461211fc7ce432b6f5ee5118f5ce15.png' : 'http://pngimg.com/upload/heart_PNG687.png';

					// update coords to destination x, y
					particle.x += particle.vx;
					particle.y += particle.vy;

					// check if particle fallen off canvas and reset
					if (particle.x > canvasWidth || particle.x < 1) {
						particle.reset();
						particle.y = 0;
					}

					if (particle.y > canvasHeight) {
						particle.reset();
						particle.y = 0;
					}

					ctx.globalAlpha = particle.o;
					// draw image
					ctx.drawImage(image, particle.x, particle.y, particle.r, particle.r);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}*/

			canvasAF = window.requestAnimationFrame(CanvasParticles.updateParticles);
		},

		destroy: function destroy() {
			// clear particles
			particles = [];
			// cancelanimationframe
			if (canvasAF) window.cancelAnimationFrame(canvasAF);
		},

		// HELPERS

		// work out appropriate particle count based on screen size
		getParticleRatio: function getParticleRatio() {
			return parseInt(canvasWidth * canvasHeight / particleCalibration, 10);
		}

	};

	module.exports = CanvasParticles;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	//----------------------------------------------------------------------
	//	CLIENT SETTINGS
	//
	//----------------------------------------------------------------------

	//	Set client specific settings
	var ClientSettings = {
		bpLap: 600,
		bpDesk: 900
	};

	module.exports = ClientSettings;

/***/ }
/******/ ]);
