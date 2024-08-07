import {
  createBoard,
  boardContainsOnlyXAndOValues,
  threeSymbolsEqualVertical,
  threeSymbolsEqualsHorizontal,
  threeSymbolsEqualsDiagonal,
  isDraw,
} from "../../src/functions";

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
  describe("Next, The board should only allow X or O values", () => {
    it("X --> true", () => {
      expect(boardContainsOnlyXAndOValues("X")).toBe(true);
    });
    it("O --> true", () => {
      expect(boardContainsOnlyXAndOValues("O")).toBe(true);
    });
    it("A --> false", () => {
      expect(boardContainsOnlyXAndOValues("A")).toBe(false);
    });
  });
  describe("Player X wins when there are 3 times X on the board vertically next to each other", () => {
    it(`[['X'], [''], ['']
         ['X'], ['O'],['']
         ['X'], [''], ['O']] --> true`, () => {
      const boardWithThreeXVertical = [
        ["X", "", ""],
        ["X", "O", ""],
        ["X", "", "O"],
      ];
      expect(threeSymbolsEqualVertical(boardWithThreeXVertical)).toBe(true);
    });
    it(`[['X'], [''], ['']
         ['O'], ['O'],['']
         ['X'], [''], ['O']] --> false`, () => {
      const boardWithThreeXVertical = [
        ["X", "", ""],
        ["O", "O", ""],
        ["X", "", "O"],
      ];
      expect(threeSymbolsEqualVertical(boardWithThreeXVertical)).toBe(false);
    });
  });
  describe("Player O wins when there are 3 times O on the board horizontally next to each other", () => {
    it(`[['X'], [''], ['X']
         ['O'], ['O'],['O']
         ['X'], [''], ['']] --> true`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "X"],
        ["O", "O", "O"],
        ["X", "", ""],
      ];
      expect(threeSymbolsEqualsHorizontal(boardWithThreeOHorizontal)).toBe(
        true
      );
    });
    it(`[['X'], [''], ['']
         ['O'], ['O'],['']
         ['X'], [''], ['O']] --> false`, () => {
      const boardWithThreeOHorizontal = [
        ["X", "", "X"],
        ["O", "O", ""],
        ["X", "", ""],
      ];
      expect(threeSymbolsEqualsHorizontal(boardWithThreeOHorizontal)).toBe(
        false
      );
    });
  });
  describe("Player X wins when there are 3 times X on the board diagonally next to each other", () => {
    it(`[['X'], [''], ['']
         ['O'], ['X'],['']
         ['0'], [''], ['X']] --> true`, () => {
      const boardWithThreeXDiagonal = [
        ["X", "", ""],
        ["O", "X", ""],
        ["0", "", "X"],
      ];
      expect(threeSymbolsEqualsDiagonal(boardWithThreeXDiagonal)).toBe(true);
    });
    it(`[['0'], [''], ['X']
         ['O'], ['X'],['']
         ['X'], [''], ['']] --> true`, () => {
      const boardWithThreeXDiagonal = [
        ["0", "", "X"],
        ["O", "X", ""],
        ["X", "", ""],
      ];
      expect(threeSymbolsEqualsDiagonal(boardWithThreeXDiagonal)).toBe(true);
    });
    it(`[[''], [''], ['']
         ['O'], ['X'],['']
         ['0'], [''], ['X']] --> false`, () => {
      const boardWithThreeXDiagonal = [
        ["", "", ""],
        ["O", "X", ""],
        ["X", "", "X"],
      ];
      expect(threeSymbolsEqualsDiagonal(boardWithThreeXDiagonal)).toBe(false);
    });
  });
  describe("Final check is to determine if no one won (draw)", () => {
    it(`[['X'],['O'],['X']
         ['O'],['0'],['X']
         ['X'],['X'],['O']] --> true`, () => {
      const boardWithDraw = [
        ["X", "O", "X"],
        ["O", "0", "X"],
        ["X", "X", "O"],
      ];
      expect(isDraw(boardWithDraw)).toBe(true);
    });
    it(`[['X'],['O'],['X']
         ['O'],['X'],['O']
         ['O'],['X'],['O']] --> false`, () => {
      const boardWithoutDraw = [
        ["X", "O", "0"],
        ["X", "0", "X"],
        ["X", "X", "O"],
      ];
      expect(isDraw(boardWithoutDraw)).toBe(false);
    });
  });
});
