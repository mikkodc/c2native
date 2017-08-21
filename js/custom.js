$(document).ready(function() {

  //FullpageJS Script
  $('#fullpage').fullpage({
		verticalCentered: false,
    anchors:['home', 'pillars', 'services', 'enablers', 'team'],
    responsiveWidth: 768,
		// navigation: true,
		// navigationPosition: 'right',
		// navigationTooltips: ['Home', 'Pillars', 'Services', 'Enablers', 'Team'],
    // showActiveTooltip: true,
  });

  //Navigation Script
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

  //Services Click to Flip Script
  $('.services li').on('click',function(){
    if($(this).hasClass('hover')) {
      $(this).removeClass('hover');
    } else {
      $(this).addClass('hover').siblings().removeClass('hover');
    }
  });


  // particlesJS.load('particles-js', 'particlesjs-config.json');

  // particlesJS.load('particles-js-2', 'particlesjs-config.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });

  // network.on( 'click', function(properties) {
  //   console.log('clicked nodes:', JSON.stringify(properties));
  // });

  // network.on( 'selectNode', function(properties) {
  //   var ids = properties.nodes;
  //   var clickedNodes = nodes.get(ids);
  //
  //   // Initalize content of modal
  //   $('#myModal').on('show.bs.modal', function (event) {
  //
  //     var modal = $(this);
  //     var thisNode = clickedNodes[0];
  //
  //     modal.find('.modal-content').html('<div class="modal-body text-center"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><div class=team-header><img alt=Cumai class=img-responsive src=' + thisNode.image + '><h2>' + thisNode.teamName + '</h2><h4>' + thisNode.teamPosition + '</h4></div><div class=team-description><p>' + thisNode.teamDesc + '<ul><li><a href=#><i class="fa fa-linkedin"></i></a><li><a href=#><i class="fa fa-envelope"></i></a><li><a href=#><i class="fa fa-heart"></i></a></ul></div></div>');
  //
  //     $('body').attr("style",'overflow: hidden; height: 100%;');
  //
  //   });
  //
  //   $('#myModal').modal('toggle');
  //   // alert('Hi my name is ' + clickedNodes[0].teamName);
  //   // console.log('clicked nodes:', JSON.stringify();
  //   //
  //
  //   });
  //   $(document).on('hidden.bs.modal', '.modal', function () {
  //     $('body').attr("style",'overflow: visible; height: initial;');
  //   });


});
