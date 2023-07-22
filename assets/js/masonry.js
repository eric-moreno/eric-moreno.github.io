<<<<<<< HEAD
$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
=======
$(document).ready(function(){var r=$(".grid").masonry({gutter:10,horizontalOrder:!0,itemSelector:".grid-item"});r.imagesLoaded().progress(function(){r.masonry("layout")})});
>>>>>>> 17c3338db7dc10b65255ac87d3c98c88e43a9e86
