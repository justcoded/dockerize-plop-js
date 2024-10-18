import { NodePlopAPI } from 'plop';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function (plop: NodePlopAPI) {
  plop.setGenerator('Show README', {
    description: 'Show the content of README.md',
    actions: [
      () => {
        const readmePath = path.join(__dirname, 'README.md');

        if (fs.existsSync(readmePath)) {
          const content = fs.readFileSync(readmePath, 'utf-8');
          console.log(content);
          return 'README.md content displayed in console.';
        } else {
          console.log(`
            No real generators available. \n
            To use docker image, mount your plopfile sources in /plop directory.`
          );
          return 'README.md file not found!';
        }
      }
    ]
  });
}
