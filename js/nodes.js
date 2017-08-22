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
	var particleCalibration = 200000; // fine-tune particle density (higher = fewer)
	var particleMinSize = 80;
	var particleMaxSize = 120;
	var particleMaxVelocity = 1.05;
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
				this.clickEvent();
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

    clickEvent: function clickEvent() {

      canvasEl.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvasEl, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(JSON.stringify(particles));
        console.log(message);


      }, false);

      function getMousePos(canvasEl, evt) {
        var rect = canvasEl.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

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
				this.x = 0 + Math.random() * (canvasWidth - particleMinSize);
				this.y = 90 + Math.random() * (canvasHeight - 180);
				// velocity
				this.vy = 1 - Math.random() * particleMaxVelocity;
				this.vx = 1 - Math.random() * particleMaxVelocity;

				// size


				if(canvasWidth <= 768) {
					this.r = particleMinSize;
				} else {
					this.r = particleMaxSize;
				}

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

        var myStringArray = [
          "../img/team/team-01.png",
          "../img/team/team-02.png",
          "../img/team/team-03.png",
          "../img/team/team-04.png",
          "../img/team/team-05.png",
          "../img/team/team-06.png",
          "../img/team/team-07.png",
          "../img/team/team-08.png",
          "../img/team/team-09.png",
          "../img/team/team-10.png",
          "../img/team/team-11.png"
        ];

        var imgSrc;

        if(i % myStringArray.length == 0) {
          imgSrc = 0;
        }

        image.src = myStringArray[imgSrc];

        imgSrc++;

				// update coords to destination x, y
				particles[i].x += particles[i].vx;
				particles[i].y += particles[i].vy;

				// check if particle hits the canvas and bounce

				if(particles[i].x <= 0 ) {
					particles[i].vx += Math.random() * particleMaxVelocity;
				}

				if(particles[i].y <= 90 ) {
					particles[i].vy += Math.random() * particleMaxVelocity;
				}

				if(canvasWidth <= 768) {
					if(particles[i].x + particles[i].r >= canvasWidth && particles[i].vx > 0) {
	          particles[i].vx -= Math.random() * particleMaxVelocity;
	        }

	        if(particles[i].y + particles[i].r >= canvasHeight && particles[i].vy > 0) {
	          particles[i].vy -= Math.random() * particleMaxVelocity;
	        }
				} else {
					if(particles[i].x + particles[i].r >= canvasWidth - 60 && particles[i].vx > 0) {
	          particles[i].vx -= Math.random() * particleMaxVelocity;
	        }

	        if(particles[i].y + particles[i].r >= canvasHeight - 60 && particles[i].vy > 0) {
	          particles[i].vy -= Math.random() * particleMaxVelocity;
	        }
				}


				ctx.globalAlpha = particles[i].o;
				// draw image
				ctx.drawImage(image, particles[i].x, particles[i].y, particles[i].r, particles[i].r);
			}

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
			// return parseInt(canvasWidth * canvasHeight / particleCalibration, 10);
			return parseInt(11);
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
