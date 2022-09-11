type callbackCondition<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackCondition<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      newArray.push(array[index]);
    }
  }

  return newArray;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumbers = myFilter(number, (item) => item % 2 === 0);
console.log(filterNumbers);

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filterWords = myFilter(words, (item) => item.length > 6);
console.log(filterWords);
