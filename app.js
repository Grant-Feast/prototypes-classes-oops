// Function obtained from a colt steel tutorial.
// Function converts an rgb color into a hex value
function hex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r,g,b){
  return `rgb(${r}, ${g}, ${b})`;
}

// A factory function which creates an object
function makeColor(r,g,b){
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  color.hex = function() {
    const {r,g,b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  return color;
}

const firstColor = makeColor(35,45,100);