let score = 0;
let balls = 0;
let overs = 0;
let remainingOvers = 0;
let ballByBall = [];
const enterOversDiv = document.getElementById('enterOversContainers');
const scoreSummaryDiv = document.getElementById('scoreSummary');
const runsBtnGroupDiv = document.getElementById('runsBtnGroup');
function updateOversAndBalls() {
  const oversInput = document.getElementById('overs-input');
  if (oversInput) {
    overs = parseFloat(oversInput.value);
    balls = 0;
    if (overs > 0) {
      enterOversDiv.style.display = 'none';
      runsBtnGroupDiv.style.display = 'block';
      scoreSummaryDiv.style.display = 'block';
    }
    updateOversDisplay();
  }
}
function increaseScoreByRuns(runs) {
  score += runs;
  ballByBall.push(runs);
  updateScoreDisplay();
  recordBall();
}
function addExtras(extra) {
  score++;
  updateScoreDisplay();
}
function endGame() {
  score = 0;
  balls = 0;
  overs = 0;
  remainingOvers = 0;
  enterOversDiv.style.display = 'block';
  runsBtnGroupDiv.style.display = 'none';
  scoreSummaryDiv.style.display = 'none';
  updateScoreDisplay();
}
function recordBall() {
  balls++;
  const totalBallsInAnOver = 6;
  const totalBallsPlayed = overs * totalBallsInAnOver - balls;
  const _remainingOvers = Math.floor(totalBallsPlayed / totalBallsInAnOver);
  const remainingBalls = totalBallsPlayed % totalBallsInAnOver;
  remainingOvers = parseFloat(`${_remainingOvers}.${remainingBalls}`);
  updateOversDisplay();
}
function updateScoreDisplay() {
  const scoreElement = document.getElementById('score');
  if (scoreElement) {
    scoreElement.textContent = score.toString();
  }
}
function updateOversDisplay() {
  const oversElement = document.getElementById('overs');
  const remainingOversElement = document.getElementById('remainingOvers');
  if (oversElement) {
    oversElement.textContent = `${overs}`;
  }
  if (remainingOversElement) {
    remainingOversElement.textContent = `${remainingOvers}`;
  }
}
document
  .getElementById('increase-by-0')
  ?.addEventListener('click', () => increaseScoreByRuns(0));
document
  .getElementById('wktBall')
  ?.addEventListener('click', () => increaseScoreByRuns(0));
document
  .getElementById('increase-by-1')
  ?.addEventListener('click', () => increaseScoreByRuns(1));
document
  .getElementById('increase-by-2')
  ?.addEventListener('click', () => increaseScoreByRuns(2));
document
  .getElementById('increase-by-3')
  ?.addEventListener('click', () => increaseScoreByRuns(3));
document
  .getElementById('increase-by-4')
  ?.addEventListener('click', () => increaseScoreByRuns(4));
document
  .getElementById('increase-by-5')
  ?.addEventListener('click', () => increaseScoreByRuns(5));
document
  .getElementById('increase-by-6')
  ?.addEventListener('click', () => increaseScoreByRuns(6));
document
  .getElementById('wideBall')
  ?.addEventListener('click', () => addExtras('wide'));
document
  .getElementById('noBall')
  ?.addEventListener('click', () => addExtras('noBall'));
document
  .getElementById('update-overs-button')
  ?.addEventListener('click', updateOversAndBalls);
document.getElementById('endGame')?.addEventListener('click', endGame);
updateScoreDisplay();
updateOversDisplay();
