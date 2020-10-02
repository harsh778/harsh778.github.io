/*
This file contains all the scripts and JS required for harshsinghal.me to work independently. Service-Worker client and backend scripts can be found in sw.js and app.js
*/


var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2300);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainBod").style.display = "block";
}
//ANIMATION STARTS
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
//ANIMATION ENDS

const scrollIndicatorElt = document.getElementById('scrollIndicator');
const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
window.addEventListener('scroll', moveScrollIndicator);
function moveScrollIndicator() {
  const percentage = ((window.scrollY) / maxScrollableHeight) * 100;
  scrollIndicatorElt.style.width = percentage + '%';
}

jQuery(document).on("scroll", function() {
  if ($(document).scrollTop() > 120) {
    $(".navbar").css("background-color", "var(--nav-bg-color)");
  } else {
    $(".navbar").css("background", "none");
  }
});
$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("Cursor").style.filter = "invert(100)";
    document.getElementById("skill-img").style.filter = "invert(100)";
    document.getElementById("skill-img-1").style.filter = "invert(100)";
    document.getElementById("skill-img-2").style.filter = "invert(100)";
    document.getElementById("skill-img-3").style.filter = "invert(100)";

  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("Cursor").style.filter = "invert(0)";
    document.getElementById("skill-img").style.filter = "invert(0)";
    document.getElementById("skill-img-1").style.filter = "invert(0)";
    document.getElementById("skill-img-2").style.filter = "invert(0)";
    document.getElementById("skill-img-3").style.filter = "invert(0)";
  }
}
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("Cursor").style.filter = "invert(100)";
    document.getElementById("skill-img").style.filter = "invert(100)";
    document.getElementById("skill-img-1").style.filter = "invert(100)";
    document.getElementById("skill-img-2").style.filter = "invert(100)";
    document.getElementById("skill-img-3").style.filter = "invert(100)";
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("Cursor").style.filter = "invert(0)";
    document.getElementById("skill-img").style.filter = "invert(0)";
    document.getElementById("skill-img-1").style.filter = "invert(0)";
    document.getElementById("skill-img-2").style.filter = "invert(0)";
    document.getElementById("skill-img-3").style.filter = "invert(0)";
    localStorage.setItem('theme', 'light');
  }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;

    document.getElementById("skill-img").style.filter = "invert(100)";
    document.getElementById("Cursor").style.filter = "invert(100)";
    document.getElementById("skill-img-1").style.filter = "invert(100)";
    document.getElementById("skill-img-2").style.filter = "invert(100)";
    document.getElementById("skill-img-3").style.filter = "invert(100)";
  }
}
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});


document.getElementById("lastupdate").innerHTML = document.lastModified;
console.log("Lol, what are you doing 'inspecting the element'? Now that you are here suggest me some changes in the UI...GG have fun.")
