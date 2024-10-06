function vdochange(id) {
  // id.style.backgroundColor = "red";
  var video = document.getElementById("vdo");
  video.src = id;
  video.load();
  video.play();
}
function modechange(id) {
  var obj = document.getElementById("navbar-light");
  var obj2 = document.getElementById("mode");

  if (obj2.innerHTML == '<i class="fas fa-moon"></i>') {
    obj.style.backgroundColor = "black";
    obj2.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    obj.style.backgroundColor = "white";
    obj2.innerHTML = '<i class="fas fa-moon"></i>';
  }
}
