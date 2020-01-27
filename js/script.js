$(document).ready(function() {
  var inputMessage = $(".footer__searchbar > .searchbar__input");
  var inputName = $('.aside__header__searchbar').find('.searchbar__input');

  inputMessage.on("keydown", function(event) {
    if (event.keyCode === 13 && inputMessage.val().length != 0) {
      event.preventDefault();
      newMessage();
    }
  });
  $('.footer__send').on('click', function() {
    newMessage();
    inputMessage.focus();
  });

  inputMessage.on('focus', function() {
    var hasMessageText = setInterval(function () {
      if (inputMessage.val().length != 0) {
        $('.footer__rec-voice').addClass('dis-none');
        $('.footer__send').removeClass('dis-none');

      } else {
        $('.footer__send').addClass('dis-none');
        $('.footer__rec-voice').removeClass('dis-none');
      }
    },100);
  });

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

});
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
