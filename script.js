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
document.addEventListener('DOMContentLoaded', function(event) {
  var dataText = ["Student.", "Gamer.", "Web-developer.", "Programmer.", "Learner.", "Innovator." ];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".desc").innerHTML = text.substring(0, i + 1) + '<span></span>';

      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 300);
    }
  }

  function typeWriterDel(text, i, fnCallback) {
    if (i > 0) {
      document.querySelector(".desc").innerHTML = text.substring(0, i - 1) + '<span></span>';

      setTimeout(function() {
        typeWriterDel(text, i - 1, fnCallback);
      }, 50);
    } else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 300);
    }
  }

  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined') {
      setTimeout(function() {
        StartTextAnimation(0);
      }, 0);
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        typeWriterDel(dataText[i], dataText[i].length, function() {
          StartTextAnimation(i + 1);
        });
      });
    }
  }
  
  StartTextAnimation(0);
});

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
