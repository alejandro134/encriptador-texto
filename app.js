document.getElementById("input-text").addEventListener("input", function() {
    this.value = cleanText(this.value);
    document.getElementById("output-text").value = ""; // Limpia el campo de salida
    autoResize(this);
});

document.getElementById("output-text").addEventListener("input", function() {
    autoResize(this);
});

// Función para encriptar el texto
function encryptText() {
    const text = document.getElementById("input-text").value;
    const encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = encryptedText;
    autoResize(document.getElementById("output-text"));
}

// Función para desencriptar el texto
function decryptText() {
    const text = document.getElementById("input-text").value;
    const decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = decryptedText;
    document.getElementById("input-text").value = ""; // Limpia el primer input
    autoResize(document.getElementById("output-text"));
}

// Función para copiar el texto
function copyText() {
    const outputText = document.getElementById("output-text");
    const inputText = document.getElementById("input-text");
    inputText.value = outputText.value; // Copia el texto encriptado al primer input
    outputText.value = ""; // Limpia el segundo input
    inputText.select();
    document.execCommand("copy");
    autoResize(inputText);
}

// Función para limpiar el texto
function cleanText(text) {
    // Convertir a minúsculas
    text = text.toLowerCase();

    // Reemplazar caracteres con acentos
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Eliminar caracteres especiales
    text = text.replace(/[^a-z\s]/g, "");

    return text;
}

// Función para ajustar el tamaño del textarea
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}
