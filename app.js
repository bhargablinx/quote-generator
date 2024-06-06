const btn = document.querySelector(".btn");
const quote = document.querySelector(".description");
const author = document.querySelector(".author");

let text = "";
let writer = "";

btn.addEventListener('click', () => {
    let num = Math.floor(Math.random() * 6);
    console.log(num)
    switch(num) {
        case 0:
            text = "Genius is one percent inspiration and ninety-nine percent perspiration.";
            writer = "Thomas Edison";
            addText(text, writer);
            break;
        case 1:
            text = "Go ahead, make my day.";
            writer = "Harry Callahan";
            addText(text, writer);
            break;
        case 2:
            text = "He travels the fastest who travels alone.";
            writer = "Nelson Mandela";
            addText(text, writer);
            break;
        case 3:
            text = "The way to get started is to quit talking and begin doing.";
            writer = "Walt Disney";
            addText(text, writer);
            break;
        case 4:
            text = "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.";
            writer = "Steve Jobs";
            addText(text, writer);
            break;
        case 5:
            text = "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. ";
            writer = "John Lennon ";
            addText(text, writer);
            break;
    }
});

function addText(text, writer) {
    quote.textContent = text;
    author.textContent = writer;
}