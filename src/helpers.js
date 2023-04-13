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

export function slideLeft(index, lengthThubmnail, setState) {
  if (index - 1 < 0) setState(lengthThubmnail - 1);
  else setState(index - 1);
}

export function slideRight(index, lengthThubmnail, setState) {
  if (index + 1 > lengthThubmnail - 1) setState(0);
  else setState(index + 1);
}

export function openCart(element, click, contentBox, setClick) {
  if (click) {
    element.currentTarget
      .querySelector("svg")
      .classList.remove("fill-veryDarkBlue");
    element.currentTarget.querySelector("svg").classList.add("fill-[#69707D]");
    contentBox.current.classList.toggle("animate-fadeIn");
    contentBox.current.classList.toggle("animate-fadeOut");
    setTimeout(() => {
      setClick(false);
    }, 100);
  } else {
    element.currentTarget
      .querySelector("svg")
      .classList.remove("fill-[#69707D]");
    element.currentTarget
      .querySelector("svg")
      .classList.add("fill-veryDarkBlue");
    setClick(true);
  }
}

export function closeCart(click, box, contentBox, setClick) {
  if (click) {
    box.current.querySelector("svg").classList.remove("fill-veryDarkBlue");
    box.current.querySelector("svg").classList.add("fill-[#69707D]");
    contentBox.current.classList.toggle("animate-fadeIn");
    contentBox.current.classList.toggle("animate-fadeOut");
    setTimeout(() => {
      setClick(false);
    }, 100);
  }
}
