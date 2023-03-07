const createList = (data) => {
  const scoreCard = document.querySelector(".scoreCard");
  let sorted = data.sort((a, b) => b.score - a.score);
  let item = "";

  sorted.forEach((element) => {
    let { user, score } = element;
    item += `<div class="item">${user}: ${score}</div>`;
  });
  scoreCard.innerHTML = item;
};

module.exports = createList;
