'use strict'

let table=document.querySelector('#field'),
    col,
    row,
    colors=['red','green','blue']

let random
for(let i=1;i<=3;i++){
    row=document.createElement('tr')
    row.classList.add(`tr${i}`)
    for(let j=1;j<=3;j++){
        getRandomColor()
        col=document.createElement('td')
        col.classList.add(`td${j}`)
        col.classList.add(`${colors[random]}`)

        row.appendChild(col)

    }
    table.appendChild(row)

}

function getRandomColor() {
    random=Math.floor(Math.random()*3)
    // randomColor=`colors[${random}]`
    //рандом колор не пригодился, используем просто вывод рандом цифры
    return random
}
let rows=document.querySelectorAll('#field tr')
let cols=document.querySelectorAll('#field td')

let winRes
let winResults=[]
let countWin
for(let col of cols){

    col.addEventListener('click',function () {

        if(col.classList.contains('red')){
            col.classList.remove('red')
            col.classList.add('green')
        }
        else if(col.classList.contains('green')){
            col.classList.remove('green')
            col.classList.add('blue')
        }
        else if(col.classList.contains('blue')){
            col.classList.remove('blue')
            col.classList.add('red')
    }


    //     for(let i=0;i<cols.length;i++){
    //
    //         winResults.push(cols[i].classList)
    //
    //     }
    //     console.log(winResults)
     })
}

