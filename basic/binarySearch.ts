/* Бинарный поиск: поиск в отсортированном массиве путем многократного разбиения пополам*/

const binarySearch = (data, target, start, end) => {
  if (start > end) return false;
  let middleIndex = Math.floor((start + end) / 2);
  if (data[middleIndex] === target) return true;
  if (data[middleIndex] > target)
    return binarySearch(data, target, start, middleIndex - 1);
  else return binarySearch(data, target, middleIndex + 1, end);
};
