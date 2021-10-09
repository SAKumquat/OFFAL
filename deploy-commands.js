import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { CLIENT_ID, DISCORD_TOKEN, GUILD_ID } from "./constants.js";
import commands from "./commands/index.js";

const { auth, generate } = commands;

const discordCommands = [
  new SlashCommandBuilder()
    .setName(auth.commandName)
    .setDescription(auth.description)
    .addStringOption((option) =>
      option
        .setName("userid")
        .setDescription(
          "The Something Awful userId of the user to be authorized."
        )
    ),
  new SlashCommandBuilder()
    .setName(generate.commandName)
    .setDescription(generate.description),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(DISCORD_TOKEN);

rest
  .put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: discordCommands,
  })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
