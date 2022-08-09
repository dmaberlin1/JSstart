import {getResource} from "../services/services";


function cards() {
// используем классы для карточек
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH()  //вызвали в классе обменник и перегнали прайс в гривну, и сразу можно вызывать прайс,уже в гривне
        }

        //методы записываеться без function и без ;
        changeToUAH() {
            this.price = +this.price * this.transfer; //мы прогнали цену через обменник и выдали в новом формате
            //защита от дурака добавили переж прайс + чтобы преобразовать в число, если указана строка
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
                 <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
`;
            this.parent.append(element)
        }
    }

    // const div=new MenuCard();
    // div.render()  способ сократить указан ниже


    getResource('http://localhost:3000/menu')
        .then(data=>{
            data.forEach(({img,altimg,title,descr,price})=>{
               new MenuCard(img,altimg,title,descr,price,'.menu .container').render();
               //obj.img,obj.altimg,obj.title,obj.descr,obj.price
            });
        })

    // //способ с использованием сторонней библиотеки
    // axios.get('http://localhost:3000/menu')
    //     .then(data => {
    //         data.data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });


    //второй вариант без использования Классов,чаще применяется если надо построить 1 раз
    // getResource('http://localhost:3000/menu')
    //     .then(data=>createCard(data));
    //
    // function createCard(data){
    //     data.forEach(({img,altimg,title,descr,price})=>{
    //         const element=document.createElement('div');
    //         element.classList.add('menu__item');
    //
    //         element.innerHTML=`
    //         <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector('.menu .container').append(element)
    //     })
    // }

}

export default cards;