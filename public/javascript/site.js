$(window).load(function(){
    //Showing loading first
   $('#overlay').fadeOut();
   $("#content").css("visibility", "visible")
});


$(document).ready( function() {
  // init Masonry after all images have loaded
  var $grid = $('.imagegrid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.col-lg-4',
      percentPosition: true,
      columnWidth: '.col-lg-4'
    });
  });

  $(".closethumb").on('click', function(){
    $(this).parents(".col-lg-4").fadeOut(1000);

  })

});