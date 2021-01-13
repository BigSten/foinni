menu.onclick = function myFunction() {
  let x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
    x.className += " responsive";
    document.getElementById("inner").style.backgroundColor = "#000";
    document.getElementById("inner").style.position = "fixed";
    document.getElementById("inner").style.left = "50%";
    document.getElementById("inner").style.transform = "translate(-50%)";
    document.body.style.overflow = "hidden";
    document.getElementById("inner").style.paddingBottom = "100vh";

  } else {
    x.className = "topnav";
    document.getElementById("inner").style.backgroundColor = "transparent";
    document.getElementById("inner").style.paddingBottom = "0";
    document.getElementById("inner").style.position = "relative";
    document.body.style.overflow = "visible";
  }
}