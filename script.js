document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const cardItems = document.querySelectorAll('.card-item');
  
    filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const filter = button.getAttribute('data-filter');
        
        cardItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-tags').includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
    });
});
});

