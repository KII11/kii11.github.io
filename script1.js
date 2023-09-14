// Ambil elemen tombol
const toggleButton = document.getElementById('toggle-button');
// Ambil elemen yang ingin diubah tampilannya
const hiddenElement = document.getElementById('hidden-element');

// Tambahkan event listener untuk tombol
toggleButton.addEventListener('click', function () {
  // Toggle kelas CSS yang mengatur tampilan elemen
  hiddenElement.classList.toggle('hidden');
});
