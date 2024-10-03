function cekKhodam() {
    const name = document.getElementById("nameInput").value.trim();
    const resultMessage = document.getElementById("resultMessage");

    if (name === "") {
        resultMessage.innerHTML = "<span style='color: red;'>Masukkan nama Anda terlebih dahulu!</span>";
        return;
    }

    const khodams = [
        "Khodam Harimau",
        "Khodam Macan Putih",
        "Khodam Ular Emas",
        "Khodam Pendekar",
        "Khodam Bidadari",
        "Khodam Gagak Hitam"
    ];

    const hasKhodam = Math.random() < 0.5; 
    let result;

    if (hasKhodam) {
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        result = `Selamat ${name}, Anda memiliki ${khodam}!`;
    } else {
        result = `Maaf ${name}, Anda tidak memiliki khodam.`;
    }

    resultMessage.innerHTML = `<strong>${result}</strong>`;
}