const wordSearch = (letters, word) => {
  if (letters.length === 0)  {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  // console.log(horizontalJoin);
  let result = transpose(letters);
  const verticalJoin = result.map(ls => ls.join(''));
  console.log(verticalJoin);
  for (let i = 0; i < horizontalJoin.length; i++) {
        
      
    if (horizontalJoin[i].includes(word)) {
      return true;
    } else {
        
      // resut;
       
      for (let x = 0; x < result.length; x++) {
          
        if (verticalJoin[x].includes(word)) {
          console.log(verticalJoin[x]);
          return true;
        }
      }
    }
  }
  return false;
};


const transpose = function(matrix) {
  // Put your solution here
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let subArray = [];
    for (let j = 0; j < matrix.length; j++) {
      subArray.push(matrix[j][i]);
    }
    output.push(subArray);
  }
  return output;
};

//  const wordSearch = (letters, word) => {
//   const horizontalJoin = letters.map(ls => ls.join(''))
//   for (l of horizontalJoin) {
//       if (l.includes(word)) return true
//   }
// }

// module.exports = wordSearch





console.log(wordSearch(
  [['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], "FRANK"));
module.exports = wordSearch;
