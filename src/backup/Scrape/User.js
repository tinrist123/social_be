const fetch = require("node-fetch");
const { dataJson } = require("../data/users.json");
const fs = require("fs");

require("dotenv/config");

url = `https://api.ymeet.me/online_users?paging_model[page_size]=1000&paging_model[page_index]=1&platform=web`;

let bearer = "Bearer " + process.env.ymeetme_token;

function add(arr, user) {
  const found = arr.some((el) => {
    return el.user_id === user.user_id;
  });

  if (!found) {
    arr.push(user);
  }

  return arr;
}

fetch(url, {
  method: "GET",
  headers: {
    Authorization: bearer,
    "Content-Type": "application/json",
  },
})
  .then((responseJson) => responseJson.json())
  .then((usersCrawler) => {
    const { data } = usersCrawler;
    let result = [];
    data.map((user) => {
      result = add(dataJson, user);
    });
    console.log(result.length);
    let scrapeData = JSON.stringify({ dataJson: result });
    fs.writeFileSync("./src/backup/data/user2.json", scrapeData);
  })
  .catch((error) => console.log(error));
