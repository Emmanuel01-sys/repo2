//codes shared in leetcode
//function that checks if the box is valid
function validBox(board) {
  let n = board.length;
  for (let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      if(board[i][j] !== ''){
        for(let c=j+1;c<n;c++) if(board[i][j] == board[i][c]) return false;
        for(let r=i+1;r<n;r++) if(board[i][j] == board[r][j]) return false;
        let rstart = i-i%3;
        let cstart = j-j%3;
        let count = 0;
        for(let r = rstart; r < rstart+3; r++) {
          for(let c = cstart; c < cstart+3; c++){
            if(board[i][j] == board[r][c]) {
              count++;
              break;
            }
          }
        }
        if(count > 1) return false;
      }
      if(board[i][j] == '')return false;
    }
  }
  return true;
}

//the solver function
function(board) {
  let r,c;
  let empty = 1;
  for(let i=0; i < board.length; i++){
      for(let j = 0; j < board.length; j++){
          if(board[i][j] == ''){
              r = i;
              c = j;
              empty = 0;
              break;
          }
      }
      if (!empty) break;
  }   
  for(let num = 1; num <= 9; num++) {
    board[r][c] = `${num}`;
    if (validBox(board)){
          board[r][c] = `${num}`;
          if (solveSudoku(board)) return true;
          else board[r][c] = '';
      }
      board[r][c] = '';
  }
  if(empty) return true;
  return false;//board unsolvable
}
