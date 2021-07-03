$(document).ready(function(){
  /// sticky menu
  $(".js--services-section").waypoint(function(direction){
       if(direction=="down"){
         $("nav").addClass("sticky");

       }
       else{
         $("nav").removeClass("sticky");

       }
  });

  // Active Link

  $(".nav-item a").on("click", function() {
  $(".nav-item a").removeClass("active");
  $(this).addClass("active");
  });

  $(".row>a").on("click", function() {
  $(".nav-item a").removeClass("active");
  $(".home a").addClass("active");
});



  ///mixitup (portfolio section)
  var mixer = mixitup('.container');
});

function openNav()
{
  document.getElementById("myNav").style.width="100%";
}

function closeNav()
{
  document.getElementById("myNav").style.width="0%";
}
