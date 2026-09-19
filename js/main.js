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
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
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

  function injectModernPortfolioStyles() {
    if (document.getElementById('pass-drc-modern-portfolio-styles')) return;

    var style = document.createElement('style');
    style.id = 'pass-drc-modern-portfolio-styles';
    style.textContent = `
      :root { --pass-yellow: #ffc107; --pass-blue: #57a5ff; --pass-green: #2fc77a; --pass-ink: #f7f7f7; --pass-line: rgba(255,255,255,.12); --pass-ease: cubic-bezier(.2,.8,.2,1); }
      body.portfolio-modern { background: radial-gradient(circle at 12% 8%, rgba(87,165,255,.12), transparent 28%), radial-gradient(circle at 90% 20%, rgba(47,199,122,.10), transparent 30%), #05070a; }
      .portfolio-modern .portfolio-panel { position: relative; overflow: hidden; border-radius: 8px; background: linear-gradient(145deg, rgba(14,18,28,.94), rgba(8,10,15,.88)); border: 1px solid var(--pass-line); box-shadow: 0 24px 60px rgba(0,0,0,.28); transition: transform .28s var(--pass-ease), border-color .28s var(--pass-ease), box-shadow .28s var(--pass-ease); }
      .portfolio-modern .portfolio-panel:before { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(135deg, rgba(255,193,7,.14), transparent 32%), linear-gradient(315deg, rgba(87,165,255,.10), transparent 34%); }
      .portfolio-modern .portfolio-panel > * { position: relative; z-index: 1; }
      .portfolio-modern .portfolio-panel:hover { transform: translateY(-6px); border-color: rgba(255,193,7,.55); box-shadow: 0 30px 80px rgba(0,0,0,.38); }
      .portfolio-modern .portfolio-panel h3 { color: #fff; font-weight: 700; letter-spacing: 0; }
      .portfolio-modern .portfolio-panel h4 { color: var(--pass-yellow); font-weight: 700; }
      .portfolio-modern .portfolio-panel p, .portfolio-modern .portfolio-panel li { color: rgba(255,255,255,.76); }
      .portfolio-modern .contact-info .box { border-radius: 8px; background: linear-gradient(145deg, rgba(14,18,28,.94), rgba(8,10,15,.9)); border: 1px solid rgba(255,255,255,.1); box-shadow: 0 18px 46px rgba(0,0,0,.26); }
      .portfolio-modern .micro-link { display: inline-block; margin-top: .25rem; color: var(--pass-yellow); font-size: .82rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      .portfolio-modern .collab-section { margin-top: 4rem; }
      .portfolio-modern .collab-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,.12); padding-bottom: 1rem; }
      .portfolio-modern .collab-heading h3 { margin: 0; color: #fff; font-size: clamp(2rem, 4vw, 3.2rem); letter-spacing: 0; }
      .portfolio-modern .collab-heading span { color: var(--pass-yellow); font-size: .78rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
      .portfolio-modern .collab-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
      .portfolio-modern .collab-card { position: relative; overflow: hidden; display: flex; gap: 1rem; min-height: 100%; padding: 1.2rem; border-radius: 8px; border: 1px solid var(--pass-line); background: linear-gradient(145deg, rgba(14,18,28,.96), rgba(7,9,14,.9)); box-shadow: 0 20px 54px rgba(0,0,0,.28); transition: transform .28s var(--pass-ease), border-color .28s var(--pass-ease), box-shadow .28s var(--pass-ease); }
      .portfolio-modern .collab-card:before { content: ''; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(135deg, rgba(255,193,7,.13), transparent 32%), linear-gradient(315deg, rgba(87,165,255,.11), transparent 35%); }
      .portfolio-modern .collab-card:hover { transform: translateY(-5px); border-color: rgba(255,193,7,.55); box-shadow: 0 28px 72px rgba(0,0,0,.38); }
      .portfolio-modern .collab-logo { position: relative; z-index: 1; width: 78px; min-width: 78px; height: 78px; object-fit: contain; padding: .55rem; border-radius: 8px; background: #fff; border: 1px solid rgba(255,255,255,.2); }
      .portfolio-modern .collab-copy { position: relative; z-index: 1; }
      .portfolio-modern .collab-copy h4 { margin: 0 0 .45rem; color: #fff; font-size: 1.08rem; font-weight: 700; }
      .portfolio-modern .collab-copy .meta { margin-bottom: .7rem; color: var(--pass-yellow); font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
      .portfolio-modern .collab-copy p { color: rgba(255,255,255,.72); line-height: 1.7; margin-bottom: .9rem; }
      .portfolio-modern .collab-copy .reply { display: inline-flex; align-items: center; min-height: 38px; padding: .52rem .8rem; border-radius: 6px; background: rgba(255,193,7,.12); color: #fff; border: 1px solid rgba(255,193,7,.32); font-size: .76rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
      .portfolio-modern .collab-cta { margin-top: 1rem; padding: 1.2rem; border-radius: 8px; border: 1px solid rgba(47,199,122,.30); background: rgba(47,199,122,.07); }
      .portfolio-modern .collab-cta p { margin-bottom: 1rem; color: rgba(255,255,255,.75); }
      @media (max-width: 992px) { .portfolio-modern .collab-grid { grid-template-columns: 1fr; } }
      @media (max-width: 768px) { .portfolio-modern .collab-heading { display: block; } .portfolio-modern .collab-card { flex-direction: column; } }
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

  function renderCollaborationThemes() {
    var list = document.querySelector('.comment-list');
    if (!list) return;
    var section = list.parentElement;
    if (!section || section.classList.contains('collab-section')) return;

    section.className = 'collab-section pt-5 mt-5';
    section.innerHTML = '<div class="collab-heading"><h3>Collaboration Themes</h3><span>PASS-DRC ecosystem</span></div>' +
      '<div class="collab-grid">' +
      collabCard('Telecommunications Research', '5G/B5G, network slicing, resource scheduling', 'Applied research on intelligent communication systems, traffic anomaly detection and sustainable network infrastructure.', 'index.html#contact-section', 'Contact') +
      collabCard('AI and Robotics Education', 'PASS-DRC Academy and Elima Programme', 'Bilingual curricula and hands-on mentorship for young learners building practical AI, Python and robotics skills.', 'index.html#resume-section', 'View CV') +
      collabCard('Community Technology Engagement', 'Digital literacy and responsible AI advocacy', 'School engagement, youth mentorship and public-good research for communities facing limited access to technology.', 'index.html#projects-section', 'Projects') +
      collabCard('Sustainable AI Infrastructure', 'Energy and carbon trade-offs', 'Researching how shared AI and RAN infrastructure can be evaluated through both technical and environmental metrics.', 'index.html#blog-section', 'Read notes') +
      collabCard('Professional Networks', 'YALI and GEOSTRAT Research Group', 'Active in knowledge exchange, mentorship and collaborative telecommunications and AI research across Sub-Saharan Africa.', 'index.html#resume-section', 'Memberships') +
      collabCard('Research and Education Partnerships', 'Open to aligned collaboration', 'Partnerships that connect rigorous network research with education, responsible AI adoption and measurable community benefit.', whatsappHref, 'WhatsApp') +
      '</div><div class="collab-cta"><p>For research, academy partnerships, AI/Robotics education or responsible digital transformation work, contact Gabriel directly by email, phone or WhatsApp.</p><a href="index.html#contact-section" class="btn btn-primary py-3 px-4">Start a collaboration</a></div>';
  }

  function collabCard(title, meta, copy, href, label) {
    return '<article class="collab-card"><img class="collab-logo" src="' + logoSrc + '" alt="PASS-DRC logo"><div class="collab-copy"><h4>' + title + '</h4><div class="meta">' + meta + '</div><p>' + copy + '</p><a href="' + href + '" class="reply">' + label + '</a></div></article>';
  }

  function modernizePortfolio() {
    if (!document.body) return;
    document.body.classList.add('portfolio-modern');
    injectModernPortfolioStyles();
    updatePhoneLinks();
    removePeaceFoundationService();
    renderCollaborationThemes();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', modernizePortfolio);
  } else {
    modernizePortfolio();
  }
})();
