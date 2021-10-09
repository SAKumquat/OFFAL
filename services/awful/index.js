import got from "got";
import cheerio from "cheerio";
import { CookieJar } from "tough-cookie";
import {
  SOMETHINGAWFUL_PASSWORD_HASH,
  SOMETHINGAWFUL_USERNAME,
} from "../../constants.js";

const cookieJar = new CookieJar();

export const login = async () => {
  try {
    await got(
      "https://forums.somethingawful.com/account.php?action=loginform",
      {
        method: "POST",
        cookieJar,
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: `action=login&username=${SOMETHINGAWFUL_USERNAME}&password=${SOMETHINGAWFUL_PASSWORD_HASH}&next=%2F`,
      }
    );
  } catch (error) {
    console.log("Failed logging in to Something Awful dot com");
    throw new Error("Failed to log in to Something Awful " + error);
  }
};

export const checkSomethingAwfulProfile = async (userId, offalCode) => {
  const profileURL = `https://forums.somethingawful.com/member.php?action=getinfo&userid=${userId}`;
  let response;
  try {
    response = await got(profileURL, { cookieJar });
  } catch (error) {
    console.error(`Failed fetching profile for ${userId}`);
    throw new Error("Failed to retrieve Something Awful Profile " + error);
  }
  const $ = cheerio.load(response.body);
  const hasOffalCode = $(".additional > dd")
    .toArray()
    .some((node) => {
      return $(node).text() === offalCode;
    });

  return hasOffalCode;
};
