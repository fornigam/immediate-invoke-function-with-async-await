const fs = require("fs");
const readOne = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${fileName}`, (err, res) => {
      if (err) {
        // throw new Error("Error occurred during file reading");
        console.error("Error occurred during file reading");
        reject(err);
      }
      console.log(`${fileName} one reading successfully`);
      resolve();
    });
  });
};

const one = async () => {
  console.log("one");
  await readOne("read1.txt");
};
const two = async () => {
  console.log("two");
  await readOne("read2.txt");
};
const three = async () => {
  console.log("three");
  await readOne("read3.txt");
};
const four = async () => {
  console.log("four");
  await readOne("read4.txt");
};

(async () => {
  await one();
  await two();
  await three();
  await four();
})();