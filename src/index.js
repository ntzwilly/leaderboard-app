import './style.css';

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

for (let i = 1; i < 8; i += 1) {
  const list = elementGenerator('li', 'score-li');
  list.textContent = `Name: ${i}`;
  scoreList.appendChild(list);
}

const formDiv = elementGenerator('div', 'form-div');

const addScoreHeader = elementGenerator('h2', 'add-score');
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