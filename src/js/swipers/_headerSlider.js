import '../_libs'

export const headerSlider = () => {
    if (document.querySelector('.header__swiper')) {
        return new Swiper('.header__swiper', {
            loop: true, 
            speed: 800,
            slidesPerGroup: 1,
            centeredSlides: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
};
