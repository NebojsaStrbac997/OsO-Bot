const ApiClient = require("../api/ApiClient");

async function pic(message, osuApi, userName) {
  if (typeof userName !== "string") return;

  const userInfo = await osuApi.apiCall('/get_user', { u: userName });
  const user = userInfo[0];

  const userPictureResponse = await ApiClient.getUser(user.user_id);

  message.channel.send(userPictureResponse.url);
}



module.exports = pic