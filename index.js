// Yüklenme Ekranı
const YuklemeEkrani = document.createElement('div');
YuklemeEkrani.id = 'YuklemeEkrani';
YuklemeEkrani.innerHTML = `<div class="daire"></div>`;
document.body.appendChild(YuklemeEkrani);
const baslangicZamani = Date.now();
const minSure = 500;
window.addEventListener('load', () => {
    const gizlePreloader = () => {
        YuklemeEkrani.style.opacity = '0';
        setTimeout(() => {
            YuklemeEkrani.remove();
        }, 250);
    };

    const gecikme = Math.max(minSure - (Date.now() - baslangicZamani), 0);
    setTimeout(gecikme ? () => { setTimeout(gizlePreloader, 0); } : gizlePreloader, gecikme);
});




// Arama
const input = document.getElementById("Placeholder");

function googleSearch() {
        const query = input.value.trim();
        if (query) {
                location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
        }
        else {
                alert("Lütfen Bir Kelime Veya Cümle Aratın !");
        }
}



// Enter Tuşuna Basınca Arama
input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
                googleSearch();
        }
});



// Siteden Çıkma
function SitedenCık() {
        window.close();
        setTimeout(() => {
                alert("Tarayıcı Otomatik Çıkmayı Desteklemiyor.");
        }, 250);
}