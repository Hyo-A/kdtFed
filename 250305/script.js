// https://dummyjson.com/quotes

const quotesURL = "https://dummyjson.com/quotes";
const result = document.querySelector("#result");

fetch(quotesURL)
  .then((response) => response.json())
  .then((data) => {
    const random = Math.floor(Math.random() * 30);
    // 1~30 명언 // 랜덤 // 명언 => 배열 => 인덱스 // 0~29
    // 배열[인덱스] // Math.random() => 0과 1사이의 난수를 찾아온다?!
    result.querySelector(".quote").innerText = data.quotes[random].quote;
    result.querySelector(
      ".author"
    ).innerText = `- ${data.quotes[random].author}`;
  })

  .catch(console.log);
