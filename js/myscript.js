$(document).ready(function () {
    $(window).on('scroll', function () {

        let link = $('.navbar a.dot');
        let top = $(window).scrollTop();

        $('section').each(function () {
            let id = $(this).attr('id');
            let height = $(this).height();
            let offset = $(this).offset().top - 150;
            if (top >= offset && top < offset + height) {
                link.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });

    });


    let togglerFunc = () =>{
        if(menuCount === true){
            $('#nav-disable-1,#nav-disable-2,#nav-disable-3').removeClass('disabled-category')
            $('#toggler').removeClass('.togle-inactive');
            $('#toggler').addClass('togle-active');
            $('#nav').removeClass('menu-desk');
            $('#nav').addClass('menu animate__flipInX');
        } else if(menuCount === false){
            $('#nav-disable-1,#nav-disable-2,#nav-disable-3').addClass('disabled-category')
            $('#toggler').removeClass('togle-active');
            $('#toggler').addClass('.togle-inactive');
            $('#nav').removeClass('menu animate__flipInX');
            $('#nav').addClass('menu-desk');
        }
    }
    let menuCount = false
    $('#toggler').click(async function(){
        menuCount = !menuCount;
        togglerFunc()
    })
    $('.nav-click').click(function(){
        if(!$('.menu-desk').length){
            menuCount= !menuCount
            togglerFunc()
        }
    })

    let colorModeCount = 0;
    $('#check').click(async function() {
        colorModeCount = colorModeCount + 1;
        if(colorModeCount == 1){
            $('#check').addClass('day')
            $('#check').removeClass('night')
            $('html, #check, img').addClass('dayMode')
            $('.experiencia, .cualidades, .face-1').removeClass('border-card')
            $('.experiencia, .cualidades, .face-1').addClass('border-card-light')
            $('.mode-text').text('Light Mode')
        } else if(colorModeCount > 1) {
            $('#check').addClass('night')
            $('#check').removeClass('day')
            $('html, #check, img').removeClass('dayMode')
            $('.experiencia,.cualidades,.face-1').addClass('border-card')
            $('.experiencia,.cualidades,.face-1').removeClass('border-card-light')
            $('.mode-text').text('Dark Mode')
            colorModeCount = 0;
        }
    })

    $('.slider').slick({
        infinite: true,
        adaptiveHeight: false,
        // arrows: false,
        dots: false,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
    })
});
