Exercise One, Minimun

function min(a,b) {
if (a < b)
  return a;
  else return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

Exercise Two, Recursion

function isEven(number) {
    if (number == 0)
      return true;
    else if (number == 1)
      return false;
    else if (number < 0)
      return isEven(number + 2);
    else
      return isEven(number - 2);
  }

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

Exercise Three, Bean Counting

function countChar(string, ch) {
  var counted = 0;
  for (i=0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
      return counted
      }

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4





