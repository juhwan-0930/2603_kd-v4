console.clear();

$(".top_bar_menu").hover(
  function () {
    $("header").addClass("active");
  },
  function () {
    $("header").removeClass("active");
  },
);
