'use strict';
const util = require('util');
const BootBot = require('bootbot');
//Setup Bot Webservice
const bot = new BootBot({
  accessToken: 'YOUR_PAGE_ACCESS_TOKEN',
  verifyToken: 'YOUR_WEBHOOK_HUB_CHALLENGE',
  appSecret: 'YOUR_FACEBOOK_APP_SECRET_KEY'
});

bot.on('message', (payload, chat) => {
  const text = payload.message.text;
  chat.say(`Echo: ${text}`);
  chat.say({
		attachment: 'image',
		url: 'https://media.giphy.com/media/LqI4EGEBQJnCU/giphy.gif'
	});
  console.log(util.inspect(payload,  {depth: null, colors: true}));
});

bot.start();
