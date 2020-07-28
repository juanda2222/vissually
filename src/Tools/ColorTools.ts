

var Color2Vec = function (color_string: string): number[] {

  var clean_color_string = color_string.replace(/ /g, ""); // remove spaces

  // rgb(r,g,b) format
  if (clean_color_string.length >= 10) {
    // use the rgb string parce a vector
    var rgb: number[] = clean_color_string.substring(4, clean_color_string.length - 1).replace(/ /g, '').split(',').map(val => parseInt(val, 10));
    
    if (!rgb) { throw new Error("rgb string in wrong format") };
    return rgb;

  // #ffffff format
  } else {
    // convert the hex value to rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(clean_color_string);
    if (!result) { throw new Error("hex string in wrong format") }
    return [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ];
  };
};

export {
  Color2Vec
}