const cardsArr = [
    { text: "A", id: 1 },
    { text: "A", id: 2 },
    { text: "B", id: 3 },
    { text: "B", id: 4 },
    { text: "C", id: 5 },
    { text: "C", id: 6 },
    { text: "D", id: 7 },
    { text: "D", id: 8 },
    { text: "E", id: 9 },
    { text: "E", id: 10 },
    { text: "F", id: 11 },
    { text: "F", id: 12 },
]

let firstCard = null;
let secondCard = null;
let firstCardFront = null;
let secondCardFront = null;

const boardElem = document.querySelector(".board");

const createBoard = () => {

    cardsArr.forEach((card) => {
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");
        cardElem.textContent = card.text;
        cardElem.dataset.name = card.text;

        boardElem.appendChild(cardElem);

        const cardElemFront = document.createElement("div");
        cardElemFront.classList.add("card-front");
        cardElem.appendChild(cardElemFront);
    });
}

const unflipCards = () => {
    if (firstCard && secondCard) {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        firstCardFront.classList.remove("flip-front");
        secondCardFront.classList.remove("flip-front");
    }
}

const hideMatchedCards = () => {
    if (firstCard && secondCard) {
        firstCard.style.display = "none";
        secondCard.style.display = "none";
    }
}

// 1) Проверка двойного клика на одну и ту же карточку
// 2) скрыть обложки (сss)

// 3) переиещать карточки 
// 4) счетчик сделать (+50 за правильный -50(25)не правильный)
// 5) Сделать кнопку рестарт (либо если счет ушел в минус)
// 6) анимация unflip
//* debuger


const checkCards = () => {
    const firstCardName = firstCard.dataset.name;
    const secondCardName = secondCard.dataset.name;

    return firstCardName == secondCardName;
}


const flipCard = (event) => {
    const target = event.target;
    const card = target.closest(".card");
    const cardFront = target.closest(".card-front");

    if (card) {
        card.classList.add("flip");
        cardFront.classList.add("flip-front");
    }
    
    if (!firstCard) {
        firstCard = card
        firstCardFront = cardFront
    } else if (!secondCard && card !== firstCard) {
        secondCard = card;
        secondCardFront = cardFront;
    }

    if (firstCard && secondCard) {
        const match = checkCards();

        match ? hideMatchedCards() : unflipCards();

        firstCard = null;
        secondCard = null;
    }


}

createBoard()

boardElem.addEventListener("click", flipCard)