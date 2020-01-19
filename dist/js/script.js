window.addEventListener("load", function() {
  let vsImagesWrapper = document.getElementsByClassName("vs-images-wrapper")[0];
  // contar las imágenes
  let imagesQty = vsImagesWrapper.children.length;
  this.console.log("imagesQty", imagesQty);

  // calcular el ancho de una imagen
  let firstImg = vsImagesWrapper.children[0];
  this.console.log("firstImg", firstImg);
  // firstImg.width = "100%";
  // firstImg.height = "auto";
  let imgWidth = firstImg.width;
  this.console.log("imgWidth", imgWidth);

  // calcular el alto de una imagen
  let imgHeight = firstImg.height;
  this.console.log("imgHeight", imgHeight);

  // hacer que el contenedor tenga el ancho de una imagen * la cantidad

  vsImagesWrapper.style.width = imgWidth * imagesQty + "px";
  vsImagesWrapper.style.height = imgHeight + "px";

  let vsImg = document.getElementsByClassName("vs-img");
  let vsNavigation = this.document.getElementsByClassName("vs-navigation")[0];
  let navBtnTemplate = this.document.getElementById("vs-navbtn-template");
  for (let index = 0; index < imagesQty; index++) {
    this.console.log("vsImg", vsImg[index]);
    this.console.log("index", index);

    vsImg[index].classList.remove("vs-img-dimensions");
    vsImg[index].width = imgWidth;
    vsImg[index].height = imgHeight;

    vsImg[index].style.left = imgWidth * index + "px";

    // navigation
    let navBtn = document.importNode(navBtnTemplate.content, content, true);
    vsNavigation.appendChild(navBtn);
    vsNavigation.children[index].addEventListener("click", function() {
      slideTo(index);
    });
  }

  // hacer que el contenedor tenga el alto de una imagen
  let vsOuterWrapper = document.getElementsByClassName("vs-outer-wrapper")[0];
  vsOuterWrapper.style.width = imgWidth + "px";
  vsOuterWrapper.style.height = imgHeight + "px";

  let current = 0;
  function slideLeft() {
    slide("left");
  }

  function slideRight() {
    slide("right");
  }

  function slide(direction) {
    console.log("direction", direction);
    if (direction === "left") {
      current = current + 1 === imagesQty ? 0 : current + 1;
    } else if (direction === "right") {
      current = current === 0 ? imagesQty - 1 : current - 1;
    }
    slideTo(current);
  }

  function slideTo(position) {
    console.log("position", position);
    setIndicator(position);
    vsImagesWrapper.style.marginLeft = "-" + position * 100 + "%";
  }

  let initialSlide = document.getElementsByClassName("vs-initial-slide")[0];
  let finalSlide = document.getElementsByClassName("vs-final-slide")[0];

  finalSlide.textContent = imagesQty;
  function setIndicator(currentSlide) {
    initialSlide.textContent = currentSlide + 1;
    // remover las clases is-active de todos los elementos
    for (let i = 0; i < imagesQty; i++) {
      vsNavigation.children[i].classList.remove("is-active");
    }

    // agregar la clase is-active al elemento actual
    vsNavigation.children[currentSlide].classList.add("is-active");
  }

  this.document
    .getElementsByClassName("vs-left-arrow")[0]
    .addEventListener("click", slideLeft);
  this.document
    .getElementsByClassName("vs-right-arrow")[0]
    .addEventListener("click", slideRight);
  slideTo(0);
});
