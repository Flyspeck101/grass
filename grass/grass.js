let grass = (document) => {
  function toggleDarkMode() {
    $("body")[0].classList.contains("dark-mode") ? $("body")[0].classList.remove("dark-mode") : $("body")[0].classList.add("dark-mode");
  }

  toggleDarkMode();

  function hide(element) {
    element.classList.add("hidden");
  }

  function show(element) {
    element.classList.remove("hidden");
  }

  function gameBegin() {
    $(".whole-page-modal").html("");
    $(".whole-page-modal").hide();
    $("audio")[0].play();
  }

  $(".whole-page-modal").html(`<p class="sans" style="font-size: 30px; margin-top: calc(50vh - 185px); margin-left: 15vw; margin-right: 15vw;">This game is designed for landscape screens. The game may function on mobile or portrait screens, but is not supported.</p><br><br><br><br><br><button id="done" class="serif">Okay!</button>`);
  $("#done").on("click", function () {
    $(".whole-page-modal").fadeOut(2000, function() {
      $(".whole-page-modal").html(`<img src="./img/gameover.png" style="width: 50vw; margin: 50px 25vw;">`);
      $(".whole-page-modal").fadeIn(3000, function() {
        $(".whole-page-modal").html(`<img src="./img/gameover.png" style="width: 50vw; margin: 50px 25vw;"><button id="outside" class="serif">Go outside</button>`);
        $("#outside").on("click", gameBegin);
      });
    });
  });
  show($(".whole-page-modal")[0]);

}
