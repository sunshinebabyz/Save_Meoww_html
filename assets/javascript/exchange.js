let treeArray = [
  {
    id: 1,
    name: "Poppy",
    src: "/assets/img/poppy.jpeg",
    desc: "Mèo ta, Nhị thể, Giới tính: cái",
    point: "Chưa ai đón",
  },
  {
    id: 2,
    name: "Una",
    src: "assets/img/una.jpeg",
    desc: "Mèo ta, Đen trắng, Giới tính: Cái",
    point: "Đã có nhà",
  },
  {
    id: 3,
    name: "Kina",
    src: "assets/img/kina.jpeg",
    desc: "Mèo Ta, Trắng vàng,Giới tính: Cái",
    point: "Đã có nhà",
  },
  {
    id: 4,
    name: "Felix",
    src: "assets/img/felix.jpeg",
    desc: "Mèo tây, Nâu, Giới tính: Đực",
    point: "Chưa ai đón",
  },
  {
    id: 5,
    name: "Mauice",
    src: "assets/img/maurice.jpeg",
    desc: "Mèo ta, Vàng 1, Giới tính: Đực",
    point: "Đã có nhà",
  },
  {
    id: 6,
    name: "Mika",
    src: "assets/img/mika.jpeg",
    desc: "Mèo ta, Nhị thể, Giới tính: Đực",
    point: "Chưa ai đón",
  },
  {
    id: 7,
    name: "Yumi",
    src: "assets/img/Yumi.jpeg",
    desc: "Mèo ta, Tam thể, Giới tính: Cái",
    point: "Chưa ai đón",
  },
  {
    id: 8,
    name: "Sapi",
    src: "assets/img/sapi.jpeg",
    desc: "Mèo ta, Nam thể, Giới tính: Cái",
    point: "Chưa ai đón",
  },

];

showT(treeArray);

function showT(curArray) {
  for (var i = 0; i < curArray.length; i++) {
    document.getElementById("list-tree").innerHTML += `
    <div class="col l-5 m-12 c-12">
        <div class="exchange__wrap-item">
            <div class="circle"></div>
            <div class="exchange__wrap-info">
                <h1>${curArray[i].name}</h1>
                <p>
                    ${curArray[i].desc}
                </p>
                <p><span>Tình trạng: </span>${curArray[i].point}</p>
                <button>Liên hệ nhận nuôi</button>
            </div>
            <img src="${curArray[i].src}" alt="" />
        </div>
    </div>
        `;
  }
}

function setItem() {
  var count = 0;
  for (let i = 1; i <= 30; i++) {
    var x = localStorage.getItem(i);
    if (x > 0) count += parseInt(x);
  }
  document.getElementById("exchange_sp").innerHTML = count;
}

setItem();
