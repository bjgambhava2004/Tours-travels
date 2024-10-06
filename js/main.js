var spinner = function () {
  setTimeout(function () {
    if ($("#spinner").length > 0) {
      $("#spinner").removeClass("show");
    }
  }, 1);
};
spinner();


new WOW().init();


const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});

// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  center: true,
  margin: 24,
  dots: true,
  loop: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
let searchlist = [
  "Dubai",
  "India",
  "Switzerland",
  "brazil",
  "Austrelia",
  "China",
  "Kashmir",
  "Lonodn",
  "Russia",
  "Srilanka",
];
const resultbox = document.querySelector(".result-box");
const inputbox = document.querySelector("#input-box");

inputbox.onkeyup = function () {
  let result = [];
  let input = inputbox.value;
  if (input.length) {
    result = searchlist.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLocaleLowerCase());
    });
    console.log(result);
  }
  display(result);
  if (!result.length) {
    resultbox.innerHTML = " ";
  }
};
function display(result) {
  const content = result.map((list) => {
    return "<li onclick='selectInput(this)'>" + list + "</li>";
  });

  resultbox.innerHTML = "<ul>" + content.join("") + "</ul>";
}
function selectInput(list) {
  inputbox.value = list.innerHTML;
  resultbox.innerHTML = "";
}
function mode() {
  var bg = document.getElementById("navbar-light");
  bg.style.backgroundColor = "black";
}
