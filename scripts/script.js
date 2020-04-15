$('.my-slider').slick();

const favorite = document.getElementById('favorite-products');
const modal = document.querySelector('.modal');
const overflow = document.createElement('div');

function showModalFavorite(){
overflow.classList.add('overflow');
document.body.appendChild(overflow);
const height = modal.offsetHeight;
modal.style.marginTop = - height / 2 + 'px';
modal.style.top = '50%'
}

overflow.addEventListener('click', () =>{ modal.style.top = '-100%'; overflow.remove()})
favorite.addEventListener('click', showModalFavorite);