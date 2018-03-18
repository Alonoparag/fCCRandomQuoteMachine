'There is no need to search; achievement leads to nowhere. It makes no difference at all, so just be happy now! Love is the only reality of the world, because it is all One, you see. And the only laws are paradox, humor and change. There is no problem, never was, and never will be. Release your struggle, let go of your mind, throw away your concerns, and relax into the world. No need to resist life, just do your best. Open your eyes and see that you are far more than you imagine. You are the world, you are the universe; you are yourself and everyone else, too! It\'s all the marvelous Play of God. Wake up, regain your humor. Don\'t worry, just be happy. You are already free!'

var quote1 = "The journey is what brings us happiness not the destination.";
var quote2 = "“There are no ordinary moments.”";
var quote3 =  "“The journey is what brings us happiness not the destination.”"
var quote4 = "“Life has three rules: Paradox, Humor, and Change.”";
var quote5 = "“A warrior does not give up what he loves, he finds the love in what he does”";
var quote6 = "“Everything you\'ll ever need to know is within you; the secrets of the universe are imprinted on the cells of your body.”";
var quote7 = "“you can live a whole life time never being awake.”";
var quote8 = "“Your fears are not walls, but hurdles. Courage is not the absence of fear, but the conquering of it.”";
var quote9 = "“Be happy now, without reason - or you never will be at all.”";
var quote10 = "“Where are you? Here\nWhat time is it? Now\nWhat are you? This moment.”";
var quote11 = "“There is no path to Happiness. Happiness is the path. There is no path to Love. Love is the path. There is no path to Peace. Peace is the path.”";
var quote12 = "“The world's a puzzle; no need to make sense out of it.";
var quote13 = "“I had lost my mind and fallen into my heart.”";
var quote14 = "“The seasons do not push one another; neither do clouds race the wind across the sky. All things happen in their own good time.”";
var quote15 = "“Before you can see the Light, you have to deal with the darkness.”";
var quote16 = "Life comes at us in waves. We can't predict or control those waves, but we can learn to surf”";

// AN ARRAY WOULD PROVIDE AN EASY ACCESS TO THE QUOTES BECAUSE THE QUOTES COULD BE INDEXED BY NUMBER AND ACCESSED RANDOMLY.

var arrQuote = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10,quote11,quote12,quote13, quote14, quote15,quote16];

function quoteGenerator(ev){
  var num = Math.round(Math.random()*15);
  document.getElementById("quotebox").innerHTML =  arrQuote[num];
  //ev.preventDefault();
  // Remove existing iframe
  $('#tweetBtn iframe').remove();
  var tweetBtn = $('<a></a>')
        .addClass('twitter-share-button')
        .attr('href', 'http://twitter.com/share')
        .attr('data-text', arrQuote[num]);
    $('#tweetBtn').append(tweetBtn);
    twttr.widgets.load();
}
