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

const boardElem = document.querySelector(".board");

const createBoard = () => {

    cardsArr.forEach((card) => {
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");
        cardElem.textContent = card.text;
        cardElem.dataset.name = card.text;

        boardElem.appendChild(cardElem);
    });
}

const unflipCards = () => {
    if (firstCard && secondCard) {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
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
    const card = target.closest(".card")

    if (card) {
        card.classList.add("flip");
    }
    
    if (!firstCard) {
        firstCard = card
    } else if (!secondCard) {
        secondCard = card;
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