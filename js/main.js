(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-sticky');
        } else {
            $('#nav').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });
    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
  
})(jQuery);

//Other Services Section

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the radio buttons and services
    const googleReviewsRadio = document.getElementById('google-reviews');
    const instagramFollowersRadio = document.getElementById('instagram-followers');
    const instagramLikesRadio = document.getElementById('instagram-likes');
  
    const googleService = document.querySelector('.service-google');
    const instagramFollowersService = document.querySelector('.service-instagram-followers');
    const instagramLikesService = document.querySelector('.service-instagram-likes');
  
    // Add event listeners to each radio button
    googleReviewsRadio.addEventListener('change', () => {
      googleService.classList.add('active');
      instagramFollowersService.classList.remove('active');
      instagramLikesService.classList.remove('active');
    });
  
    instagramFollowersRadio.addEventListener('change', () => {
      googleService.classList.remove('active');
      instagramFollowersService.classList.add('active');
      instagramLikesService.classList.remove('active');
    });
  
    instagramLikesRadio.addEventListener('change', () => {
      googleService.classList.remove('active');
      instagramFollowersService.classList.remove('active');
      instagramLikesService.classList.add('active');
    });
  });
  

//Pricing Section: 

document.addEventListener("DOMContentLoaded", function() {
    // Get all service buttons
    const serviceButtons = document.querySelectorAll(".service-toggle button");

    // Add click event listener to each service button
    serviceButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const selectedService = button.getAttribute("data-service");

        // Hide all price contents
        const priceContents = document.querySelectorAll(".price-content");
        priceContents.forEach(function(content) {
          content.style.display = "none";
        });

        // Show only the price contents for the selected service
        const selectedPriceContents = document.querySelectorAll(`.price-content[data-service="${selectedService}"]`);
        selectedPriceContents.forEach(function(content, index) {
          if (index < 3) { // Show only the first 3 packages
            content.style.display = "block";
          }
        });

        // Make clicked button active and deactivate others
        serviceButtons.forEach(function(btn) {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });

    // Initially show packages for the first service
    serviceButtons[0].click();
  });

  //Form Validation

  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorMessage = document.getElementById("errorMessage");

    // Validate form fields
    if (!name || !email || !subject || !message) {
      errorMessage.textContent = "Please fill in all fields.";
      errorMessage.style.display = "block";
    } else if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      // Form is valid, proceed with submission
      showSuccessModal();
      // Optionally, you can reset the form fields
      document.getElementById("contactForm").reset();
    }
  });

  // Function to validate email address format
  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Function to show the success modal
  function showSuccessModal() {
    var modal = document.getElementById("successModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }


  