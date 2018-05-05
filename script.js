$(document).ready(function(){

  var username = '';
  var messages = [];

  // добавление нового сообщения
  var newMessage = function(message) {
    var dtMes = new Date();
    var timeMes = dtMes.getHours() + ":" + dtMes.getMinutes();
    var info = timeMes + " - " + username;

    messages.push(message + '/' + username + '/' + timeMes);
    $("#chat").append("<div class='myMessage'>" + message + "<br/>" + "<small class='myInfo'>" + info + "</small>" + "</div>");
  }
  
  // вызов анимации для перехода в чат
  var animateStart = function() {

    $("#field").animate({
      bottom: '-100%',
    },500, function(){});
    $("#blackBox").animate({
      height: '7%',
    },500, function(){});
    $("#icon").animate({
      top: '-100%',
    },500, function(){});
    setTimeout(function(){
      $("#topPanel").animate({
        top: '0'
      }, 500, function(){});
      $("#messageField").animate({
        bottom: '0'
      }, 500, function(){});
    }, 500);

    var dt = new Date();
    var time = "Today at " + dt.getHours() + ":" + dt.getMinutes();
    $("#time").html(time);

    setTimeout(function(){
      $("#chat").fadeIn(500);
    }, 500);

    newMessage('Hey there!');
    newMessage('Type something');
  }

  // войти как гость
  $("#startGuest").on("click", function(e){
    e.preventDefault();

    username = 'Guest';
    animateStart();
  });

  // войти под выбранным ником
  $("#startChat").on("click", function(e){
    e.preventDefault();

    username = $("#username").val();
    if (!username || username == '') {
      username = 'Guest';
    }
    animateStart();
  });

  // отпраить сообщение
  $("#send").on("click", function(e){
    e.preventDefault();

    var mes = $("#message").val();
    newMessage(mes);
    $("#message").val('');
  });

  // реализация функционала при нажатии на Enter
  $("#message").on("keydown", function(e){
    if (e.which == 13) {
      e.preventDefault();

      var mes = $("#message").val();
      newMessage(mes);
      $("#message").val('');
    }
  });
  $("#username").on("keydown", function(e){
    if (e.which == 13) {
      e.preventDefault();

      username = $("#username").val();
      if (!username || username == '') {
        username = 'Guest';
      }
      animateStart();
    }
  });
});