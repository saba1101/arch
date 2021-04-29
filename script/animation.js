$('body').css({
    overflow: 'hidden'
})
// setTimeout(()=>{
//     $('.loader').fadeOut('slow');
//     $('body').css({overflow: 'auto'})
// },1100)

$(window).on('load',function(){
    setTimeout(()=>{
        $('.intro').animate({
            opacity: 1,
        },500)
        // $('header').animate({
        //     top: 0,
        // },1000)
    },0)
    $('.loader').fadeOut('slow');
    $('body').css({overflow: 'auto'})
})

$(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });


$('#scroll-home, #footer-scroll, .logo').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    },1200)
})

$('#scroll-about, #intro-scroll').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.about').offset().top - 80,
    },1200)
})

$('#scroll-services').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.services').offset().top - 100,
    },1200)
})

$('#scroll-gallery').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.slider').offset().top - 80,
    },1200)
})

$('#scroll-contact').on('click', (e)=>{
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.contact').offset().top - 80,
    },1200)
})
