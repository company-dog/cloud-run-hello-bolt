const { App } = require("@slack/bolt");
require("dotenv").config();

console.log(process.env.SLACK_BOT_TOKEN);

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  const port = process.env.PORT || 8080;
  await app.start(port);
  console.log(`⚡ Bolt app is running!`);
})();
