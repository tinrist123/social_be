const fs = require("fs");

(async function () {
  let token =
    "sk_test_51J1adlINl5i8wLa7FQgwTiKknTIiwa8Q4VA4IzofSYQRIG6JP5YqGp8eYOH1WhNVNjW1snU9triVw8WeANpxoItm003okDJBcY";

  const stripe = require("stripe")(token);
  // file_1J1jjfINl5i8wLa7xWkZqs0X
  // const fp = fs.readFileSync("./CV_PhanThanhLong_final.pdf");
  // const upload = await stripe.files.create({
  //   file: {
  //     data: fp,
  //     name: "file.pdf",
  //     type: "application.octet-stream",
  //   },
  //   purpose: "dispute_evidence",
  // });

  const dispute = await stripe.disputes.update("{{DISPUTE_ID}}", {
    evidence: {
      receipt: "file_1J1jjfINl5i8wLa7xWkZqs0X",
    },
  });

  console.log(dispute);
})();
