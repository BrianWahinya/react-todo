const genRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genRandomStr = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomStr += characters.charAt(randomIndex);
  }
  return randomStr;
};

export const genRandomId = () => {
  const timestamp = new Date().getTime();
  const randomInt = genRandomInt(1000, 9999);
  const randomStr = genRandomStr(3);
  return `${timestamp}_${randomStr}_${randomInt}`;
};

const opacityHslRgb = (item) => {
  const sub_item = item.split(", ").slice(0, -1);
  return `${sub_item.join(", ")}, 0.5)`
    .replace("rgba", "rgb")
    .replace("hsla", "hsl")
    .replace("rgb", "rgba")
    .replace("hsl", "hsla");
};

export const insertBgOpacity = (color) => {
  const id = color[0].toLowerCase();
  switch (id) {
    case "#":
      return `${color.slice(0, 7)}80`;
    case "r" || "h":
      return opacityHslRgb(color);
    default:
      return color;
  }
};

export const shallowObjEqual = (obj1, obj2) => {
  // If both are identical, they are equal
  if (obj1 === obj2) return true;

  // If one of them is null or undefined, they are not equal
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  )
    return false;

  // Get the keys of the objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the number of keys is different, they are not equal
  if (keys1.length !== keys2.length) return false;

  // Check each key
  for (let key of keys1) {
    // If the key is not present in obj2 or values are not strictly equal, they are not equal
    if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) return false;
  }

  // If all checks pass, the objects are equal
  return true;
};
