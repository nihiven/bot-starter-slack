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

    if (message.actions[0].name == "who") {
      va = message.actions[0].value;
      randomPlace(bot, message, va);
    }

    if (message.actions[0].name == "menu") {
      if (message.actions[0].value == "list-show") {
        showList(box, message)
      }
    }

  });

};

function randomPlace(bot, message, list) {
  if (list == "everyone") {
    bot.reply(message, "Five Guys");
  }

  if (list == "no-jb") {
    bot.reply(message, "Greek");
  }

  if (list == "no-zack") {
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
}

function showLists(bot, message) {
  bot.replyInteractive(message, {
    text: '...',
    attachments: [{
      title: 'Who is going?',
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
