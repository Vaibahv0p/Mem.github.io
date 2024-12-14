const funnyQuotes = [
    "When nothing goes right, go left.",
    "I'm not arguing, I'm just explaining why I'm right.",
    "I don’t need a hair stylist, my pillow gives me a new hairstyle every morning.",
    "Life is short. Smile while you still have teeth.",
    "I’m on a seafood diet. I see food, and I eat it.",
    "The best way to predict the future is to create it.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I’m reading a book on anti-gravity. It’s impossible to put down.",
    "I tried to start a hot air balloon business, but it never really took off.",
    "I would tell you a chemistry joke, but I know I wouldn't get a reaction.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I ate a clock yesterday, it was very time-consuming.",
    "I used to play piano by ear, but now I use my hands.",
    "I don’t trust stairs because they’re always up to something.",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats.",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "My wife told me I should do lunges to stay in shape. That would be a big step forward.",
    "I broke my finger last week. On the other hand, I’m okay.",
    "I don’t suffer from insanity, I enjoy every minute of it.",
    "I’m not lazy, I’m just on energy-saving mode.",
    "The problem with candy jokes is they’re either really sweet or just plain corny.",
    "I think I want a job cleaning mirrors. It’s just something I could really see myself doing.",
    "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything.",
    "A termite walks into the bar and asks, ‘Is the bartender here?’",
    "I would tell you a joke about an elevator, but it’s an uplifting experience.",
    "I’m trying to lose weight, but it’s not working. I’ve got too much junk in my trunk.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I don’t always tell dad jokes, but when I do, he laughs.",
    "I’m reading a book about anti-gravity. It’s impossible to put down.",
    "What do you call fake spaghetti? An impasta!",
    "How do you organize a space party? You planet!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "I don’t trust stairs because they’re always up to something.",
    "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
    "I named my dog ‘Five Miles’ so I can say I walk Five Miles every day.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I’m addicted to brake fluid, but I can stop whenever I want.",
    "I used to be a baker, but I couldn't make enough dough.",
    "The difference between a numerator and a denominator is a short line. Only a fraction of people will understand this.",
    "I think I want a job cleaning mirrors. It’s just something I could really see myself doing.",
    "I couldn’t figure out why I’m tired, but then I realized I had been awake for 24 hours.",
    "I used to work for a blanket factory, but it folded.",
    "I used to have a job as a professional cricket player, but I got caught.",
    "I once made a belt out of watches. It was a waist of time.",
    "Why don’t oysters donate to charity? Because they are shellfish.",
    "I can’t trust people who do acupuncture. They’re back stabbers.",
    "I made a pun about the wind but it blows.",
    "I don't understand electricity, but I'm shocked by it.",
    "My friend said he didn’t understand cloning. I told him, 'That makes two of us.'",
    "I once worked at a bakery, but I kneaded a change."
];

async function changeBackground() {
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const memes = data.data.memes;

    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    document.body.style.backgroundImage = `url(${randomMeme.url})`;

    // Update preview section with a random meme and quote
    document.getElementById('meme-preview').style.backgroundImage = `url(${randomMeme.url})`;

    const randomQuote = funnyQuotes[Math.floor(Math.random() * funnyQuotes.length)];
    document.getElementById('meme-quote').innerText = `“${randomQuote}”`;
}

// Change the background every 10 seconds (10000 milliseconds)
setInterval(changeBackground, 10000);

// Change the background once immediately when the page loads
changeBackground();
