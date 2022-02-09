  /* array of collors to choose from */
var colors = [
  '#A13535',
  '#A1359D',
  '#4A35A1',
  '#3551A1',
  '#3584A1',
  '#35A179',
  '#6BA135',
  '#9DA135',
  '#A17935',
  '#A13C35',
  '#574ED7',
  '#4ED764',
  '#F0233E',
  '#68B95B',
  '#2D59EC'
];
  /* array of quotes to choose from */
var quotes = [
  ['If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.','Oprah Winfrey'],
  ['Life is what we make it, always has been, always will be.','Grandma Moses'],
  ['Every strike brings me closer to the next home run.','Babe Ruth'],
  ['A truly rich man is one whose children run into his arms when his hands are empty.','Unknown'],
  ['Education costs money. But then so does ignorance.','Sir Claus Moser'],
  ['The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.','Jesse Owens'],
  ['If the wind will not serve, take to the oars.',' Latin Proverb'],
  ['Every child is an artist. The problem is how to remain an artist once he grows up.','Pablo Picasso'],
  ['If the wind will not serve, take to the oars.','Latin Proverb'],
  ['There are no traffic jams along the extra mile.','Roger Staubach'],
  ['You miss 100% of the shots you don’t take.','Wayne Gretzky']
];

  /* function on button click */
function change() {
    /* random quote from array */
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
  document.getElementById("text").innerHTML = randomQuote[0];
  document.getElementById("author").innerHTML = randomQuote[1];    
  
  
  /* twitter link change */
  document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text="+randomQuote[0];
  
  
  /* random color from array */
  let randomColor = colors[Math.floor(Math.random() * colors.length)]; 
  document.body.style.backgroundColor = randomColor;
  document.body.style.color = randomColor;
  document.getElementById("new-quote").style.backgroundColor= randomColor;
}  

  /* function call on button click */
document.getElementById('new-quote').onclick = change;   

