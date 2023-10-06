/**
* Fungsi untuk memuat Disqus
*/
var disqus_config = function () {
    this.page.url = 'https://kii11.github.io/kontak.html';  // URL halaman kontak Anda
    this.page.identifier = 'kontak-html'; // Identifikasi unik halaman kontak Anda
};

(function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://https-kii11-github-io-kontak-html.disqus.com/embed.js'; // Shortname Disqus Anda adalah "https-kii11-github-io-kontak-html"
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
