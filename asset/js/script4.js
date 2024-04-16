function generarMatriz() {
    const filas = parseInt(document.getElementById('filas').value);
    const columnas = parseInt(document.getElementById('columnas').value);
  
    const matrizOriginal = document.getElementById('tablaOriginal');
    const matrizReorganizada = document.getElementById('tablaReorganizada');
  
    matrizOriginal.innerHTML = '';
    matrizReorganizada.innerHTML = '';
  

    for (let i = 0; i < filas; i++) {
      let fila = document.createElement('tr');
      for (let j = 0; j < columnas; j++) {
        let celda = document.createElement('td');
        let valor = prompt(`Ingrese el valor para la celda (${i + 1},${j + 1}):`);
        celda.textContent = valor;
        fila.appendChild(celda);
      }
      matrizOriginal.appendChild(fila);
    }
  
    //reorganizar

    //columnas
    for (let i = 0; i < filas; i++) {
      let fila = document.createElement('tr');
      for (let j = columnas - 1; j >= 0; j--) {
        let celda = document.createElement('td');
        celda.textContent = matrizOriginal.rows[i].cells[j].textContent;
        fila.appendChild(celda);
      }
      matrizReorganizada.appendChild(fila);
    }
  
    // filas
    for (let i = filas - 1; i >= 0; i--) {
      let fila = document.createElement('tr');
      for (let j = 0; j < columnas; j++) {
        let celda = document.createElement('td');
        celda.textContent = matrizOriginal.rows[i].cells[j].textContent;
        fila.appendChild(celda);
      }
      matrizReorganizada.appendChild(fila);
    }
  }
  