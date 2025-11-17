const imageBlocks = document.querySelectorAll('[class^="image-block-"]');

async function turnOver(el) {
  const numberOfBlock = el.dataset.blockNumber;
  const imgEl = el.querySelector("img");

  if (numberOfBlock && imgEl) {
    const currentSrc = imgEl.getAttribute("src");

    // Добавляем класс анимации исчезновения
    imgEl.classList.add("image-flipping");
    // Ждем завершения анимации исчезновения
    await new Promise((resolve) => setTimeout(resolve, 250));

    if (currentSrc.includes("girl-")) {
      imgEl.setAttribute("src", `./img/attachment-${numberOfBlock}.png`);
    } else {
      imgEl.setAttribute("src", `./img/girl-${numberOfBlock}.png`);
    }

    // Убираем класс анимации для появления
    imgEl.classList.remove("image-flipping");
  }
}

imageBlocks.forEach((block) =>
  block.addEventListener("click", () => turnOver(block))
);
