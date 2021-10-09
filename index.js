import { DISCORD_TOKEN } from "./constants.js";
import { Client, Intents } from "discord.js";
import { login } from "./services/awful/index.js";
import commands from "./commands/index.js";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
});
login();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const {
    commandName,
    user: { username },
  } = interaction;

  const command = commands[commandName];

  console.log(`${username} invoked ${commandName} command`);

  command?.execute(interaction, client);
});

client.login(DISCORD_TOKEN);
