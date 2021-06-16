document.addEventListener('DOMContentLoaded', () => {
     const squares = document.querySelectorAll('.grid div')
     const result = document.querySelector('#result')
     const displayCurrentPlayer = document.querySelector('#current-player')
     let currentPlayer = 1

     for(var i = 0, len = squares.length; i < len; i++)
     (function(index) {
          //Add an onclick to each square in the grid
          squares[i].onclick = function() {
               //If the square below current square is taken, you can go on top of it
               if(squares[index + 7].classList.contains('taken')) {
                    if(currentPlayer === 1) {
                         squares[index].classList.add('taken')
                         squares[index].classList.add('player-one')
                         //change the player
                         currentPlayer = 2
                         displayCurrentPlayer.innerHTML = currentPlayer
                    } else if(currentPlayer === 2) {
                         squares[index].classList.add('taken')
                         squares[index].classList.add('player-two')
                         //Change the player
                         currentPlayer = 1
                         displayCurrentPlayer.innerHTML = currentPlayer
                    }
                    //If the square below your current square is not taken, you can not go there

               } else alert('You Can Not Go Here!' )
          }
     })(i)
})