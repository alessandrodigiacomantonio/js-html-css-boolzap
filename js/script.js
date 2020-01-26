$(document).ready(function() {
  var input = $(".footer__searchbar > .searchbar__input");
  input.on("keydown", function(event) {
    if (event.keyCode === 13 && $(".footer__searchbar > .searchbar__input").val().length != 0) {
      event.preventDefault();
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
});
