/**
* Template Name: Techie - v2.2.0
* Template URL: https://bootstrapmade.com/techie-free-skin-bootstrap-3/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 16;
  if (window.matchMedia("(max-width: 991px)").matches) {
    scrolltoOffset += 16;
  }
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

 
   $("#quote-next").hide();
   $("#progress").hide();
   //$("#obtainquotecancel").hide();

})(jQuery);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function(event) {
  modal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  $(".cover").fadeOut(500);
}

// When the user clicks anywhere outside of the login modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $(".cover").fadeOut(500);
  } else if (event.target == modal2) {
    modal2.style.display = "none";
    $(".cover").fadeOut(500); 
  }
}

// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("registrationButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
  $(".cover").fadeOut(500);
}

// Get the button that opens the login modal from registration
var btn3 = document.getElementById("returnLogin");

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal.style.display = "block";
  modal2.style.display = "none";
}


function submitQuote() {
  const cellManufacturer = document.getElementById('cellManufacturer').value;
  const cellgroupModel = document.getElementById('cellgroupModel').value;
  const cellModel = document.getElementById('cellModel').value;
  const repairType = document.getElementById('repairType').value;
  const cellquotePrice = CELL_DATA[cellManufacturer].options[cellgroupModel].options[cellModel].options[repairType].price;
  const quoteFirstName = document.getElementById('quoteFirstName').value;
  const quoteLastName = document.getElementById('quoteLastName').value;
  const quotePhoneNumber = document.getElementById('quotePhoneNumber').value;
  const quoteEmailAddress = document.getElementById('quoteEmailAddress').value;
  const quoteStreetAddress = document.getElementById('quoteStreetAddress').value;
  const quoteCityAddress = document.getElementById('quoteCityAddress').value;
  const quoteState = document.getElementById('quoteState').value;
  const quoteZip = document.getElementById('quoteZip').value;

  
  var cellQuoteEndButton = document.getElementById("cellQuoteEndButton");
  var cellQuoteEnd = document.getElementById("cellQuoteEnd");

  //Open new model and close current
  // Get the new quote modal
  var cellQuoteEnd = document.getElementById("cellQuoteEnd");

  // Get the current quote modal
  var detailQuoteModal = document.getElementById("detailQuoteModal")

  // Get the button that opens the modal
  var cellQuoteEndButton = document.getElementById("cellQuoteEndButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close2")[3];

  // When the user clicks on the button, open the modal
  cellQuoteEndButton.onclick = function(event) {
    cellQuoteEnd.style.display = "block";
    detailQuoteModal.style.display = "none";
    $(".cover").fadeTo(500, 0.5);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    cellQuoteEnd.style.display = "none";
    $(".cover").fadeOut(500);
  }

  const quotes = {
      cellManufacturer: cellManufacturer,
      cellModel: cellModel,
      repairType: repairType,
      cellquotePrice: cellquotePrice,
      quoteFirstName: quoteFirstName,
      quoteLastName: quoteLastName,
      quotePhoneNumber: quotePhoneNumber,
      quoteEmailAddress: quoteEmailAddress,
      quoteStreetAddress: quoteStreetAddress,
      quoteCityAddress: quoteCityAddress,
      quoteState: quoteState,
      quoteZip: quoteZip
  };

  const options = {
      method: 'POST',
      body: JSON.stringify(quotes),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}



 const fechPromise = fetch('http://localhost:5000/api/usercellQuotes', options)
 fechPromise.then(res => {
        return res.json();
      }).then((data) => {
        // console.log(data._id)
        const fechPromiseGet = fetch(`http://localhost:5000/api/usercellQuotes/${data._id}`, getOptions)
       
        fechPromiseGet.then(data => {
          return data.json()
        }).then((qoute) => {
           document.getElementById('cellquotePrice').innerHTML = qoute.cellquotePrice       
        })
      })
     
     
}


function handleRegister() {

  //TODO get contents of register field inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const emailAddress = document.getElementById('emailAddress').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const password = document.getElementById('password').value;

  const user = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      password: password,
     
  };

  const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  fetch('http://localhost:5000/api/userModel', options)
      .then(res => res.json()) //this is the response data from the server
      .then(res => console.log(res));
}

//Cell Detail Quote Modal 

// Get the detail quote modal 
var detailQuoteModal = document.getElementById("detailQuoteModal");

// Get the button that opens the detail quote modal
var quoteNext = document.getElementById("quoteNext");

// When the user clicks on the button, open the detail quote modal
quoteNext.onclick = function(event) {
  detailQuoteModal.style.display = "block";
  cellquoteModal.style.display = "none";
  $(".cover").fadeTo(500, 0.5);
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[2];

// When the user clicks on <span> (x), close the detail quote modal
span.onclick = function() {
  detailQuoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

// Get the button that cancels the detail quote modal
var repairdetailCancel = document.getElementById("repairdetailCancel");

// When the user clicks on the cancel button, close the quote modal
repairdetailCancel.onclick = function(event) {
  detailQuoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

function handleSignIn() {
  const emailAddress = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  console.log(emailAddress);
  console.log(password);

  const credentials = {
      emailAddress: emailAddress,
      password: password,
  };

  const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
          'Content-Type': 'application/json'
      }
  }

  fetch('http://localhost:5000/api/userModel/signIn', options)
    .then(res => res.json()) //this is the response data from the server
    .then(res => {
      console.log(res);
      const token = res.token;
      console.log('token: '+token)
      window.localStorage.setItem('userToken',token);
      window.location.href = "/userdashboard.html";
    });
}

function getMyProfile() {
  const token = window.localStorage.getItem('userToken');

    const request = {
       token: token
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch('http://localhost:5000/api/userModel/profile', options)
        .then(res => {
          const userProfile = res.json();
          document.getElementById('userFirstName').innerText = userProfile.firstName;
          document.getElementById('userLastName').innerText = userProfile.lastName;
        }) //this is the response data from the server
        .then(res => console.log(res));
}


// Get the quote modal
var quoteModal = document.getElementById("quoteModal");

// Get the button that opens the modal
var quoteButton = document.getElementById("quoteButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
quoteButton.onclick = function(event) {
  quoteModal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  quoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

// Get the button that cancels the quote
var obtainquotecancel = document.getElementById("obtainquotecancel");

// When the user clicks on the cancel button, close the quote modal
obtainquotecancel.onclick = function(event) {
  quoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

// Get the cell phone quote modal
var cellquoteModal = document.getElementById("cellquoteModal");

// Get the button that opens the cell phone modal
var cellquoteButton = document.getElementById("cellquoteButton");

// Get the <span> element that closes the cell phone modal
var span = document.getElementsByClassName("close2")[1];

// When the user clicks on the button, open the cell phone modal
cellquoteButton.onclick = function(event) {
  cellquoteModal.style.display = "block";
  quoteModal.style.display = "none";
  $(".cover").fadeTo(500, 0.5);
}

// When the user clicks on <span> (x), close the cell phone modal
span.onclick = function() {
  cellquoteModal.style.display = "none";
  quoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

// Get the button that cancels the cell quote 
var cellquotecancel = document.getElementById("cellquotecancel");

// When the user clicks on the cancel button, close the cell phone quote modal
cellquotecancel.onclick = function(event) {
  cellquoteModal.style.display = "none";
  quoteModal.style.display = "none";
  $(".cover").fadeOut(500);
}

var openQuote = document.getElementById("openQuote1");
openQuote.onclick = function(event) {
  quoteModal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

var openQuote = document.getElementById("openQuote2");
openQuote.onclick = function(event) {
  quoteModal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

var openQuote = document.getElementById("openQuote3");
openQuote.onclick = function(event) {
  quoteModal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

var openQuote = document.getElementById("openQuote4");
openQuote.onclick = function(event) {
  quoteModal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

var openQuote = document.getElementById("footer-account");
openQuote.onclick = function(event) {
  modal2.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

var openQuote = document.getElementById("footer-login");
openQuote.onclick = function(event) {
  modal.style.display = "block";
  $(".cover").fadeTo(500, 0.5);
}

// Phone Number Input Mask

$("input[id='quotePhoneNumber']").on("input", function () {
  $("input[id='form2']").val(destroyMask(this.value));
  this.value = createMask($("input[id='form2']").val());
})

function createMask(string) {
  console.log(string)
  return string.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}

function destroyMask(string) {
  console.log(string)
  return string.replace(/\D/g, '').substring(0, 10);
}

// Quote Progress Bar
function getProgress() {
  const currentValue = document.getElementsByClassName("progress")[0].setAttribute("data-percentage", 20);
  const currentPercentage = document.getElementsByClassName("progress-value")[0].setAttribute("data-label", 20+"%");
}
function getProgress2() {
  const currentValue2 = document.getElementsByClassName("progress")[0].setAttribute("data-percentage", 40);
  const currentPercentage2 = document.getElementsByClassName("progress-value")[0].setAttribute("data-label", 40+"%");
}
function getProgress3() {
  const currentValue3 = document.getElementsByClassName("progress")[0].setAttribute("data-percentage", 60);
  const currentPercentage3 = document.getElementsByClassName("progress-value")[0].setAttribute("data-label", 60+"%");
}
function getProgress4() {
  const currentValue4 = document.getElementsByClassName("progress")[0].setAttribute("data-percentage", 80);
  const currentPercentage4 = document.getElementsByClassName("progress-value")[0].setAttribute("data-label", 80+"%");
}


function check_pass() {
  if (document.getElementById('password').value ==
          document.getElementById('passwordVerify').value) {
      document.getElementById('submitRegister').disabled = false;
  } else {
      document.getElementById('submitRegister').disabled = true;
      
  }
}
