/* 
- INITIALIZE ISOTOPE
- Arguements: ( Parent Container , OPTIONS )
*/ 
const iso = new Isotope( '.filter-container', {
  itemSelector: '.content',
  getSortData: {
    name: '.name'},
  sortBy: 'name',
  layoutMode:'fitRows'
  // layoutMode: 'vertical'
});

// iso.isotope({layoutMode:'vertical'});
// iso.arrange({layoutMode: 'vertical' });

// // list vs grid 
// const gridTrigger = document.querySelector('.grid');
// gridTrigger.addEventListener( 'click', () => {
  
// });

// const listTrigger = document.querySelector('.list');
// listTrigger.addEventListener( 'click', () => {
  
// });


  
  /* 
  - CLICK BUTTON, FILTER CONTENT
  */
  
  // cache filters 
  const filters = document.querySelector('.filters');
  
  // click a filter, then filter content-children
  filters.addEventListener( 'click', function( event ) {
  
    // not `const` because this value changes. use `let`   
    let filterValue = event.target.getAttribute('data-filter');
    // check-check
    console.log(filterValue); 
  
    // Isotope re-arrange content by filtered value
    iso.arrange({ filter: filterValue });
  
  });
  

// SEARCH BAR
// initilize mark
var instance = new Mark(document.querySelector(".container"));
// triggers for highlight
const trigger = document.querySelector('.searchButton');
const trigger2 = document.querySelector('.searchTerm');
const trigger3 = document.querySelector('.container');

// mark search terms when pressing enter
trigger2.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    let input = document.querySelector('.searchTerm').value;
    instance.mark(input);
   // adds class result
  var options = {'className': 'result'};
  instance.mark(input, options);

  // scroll to result
  let elem = document.querySelector('.result');
  let rect = elem.getBoundingClientRect();
  window.scrollTo({
    top: rect.top - 150,
    behavior: 'smooth'
  });
  }
});

// mark search terms when pressing search button
trigger.addEventListener( 'click' , () => {
  let input = document.querySelector('.searchTerm').value;
  // adds class result
  var options = {'className': 'result'};
  instance.mark(input, options);

  // scroll to result
  let elem = document.querySelector('.result');
  let rect = elem.getBoundingClientRect();
  window.scrollTo({
    top: rect.top - 150,
    behavior: 'smooth'
  });

});



// unmark search when click on the page
trigger3.addEventListener( 'click' , () => {
  let input = document.querySelector('.searchTerm').value;
  instance.unmark(input);


});





