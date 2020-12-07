
  
  function toggler(selector, delay) {
  let elems = $(selector),
      length = elems.length-1,
      i = 0;
  
  function toggleTo(index) {
    elems.removeClass('scriptbeckgr');
    $(elems[index]).addClass('scriptbeckgr');
  }
  
  setInterval(function(){
    toggleTo(i === length ? i = 0 : ++i)
  }, delay);
}

toggler('.block6__punkt', 2000);







