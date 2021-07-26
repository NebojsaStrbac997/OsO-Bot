require("dotenv").config();
const CommandsClient = require("./commands/CommandsClient");
const osu = require('node-osu');
const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

const osuApi = new osu.Api(process.env.OSU_API_KEY, {
  notFoundAsError: true,
  completeScores: false,
  parseNumeric: false
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on('message', (message) => {
  if (message.author.bot === true) return;

  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    const userInput = message.content.split(" ")[1];
    switch (CMD_NAME) {
      case "pic":
        CommandsClient.pic(message, osuApi, userInput)
        break;
      case "profile":
        CommandsClient.profile(message, osuApi, userInput)
        break;
      case "score":
        CommandsClient.scores(messag, osuApi, userInput)
        break;
      default:
        message.channel.send("Not found :/")
        break;
    }
  }

});



client.login(process.env.DISCORDJS_BOT_TOKEN);
