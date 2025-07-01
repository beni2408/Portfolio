// Wait for the DOM to load
window.onload = function () {
  const button = document.getElementById("downloadBtn");

  // Base styles
  button.style.textAlign = "center";
  button.style.alignItems = "center";
  button.style.fontSize = "20px";
  button.style.fontWeight = "bold";
  button.style.margin = "10px";
  button.style.backgroundColor = "#ff0000";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";

  button.style.padding = "10px 20px";

  function applyResponsiveStyles() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 480) {
      button.style.fontSize = "16px";
      button.style.padding = "8px 15px";
      button.style.width = "90%";
      button.style.display = "block";
      button.style.margin = "10px auto";
    } else if (screenWidth < 768) {
      button.style.fontSize = "18px";
      button.style.padding = "9px 18px";
      button.style.width = "auto";
    } else {
      button.style.fontSize = "20px";
      button.style.padding = "10px 20px";
      button.style.width = "auto";
    }
  }

  applyResponsiveStyles();

  window.addEventListener("resize", applyResponsiveStyles);

  button.onclick = function () {
    const link = document.createElement("a");
    link.href = "./CV React.pdf";
    link.download = "Jascar_Benish_CV.pdf";
    link.click();
  };
};
