export function handelHover(element) {
  const list = element.querySelectorAll("li");
  const buttons = element.querySelectorAll("button");

  buttons.forEach((e) => {
    e.addEventListener("mouseover", () => {
      e.classList.add("text-veryDarkBlue");
      e.parentElement.classList.remove("border-transparent");
      e.parentElement.classList.add("border-orange");
    });
    e.addEventListener("click", () => {
      list.forEach((ele) => {
        ele.querySelector("button").classList.remove("text-veryDarkBlue");
        ele.classList.remove("border-orange");
        ele.classList.add("border-transparent");
        ele.classList.remove("click");
      });
      e.classList.add("text-veryDarkBlue");
      e.parentElement.classList.remove("border-transparent");
      e.parentElement.classList.add("border-orange");
      e.parentElement.classList.add("click");
    });

    e.addEventListener("focus", () => {
      e.classList.add("text-veryDarkBlue");
      e.parentElement.classList.remove("border-transparent");
      e.parentElement.classList.add("border-orange");
    });

    e.addEventListener("mouseleave", () => {
      if (!e.parentElement.classList.contains("click")) {
        e.classList.remove("text-veryDarkBlue");
        e.parentElement.classList.remove("border-orange");
        e.parentElement.classList.add("border-transparent");
      }
    });
    e.addEventListener("blur", () => {
      console.log(5);
      if (!e.parentElement.classList.contains("click")) {
        e.classList.remove("text-veryDarkBlue");
        e.parentElement.classList.remove("border-orange");
        e.parentElement.classList.add("border-transparent");
      }
    });
  });
}

export function getIndexElement(element) {
  let listChild = element.currentTarget.parentNode?.childNodes;
  let index = 0;

  listChild?.forEach((e, i) => {
    if (e === element.currentTarget) {
      index = i;
      return;
    }
  });
  return index;
}

export function slideLeft(slide, index, lengthThubmnail, setState) {
  if (index - 1 < 0) {
    slide.current.classList.remove("slide-left");
    slide.current.classList.remove("slide-right");
    setTimeout(() => {
      slide.current.classList.add("slide-right");
      setState(lengthThubmnail - 1);
    }, 1);
  } else {
    slide.current.classList.remove("slide-left");
    slide.current.classList.remove("slide-right");
    setTimeout(() => {
      slide.current.classList.add("slide-right");
      setState(index - 1);
    }, 1);
  }
}

export function slideRight(slide, index, lengthThubmnail, setState) {
  if (index + 1 > lengthThubmnail - 1) {
    slide.current.classList.remove("slide-left");
    slide.current.classList.remove("slide-right");
    setTimeout(() => {
      slide.current.classList.add("slide-left");
      setState(0);
    }, 1);
  } else {
    slide.current.classList.remove("slide-left");
    slide.current.classList.remove("slide-right");
    setTimeout(() => {
      slide.current.classList.add("slide-left");
      setState(index + 1);
    }, 1);
  }
}
