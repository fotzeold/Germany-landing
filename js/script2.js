

/* бЛОК 5 стрелка */


function toggler(selector, delay) {
  let elems = $(selector),
      length = elems.length-1,
      i = 0;
  
  function toggleTo(index) {
    elems.removeClass('scriptcircle');
    $(elems[index]).addClass('scriptcircle');
  }
  
  setInterval(function(){
    toggleTo(i === length ? i = 0 : ++i)
  }, delay);
}

toggler('.block5__circle', 1500);






