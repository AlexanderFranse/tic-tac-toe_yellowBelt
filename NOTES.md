✅ - Create a 3 by 3 board
    ✅ - row, column = 3 --> [[''], [''], ['']
                              [''], [''], ['']
                              [''], [''], ['']]

🤲 - Player 1 wins when 3 times X vertical is the same



✅ - Validate if board contains X or O only:
        ✅ X --> true
        ✅ O --> true
        ✅ A --> false

✅ - Player X wins when there are 3 times X next to each other vertically
      ✅ [['X'], [''], ['']
          ['X'], ['O'],['']
          ['X'], [''], ['O']] --> true

      ✅ [['X'], [''], ['']
          ['O'], ['O'],['']
          ['X'], [''], ['O']] --> false




✅ - Player O wins when there are 3 times O next to each other horizontally
         [['X'], [''], [''X]
          ['O'], ['O'],['O']
          ['X'], [''], ['']] --> true

         [['X'], [''], ['X']
          ['O'], ['O'],['']
          ['X'], [''], ['']] --> false

    ✅ - Player X wins when there are 3 times X next to each other diagonally
         [['X'], [''], ['']
          ['O'], ['X'],['']
          ['O'], [''], ['X']] --> true

         [[''], [''], ['']
          ['O'], ['X'],['']
          ['O'], [''], ['X']] --> false

    🤲 Send message to winning player
            player O --> "PLAYER O WON!"


- 🤲 Send message to winning player
            [['X'],[''], [''X]
             ['O'],['O'],['O']
             ['X'],[''], ['']] --> "PLAYER O WON!"

            [['X'],[''], ['0']
             ['O'], ['O'],['X']
             ['0'], [''], ['']] --> "PLAYER O WON!"

            [['X'],[''], ['0']
             ['X'], ['O'],['O']
             ['X'], [''], ['']] --> "PLAYER X WON!"

            [['X'],[''],['0']
             ['O'],['X'],['0']
             ['0'],[''],['X']] --> "PLAYER X WON!"

- No winner. Game ends with a draw
     [['X'], ['O'],['X']
      ['O'], ['O'],['X']
      ['X'], ['X'],['O']] --> true

     [['X'], ['O'],['0']
      ['X'], ['O'],['X']
      ['X'], ['X'],['O']] --> false
  
    