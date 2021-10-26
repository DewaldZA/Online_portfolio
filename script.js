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

    // slide-up button script
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

const hideShowButton = document.getElementById('hide-show-button');
const traitsSkills = document.getElementById('traits-skills');
let hideShowSection = document.getElementById('changeing-section');

// Getting contact me section inputs
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputSubject = document.getElementById('input-subject');
const txtTexterea = document.getElementById('txt-texterea');
const contactBtn = document.getElementById('contact-btn'); 

// Storing all the inputs in an array to filter through them
// inputEmail is missing
const inputs = [inputName, inputSubject, txtTexterea];

// Storing the email format in a variable 
const emailFormat = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9\._])+.([a-z]+)(.[a-z]+)?$/;

const showHideFunction = () => {
    if (hideShowSection.style.display != 'none') {
        hideShowSection.style.display = 'none';
        hideShowButton.innerHTML = `More <i class="fa fa-chevron-circle-down"></i>`;
        hideShowButton.scrollIntoView();
    } else {
        hideShowSection.style.display = 'block';
        hideShowButton.innerHTML = `Less <i class="fa fa-chevron-circle-up"></i>`;
    }
};


// const validateEmail = (inputEmail) => {
//     if(inputEmail === emailFormat) {
//         alert('valid');
//         return true;
//     } else {
//         alert('not valid');
//         return false;
//     }
// };
const validateInputs = () => {
    // inputEmail is missing
    if (inputName.value === '' || inputSubject.value === '' || txtTexterea.value === '') {
        alert('not valid');
        return;
    } else {
        alert('valid');
    }
};

const errorInputs = () => {
    for(let i = 0; i < inputs.length; i++) {
        console.log(i);
        console.log(inputs);
        if(inputs[i].value != '') {
            console.log('I made into the second if block');
            inputs[i].style.borderColor = 'green';
        } else if (inputs[i].value === '') {
            console.log('I made it into the third if!');
            inputs[i].style.borderColor = 'red';
        }
    }

}


hideShowButton.addEventListener('click', showHideFunction);
contactBtn.addEventListener('click', () => {
    validateInputs();
    errorInputs();
});



