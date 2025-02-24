//then은 메서드 함수!
// response는 json의 형태? => 그래서 response.json은 json이라는 메서드 함수를 이용했음

// select 안에 value와 카테고리가 같으면 해당 상품만 보이게,
// 클릭한 상품의 정보로 들어가게 만들고 싶은데?
const productInfo = "./db.json";
const ul = document.querySelector("ul");

//db.json
fetch(productInfo)
  // json Data 찾아오기
  .then((response) => response.json())
  .then((data) => {
    let idCounter = Date.now();
    // todolist가 다섯개가 있는데 3번째꺼를 지우고 싶다면 사용자가 todolist 값을 만드는 순가 id값을 각자 만들고 우리가 만든 db의 값과 비교할 수 있도록 만드는것?!
    // id 값을 생성할 준비를 시작?! => id값은 현 시간을 정의하는 함수를 통해 만들수 있는데..
    const products = {
      data: data.data.map((item) => ({
        ...item,
        // 아이템을 풀어헤쳐
        id: idCounter++,
      })),
      // map은 이 배열에 아이템값을 하나씩 찾아서 어떠한 행위를 해 그리고 실행후 다시 배열로 반환
    };
    // console.log(products);

    // 기존 json Data 제거함수
    const removeItems = () => {
      const items = document.querySelectorAll("li");
      items.forEach((item) => {
        item.remove();
      });
    };

    // 칮이온 json Data를 활용해서 원하는 DOM(뼈대) 생성
    const createItem = (product) => {
      // console.log(product);
      const li = document.createElement("li");
      const img = document.createElement("img");
      const attr = document.createAttribute("src");
      const div = document.createElement("div");
      const h3 = document.createElement("h3");
      const span = document.createElement("span");

      li.id = product.id;

      img.setAttributeNode(attr);
      attr.value = product.img;

      h3.className = "name";
      h3.innerText = product.name;

      const price = new Intl.NumberFormat("ko-kr", {
        style: "currency",
        currency: "KRW",
      }).format(product.price);
      //Intl.NumberFormat()

      span.className = "price";
      span.innerText = price;

      div.append(h3, span);
      li.append(img, div);
      ul.appendChild(li);

      li.addEventListener("click", () => {
        window.location.href = "product-detail.html";
        //window.location.href 원하는 주소로 보내준다?! 이것을 "페이지라우팅(페이지를 분기했다 쪼개서 관리했다)"이라 부른다
      });
    };

    // json Data 찾아온 후 DOM 생성 및 브라우저에 출력
    const importData = () => {
      products.data.map((product) => {
        createItem(product);
      });
    };

    importData();

    // 오름차순 정렬
    const asceButton = document.querySelector(".ascending");
    const sortAsce = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return a.price - b.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    asceButton.addEventListener("click", sortAsce);

    // 내림차순 정렬
    const descButton = document.querySelector(".decending");
    const sortDesc = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.price - a.price;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    descButton.addEventListener("click", sortDesc);

    // 최신순 정렬 => id 값을 현 시각으로 정의해놨으므로 id를 비교하면 된다!!!
    const newListing = document.querySelector(".newListing");
    const sortNew = (e) => {
      e.preventDefault();
      const myProducts = products.data.sort((a, b) => {
        return b.id - a.id;
      });
      removeItems();
      myProducts.forEach((product) => {
        createItem(product);
      });
    };

    newListing.addEventListener("click", sortNew);

    // 검색 이벤트
    const searchBar = document.querySelector(".searchBar");
    searchBar.addEventListener("input", () => {
      // input이 되게 된다면 다음과같은 콜백함스를 써줄거에요
      const keyword = searchBar.value.toLowerCase();
      // keyword는 사용자가 넣을 값일텐데 대문자일수도 있고 소문자일수도 있잖아
      if (keyword === "") {
        removeItems();
        importData();
        // => json Data 찾아온 후 DOM 생성 및 브라우저에 출력
      } else {
        const filtered = products.data.filter((product) => {
          return product.name.toLowerCase().includes(keyword);
          //return product.name.toLowerCase()가 keyword와 겹치는 값을 포함하고 있다면?
        });
        removeItems();
        filtered.forEach((product) => {
          createItem(product);
        });
        //filter(는 안에 참인값들만 싹싹모아서 그것들만 다시 배열로 만들어서 반환한다
      }
    });

    // 셀렉트 & 옵션이벤트
    const select = document.querySelector("select");
    const selectCategory = (e) => {
      // console.log(e);
      // e.target은 select이고 이 안에 option이 유사배열로 들어있다?! 이 배열의 index값으로 값을 찾아와야해
      // 그리고 selectedIndex의 값이 선택된 값의 index를 가지고 있다?!
      const selectedIndex = e.target.options.selectedIndex;
      const value = e.target.options[selectedIndex].value;
      // value는 선택한 option의 value값을 반환하게 된다?!
      const filterd = products.data.filter((product) => {
        return product.category === value;
      });
      removeItems();
      filterd.forEach((product) => {
        createItem(product);
      });
    };
    select.addEventListener("change", selectCategory);
  })
  .catch((error) => {
    console.error(error);
    // 만약 데이터를 찾아오지 못했을때 error이벤트?!;
  });

// Channel Talk
(function () {
  var w = window;
  if (w.ChannelIO) {
    return w.console.error("ChannelIO script included twice.");
  }
  var ch = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
    var x = document.getElementsByTagName("script")[0];
    if (x.parentNode) {
      x.parentNode.insertBefore(s, x);
    }
  }
  if (document.readyState === "complete") {
    l();
  } else {
    w.addEventListener("DOMContentLoaded", l);
    w.addEventListener("load", l);
  }
})();

ChannelIO("boot", {
  pluginKey: "24a4aac9-22b2-4058-8059-7cbec7e3c48b",
});
