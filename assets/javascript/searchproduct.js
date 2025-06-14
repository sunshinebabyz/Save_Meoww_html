let filterArray = [];
let galleryArray = [
  {
    id: 1,
    name: "Thức ăn hạt",
    src: "assets/img/thuc-an-cho-meo-royal-canin-indoor.webp",
    desc: "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor",
    price: 132.000,
  },
  {
    id: 2,
    name: "Thức ăn hạt",
    src: "assets/img/thuc-an-cho-meo-con-royal-canin-kitten-36_785x.webp",
    desc: "Thức Ăn Hạt Cho Mèo Con Royal <h6 class=",
    price: 127.000,
  },
  {
    id: 3,
    name: "Thức ăn hạt",
    src: "assets/img/SnappyTom1.5kg_1066x.webp",
    desc: "Hạt Cho Mèo Snappy Tom Mix Cá Sấy",
    price: 70.000,
  },
  {
    id: 4,
    name: "Thức ăn ướt",
    src: "assets/img/pate-meo-wanpy.webp",
    desc: "Pate Mèo Wanpy Súp Thịt Tươi 80g",
    price: 11.000,
  },
  {
    id: 5,
    name: "Thức ăn ướt",
    src: "assets/img/pate-meo-ciao-goi-60g_3.webp",
    desc: "Pate Mèo Ciao 6 Vị Thơm Ngon 60g",
    price: 70.000,
  },
  {
    id: 6,
    name: "Thức ăn ướt",
    src: "assets/img/pate-meo-nekko-jelly-70g.webp",
    desc: "Pate Mèo Dạng Thạch Nekko Jelly 70g",
    price: 20.000,
  },
  {
    id: 7,
    name: "Thức ăn điều trị bệnh",
    src: "assets/img/thuc-an-cho-meo-royal-canin-indoor.webp",
    desc: "Thức Ăn Hạt Cho Mèo Sỏi Thận Royal Canin Urinary S/O",
    price: 169.000,
  },
  {
    id: 8,
    name: "Bánh thưởng mèo",
    src: "assets/img/co-meo-catnip-cho-meo.jpg",
    desc: "Cỏ Mèo Bạc Hà Catnip Cho Mèo",
    price: 25.000,
  },
];

showGallery(galleryArray);

function showGallery(curArray) {
  document.getElementById("product").innerText = "";

  for (var i = 0; i < curArray.length; i++) {
    document.getElementById("product").innerHTML += `
        <div class="col l-4 m-6 c-12">
            <div class="category__item">
                <div class="category__item-img">
                    <img
                        src="${curArray[i].src}"
                        alt=""
                    />
                </div>
                <div class="category__item-info">
                    <h2>${curArray[i].name}</h2>
                    <p>
                        ${curArray[i].desc}
                    </p>
                    <div class="category__item-interact">
                        <p>${curArray[i].price}.000đ</p>
                        <div class = "category__item-icon">
                            <i class="fa-regular fa-heart"></i>
                            <i id="id_${curArray[i].id}" class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}

document.getElementById("search__input").addEventListener("keyup", function () {
  let text = document.getElementById("search__input").value;

  filterArray = galleryArray.filter(function (a) {
    if (a.name.toLowerCase().includes(text.toLowerCase())) {
      return a;
    }
  });

  if (this.value == "") {
    showGallery(galleryArray);
  } else {
    if (filterArray == "") {
      document.getElementById("notice__product").style.display = "block";
      document.getElementById("product").innerHTML = "";
    } else {
      showGallery(filterArray);
      document.getElementById("notice__product").style.display = "none";
    }
  }
});

function setItem() {
  var count = 0;
  for (let i = 1; i <= 30; i++) {
    var x = localStorage.getItem(i);
    if (x > 0) count += parseInt(x);
  }
  document.getElementById("product_sp").innerHTML = count;
}

setItem();

galleryArray.forEach((value) => {
  document.getElementById(`id_${value.id}`).onclick = () => {
    var count = localStorage.getItem(value.id);
    count === null ? (count = 1) : count++;
    localStorage.setItem(value.id, count);
    alert("Đã thêm sản phẩm vào thanh toán");
    var x = document.getElementById("product_sp").innerHTML;
    document.getElementById("product_sp").innerHTML = parseInt(x) + 1;
  };
});
