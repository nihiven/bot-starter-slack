/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

var wordfilter = require('wordfilter');

module.exports = function(controller) {
  controller.hears(['^man (.*)','^man'], 'direct_message,direct_mention', function(bot, message) {
    bot.replyWithTyping(message, 'I am just a man.')
  });

  controller.hears('interactive', 'direct_message', function(bot, message) {

    bot.reply(message, {
      attachments:[{
        title: 'Do you want to interact with my buttons?',
        callback_id: '123',
        attachment_type: 'default',
        actions: [{
          "name":"yes",
          "text": "Yes",
          "value": "yes",
          "type": "button",
        }, {
          "name":"no",
          "text": "No",
          "value": "no",
          "type": "button",
        }]
      }]
    });
  });
};
