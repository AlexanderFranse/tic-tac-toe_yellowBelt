export function createBoard(rowsAndColumns: number): string[][] {
  return [...Array(rowsAndColumns)].map(() => Array(rowsAndColumns).fill(""));
}

export function boardContainsOnlyXAndOValues(value: string): boolean {
  return value === "X" || value === "O";
}

export function threeSymbolsEqualVertical(boardWithThreeXVertical: string[][]): undefined {
  return undefined;
}
