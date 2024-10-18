import { NodePlopAPI } from 'plop';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function (plop: NodePlopAPI) {
  console.log('Please create your plop');
  console.log('Plop instance: ', plop);

  plop.setGenerator('Show README', {
    description: 'Show the content of README.md',
    actions: [
      () => {
        const readmePath = path.resolve(__dirname, 'README.md');

        if (fs.existsSync(readmePath)) {
          const readmeContent = fs.readFileSync(readmePath, 'utf8');
          console.log('Content of README.md:\n');
          console.log(readmeContent);
        } else {
          console.log('README.md file not found!');
        }

        return 'README.md content displayed in console.';
      }
    ]
  });
}
