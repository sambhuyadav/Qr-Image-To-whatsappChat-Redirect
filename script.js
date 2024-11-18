import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const fixedURL = "https://wa.me/+919229597670";
inquirer.prompt = () => Promise.resolve({ URL: fixedURL });

inquirer
  .prompt([
    {
        "message":"Type in your message",
        "name":"URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });