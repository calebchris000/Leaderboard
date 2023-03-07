const createList = (data) => {
  const scoreCard = document.querySelector(".scoreCard");
  let sorted = data.sort((a, b) => b.score - a.score);
  let item = `<div class="subWrapper">
  <p class="recentScores">Recent Scores</p>
  <button class="refresh">Refresh</button>
  </div>`;

  sorted.forEach((element) => {
    let { user, score } = element;
    item += `
    
    <div class="item">${user}: ${score}</div>
    `;
  });
  scoreCard.innerHTML = item;
};

export default createList;
