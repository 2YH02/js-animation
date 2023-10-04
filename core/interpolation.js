const interpolation = (obj) => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= obj.mins && scrollPosition <= obj.maxs) {
    const progress = (scrollPosition - obj.mins) / (obj.maxs - obj.mins);
    const newValue = obj.minv + (obj.maxv - obj.minv) * progress;

    return newValue;
  }
};

export default interpolation;
