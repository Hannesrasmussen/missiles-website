const modalWrapper = document.getElementById('modal-wrapper');
const navItems = document.getElementsByClassName('nav-item');
const moreGigsBtn = document.getElementById('modal-action');
const gigsCollapse = document.getElementById('gigs-collapseable');

function init() {
  // Event Listeners
  modalWrapper.addEventListener('click', handleOutsideModalClick);
  navItems[3].addEventListener('click', showModal);
  moreGigsBtn.addEventListener('click', showMoreGigs);
}

function showModal() {
  modalWrapper.style.display = 'flex';
}

function handleOutsideModalClick(e) {
  console.log(e.currentTarget);
  if (e.target.id === 'modal-wrapper') {
    e.currentTarget.style.display = 'none';
    gigsCollapse.style.display = 'none';
  }
}

function showMoreGigs() {
  console.log(gigsCollapse);
  gigsCollapse.style.display = 'block';
}

window.onload = init();
