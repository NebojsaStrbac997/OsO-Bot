require("dotenv").config();
const CommandsClient = require("./commands/CommandsClient");
const osu = require('node-osu');
const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

const osuApi = new osu.Api(process.env.OSU_API_KEY, {
  // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
  notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
  completeScores: false, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
  parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
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

    const userName = message.content.split(" ")[1];
    switch (CMD_NAME) {
      case "pic":
        CommandsClient.pic(message, osuApi, userName)
        break;
      case "profile":
        CommandsClient.profile(message, osuApi, userName)
        break;
      default:
        message.channel.send("Not found :/")
        break;
    }
  }

});



client.login(process.env.DISCORDJS_BOT_TOKEN);
