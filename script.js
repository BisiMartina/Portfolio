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










document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.toggle-certifications');
  const hiddenCertifications = document.querySelector('.hidden-certifications');

  console.log('Bottone selezionato:', toggleButton);
  console.log('Sezione nascosta selezionata:', hiddenCertifications);

  // Nascondi esplicitamente all'inizio
  hiddenCertifications.classList.add('d-none');

  toggleButton.addEventListener('click', function () {
    if (hiddenCertifications.classList.contains('d-none')) {
      // Mostra le certificazioni
      hiddenCertifications.classList.remove('d-none');
      hiddenCertifications.classList.add('d-flex'); // Per layout flessibile
      toggleButton.textContent = 'Mostra di meno';
    } else {
      // Nascondi le certificazioni
      hiddenCertifications.classList.remove('d-flex');
      hiddenCertifications.classList.add('d-none');
      toggleButton.textContent = 'Mostra di più';
    }

    // Log delle classi dopo il click
    console.log('Classi dopo il click:', hiddenCertifications.classList);
  });
});
