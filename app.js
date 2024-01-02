//Seleccionar btns de color
const btns = document.querySelectorAll(".btn");
const tipoClic = document.getElementById("idTipoFormatoColor");
const tipoColor = document.getElementById("idColor");
const color = document.getElementById("idBody");
const title = document.getElementById("idTitle");
let colorHex ;
let colorRgb ;


function cambiarColor(btn){
    //console.log(btn.target.innerText); 
    colorHex = getColorAleatorio();
    colorRgb = hexArgb(colorHex);
    cambiarPalabras(btn.target.innerText);

}

function cambiarPalabras(texto){
    if(texto.includes("HEX")){
        tipoClic.innerText = "HEXADECIMAL"
        tipoColor.innerText = colorHex;
    }else{
        tipoClic.innerText = "RGB"
        tipoColor.innerText = colorRgb;
    }
    color.style.backgroundColor = colorRgb;
}


// Función para generar un color aleatorio en formato Hexadecimal
function getColorAleatorio() {
    // Generar tres componentes de color RGB aleatorios
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convertir los componentes a formato Hexadecimal y devolver el color
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;;
}

// Función para convertir un color Hexadecimal a RGB
function hexArgb(colorHex) {
    // Extraer los componentes de color Hexadecimal
    const r = parseInt(colorHex.slice(1, 3), 16);
    const g = parseInt(colorHex.slice(3, 5), 16);
    const b = parseInt(colorHex.slice(5, 7), 16);

    // Devolver el color en formato RGB
    return `rgb(${r}, ${g}, ${b})`;
}

for (const btn of btns) {
    btn.addEventListener("click", cambiarColor);
}