const formPertanyaan = document.getElementById("form-pertanyaan");
const judulPertanyaan = document.getElementById("judul-pertanyaan");
const deskripsi = document.getElementById("deskripsi");

formPertanyaan.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(judulPertanyaan.value);
  console.log(deskripsi.value);
});

// Pilih Tags
const modalTambahTag = document.querySelector(".modal");
const tagDipilihContainer = document.querySelector(".tag-terpilih-container");

let tagDipilih = [];

modalTambahTag.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("tag")) {
    pilihTag(target);
    target.classList.toggle("tag-dipilih");
    console.log(tagDipilih);
  }

  if (e.target.id === "save-changes") {
    tambahTag();
    $("#tambah-tags").modal("hide");
  }
});

function pilihTag(target) {
  const isSameValue = tagDipilih.find((element) => element == target.textContent);

  if (isSameValue) {
    const filteredTag = tagDipilih.filter((element) => element !== isSameValue);
    tagDipilih = filteredTag;
  } else {
    tagDipilih.push(target.textContent);
  }
}

function tambahTag() {
  const tags = tagDipilih.map((tag) => `<span class="tag-terpilih">${tag}</span>`).join("");
  tagDipilihContainer.innerHTML = tags;
}
