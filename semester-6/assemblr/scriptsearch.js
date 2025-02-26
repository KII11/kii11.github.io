function search() {
    var searchInput = document.getElementById("search-input").value.toLowerCase();

    var pages = [
        "berandamtk.html",
        "debit.html",
        "disqus1.html",
        "evaluasi.html",
        "kecepatan.html",
        "kesimpulan.html",
        "kuisdebit.html",
        "kuiskecepatan.html",
        "lkpd.html",
        "materi.html",
        "referensi.html",
        "tentangkami.html",
        "tujuanpembelajaran.html"
    ];

    var foundPage = pages.find(function (page) {
        return page.toLowerCase().includes(searchInput);
    });

    if (foundPage) {
        window.location.href = foundPage;
    } else {
        alert("Halaman tidak ditemukan");
    }
}
