import '../_libs'

export const productCardSlider = () => {
    if (document.querySelector('.product-card__swiper')) {

        const allSwipers = document.querySelectorAll('.product-card__swiper');
        allSwipers.forEach(swiper => {
            const productCardSwiper = new Swiper('.product-card__swiper', {
                loop: true,
                speed: 800,
                slidesPerGroup: 1,
                centeredSlides: true,

                pagination: {
                    el: swiper.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            });
        })
    }
};
