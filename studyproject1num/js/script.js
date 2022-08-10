'use strict'
const secretNumber=Math.trunc(Math.random()*20)+1
let scoreState=20;
let highscore=0;
//будем получать целое число между 1 и 20  Транк отбросил десятичные будет(0.1 , 0.2, а +1 добавлен чтобы не было нуля, иначе будет от


console.log(`Секретное число : ${secretNumber}`)
document.querySelector('.check').addEventListener('click',()=>{
    let guessingNumber= +document.querySelector('.number-input').value

    console.log(guessingNumber)

    if(!guessingNumber){
       document.querySelector('.guess-message').textContent='Введите число =)'

    }else if(guessingNumber===secretNumber){
        document.querySelector('.guess-message').textContent='Правильно!!! =)'
        document.querySelector('body').style.backgroundColor='rgb(9,250,21)';
        document.querySelector('.question').style.width='156rem'
        document.querySelector('.question').style.height='8rem'
        document.querySelector('.question').style.color='rgb(9,250,21'
        document.querySelector('.question').textContent=`    Это              Победа!))`
        document.querySelector('.questionHeader').textContent='   Ты молодец! =)'

        if(scoreState>highscore){
            highscore=scoreState;
            document.querySelector('.highscore').textContent=highscore

        }


    }else if(guessingNumber>secretNumber){
        if(scoreState>1) {
        document.querySelector('.guess-message').textContent='Твоё Число больше! =)'
        scoreState-=1;
        //score--
        document.querySelector('.score').textContent=scoreState
        }else{
            document.querySelector('.guess-message').textContent='Игра окончена, попробуй еще =)'
            document.querySelector('.score').textContent=0;
        }

    }else if(guessingNumber<secretNumber) {
        if(scoreState>1){
        document.querySelector('.guess-message').textContent='Твоё число меньше! =)'
        scoreState--;
        //score-=1;
        document.querySelector('.score').textContent=scoreState
        }else{
            document.querySelector('.guess-message').textContent='Игра окончена, попробуй еще =)'
            document.querySelector('.score').textContent=0;
        }
        }

})




//реазилуем кнопку - Сначала!
document.querySelector('.again').addEventListener('click',()=>{

    const secretNumber=Math.trunc(Math.random()*20)+1
    scoreState=20;
    document.querySelector('.guess-message').textContent='Начни угадывать =)'
    document.querySelector('.score').textContent=scoreState
    document.querySelector('.question').style.width='25rem'
    document.querySelector('.question').style.height=''
    document.querySelector('.question').textContent='???'
    document.querySelector('.questionHeader').textContent='Угадай Число!)'
    document.querySelector('body').style.backgroundColor='rgb(0, 0, 0)';
    let guessingNumber =0
    document.querySelector('.question').style.color='#000'
    document.querySelector('.number-input').value=''
})





















//(е) event heandler обработчик событий

// document.querySelector('.guess-message').textContent='Правильно!'
// document.querySelector('.question').textContent='???'
// document.querySelector('.score').textContent='332'
// document.querySelector('.number-input').value=0
// // и инпутов получаем и присваиваем через value


