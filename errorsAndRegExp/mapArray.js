function mapArray(arr) {
  try {
    return arr.map((item) => item * 2);
  } catch (err) {
    throw new Error("map is not a function");
  }
}
console.log(mapArray([1, 2, 3]));