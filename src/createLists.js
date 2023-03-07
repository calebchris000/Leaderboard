const createList = (data) => {
  let item = '';

  const list = document.querySelector('.list');
  const sorted = data.sort((a, b) => b.score - a.score);

  sorted.forEach((element) => {
    const { user, score } = element;
    item += `
    
    <div class="item">${user}: ${score}</div>
    `;
  });
  list.innerHTML = item;
};

export default createList;
