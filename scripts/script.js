
const linkInput = document.getElementById('link');
const btn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-code");

btn.addEventListener("click", function () {
    qrContainer.innerHTML = ""; 

    const link = document.getElementById("link").value;

    // Generar QR (HD)
    new QRCode(qrContainer, {
        text: link,
        width: 1000,      
        height: 1000,
        correctLevel: QRCode.CorrectLevel.H  
    });
});

const qrCodeContainer = document.getElementById('qr-code');

//Instancia de QRCode
const qrCode = new QRCode(qrCodeContainer, {
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

//Evento va al botón
generateBtn.addEventListener('click', () => {
    const url = linkInput.value;
    if (url) {
        qrCode.makeCode(url);
    } else {
        alert("Por favor, ingresa tu enlace.");
    }
});
