function login() {
  const username = document.getElementById('username').value;
  if (username) {
    document.getElementById('greeting').innerText = `Halo, ${username}`;
    showPage('dashboard-page');
  } else {
    alert('Masukkan username terlebih dahulu!');
  }
}

function goToProfile() {
  showPage('profile-page');
}

function backToDashboard() {
  showPage('dashboard-page');
}

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}
function goToData() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('data-page').classList.add('active');
}

function goToSettings() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('settings-page').classList.add('active');
}

function backToDashboard() {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('dashboard-page').classList.add('active');
}
function openImage(src) {
  document.getElementById('popup').style.display = 'flex';
  document.getElementById('popup-img').src = src;
}

function closeImage() {
  document.getElementById('popup').style.display = 'none';
}