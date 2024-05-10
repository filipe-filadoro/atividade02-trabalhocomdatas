function maiorData(data1, data2) {
    if (data1 > data2) {
        return data1;
    } 
    else{
        return data2;
    }
}


function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        throw new Error('A primeira data deve ser mais antiga que a segunda data.');
    }

    const intervaloMs = dataNova.getTime() - dataAntiga.getTime();
    const intervaloDias = Math.floor(intervaloMs / (1000 * 60 * 60 * 24));
    return intervaloDias;
}


function dataAtualFormatada() {
    const agora = new Date();
    const hora = agora.getHours().toString().padStart(2, '0');
    const minuto = agora.getMinutes().toString().padStart(2, '0');
    const dia = agora.getDate().toString().padStart(2, '0');
    const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); 
    const ano = agora.getFullYear();

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

let data1 = new Date(1998, 3, 28); // Meu aniversario 
let data2 = new Date(2024, 5, 9); // Dia Atual

console.log("Maior data:", maiorData(data1, data2));
console.log("Intervalo de dias:", calcularIntervalo(data1, data2));
console.log("Data atual formatada:", dataAtualFormatada());