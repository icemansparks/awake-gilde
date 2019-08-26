$(document).ready(() => {
  //$('.contentblock').hide();
  $('.contentblock').removeClass('is-visible');
  //$('.contentblock.home').show();
  $('.contentblock.home').addClass('is-visible');
  
  $('.navlink').on('click', (e) => {
    const contentblock = $(e.target).data('contentblock');
    
    //$('.contentblock').hide();
    $('.contentblock').removeClass('is-visible');
    //$('.contentblock.'+contentblock).show();
    $('.contentblock.'+contentblock).addClass('is-visible');
  });

// init memberlist?

});