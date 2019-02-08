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

};
