$( function() {
    $( "#char-search" ).autocomplete({
      source: marvelChars,
      minLength: 1,
      select: function( event, ui){
        $("#char-search").val(ui.item.value);
  
        return false;
      }
    });
  
  } );