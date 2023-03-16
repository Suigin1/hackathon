console.log("i'm here");
// document.addEventListener('DOMContentLoaded', () => {
  console.log("i'm here too");
  const head = document.querySelector('head');

  const link = document.createElement('link');
  link.setAttribute('href', '/styles.css');
  link.setAttribute('rel', 'stylesheet');
  head.append(link);

  //grabbing all p tags with query selector
  const pars = document.querySelectorAll('p');
  console.log(pars);
  pars.forEach(par => {
    //for each p tag, grab all inner text
    console.log(par);
    const innerT = par.innerText;
    //delete content of p
    par.innerText = '';
    //parse inner text into individual words using split
    const words = innerT.split(' ');
    console.log(words);
    // take split array, pass into assign function
    assignClass(par, words)
  })
  
  //params: par tag, split word array
  //assign class should iterate over split array words
    
      //for each word, assign function should create two spans, slice each word into
      //two strings. First string is first 3 chars, second string is rest of chars plus
      //a space
  
      //assign first string to content of first span
      //set attribute of first span to class: to-bold
  
      //assign second string to content of second span
      //set attribute of second span to class: to-Normal
    
      //append each span to paragraph tag
// });

function assignClass(p, arr) {
    /*
    Input -> 
    p > paragraph element from webpage
    arr > array of words in the p tag

    Output ->
    nothing

    breaks each word into 2 separate spans, assigning a bolded and
    unbolded class to the spans, and reinserting them into the 
    paragraph element
    */
    for (const el of arr) {
        let pivot = Math.ceil(el.length * 0.4);
        let boldSpan = document.createElement('span');
        boldSpan.className = 'tobold';
        boldSpan.innerHTML = el.slice(0, pivot);
        let regSpan = document.createElement('span');
        regSpan.className = 'unbold';
        regSpan.innerHTML = el.slice(pivot) + ' ';
        p.appendChild(boldSpan);
        p.appendChild(regSpan);
    }
}