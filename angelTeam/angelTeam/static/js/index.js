/**
*index.js
**/

$(function(){
    //윈도우객체 스크롤시(이벤트-scroll) document의 메인 메뉴 고정
    $(window).on('scroll',function(){ //윈도우객체에서 scroll이벤트가 발생하면
        //스크롤되는 document객체의 top위치가 #headerBox height(index.css 6라인 60px) 이상이면 메인메뉴는 고정되고 그림자를 표시
        if($(document).scrollTop() >= $('#headerBox').height()){
        //메인메뉴 고정, 그림자 표시를 위한 동적 클래스를 부착(index.css에 생성해놨음 20~28라인)
            $('#headerBox').addClass('headerBoxFixed');

        }else{
            $('#headerBox').removeClass('headerBoxFixed');
        }
    });

    //moveToTop 이미지 클릭시 화면 맨 위로 이동
    $('#moveToTop').on('click',function(){
        $('html, body').animate({scrollTop:0},500)
    });

});

