const ApiClient = require("../api/ApiClient");

async function pic(message, osuApi, userInput) {
  if (typeof userInput !== "string") return;

  const userInfo = await osuApi.apiCall('/get_user', { u: userInput });
  const user = userInfo[0];

  const userPictureResponse = await ApiClient.getUser(user.user_id);

  message.channel.send(userPictureResponse.url);
}



module.exports = pic