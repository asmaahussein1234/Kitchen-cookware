const cartCount = document.querySelector('#cart-count');
const toast = document.querySelector('#toast');
let cartItems = 0;

document.querySelectorAll('.add-button').forEach((button) => {
  button.addEventListener('click', () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
    toast.textContent = `${button.dataset.product} added to your bag`;
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 2400);
  });
});

document.querySelectorAll('.filter').forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    filterButton.classList.add('active');
    const selectedCategory = filterButton.dataset.filter;
    document.querySelectorAll('.product-card').forEach((card) => {
      card.hidden = selectedCategory !== 'all' && card.dataset.category !== selectedCategory;
    });
  });
});