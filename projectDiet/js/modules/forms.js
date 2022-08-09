import{closeModal,openModal} from "./modal";
import {postData} from "../services/services";


function forms(formSelector, modalTimerId) {
    //Forms
    const forms = document.querySelectorAll(formSelector);

    const message = {           //небольшое хранилищие сообщений которые мы хотим показать пользователю
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...'
    }

    forms.forEach(item => {
        bindPostData(item)
    })
    // в будущем можно передать аргументы, которые влияют на заголовки
    //async перед фцией, await перед операцией которую необходимо дождаться, они всегда в паре
    // await говорит - нам нужно дождаться результата, неважно какой будет. Но, нужно дождаться
    //await ждёт столько сколько установлено по стандарту ( мб около 30 сек)



    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();// команда должна быть в начале AJAX запросов, чтобы не было казусов с перезагрузкой стр

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading
            statusMessage.style.cssText = `
            display:block;
            margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage)

            statusMessage.textContent = message.success

            const formData = new FormData(form);
            // у inputов в вертске всегда должен быть name например name='name'  или name='phone'

            // const object={};
            // formData.forEach(function (value,key) {
            //     object[key]=value;
            // });  далее будет более современный метод
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            //берёт формдейту,которая собрала все данные с формы и превращаем в массив массивов , далее превращаем в классический обьект, и далее в формат JSON

            // //метод stringify превращает обычный обьект в JSON  ```JSON.stringify```
            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    form.reset();//альтернативный вариант- перебрать и очистить инпуты
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(message.failure)
            }).finally(() => {
                form.reset();
            })


        });
    } // конец фции bindPostData

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal',modalTimerId)

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
        </div>  
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show')
            prevModalDialog.classList.remove('hide')
            closeModal('.modal');
        }, 4000)
    }


    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;