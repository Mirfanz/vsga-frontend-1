const productContainer = document.querySelector(".table-products tbody");
const btnShowMore = document.querySelector(".btn-show-more");
const modalDetail = new bootstrap.Modal("#modalDetailProduct");
let lastIndex = 0;
function getProduct() {
  btnShowMore.disabled = true;
  if (lastIndex >= 100)
    return swal({
      title: "Tidak Ditemukan!",
      text: "Semua produk telah ditampilkan.",
      icon: "warning",
    });
  for (i = lastIndex + 1; i <= lastIndex + 20; i++) {
    const elem = document.createElement("tr");
    elem.onclick = showDetail;
    const price = Math.round(Math.random() * 99 + 1);
    const views = Math.floor(Math.random() * 1000);
    const likes = Math.floor(Math.random() * views);
    elem.innerHTML = `
      <th class="product-index">${i}</th>
      <td class="product-image"><img src="assets/img/albert einstein.jpg" alt="" /></td>
      <td class="product-name">Nama Barang Harusnya Tampil Disini</td>
      <td class="product-price">Rp.${price}.000</td>
      <td class="product-views">${views}</td>
      <td class="product-likes">${likes}</td>
    `;
    productContainer.appendChild(elem);
  }
  lastIndex += 20;
  btnShowMore.disabled = false;
}

// modalDetail.show();
function showDetail() {
  modalDetail.show();
}
getProduct();
btnShowMore.onclick = getProduct;


// 
const swiperProductDetail = new Swiper(".swiper-detail", {
  spaceBetween: 10,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide-next",
    prevEl: ".slide-prev",
  },
});