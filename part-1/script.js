//Part 1: Number Facts

let baseURL = "http://numbersapi.com";

//1. Make request to Numbers API, get a fact about your favorite number. 
async function favNumber() {
    let num = 40
    res = await $.getJSON(`${baseURL}/${num}?json`)
    console.log(res.text)
}



//2. Make that request and when you get the data back, put all of the number facts on the page.
let nums = [1, 3, 4, 10]
async function manyNumbers() {
    res = await $.getJSON(`${baseURL}/${nums}?json`)
    console.log(res)
}

//3. Use the API to get 4 facts on your favorite number. Put them on the page. 
async function fourNumbers() {
    res = await $.getJSON(`${baseURL}/${nums}?json`)
    Object.keys(res).forEach(fact =>
        $("body").append(`<p>${res[fact]}</p>`))
}
