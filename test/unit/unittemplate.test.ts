import { createBoard } from "../../src/functions";

describe("Tic tac toe is a game where a player wins when a X or O has been placed 3 times next to each other in a vertical, horizontal or diagonal line. The board contains a grid that is 3x3. When the board is full and it doesnt contain any winning condition, then it is a draw", () => {
  describe("First we need to validate if the board has a size of 3 rows and 3 columns", () => {
    it(`row, column = 3 ---> [['', '', ''], 
                              ['', '', ''],
                              ['', '', '']]`, () => {
      const rowsAndColumns = 3;
      expect(createBoard(rowsAndColumns)).toEqual([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ]);
    });
  });
});
