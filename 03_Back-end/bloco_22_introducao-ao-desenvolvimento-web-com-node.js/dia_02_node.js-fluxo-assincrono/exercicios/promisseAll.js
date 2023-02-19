const fs = require('fs').promises;

const data = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createFiles() {
  await Promise.all(data.map((item, index) => {
    return fs.writeFile(`./files${index + 1}.txt`, item);
  }));

  const readingFiles = await Promise.all(data.map((_item, index) => {
    return fs.readFile(`./files${index + 1}.txt`, 'utf-8');
  }));

  await fs.writeFile(`./fileAll.txt`, readingFiles.join(' '));
}

async function main() {
  try {
    await createFiles();
  } catch(error) {
    console.log(error);
  }
}

main();
