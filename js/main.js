$(document).ready(function(){
    $("#projects").click(function(){
        $(".archive").hide();
        $("#images").show();
        $("#links").show();
        

    });
    $("#archive").click(function(){
        $(".archive").show();
        $("#images").hide();
	});
	// $("#right").click(function(){
 //        $("#humpty2").show();
 //        $("#humpty1").hide();
	// });
	// $("#left").click(function(){
 //        $("#humpty1").show();
 //        $("#humpty2").hide();

	// });
	// $("#right2").click(function(){
 //        $("#heart2").show();
 //        $("#heart1").hide();
	// });
$('.img-wrap img:gt(0)').hide();

$('#next').click(function() {
    $('.img-wrap img:first-child').fadeOut().next().fadeIn().end().appendTo('.img-wrap');
});

$('#previous').click(function() {
    $('.img-wrap img:first-child').fadeOut();
    $('.img-wrap img:last-child').prependTo('.img-wrap').fadeOut();
    $('.img-wrap img:first-child').fadeIn();

});
});




