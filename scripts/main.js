
function option(text) {
  const o = document.createElement("option");
  o.innerText = text;
  return o;
}

//ham menu
document.addEventListener("DOMContentLoaded", function(){

    const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


});
//end of ham menu

