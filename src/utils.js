export const pick = (object, props) => {
  let picked = {};

  props.forEach((prop) => {
    if (object.hasOwnProperty(prop)) {
      picked[prop] = object[prop];
    }
  });
  
  return picked;
};
