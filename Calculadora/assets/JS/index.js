const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .btn igual ');

function insert( valor ){
    resultado.innerHTML += valor;
}


function clean() {
    resultado.innerHTML = ' ';
}


function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(saida.textContent != 'Erro') {
        document.getElementById("saida").innerHTML = eval(saida.innerHTML)
    }
}