/* например, поиск наименьшего и наибольшего значения в несортированном массиве.*/
/*O(n) */

const linearSearch = (data) => {
  let target = data[0];
  for (let i = 0; i < data.length; i++) {
    if (target > data[i]) target = data[i];
  }
  return target;
};
