const fs = require("fs");
const path = require("path");

const dirpath = path.join(__dirname, "files");
console.log(dirpath);
const filepath = `${dirpath}/myfile1.txt`;

// for (i = 1; i <= 5; i++) {
//   fs.writeFileSync(
//     path.join(`${dirpath}/myfile${i}.txt`),
//     "This is sample text file"
//   );
// }

// fs.readdir(dirpath, (err, files) => {
//   //   console.log(files);
//   files.forEach((item) => {
//     console.log(item);
//   });
// });

// fs.readFile(filepath, "utf8", (err, content) => {
//   console.log(content);
// });

// fs.appendFile(filepath, " here is appended text 8", (err) => {});
const filepath2 = `${dirpath}/myfile2.txt`;
const filepath3 = `${dirpath}/myfile3.txt`;

// fs.unlinkSync(filepath2);

fs.rename(filepath3, `${dirpath}/apple.txt`, (err) => {});
