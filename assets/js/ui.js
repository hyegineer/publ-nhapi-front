$(".custom-select .opt").on("click", function () {
  $(this).siblings(".opt-list-wrap").addClass("active");
})

$(".opt-list-grp .opt-list").on("click", function () {
  var val = $(this).text();

  $(this).parents(".opt-list-wrap").removeClass("active");
  $(this).parents(".opt-list-wrap").siblings(".opt").text(val);
})
// ========================== 헤더 ) hover 시 서브메뉴 노출
$(".header .nav-wrap .nav-list").on("mouseover", function () {
  $(".header").addClass("active");
})

$(".header").on("mouseleave", function () {
  $(".header").removeClass("active");
})

// $("#opt-lang-btn").on("mouseover", function () {
//   $(".opt-lang-grp").slideDown();
// })

// $("#opt-lang-btn-wrap").on("mouseleave", function () {
//   $(".opt-lang-grp").slideUp();
// })

// ========================== 헤더 ) 확장형 메뉴
$("#nav-open-btn").on("click", function () {
  $("#nav-page").addClass("active");
})

$("#nav-close-btn").on("click", function () {
  $("#nav-page").removeClass("active");
})