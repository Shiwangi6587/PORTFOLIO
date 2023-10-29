// about momement 
const secondSection = document.querySelector(".second_section");
const rightBox = secondSection.querySelector(".right_box");
let isBoxVisible = false;

window.addEventListener("scroll", () => {
  const sectionTop = secondSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.5; // Adjust as needed

  if (sectionTop < triggerPoint && !isBoxVisible) {
    // Animate the right_box in
    rightBox.style.transform = "translateY(0)";
    isBoxVisible = true;
  } else if (sectionTop >= triggerPoint && isBoxVisible) {
    // Animate the right_box out
    rightBox.style.transform = "translateY(100px)";
    isBoxVisible = false;
  }
});




// contact form 
document.addEventListener('DOMContentLoaded', function () {
  var contactSection = document.getElementById('contact');
  var contactForm = document.getElementById('contactForm');
  var isContactVisible = false;

  function handleScroll() {
    var contactSectionPosition = contactSection.getBoundingClientRect();

    if (
      contactSectionPosition.top <= window.innerHeight / 2 &&
      contactSectionPosition.bottom >= 0 &&
      !isContactVisible
    ) {
      contactForm.classList.add('small');
      isContactVisible = true;
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});









// // script.js
// $(document).ready(function(){
//   $('.slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       prevArrow: '<button class="prev">Previous</button>',
//       nextArrow: '<button class="next">Next</button>',
//       responsive: [
//           {
//               breakpoint: 768,
//               settings: {
//                   slidesToShow: 20,
//               }
//           },
//           {
//               breakpoint: 480,
//               settings: {
//                   slidesToShow: 1,
//               }
//           }
//       ]
//   });
// });
