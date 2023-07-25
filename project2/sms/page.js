$(document).ready(function() {
    var urls = ['cat1.jpg', 'demo.jpg', 'demo1.jpg'];
  
    var cout = 1;
    $('.container-main-img').css('background-image', 'url("' + urls[0] + '")');
    setInterval(function() {
      $('.container-main-img').css('background-image', 'url("' + urls[cout] + '")');
      cout == urls.length-1 ? cout = 0 : cout++;
    }, 5000);
  
  });
 