/* https://reqres.in/api/products
여기 들어가서 상품정보를 json으로 찾아와서
브라우저에 상품명 / 생산년도값을 출력해주세요


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/products", true);
xhr.send();

const rederHtml = (contents) => {
  const product = document.querySelector("#product");
  // console.log(product);
  let output = "";
  console.log(contents);
  // contents 자체는 객체이다 iterable한 값들은 data안에 있기 때문에 forEach는 contents의 data에서 쓸 수 있다는 사실...
  contents.data.forEach((content) => {
    output += `
      <h4>상품명 : ${content.name}</h4>
      <h4>생산년도 : ${content.year}</h4>
      </br>`;
  });
  product.innerHTML = output;
};

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    // console.log(xhr);
    rederHtml(products);
  }
});

여기까지 내가 푼 답안
*/

const url = "https://reqres.in/api/products";
const result = document.querySelector("#product");
console.log(result);

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const products = JSON.parse(xhr.responseText);
    // console.log(products);
    products.data.forEach((product) => {
      result.innerHTML += `
      <div>
      <p>상품명 : ${product.name}</p>
      <p>생산년도 : ${product.year}</p>
      </div>`;
    });
  }
});
