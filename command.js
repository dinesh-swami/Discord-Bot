
require("dotenv").config();
const loginId = process.env.LOGINID;
const CLIENTID = process.env.CLIENTID;

const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "create",
    description: "Create a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(loginId);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationCommands(CLIENTID),{ body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();