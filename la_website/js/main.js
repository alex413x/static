$('.toggle-stuff a').click(function() {
  $this = $(this);
  
  // Ghetto, whatever
  $('link').each(function() {
      
    if ($(this).attr('rel') == 'stylesheet prefetch') {
      $(this).attr('href', $this.data('url'));      
    }
    
  });
  
    return false;
});

