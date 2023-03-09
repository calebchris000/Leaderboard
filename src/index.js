import { postData, getData } from './api.js';
import createList from './createLists.js';
import './index.scss';


const user = document.getElementById('user');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const refresh = document.querySelector('.refresh');

const upload = async (e) => {
  e.preventDefault();
  await postData(user.value, score.value);
  user.value = '';
  score.value = '';

  const display = await getData();
  createList(display.result);
};

submit.addEventListener('click', upload);

const reload = async () => {
  const get = await getData();
  createList(get.result);
};

refresh.addEventListener('click', () => reload);

window.onload = reload;
