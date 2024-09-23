$(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
      mouseenter: function() {
        rotating = false;
      },
      mouseleave: function() {
        rotating = true;
      }
    }, '#ourclients');
    function rotateClients() {
      if (rotating != false) {
        var $first = $('#clientlogo li:first');
        $first.animate({
          'margin-left': '-220px'
        }, 2000, function() {
          $first.remove().css({
            'margin-left': '0px'
          });
          $('#clientlogo li:last').after($first);
        });
      }
    }
  });


  var timeOut = 2000;
  var slideIndex = 0;
  var autoOn = true;

  autoSlides();

  function autoSlides() {
      timeOut = timeOut - 20;

      if (autoOn == true && timeOut < 0) {
          showSlides();
      }
      setTimeout(autoSlides, 20);
  }

  function prevSlide() {

      timeOut = 2000;

      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slideIndex--;

      if (slideIndex > slides.length) {
          slideIndex = 1
      }
      if (slideIndex == 0) {
          slideIndex = 3
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }

  function showSlides() {

      timeOut = 2000;

      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slideIndex++;

      if (slideIndex > slides.length) {
          slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }



  window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 1500);
};



var currentImg = 0;
var imgs = document.querySelectorAll('.slider img');
let dots = document.querySelectorAll('.dot');
var interval = 3000;

// Second banner
var secondEventTitle = 'Hi! *Freshmen* Orientation Day';

// Third banner
var thirdEventDate = new Date('2023-02-01'); // pull this from database
var thirdEventDateString = thirdEventDate.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' });
var days = calculateDays(new Date(), thirdEventDate) || 0;
const countdownText = days > 0 ? `${days} days left` : 'Live Now!';

var secondImageUrl = `https://ondemand.bannerbear.com/simpleurl/01YWAxB7nGYdJrKoXM/title/text/${encodeURIComponent(secondEventTitle)}`;
var thirdImageUrl = `https://ondemand.bannerbear.com/simpleurl/ley9O0B2ZGbB4GjRDY/date/text/${encodeURIComponent(
  thirdEventDateString
)}/countdown/text/${encodeURIComponent(countdownText)}`;

document.getElementById('img-2').src = secondImageUrl;
document.getElementById('img-3').src = thirdImageUrl;

var timer = setInterval(changeSlide, interval);

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length;

  if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}

function calculateDays(today, eventDate) {
  const difference = eventDate.getTime() - today.getTime();

  return Math.ceil(difference / (1000 * 3600 * 24)); // convert to days
}



let active = 1;
    const cardCount = $('.card-container').length;
    
    function prevSlide() {
      active = (active - 1 + cardCount) % cardCount;
      updateCarousel();
    }
    
    function nextSlide() {
      active = (active + 1) % cardCount;
      updateCarousel();
    }
    
    function updateCarousel() {
      $('.card-container').each(function(i) {
        const offset = ((active - i) % cardCount) / 3;
        const direction = Math.sign(active - i);
        const absOffset = Math.abs(active - i) / 3;
        const isActive = i === active ? 1 : 0;
        const opacity = Math.abs(active - i) <= 1 ? 1 : 0;
        
        $(this).css({
          '--offset': offset,
          '--direction': direction,
          '--abs-offset': absOffset,
          '--active': isActive,
          '--opacity': opacity
        });
      });
    }
    
    $(document).ready(function() {
      updateCarousel();
    });

    
$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });
});

