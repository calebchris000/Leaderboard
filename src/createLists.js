const createList = (data) => {
  let item = '';

  const list = document.querySelector('.list');
  const sorted = data.sort((a, b) => b.score - a.score);

  sorted.forEach((element) => {
    const { user, score } = element;
    let slice1 = user.slice(0, 10)
    let slice2 = score.slice(0, 2)
    item += `
    
    <div class="item">${slice1}: ${slice2}</div>
    `;
  });
  list.innerHTML = item;
};

export default createList;
