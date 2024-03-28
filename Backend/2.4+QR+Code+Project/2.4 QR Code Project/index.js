/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Type your URL',
      name: 'url', // Added a name to reference the answer later
    }
  ])
  .then((answers) => {
    const qr_png = qr.image(answers.url, { type: 'png' }); // Use answers.url to access the user input URL
    qr_png.pipe(fs.createWriteStream('link.png')); // Use createWriteStream instead of readFile

    // Create a text file and save the user input
    fs.writeFile('link.txt', answers.url, (err) => {
      if (err) {
        console.error('Error writing to link.txt:', err);
      } else {
        console.log('URL saved to link.txt');
      }
    });
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

