//footer
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
//fix phone screen
function phone_screen(){
    var $window = $(window);
    var _ww = $window.width();
    var _hw = $window.height();

    if( _ww > 992){
        $('.phone-box').addClass('phone-screen');
    }
    else{
        $('.phone-box').removeClass('phone-screen');
    }

    var wphone = $(".phone-screen").outerWidth();
    var hphone = $(".phone-screen").outerHeight();
    var wframe = $(".phone-screen .box").outerWidth();
    var hframe = $(".phone-screen .box").outerHeight();
    if( _hw < 949){
        var hphone1 = _hw - 10;
        var wphone1 = (hphone1 * 514) / 930;
        var wphone1_leftMG = -(wphone1 / 2);

        var hframe1 = (hphone1 * hframe) / hphone;
        var wframe1 = (wphone1 * wframe) / wphone;
        var topMG = (hphone1 - hframe1) / 2;

        var bottom_back = -((topMG + 18) / 2);

        $(".phone-screen").addClass('small-phone');

        $(".phone-screen").css("height", hphone1);
        $(".phone-screen").css("width", wphone1);
        $(".phone-screen").css("top", '5px');
        $(".phone-screen").css("margin-left", wphone1_leftMG);

        $(".phone-screen .box").css("height", hframe1);
        $(".phone-screen .box").css("width", wframe1);
        $(".phone-screen .box").css("margin-top", topMG);

        $(".phone-screen .back-row").css("bottom", bottom_back);

        $(".phone-screen .box .tabs-block-all").css("height", hframe1 - 2);
        $(".phone-screen .box .tabs-block-all .tab-content-all >li").css("max-height", hframe1 - 61);

        if(_ww<=992){
            $(".phone-box").removeClass('small-phone');

            $(".phone-box").css("height", '');
            $(".phone-box").css("width", '');
            $(".phone-box").css("top", '');
            $(".phone-box").css("margin-left", '');

            $(".phone-box .box").css("height", '');
            $(".phone-box .box").css("width", '');
            $(".phone-box .box").css("margin-top", '');

            $(".phone-box .back-row").css("bottom", '');

            $(".phone-box .box .tabs-block-all").css("height", '');
            $(".phone-box .box .tabs-block-all .tab-content-all >li").css("max-height", '');
        }
    }
    else{
        $(".phone-screen").removeClass('small-phone');

        $(".phone-screen").css("height", '');
        $(".phone-screen").css("width", '');
        $(".phone-screen").css("top", '');
        $(".phone-screen").css("margin-left", '');

        $(".phone-screen .box").css("height", '');
        $(".phone-screen .box").css("width", '');
        $(".phone-screen .box").css("margin-top", '');

        $(".phone-screen .back-row").css("bottom", '');

        $(".phone-screen .box .tabs-block-all").css("height", '');
        $(".phone-screen .box .tabs-block-all .tab-content-all >li").css("max-height", '');
    }
}
//code list seemore
function code_list_seemore(){
    if ($(this).children('.arrow').hasClass("down")) {
        $(this).children('.arrow').removeClass('down');
        $(this).children('.arrow').addClass('up');
        $(this).children('.txt').text('Thu gọn');
        $(this).prev('.onegame-code-list').addClass('open');
    }
    else{
        $(this).children('.arrow').removeClass('up');
        $(this).children('.arrow').addClass('down');
        $(this).children('.txt').text('Xem thêm');
        $(this).prev('.onegame-code-list').removeClass('open');
    }
}

jQuery(document).ready(function () {
    
    $('.footer .top-foot .right .desc .seemore').click(foot_show_hide);
    $('.code-block .code-list > li .seemore-btn').click(code_list_seemore);
    phone_screen();

    //Body is resized
    var delay;
    $(window).resize(function () {
        // if(delay) {clearTimeout(delay)}
        // delay = setTimeout(function(){
        // },1000);
        // console.log(1);
            phone_screen();
    });

});
