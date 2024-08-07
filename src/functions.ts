export function createBoard(rowsAndColumns: number): string[][] {
  return [...Array(rowsAndColumns)].map(() => Array(rowsAndColumns).fill(""));
}

export function boardContainsOnlyXAndOValues(value: string): boolean {
  return value === "X" || value === "O";
}
export function threeSymbolsEqualVertical(board: string[][]): boolean {
  return board[0].some((_, col) => board.every((row) => row[col] === "X"));
}
