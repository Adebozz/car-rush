
document.addEventListener('DOMContentLoaded', () => {

const cardArray =[{
				name: 'ade',
				img: 'adeboss_1.jpg'
			},
			{
				name: 'ade',
				img: 'adeboss_1.jpg'
			},
			{
				name: 'brown',
				img: 'brown.jpg'
			},
			{
				name: 'brown',
				img: 'brown.jpg'
			},
			{
				name: 'pink',
				img: 'pink.jpg'
			},
			{
				name: 'pink',
				img: 'pink.jpg'
			},
			{
				name: 'phone',
				img: 'phone.jpg'
			},
			{
				name: 'phone',
				img: 'phone.jpg'
			},
			{
				name: 'boss',
				img: 'adem.bmp'
			},
			{
				name: 'boss',
				img: 'adem.bmp'
			},
			{
				name: 'lap',
				img: 'backgrond1.jpeg'
			},
			{
				name: 'lap',
				img: 'backgrond1.jpeg'
			}
			]
			const grid = document.querySelector('.grid')

			function createBoard(){
				for (let i = 0; i <cardsArray.length; i++){
					var card = document.createElement('img')
					card.setAttribute('src', 'brown.jpg')
					card.setAttribute('data-id', i)
					// card.addEvenListener('click', flipCard)
					grid.appendChild(card)
				}
			}

createBoard()


// document.addEventListener('DOMContentLoaded', () => {

// 			const cardArray =[{
// 				name: 'ade',
// 				img: 'adeboss_1.jpg'
// 			},
// 			{
// 				name: 'ade',
// 				img: 'adeboss_1.jpg'
// 			},
// 			{
// 				name: 'brown',
// 				img: 'brown.jpg'
// 			},
// 			{
// 				name: 'brown',
// 				img: 'brown.jpg'
// 			},
// 			{
// 				name: 'pink',
// 				img: 'pink.jpg'
// 			},
// 			{
// 				name: 'pink',
// 				img: 'pink.jpg'
// 			},
// 			{
// 				name: 'phone',
// 				img: 'phone.jpg'
// 			},
// 			{
// 				name: 'phone',
// 				img: 'phone.jpg'
// 			},
// 			{
// 				name: 'boss',
// 				img: 'adem.bmp'
// 			},
// 			{
// 				name: 'boss',
// 				img: 'adem.bmp'
// 			},
// 			{
// 				name: 'lap',
// 				img: 'backgrond1.jpeg'
// 			},
// 			{
// 				name: 'lap',
// 				img: 'backgrond1.jpeg'
// 			}
// 			]

// 			// cardArray.sort(() => 0.5 - Math.random())

// 			// const grid = document.querySelector(".grid")
// 			// const resultDisplay = document.querySelector('#result')
// 			// var cardsChosen= []
// 			// var cardsChosenId=[]
// 			// var cardsWon=[]

// 			//create your board
// 			function createBoard() {
// 				for (let i = 0; i < cardArray.length; i++){
// 					var card = document.createElement('img')
// 					card.setAttribute('src', 'brown.jpg')
// 					card.setAttribute('data-id', i)
// 					card.addEvenListener('click', flipCard)
// 					grid.appendChild(card)
					
// 				}
// 			}
// 			//check for matches
// 			function checkForMatch() {
// 			var cards = document.querySelectorAll('img')
// 			const optiononeId = cardsChosenId[0]
// 			const optionTwoId = cardsChosenId[1]
// 			if (cardsChosen[0] === cardsChosen[1]){
// 				alert('You found a match')
// 				cards[optionOneId].setAttribute('src', 'white.png')
// 				cards[optionTwoId].setAttribute('src', 'white.png')
// 				cardsWon.push(cardsChosen)
// 			}
// 			else{
// 				cards[optionOneId].setAttribute('src', 'brown.jpg')
// 				cards[optionTwoeId].setAttribute('src', 'brown.jpg')
// 				alert('Sorry, try again')
// 			}
// 			cardsChosen = []
// 			cardsChosenId = []
// 			resultDisplay.textContent = cardsWon.length
// 			if(cardsWon.length === cardArray.length/2){
// 				resultDisplay.textContent= "congratulation! You found them all!"
// 			}
// 			}
// 			//flip your card
// 			function flipCard(){
// 				var cardId = thsi.getAttribute('data-Id')
// 				cardsChosen.push(cardArray[cardId].name)
// 				cardsChosenId.push(cardId)
// 				this.setAttribute('src', cardArray[cardId].img)
// 				if(cardsChosen.length === 2){
// 					setTimeOut(checkForMatch, 500)
// 				}
// 			}
		
// 		})