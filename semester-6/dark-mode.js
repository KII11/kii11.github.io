const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const body = document.body;

// Cek mode gelap pada local storage saat halaman dimuat
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Fungsi untuk mengaktifkan atau menonaktifkan mode gelap
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  const enableDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', enableDarkMode ? 'enabled' : 'disabled');

  // Ganti gambar ikon berdasarkan mode
  if (enableDarkMode) {
    darkModeIcon.src = 'mode-gelap.png'; // Ganti dengan gambar ikon mode gelap
  } else {
    darkModeIcon.src = 'mode-terang.png'; // Ganti dengan gambar ikon mode terang
  }
}

// Setel tampilan awal berdasarkan mode gelap yang disimpan di local storage
if (isDarkMode) {
  body.classList.add('dark-mode');
  darkModeIcon.src = 'mode-gelap.png'; // Ganti dengan gambar ikon mode gelap
} else {
  darkModeIcon.src = 'mode-terang.png'; // Ganti dengan gambar ikon mode terang
}

// Tambahkan event listener untuk tombol mode gelap
darkModeToggle.addEventListener('click', toggleDarkMode);
