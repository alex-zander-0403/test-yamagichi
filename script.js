const imageBlocks = document.querySelectorAll('[class^="image-block-"]');

async function turnOver(el) {
  const numberOfBlock = el.dataset.blockNumber;
  const imgEl = el.querySelector("img");

  if (numberOfBlock && imgEl) {
    const currentSrc = imgEl.getAttribute("src");
    imgEl.classList.add("image-flipping");

    await new Promise((resolve) => setTimeout(resolve, 150));

    if (currentSrc.includes("girl-")) {
      imgEl.setAttribute("src", `./img/attachment-${numberOfBlock}.png`);
    } else {
      imgEl.setAttribute("src", `./img/girl-${numberOfBlock}.png`);
    }

    imgEl.classList.remove("image-flipping");
  }
}

imageBlocks.forEach((block) =>
  block.addEventListener("click", () => turnOver(block))
);
