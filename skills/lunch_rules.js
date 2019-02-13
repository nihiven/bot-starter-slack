/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

var wordfilter = require('wordfilter');

module.exports = function(controller) {

  controller.hears('lunch', 'direct_message', function(bot, message) {
    showMenu(bot, message);
  });

  controller.on('interactive_message_callback', function(bot, message) {
    _n = message.actions[0].name;
    _v = message.actions[0].value;

    if (_n == "who") {
      randomPlace(bot, message, _v);
    }

  });

};

function randomPlace(bot, message, list) {
  if (list == "pick-all") {
    bot.reply(message, "Five Guys");
  }

  if (list == "pick-nojb") {
    bot.reply(message, "Greek");
  }

  if (list == "pick-nozack") {
    bot.reply(message, "PIZZA");
  }
}

function showMenu(bot, message) {
  bot.reply(message, {
    attachments:[{
      title: 'Let\'s Do Lunch',
      callback_id: '123',
      attachment_type: 'default',
      actions: [
        {
          "name":"who",
          "text": "Everyone",
          "value": "pick-all",
          "type": "button",
        },
        {
          "name":"who",
          "text": "No JB",
          "value": "pick-nojb",
          "type": "button",
        },
        {
          "name":"who",
          "text": "No Zack",
          "value": "pick-nozack",
          "type": "button",
        },
      ]
    }]
  });
}
