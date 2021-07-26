const { DiscordAPIError } = require("discord.js");
const { Beatmap } = require("node-osu");
const ApiClient = require("../api/ApiClient");

async function score(message, osuAPI, map) {

  const map = await osuAPI.apiCall('get_beatmap', { b: Beatmap })







}

module.exports = score;