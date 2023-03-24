const res = /^[0-9]*$/g
const hello = 123

console.log(res.test(hello))

const res1 = /^[a-z]*$/g
const hello1 = "sdcd"

console.log(res1.test(hello1))

const res2 = /^[A-Z]*$/g
const hello2 = "AFDS"

console.log(res2.test(hello2))