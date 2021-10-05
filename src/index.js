import './style.css';

function elementGenerator(typeName, className, content, idName) {
  const element = document.createElement(typeName);
  if (className) element.className = className;
  if (content) element.textContent = content;
  if (idName) element.id = idName;

  return element;
}

const root = elementGenerator('main', 'content', null, null);
const title = elementGenerator('h1', 'title', null, null);
title.textContent = 'Leaderboard';
const app = elementGenerator('div', 'leaderboard-app', null, null);
const scoreDiv = elementGenerator('div', 'score', null, null);
const scoreHeader = elementGenerator('div', 'score-header', null, null);
const recentScore = elementGenerator('h2', 'recent-score', null, null);
recentScore.textContent = 'Recent scores';
const scoreButton = elementGenerator('button', 'refresh', null, null);
scoreButton.textContent = 'Refresh';
const scoreList = elementGenerator('ul', 'score-ul', null, null);

for (let i = 1; i < 8; i++) {
  const list = elementGenerator('li', 'score-li', null, null);
  list.textContent = `Score ${i}`;
  scoreList.appendChild(list);
}

const formDiv = elementGenerator('div', 'form-div', null, null);

const addScoreHeader = elementGenerator('h2', 'add-score', null, null);
addScoreHeader.textContent = 'Add your score';

const form = elementGenerator('form', 'form', null, null);

const addName = elementGenerator('input', 'add-name', null, null);
addName.placeholder = 'Your name';
const addScore = elementGenerator('input', 'add-score', null, null);
addScore.placeholder = 'Your score';
const submit = elementGenerator('button', 'submit', null, null);
submit.textContent = 'Submit';

form.appendChild(addName);
form.appendChild(addScore);
form.appendChild(submit);

formDiv.appendChild(addScoreHeader);
formDiv.appendChild(form);

scoreHeader.appendChild(recentScore);
scoreHeader.appendChild(scoreButton);

scoreDiv.appendChild(scoreHeader);
scoreDiv.appendChild(scoreList);

app.appendChild(scoreDiv);
app.appendChild(formDiv);

root.appendChild(title);
root.appendChild(app);

const content = document.getElementById('root');

content.appendChild(root);