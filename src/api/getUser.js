const fetch = require("node-fetch");

async function getUser(userId) {
  const response = fetch(`http://s.ppy.sh/a/${userId}`);
  return response;
}

module.exports = getUser;