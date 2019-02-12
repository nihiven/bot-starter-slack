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
            "name":"yes",
            "text": "Random Place",
            "value": "rand-show",
            "type": "button",
          },
          {
            "name":"no",
            "text": "Quick Pick",
            "value": "rand-all",
            "type": "button",
          },
          {
            "name":"no",
            "text": "Edit Lists",
            "value": "list-edit",
            "type": "button",
          },
        ]
      }]
    });
  });

  controller.on('interactive_message_callback', function(bot, message) {
    bot.replyInteractive(message, {
      text: '...',
      attachments: [{
        title: 'My buttons',
        callback_id: '123',
        attachment_type: 'default',
        actions:
        [
          {
            "name":"yes",
            "text": "Yes!",
            "value": "yes",
            "type": "button",
          },
          {
            "text": "No!",
            "name": "no",
            "value": "delete",
            "style": "danger",
            "type": "button",
            "confirm":
            {
              "title": "Are you sure?",
              "text": "This will do something!",
              "ok_text": "Yes",
              "dismiss_text": "No"
            }
          },
        ]
      }]
    });
  });

};
