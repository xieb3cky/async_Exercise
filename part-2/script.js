//Deck of Cards

let baseURL = 'http://deckofcardsapi.com/api/deck/'

//1. Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. 
//Once you have the card, console.log the value and the suit.


async function newCard() {
    res = await $.getJSON(`${baseURL}/new/draw/?count=1`)
    let { suit, value } = res.cards[0];
    console.log(`${suit}, ${value}`)
}

//2. Make a request to the deck of cards API to request a single card from a newly shuffled deck.
//Make a request to the same API to get one more card from the same deck.

async function sameDeck() {
    res1 = await $.getJSON(`${baseURL}/new/draw/?count=1`);
    deck_id = res1.deck_id;
    res2 = await $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`);
    [res1, res2].forEach(res => {
        let { suit, value } = res.cards[0];
        console.log(`${suit}, ${value}`);
    });
}


//3. when the page loads, go to the Deck of Cards API to create a new deck. 
//Show a button on the page that will let you draw a card.
//Every time you click the button, display a new card, until there are no cards left in the deck.

async function newDeck() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let res = await $.getJSON(`${baseURL}/new/`);

    $btn.show().on('click', async function cardDeck() {
        let deck_id = res.deck_id;
        res2 = await $.getJSON(`${baseURL}/${deck_id}/draw/?count=1`);
        cardImg = res2.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardImg,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (res2.remaining === 0) $btn.remove();
    })
}

newDeck()