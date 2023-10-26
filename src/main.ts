import { Header } from './components/header';

function main() {
  console.log('Loaded main');

  const appElement = document.querySelector<HTMLDivElement>('.container');
  if (appElement === null) return;

  const components = [new Header('.container')];

  console.log(components);
}

main();
