import { NodePlopAPI } from 'plop';


export default function (plop: NodePlopAPI) {
  plop.setGenerator('Show README', {
    description: 'Show the content of README.md',
    actions: [
      () => {
        console.log(`
          No real generators available. \n
          To use docker image, mount your plopfile sources in /plop directory.`
        );
      }
    ]
  });
}
