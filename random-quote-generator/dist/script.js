var quotesArray = [
  ["\"By all appearances our life is a spark of light between one eternal darkness and another.\"", "Alan W. Watts"], 
  ["\"Trying to define yourself is like trying to bite your own teeth.\"", "Alan W. Watts"],
  ["\"You are that vast thing that you see far, far off with great telescopes.\"", "Alan W. Watts"],
  ["\"I owe my solitude to other people.\"", "Alan W. Watts"],              
  ["\"You and I are all as much continuous with the physical universe as a wave is continuous with the ocean.\"", "Alan W. Watts"], 
  ["\"We must let go of the life we have planned, so as to accept the one that is waiting for us.\"", "Joseph Campbell"],       
  ["\"Follow your bliss and the universe will open doors where there were only walls.\"", "Joseph Campbell"],              
  ["\"Computers are like Old Testament gods; lots of rules and no mercy.\"", "Joseph Campbell"],              
  ["\"It is by going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure.\"", "Joseph Campbell"],
  ["\"I think the person who takes a job in order to live - that is to say, for the money - has turned himself into a slave.\"", "Joseph Campbell"],
  ["\"The constant assertion of belief is an indication of fear.\"", "Jiddu Krishnamurti"],
  ["\"One is never afraid of the unknown; one is afraid of the known coming to an end.\"", "Jiddu Krishnamurti"],
  ["\"Religion is the frozen thought of man out of which they build temples.\"", "Jiddu Krishnamurti"],
  ["\"It is truth that liberates, not your effort to be free.\"", "Jiddu Krishnamurti"],
  ["\"If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.\"", "Jiddu Krishnamurti"],
  ["\"Happiness is the absence of the striving for happiness.\"", "Zhuang Zhou"],
  ["\"The wise man knows that it is better to sit on the banks of a remote mountain stream than to be emperor of the whole world.\"", "Zhuang Zhou"],
  ["\"Rewards and punishments are the lowest form of education.\"", "Zhuang Zhou"],
  ["\"Life and death, and existence and non-existence are one.\"", "Zhuang Zhou"],
  ["\"I dreamed I was a butterfly, flitting around in the sky; then I awoke. Now I wonder: Am I a man who dreamt of being a butterfly, or am I a butterfly dreaming that I am a man?\"", "Zhuang Zhou"],
  ["\"To see a world in a grain of sand and heaven in a wild flower, Hold infinity in the palm of your hand and eternity in an hour.\"", "William Blake"],
  ["\"It is easier to forgive an enemy than to forgive a friend.\"", "William Blake"],
  ["\"You never know what is enough unless you know what is more than enough.\"", "William Blake"],
  ["\"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.\"", "William Blake"],
  ["\"The weak in courage is strong in cunning.\"", "William Blake"],
                ];
/* this is to set up the initial quote when the page loads */
var theQuoteAndAuthor = quotesArray[Math.floor(Math.random() * 25)]
document.getElementById("quote").innerHTML = theQuoteAndAuthor[0];
document.getElementById("author").innerHTML = theQuoteAndAuthor[1];

/* this is to randomly choose a quote when the button is pushed */
function getRandomQuote() {
  var theQuoteAndAuthor = quotesArray[Math.floor(Math.random() * 25)]
  document.getElementById("quote").innerHTML = theQuoteAndAuthor[0];
  document.getElementById("author").innerHTML = theQuoteAndAuthor[1];
  var twitterQuote = theQuoteAndAuthor[0].replace(/"/g,'').replace(/;/g,'%3B') + ' - ' + theQuoteAndAuthor[1];
  document.getElementById('tweetDiv').innerHTML = '<a href="https://twitter.com/intent/tweet?text=' + twitterQuote + '" class="fa fa-twitter" target="_blank"> Tweet This</a>';
}