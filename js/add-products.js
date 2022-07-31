const formAddProduct = document.forms["form-add-product"];
const inpName = document.querySelector("form input[name='name']");
const inpPrice = document.querySelector("form input[name='price']");
const inpCategory = document.querySelector("form select[name='category']");
const inpDescription = document.querySelector("form textarea[name='description']");
const inpImage = document.querySelector("form input[name='image']");
let validName = false,
  validPrice = false,
  validCatgory = true,
  validDescription = false,
  validImage = false;
function setError(elem, msg = "") {
  elem.classList.remove("is-valid");
  elem.classList.add("is-invalid");
  try {
    elem.nextElementSibling.innerHTML = msg;
  } catch (error) {}
}
inpName.oninput = function () {
  const value = this.value.trim();
  validName = false;
  if (value.length < 6) return setError(this, "min. 5 karakter");
  validName = true;
  this.classList.remove("is-invalid");
  this.classList.add("is-valid");
};
inpPrice.oninput = function () {
  const value = this.value.trim();
  validPrice = false;
  if (value < 1000) return setError(this, "min. 1000 rupiah");
  validPrice = true;
  this.classList.remove("is-invalid");
  this.classList.add("is-valid");
};
inpCategory.onchange = function () {
  validCatgory = false;
  this.classList.add("is-valid");
  validCatgory = true;
};
inpDescription.oninput = function () {
  const value = this.value.trim();
  validDescription = false;
  if (value.length < 10) return setError(this, "min. 5 karakter");
  validDescription = true;
  this.classList.remove("is-invalid");
  this.classList.add("is-valid");
};
inpImage.onchange = function () {
  validImage = false;
  const file = this.files[0];
  console.log(file.size);
  if (!(file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) return setError(this, "*Please choose .jpg/.png/.jpeg file!");
  if (file.size > 1048576) return setError(this, "*File size must less than 1MB!");
  validImage = true;
  this.classList.remove("is-invalid");
  this.classList.add("is-valid");
};

formAddProduct.onsubmit = function () {
  if (!(validName && validImage && validPrice && validCatgory && validDescription)) {
    swal({
      icon: "error",
      title: "Gagal!",
      text: "Pastikan anda mengisi form dengan benar.",
    });
    return false;
  }
  swal({
    icon: "success",
    title: "Berhasil!",
    text: "Produk berhasil diposting.",
  });
  return false;
};
