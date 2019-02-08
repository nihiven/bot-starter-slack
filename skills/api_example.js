/*
2019-02-08: jb - the beginning
*/

var wordfilter = require('wordfilter');
var request = new XMLHttpRequest();

module.exports = function(controller) {
  dataz = "nada";

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    dataz = data.title;
  }

  // Send request
  request.send();

  controller.hears(['^man (.*)','^man'], 'direct_message,direct_mention', function(bot, message) {
    bot.replyWithTyping(message, 'Dataz: ' + dataz);
  });

};
