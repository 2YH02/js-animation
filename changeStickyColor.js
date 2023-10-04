import interpolation from "../core/interpolation.js";
import getRGBValue from "../core/getRGBvalue.js";

const changeStickyColor = (child, parent, obj) => {
  const item = document.getElementById(child);
  const container = document.querySelector(`.${parent}`);

  const computedChild = getComputedStyle(item);

  const computedParnet = getComputedStyle(container);

  const currentColor = computedChild.backgroundColor;

  item.style.position = "sticky";
  item.style.top = obj.top + "px";
  item.style.left = obj.left + "px";

  const scrollStart = parseInt(computedParnet.top) - obj.top;
  const scrollEnd =
    scrollStart +
    parseInt(computedParnet.height) -
    parseInt(computedChild.height);

  const curRgbValue = getRGBValue(currentColor);
  const toRgbValue = getRGBValue(obj.colorTo);

  window.addEventListener("scroll", () => {
    const R = interpolation({
      mins: scrollStart,
      maxs: scrollEnd,
      minv: curRgbValue[0],
      maxv: toRgbValue[0],
    });
    const G = interpolation({
      mins: scrollStart,
      maxs: scrollEnd,
      minv: curRgbValue[1],
      maxv: toRgbValue[1],
    });
    const B = interpolation({
      mins: scrollStart,
      maxs: scrollEnd,
      minv: curRgbValue[2],
      maxv: toRgbValue[2],
    });

    item.style.backgroundColor = `rgb(${parseInt(R)},${parseInt(G)},${parseInt(
      B
    )})`;
  });
};

export default changeStickyColor;
