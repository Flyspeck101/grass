let grass = (document) => {
  function hide(element) {
    element.classList.add("hidden");
  }

  function show(element) {
    element.classList.remove("hidden")
  }

  document.getElementsByTagName("body")[0].onloadend = function () {
    document.getElementsByClassName("whole-page-modal")[0].innerHTML += `<br><br><br><p class="sans" style="font-size: 30px;">This game is designed for landscape screens. The game may function on mobile or portrait screens, but is not supported.</p><br><br><br><br><br><button id="done">Okay!</button>`;
    document.getElementById("done").onclick = function () {document.getElementsByClassName("whole-page-modal")[0].innerHTML = ""; hide(document.getElementsByClassName("whole-page-modal")[0]); };
  }; 
  show(document.getElementsByClassName("whole-page-modal")[0]);
}
