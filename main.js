$(document).ready(function(){
  $('.sidenav').sidenav();
});

M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

$(document).ready(function(){
  $('.parallax').parallax();
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$(document).ready(function(){
    $('.carousel').carousel();
  });

  $('.carousel').carousel();
    setInterval(function() {
      $('.carousel').carousel('next');
    }, 3000); // every 2 seconds
