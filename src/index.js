import { postData, getData } from './api.js';
import createList from './createLists.js';
import './index.scss';

const user = document.getElementById('user');
const score = document.getElementById('score');
const submit = document.getElementById('submit');
const upload = async (e) => {
  e.preventDefault();
  await postData(user.value, score.value);
  user.value = '';
  score.value = '';

  const display = await getData().result;
  createList(display);
};

submit.addEventListener('click', upload);

const reload = async () => {
  const get = await getData();
  createList(get.result);
};

window.onload = reload;
