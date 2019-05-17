function deepCompare(o1, o2) {

  if (o1 == null || o2 == null) {
    return o1 === o2;
  }

  if (typeof (o1) != "object" || typeof (o2) != "object") {
    return o1 === o2;
  }

  let keys1 = Object.keys(o1);
  let keys2 = Object.keys(o2);

  if (keys1.length != keys2.length) { return false; }

  keys1.forEach(key => {
    if (!o2.hasOwnProperty(key)) { return false; }
    if (typeof (o1[key]) == "object" && typeof (o2[key]) == "object") {
      deepCompare(o1[key], o2[key]);
    } else {
      if (o1[key] != o2[key]) { return false; }
    }
  });
  return true;
};