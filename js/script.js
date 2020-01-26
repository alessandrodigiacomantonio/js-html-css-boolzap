$(document).ready(function() {
  var input = $(".footer__searchbar > .searchbar__input");
  input.on("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var newMessage = $(".footer__searchbar > .searchbar__input").val();
      $(".footer__searchbar > .searchbar__input").val("");
      var templateMessage = $(".template-message").find('.clearfix').clone();
      templateMessage.children().attr('data-type', 'send').children('.message__txt').text(newMessage);
      $('.primary__main').append(templateMessage);
      var scrollbar = $(".primary__main");
      scrollbar.scrollTop(10000);
      var timer = setTimeout(function () {
        // $('.primary__main').append(templateMessage);
        var templateMessage = $(".template-message").find('.clearfix').clone();
        templateMessage.children().attr('data-type','receive').children('.message__txt').text('Øk');
        $('.primary__main').append(templateMessage);
        var element = $(".primary__main");
        element.scrollTop(10000);
      },1*1000);
    }
  });
});
