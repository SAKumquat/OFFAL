import {
  getOffalCodeByDiscordId,
  insertOffalCode,
} from "../services/db/index.js";
import { v4 as uuid } from "uuid";

const commandName = "generate";
const description =
  "Generates an OFFAL code to be placed in your Something Awful Profile.";
// add to SQLITE with discordId+OFFAL code?

const execute = async (interaction) => {
  const { id: discordId } = interaction.member.user;
  let { offal_code: offalCode } = await getOffalCodeByDiscordId(discordId);
  if (!offalCode) {
    offalCode = uuid();
    await insertOffalCode(discordId, offalCode);
  }

  interaction.reply({
    content: `OFFAL code: ${offalCode}\nPlease enter this in the Location field of your Something Awful Profile.`,
    ephemeral: true,
  });
};

export default {
  commandName,
  description,
  execute,
};
