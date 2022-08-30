var quoteArray = [
    {author: "Jim Rohn", 
    quote: "Beware of what you become in pursuit of what you want."
   },
   {author: "Epictetu", 
    quote: "It\'s not what happens to you, but how you react to it that matters."
   },
   {author: "Frank Si atra", 
    quote: 'The best revenge is massive success.'
   },
   {author: "Wayne Gr tzy", 
    quote: "You miss 100% of the shots you don't take."
   },
   {author: "Nelson M ndela", 
    quote: "Resentment is like drinking poison and waiting for your enemies to die."
   },
   {author: "Elbert H bbard", 
    quote: "Do not take life too seriously. You will not get out alive."
   },
];
 


function selectQuote() {

  var select = Math.floor(Math.random()*quoteArray.length);
  document.getElementById('quote').innerHTML = '"'+ quoteArray[select].quote + '"';
  document.getElementById('author').innerHTML = '--' + quoteArray[select].author;


}