
/* бЛОК 3 СПИСОК */

function toggler(selector, delay) {
  let elems = $(selector),
      length = elems.length-1,
      i = 0;
  
  function toggleTo(index) {
    elems.removeClass('scriptwar');
    $(elems[index]).addClass('scriptwar');
  }
  
  setInterval(function(){
    toggleTo(i === length ? i = 0 : ++i)
  }, delay);
}

toggler('.block3__list1', 1500);


