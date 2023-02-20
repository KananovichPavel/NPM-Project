
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,


    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

export default swiper;