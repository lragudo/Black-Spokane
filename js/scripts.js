/* 
- INITIALIZE ISOTOPE
- Arguements: ( Parent Container , OPTIONS )
*/ 
const iso = new Isotope( '.filter-container', {
    itemSelector: '.content',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name'},
    sortBy: 'name',
  });

  
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
  
  