$(document).ready(function() {
  var input = $(".footer__searchbar > .searchbar__input");
  console.log(input);
  input.on("keydown", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      var newMessage = $(".footer__searchbar > .searchbar__input").val();
      $(".footer__searchbar > .searchbar__input").val("");
      var templateMessage = $(".primary__main > *:first-child").clone();
      templateMessage.children().children().html(newMessage);
      $('.primary__main').append(templateMessage);
      var element = $(".primary__main");
      element.scrollTop(10000);
      var timer = setTimeout(function () {
        $('.primary__main').append(templateMessage);
        var templateMessage = $(".primary__main > *:nth-of-type(2)").clone();
        templateMessage.children().children().html('Øk');
        $('.primary__main').append(templateMessage);
        var element = $(".primary__main");
        element.scrollTop(10000);
      },1*1000);
    }
  });
});
