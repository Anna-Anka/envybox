/* eslint-disable import/extensions */
/* eslint-disable spaced-comment */
/* eslint-disable import/no-relative-packages */


// * Подключение mixit up
import mixitup from 'mixitup';
if (document.querySelector('.cases__items')) {
    let mixer = mixitup('.cases__items', {
        load: { filter: '.category-shop' }
    });
}

// * Подключение плавного скролла
import { smoothScroll } from "./templates/smooth-scroll";
smoothScroll();

