const fetch = require("node-fetch");

async function getMap(beatmap) {
  const response = fetch(`http://s.ppy.sh/api/get_beatmaps/${beatmap}`);
  return response;
}

module.exports = getMap;