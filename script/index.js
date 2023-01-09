
window.addEventListener('scroll', () => {
    var topLine = document.getElementById('top-line');
    var hirePrinter = document.getElementById('hire-printer');
    var button = topLine.querySelector('button');
    var aboutUs = document.getElementById('about-us');

    if (window.scrollY > 100) {
        topLine.style.backgroundColor = "White";
        button.style.backgroundColor = "black";
        button.style.color = "white";
        topLine.style.transition = ".5s ease";
        topLine.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
    } else {
        topLine.style.backgroundColor = "";
        button.style.backgroundColor = "";
        button.style.color = "";
        topLine.style.boxShadow = "";
    }

    if(window.scrollY < 260) {
        hirePrinter.style.opacity = "0.2";
        hirePrinter.style.transition = "1s ease";
        hirePrinter.style.marginTop = "500px";
    } else {
        hirePrinter.style.opacity = "1";
        hirePrinter.style.transition = "1s ease";
        hirePrinter.style.marginTop = "";
    }
    if (window.scrollY < 780) {
        aboutUs.style.opacity = "0.2";
        aboutUs.style.transition = "1s ease";
        aboutUs.style.marginTop = "500px"; 
    } else {
        aboutUs.style.opacity = "1";
        aboutUs.style.transition = "1s ease";
        aboutUs.style.marginTop = "";
    }
});

function showPrice() {
    var priceBlock = document.getElementById('price-info');

    priceBlock.style.opacity = "1";
    priceBlock.style.marginTop = "-10vw"
    priceBlock.style.transition = ".5s ease";
}

function unShowPrice() {
    var priceBlock = document.getElementById('price-info');

    priceBlock.style.opacity = "0";
    priceBlock.style.marginTop = "-30vw"
    priceBlock.style.transition = ".5s ease";
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.left === "0px") {
      dropdown.style.left = "-200vw";
    } else {
      dropdown.style.left = "0px";
    }
  }