/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

var wordfilter = require('wordfilter');

module.exports = function(controller) {

  controller.hears('lunch', 'direct_message', function(bot, message) {
    bot.reply(message, {
      attachments:[{
        title: 'Let\'s Do Lunch',
        callback_id: '123',
        attachment_type: 'default',
        actions: [
          {
            "name":"menu",
            "text": "Who's going?",
            "value": "list-show",
            "type": "button",
          },
          {
            "name":"menu",
            "text": "Quick Pick",
            "value": "rand-all",
            "type": "button",
          },
          {
            "name":"menu",
            "text": "Edit Lists",
            "value": "list-edit",
            "type": "button",
          },
        ]
      }]
    });
  });

  controller.on('interactive_message_callback', function(bot, message) {

    if (message.actions[0].name === "who") {
      va = message.actions[0].value;

      if (va === "everyone") {
        bot.reply(message, "Five Guys");
      }

      if (va === "no-jb") {
        bot.reply(message, "Greek");
      }

      if (va === "no-zack") {
        bot.reply(message, "PIZZA");
      }
    } // if

    if (message.actions[0].name === "menu") {
      if (message.actions[0].value === "list-show")
        bot.replyInteractive(message, {
          text: '...',
          attachments: [{
            title: 'My buttons',
            callback_id: '123',
            attachment_type: 'default',
            actions:
            [
              {
                "text": "Everyone",
                "name": "who",
                "value": "everyone",
                "type": "button",
              },
              {
                "text": "No JB",
                "name": "who",
                "value": "no-jb",
                "type": "button",
              },
              {
                "text": "No Zack",
                "name": "who",
                "value": "no-zack",
                "type": "button",
              },
            ]
          }]
        }); // reply
      }
    } // if

  });

};
