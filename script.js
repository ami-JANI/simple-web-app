const countEl = document.getElementById('count');
const btn = document.getElementById('click-btn');

let count = 0;

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});
