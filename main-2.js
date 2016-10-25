jQuery(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    firstLoad = false;
    
  //trigger smooth transition from the actual page to the new one
  $('main'