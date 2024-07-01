// Fungsi debounce untuk mengurangi jumlah panggilan fungsi pencarian
function debounce(func, delay) {
    let timer;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Fungsi untuk melakukan pencarian di seluruh halaman HTML
function search() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    // Mengambil semua elemen pada halaman
    const elements = document.getElementsByTagName("*");
    let count = 0;

    // Iterasi melalui setiap elemen untuk mencari teks yang cocok
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.innerText.toLowerCase().includes(searchTerm) && count < 10) {
            // Menemukan teks yang cocok, tambahkan ke hasil pencarian
            const li = document.createElement("li");
            li.textContent = element.innerText;
            searchResults.appendChild(li);
            count++;
        }
    }
}

// Memanggil fungsi search dengan debounce
const debouncedSearch = debounce(search, 300);
document.getElementById("searchInput").addEventListener("input", debouncedSearch);
