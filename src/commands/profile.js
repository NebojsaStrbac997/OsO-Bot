const { DiscordAPIError } = require("discord.js");
const ApiClient = require("../api/ApiClient");

async function profile(message, osuApi, userInput) {
  if (typeof userInput !== "string") return;

  const userInfo = await osuApi.apiCall('/get_user', { u: userInput });
  const user = userInfo[0];

  message.channel.send(`
  userInput: ${user.userInput}
  Rank: ${user.pp_rank}
  PP: ${user.pp_raw}
  Playcount: ${user.playcount}
  Ranks: SSHD:${user.count_rank_ssh}    SS:${user.count_rank_ss}    S:${user.count_rank_s}    SHD:${user.count_rank_sh}   A:${user.count_rank_a}

  Link to user profile: https://osu.ppy.sh/users/${user.user_id}
  `);

}
module.exports = profile