/* поиск в отсортированном массиве путем многократного деления пополам */
/* 0(log n) */

const binarySearch = (data, target, start, end) => {
  if (start > end || end > data.length || start > data.length) return false;
  let middleIndex = Math.floor((start + end) / 2);
  if (data[middleIndex] === target) return true;
  if (data[middleIndex] > target)
    return binarySearch(data, target, start, middleIndex - 1);
  else return binarySearch(data, target, middleIndex + 1, end);
};
