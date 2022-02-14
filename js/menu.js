$(function(){

    $('#menu li:nth-child(1)').on('click',function(){
        $('#coffee').show();
        $('#beverage').show();
        $('#bread').show();
        $('#icecream').show();
        $('#map_all').addClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(2)').on('click',function(){
        $('#coffee').show();
        $('#beverage').hide();
        $('#bread').hide();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').addClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(3)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').show();
        $('#bread').hide();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').addClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(4)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').hide();
        $('#bread').show();
        $('#icecream').hide();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').addClass('click_sub_title');
        $('#map_icecream').removeClass('click_sub_title');
    });

    $('#menu li:nth-child(5)').on('click',function(){
        $('#coffee').hide();
        $('#beverage').hide();
        $('#bread').hide();
        $('#icecream').show();
        $('#map_all').removeClass('click_sub_title');
        $('#map_coffee').removeClass('click_sub_title');
        $('#map_beverage').removeClass('click_sub_title');
        $('#map_bread').removeClass('click_sub_title');
        $('#map_icecream').addClass('click_sub_title');
    });

    $(window).on('scroll',function(){
        if($(document).scrollTop() >= ($('#headerBox').height()+$('#mainMenuBox').height())){
            $('#menuProduct').addClass('menuBoxFixed'); /*menu.css에 있음*/
        }
        else{
            $('#menuProduct').removeClass('menuBoxFixed');
        }
    });


});
