
/**
 * This function will convert a css rgb equivalent: #FFFFFF | #ffffff | rgb(_,_,_) to a int list representing the rgb numbers
 * @param color_string 
 * @returns {rgb}
 */
const Color2Vec = function (color_string: string): number[] {

  let clean_color_string = color_string.replace(/ /g, ""); // remove spaces
  let rgb: number[]

  // rgb(r,g,b) format
  if (clean_color_string.length >= 10) {
    // use the rgb string to parse to a vector
    rgb = clean_color_string.substring(4, clean_color_string.length - 1).replace(/ /g, '').split(',').map(val => parseInt(val, 10));
    if ( (rgb.length <= 1) || (isNaN(rgb[0])) ) {
      throw new Error(`Rgb string in wrong format`)
    };

  // #ffffff format
  } else {
    // convert the hex value to rgb
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(clean_color_string);
    if (!result) { throw new Error("Hex string in wrong format") }
    rgb = [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ];
  };

  return rgb;
};

export {
  Color2Vec
}