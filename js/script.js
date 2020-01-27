$(document).ready(function() {

  var inputMessage = $(".footer__searchbar > .searchbar__input");
  var inputName = $('.aside__header__searchbar').find('.searchbar__input');


  // ↓ eventi on.click ↓

    // ↓ inviando il messaggio tramite l'icona, il focus andrà di nuovo nell'input field del messaggio, in modo da poter subito scrivere ancora ↓
    $('.footer__send').on('click', function() {
      newMessage();
      inputMessage.focus();
    });

    $('.aside__main__chat').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active');
        // $('.primary__cover').removeClass('dis-none');
      }
      else {
        $('.aside__main__chat').removeClass('active');
        $(this).toggleClass('active');
        // $('.primary__cover').addClass('dis-none');
      }

    });
  // ↑ eventi on.click ↑

  // ↓ eventi on.focus ↓

    // ↓ hide e show icona per mandare messaggio se c'è del testo nell'input field e inserisce messaggio nella chat attiva se si preme 'enter' ↓
    inputMessage.on('focus', function() {
      inputMessage.on('keyup', function() {
        if (inputMessage.val().length != 0) {
          $('.footer__rec-voice').addClass('dis-none');
          $('.footer__send').removeClass('dis-none');
          if (event.keyCode === 13) {
            event.preventDefault();
            newMessage();
          }
        } else {
          $('.footer__send').addClass('dis-none');
          $('.footer__rec-voice').removeClass('dis-none');
        }
      });
    });

    // ↓ hide chat che non matchano con il nome inserito nell'input field ↓
    inputName.on('focus', function() {
      inputName.on('keyup', function () {
        var arrayInputName = [];
        var arrayDataName = [];
        for (var i = 0; i < inputName.val().toLowerCase().length; i++) {
        arrayInputName[i] = inputName.val().toLowerCase()[i];
        }
        var filteredInputName = arrayInputName.filter(match);
        function match(element) {
          return element!= ' ' && element!= '-';
        }
        filteredInputName = filteredInputName.join('').toString();
        for (var i = 0; i < $('.aside__main').children().length ; i++) {
          for (var j = 0; j < $('.aside__main > *:nth-of-type('+(i+1)+')').attr('data-name').length; j++) {
            arrayDataName[j] = $('.aside__main > *:nth-of-type('+(i+1)+')').attr('data-name')[j];
          }
          var filteredDataName = arrayDataName.filter(match);
          filteredDataName = filteredDataName.join('').toString();
          if( filteredDataName.includes(filteredInputName) ) {
            $('.aside__main > *:nth-of-type('+(i+1)+')').removeClass('dis-none');
          } else $('.aside__main > *:nth-of-type('+(i+1)+')').addClass('dis-none')
        }
      });
    });

  // ↑ eventi on.focus ↑

});

// ↓ ----- Funzioni ----- ↓

  // ↓ funzione che inserisce un nuovo messaggio nella chat attiva ↓
  function newMessage() {
    $(document).ready(function() {
      var newMessage = $(".footer__searchbar > .searchbar__input").val();
      $(".footer__searchbar > .searchbar__input").val("");
      var templateMessage = $(".template-message").find('.clearfix').clone();
      templateMessage.children().attr('data-type', 'send').children('.message__txt').text(newMessage);
      var date = new Date();
      var hours = parseInt(date.getHours());
      if ( hours < 10 ) hours = '0'+hours;
      var minutes = parseInt(date.getMinutes());
      if ( minutes < 10 ) minutes = '0'+minutes;
      date = hours+':'+minutes;
      templateMessage.find('.message__time').text(date);
      $('.chats-list__chat.active').append(templateMessage);
      var scrollbar = $(".primary__main__chats-list");
      var scrollbarHeight = scrollbar.height();
      $('.primary__main').scrollTop(scrollbarHeight);
      var timer = setTimeout(function () {
        var templateMessage = $(".template-message").find('.clearfix').clone();
        templateMessage.children().attr('data-type','receive').children('.message__txt').text('Øk');
        templateMessage.find('.message__time').text(date);
        $('.chats-list__chat.active').append(templateMessage);
        $('.primary__main').scrollTop(scrollbarHeight);
      },1*1000);
    });
  }

// ↑ ------ Funzioni ------- ↑
