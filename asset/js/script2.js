function calcular() {
 
    let matrizOriginal = [];
    for (let i = 0; i < 3; i++) {
        matrizOriginal.push([]);
        for (let j = 0; j < 3; j++) {
            let input = document.getElementById('input' + (i * 3 + j + 1));
            matrizOriginal[i][j] = parseInt(input.value);
        }
    }

    let matrizTranspuesta = [];
    for (let j = 0; j < 3; j++) {
        matrizTranspuesta.push([]);
        for (let i = 0; i < 3; i++) {
            matrizTranspuesta[j][i] = matrizOriginal[i][j];
        }
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h2>Matriz Transpuesta</h2>';
    let tabla = document.createElement('table');
    for (let i = 0; i < 3; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let celda = document.createElement('td');
            celda.textContent = matrizTranspuesta[i][j];
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    resultado.appendChild(tabla);
}
