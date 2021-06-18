const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv/config");

const first = "a";
const last = "z";

const getAlldata = async () => {
  const dataJson = [];
  for (let i = first.charCodeAt(0); i <= last.charCodeAt(0) + 1; i += 1) {
    paramsQuery = String.fromCharCode(i);
    const url = `https://api.gotinder.com/v2/profile/autocomplete?locale=vi&q=${paramsQuery}}&type=school`;
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "x-auth-token": process.env.tinder_token,
        "Content-Type": "application/json",
        "accept-language":
          "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
      },
    })
      .then((res) => res.json())
      .then((body) => body.data.results)
      .catch((err) => err);
    dataJson.push(data);
  }
  return dataJson;
};

(async function () {
  // eslint-disable-next-line prefer-const
  let result = await getAlldata();
  const data = JSON.stringify(Array.prototype.concat([], ...result));
  fs.writeFileSync("./src/backup/data/College.json", data);
})();
