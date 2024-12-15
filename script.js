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



// Scroll To Top Button

document.addEventListener('DOMContentLoaded', function () {
  const mybutton = document.querySelector(".topbtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    console.log("topFunction eseguita");
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  }

  // Associa la funzione al bottone (può essere utile per debug)
  mybutton.addEventListener("click", topFunction);
});


// Load More Certifications
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-certifications');
  const hiddenCertifications = document.querySelector('.hidden-certifications');

  console.log('Bottone selezionato:', toggleButton);
  console.log('Sezione nascosta selezionata:', hiddenCertifications);

 

  toggleButton.addEventListener('click', function () {
    if (hiddenCertifications.classList.contains('d-none')) {
      // Show More
      hiddenCertifications.classList.remove('d-none');
      hiddenCertifications.classList.add('d-flex');
      toggleButton.textContent = 'Load Less';
    } else {
      // Show Less
      hiddenCertifications.classList.remove('d-flex');
      hiddenCertifications.classList.add('d-none');
      toggleButton.textContent = 'Load More';
    }

  });
});
