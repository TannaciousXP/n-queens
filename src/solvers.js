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
  var numBoard = n;
  var solution = new Board({n: numBoard});
  var count = 0;
  var row = solution.rows()[count];
  var length = solution.rows().length;

  var findSolution = function(curRow) {
    //toggle first value [1,0,0]
    for (var i = 0; i < row.length; i++) {
      solution.togglePiece(count, i);
      // console.dir(solution);
      if (!solution.hasAnyRooksConflicts()) {
        count++;
        if (count === n) {
          console.log(solution)
          return solution;
        }
        return findSolution(row);
      } else {
        solution.togglePiece(count, i);
      }      
    }  
  };

  return findSolution(solution).rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  var numBoard = n;
  var solution = new Board({n: numBoard});
  var solutionsArr = [];
  var count = 0;
  var row = solution.rows()[count];
  var length = solution.rows().length;

  var renderSolution = function(arr) {
    //toggle first value [1,0,0]                                        
    for (var i = 0; i < length; i++) {
      solution.togglePiece(0, i);
    //   // console.dir(solution);
    //   if (!solution.hasAnyRooksConflicts()) {
    //     count++;
    //     if (count === n) {
    //       solutionsArr.push(solution.rows());
    //     }
    //     return renderSolution(row);
    //   } else {
    //     solution.togglePiece(count, i);
    //   }      
    // }  
      for (var j = 0; j < length; j++) {
        solution.togglePiece(i, j);
    }
  };
  console.log(solutionsArr.rows());
  return solutionsArr.length;
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
