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
  var board = new Board({n: n});
  var solutionCount = 0;
  
  var findCombination = function(row) {
    //if row is same size as board size
    if (row === n) {
    //increment solutioncount      
      solutionCount++;
      return;
    }    
    for (var i = 0; i < n; i++) {
      //toggle peice 
      board.togglePiece(row, i);
      //check if it has conflicts
      if (!board.hasAnyRooksConflicts()) { 
        //recurse at next row
        findCombination(row + 1);
      }
      // otherwise toggle piece back to 0
      board.togglePiece(row, i);
    } 
  };
  //start at row 0;
  findCombination(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  console.log(n);
  if (n === 0) {
    return [];
  } 
  var solution = new Board({n: n});
  var count = 0;
  var row = solution.rows()[count];
  var length = solution.rows().length;

  if (n === 2 || n === 3) {
    return solution;
  }

  var findSolution = function(curRow) {
    //toggle first value [1,0,0]
    for (var i = 0; i < row.length; i++) {
      solution.togglePiece(count, i);
      // console.dir(solution);
      if (!solution.hasAnyQueensConflicts()) {
        count++;
        if (count === n) {
          return solution;
        }
// console.log(row, findSolution(row))
        return findSolution(row);
      } else {
        solution.togglePiece(count, i);
      }      
    }  
  };

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution.rows()));
  return findSolution(solution).rows(); 
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({ n: n});
  var solutionCount = 0;

  if (n === 2 || n === 3) {
    return solutionCount;
  }
  var findCombination = function(row) {
    //if row is same size as board size
    if (row === n) {
      //increment solutioncount
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      //toggle peice 
      board.togglePiece(row, i);
      //check if it has conflicts
      if (!board.hasAnyQueensConflicts()) { 
        //recurse at next row;
        findCombination(row + 1);
      }
      // otherwise toggle piece back to 0
      board.togglePiece(row, i);
    } 
  };
  //start at row 0;
  findCombination(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
