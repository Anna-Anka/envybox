import '../_libs'

export const quizzesSlider = () => {
    if (document.querySelector('.quizzes__swiper')) {
        return new Swiper('.quizzes__swiper', {
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
