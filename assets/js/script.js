$(document).ready(function() {

	$(window).scroll(function() {
	   if ($(window).scrollTop() + $(window).height() > $(document).height() - 45) {
	   		$("#footer").css("opacity", 1); 
	   }
	});

	$(window).scroll(function() {
	   if ($(window).scrollTop() + $(window).height() < $(document).height() - 45) {
	   		$("#footer").css("opacity", 0.7); 
	   }
	});

	/* toggle down and up when user clicks the question heading in FAQ section */

	$(".answer-container").hide();

	$(".question-container").click(function(){
			$(".active").removeClass("active").next("div").hide();
			$(this).addClass("active").next().slideToggle("slow");
	})

	$(".answer-container").click(function(){
		$(".active").removeClass("active").next("div").hide("slow");
	})

	if ($('.cd-header').hasClass('menu-is-open')) {
		$("#footer").css("z-index", 9999);
	}

	var showChar = 100;
    var ellipsestext = "...";
    var moretext = ">>>";
    var lesstext = "<<<";

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar-1, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });

        $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
            $(".member_profile").css("height", "500px");


        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
            $(".member_profile").css("height", "800px");
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

});