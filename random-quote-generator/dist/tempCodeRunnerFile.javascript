

 
  
        
        const cioranWisdom = {  

            quotePartOne: ['true confessions are written with tears only. But my tears would drown the world, as my inner fire would reduce it to ashes', 'one does not inhabit a country; one inhabits a language. That is our country, our fatherland - and no other', 'we are afraid of the enormity of the possible', 'that a decadent civilization compromises with its disease, cherishes the virus infecting it, loses its self-respect', 'Knowledge subverts love: as we penetrate our secrets, we come to loathe our kind, precisely because they resemble us'],
            
            quotePartTwo: ['that the fact that life has no meaning is a reason to live - moreover, the only one.', 'that a human being is a robot with defects', 'if we had the courage to confront the doubts we timidly conceive about ourselves, none of us would utter an "I" without shame', 'knowledge subverts love: in quoteortion as we penetrate our secrets, we come to loathe our kind, precisely because they resemble us', 'we are so lonely in life that we must ask ourselves if the loneliness of dying is not a symbol of our human existence','my mission is to kill time, and time is to kill me in its turn. How comfortable one is among murderers', 'that every man sleeps a quotehet, and when he wakes there is a little more evil in the world'],
            
            quotePartThree: ['we cannot be normal and alive at the same time', 'not to be born is undoubtedly the best plan of all. Unfortunately, it is within no one’s reach', 'music is the refuge of souls ulcerated by happiness', 'no one recovers from the disease of being born, a deadly wound if there ever was one', 'society is not a disease, it is a disaster. What a stupid miracle that one can live in it', 'speech and silence. We feel safer with a madman who talks than with one who cannot open his mouth', 'one of the greatest delusions of the average man or woman is to forget that life is deaths prisoner']
          }
           
       // random number
       function generateRandomNumber(num) {
        // Gets # from 0 -> num - 1
        return Math.floor(Math.random() * num)
      }

  // Store the 'wisdom' in an array
  let cioranQuote = []
  
  // Iterate over the object
  for(let quote in cioranWisdom) {
    let index = generateRandomNumber(cioranWisdom[quote].length)
  
    // use the object's quoteerties to customize the message being added to cioranWisdom  
    switch(quote) {
      case 'quotePartOne':
        cioranQuote.push(`"The truth is ${cioranWisdom[quote][index]}.`)
        break
      case 'quotePartTwo':
        cioranQuote.push(`And ${cioranWisdom[quote][index]}.`)
        break
      case 'quotePartThree':
        cioranQuote.push(`At the end ${cioranWisdom[quote][index]}."`)
        break
      default:
        cioranQuote.push('Oh, whatever.')
    }
  }
 
  
  function formatQuote(cioranQuote) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    let formatted = cioranQuote.join('\n')
    return formatted
      
  }


console.log(formatQuote(cioranQuote))



/*



// this is to set up the initial quote when the page loads 

let theQuoteAndAuthor = quotesArray[Math.floor(Math.random() * 3)]
console.log(theQuoteAndAuthor)
document.getElementById("quote").innerHTML = theQuoteAndAuthor;




function getRandomQuote() {
  let  theQuoteAndAuthor = quotesArray[Math.floor(Math.random() * 18)] 
  document.getElementById("quote").innerHTML = theQuoteAndAuthor;
  
}

*/