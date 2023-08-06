/*Сравнениваем пару соседних элементов — если они стоят в неправильном порядке, то их меняют местами. */
/*O(n^2) */

const bubbleSort = (data, start, end) => {
  if (start > end || end > data.length || start > data.length) return false;
  if (data.length < 2) return data;
  for (let i = start; i < end; i++) {
    for (let j = start; j < end - 1; j++) {
      if (data[j] > data[j + 1]) {
        let tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      }
    }
  }
  return data;
};
