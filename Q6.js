function cal(arr1) {
  for (i = arr1.length - 1; i > 0; i--) {
    arr1.push(arr1[i]);
  }
  console.log(arr1);
}
cal([1, 2, 3, 4]);
