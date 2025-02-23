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

// Revelar mensaje con animación
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

// Función para revelar mensaje con iframes
function revealMessageWithIframes(text) {
    const surprise = document.getElementById("surprise");
    surprise.innerHTML = ""; // Limpiar contenido previo
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            surprise.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        } else {
            // Agregar los iframes después del texto
            const iframe1 = document.createElement("iframe");
            iframe1.src = "https://mosaically.com/embed/ea9974f8-f672-47bb-bf6d-40a056e38ade";
            iframe1.scrolling = "no";
            iframe1.width = "100%";
            iframe1.height = "480";
            iframe1.frameBorder = "0";
            iframe1.allowFullscreen = true;
            iframe1.style.marginTop = "10px";

            const iframe2 = document.createElement("iframe");
            iframe2.src = "https://mosaically.com/embed/78cb4806-db55-466e-933c-2462d40762e0";
            iframe2.scrolling = "no";
            iframe2.width = "100%";
            iframe2.height = "480";
            iframe2.frameBorder = "0";
            iframe2.allowFullscreen = true;
            iframe2.style.marginTop = "10px";

            // Texto de créditos
            const creditText1 = document.createElement("small");
            creditText1.innerHTML = 'Creado con mucho cariño para ti preciosa ❤️ ';

            const creditText2 = document.createElement("small");
            creditText2.innerHTML = 'Creado con mucho cariño para ti preciosa ❤️  ';

            // Agregar iframes y créditos al div
            surprise.appendChild(document.createElement("br"));
            surprise.appendChild(iframe1);
            surprise.appendChild(document.createElement("br"));
            surprise.appendChild(creditText1);
            surprise.appendChild(document.createElement("br"));
            surprise.appendChild(iframe2);
            surprise.appendChild(document.createElement("br"));
            surprise.appendChild(creditText2);
        }
    }

    typeWriter();
}
