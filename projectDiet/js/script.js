import tabs from './modules/tabs';
import modal, {openModal} from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import forms  from './modules/forms';
import cards  from './modules/cards';
import calc  from './modules/calc';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(()=>openModal('.modal',modalTimerId), 1000000)
    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modal('[data-modal]','.modal',modalTimerId);
    timer('.timer','2022-09-30');
    slider({
        container:'.offer__slider',
        nextArrow:'.offer__slider-next',
        prevArrow:'.offer__slider-prev',
        wrapper:'.offer__slider-wrapper',
        slide:'.offer__slide',
        totalCounter:'#total',
        currentCounter:'#current',
        field:'.offer__slider-inner'
    });
    forms('form',modalTimerId);
    cards();
    calc();


    //в следующих уроках запускать и json-server и локал
    //json-server db.json
    //конец функции window.addEventListener
})