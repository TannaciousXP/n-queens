/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // create count var
  // if count = n
  // return chess;
  // var count = 0;
  // var matrix = [];
  // for (var i = 0; i < n; i++) {
  // console.log(n);
  var numBoard = n;
  var solution = new Board({n: numBoard});
  var solutionsArr = [];
  var count = 0;
  var idx = 0;
  var row = solution.rows()[idx];
  var length = solution.rows().length;

  var findSolution = function(curRow) {
    //toggle first value [1,0,0]
    for (var i = 0; i < row.length; i++) {
      solution.togglePiece(idx, i);
      // console.dir(solution);
      if (!solution.hasAnyRowConflicts() && !solution.hasAnyColConflicts()) {
        count++;
        idx++;
        if (count === n) {
          return solution;
        }
        return findSolution(row);
      } else {
        solution.togglePiece(idx, i);
      }
      
    }
    //toggle next value
    //checks if conflicts exist
      //if exists toggle back
    //else 
      //count ++ 
      //check if count is equal to n 
      //move to next row

    //loop through solution height
      //grab row and throw into findSolution 
  
  };

  var output = findSolution(solution);
  console.log(output);
  return output.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
