function mapArray(arr) {
  try {
    return arr.map((item) => item * 2);
  } catch ({message}) {
    return message;
  }
}
console.log(mapArray(3));