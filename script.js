document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())

    
  
    

    let yum;
    const f = document.querySelector("#matchDisplay")
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const resetBtn = document.querySelector('.btn')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //TESTING
    
    resetBtn.addEventListener('click', refresh)
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //matchDisplay

    function myTimer() {

        
        let count = 0
        f.style.color = 'red';

        //Function Core
        let counter = setInterval(() => {
            count++
            console.log(count)

            f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
            if(count === 7) {
                clearInterval(counter)
            }
        }, 250)

        
    }

    function changeColor() {

        setTimeout(() => {
            f.style.color = 'f2f3f5'
        }, 3000)

    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)

        myTimer()
        changeColor()

        cardsWon.push(cardsChosen)

      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'PERFECT'
        confett()
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 190)
      }
    }
  
    createBoard()
  })

  function refresh() {
    location.reload()
  }