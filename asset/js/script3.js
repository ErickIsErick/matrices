function calcular() {

    let matrizA = [];
    let matrizB = [];

    for (let i = 1; i <= 3; i++) {
        matrizA.push([]);
        matrizB.push([]);
        for (let j = 1; j <= 3; j++) {
            let inputA = document.getElementById('inputA' + i + j);
            let inputB = document.getElementById('inputB' + i + j);
            matrizA[i - 1][j - 1] = parseInt(inputA.value);
            matrizB[i - 1][j - 1] = parseInt(inputB.value);
        }
    }

   //Fila por columna
    let resultado = [];
    for (let i = 0; i < 3; i++) {
        resultado.push([]);
        for (let j = 0; j < 3; j++) {
            resultado[i][j] = 0;
            for (let k = 0; k < 3; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    let tabla = document.createElement('table');
    for (let i = 0; i < 3; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let celda = document.createElement('td');
            celda.textContent = resultado[i][j];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    resultadoDiv.appendChild(tabla);
}
