
$(document).ready(function(){
    $("#about").click(function() {
        $('html,body').animate({
            scrollTop: $(".about").offset().top},'slow');
    });
    $("#terms").click(function() {
        $('html,body').animate({
            scrollTop: $(".terms-content").offset().top},'slow');
    });
    $("#contact").click(function() {
        $('html,body').animate({
            scrollTop: $(".form-wrapper").offset().top -50},'slow');
    });
    
    $('.lightbox, .close').on('click', function(event) {
        $(".lightbox").hide();
    });
    
    $( '#download, .btn, .central-btn').on('click', function(event) {
        $(".lightbox").addClass("lightbox-center");
        $(".lightbox").show();
    });

    // SLIDER// WHY DOWNLOAD//
	
	const Slider = function(element,prevArrow,nextArrow) {
        const slideCount = $(element + ' ul li').length;
        const slideWidth = $(element + ' ul li').width();
       	const slideHeight = $(element + ' ul li').height();
        const sliderUlWidth = slideCount * slideWidth;
        
        $(element).css({ width: slideWidth, height: slideHeight }); 
        $(element + ' ul li').css({ width: slideWidth, height: slideHeight });
        
        $(element + ' ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
        
        $(element + ' ul li:last-child').prependTo(element + ' ul');
    
        function moveLeft() {
            $(element + ' ul').animate({
                left: + slideWidth
            }, 400, function () {
                $(element + ' ul li:last-child').prependTo(element + ' ul');
                $(element + ' ul').css('left', '');
            });
        };
    
        function moveRight() {
            $(element + ' ul').animate({
                left: - slideWidth
            }, 400, function () {
                $(element + ' ul li:first-child').appendTo(element + ' ul');
                $(element + ' ul').css('left', '');
            });
        };
    
        $(prevArrow).click(function () {
            moveLeft();
        });
    
        $(nextArrow).click(function () {
            moveRight();
        });
	}
	
    let slider = new Slider('#slider','.prev','.next');
    let slider2 = new Slider('#slider2','.prev2','.next2');
	
	
});
