import './style.css';
import { makeGameId } from './Modules/gameId.js';
import recieveData from './Modules/recieve.js';
import { sendData } from './Modules/send.js';
import resetForm from './Modules/reset.js';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh-btn');
const gameId = localStorage.getItem('gameId') || '';

if (!gameId) {
  makeGameId();
} else {
  recieveData(gameId);
  refreshBtn.addEventListener('click', () => {
    recieveData(gameId);
  });
  // Send data to api
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    await sendData(gameId);
    // Clear form inputs
    resetForm();
  });
}
