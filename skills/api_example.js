/*
2019-02-08: jb - the beginning
*/

var request = new XMLHttpRequest();

module.exports = function(controller) {
  dataz = "nada";

  controller.hears(['^man (.*)','^man'], 'direct_message,direct_mention', function(bot, message) {
    bot.replyWithTyping(message, 'Dataz: ' + dataz);
  });

};
