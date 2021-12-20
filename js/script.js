// A B R I R   M E N Ú   E N   M O V I L E S
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = ()=>{
    navbar.classList.remove('active');
}

// A B R I R   B A R R A   D E   B U S Q U E D A
let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    search.classList.add('active');
}

document.querySelector('#close-search').onclick = ()=>{
    search.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    //Hacer que el navbar que no tiene fondo al momento de bajar tenga u fondo de color.

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('.header').classList.remove('active');
        }
    };

// F U N C I O N E S   D E L   S L I D E
var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


// F U N C I O N E S   D E  L A   T I E N D A

var swiper = new Swiper(".contenedorProductos", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 2,
        },      
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

// F U N C I O N E S   D E   P L A N E S

var swiper = new Swiper(".box-container-planes", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 2,
        },      
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});

// F U N C I O N E S   D E   O P I N I O N E S

var swiper = new Swiper(".slide-referencias", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 2,
        },      
        768: {
        slidesPerView: 3,
        },
    },
});


// F U N C I O N E S   D E   P O S T S

var swiper = new Swiper(".blog-slide", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },      
        991: {
        slidesPerView: 3,
        },
        
    },
});


// F U N C I O N E S   D E   C O N V E N I O S

var swiper = new Swiper(".slide-convenios", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
        slidesPerView: 1,
        },
        640: {
        slidesPerView: 2,
        },      
        768: {
        slidesPerView: 3,
        },
        1024: {
        slidesPerView: 4,
        },
    },
});




