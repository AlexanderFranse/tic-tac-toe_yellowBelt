export function createBoard(rowsAndColumns: number): string[][] {
  return [...Array(rowsAndColumns)].map(() => Array(rowsAndColumns).fill(""));
}

export function boardContainsOnlyXAndOValues(value: string): boolean {
  return value === "X" || value === "O";
}
export function threeSymbolsEqualVertical(board: string[][]): boolean {
  for (let col = 0; col < board[0].length; col += 1) {
    if (
      board[0][col] === "X" &&
      board[1][col] === "X" &&
      board[2][col] === "X"
    ) {
      return true;
    }
  }
  return false;
}
