import { checkSomethingAwfulProfile } from "../services/awful/index.js";
import {
  getOffalCodeByDiscordId,
  getExistingUsers,
  bindUserToDiscordId,
} from "../services/db/index.js";
import { ROLE_NAME } from "../constants.js";

const commandName = "auth";
const description =
  "Checks a given user's Something Awful profile for their OFFAL code";

const execute = async (interaction, client) => {
  const { id: discordId } = interaction.member.user;
  const userId = interaction.options.getString("userid");
  const { count: existingUsers } = await getExistingUsers(userId, discordId);
  if (existingUsers > 0) {
    return interaction.reply({
      content:
        "Sorry, this Something Awful User Id has already been bound to a discord user.\nPlease contact an administrator.",
      ephemeral: true,
    });
  }

  const { offal_code: offalCode } = await getOffalCodeByDiscordId(discordId);
  const isValidated = await checkSomethingAwfulProfile(userId, offalCode);
  if (isValidated) {
    await bindUserToDiscordId(discordId, offalCode, userId);
    const role = interaction.guild.roles.cache.find(
      (role) => role.name === ROLE_NAME
    );
    await interaction.member.roles.add(role);
    return interaction.reply({
      content: "Congratulations, you're authenticated!",
      ephemeral: true,
    });
  } else {
    return interaction.reply({
      content: "Couldn't find your OFFAL Code in your profile, sorry.",
      ephemeral: true,
    });
  }
};

export default {
  commandName,
  description,
  execute,
};
