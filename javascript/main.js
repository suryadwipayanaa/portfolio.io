$(window).on('load',function(){
    $('.fa-bars').click(function(){
        $('.navbar').toggleClass('active');
    })

    $('.fa-moon').click(function(){
        $('body').toggleClass('dark');
    })

    $('.depan .container a').click(function(){
        $('.depan').toggleClass('geser');
    })

    $('.home .tulisan').addClass('k1')
    $('.home .gambar').addClass('k2')

    $('.panah').click(function(){
        $('.hilang').toggleClass('haha');

        $('.fa-chevron-right').toggleClass('fa-chevron-left')
        $('.fa-chevron-left').toggleClass('fa-chevron-right')
        
    })
})

const typed = new Typed(".typing",{
    strings : ["Web Developers","Freelancer","Mobile App","Web Desainer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


$(window).scroll(function(){
    const scroll = $(this).scrollTop();

    if( scroll > $('.about').offset().top -250){
        $('.about .bungkus').each(function(i){
            setTimeout(function(){
                $('.about .bungkus').eq(i).addClass('go');
            },500 * (i+1));
        });
    }
})


$(window).scroll(function(){
    const scroll = $(this).scrollTop();

    if(scroll > $('.about .container').offset().top -300){
        $('.about .container h1').addClass('k3');
    }

    if(scroll > $('.about .container').offset().top -300){
        $('.about .container p').addClass('k4');
    }

    if(scroll > $('.skill .container').offset().top -300){
        $('.skill .container h1').addClass('k5');
    }


    if(scroll > $('.skill .container').offset().top -200){
        $('.skill .container p').addClass('k6');
    }

    if(scroll > $('.program .container').offset().top -200){
        $('.program .container h1').addClass('k7');
    }

    if(scroll > $('.late .container').offset().top -300){
        $('.late .container h1').addClass('k8');
    }

    if(scroll > $('.late .container').offset().top -250){
        $('.late .container .card').each(function(i){
            setTimeout(function(){
                $('.late .container .card').eq(i).addClass('k9')
            },500 * (i+1));
        })
    }

    
    if(scroll > $('.cres .container').offset().top -350){
        $('.cres .container .features').each(function(i){
            setTimeout(function(){
                $('.cres .container .features').eq(i).addClass('k10')
            },500 * (i+1));
        })
    }

    if(scroll > $('.virus .container').offset().top -350){
        $('.virus .container p').each(function(i){
            setTimeout(function(){
                $('.virus .container p').eq(i).addClass('k11')
            },500 * (i+1));
        })
    }


    if(scroll > $('.komentar .container').offset().top -300){
        $('.komentar .container .jdl').addClass('k12');
    }

    if(scroll > $('.komentar .container').offset().top -300){
        $('.komentar .container .amplop').addClass('k13');
    }

    
    if(scroll > $('.box-input').offset().top -60){
        $('.footer .container .maju').each(function(i){
            setTimeout(function(){
                $('.footer .container .maju').eq(i).addClass('k14')
            },500 * (i+1));
        })
    }


})


const swiper = new Swiper(".newswiper", {
    spaceBetween:24,
    loop: 'true',
    slidesPerView: 'auto',
    centerdSlides : true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    breakpoints:{
        992: {
            spaceBetween:50,
        }
    }
  });
