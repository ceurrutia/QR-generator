const linkInput = document.getElementById('link');
const btn = document.getElementById("generate-btn");
const qrContainer = document.getElementById("qr-code");
const downloadBtn = document.getElementById("download-btn");

let qr;

btn.addEventListener("click", function () {

    const link = linkInput.value.trim();

    //valida que no genera nada si está vacío
    if (!link) {
        alert("Por favor, ingresa un enlace antes de generar el QR.");
        qrContainer.innerHTML = "";
        downloadBtn.style.display = "none";
        return;
    }

    //limpio QR previo
    qrContainer.innerHTML = "";

    //QR en HD
    qr = new QRCode(qrContainer, {
        text: link,
        width: 1000,
        height: 1000,
        correctLevel: QRCode.CorrectLevel.H
    });

    //btn descarga
    downloadBtn.style.display = "inline-block";
});


//descarga del qr
downloadBtn.addEventListener("click", function () {

    const img = qrContainer.querySelector("img") || qrContainer.querySelector("canvas");

    if (!img) {
        alert("Genera primero un código QR.");
        return;
    }

    let imgSrc = img.src ? img.src : img.toDataURL("image/png");

    //obtieneURL la url ngresada y sanitiza
    let fileName = linkInput.value.trim()
        .replace(/(^\w+:|^)\/\//, '')     //chau http o https
        .replace(/[^a-zA-Z0-9-_]/g, '_'); //regex que reemplaza caracteres inválidos por "_"

    if (!fileName) fileName = "codigo_qr";

    //descargar de .png
    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = `${fileName}.png`;
    link.click();
});
