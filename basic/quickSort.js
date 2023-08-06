/* Выбрать из массива элемент, называемый опорным. Это может быть любой из элементов массива.
Сравнить все остальные элементы с опорным и переставить их в массиве так, чтобы разбить массив на три непрерывных отрезка, следующих друг за другом: «элементы меньшие опорного», «равные» и «большие».
Для отрезков «меньших» и «больших» значений выполнить рекурсивно ту же последовательность операций, если длина отрезка больше единицы. */
/*O(n*logn) */

const quickSort = (data) => {
  if (data.length < 2) return data;

  let pivotIndex = Math.floor(data.length / 2);
  let pivot = data[pivotIndex];

  const left = [];
  const right = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i]);
    } else if (data[i] > pivot) {
      right.push(data[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};
