//carousel
function _carousel(){
    $('.carousel').jcarouselAutoscroll({
        autostart: true
    });
}
//sticky
function _sticky(){
    $(window).scroll(function () {
        var h_scroll = $(this).scrollTop();
        var h_body = $("body").height();
        var h_scroll_bottom = h_scroll + $(".footer").height() + $(".bottom-out").height() + 70;
        if (h_scroll > 0) {
            $('.header').addClass('tkhead');
            //hide when scroll to bottom
            if (h_scroll > 142) {
                $('.ticky-banner').addClass('tkbanner');
                if(h_scroll_bottom > h_body){
                     $(".bottom-out").fadeOut();
                }
                else{
                    $(".bottom-out").fadeIn();
                }
            }
            else{
                $('.ticky-banner').removeClass('tkbanner');
            }
        }
        else {
            $('.header').removeClass('tkhead');
        }
    });
}
function sticker(){
    $("#sticker").sticky({ topSpacing: 55, center:true, className:"sticker-box" });
}
//scroll to top
function _scrolltotop(){
    $("#back-top").hide();
    //--------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}
//show and hide content
function _showhidebtn(){
    $('.show-hide-box').each(function () {
        var h_box = $(this).height();
        if(h_box <= 859){
            $(this).next(".show-hide-btn").hide();
        }
    });
}
function _showhide(){
    if ($(this).hasClass("down")) {
        $(this).prev(".show-hide-box").removeClass('show-content');
        $(this).removeClass("down");
        $(this).text("Xem thêm");
    }
    else {
        $(this).prev(".show-hide-box").addClass('show-content');
        $(this).addClass("down");
        $(this).text("Thu gọn");
    }
}
//up and down content
function _updown(){
    if ($(this).hasClass("down-btn")) {
        $(this).parent().hide();
        $(this).parent().next().show();
    }
    else {
        $(this).parent().hide();
        $(this).parent().prev().show();
    }
}
function _togglelist(){
    if ($(this).parent().hasClass("active")) {
        $(this).next().slideUp(300);
        $(this).parent().removeClass("active");
    }
    else {
        $(this).next().slideDown(300);
        $(this).parent().addClass("active");
    }
}
function foot_show_hide(){
    if ($(this).hasClass("active")) {
        $(this).prev().slideUp(300);
        $(this).removeClass("active");
        $(this).text('Xem thêm');
    }
    else {
        $(this).prev().slideDown(300);
        $(this).addClass("active");
        $(this).text('Thu gọn');
    }
}

jQuery(document).ready(function () {
    
    //load
    _scrolltotop();
    $('.show-hide-btn').click(_showhide);
    $('.updown-btn').click(_updown);
    _showhidebtn();
    $('.toggle-list > ul li .title-row').click(_togglelist);
    $('.footer .top-foot .right .desc .seemore').click(foot_show_hide);
    _sticky(); //sticker header and banner left right
     sticker();//sticker list detail

    //Body is resized
    $(window).resize(function () {
        _showhidebtn();
    });
});
