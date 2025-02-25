const productInfo =
  "https://my-json-server.typicode.com/Hyo-A/array-project/data";

let productData = null;

fetch(productInfo)
  .then((response) =>
    // productInfo를 잘 찾아왔으면, response라는 객체를 찾아온다
    response.json()
  )
  .then((data) => {
    let idCounter = Date.now();
    const products = {
      data: data.map((item) => ({
        // map은 이 배열에 아이템값을 하나씩 찾아서 어떠한 행위를 해 그리고 실행후 다시 배열로 반환
        ...item,
        id: idCounter++,
        // 얘가 배열인걸 알려주기 위한 소괄호
      })),
    };
    // console.log(produts);
    const params = new URLSearchParams(window.location.search);
    // URLSearchParams()는 프로토타입 객체 // window.location.search는 윈도우 상단의 서치바 // 서치바에 들어오는 값을 변수에 담았다?
    const category = params.get("category");
    // get은 가지고오는 method 함수
    const productName = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === productName
    );
    // find는 boolean값을 반환하는데 true인 값만 취해서 product 안에 배열로 반환한다

    const price = new Intl.NumberFormat("ko-kr", {
      currency: "KRW",
    }).format(product.price);

    const productDetailDiv = document.querySelector("#product-detail");
    console.log(productDetailDiv);

    if (product) {
      productData = product;
      productDetailDiv.innerHTML = `
      <div class="product-category">
        <h3>현재 카테고리 ${product.category} > ${product.name}</h3>
      </div>
      <div class="product-img">
        <img src="${product.img}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <P>카테고리 : ${product.category}</P>
        <P>소비자가 : ${product.price}원</P>
      </div>
      `;
    } else {
      productDetailDiv.innerText = "상품이 존재하지 않습니다";
    }
  })

  .catch((error) => {
    console.error(error);
  });

Kakao.init("d5e986baf3eb619523951069a7b7ab9c");
// 카카오에 긁어온건데 내 자바스크립트 키를 사이트에서 찾아와야함
console.log(Kakao.isInitialized());
// 위의 코드로 확인하면 true가 뜬다?

const shareMessage = () => {
  Kakao.Share.createDefaultButton({
    container: "#kakaotalk-sharing-btn",
    objectType: "feed",
    content: {
      title: `${productData.name}`,
      description: "#케익 #딸기 #삼평동 #카페 #분위기 #소개팅",
      imageUrl:
        "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
    social: {
      likeCount: 286,
      commentCount: 45,
      sharedCount: 845,
    },
    buttons: [
      {
        title: "웹으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      {
        title: "앱으로 보기",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
    ],
  });
};
