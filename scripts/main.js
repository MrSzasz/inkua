$(document).ready(function () {

  let smallNavBar = $("#smallScreen")

  function hideNavBar() {
    if (smallNavBar.attr("data-hidden") === "false") {
      smallNavBar.animate({
        right: "-100vw"
      }, 500, "linear");
      smallNavBar.attr("data-hidden", "true")
    } else {
      smallNavBar.animate({
        right: "0vw"
      }, 500, "linear");
      smallNavBar.attr("data-hidden", "false")
    }
  }

  $("#expandNavBar").click(() => hideNavBar());


  let navBar = $(".navBar");
  let navLinks = $(".navLink")
  let bg = navBar.attr("data-bg");

  bg ? navLinks.css("color", "#ffffff") : navLinks.css("color", "#000000");

  let goToTop = $("#goToTop")

  goToTop.click((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  function changeNavBarColor() {
    let pos = $(window).scrollTop();
    if (pos > 25) {
      navBar.css({
        "background-color": "#ffffff",
        "box-shadow": "0px 1.02708px 10.2708px 3.08125px rgba(0, 0, 0, 0.12)"
      });
      navLinks.css("color", "#000000")
      goToTop.show()
    } else {
      navBar.css({
        "background-color": "transparent",
        "box-shadow": "none"
      })
      goToTop.hide()
      bg ? navLinks.css("color", "#ffffff") : navLinks.css("color", "#000000");
    }
  }

  $(window).scroll(() => changeNavBarColor())
});