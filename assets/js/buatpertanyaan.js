const formPertanyaan = document.getElementById("form-pertanyaan");
const judulPertanyaan = document.getElementById("judul-pertanyaan");
const deskripsi = document.getElementById("deskripsi");

formPertanyaan.addEventListener("submit", (e) => {
  e.preventDefault();
});

$("#tambah-tags").tagsInput({
  // Validation
  minChars: 3,
  limit: 10,
  unique: true,

  // Auto Completion
  autocomplete: {
    source: ["Hukum Pelayaran", "Hukum", "Ilmu Pengetahuan"],
  },
});
