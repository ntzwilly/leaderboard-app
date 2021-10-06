import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameID = 'Eh8TzPUvmP5STze7IIDI';

const elementGenerator = (typeName, className) => {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  return element;
};

const root = elementGenerator('main', 'content');
const title = elementGenerator('h1', 'title');
title.textContent = 'Leaderboard';
const app = elementGenerator('div', 'leaderboard-app');
const scoreDiv = elementGenerator('div', 'score');
const scoreHeader = elementGenerator('div', 'score-header');
const recentScore = elementGenerator('h2', 'recent-score');
recentScore.textContent = 'Recent scores';
const scoreButton = elementGenerator('button', 'refresh');
scoreButton.textContent = 'Refresh';
const scoreList = elementGenerator('ul', 'score-ul');
const formDiv = elementGenerator('div', 'form-div');
const addScoreHeader = elementGenerator('h2', 'add-score-header');
addScoreHeader.textContent = 'Add your score';
const form = elementGenerator('form', 'form');
const addName = elementGenerator('input', 'add-name');
addName.placeholder = 'Your name';
const addScore = elementGenerator('input', 'add-score');
addScore.placeholder = 'Your score';
const submit = elementGenerator('button', 'submit');
submit.textContent = 'Submit';

form.append(addName, addScore, submit);

formDiv.append(addScoreHeader, form);

scoreHeader.append(recentScore, scoreButton);

scoreDiv.append(scoreHeader, scoreList);

app.append(scoreDiv, formDiv);

root.append(title, app);

const content = document.getElementById('root');

content.appendChild(root);

const createScore = async (newScore) => {
  const response = await fetch(`${baseURL}${gameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  })
    .then((response) => response.json());
  return response;
};

const sendScore = async () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const score = {
      user: addName.value,
      score: addScore.value,
    };
    createScore(score);
    addName.value = '';
    addScore.value = '';
  });
};

const displayScore = async () => {
  scoreList.innerHTML = '';
  const response = await (await fetch(`${baseURL}${gameID}/scores/`)).json();
  response.result.forEach((element, index) => {
    element = elementGenerator('li', 'score-li');
    element.textContent = `${response.result[index].user}: ${response.result[index].score}`;
    scoreList.appendChild(element);
  });
};

scoreButton.addEventListener('click', () => {
  displayScore();
});

sendScore();