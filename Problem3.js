let arr = [35, 46, 76, 57, 89, 93, 39, 67, 55, 49];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 40) {
    arr[i] += 20;
  } else if (arr[i] > 90) {
    arr[i] = 90;
  } else if (arr[i] >= 50) {
    count++;
  }
}
console.log(count);
console.log(arr);
