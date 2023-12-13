import get from "lodash/get";
import set from "lodash/set";
import pullAt from "lodash/pullAt";

function getValue({object, path}) {
  return get(object, path)
}

function setValue({object, path, value}) {
  set(object, path, value)
}

function forget({array, index}) {
  pullAt(array, [index])
}

export {
  getValue,
  setValue,
  forget,
}