// function checkForArgument(line, argNum, errorMessage) {
//   let words = line.split(' ');
//   if (words.length < argNum + 1) {
//     return undefined;
//   } else {
//     return words[argNum];
//   }
// }

function getArgument(line, index) {
  let words = line.split(' ');
  if (words.length > index) {
    return words[index];
  } else {
    return undefined;
  }
}

module.exports = {
  getArgument,
  // checkForArgument
};
