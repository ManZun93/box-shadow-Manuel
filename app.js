let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");

//inputs

for(let i = 0; i <inputs.length; i++){
  document.addEventListener("input", generateShadow)
}


function generateShadow() {
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blurRadius = document.getElementById("blur-radius").value;
  let size = document.getElementById("size").value;
  let shadowColor = document.getElementById("shadow-color").value;
  let shadowColorOpacity = document.getElementById(
    "shadow-color-opacity"
  ).value;
  
 
  


 //properties and code
  let boxShadow = `${hShadow}px ${vShadow}px ${blurRadius}px ${size}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;
  elem.style.boxShadow = boxShadow;
  code.textContent = `CSS CODE: ${boxShadow};`;
}

//Colors
function hexToRgba(shadowColor, shadowColorOpacity) {
  let r = parseInt(shadowColor.substr(1, 2), 16);
  let g = parseInt(shadowColor.substr(3, 2), 16);
  let b = parseInt(shadowColor.substr(5, 2), 16);
  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

//Copy 
function copyCode() {
  code.select();
  document.execCommand("copy");
  
}

//Call the generateShadow function on every page load//
window.onload = generateShadow();