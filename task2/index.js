const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flatten(arr) {
  const res = [];

  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flat = flatten(arr[i])
      for (let j = 0; j < flat.length; j++) {
        res.push(flat[j])
      }
    } else {
      res.push(arr[i])
    }
  };

  return res;
};
 
console.log(flatten(arr));