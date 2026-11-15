const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const slides = [
  { headline: '讓每一天，<br/>都有一束花的理由。', english: 'Flowers Make Every Moment Beautiful.', image: '/images/hero-city.jpg', location: '台北・台大旁<br/>城市花日子' },
  { headline: '把心意，<br/>綻放成最美的模樣。', english: 'A Little Bloom, A Lot of Love.', image: '/images/product-hydrangea.jpg', location: '台北・花藝生活<br/>今日好花' },
  { headline: '日常有花，<br/>每刻都值得紀念。', english: 'Celebrate Every Beautiful Moment.', image: '/images/product-sunflowers.jpg', location: 'Bloom in the City<br/>花漾城市' },
  { headline: '讓一束花，<br/>說出你想說的話。', english: 'Flowers Speak From The Heart.', image: '/images/product-roses.jpg', location: '台北・台大旁<br/>為你選花' },
];
let activeSlide = 0;
const hero = document.querySelector('.hero');
const dots = [...document.querySelectorAll('.hero-dots button')];
function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  hero?.style.setProperty('--slide-image', `url("${slides[activeSlide].image}")`);
  const headline = document.querySelector('.hero-hand');
  if (headline) headline.innerHTML = slides[activeSlide].headline;
  const english = document.querySelector('.hero-english');
  if (english) english.textContent = slides[activeSlide].english;
  const location = document.querySelector('.hero-location span:last-of-type');
  if (location) location.innerHTML = slides[activeSlide].location;
  dots.forEach((dot, i) => dot.classList.toggle('selected', i === activeSlide));
}
document.querySelector('.hero-arrow.prev')?.addEventListener('click', () => showSlide(activeSlide - 1));
document.querySelector('.hero-arrow.next')?.addEventListener('click', () => showSlide(activeSlide + 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => showSlide(i)));

let cartCount = 0;
const countLabel = document.querySelector('.cart-count');
const toast = document.querySelector('.toast');
let toastTimer;
document.querySelectorAll('.add-cart').forEach((button) => button.addEventListener('click', () => {
  cartCount += 1;
  if (countLabel) countLabel.textContent = String(cartCount);
  if (toast) {
    toast.textContent = `已將「${button.dataset.name || '花禮'}」加入購物車`;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2300);
  }
}));

document.querySelector('.search-toggle')?.addEventListener('click', () => {
  let panel = document.querySelector('.search-panel');
  if (panel) { panel.remove(); return; }
  panel = document.createElement('form');
  panel.className = 'search-panel';
  panel.innerHTML = '<input aria-label="搜尋花禮" placeholder="搜尋花禮、盆栽或花藝課程"/><button type="submit">搜尋</button>';
  panel.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = panel.querySelector('input').value.trim();
    if (value) {
      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
      panel.remove();
      if (toast) { toast.textContent = `為您尋找「${value}」`; toast.classList.add('visible'); setTimeout(() => toast.classList.remove('visible'), 2200); }
    }
  });
  document.querySelector('.site-header')?.append(panel);
  panel.querySelector('input')?.focus();
});

document.querySelector('.newsletter')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.newsletter-message');
  if (message) message.textContent = '感謝訂閱，花漾消息將送到您的信箱。';
  event.currentTarget.reset();
});
