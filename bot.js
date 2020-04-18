const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botsettings.prefix;
const request = require("request");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  if (botsettings.activity.streaming == true) {
    bot.user.setActivity("Type 'Gay'");
    bot.user.setStatus("online");
  }

  try {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch (e) {
    console.log(e.stack);
  }
});

bot.on('message', message => {
  
  if(message.author.bot) return;
  
  if(message.content.toLowerCase() === 'gay')
    message.channel.send("Hey gay! My name is LarsBot")
  
  if(message.content.toLowerCase() === 'pedo')
    message.channel.send("Screenshotted and sent to the fbi! -LarsBot")
  
  if(message.content.toLowerCase() === 'lars')
    message.channel.send("a god -LarsBot")
  
  if(message.content.toLowerCase() === 'opal')
    message.channel.send("a cuck -LarsBot")
  
  if(message.content.toLowerCase() === '@lars')
    message.channel.send("a god -LarsBot")
  
  if(message.content.toLowerCase() === '@opal')
    message.channel.send("a cuck -LarsBot")
  
  if(message.content.toLowerCase() === 'underage')
    message.channel.send("Screenshotted and sent to the fbi! -LarsBot")
  
  if(message.content.toLowerCase() === 'dad bot')
    message.channel.send("ewwww -LarsBot")
  
  if(message.content.toLowerCase() === 'owo')
    message.channel.send("OwO? What's this -LarsBot")
  
 //LarsBot responses^^^^^^
  
});


bot.login(botsettings.token);
