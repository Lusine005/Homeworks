function reverseString(s) {
  try {
    const a = s.split("").reverse().join("");
    return a;
  } catch (err) {
    err.message = `Your parameter is not string ${s}`
    return err.name + ": " + err.message
  }
}

console.log(reverseString(55));
