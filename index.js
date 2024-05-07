const request = require('request');

module.exports = async function sendMessage(outputText) {
  const options = {
    method: "GET",
    url: `https://notifku.my.id/send`,
    params: {
      number: "000",
      to: "6285255646434@s.whatsapp.net",
      type: "chat",
      message: encodeURIComponent(outputText)
    }
  };

  return await request(options);
}
