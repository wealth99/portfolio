$(document).ready(function(){

    let i = 0;
    let time;
    const bg = $(".trip_list_bg > div");
    function changeName(i){
        let num = 0
        time=setInterval(function(){
            num++;
            num==4 ? num=0 : false;
            $(".trip_list_place > ul").eq(i).find("li").eq(num).addClass("active").siblings().removeClass("active");
            bg.eq(i).find("li").eq(num).stop().fadeIn(700).siblings().stop().delay(200).fadeOut(900);
        },3000)
    }
    // web 나라 리스트 이미지 교체 
    $(".trip_list > ul > li").click(function(){
        i = $(this).index();
        $(this).css("background","#fff").stop().animate({"font-size": "20px"}, 700);
        $(this).siblings().css("background","none").stop().animate({"font-size": "16px"},700);
        bg.eq(i).stop().fadeIn(700).siblings().stop().delay(200).fadeOut(900);
        bg.eq(i).find("li").eq(0).css("display","block").siblings().css("display","none");
        $(".trip_list_place > ul").eq(i).css("display", "block").siblings().css("display","none");
        $(".trip_list_place > ul").eq(i).find("li").eq(0).addClass("active").siblings().removeClass("active");
        clearInterval(time);
        changeName(i);
    })

    // web, moblie 항공편 출발지 팝업창 열기
    $(".air_bottom > ul > li").eq(0).add(".start").click(function(){
        $(".popup_departure").add(".m_popup_departure").css("display","block");
        $(".air_bottom > ul > li").eq(0).addClass("active");
        $(".air_bottom > ul > li").eq(0).find(".air_bottom_move").stop().animate({"top": -15 + "px"}, 200)
        $("html,body").css({"overflow": "hidden", "height": "100%"});
    })

    // web, mpbile 항공편 출발지 나라 서브(취항지) 열기
    $(".country > ul > li").add(".m_country_sub > li").click(function(){
        const i = $(this).index();
        const input = $(this).text();
        $(".sub_open").text(input)
        $(this).addClass("active").siblings().removeClass("active");
        $(".area > ul").eq(i).addClass("active").siblings().removeClass("active");
        $(".m_area > ul").eq(i).addClass("active").siblings().removeClass("active");
        $(".sub_open").removeClass("active");
        $(".m_country_sub").css("display","none");
    });

    // moblie 항공편 나라 제목 재지정
    $(".m_country_sub > li").click(function(){
        const i = $(this).index();
        const input = $(this).text();
        $(".sub_open").text(input);
        $(".country > ul > li").eq(i).addClass("active").siblings().removeClass("active");
    })

    // mobile 항공편 나라 항목 열기 
    $(".sub_open").click(function(){
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(".m_country_sub").css("display","block");
        } else {
            $(".m_country_sub").css("display","none");
        }
    })

    // web 지역
    $(".area > ul > li").click(function(){
        const hCity = $(this).find(".hCity").text();
        const hCode = $(this).find(".hCode").text();
        const input = [hCity, hCode]
        $(".input_start").text(input); 
        $(".m_search > input").val("취항지: " + input);
        $(".start_hCity").text(hCity);
        $(".start_hCode").text(hCode);
    })

    // mobile 지역
    $(".m_area > ul > li").click(function(){
        const hCity = $(this).find(".hCity").text();
        const hCode = $(this).find(".hCode").text();
        const input = [hCity, hCode]
        $(".m_search > input").val("취항지: " + input);
        $(".start_hCity").text(hCity);
        $(".start_hCode").text(hCode);
        $(".input_start").text(input); 
    })

    // web,mobile 항공편 출발지 팝업창 닫기
    $(".popup_close").add(".m_popup_close").click(function(){
        $(".popup_departure").add(".m_popup_departure").css("display","none");
        $("html,body").css({"overflow": "auto", "height": "100%"});

        if(!($(".input_start").text() == "")){
            $(".input_start").prev().stop().animate({"top": -15 + "px"}, 200);
            $(".map_01").attr("src","images/map02.svg");
        } else {
            $(".air_bottom_move").stop().animate({ "top": 0}, 200);
            $(".air_bottom > ul > li").eq(0).removeClass("active");
        }
        $(".country > ul > li").eq(0).addClass("active").siblings().removeClass("active");
        $(".area > ul").eq(0).addClass("active").siblings().removeClass("active");

        $(".sub_open").text("대한민국");
        if($(".sub_open").hasClass("active")){
            $(".sub_open").removeClass("active");
            $(".m_country_sub").css("display","none");
        }
        $(".m_search > input").val("");
        $(".m_area > ul").eq(0).addClass("active").siblings().removeClass("active");
        
    })

    // web,mobile 검색창 열기
    $(".nav_search").click(function(){
        $("html,body").css({"overflow": "hidden", "height": "100%"});
        $(".modal_search").add(".m_modal_search").css("display","block").stop().animate({ "top":"0" },200);
        const search = $(".modal_search > ul > li");
        const search_m = $(".m_modal_search > ul > li");
        $(search_m).each(function(index, item){
            const top = $(item).css("top");
            const pos = [0, 20, 40, 60, 80];
            $(item).stop().delay(200).animate({ top: pos[index] + "%"},(index+1) * 300); 
        });
        $(search).each(function(index, item){
            const top = $(item).css("top");
            const pos = [0, 20, 40, 60, 80];
            $(item).stop().delay(200).animate({ top: pos[index] + "%"},(index+1) * 300); 
        });
    })

    // web,mobile 검색창 닫기
    $(".search_close").click(function(){
        $("html,body").css({"overflow": "auto", "height": "100%"})
        $(".modal_search").add(".m_modal_search").stop().animate({ "top": -100 + "%" }, 200, function(){ 
            $(this).css("display","none");
        })
        const search = $(".modal_search > ul > li");
        const search_m = $(".m_modal_search > ul > li");
        $(search_m).each(function(index, item){
            const top = $(item).css("top");
            const place = [100, 130, 160, 190, 220];
            $(item).stop().delay(200).animate({ top: place[index] + "%"},200); 
        });
        $(search).each(function(index, item){
            const top = $(item).css("top");
            const place = [100, 130, 160, 190, 220];
            $(item).stop().delay(200).animate({ top: place[index] + "%"},200); 
        });
    })

    // web,mobile 메뉴창 열기
    $(".menu").click(function(){
        const menuBg = $(".modal_menu_bg > li");
        $(".modal_menu").css("display", "block");
        $(".m_modal_menu").css("display", "block");

        $(menuBg).each(function(index, item){
            $(item).stop().animate({ "left": 0 , "opacity": 1 }, (index+1) * 150);
        })
            $(".modal_service").stop().delay(300).animate({"left":0, "opacity": 1}, 200);
            $(".modal_sns").stop().delay(500).animate({"left":0, "opacity": 1}, 200);
            $(".modal_two").stop().delay(700).fadeIn(1000);
            $(".modal_nav").stop().delay(800).animate({ "left": 65 + "%", "opacity": 1}, 200);

            $(".m_modal_two").stop().animate({ "left": 0, "opacity": 1}, 200);
            $(".m_modal_nav").stop().animate({ "left":0, "opacity": 1}, 200);

            $("html,body").css({"overflow": "hidden", "height": "100%"});
    })

    // web,mobile 메뉴창 닫기
    $(".menu_close").click(function(){
        const menuBg = $(".modal_menu_bg > li");
        $(".modal_menu").css("display", "none");
        $(".m_modal_menu").css("display", "none");

        $(menuBg).each(function(index, item){
            $(item).css({ "left": 100 + "%" , "opacity": 0});
        })
            $(".modal_service").css({"left": 20 + "%", "opacity": 0});
            $(".modal_sns").css({"left": 20 + "%", "opacity": 0});
            $(".modal_two").stop().fadeOut(100);
            $(".modal_nav").css({ "left": 100 + "%", "opacity": 0});

            $(".m_modal_two").stop().animate({ "left": 100 + "%", "opacity": 0}, 200);
            $(".m_modal_nav").stop().animate({ "left": 100 + "%", "opacity": 0}, 200);

            $("html,body").css({"overflow": "auto", "height": "100%"})
    })

    // web 메뉴창 서브
    $(".modal_gnb > li > a").click(function(){
        $(this).siblings(".modal_lab").stop().animate({ "left": 0}, 200).addClass("active").siblings().removeClass("acitve");
    })

    // web 메뉴창 서브의 서브
    $(".modal_lab > ul > li > a").click(function(){
        $(this).toggleClass("active").parent().siblings().children().removeClass("active")
        $(this).siblings(".sub").stop().slideToggle(300);
        $(this).parent().siblings().children(".sub").stop().slideUp(300);
    })

    //web 메뉴창 서브 전으로..
    $(".prev").click(function(){
        $(".modal_lab").stop().animate({"left": 100 + "%"}, 200);
        if($(".modal_lab > ul > li > a").hasClass("active")){
            $(".modal_lab > ul > li > a").siblings(".sub").stop().slideUp(300);
            $(".modal_lab > ul > li > a").removeClass("active");
        }
    })


    // mobile 이미지 돌리기
    const $trip_title = $('.m_trip_title > ul > li');
    const $trip_img = $('.m_trip_img > ul > li');
    const xPositions = ['0%', '17.5%', '34.5%', '50%'];
    const scales = [1.0, 0.95, 0.90, 0.85];
    const zIndexes = [4, 3, 2, 1];
    let $trip_img_list = $('.m_trip_img > ul');

    $(".m_trip_img > ul").eq(0).find("li").each(function(index, item){
        $(this).data('order', index);
    });

    $trip_title.on('click', function(e){
        e.preventDefault();
        const $this = $(this);
        const index = $this.index();
        $trip_img_list = $('.m_trip_img > ul').eq(index);
        $this.addClass('active').siblings().removeClass('active');

        $trip_img_list.addClass('active').siblings().removeClass('active');
        $trip_img_list.children('li').each(function (index, item) {
            $(item).attr('data-order', index);
        });
    });

    $trip_img.on('click', function(){
        const $img = $(this);
        const order = $img.data('order');
        const $images = $img.parent().children('li');
        const images = [
            $img,
            ...$images.slice(order + 1, $images.length),
            ...$images.slice(0, order),
        ];
        $img.addClass("active").siblings().removeClass("active");
        images.forEach(function (img, i) {
            const $img = $(img);
            $img.stop().animate({ left: xPositions[i] });
            $img.css({ transform: `scale(${scales[i]})`, 'z-index': zIndexes[i] });
        });
        
    });
})