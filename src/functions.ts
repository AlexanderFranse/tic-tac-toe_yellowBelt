export function createBoard(rowsAndColumns: number): string[][] {
  return [...Array(rowsAndColumns)].map(() => Array(rowsAndColumns).fill(""));
}

export function boardContainsOnlyXAndOValues(value: string): boolean {
  return value === "X" || value === "O";
}
export function threeSymbolsEqualVertical(board: string[][]): boolean {
  return board[0].some((_, col) => board.every((row) => row[col] === "X"));
}

export function threeSymbolsEqualsHorizontal(board: string[][]): boolean {
  return board.some((row) => row.every((col) => col === "O"));
}
export function threeSymbolsEqualsDiagonal(board: string[][]): boolean {
  const mainDiagonal =
    board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X";
  const antiDiagonal =
    board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X";
  return mainDiagonal || antiDiagonal;
}

export function sendWinningMessage(board: string[][]): string {
  if (threeSymbolsEqualVertical(board)) {
    return "Player X wins!";
  }
  if (threeSymbolsEqualsHorizontal(board)) {
    return "Player O wins!";
  }
  if (threeSymbolsEqualsDiagonal(board)) {
    return "Player X wins!";
  }
  return "No winner";
}

export function isDraw(board: string[][]): boolean {
  return board.every((row) => row.every((col) => col !== ""));
}
