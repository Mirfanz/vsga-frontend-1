const swiper1 = new Swiper(".swiper-category", {
  slidesPerView: "auto",
  spaceBetween: 5,
  freeMode: true,
});
const productsContainer = document.querySelector(".products");
const btnShowMore = document.querySelector(".btn-show-more");
let lastIndex = 0;
function getProducts() {
  btnShowMore.disabled = true;
  if (lastIndex >= 100)
    return swal({
      title: "Tidak Ditemukan!",
      text: "Semua produk telah ditampilkan.",
      icon: "warning",
    });
  for (i = 0; i < 20; i++) {
    const price = Math.round(Math.random() * 99 + 1);
    const views = Math.floor(Math.random() * 1000);
    const likes = Math.floor(Math.random() * views);
    const a = document.createElement("a");
    a.classList.add("product");
    a.href = "detail.html";
    a.innerHTML;
    a.innerHTML = `
            <img class="product-image" src="assets/img/albert einstein.jpg" loading="lazy" alt="Image Produk" />
            <div class="product-body">
              <h5 class="product-title text-truncate mb-0">Nama Produk Harusnya Tampil Disini</h5>
              <div class="d-flex justify-content-between">
                <div class="product-price">Rp.${price}.000</div>
                <div class="product-star">
                  <i class="far fa-heart"></i> <span>${likes}</span>
                </div>
              </div>
            </div>
          `;
    productsContainer.appendChild(a);
  }
  lastIndex += 20;
  btnShowMore.disabled = false;
}

// getProduct();
// btnShowMore.onclick = getProducts;

getProducts();
btnShowMore.onclick = (e) => {
  getProducts();
};

