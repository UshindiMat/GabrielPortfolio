 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);
(function() {
  'use strict';

  var phoneDisplay = '+243 977 4545 46';
  var phoneHref = 'tel:+243977454546';
  var whatsappHref = 'https://wa.me/243977454546';
  var logoSrc = 'images/pass-drc-logo-transparent.svg';


  function injectPreserveThemeStyles() {
    if (document.getElementById('pass-drc-preserve-theme-styles')) return;
    var style = document.createElement('style');
    style.id = 'pass-drc-preserve-theme-styles';
    style.textContent = `
      #ftco-navbar .navbar-brand { font-size: 1.45rem; line-height: 1.1; letter-spacing: 0; white-space: nowrap; }
      .micro-link { display: inline-block; margin-top: .25rem; color: #ffc107; font-size: .85rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
      .comment-list .vcard.bio img.pass-drc-theme-logo { object-fit: contain; padding: .38rem; background: #fff; }
      @media (min-width: 992px) {
        #ftco-navbar .container { display: flex; align-items: center; flex-wrap: nowrap; max-width: 1320px; }
        #ftco-navbar .navbar-brand { flex: 0 0 auto; margin-right: 1.25rem; }
        #ftco-nav { flex: 1 1 auto; min-width: 0; }
        #ftco-nav .navbar-nav { display: flex; flex-direction: row; align-items: center; justify-content: flex-end; flex-wrap: nowrap; width: 100%; }
        #ftco-nav .nav-item { white-space: nowrap; }
        #ftco-nav .nav-link { padding-left: .72rem !important; padding-right: .72rem !important; font-size: .98rem; }
      }
      @media (min-width: 1200px) {
        #ftco-navbar .navbar-brand { font-size: 1.58rem; margin-right: 1.75rem; }
        #ftco-nav .nav-link { padding-left: .95rem !important; padding-right: .95rem !important; }
      }
      @media (max-width: 767px) {
        #ftco-navbar .navbar-brand { max-width: calc(100vw - 110px); font-size: 1.15rem; white-space: normal; }
      }
    `;
    document.head.appendChild(style);
  }
  function replaceText(root, oldText, newText) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node) {
      if (node.nodeValue.indexOf(oldText) !== -1) {
        node.nodeValue = node.nodeValue.split(oldText).join(newText);
      }
    });
  }

  function updatePhoneLinks() {
    replaceText(document.body, '+243970688665', phoneDisplay);
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      if (link.getAttribute('href').indexOf('243970688665') !== -1 || link.textContent.indexOf(phoneDisplay) !== -1) {
        link.setAttribute('href', phoneHref);
      }
    });

    var contactPhone = Array.prototype.find.call(document.querySelectorAll('.contact-info .box'), function(box) {
      return box.textContent.indexOf('Contact Number') !== -1;
    });
    if (contactPhone && !contactPhone.querySelector('a[href^="https://wa.me/"]')) {
      var anchor = document.createElement('a');
      anchor.className = 'micro-link';
      anchor.href = whatsappHref;
      anchor.textContent = 'WhatsApp';
      var paragraph = contactPhone.querySelector('p');
      if (paragraph) {
        paragraph.appendChild(document.createElement('br'));
        paragraph.appendChild(anchor);
      }
    }
  }

  function removePeaceFoundationService() {
    document.querySelectorAll('li').forEach(function(item) {
      if (item.textContent.indexOf('ICT Training - Peace Foundation DRC') !== -1) {
        item.remove();
      }
    });

    document.querySelectorAll('#section-counter .block-18').forEach(function(block) {
      if (block.textContent.indexOf('Youth trained through ICT service') !== -1) {
        var number = block.querySelector('.number');
        var label = block.querySelector('span');
        if (number) {
          number.setAttribute('data-number', '3');
          number.textContent = '3';
        }
        if (label) label.textContent = 'Community impact tracks';
      }
    });
  }

  function usePassLogoInCollaborationThemes() {
    document.querySelectorAll('.comment-list .vcard.bio img').forEach(function(image) {
      image.setAttribute('src', logoSrc);
      image.setAttribute('alt', 'PASS-DRC logo');
      image.classList.add('pass-drc-theme-logo');
    });
  }

  function preservePortfolioContentFixes() {
    if (!document.body) return;
    injectPreserveThemeStyles();
    updatePhoneLinks();
    removePeaceFoundationService();
    usePassLogoInCollaborationThemes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preservePortfolioContentFixes);
  } else {
    preservePortfolioContentFixes();
  }
})();