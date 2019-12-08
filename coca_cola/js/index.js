$(document).ready(function(){
    $(".search > a").click(function(){
        $(".open_search").addClass("active");
    })
    $(".search_close").click(function(){
        $(".open_search input").val('');
        $(".open_search").removeClass("active");
    })
    $(".member > a ").click(function(){
        $("#open_member").addClass("active");
    })
    $(".open_close").click(function(){
        $("#open_member").removeClass("active");
    })
    $(".hamBtn").click(function(){
        $('.menu').stop().animate({ 
            "left": 0
        },500);
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
    });

    $(".menu_close").click(function(){
        $(".menu").stop().animate({ "left": "-100%" },500)
        $("html, body").css({'overflow': 'auto', 'height': '100%'});
        var menu = $(".menu-main > li > a");
        menu.siblings(".menu-sub").stop().slideUp(500); // 클로즈 눌렀는데 메뉴 열려있으면 닫혀라
        menu.removeClass("active"); // 클로즈 눌렀는데 메뉴에 active 클래스 갖고 있으면 없애라
    });

    $(".menu-main > li > a").click(function(){
        if($(this).hasClass("active_can")){ // active_can이 없으면 실핼 불가
            $(this).siblings(".menu-sub").stop().slideToggle(500); // 서브메뉴 열려라 닫혀라
            $(this).parent().siblings().children(".menu-sub").stop().slideUp(500); // 열려있는채로 눌르면 다른 서브메뉴 닫혀라
            $(this).toggleClass("active").parent().siblings().children().removeClass("active") // 다른 서브 active 삭제
        } else {
            return false;
        }
    });

    $(window).resize(function(){
        var w = $(window).width();
        w > 640 ?  $(".menu").css("left","-100%") : false;
        })
    
        
    var index = 0; // 선택된 버튼이 몇번째 버튼인지 체크할 변수
    var banner = $(".banner > li") // 배너를 저장할 변수
    var slideBtn = $(".slideBtn > li") // 버튼을 저장할 변수
    var nowShow = 0 // 현재 보여지는 배너가 몇번째 배너인지를 체크해줄 변수
    var moveUp = $(".moveUp");

    // 버튼을 클릭하면 해당하는 배너가 오른쪽에서 나오기
    slideBtn.on("click", function(e){
        var index = $(this).index();
        e.preventDefault();
        $(this).parent().siblings(".banner").find(".moveUp").eq(index).stop().delay(1000).animate({"bottom": 0}, 1000).parents("li").siblings().find(".moveUp").stop().delay(1000).animate({"bottom": -50 + "px"},1000)
        $(this).addClass("active").siblings().removeClass("active");
        if(nowShow == index) return; // 같은 버튼누르면 이벤트X 
        var prevBanner = banner.eq(nowShow); // 현재 보여지는 배너는 왼쪽으로 나가기  
        prevBanner.stop().animate({
            "left": "-100%"
        },1500);
        var nextBanner = banner.eq(index); // 선택된 버튼에 해당하는 배너가 오른쪽에서 화면으로 나오도록
        nextBanner.css("left","100%").stop().animate({
            "left": 0,
        },1500).addClass("active").siblings().removeClass("active");
        nowShow = index; // 화면에 보여지는 화면의 순서를 변경하기
    });

     // 오른쪽 버튼
     $(".rightBtn").on("click",function(){
        index++;
        index == 4 ? index = 0 : false; 
        $(this).parent().siblings(".banner").find(".moveUp").eq(index).stop().delay(1000).animate({"bottom": 0}, 1000).parents("li").siblings().find(".moveUp").stop().delay(1000).animate({"bottom": -50 + "px"},1000)
        $(".slideBtn > li").eq(index).addClass("active").siblings().removeClass("active");
        var prevBanner = banner.eq(nowShow); // 현재 보여지는 배너는 왼쪽으로 나가기  
        prevBanner.stop().animate({
            "left": "-100%"
        },1500);
        var nextBanner = banner.eq(index); // 선택된 버튼에 해당하는 배너가 오른쪽에서 화면으로 나오도록
        nextBanner.css("left","100%").stop().animate({
            "left": 0,
        },1500).addClass("active").siblings().removeClass("active");
        nowShow = index; // 화면에 보여지는 화면의 순서를 변경하기
    });

    // 왼쪽 버튼
    $(".leftBtn").on("click",function(){
        index--;
        index < 0 ? index = 3 : false; 
        $(this).parent().siblings(".banner").find(".moveUp").eq(index).stop().delay(1000).animate({"bottom": 0}, 1000).parents("li").siblings().find(".moveUp").stop().delay(1000).animate({"bottom": -50 + "px"},1000)
        $(".slideBtn > li").eq(index).addClass("active").siblings().removeClass("active");
        var prevBanner = banner.eq(nowShow); // 현재 보여지는 배너는 오른쪽으로 나가기  
        prevBanner.stop().animate({
            "left": "100%"
        },1500);
        var nextBanner = banner.eq(index); // 선택된 버튼에 해당하는 배너가 왼쪽에서 화면으로 나오도록
        nextBanner.css("left","-100%").stop().animate({
            "left": 0
        },1500).addClass("active").siblings().removeClass("active");
        nowShow = index; // 화면에 보여지는 화면의 순서를 변경하기
    });


    $(".banner").on("swipeleft", function(){
        $(".rightBtn").trigger("click");
    })
    $(".banner").on("swiperight", function(){
        $(".leftBtn").trigger("click");
    })
})