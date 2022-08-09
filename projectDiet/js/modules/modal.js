//modal
function closeModal(modalSelector) {
    const modal=document.querySelector(modalSelector)

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''
}

function openModal(modalSelector,modalTimerId) {
    const modal=document.querySelector(modalSelector)

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if(modalTimerId){
        clearInterval(modalTimerId);
    }
}




function modal(triggerSelector,modalSelector,modalTimerId) {

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);



    // modal.classList.toggle('hide')
    modalTrigger.forEach(btn => {
        btn.addEventListener('click',()=> openModal(modalSelector,modalTimerId));
    });
   //чтобы обойти ограничения фции openModal и не вызывать её сразу,потому что там скобки с аргументов, а когда нам нужно- сделаем стрелочную фцию

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    });



    //скрипт по которому выскакивает окно с модельныа окном через определенный таймаут

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector,modalTimerId);
            window.removeEventListener('scroll', showModalByScroll)

        }
    }

    window.addEventListener('scroll', showModalByScroll)
    //был замечен баг, в связи с этим отнимаем 1 пиксель, скорее всего из за технических ограничений браузеров и мониторов


}

export default modal;
export {closeModal};
export {openModal};