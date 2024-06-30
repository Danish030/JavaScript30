const arrayOfHexaColors = (numofColors) => {
  let colors = [];
  for (let i = 0; i < numofColors; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let r1 = r.toString(16).padStart(2,"0")
    let g1 = g.toString(16).padStart(2,"0")
    let b1 = b.toString(16).padStart(2,"0")
    let hexColor = `#${r1}${g1}${b1}`;
    colors.push(hexColor);

  }
  return colors;
};
console.log(arrayOfHexaColors(5))