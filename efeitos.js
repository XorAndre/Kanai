unction myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*Efeito Scrolling*/
jQuery(document).ready(function($) {
    var $doc = $('html, body');
    $('.scrollSuave').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });//Efeito Scrolling
    var calcHeight = function() {
         $('#preview-frame').height($(window).height());
         }
         $(document).ready(function() {
           calcHeight();
         }); 
         $(window).resize(function() {
           calcHeight();
         });
         .load(function() {
           calcHeight();
     });
});    
/*pre editor*/
jQuery(document).ready(function($) {
   $('pre').each(function(index, el){
     $(this).text( $(this).html() );
   });
});
