$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});

$(document).ready(function(){
    // $(document).bind('beforeunload',function(){
    //     $('.navbar').addClass("sticky");
    // });

    $(window).scroll(function() { 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    // TOGGLE MENU NAVBAR SCRIPT
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING ANIMATION SCRIPT
    var typed = new Typed(".typing", {
        strings: ["Full Stack Developer!", "Designer!", "Freelancer!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full Stack Developer!", "Designer!", "Freelancer!"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Tomorrow belongs to me", "Success is something you attract by the person you become", "You get what you give"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // PORTFOLIO SCRIPT
    $("[data-fancybox]").fancybox();

    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        
        return false;
    }); 

});

let btnShowHide = document.getElementById('changeingButton');
let section = document.getElementById('changeingSection');

function hideShowDiv() {
    if (section.classList.contains('buttonDisapear')) {
        console.log('IM HIDDING');
        section.classList.toggle('buttonDisapear');
        btnShowHide.innerText = 'LESS';
    } else {
        console.log('IM RIGHT HERE!');
        section.classList.toggle('buttonDisapear');
        btnShowHide.innerText = 'MORE';
    }
}





