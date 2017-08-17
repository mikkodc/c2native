$(document).ready(function() {

  $('#fullpage').fullpage({
		verticalCentered: false,
    anchors:['home', 'pillars', 'services', 'enablers', 'team'],
    responsiveWidth: 768
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
    } else {
      $('.va-slice').wrapInner('<div class="wide-center"></div>');
    }

  }


  // particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });
  //
  particlesJS.load('particles-js-2', 'particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });

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

      modal.find('.modal-content').html('<div class="modal-body text-center"><div class=team-header><img alt=Cumai class=img-responsive src=' + thisNode.image + '><h2>' + thisNode.teamName + '</h2><h4>' + thisNode.teamPosition + '</h4></div><div class=team-description><p>' + thisNode.teamDesc + '<ul><li><a href=#><i class="fa fa-linkedin"></i></a><li><a href=#><i class="fa fa-envelope"></i></a><li><a href=#><i class="fa fa-heart"></i></a></ul></div></div>');

      $('body').attr("style",'overflow: hidden; height: 100%;');

    });

    $('#myModal').modal('toggle');
    // alert('Hi my name is ' + clickedNodes[0].teamName);
    // console.log('clicked nodes:', JSON.stringify();
    //

    });


});
