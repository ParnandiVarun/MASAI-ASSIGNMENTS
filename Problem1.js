let arr1 = [26, 35, 43, 28, 38, 42, 31];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == arr1[3]) {
    arr1[i] += 2;
    console.log(arr1);
  }
}
