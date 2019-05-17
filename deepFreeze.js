Object.deepFreeze = function (object) {
  Object.freeze(object);

  Object.keys(object).forEach(function (key) {
    if (typeof object[key] == "object") {
      Object.deepFreeze(object[key]);
    }
  });
};