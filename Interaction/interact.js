window.onload = function () {
    document
      .querySelector(".say-hi-button")
      .addEventListener("click", function () {
        console.log("button clicked");
        var el = document.querySelector("#AR-element");
        el.setAttribute("visible", !el.getAttribute("visible"));
  
        // let m = "shader:gif;src:url(https://media0.giphy.com/media/xT9IgsOaEG15pWz17y/giphy.gif)"
  
        // el.setAttribute("material", m);
        // el.setAttribute("rotation", "0 25 0");
        // el.setAttribute("geometry", "primitive:box;");
        // el.removeAttribute("scale");
        // el.removeAttribute("gltf-model");
        
      });
  };