const val1 = document.getElementById('val1').value
const val2 = document.getElementById('val2').value
const resultado = document.getElementById('result')
const operador = document.getElementById('operador')
const calculadora = document.getElementById('container__button')
calculadora.addEventListener('click',e=>{
    switch(e.target.id){
        case 'add':operador.innerText='+'
            break;
        case 'min':operador.innerText='-'
            break;
        case 'mul':operador.innerText='*'
            break;
        case 'div':operador.innerText='/'
            break;
        case 'equal':
            switch(operador.innerText){
                    case '+':resultado.textContent=+document.getElementById('val1').value + +document.getElementById('val2').value
                    break;
                    case '-':resultado.textContent=+document.getElementById('val1').value - +document.getElementById('val2').value
                    break;
                    case '*':resultado.textContent=+document.getElementById('val1').value * +document.getElementById('val2').value
                    break;
                    case '/':resultado.textContent=+document.getElementById('val1').value / +document.getElementById('val2').value
                    break;
                }   
            break;
    }
})

// const resultado

