$(document).ready(function() {
  var inputMessage = $(".footer__searchbar > .searchbar__inputMessage");
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

  $(inputMessage).on('focus', function() {
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
  var inputName = $('.aside__header__searchbar').find('.searchbar__input');
  inputName.on('keydown', function () {
    for (var i = 0; i < $('.aside__main').children().length ; i++) {
      if( $('.aside__main > *:nth-of-type('+(i+1)+')').attr('data-name').includes(inputName.val().toLowerCase()) ) {
        $('.aside__main > *:nth-of-type('+(i+1)+')').removeClass('dis-none');
      } else $('.aside__main > *:nth-of-type('+(i+1)+')').addClass('dis-none')
    }
    // console.log( $('.aside__main > *:nth-of-type('+(contatore+1)+')').attr('data-name') );
    // console.log($('.aside__main > *:nth-of-type('+(contatore+1)+')'));
  });
  function newMessage() {
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
    $('.primary__main').append(templateMessage);
    var scrollbar = $(".primary__main");
    scrollbar.scrollTop(10000);
    var timer = setTimeout(function () {
      var templateMessage = $(".template-message").find('.clearfix').clone();
      templateMessage.children().attr('data-type','receive').children('.message__txt').text('Øk');
      templateMessage.find('.message__time').text(date);
      $('.primary__main').append(templateMessage);
      var element = $(".primary__main");
      element.scrollTop(10000);
    },1*1000);
  }
});
