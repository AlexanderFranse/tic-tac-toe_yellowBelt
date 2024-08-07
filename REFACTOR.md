 describe("When a player has won, send a message that player X or O win", () => {
    it(`[['X'],[''], [''X]
         ['O'],['O'],['O']
         ['X'],[''], ['']] --> "PLAYER O WON!"`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "X"],
        ["O", "O", "O"],
        ["X", "", ""],
      ];
      expect(sendWinningMessage(boardWithThreeOHorizontal)).toEqual(
        "PLAYER O WON!"
      );
    });
    it(`[['X'],[''], ['0']
         ['O'], ['O'],['X']
         ['0'], [''], ['']] --> "PLAYER O WON!""`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "O"],
        ["O", "O", "X"],
        ["O", "", ""],
      ];
      expect(sendWinningMessage(boardWithThreeOHorizontal)).toEqual(
        "PLAYER O WON!"
      );
    });
    it(`['X'],[''], ['0']
        ['X'],['O'],['O']
        ['X'],[''], ['']] --> "PLAYER O WON!"`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "O"],
        ["X", "O", "O"],
        ["X", "", ""],
      ];
      expect(sendWinningMessage(boardWithThreeOHorizontal)).toEqual(
        "PLAYER O WON!"
      );
    });
    it(`[['X'],[''], ['']
         ['O'],['O'],['O']
         ['X'],[''], ['']] --> "PLAYER X WON!"`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "0"],
        ["O", "X", "O"],
        ["0", "", "X"],
      ];
      expect(sendWinningMessage(boardWithThreeOHorizontal)).toEqual(
        "PLAYER X WON!"
      );
    });
  });



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