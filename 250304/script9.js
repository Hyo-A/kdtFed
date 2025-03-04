// fetch() => api라 부른다 (만들어진 것을 가져다 쓰는 툴)
// response.json()가 xhr상에서 JSON.parse()를 대체해줌?!

const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
        <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade}</li>
        </ul>`;
    });
    result.innerHTML = output;
  })
  .catch((err) => console.log(err));
