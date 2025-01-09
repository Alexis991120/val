// Animación de máquina de escribir
const typingElement = document.getElementById("typing");
const message = "Preciosa, esto es algo que hice con mucho cariño para ti ❤️";
let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingElement.textContent += message.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// Revelar mensaje al hacer clic
function revealMessage(text) {
    const surprise = document.getElementById("surprise");
    surprise.textContent = text;
    surprise.style.display = "block";
}
// Función de máquina de escribir para textos revelados
function revealMessage(text) {
    const surprise = document.getElementById("surprise");
    surprise.innerHTML = ""; // Limpiar contenido previo
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            // Añadir un carácter a la vez
            surprise.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
            index++;
            setTimeout(typeWriter, 50); // Velocidad de escritura
        }
    }

    typeWriter();
}
