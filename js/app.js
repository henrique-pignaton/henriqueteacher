$('col-101').click(function(e){
e.preventdefault();
var id=$(this).attr("href"),targeroffset=$(id).offset().top
$('html, body').animate({
    scrolltop: targeroffset
}, 500); 


})