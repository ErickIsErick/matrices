function calcular() {

    let valores = [];
    for (let i = 1; i <= 9; i++) {
        let input = document.getElementById('input' + i);
        valores.push(parseInt(input.value));
    }

    
    let sumaFilas = [];
    for (let i = 0; i < 9; i += 3) {
        sumaFilas.push(valores[i] + valores[i + 1] + valores[i + 2]);
    }

    
    let sumaColumnas = [];
    for (let i = 0; i < 3; i++) {
        sumaColumnas.push(valores[i] + valores[i + 3] + valores[i + 6]);
    }

    
    let sumaDiagonal1 = valores[0] + valores[4] + valores[8];
    let sumaDiagonal2 = valores[2] + valores[4] + valores[6];
 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Suma de la primera fila: ${sumaFilas[0]}</p>
        <p>Suma de la segunda fila: ${sumaFilas[1]}</p>
        <p>Suma de la tercera fila: ${sumaFilas[2]}</p>
        <p>Suma de la primera columna: ${sumaColumnas[0]}</p>
        <p>Suma de la segunda columna: ${sumaColumnas[1]}</p>
        <p>Suma de la tercera columna: ${sumaColumnas[2]}</p>
        <p>Suma de la diagonal principal: ${sumaDiagonal1}</p>
        <p>Suma de la diagonal secundaria: ${sumaDiagonal2}</p>
    `;
}
