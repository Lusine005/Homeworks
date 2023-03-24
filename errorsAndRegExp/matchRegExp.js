const REGEXP = /<[^>]+>/g;
const str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log(str.match(REGEXP));
// '<a href="/">', '<input type="radio" checked>', "<b>";