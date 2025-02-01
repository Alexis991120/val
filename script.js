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
function revealMessage(text, imageUrl = null) {
    const surprise = document.getElementById("surprise");
    surprise.innerHTML = ""; // Limpiar contenido previo
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            surprise.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else if (imageUrl) {
            // Si hay una imagen, agregarla después del texto
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Sorpresa para ti ❤️";
            img.style.maxWidth = "100%";
            img.style.marginTop = "10px";
            img.style.borderRadius = "10px";
            surprise.appendChild(img);
        }
    }

    typeWriter();
}
