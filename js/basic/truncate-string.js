// write a function that truncates a string.
// it should accept a string and a character count.
// test with:
// truncate('The quick brown fox jumps over the lazy dog', 16)

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function truncate (str, num) {
  if (str.length <= num) {
    return str
  } else {
    return str.substr(0, num - 3) + '…'
  }
}
