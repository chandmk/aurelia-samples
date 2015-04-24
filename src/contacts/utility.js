export function areEqual(obj1, obj2) {
  return Object.keys(obj1).every(k => obj2.hasOwnProperty(k) && obj1[k] == obj2[k]);
};
