const getRGBValue = (rgb) => {
  const match = rgb.match(/\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  } else {
    return [];
  }
};

export default getRGBValue;
