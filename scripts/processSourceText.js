import fs from 'fs';
import path from 'path';


fs.readFile(path.resolve(`${__dirname}/../text/source.txt`), (err, data) => {
  const output = data
            .toString()
            .replace(/[.,\/#!$\?%\^&\*;:{}=_`~()]/g, ' ')
            .replace(/\r?\n|\r/g, ' ')
            .toLowerCase()
            .split(' ')
            .filter(v => v !== ' ')
            .filter(v => v !== '');

  fs.writeFile(path.resolve(`${__dirname}/../text/source.json`), JSON.stringify(output));
});
